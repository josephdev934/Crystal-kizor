"use client";

import { Link } from "@heroui/react";
import type { ReactNode } from "react";

// Small uppercase link with a short line and an arrow: "VIEW ALL PROJECTS ——>"
export default function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      isExternal={href.startsWith("http")} // opens in a new tab with rel="noopener noreferrer"
      showAnchorIcon={false}
      className={`group min-h-11 gap-3 text-label font-semibold uppercase tracking-label text-current ${className}`}
    >
      {children}
      <span aria-hidden="true" className="h-px w-8 bg-current transition-all duration-240 ease-motion group-hover:w-12" />
      <span aria-hidden="true">→</span>
    </Link>
  );
}
