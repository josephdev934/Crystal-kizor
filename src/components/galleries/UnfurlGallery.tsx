import Image from "next/image";
import type { Img } from "@/content/content";

const COLUMNS = 3;

// Only on desktop, with motion allowed, in browsers that support scroll-driven animation.
// Written out in full so Tailwind can find every class.
const driftUp = "md:motion-safe:supports-[animation-timeline:view()]:animate-drift-up";
const driftDown = "md:motion-safe:supports-[animation-timeline:view()]:animate-drift-down";
const unfurl = "md:motion-safe:supports-[animation-timeline:view()]:animate-unfurl";

// Photo grid in the style of the 21st.dev "3D Parallax Unfurling Gallery", in plain CSS (no library, no JS).
// Two scroll-driven effects, both opacity and transform only:
//  1. Each column drifts up or down at its own speed, following the grid's view() timeline.
//  2. Each tile tips up from a slight 3D tilt ("unfurls") as it enters the screen.
// Phones, reduced motion and older browsers get a plain still grid. overflow-hidden is on each tile only.
export default function UnfurlGallery({ images }: { images: Img[] }) {
  // deal the photos out to the columns like cards: 1st, 2nd, 3rd, 1st again ...
  const columns = Array.from({ length: COLUMNS }, (_, c) => images.filter((_, i) => i % COLUMNS === c));
  const drift = [driftUp, driftDown, driftUp];

  return (
    <div className="grid grid-cols-3 items-start gap-3 md:gap-6" style={{ viewTimelineName: "--unfurl-grid" }}>
      {columns.map((column, c) => (
        <div
          key={c}
          className={`flex flex-col gap-3 md:gap-6 ${drift[c]} ${c === 1 ? "md:pt-24" : ""}`}
          style={{ animationTimeline: "--unfurl-grid" }}
        >
          {column.map((image) => (
            <div
              key={image.src}
              className={`overflow-hidden rounded-lg ${unfurl}`}
              style={{ animationTimeline: "view()", animationRange: "entry 0% entry 100%" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 768px) 30vw, 33vw"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
