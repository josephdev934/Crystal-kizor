import { content } from "@/content/content";
import Eyebrow from "@/components/ui/Eyebrow";
import ImageFrame from "@/components/ui/ImageFrame";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionPanel from "@/components/ui/SectionPanel";
import Todo from "@/components/ui/Todo";

const { about } = content;

// Taupe background: text is ink, never the muted colour.
export default function AboutSection({ index }: { index: number }) {
  return (
    <SectionPanel id="about" number="11" name={about.label} bg="bg-taupe" text="text-ink" contentClass="py-section" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <ImageFrame image={about.portrait} sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-4/3 w-full rounded-xl" />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <Eyebrow number="11">{about.label}</Eyebrow>
          <SectionHeading size="h2" className="mt-8">
            {about.heading}
          </SectionHeading>
          <p className="mt-6">
            <Todo>{about.bioTodo}</Todo>
          </p>
          <p className="mt-6 text-body-lg">{about.based}</p>
          <ul className="mt-4 list-none border-t border-ink/40 p-0">
            {about.memberships.map((line) => (
              <li key={line} className="border-b border-ink/40 py-3 text-base">
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionPanel>
  );
}
