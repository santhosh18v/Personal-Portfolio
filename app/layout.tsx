import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteUrl } from "@/data/socials";
import "./globals.css";

const manrope = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-600-normal.woff2",
      weight: "600",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const barlow = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff2",
      weight: "600",
    },
  ],
  variable: "--font-barlow",
  display: "swap",
});

const title = "Santhosh Kumar Reddy | Software Engineer & AI Developer";
const description =
  "Portfolio of Santhosh Kumar Reddy — software engineer building full-stack applications, AI systems, and intelligent engineering products.";
const socialImage = {
  url: "/images/santhosh-suit.webp",
  width: 1672,
  height: 941,
  alt: "Santhosh Kumar Reddy — Software Engineer & AI Developer",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Santhosh — Engineering Universe",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${barlow.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
