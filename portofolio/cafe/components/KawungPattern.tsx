"use client";

/**
 * KawungPattern
 * ---------------
 * "Kawung" is a classic Javanese batik motif: four petal-like ovals meeting
 * around a small center point, traditionally read as a stylised cross-section
 * of the aren (sugar palm) fruit — the very tree that gives the shop's
 * signature "es kopi susu gula aren" its palm sugar. It's the one motif this
 * brand is quite literally named after, so it's used here as the page's
 * signature visual thread rather than a generic decorative shape: a faint
 * field behind the hero, and a thin repeating strip marking section changes.
 *
 * Rendered as a tileable SVG <pattern> so it can be reused at any size
 * without shipping a raster asset.
 */

type KawungPatternProps = {
  id?: string;
  className?: string;
  color?: string;
  opacity?: number;
  tile?: number;
};

export function KawungTile({
  id = "kawung-tile",
  color = "#C6A15B",
  opacity = 1,
  tile = 100,
}: KawungPatternProps) {
  const c = tile / 2;
  const petal = tile * 0.16;
  const reach = tile * 0.28;

  return (
    <pattern
      id={id}
      width={tile}
      height={tile}
      patternUnits="userSpaceOnUse"
    >
      <g fill="none" stroke={color} strokeWidth={tile * 0.02} opacity={opacity}>
        {/* top / bottom petals */}
        <ellipse cx={c} cy={c - reach} rx={petal} ry={reach * 0.72} />
        <ellipse cx={c} cy={c + reach} rx={petal} ry={reach * 0.72} />
        {/* left / right petals */}
        <ellipse cx={c - reach} cy={c} rx={reach * 0.72} ry={petal} />
        <ellipse cx={c + reach} cy={c} rx={reach * 0.72} ry={petal} />
        {/* center point */}
        <circle cx={c} cy={c} r={tile * 0.045} fill={color} stroke="none" />
      </g>
    </pattern>
  );
}

/** Full-bleed ambient field, used behind the hero. */
export default function KawungPattern({
  id = "kawung-field",
  className = "",
  color = "#C6A15B",
  opacity = 0.08,
  tile = 110,
}: KawungPatternProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <KawungTile id={id} color={color} opacity={opacity} tile={tile} />
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Slim repeating strip, used as a section divider. */
export function KawungDivider({
  className = "",
  color = "#C6A15B",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`relative h-10 w-full overflow-hidden ${className}`}>
      <svg width="100%" height="100%" aria-hidden="true">
        <defs>
          <KawungTile id="kawung-divider" color={color} opacity={0.35} tile={56} />
        </defs>
        <rect width="100%" height="100%" fill="url(#kawung-divider)" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal" />
    </div>
  );
}
