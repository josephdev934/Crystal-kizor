import type { Img } from "@/content/content";
import ImageFrame from "@/components/ui/ImageFrame";
import Reveal from "@/components/ui/Reveal";

// Product grid: every tile is a 3:4 portrait on a warm-neutral panel, so each piece sits on the same ground.
// No product names, prices or captions: the photos speak. Until photos are supplied, labelled placeholders show.
export default function ProductGrid({ images, placeholder }: { images: Img[]; placeholder: string }) {
  const tile = "aspect-3/4 w-full rounded-lg bg-surface";
  const items: (Img | null)[] = images.length > 0 ? images : [null, null, null, null];

  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 md:gap-6 lg:grid-cols-4">
      {items.map((image, i) => (
        <li key={image?.src ?? i}>
          <Reveal delay={(i % 4) * 80}>
            <ImageFrame
              image={image}
              placeholder={placeholder}
              className={tile}
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
