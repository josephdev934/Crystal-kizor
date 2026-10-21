"use client";

import { useState } from "react";
import type { Project } from "@/content/content";
import ImageFrame from "@/components/ui/ImageFrame";
import Lightbox from "./Lightbox";

// Scroll animation only with motion allowed and in browsers that support it. Written out in full so Tailwind finds the classes.
const rise = {
  a: "motion-safe:supports-[animation-timeline:view()]:animate-rise-a",
  b: "motion-safe:supports-[animation-timeline:view()]:animate-rise-b",
};

// In the style of the 21st.dev "Portfolio Gallery", in plain Tailwind: a row of overlapping photo cards.
// Hovering or focusing a card lifts it above its neighbours. The row scrolls sideways when it is wider than the screen.
// Clicking a card opens that project's lightbox at that photo. Projects with no photos have no cards.
export default function PortfolioGallery({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<{ project: Project; photo: number } | null>(null);

  const cards = projects.flatMap((project) => project.images.map((image, photo) => ({ project, image, photo })));

  return (
    <>
      {/* The timeline is named out here, not on the row: the row scrolls sideways, so it would be the wrong scroller to follow */}
      <div style={{ viewTimelineName: "--portfolio-row" }}>
        <div role="region" aria-label="Studio COKA project photos" tabIndex={0} className="flex overflow-x-auto px-2 pt-12 pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map(({ project, image, photo }, i) => (
            // This wrapper carries the scroll animation so it never fights the hover lift on the button
            <div
              key={image.src}
              className={`-ml-10 shrink-0 first:ml-0 ${i % 2 ? "mt-10" : ""} ${i % 2 ? rise.b : rise.a}`}
              style={{ animationTimeline: "--portfolio-row", animationRange: "entry 0% entry 90%" }}
            >
              <button
                type="button"
                onClick={() => setOpen({ project, photo })}
                aria-label={`Open ${project.name} photo ${photo + 1}`}
                className="group relative z-0 block w-56 text-left transition-transform duration-500 ease-motion hover:z-10 hover:-translate-y-8 focus-visible:z-10 focus-visible:-translate-y-8 motion-reduce:transition-none md:w-72"
              >
                <ImageFrame image={image} sizes="(min-width: 768px) 288px, 224px" className="aspect-[3/4] w-full border border-canvas shadow-image" />
                <span className="absolute inset-x-0 bottom-0 rounded-b-lg bg-linear-to-t from-stone-dark/80 to-transparent p-4 pt-10 text-small font-semibold text-white-warm opacity-0 transition-opacity duration-240 ease-motion group-hover:opacity-100 group-focus-visible:opacity-100">
                  {project.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          key={`${open.project.name}-${open.photo}`}
          title={open.project.name}
          images={open.project.images}
          startIndex={open.photo}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
