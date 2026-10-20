import { content } from "@/content/content";
import ProjectSlider from "@/components/galleries/ProjectSlider";
import UnfurlGallery from "@/components/galleries/UnfurlGallery";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionPanel from "@/components/ui/SectionPanel";

const { studio } = content;

// The largest section. Normal scrolling (no slide-over) because it is tall.
export default function StudioCokaSection({ index }: { index: number }) {
  return (
    <SectionPanel id="studio-coka" number="04" name={studio.label} bg="bg-canvas" contentClass="py-section" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content">
        <Reveal className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Eyebrow number="04">{studio.label}</Eyebrow>
            <SectionHeading as="h2" size="h1" className="mt-8">
              {studio.heading}
            </SectionHeading>
            <p className="mt-4 font-display text-h3 italic tracking-tight">{studio.tagline}</p>
          </div>
          <div className="md:col-span-5 md:self-end">
            <p className="m-0 max-w-reading text-body-lg text-text-muted">{studio.text}</p>
            <ul className="mt-6 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-small font-semibold uppercase tracking-label">
              {studio.services.map((service, i) => (
                <li key={service} className="flex items-center gap-6">
                  {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-border" />}
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-20">
          <ProjectSlider projects={studio.projects} />
        </div>

        <div className="mt-16 md:mt-24">
          <UnfurlGallery images={studio.projects.flatMap((project) => project.images).slice(0, 12)} />
        </div>

        <div className="mt-12">
          <Button href={studio.button.href}>{studio.button.label}</Button>
        </div>
      </div>
    </SectionPanel>
  );
}
