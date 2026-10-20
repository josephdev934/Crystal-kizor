import Image from "next/image";
import { content } from "@/content/content";
import CountUp from "@/components/ui/CountUp";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Todo from "@/components/ui/Todo";
import SectionPanel from "@/components/ui/SectionPanel";

const { proof } = content;

// Dark section over a full-bleed project photo. The photo is decorative (alt="").
export default function ProofSection({ index }: { index: number }) {
  return (
    <SectionPanel id="proof" number="03" name={proof.label} bg="bg-stone-dark" text="text-white-warm [&_*:focus-visible]:outline-sand!" contentClass="flex items-end" index={index}>
      <Image src={proof.image.src} alt="" width={proof.image.width} height={proof.image.height} sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-stone-dark via-stone-dark/70 to-stone-dark/40" />

      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content relative py-section">
        <Reveal>
          <Eyebrow number="03">{proof.label}</Eyebrow>
        </Reveal>

        <dl className="m-0 mt-16 grid gap-0 md:mt-24 md:grid-cols-4">
          {proof.metrics.map((metric) => (
            <div key={metric.value} className="border-t border-white-warm/40 py-6 md:pr-8">
              <dt className="text-display-md leading-none">
                <span className="font-display tracking-tight">
                  <CountUp value={metric.value} />
                </span>
              </dt>
              <dd className="m-0 mt-4 max-w-56 text-base">{metric.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6">
          <Todo tone="dark">{proof.todo}</Todo>
        </p>
      </div>
    </SectionPanel>
  );
}
