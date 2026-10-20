// One-off: swaps the custom CSS classes for Tailwind utilities across all components.
import fs from "fs";
import path from "path";

const WRAP = "mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content";
const SLIDE = "relative top-0 min-h-svh motion-safe:md:[@media(min-height:781px)]:sticky";
const DARK = "[&_*:focus-visible]:outline-sand!";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith(".tsx") ? [p] : [];
  });
}

for (const file of walk("src")) {
  let t = fs.readFileSync(file, "utf8");
  t = t.replace(/\bwrap\b(?=[ "])/g, WRAP);
  t = t.replaceAll("h-header", "h-18 md:h-22");
  t = t.replaceAll("pt-[calc(var(--spacing-header)+2rem)]", "pt-[calc(4.5rem+2rem)] md:pt-[calc(5.5rem+2rem)]");
  t = t.replaceAll("md:py-[calc(var(--spacing-header)+1rem)]", "md:py-[calc(5.5rem+1rem)]");
  t = t.replaceAll("duration-(--motion-normal)", "duration-240").replaceAll("duration-(--motion-slow)", "duration-500");
  t = t.replace(/\bon-dark /g, DARK + " ");
  t = t.replace(/<(h[123]) className="/g, '<$1 className="font-display tracking-tight ');
  t = t.replace(/className="slide /g, `className="${SLIDE} `);
  t = t.replace(/className="(\S+ )?slide /g, `className="$1${SLIDE} `);
  t = t.replace(/<section id="(studio-coka|learn|impact|voice|next|about|contact)" className="/g, '<section id="$1" className="relative z-10 ');
  fs.writeFileSync(file, t);
}
