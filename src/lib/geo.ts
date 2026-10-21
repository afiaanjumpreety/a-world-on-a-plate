import { geoEqualEarth, geoGraticule10, geoPath, type GeoProjection } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import type { GeometryCollection, Topology } from 'topojson-specification';
import { useEffect, useState } from 'react';
import worldUrl from 'world-atlas/countries-50m.json?url';
import type { LngLat } from '../data/types';

/** Width of the map's coordinate space. Height follows from the land extent. */
export const MAP_W = 1000;
const PAD = 8;
const ANTARCTICA = '010';

export interface CountryShape {
  key: string;
  numeric: string;
  name: string;
  d: string;
}

export interface World {
  shapes: CountryShape[];
  land: string;
  graticule: string;
  sphere: string;
  height: number;
  projection: GeoProjection;
  project: (c: LngLat) => [number, number];
}

let worldPromise: Promise<World> | null = null;
let worldCache: World | null = null;

function build(topo: Topology): World {
  const countries = feature(
    topo,
    topo.objects.countries as GeometryCollection<{ name: string }>,
  ) as FeatureCollection<Geometry, { name: string }>;
  const features = countries.features.filter((f) => String(f.id) !== ANTARCTICA);
  const collection: FeatureCollection = { type: 'FeatureCollection', features };

  const projection = geoEqualEarth().fitWidth(MAP_W - PAD * 2, collection);
  const [tx, ty] = projection.translate();
  projection.translate([tx + PAD, ty + PAD]);
  const path = geoPath(projection);
  const [, [, y1]] = path.bounds(collection);

  const landTopo = topo.objects.land as GeometryCollection;
  const land = feature(topo, landTopo) as Feature | FeatureCollection;

  return {
    shapes: features.map((f, i) => ({
      key: `${f.id ?? 'x'}-${i}`,
      numeric: f.id === undefined ? '' : String(f.id),
      name: f.properties?.name ?? '',
      d: path(f) ?? '',
    })),
    land: path(land) ?? '',
    graticule: path(geoGraticule10()) ?? '',
    sphere: path({ type: 'Sphere' }) ?? '',
    height: Math.ceil(y1 + PAD),
    projection,
    project: (c) => projection(c) ?? [0, 0],
  };
}

export function loadWorld(): Promise<World> {
  worldPromise ??= fetch(worldUrl)
    .then((r) => r.json() as Promise<Topology>)
    .then((topo) => (worldCache = build(topo)));
  return worldPromise;
}

/** The projected world, or null while the geometry is loading. */
export function useWorld(): World | null {
  const [world, setWorld] = useState<World | null>(worldCache);
  useEffect(() => {
    if (world) return;
    let live = true;
    loadWorld().then((w) => live && setWorld(w));
    return () => {
      live = false;
    };
  }, [world]);
  return world;
}
