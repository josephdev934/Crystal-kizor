"use client";

import { useEffect, useRef, useState } from "react";

// Words fade from faint to full as you scroll them up the screen (after the 21st.dev "Reading Text Reveal").
// Main path: plain CSS scroll-driven animation. Each word gets its own view() timeline, so it finishes
// fading as it comes fully into view. Opacity only.
// Fallback (browsers without animation-timeline): an IntersectionObserver fades the words in one by one.
// Off under 768px and with reduced motion: the text is simply shown. Screen readers read the sr-only copy.
const nativeClass = "md:motion-safe:supports-[animation-timeline:view()]:animate-word-in";

export default function TextReveal({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [fallback, setFallback] = useState<"off" | "hidden" | "shown">("off");

  useEffect(() => {
    const el = ref.current;
    const motionOk = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches;
    if (!el || !motionOk || CSS.supports("animation-timeline: view()")) return;

    setFallback("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFallback("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden="true">
          {i > 0 && " "}
          <span
            className={`inline-block ${nativeClass} ${
              fallback === "off" ? "" : "transition-opacity duration-800 ease-motion"
            } ${fallback === "hidden" ? "opacity-20" : ""}`}
            style={{
              animationTimeline: "view()",
              animationRange: "entry 30% entry 100%",
              transitionDelay: fallback === "shown" ? `${i * 40}ms` : "0ms",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
