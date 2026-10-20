import { content } from "@/content/content";
import CircularGallery from "@/components/galleries/CircularGallery";
import ProductGrid from "@/components/galleries/ProductGrid";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionPanel from "@/components/ui/SectionPanel";
import Todo from "@/components/ui/Todo";

const { elevated } = content;

// Furniture and product design (not a digital product). Copy and photos come only from content.ts.
export default function ElevatedSection({ index }: { index: number }) {
  return (
    <SectionPanel id="elevated" number="09" name={elevated.label} bg="bg-canvas" contentClass="py-section" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Eyebrow number="09">{elevated.label}</Eyebrow>
            <SectionHeading size="h1" className="mt-8">
              {elevated.heading}
            </SectionHeading>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="m-0 text-body-lg">{elevated.kind}</p>
            <p className="mt-4">
              <Todo>{elevated.descriptionTodo}</Todo>
            </p>
          </Reveal>
        </div>

        <div className="mt-12 lg:mt-20">
          {elevated.images.length > 0 ? (
            <CircularGallery images={elevated.images} />
          ) : (
            <ProductGrid images={elevated.images} placeholder={elevated.imagesTodo} />
          )}
          {elevated.images.length > 0 && (
            <p className="mt-6">
              <Todo>{elevated.previewTodo}</Todo>
            </p>
          )}
        </div>
      </div>
    </SectionPanel>
  );
}
