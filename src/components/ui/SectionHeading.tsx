import type { ReactNode } from "react";
import CutText from "./CutText";

const sizes = { h1: "text-h1", h2: "text-h2", h3: "text-h3", quote: "text-display-md" };

export default function SectionHeading({
  as: Tag = "h2",
  size = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof sizes;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag className={`font-display tracking-tight text-balance ${sizes[size]} ${className}`}>
      {typeof children === "string" ? <CutText text={children} /> : children}
    </Tag>
  );
}
