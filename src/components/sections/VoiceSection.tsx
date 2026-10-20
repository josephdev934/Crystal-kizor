import { content } from "@/content/content";
import MediaFeature from "@/components/galleries/MediaFeature";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionPanel from "@/components/ui/SectionPanel";
import Todo from "@/components/ui/Todo";

const { voice } = content;

export default function VoiceSection({ index }: { index: number }) {
  return (
    <SectionPanel id="voice" number="07" name={voice.label} bg="bg-stone-dark" text="text-white-warm [&_*:focus-visible]:outline-sand!" contentClass="py-section" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content">
        <Reveal>
          <Eyebrow number="07">{voice.label}</Eyebrow>
          <SectionHeading size="h1" className="mt-8">
            {voice.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <MediaFeature media={voice.media} />
          </Reveal>

          <div className="flex flex-col gap-12 lg:col-span-5 lg:justify-center">
            <Reveal>
              <h3 className="font-display tracking-tight text-h3">{voice.speaking.title}</h3>
              <p className="mt-4 text-body-lg">{voice.speaking.text}</p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <Button href={voice.speaking.button.href} variant="on-dark">
                  {voice.speaking.button.label}
                </Button>
                {!voice.speaking.button.href && <Todo tone="dark">{voice.speaking.todo}</Todo>}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border-t border-border-dark pt-8">
                <h3 className="font-display tracking-tight text-h3">{voice.writing.title}</h3>
                <p className="mt-4 text-body-lg">{voice.writing.text}</p>
                <p className="mt-4">
                  <Todo tone="dark">{voice.writing.todo}</Todo>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionPanel>
  );
}
