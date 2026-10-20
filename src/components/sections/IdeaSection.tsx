import { content } from "@/content/content";
import Eyebrow from "@/components/ui/Eyebrow";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionPanel from "@/components/ui/SectionPanel";
import TextReveal from "@/components/ui/TextReveal";

const { idea } = content;

// Crystal at the centre, thin lines branching out to her five brands.
// The lines are one stretched SVG; the five rows are a fixed-height grid so each line meets its label.
function BrandDiagram() {
  const count = idea.branches.length;
  return (
    <div className="flex items-stretch" role="img" aria-label={`${idea.centre} connects to ${idea.branches.join(", ")}`}>
      <div className="flex w-28 shrink-0 items-center justify-center self-center rounded-full border border-ink p-3 text-center font-display text-lg leading-tight sm:w-32">
        {idea.centre}
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-10 shrink-0 sm:w-20" aria-hidden="true">
        {idea.branches.map((_, i) => (
          <path
            key={i}
            d={`M0 50 C 50 50, 50 ${((i + 0.5) / count) * 100}, 100 ${((i + 0.5) / count) * 100}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <ul className="m-0 grid list-none grid-rows-5 p-0" aria-hidden="true">
        {idea.branches.map((name) => (
          <li key={name} className="flex h-14 items-center text-base leading-tight sm:text-body-lg">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IdeaSection({ index }: { index: number }) {
  return (
    <SectionPanel id="idea" number="01" name={idea.label} bg="bg-surface" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content grid gap-10 py-section md:grid-cols-12 md:gap-x-12 md:py-[calc(5.5rem+1rem)]">
        <div className="md:col-span-7 md:row-start-1">
          <Reveal>
            <Eyebrow number="01">{idea.label}</Eyebrow>
            <SectionHeading size="quote" className="mt-8">
              <TextReveal text={idea.quote} />
            </SectionHeading>
          </Reveal>
        </div>

        <Reveal className="md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1">
          <ParallaxImage
            image={idea.portrait}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="mx-auto aspect-[3/4] w-full max-w-md md:max-h-[72svh] md:max-w-none"
          />
        </Reveal>

        <Reveal className="md:col-span-7 md:row-start-2 md:self-end">
          <BrandDiagram />
        </Reveal>
      </div>
    </SectionPanel>
  );
}
