import { content } from "@/content/content";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SectionPanel from "@/components/ui/SectionPanel";
import Todo from "@/components/ui/Todo";

const { impact } = content;

// Two initiatives with equal weight. Each has its own typographic identity; the second is stepped down for rhythm.
const identities = [
  "font-display text-h2 uppercase tracking-tight", // AKO Alliance
  "font-display text-h2 italic tracking-tight", // Alive and Free
];

export default function CommunitySection({ index }: { index: number }) {
  return (
    <SectionPanel id="impact" number="06" name={impact.label} bg="bg-canvas" contentClass="py-section" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content">
        <Reveal>
          <Eyebrow number="06">{impact.label}</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-16 md:grid-cols-2 md:gap-12">
          {impact.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 120} className={i === 1 ? "md:mt-24" : ""}>
              {/* No photo frame. The name itself is the card, set in each initiative's own type. */}
              <div className="flex aspect-4/3 w-full items-end rounded-xl border border-ink/40 bg-surface p-6 md:p-10">
                <h3 className={`m-0 ${identities[i]}`}>{item.name}</h3>
              </div>
              <p className="mt-6 max-w-reading text-body-lg text-text-muted">{item.text}</p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <Button href={item.href} variant="secondary">
                  {item.button}
                </Button>
                {!item.href && <Todo>{item.todo}</Todo>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionPanel>
  );
}
