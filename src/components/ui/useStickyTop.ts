"use client";

import { useEffect, type RefObject } from "react";

// A panel taller than the screen must not stick at top 0, or its bottom would stay hidden.
// Its sticky top becomes (screen height - panel height), so the visitor scrolls through the whole panel
// first and only then does the next one slide over it. Short panels get 0. The value goes into the
// CSS variable --panel-top, which SectionPanel uses as `top` (desktop only).
export function useStickyTop(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;

    const update = () => panel.style.setProperty("--panel-top", `${Math.min(0, window.innerHeight - panel.offsetHeight)}px`);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(panel);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [ref]);
}
