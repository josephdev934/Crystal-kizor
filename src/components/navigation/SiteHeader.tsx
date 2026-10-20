"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { content } from "@/content/content";
import Button from "@/components/ui/Button";
import FullscreenMenu from "./FullscreenMenu";

// HeroUI Navbar, fixed to the top. Transparent over the hero, solid once the page has scrolled.
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    // give focus back to the MENU button (Safari does not focus buttons on click)
    requestAnimationFrame(() => menuButton.current?.focus());
  }, []);

  return (
    <>
      <Navbar
        maxWidth="full"
        isBlurred={false}
        disableAnimation
        classNames={{
          base: `fixed h-18 border-b transition-colors duration-240 ease-motion md:h-22 ${
            scrolled ? "border-border bg-canvas/95 backdrop-blur" : "border-transparent bg-transparent"
          }`,
          wrapper: "mx-auto h-full w-[calc(100%-2*var(--spacing-gutter))] max-w-content px-0",
        }}
      >
        <NavbarBrand>
          <a href="#top" className="font-display text-xl font-semibold tracking-tight no-underline md:text-2xl">
            {content.site.wordmark}
          </a>
        </NavbarBrand>

        <NavbarContent justify="end" className="gap-6">
          <NavbarItem className="hidden md:flex">
            <Button href={content.site.hireUrl}>{content.site.hireLabel}</Button>
          </NavbarItem>
          <NavbarItem>
            <button
              ref={menuButton}
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
              className="flex min-h-11 items-center gap-3 text-label font-semibold uppercase tracking-label"
            >
              Menu
              <span aria-hidden="true" className="flex flex-col gap-1.5">
                <span className="h-px w-8 bg-current" />
                <span className="h-px w-5 self-end bg-current" />
              </span>
            </button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <FullscreenMenu isOpen={open} onClose={close} />
    </>
  );
}
