import Image from "next/image";
import type { Img } from "@/content/content";

const COLUMNS = 4;

// Only on desktop, with motion allowed, in browsers that support scroll-driven animation.
// Written out in full so Tailwind can find every class.
const tall = "md:motion-safe:supports-[animation-timeline:view()]:h-[300svh]";
const stage =
  "md:motion-safe:supports-[animation-timeline:view()]:sticky md:motion-safe:supports-[animation-timeline:view()]:top-0 md:motion-safe:supports-[animation-timeline:view()]:flex md:motion-safe:supports-[animation-timeline:view()]:h-svh md:motion-safe:supports-[animation-timeline:view()]:items-center md:motion-safe:supports-[animation-timeline:view()]:justify-center md:motion-safe:supports-[animation-timeline:view()]:overflow-hidden md:motion-safe:supports-[animation-timeline:view()]:perspective-[1000px]";
const matrix =
  "md:motion-safe:supports-[animation-timeline:view()]:flex md:motion-safe:supports-[animation-timeline:view()]:h-[150svh] md:motion-safe:supports-[animation-timeline:view()]:w-[120vw] md:motion-safe:supports-[animation-timeline:view()]:shrink-0 md:motion-safe:supports-[animation-timeline:view()]:items-center md:motion-safe:supports-[animation-timeline:view()]:justify-center md:motion-safe:supports-[animation-timeline:view()]:transform-3d md:motion-safe:supports-[animation-timeline:view()]:animate-matrix";
const column = "md:motion-safe:supports-[animation-timeline:view()]:w-[22vw] md:motion-safe:supports-[animation-timeline:view()]:min-w-50";
const slideUp = "md:motion-safe:supports-[animation-timeline:view()]:animate-col-up";
const slideDown = "md:motion-safe:supports-[animation-timeline:view()]:animate-col-down";

// Photo grid in the style of the 21st.dev "3D Parallax Unfurling Gallery", in plain CSS (no library, no JS).
// While the section is on screen the stage stays pinned and the scroll drives two things:
//  1. The whole grid starts tilted back in 3D and swings flat ("unfurls").
//  2. Each column slides up or down at its own pace (parallax).
// Both use transform only. Phones, reduced motion and older browsers get a plain still grid.
// overflow-hidden is on the pinned stage only, never on an ancestor of it.
export default function UnfurlGallery({ images }: { images: Img[] }) {
  // deal the photos out to the columns like cards: 1st, 2nd, 3rd, 4th, 1st again ...
  const columns = Array.from({ length: COLUMNS }, (_, c) => images.filter((_, i) => i % COLUMNS === c));
  const slide = [slideUp, slideDown, slideUp, slideDown];
  // the timeline runs while the stage is pinned: it starts when the top of the track reaches the top of the screen
  const range = { animationTimeline: "--unfurl-track", animationRange: "cover 25% cover 75%" };

  return (
    <div className={tall} style={{ viewTimelineName: "--unfurl-track" }}>
      <div className={stage}>
        <div className={`grid grid-cols-4 items-start gap-3 md:gap-6 ${matrix}`} style={range}>
          {columns.map((items, c) => (
            <div key={c} className={`flex flex-col gap-3 md:gap-6 ${column} ${slide[c]}`} style={range}>
              {items.map((image) => (
                <div key={image.src} className="relative aspect-3/4 overflow-hidden rounded-lg bg-surface-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 22vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
