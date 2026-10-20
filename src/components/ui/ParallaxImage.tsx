import Image from "next/image";
import type { Img } from "@/content/content";

// A photo that drifts slowly inside its frame as the page scrolls (after the 21st.dev "Parallax Image").
// Plain CSS scroll-driven animation: the frame owns a view() timeline, the photo follows it.
// overflow-hidden is on this frame only. The photo is scaled up a little so its edges never show.
// Browsers without animation-timeline, phones (under 768px) and reduced motion get a still photo.
export default function ParallaxImage({
  image,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  image: Img;
  className?: string; // aspect ratio and size, e.g. "aspect-[3/4] w-full"
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`} style={{ viewTimelineName: "--parallax-frame" }}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="h-full w-full object-cover md:motion-safe:supports-[animation-timeline:view()]:animate-parallax"
        style={{ animationTimeline: "--parallax-frame" }}
      />
    </div>
  );
}
