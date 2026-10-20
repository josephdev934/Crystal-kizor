import { content } from "@/content/content";
import Eyebrow from "@/components/ui/Eyebrow";
import PrincipleIcon from "@/components/ui/PrincipleIcons";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionPanel from "@/components/ui/SectionPanel";

const { principles } = content;

// Her hot-climate focus. Taupe background, so text is ink (never the muted colour).
export default function PrinciplesSection({ index }: { index: number }) {
  return (
    <SectionPanel id="principles" number="02" name={principles.label} bg="bg-taupe" text="text-ink" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content py-section md:py-[calc(5.5rem+1rem)]">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <Eyebrow number="02">{principles.label}</Eyebrow>
          </div>
          <SectionHeading className="md:col-span-7">{principles.heading}</SectionHeading>
        </Reveal>

        <ol className="m-0 mt-12 grid list-none grid-cols-2 gap-x-8 p-0 md:mt-16 md:grid-cols-3">
          {principles.items.map((name, i) => (
            <li key={name} className="flex flex-col gap-6 border-t border-ink/40 py-8">
              <div className="flex items-start justify-between">
                <PrincipleIcon index={i} />
                <span className="text-label font-semibold tracking-label">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display tracking-tight text-h3">{name}</h3>
            </li>
          ))}
        </ol>
      </div>
    </SectionPanel>
  );
}
