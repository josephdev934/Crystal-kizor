import { content } from "@/content/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionPanel from "@/components/ui/SectionPanel";

const { next } = content;

// "Where to go next": five editorial rows (not cards), each linking to its section.
export default function DirectorySection({ index }: { index: number }) {
  return (
    <SectionPanel id="next" number="10" name={next.label} bg="bg-surface" contentClass="py-section" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content grid gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <Eyebrow number="10">{next.label}</Eyebrow>
          <SectionHeading size="h2" className="mt-8">
            {next.heading}
          </SectionHeading>
        </Reveal>

        <ul className="m-0 list-none border-t border-ink p-0 lg:col-span-8">
          {next.rows.map((row, i) => (
            <li key={row.text} className="border-b border-border">
              <a href={row.href} className="group flex min-h-20 items-center gap-6 py-5 no-underline">
                <span className="w-8 text-label font-semibold tracking-label text-text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-display text-h3 leading-tight tracking-tight transition-transform duration-240 ease-motion group-hover:translate-x-2">
                  {row.text}
                </span>
                <span aria-hidden="true" className="text-xl text-clay">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SectionPanel>
  );
}
