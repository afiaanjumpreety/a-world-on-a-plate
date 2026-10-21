import type { Motif as MotifId } from '../data/types';

/* Hand-drawn style line art, one per dish family. 64×64, stroked in currentColor. */

const SPIRAL =
  'M32 32 a2 2 0 0 1 4 0 a4 4 0 0 1 -8 0 a6 6 0 0 1 12 0 a8 8 0 0 1 -16 0 a10 10 0 0 1 20 0 a12 12 0 0 1 -24 0 a14 14 0 0 1 28 0';

function crimp(cx: number, cy: number, r: number, from: number, to: number, n: number) {
  // Little rope twists along an arc — the empanada's repulgue.
  let d = '';
  for (let i = 0; i <= n; i++) {
    const a = from + ((to - from) * i) / n;
    const x0 = cx + Math.cos(a) * (r - 3.5);
    const y0 = cy + Math.sin(a) * (r - 3.5);
    const x1 = cx + Math.cos(a + 0.09) * (r + 0.5);
    const y1 = cy + Math.sin(a + 0.09) * (r + 0.5);
    d += `M${x0.toFixed(1)} ${y0.toFixed(1)} L${x1.toFixed(1)} ${y1.toFixed(1)} `;
  }
  return d;
}

const ART: Record<MotifId, React.ReactNode> = {
  flatbread: (
    <>
      <path d="M32 7c9 0 17 4 21 11 4 6 4 14 1 20-3 8-11 13-21 13-10 1-19-4-23-12-3-7-3-15 1-21 4-7 12-11 21-11z" />
      <path d={SPIRAL} strokeWidth="1.3" />
      <path d="M14 22l2 1M50 41l-2-1M20 47l1-2M44 14l-1 2" strokeWidth="1.2" />
    </>
  ),
  samosa: (
    <>
      <path d="M32 9c1 0 2 .6 2.6 1.6l19 36c1 2-.4 4.4-2.7 4.4H13.1c-2.3 0-3.7-2.4-2.7-4.4l19-36C30 9.6 31 9 32 9z" />
      <path d="M32 9.5 29 51" />
      <path d="M16 47.5l1.5 2.5M21 47.5l1.5 2.5M37 47.5l1.5 2.5M42 47.5l1.5 2.5M47 47.5l1.3 2.3" strokeWidth="1.2" />
      <path d="M38 27c2 2 3 4 3 7M24 31c-1 2-1.4 4-1 6" strokeWidth="1.1" opacity=".7" />
    </>
  ),
  dumpling: (
    <>
      <path d="M8 41c1-11 11-20 24-20s23 9 24 20c-6 4-15 6-24 6S14 45 8 41z" />
      <path d="M20 25c1 4 0 8-2 11M26 22c1 4 1 9-1 13M32 21v14M38 22c-1 4-1 9 1 13M44 25c-1 4 0 8 2 11" strokeWidth="1.3" />
      <path d="M12 52c6 2 13 3 20 3s14-1 20-3" strokeWidth="1.2" opacity=".6" />
    </>
  ),
  noodles: (
    <>
      <path d="M9 34h46c-1 10-10 17-23 17S10 44 9 34z" />
      <path d="M25 51l1 4h12l1-4" />
      <path d="M27 34c-2-6 2-9 0-15M32 34c2-6-2-10 0-16M37 34c-2-6 2-9 0-14" strokeWidth="1.3" />
      <path d="M17 11l33 14M19 7l33 15" />
      <path d="M15 34c3-2 6-2 8 0M41 34c3-2 6-2 8 0" strokeWidth="1.1" opacity=".7" />
    </>
  ),
  rice: (
    <>
      <path d="M13 30c-1 12 6 21 19 21s20-9 19-21" />
      <path d="M10 30h44" />
      <path d="M15 30c3-8 9-12 17-12s14 4 17 12" />
      <circle cx="32" cy="15" r="2.4" />
      <path d="M17 37h1M22 39h1M27 40h1M32 40h1M37 40h1M42 39h1M47 37h1" strokeWidth="2" />
      <path d="M24 12c-1-2 0-4 1-5M40 12c1-2 0-4-1-5" strokeWidth="1.1" opacity=".6" />
    </>
  ),
  meatball: (
    <>
      <path d="M6 50 58 16" />
      <circle cx="18" cy="42" r="7.5" />
      <circle cx="32" cy="33" r="7.5" />
      <circle cx="46" cy="24" r="7.5" />
      <path d="M15 40l1 1M20 44l1 0M30 31l1 1M34 35l1-1M44 22l1 1M48 26l1-1" strokeWidth="1.6" />
    </>
  ),
  spit: (
    <>
      <path d="M32 4v56" />
      <path d="M20 13h24l-3.5 37h-17z" />
      <path d="M21 20h22M21.6 27h20.8M22.3 34h19.4M23 41h18" strokeWidth="1.2" />
      <path d="M22 54h20M26 13l1-3h10l1 3" />
    </>
  ),
  halfmoon: (
    <>
      <path d="M8 43a24 24 0 0 1 48 0z" />
      <path d={crimp(32, 43, 24, Math.PI * 1.04, Math.PI * 1.96, 13)} strokeWidth="1.2" />
      <path d="M26 33l3 1M34 30l3 1" strokeWidth="1.2" opacity=".7" />
      <path d="M10 51c7 2 14 3 22 3s15-1 22-3" strokeWidth="1.2" opacity=".6" />
    </>
  ),
  pudding: (
    <>
      <path d="M9 30h46c-1 12-10 20-23 20S10 42 9 30z" />
      <path d="M9 30c7 4 15 5 23 5s16-1 23-5" />
      <path d="M22 31l2 1M30 32l3 0M39 31l2-1" strokeWidth="2" />
      <path d="M44 9l-7 20" />
      <ellipse cx="45.5" cy="8" rx="2.6" ry="4" transform="rotate(20 45.5 8)" />
      <path d="M25 50l1 4h12l1-4" />
    </>
  ),
  spiral: (
    <>
      <path d={SPIRAL} strokeWidth="2.6" />
      <path d="M46 34c4 2 6 6 4 10M18 30c-4-1-7 2-7 6" strokeWidth="2.2" />
      <path d="M30 52v3M38 50v2" strokeWidth="1.4" opacity=".7" />
    </>
  ),
  teacup: (
    <>
      <path d="M13 27h34v7c0 9-7 15-17 15s-17-6-17-15z" />
      <path d="M47 30c5 0 7 3 7 6s-3 6-8 5" />
      <path d="M7 53c7 3 15 4 23 4s16-1 23-4" />
      <path d="M22 21c-3-3-3-6 0-9s3-6 0-9M31 21c-3-3-3-6 0-9s3-6 0-9" strokeWidth="1.3" />
    </>
  ),
  flan: (
    <>
      <path d="M17 47l4-21h22l4 21z" />
      <path d="M21 26c3 2 7 3 11 3s8-1 11-3" />
      <path d="M22 28c0 4 1 6 2 6s1-3 1-5M30 29c0 5 1 7 2 7s1-4 1-7M38 29c0 3 1 5 2 5s1-2 1-4" strokeWidth="1.3" />
      <path d="M6 50c8 4 17 5 26 5s18-1 26-5" />
    </>
  ),
};

