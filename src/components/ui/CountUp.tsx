"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600;

// "About ₦8M" -> prefix "About ₦", number "8", suffix "M". Text with no number is shown as it is.
function split(value: string) {
  const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  return { prefix, suffix, target: Number(number.replace(/,/g, "")), decimals: number.split(".")[1]?.length ?? 0 };
}

// Counts up from 0 to the number in `value` when it scrolls into view (after the 21st.dev "Count Up").
// Plain requestAnimationFrame, no library. Runs on phones too. Reduced motion: shows the final number.
// The page starts with the final number, so it is correct without JavaScript. Screen readers get the final text.
export default function CountUp({ value }: { value: string }) {
  const parts = split(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(parts?.target ?? 0);

  useEffect(() => {
    const el = ref.current;
    if (!parts || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    setCurrent(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / DURATION_MS);
          const eased = 1 - Math.pow(1 - progress, 4); // fast at first, settles gently
          setCurrent(parts.target * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // `value` is a fixed string from content.ts; `parts` is derived from it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!parts) return <>{value}</>;

  const shown = current.toLocaleString("en-US", { minimumFractionDigits: parts.decimals, maximumFractionDigits: parts.decimals });
  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {parts.prefix}
        {shown}
        {parts.suffix}
      </span>
    </span>
  );
}
