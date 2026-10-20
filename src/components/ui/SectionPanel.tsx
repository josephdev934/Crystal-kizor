import type { ReactNode } from "react";

// One full-width section. Plain scrolling: no slide-over, no sticky, no shrink.
export default function SectionPanel({
  id,
  bg,
  text = "",
  contentClass = "",
  children,
}: {
  id?: string;
  number?: string;
  name?: string;
  bg: string; // background token class, e.g. "bg-surface"
  text?: string; // text colour class when it is not the default ink
  contentClass?: string; // extra classes for the content layer, e.g. "flex items-end"
  index?: number;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative min-h-svh ${bg} ${text}`}>
      <div className={`relative min-h-svh ${contentClass}`}>{children}</div>
    </section>
  );
}