export function Motif({ id, size = 64, className }: { id: MotifId; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ART[id]}
    </svg>
  );
}

type RimStyle = 'dots' | 'dashes' | 'scallop' | 'double';
const RIMS: RimStyle[] = ['dots', 'scallop', 'dashes', 'double'];

/** A ceramic plate with a patterned rim, the family motif in the middle. */
export function Plate({
  motif,
  color,
  size = 160,
  pattern = 0,
  className = '',
}: {
  motif: MotifId;
  color: string;
  size?: number;
  pattern?: number;
  className?: string;
}) {
  const rim = RIMS[pattern % RIMS.length];
  const ticks = Array.from({ length: 36 }, (_, i) => (i / 36) * Math.PI * 2);
  return (
    <div className={`plate ${className}`} style={{ width: size, height: size, ['--c' as string]: color }}>
      <svg viewBox="0 0 100 100" className="plate-svg" aria-hidden="true">
        <circle cx="50" cy="50" r="48" className="plate-base" />
        <circle cx="50" cy="50" r="34" className="plate-well" />
        <g className="plate-rim">
          {rim === 'dots' && ticks.map((a, i) => <circle key={i} cx={50 + Math.cos(a) * 41} cy={50 + Math.sin(a) * 41} r={1.1} />)}
          {rim === 'dashes' &&
            ticks.map((a, i) => (
              <line key={i} x1={50 + Math.cos(a) * 38.5} y1={50 + Math.sin(a) * 38.5} x2={50 + Math.cos(a) * 44} y2={50 + Math.sin(a) * 44} />
            ))}
          {rim === 'scallop' && (
            <path
              d={ticks
                .map((a, i) => {
                  const b = a + Math.PI / 36;
                  const p = (r: number, t: number) => `${(50 + Math.cos(t) * r).toFixed(2)} ${(50 + Math.sin(t) * r).toFixed(2)}`;
                  return `${i === 0 ? 'M' : 'L'}${p(39, a)} Q${p(44.5, b)} ${p(39, a + Math.PI / 18)}`;
                })
                .join(' ')}
              fill="none"
            />
          )}
          {rim === 'double' && (
            <>
              <circle cx="50" cy="50" r="44" fill="none" />
              <circle cx="50" cy="50" r="38.5" fill="none" />
            </>
          )}
        </g>
      </svg>
      <div className="plate-motif">
        <Motif id={motif} size={size * 0.46} />
      </div>
    </div>
  );
}
