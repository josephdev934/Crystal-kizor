// Thin line-art icons for the six passive-cooling principles (same order as content.principles.items)
const paths = [
  // Thick walls
  "M6 52H58 M8 14H56 M8 14V52 M20 14V52 M44 14V52 M56 14V52 M8 26L20 16 M8 38L20 28 M8 50L20 40 M44 26L56 16 M44 38L56 28 M44 50L56 40",
  // Large openings
  "M8 12H56 M8 12V52 M56 12V52 M8 52H56 M16 22H48V52 M32 22V52",
  // High-level openings
  "M8 12H56 M8 12V52 M56 12V52 M8 52H56 M14 17H26V24H14Z M38 17H50V24H38Z M32 46V32 M27 37L32 32L37 37",
  // Deep overhangs
  "M4 22H60 M14 22V52 M50 22V52 M10 52H54 M54 6A4 4 0 1 1 53.99 6 M50 12L36 30",
  // Indoor-outdoor living
  "M6 52H58 M6 18H32 M6 18V52 M32 18V52 M40 40A10 10 0 1 1 40.01 40 M50 36V52 M20 38H44 M39 33L44 38L39 43",
  // Trees as part of the design
  "M22 16A14 14 0 1 1 21.99 16 M22 38V54 M16 54H28 M40 54V32L50 22L60 32V54 M36 54H62",
];

export default function PrincipleIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-16 w-16">
      <path d={paths[index]} />
    </svg>
  );
}
