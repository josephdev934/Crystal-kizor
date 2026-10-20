import { content } from "@/content/content";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SectionPanel from "@/components/ui/SectionPanel";
import Todo from "@/components/ui/Todo";

const { learn } = content;

// Two different compositions: TEA is a big dark feature panel, the newsletter is a quiet editorial column.
export default function LearnSection({ index }: { index: number }) {
  return (
    <SectionPanel id="learn" number="05" name={learn.label} bg="bg-surface" contentClass="py-section" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content">
        <Reveal>
          <Eyebrow number="05">{learn.label}</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-8">
            <article className="[&_*:focus-visible]:outline-sand! flex h-full flex-col justify-between gap-12 rounded-xl bg-stone-dark p-8 text-white-warm md:p-14">
              <div>
                <p className="m-0 text-label font-semibold uppercase tracking-label text-sand">{learn.tea.short}</p>
                <h3 className="font-display tracking-tight mt-4 text-h2">{learn.tea.name}</h3>
                <p className="mt-6 max-w-reading text-body-lg">{learn.tea.text}</p>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <p className="m-0">
                  <span className="block font-display text-display-md leading-none tracking-tight">{learn.tea.stat}</span>
                  <span className="text-label font-semibold uppercase tracking-label text-sand">{learn.tea.statLabel}</span>
                </p>
                <div className="flex flex-col items-start gap-3">
                  <Button href={learn.tea.href} variant="on-dark">
                    {learn.tea.button}
                  </Button>
                  {!learn.tea.href && <Todo tone="dark">{learn.tea.todo}</Todo>}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:pt-24">
            <article className="border-t border-ink pt-6">
              <h3 className="font-display tracking-tight text-h3 italic">{learn.roi.name}</h3>
              <p className="mt-6 text-body-lg">{learn.roi.text}</p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <Button href={learn.roi.href} variant="secondary">
                  {learn.roi.button}
                </Button>
                {!learn.roi.href && <Todo>{learn.roi.todo}</Todo>}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </SectionPanel>
  );
}
