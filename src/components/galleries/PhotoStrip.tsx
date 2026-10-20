import type { ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";

// Soft rounded photo (20px radius) with a short caption. No photos supplied yet, so each is a labelled placeholder.
export default function PhotoStrip({
  placeholder,
  caption,
  className = "",
  children,
}: {
  placeholder: string;
  caption: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <figure className={`m-0 ${className}`}>
      <ImageFrame placeholder={placeholder} className="aspect-[4/3] w-full rounded-xl" />
      <figcaption className="mt-4 text-label font-semibold uppercase tracking-label">{caption}</figcaption>
      {children}
    </figure>
  );
}
