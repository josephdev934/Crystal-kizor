"use client";

import { useState } from "react";
import type { Img } from "@/content/content";
import ImageFrame from "@/components/ui/ImageFrame";

// One large photo with a thumbnail row. Clicking a thumbnail swaps the large photo.
export default function MediaFeature({ media }: { media: Img[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ImageFrame image={media[active]} sizes="(min-width: 1024px) 60vw, 100vw" className="aspect-[4/3] w-full rounded-xl" />
      <ul className="m-0 mt-3 grid list-none grid-cols-4 gap-3 p-0">
        {media.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1} of ${media.length}`}
              aria-pressed={i === active}
              className={`block w-full rounded-lg border-2 transition-opacity duration-240 ease-motion ${
                i === active ? "border-sand" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <ImageFrame image={{ ...image, alt: "" }} sizes="15vw" className="aspect-[4/3] w-full" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
