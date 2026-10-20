"use client";

import { useState } from "react";
import type { Project } from "@/content/content";
import ImageFrame from "@/components/ui/ImageFrame";
import Todo from "@/components/ui/Todo";
import Lightbox from "./Lightbox";

const pad = (n: number) => String(n).padStart(2, "0");

// One project at a time: a dominant photo, two smaller previews, and the project details.
// Clicking a photo opens the lightbox. Left/right arrows change project.
export default function ProjectSlider({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null | "grid">(null); // photo index, "grid", or closed
  const project = projects[current];
  const [main, previewA, previewB] = project.images;

  const go = (direction: 1 | -1) => setCurrent((i) => (i + direction + projects.length) % projects.length);
  const open = (photo: number | "grid") => project.images.length > 0 && setLightbox(photo);

  const arrow = "min-h-12 min-w-12 rounded-md border border-ink text-xl transition-colors duration-240 ease-motion hover:bg-ink hover:text-white-warm";

  const photoButton = (photo: number, label: string, children: React.ReactNode, className = "") => (
    <button type="button" onClick={() => open(photo)} aria-label={label} className={`block w-full text-left ${className}`}>
      {children}
    </button>
  );

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Studio COKA projects"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-8">
          {main ? (
            photoButton(
              0,
              `Open ${project.name} photo gallery`,
              <ImageFrame image={main} sizes="(min-width: 1024px) 60vw, 100vw" className="aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-[4/3.4]" />,
            )
          ) : (
            <ImageFrame placeholder={`TODO: photos of ${project.name}`} className="aspect-[4/5] w-full rounded-lg sm:aspect-[4/3] lg:aspect-[4/3.4]" />
          )}
        </div>

        {previewA && (
          <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1 lg:gap-6 lg:pt-16">
            {photoButton(1, `Open ${project.name} photo 2`, <ImageFrame image={previewA} sizes="(min-width: 1024px) 30vw, 50vw" className="aspect-[3/4] w-full" />)}
            {previewB &&
              photoButton(2, `Open ${project.name} photo 3`, <ImageFrame image={previewB} sizes="(min-width: 1024px) 30vw, 50vw" className="aspect-[3/4] w-full lg:translate-x-8" />)}
          </div>
        )}
      </div>

      {/* Details: name, place, counter and controls. aria-live announces the change. */}
      <div className="mt-8 grid gap-6 border-t border-border pt-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="m-0 text-label font-semibold tracking-label">
            {pad(current + 1)} ——— {pad(projects.length)}
          </p>
          <div className="mt-6 flex gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous project" className={arrow}>
              ←
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next project" className={arrow}>
              →
            </button>
            {project.images.length > 1 && (
              <button
                type="button"
                onClick={() => open("grid")}
                className="min-h-12 rounded-md border border-ink px-5 text-label font-semibold uppercase tracking-label transition-colors duration-240 ease-motion hover:bg-ink hover:text-white-warm"
              >
                All {project.images.length} photos
              </button>
            )}
          </div>
        </div>

        <div aria-live="polite" className="md:col-span-7">
          <h3 className="font-display tracking-tight text-h3">{project.name}</h3>
          <p className="mt-2 text-small font-semibold uppercase tracking-label">
            {project.location}
            {project.status ? ` · ${project.status}` : ""}
          </p>
          <p className="mt-4 max-w-reading text-body-lg">{project.description}</p>
          {project.todo && (
            <p className="mt-4">
              <Todo>{project.todo}</Todo>
            </p>
          )}
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          key={project.name}
          title={project.name}
          images={project.images}
          startIndex={lightbox === "grid" ? null : lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
