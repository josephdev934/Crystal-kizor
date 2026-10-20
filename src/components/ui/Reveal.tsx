"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fade-up when the block scrolls into view (opacity and transform only), plays once.
// Content is visible until the page has loaded in the browser, so nothing stays hidden without JavaScript.
// Blocks already on screen at load animate in too; reduced motion shows everything straight away.
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setStage("hidden");
    let observer: IntersectionObserver | undefined;
    // two frames: let the browser paint the hidden state first, so the change is animated
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setStage("shown");
              observer?.disconnect();
            }
          },
          { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
        );
        observer.observe(el);
      }),
    );
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        stage === "hidden" ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
      } ${stage === "idle" ? "" : "transition-[opacity,transform] duration-800 ease-motion"} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
