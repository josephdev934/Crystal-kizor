import Image from "next/image";
import type { Img } from "@/content/content";

// Small masonry: CSS columns let each photo keep its own height. Each photo is a button.
export default function MasonryGrid({ images, onSelect }: { images: Img[]; onSelect: (index: number) => void }) {
  return (
    <ul className="m-0 columns-2 list-none gap-3 p-0 md:columns-3">
      {images.map((image, i) => (
        <li key={image.src} className="mb-3 break-inside-avoid">
          <button type="button" onClick={() => onSelect(i)} className="block w-full overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 768px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-500 ease-motion hover:scale-[1.03]"
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
