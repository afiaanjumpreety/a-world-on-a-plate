import { memo, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { select } from 'd3-selection';
import { zoom, zoomIdentity, type ZoomBehavior, type ZoomTransform } from 'd3-zoom';
import 'd3-transition';
import { MAP_W, useWorld, type CountryShape, type World } from '../lib/geo';
import type { LngLat } from '../data/types';

export interface MapPin {
  id: string;
  coords: LngLat;
  label?: string;
  color: string;
  kind: 'origin' | 'variant' | 'dot';
  dim?: boolean;
}

export interface MapArc {
  id: string;
  from: LngLat;
  to: LngLat;
  color: string;
  /** Seconds before the arc starts drawing. */
  delay?: number;
  dim?: boolean;
}

interface Props {
  ariaLabel: string;
  /** Country fill colours keyed by ISO numeric id. */
  fills?: Record<string, string>;
  /** Countries drawn with a hatched pattern (e.g. the origin), keyed by numeric id → colour. */
  hatch?: Record<string, string>;
  pins?: MapPin[];
  arcs?: MapArc[];
  /** Points to frame. Empty or omitted frames the whole world. */
  frame?: LngLat[];
  /** Upper bound on zoom when framing points (keeps context visible). */
  maxFrameZoom?: number;
  zoomable?: boolean;
  activePinId?: string | null;
  selectedNumeric?: string | null;
  labels?: 'all' | 'active' | 'none';
  /** Countries that react to hover/click. All, if omitted. */
  interactive?: Set<string>;
  tooltip?: (numeric: string, name: string) => ReactNode;
  onCountryClick?: (numeric: string, name: string) => void;
  onPinClick?: (id: string) => void;
  onPinHover?: (id: string | null) => void;
  children?: ReactNode;
  className?: string;
}

const PIN_R = { origin: 7, variant: 5, dot: 2.6 };
const MINI_SCALE = 2.4;

export function WorldMap(props: Props) {
  const world = useWorld();
  return (
    <div className={`map ${props.className ?? ''}`}>
      {world ? <MapInner world={world} {...props} /> : <MapSkeleton />}
      {props.children}
    </div>
  );
}

function MapSkeleton() {
  return (
    <div className="map-skeleton" aria-hidden="true">
      <span>Unfolding the map…</span>
    </div>
  );
}

function MapInner({
  world,
  ariaLabel,
  fills = {},
  hatch = {},
  pins = [],
  arcs = [],
  frame,
  maxFrameZoom = 6,
  zoomable = true,
  activePinId = null,
  selectedNumeric = null,
  labels = 'active',
  interactive,
  className,
  tooltip,
  onCountryClick,
  onPinClick,
  onPinHover,
}: Props & { world: World }) {
  const H = world.height;
  const scale = className?.includes('map-mini') ? MINI_SCALE : 1;
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState<ZoomTransform>(zoomIdentity);
  const [hover, setHover] = useState<{ numeric: string; name: string } | null>(null);

  // Zoom behaviour. Plain wheel scrolling passes through to the page; pinch
  // (ctrl+wheel on trackpads) and ⌘/ctrl+wheel zoom the map.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const z = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 40])
      .translateExtent([
        [0, 0],
        [MAP_W, H],
      ])
      .extent([
        [0, 0],
        [MAP_W, H],
      ])
      .filter((event: Event) => {
        if (!zoomable) return false;
        if (event.type === 'wheel') return (event as WheelEvent).ctrlKey || (event as WheelEvent).metaKey;
        return !(event as MouseEvent).button;
      })
      .on('zoom', (e) => setT(e.transform));
    select(svg).call(z);
    if (!zoomable) select(svg).on('dblclick.zoom', null);
    zoomRef.current = z;
    return () => {
      select(svg).on('.zoom', null);
    };
  }, [H, zoomable]);

  // Frame the requested points: instantly the first time, animated when they change.
  // (Keyed on the points, so StrictMode's double effect run doesn't animate.)
  const frameKey = JSON.stringify(frame ?? []);
  const lastFrame = useRef<string | null>(null);
  useEffect(() => {
    const svg = svgRef.current;
    const z = zoomRef.current;
    if (!svg || !z || lastFrame.current === frameKey) return;
    const target = frameTransform(world, frame ?? [], maxFrameZoom);
    const sel = select(svg);
    if (lastFrame.current === null) sel.call(z.transform, target);
    else sel.transition().duration(1100).call(z.transform, target);
    lastFrame.current = frameKey;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameKey, maxFrameZoom, world]);

  const zoomBy = (k: number) => {
    const svg = svgRef.current;
    if (svg && zoomRef.current) select(svg).transition().duration(350).call(zoomRef.current.scaleBy, k);
  };
  const reset = () => {
    const svg = svgRef.current;
    if (svg && zoomRef.current)
      select(svg)
        .transition()
        .duration(700)
        .call(zoomRef.current.transform, frameTransform(world, frame ?? [], maxFrameZoom));
  };

  // Tooltip follows the pointer without re-rendering the map.
  const onMove = (e: React.PointerEvent) => {
    const tip = tipRef.current;
    const wrap = wrapRef.current;
    if (!tip || !wrap) return;
    const r = wrap.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const flip = x > r.width * 0.62;
    tip.style.transform = `translate(${flip ? x - 14 : x + 14}px, ${y + 14}px) translateX(${flip ? '-100%' : '0'})`;
  };

  const enter = useCallback((numeric: string, name: string) => setHover({ numeric, name }), []);
  const leave = useCallback(() => setHover(null), []);
  const clickRef = useRef(onCountryClick);
  clickRef.current = onCountryClick;
  const click = useCallback((numeric: string, name: string) => clickRef.current?.(numeric, name), []);

  const screen = useCallback(
    (c: LngLat): [number, number] => {
      const [x, y] = world.project(c);
      return [t.x + t.k * x, t.y + t.k * y];
    },
    [world, t],
  );

  const placedPins = useMemo(() => pins.map((p) => ({ ...p, xy: screen(p.coords) })), [pins, screen]);
  const placedLabels = useMemo(
    () => layoutLabels(placedPins, labels, activePinId, H, scale),
    [placedPins, labels, activePinId, H, scale],
  );

  const tipContent = hover && tooltip ? tooltip(hover.numeric, hover.name) : null;

  return (
    <div className="map-stage" ref={wrapRef} onPointerMove={onMove} onPointerLeave={leave}>
      <svg
        ref={svgRef}
        className={`map-svg ${zoomable ? 'is-zoomable' : ''}`}
        viewBox={`0 0 ${MAP_W} ${H}`}
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          {Object.entries(hatch).map(([num, color]) => (
            <pattern
              key={num}
              id={`hatch-${num}`}
              width="5"
              height="5"
              patternUnits="userSpaceOnUse"
              patternTransform={`rotate(45) scale(${1 / t.k})`}
            >
              <rect width="5" height="5" fill={`color-mix(in oklab, ${color} 45%, var(--land))`} />
              <line x1="0" y1="0" x2="0" y2="5" stroke={color} strokeWidth="2.6" />
            </pattern>
          ))}
        </defs>

        <rect className="map-ocean" width={MAP_W} height={H} />
        <g transform={t.toString()}>
          <path className="map-graticule" d={world.graticule} />
          <path className="map-land-shadow" d={world.land} transform="translate(0.6 1.1)" />
          <CountryLayer
            shapes={world.shapes}
            fills={fills}
            hatch={hatch}
            interactive={interactive}
            selected={selectedNumeric}
            onEnter={enter}
            onLeave={leave}
            onClick={click}
          />
        </g>

        <g className="map-arcs">
          {arcs.map((a) => {
            const d = arcPath(screen(a.from), screen(a.to));
            if (!d) return null;
            return (
              <g key={a.id} className={a.dim ? 'is-dim' : ''} style={{ ['--d' as string]: `${a.delay ?? 0}s` }}>
                <path className="arc" d={d} pathLength={1} stroke={a.color} />
                <path className="arc-flow" d={d} stroke={a.color} />
              </g>
            );
          })}
        </g>

        <g className="map-pins">
          {placedPins.map((p, i) => {
            const r = PIN_R[p.kind] * scale * (p.id === activePinId ? 1.35 : 1);
            return (
              <g
                key={p.id}
                className={`pin pin-kind-${p.kind} ${p.id === activePinId ? 'is-active' : ''} ${p.dim ? 'is-dim' : ''}`}
                transform={`translate(${p.xy[0]} ${p.xy[1]})`}
                style={{ ['--d' as string]: `${0.15 + i * 0.06}s`, color: p.color }}
                role={onPinClick ? 'button' : undefined}
                tabIndex={onPinClick ? 0 : undefined}
                aria-label={p.label}
                onClick={() => onPinClick?.(p.id)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPinClick?.(p.id)}
                onPointerEnter={() => onPinHover?.(p.id)}
                onPointerLeave={() => onPinHover?.(null)}
                onFocus={() => onPinHover?.(p.id)}
                onBlur={() => onPinHover?.(null)}
              >
                {p.kind === 'origin' && <circle className="pin-pulse" r={r} />}
                <circle className="pin-hit" r={r + 6} />
                <circle className="pin-dot" r={r} />
                {p.kind === 'origin' && <circle className="pin-core" r={2.2} />}
              </g>
            );
          })}
        </g>

        <g className="map-labels" aria-hidden="true">
          {placedLabels.map((l) => (
            <text
              key={l.id}
              x={l.x}
              y={l.y}
              textAnchor={l.anchor}
              className={`map-label ${l.kind === 'origin' ? 'is-origin' : ''} ${l.active ? 'is-active' : ''}`}
            >
              {l.text}
            </text>
          ))}
        </g>
      </svg>

      {zoomable && (
        <div className="map-controls">
          <button type="button" onClick={() => zoomBy(1.6)} aria-label="Zoom in">
            +
          </button>
          <button type="button" onClick={() => zoomBy(1 / 1.6)} aria-label="Zoom out">
            −
          </button>
          <button type="button" onClick={reset} aria-label="Reset view" className="map-reset">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <ellipse cx="8" cy="8" rx="2.6" ry="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M2 8h12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      )}

      <div ref={tipRef} className={`map-tip ${tipContent ? 'is-visible' : ''}`} role="status" aria-live="polite">
        {tipContent}
      </div>
    </div>
  );
}

/* Country paths are memoised: hovering and zooming must not re-render 240 paths. */
const CountryLayer = memo(function CountryLayer({
  shapes,
  fills,
  hatch,
  interactive,
  selected,
  onEnter,
  onLeave,
  onClick,
}: {
  shapes: CountryShape[];
  fills: Record<string, string>;
  hatch: Record<string, string>;
  interactive?: Set<string>;
  selected: string | null;
  onEnter: (numeric: string, name: string) => void;
  onLeave: () => void;
  onClick: (numeric: string, name: string) => void;
}) {
  return (
    <g className="map-countries">
      {shapes.map((s) => {
        const live = !interactive || interactive.has(s.numeric);
        const fill = hatch[s.numeric] ? `url(#hatch-${s.numeric})` : fills[s.numeric];
        return (
          <path
            key={s.key}
            d={s.d}
            className={`country ${fill ? 'has-fill' : ''} ${live ? 'is-live' : ''} ${selected === s.numeric ? 'is-selected' : ''}`}
            style={fill ? ({ ['--fill' as string]: fill } as React.CSSProperties) : undefined}
            onPointerEnter={live ? () => onEnter(s.numeric, s.name) : undefined}
            onPointerLeave={live ? onLeave : undefined}
            onClick={live ? () => onClick(s.numeric, s.name) : undefined}
          />
        );
      })}
    </g>
  );
});

function frameTransform(world: World, points: LngLat[], maxK: number): ZoomTransform {
  if (points.length === 0) return zoomIdentity;
  const xy = points.map(world.project);
  const xs = xy.map((p) => p[0]);
  const ys = xy.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  // Generous padding so arcs and labels stay inside the frame.
  const bw = Math.max(x1 - x0, 60) * 1.5 + 80;
  const bh = Math.max(y1 - y0, 40) * 1.5 + 80;
  const k = Math.max(1, Math.min(maxK, MAP_W / bw, world.height / bh));
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  let tx = MAP_W / 2 - k * cx;
  let ty = world.height / 2 - k * cy;
  tx = Math.min(0, Math.max(MAP_W - MAP_W * k, tx));
  ty = Math.min(0, Math.max(world.height - world.height * k, ty));
  return zoomIdentity.translate(tx, ty).scale(k);
}

/** A gentle arc between two screen points, bowing upward like a flight path. */
function arcPath([x0, y0]: [number, number], [x1, y1]: [number, number]): string | null {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const dist = Math.hypot(dx, dy);
  if (dist < 2) return null;
  const mx = (x0 + x1) / 2;
  const my = (y0 + y1) / 2;
  // Perpendicular, flipped so the bow points up the screen.
  let nx = -dy / dist;
  let ny = dx / dist;
  if (ny > 0) {
    nx = -nx;
    ny = -ny;
  }
  const lift = Math.min(dist * 0.28, 140);
  return `M${x0.toFixed(1)},${y0.toFixed(1)} Q${(mx + nx * lift).toFixed(1)},${(my + ny * lift).toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
}

interface PlacedLabel {
  id: string;
  text: string;
  x: number;
  y: number;
  anchor: 'start' | 'end' | 'middle';
  kind: MapPin['kind'];
  active: boolean;
}

/** Greedy label placement: try right, left, above, below; skip labels that collide. */
function layoutLabels(
  pins: (MapPin & { xy: [number, number] })[],
  mode: Props['labels'],
  activeId: string | null,
  H: number,
  s = 1,
): PlacedLabel[] {
  if (mode === 'none') return [];
  const boxes: [number, number, number, number][] = pins.map((p) => [p.xy[0] - 6, p.xy[1] - 6, p.xy[0] + 6, p.xy[1] + 6]);
  const out: PlacedLabel[] = [];
  const order = [...pins].sort((a, b) => rank(b) - rank(a));
  function rank(p: MapPin) {
    return (p.id === activeId ? 10 : 0) + (p.kind === 'origin' ? 5 : 0);
  }
  for (const p of order) {
    if (!p.label) continue;
    const active = p.id === activeId;
    if (mode === 'active' && !active && p.kind !== 'origin') continue;
    const w = (p.label.length * (p.kind === 'origin' ? 7.2 : 6.4) + 6) * s;
    const h = 14 * s;
    const [x, y] = p.xy;
    const g = 10 * s;
    const tries: [number, number, PlacedLabel['anchor'], [number, number, number, number]][] = [
      [x + g, y + 4 * s, 'start', [x + g - 2, y - 8 * s, x + g + w, y + 6 * s]],
      [x - g, y + 4 * s, 'end', [x - g - w, y - 8 * s, x - g + 2, y + 6 * s]],
      [x, y - 12 * s, 'middle', [x - w / 2, y - 24 * s, x + w / 2, y - 10 * s]],
      [x, y + 20 * s, 'middle', [x - w / 2, y + 8 * s, x + w / 2, y + 8 * s + h]],
    ];
    for (const [lx, ly, anchor, box] of tries) {
      const inside = box[0] > 2 && box[2] < MAP_W - 2 && box[1] > 2 && box[3] < H - 2;
      const hits = boxes.some((b) => overlap(b, box) && !(b[0] === x - 6 && b[1] === y - 6));
      if (inside && (!hits || active)) {
        out.push({ id: p.id, text: p.label, x: lx, y: ly, anchor, kind: p.kind, active });
        boxes.push(box);
        break;
      }
    }
  }
  return out;
}

function overlap(a: number[], b: number[]) {
  return a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1];
}
