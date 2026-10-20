import Image from "next/image";
import { content } from "@/content/content";
import CutText from "@/components/ui/CutText";
import LagosClock from "@/components/ui/LagosClock";
import SectionPanel from "@/components/ui/SectionPanel";

const { hero } = content;

const label = "text-label font-semibold uppercase tracking-label";

// Dark page, rounded photo frame inset 16px. Headline sits bottom left over a warm dark gradient.
// The fixed header (wordmark, Work with her, MENU) floats above the top of the frame.
export default function HeroSection({ index }: { index: number }) {
  return (
    <SectionPanel id="top" bg="bg-stone-dark" text="text-white-warm" index={index} contentClass="p-4">
      <div className="relative flex min-h-[calc(100svh-2rem)] flex-col overflow-hidden rounded-xl">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          sizes="100vw"
          priority
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        {/* Left and bottom are darker so the warm-white text always passes contrast */}
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-stone-dark/90 via-stone-dark/50 to-stone-dark/20" />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-stone-dark/65 via-stone-dark/25 to-transparent" />

        {/* Utility bar sits just under the fixed header */}
        <div className="relative mt-18 px-6 md:mt-22 md:px-10">
          <div className={`flex items-center justify-between gap-4 border-b border-white-warm/40 pb-3 ${label}`}>
            <LagosClock />
            <a href="#contact" className="min-h-6 no-underline hover:underline">
              Get in touch
            </a>
          </div>
          <div className="mt-5 flex gap-4 md:gap-6">
            <span className={`shrink-0 ${label}`}>[01.1]</span>
            <p className={`m-0 max-w-sm ${label}`}>{hero.support}</p>
          </div>
        </div>

        <div className="relative mt-auto px-6 pb-8 pt-16 md:px-10 md:pb-10">
          <h1 className="m-0 max-w-[16ch] font-hero text-hero uppercase leading-[0.92] tracking-tight md:max-w-[22ch]">
            <CutText text={hero.headline} />
          </h1>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-end md:gap-6">
            <a
              href={hero.secondary.href}
              className={`order-2 min-h-11 items-center justify-center text-center no-underline hover:underline md:order-1 md:flex ${label}`}
            >
              {hero.secondary.label}
            </a>
            <a
              href={hero.primary.href}
              className="order-1 flex min-h-14 items-center justify-between gap-6 rounded-xl border border-white-warm/50 bg-white-warm/15 py-2 pl-2 pr-6 text-base font-semibold no-underline backdrop-blur-md transition-colors duration-240 ease-motion hover:bg-white-warm/25 md:order-2"
            >
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-lg bg-white-warm text-ink">
                ↗
              </span>
              {hero.primary.label}
            </a>
          </div>
        </div>
      </div>
    </SectionPanel>
  );
}
