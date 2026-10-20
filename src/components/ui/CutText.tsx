"use client";

import { useEffect, useRef, useState } from "react";

// Masked word reveal (after the 21st.dev "Text Reveal (Mask)" idea, in plain CSS): each word sits in a
// clipping box and slides up into it, one after another. Plays once when the text is on screen.
// Words are visible until the browser takes over, so nothing is hidden without JavaScript.
// Screen readers read the sr-only copy; the split words are hidden from them. Reduced motion: no movement.
export default function CutText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [stage, setStage] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setStage("hidden");
    let observer: IntersectionObserver | undefined;
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setStage("shown");
              observer?.disconnect();
            }
          },
          { threshold: 0.3 },
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
    <span ref={ref}>
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden="true">
          {i > 0 && " "}
          {/* The small padding and negative margin keep ascenders and descenders from being clipped */}
          <span className="-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-bottom">
            <span
              className={`inline-block ${stage === "idle" ? "" : "transition-transform duration-800 ease-motion"} ${
                stage === "hidden" ? "translate-y-[110%]" : "translate-y-0"
              }`}
              style={{ transitionDelay: stage === "shown" ? `${i * 50}ms` : "0ms" }}
            >
              {word}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}
