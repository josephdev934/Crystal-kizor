"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Img } from "@/content/content";

const pad = (n: number) => String(n).padStart(2, "0");

// Adapted from the 21st.dev "Circular Gallery" (ravikatiyar162). The photos sit on a 3D ring that turns
// one photo at a time. It advances itself every few seconds, and stops while the pointer or focus is on it
// and under reduced motion. The arrows, a click on a side photo, or the left/right keys turn it by hand.
// Sizes come from the CSS variable --w, so the ring scales with the screen.
export default function CircularGallery({ images }: { images: Img[] }) {
  const count = images.length;
  const angle = 360 / count;
  const [step, setStep] = useState(0); // keeps counting up or down, so the ring never spins backwards at the wrap
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(true);

  const active = ((step % count) + count) % count;

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => setStep((s) => s + 1), 4000);
    return () => clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="ELEvated photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") setStep((s) => s + 1);
        if (e.key === "ArrowLeft") setStep((s) => s - 1);
      }}
      className="[--w:clamp(150px,24vw,280px)]"
    >
      <div className="flex h-[calc(var(--w)*1.65)] items-center justify-center overflow-hidden perspective-[1800px]">
        <div
          className="relative h-[calc(var(--w)*1.4)] w-(--w) transform-3d transition-transform duration-800 ease-motion motion-reduce:transition-none"
          style={{ transform: `translateZ(calc(var(--w) * -1.6)) rotateY(${-step * angle}deg)` }}
        >
          {images.map((image, i) => {
            // Signed distance from the front photo, e.g. -1 is the one on the left.
            const distance = ((i - active + count + count / 2) % count) - count / 2;
            const far = Math.abs(distance);
            return (
              <button
                key={image.src}
                type="button"
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={i === active}
                tabIndex={far > 2 ? -1 : 0}
                onClick={() => setStep((s) => s + distance)}
                style={{
                  transform: `rotateY(${i * angle}deg) translateZ(calc(var(--w) * 1.6))`,
                  opacity: Math.max(0.25, 1 - far * 0.25),
                  pointerEvents: far > 2 ? "none" : "auto",
                }}
                className={`absolute inset-0 backface-hidden transition-opacity duration-800 ease-motion motion-reduce:transition-none ${i === active ? "cursor-default" : "cursor-pointer"}`}
              >
                <Image
                  src={image.src}
                  alt={i === active ? image.alt : ""}
                  width={image.width}
                  height={image.height}
                  sizes="280px"
                  className="h-full w-full rounded-lg border border-border bg-surface object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="m-0 text-label font-semibold tracking-label">
            {pad(active + 1)} ——— {pad(count)}
          </p>
          <div className="mt-6 flex gap-3">
            {(["Previous", "Next"] as const).map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setStep((s) => s + (name === "Next" ? 1 : -1))}
                aria-label={`${name} photo`}
                className="min-h-12 min-w-12 rounded-md border border-ink text-xl transition-colors duration-240 ease-motion hover:bg-ink hover:text-white-warm"
              >
                {name === "Next" ? "→" : "←"}
              </button>
            ))}
          </div>
        </div>
        <p aria-live="polite" className="m-0 max-w-reading text-body-lg text-text-muted md:col-span-7">
          {images[active].alt}
        </p>
      </div>
    </div>
  );
}
