import Image from "next/image";
import type { Img } from "@/content/content";

// Shows a supplied photo, or a clearly labelled placeholder when there is none.
// Pass the aspect ratio / radius through className, e.g. "aspect-[3/4] rounded-lg".
export default function ImageFrame({
  image,
  placeholder,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  tone = "light",
}: {
  image?: Img | null;
  placeholder?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "light" | "dark";
}) {
  if (!image) {
    const colours = tone === "dark" ? "bg-stone-dark text-sand border-border-dark" : "bg-surface-muted text-ink border-sand";
    return (
      <div className={`flex items-center justify-center border border-dashed p-6 text-center text-small ${colours} ${className}`}>
        <span aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
