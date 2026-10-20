"use client";

import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import type { Img } from "@/content/content";
import MasonryGrid from "./MasonryGrid";

// Full-screen gallery in a HeroUI Modal (focus trap, Esc and scroll lock come with it).
// Shows the masonry grid; picking a photo shows it large. Left/right arrows change photo.
export default function Lightbox({
  title,
  images,
  startIndex,
  onClose,
}: {
  title: string;
  images: Img[];
  startIndex: number | null;
  onClose: () => void;
}) {
  const [active, setActive] = useState<number | null>(startIndex);

  const step = (direction: 1 | -1) => setActive((i) => (i === null ? i : (i + direction + images.length) % images.length));

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  const control = "min-h-11 min-w-11 rounded-md border border-border-dark px-4 text-label font-semibold uppercase tracking-label text-white-warm";
  const inner = "mx-auto w-[calc(100%-2*var(--spacing-gutter))] max-w-content";

  return (
    <Modal
      isOpen
      onClose={onClose}
      size="full"
      radius="none"
      scrollBehavior="inside"
      hideCloseButton
      aria-label={`${title} photos`}
      classNames={{ base: "bg-stone-dark text-white-warm [&_*:focus-visible]:outline-sand!", header: "p-0", body: "p-0" }}
    >
      <ModalContent onKeyDown={onKeyDown}>
        {(close) => (
          <>
            <ModalHeader className={`${inner} flex h-18 shrink-0 items-center justify-between md:h-22`}>
              <span className="font-display text-xl font-normal">{title}</span>
              <div className="flex gap-3">
                {active !== null && (
                  <Button variant="bordered" radius="sm" onPress={() => setActive(null)} className={control}>
                    All photos
                  </Button>
                )}
                <Button variant="bordered" radius="sm" onPress={close} className={control}>
                  Close ×
                </Button>
              </div>
            </ModalHeader>

            <ModalBody className={`${inner} pb-8`}>
              {active === null ? (
                <MasonryGrid images={images} onSelect={setActive} />
              ) : (
                <div className="flex h-full flex-col gap-4">
                  <div className="relative min-h-0 flex-1">
                    <Image src={images[active].src} alt={images[active].alt} fill sizes="100vw" className="rounded-lg object-contain" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="bordered" radius="sm" onPress={() => step(-1)} aria-label="Previous photo" className={control}>
                      ←
                    </Button>
                    <p className="m-0 text-label font-semibold tracking-label">
                      {String(active + 1).padStart(2, "0")} ——— {String(images.length).padStart(2, "0")}
                    </p>
                    <Button variant="bordered" radius="sm" onPress={() => step(1)} aria-label="Next photo" className={control}>
                      →
                    </Button>
                  </div>
                </div>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
