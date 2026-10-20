import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { content } from "@/content/content";
import Providers from "@/components/ui/Providers";
import "../styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
  openGraph: {
    title: content.site.title,
    description: content.site.description,
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth scroll-pt-18 motion-reduce:scroll-auto md:scroll-pt-22`}
    >
      <body className="bg-canvas font-body text-base leading-relaxed text-ink antialiased [&_*:focus-visible]:outline-3 [&_*:focus-visible]:outline-offset-4 [&_*:focus-visible]:outline-clay"><Providers>{children}</Providers></body>
    </html>
  );
}
