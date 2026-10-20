import { content } from "@/content/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionPanel from "@/components/ui/SectionPanel";
import Button from "@/components/ui/Button";
import TextLink from "@/components/ui/TextLink";

const { contact, site } = content;

// Simple inline icons, drawn in the current text colour (no icon library).
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.84v1.57h.06c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13v5.87h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

// Calm, light closing section. Brands without a supplied link show as plain text until Crystal sends one.
export default function ContactSection({ index }: { index: number }) {
  return (
    <SectionPanel id="contact" number="12" name={contact.label} bg="bg-surface-muted" text="text-ink" contentClass="py-section" index={index}>
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <Eyebrow number="12">{contact.label}</Eyebrow>
          <SectionHeading size="h1" className="mt-8">
            {contact.heading}
          </SectionHeading>

          <div className="mt-10">
            <Button href={contact.primary.href}>{contact.primary.label}</Button>
          </div>

          {/* Secondary links. Nothing is invented: the email icon is not a link until Crystal supplies an address. */}
          <ul className="mt-8 flex list-none flex-col gap-4 p-0">
            <li className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Crystal Kizor on LinkedIn"
                className="flex size-12 items-center justify-center rounded-full border border-ink transition-colors duration-240 ease-motion hover:bg-ink hover:text-white-warm"
              >
                <LinkedInIcon />
              </a>
              <TextLink href={contact.linkedin.href} className="no-underline">
                {contact.linkedin.label}
              </TextLink>
            </li>
            <li className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {/* No address supplied, so this is not a link yet. Make it a mailto: link when Crystal sends one. */}
              <span aria-hidden="true" className="flex size-12 items-center justify-center rounded-full border border-dashed border-ink">
                <EmailIcon />
              </span>
              <span className="text-label font-semibold uppercase tracking-label">Email</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <p className="m-0 text-label font-semibold uppercase tracking-label">{contact.brandsTitle}</p>
          <ul className="mt-4 list-none border-t border-ink/40 p-0">
            {contact.brands.map((brand) => (
              <li key={brand.name} className="border-b border-ink/40">
                {brand.href ? (
                  <a href={brand.href} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-between py-3 font-display text-h3 leading-none no-underline">
                    {brand.name}
                    <span aria-hidden="true" className="text-xl">↗</span>
                  </a>
                ) : (
                  <span className="flex min-h-12 items-center py-3 font-display text-h3 leading-none">{brand.name}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionPanel>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-surface-muted pb-10 text-ink">
      <div className="mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content flex flex-col gap-6 border-t border-ink/40 pt-8 md:flex-row md:items-center md:justify-between">
        <span className="font-display text-xl font-semibold tracking-tight">{site.wordmark}</span>
        <nav aria-label="Footer">
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-1 p-0 text-small font-semibold uppercase tracking-label">
            {content.menu.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center no-underline hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="m-0 text-small">{contact.copyright}</p>
      </div>
    </footer>
  );
}
