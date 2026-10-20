"use client";

import { Button as HeroButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";
import { content } from "@/content/content";
import Button from "@/components/ui/Button";

const noScrollbar = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

// HeroUI Modal gives us the focus trap, Esc to close, scroll lock and focus return.
export default function FullscreenMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const inner = "mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      radius="none"
      scrollBehavior="inside"
      hideCloseButton
      aria-label="Menu"
      // The panel slides down from the top; the links then rise in one after another (see animate-menu-in)
      motionProps={{
        variants: {
          enter: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          exit: { y: "-6%", opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
        },
        initial: { y: "-6%", opacity: 0 },
      }}
      classNames={{
        // The menu still scrolls on a short screen, but without a visible scrollbar
        base: `bg-canvas text-ink${noScrollbar}`,
        wrapper: noScrollbar,
        header: "p-0",
        body: `p-0 ${noScrollbar}`,
        footer: "p-0",
      }}
    >
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className={`${inner} flex h-18 shrink-0 items-center justify-between md:h-22`}>
              <span className="font-display text-xl font-normal tracking-tight">{content.site.wordmark}</span>
              <HeroButton
                isIconOnly
                variant="light"
                radius="full"
                aria-label="Close menu"
                onPress={close}
                className="size-11 min-w-11 text-ink transition-transform duration-240 ease-motion data-[hover=true]:rotate-90"
              >
                <span aria-hidden="true" className="text-4xl font-light leading-none">×</span>
              </HeroButton>
            </ModalHeader>

            <ModalBody className={`${inner} py-6`}>
              <nav aria-label="Main">
                <ol className="m-0 list-none border-t border-border p-0">
                  {content.menu.map((item, i) => (
                    <li
                      key={item.href}
                      className="border-b border-border motion-safe:animate-menu-in"
                      style={{ animationDelay: `${200 + i * 70}ms` }}
                    >
                      <a href={item.href} onClick={close} className="group flex min-h-16 items-center gap-6 py-3 no-underline">
                        <span className="w-8 text-label font-semibold tracking-label text-clay">{String(i + 1).padStart(2, "0")}</span>
                        <span className="flex-1 font-display text-h3 uppercase leading-none tracking-tight transition-transform duration-240 ease-motion group-hover:translate-x-2">
                          {item.label}
                        </span>
                        <span aria-hidden="true" className="text-xl text-clay">→</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </ModalBody>

            <ModalFooter className={`${inner} flex flex-wrap items-center justify-between gap-4 pb-8`}>
              <p className="m-0 text-label font-semibold uppercase tracking-label text-text-muted">{content.site.location}</p>
              <Button href={content.site.hireUrl}>{content.site.hireLabel}</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
