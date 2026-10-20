"use client";

import { Button as HeroButton } from "@heroui/react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "on-dark";

// HeroUI supplies the button behaviour; our tokens supply the look.
const base =
  "h-auto min-h-12 min-w-0 gap-3 rounded-md border border-transparent px-6 py-3.5 text-base font-semibold transition-colors duration-240 ease-motion";

const variants: Record<Variant, string> = {
  primary: "bg-clay text-white-warm data-[hover=true]:bg-clay-hover",
  secondary: "border-ink bg-transparent text-ink data-[hover=true]:bg-ink data-[hover=true]:text-white-warm",
  "on-dark": "bg-sand text-ink data-[hover=true]:bg-surface-muted",
};

// With no href the button is a visible placeholder (its TODO is shown next to it).
export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (!href) {
    return (
      <HeroButton isDisabled={false} aria-disabled="true" disableRipple className={`${classes} cursor-not-allowed`}>
        {children}
      </HeroButton>
    );
  }

  const external = href.startsWith("http");
  return (
    <HeroButton
      as="a"
      href={href}
      disableRipple
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </HeroButton>
  );
}
