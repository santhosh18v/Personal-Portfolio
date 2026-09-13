"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { socials } from "@/data/socials";

const links = [
  ["About", "about"],
  ["Work", "work"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];

export default function Navigation({ detail = false }: { detail?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = sentinel.current;
    if (detail || !marker) return;
    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(entry.boundingClientRect.top < 0);
    });
    observer.observe(marker);
    return () => observer.disconnect();
  }, [detail]);

  return (
    <>
      {!detail && (
        <span ref={sentinel} className="nav-sentinel" aria-hidden="true" />
      )}
      <header
        className={`site-nav ${scrolled || detail ? "scrolled" : ""}`}
        data-opening={!detail || undefined}
      >
        <Link
          className="wordmark"
          href={detail ? "/" : "#home"}
          aria-label="Santhosh home"
        >
          <span className="wordmark-symbol" aria-hidden="true">
            s.
          </span>
          SANTHOSH
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([text, id]) => (
            <Link key={id} href={`${detail ? "/" : ""}#${id}`}>
              {text}
            </Link>
          ))}
        </nav>
        {socials.resume && (
          <a
            className="nav-resume"
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="mobile-menu" aria-label="Open navigation">
              <Menu size={24} aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetTitle className="eyebrow">
              The engineering universe
            </SheetTitle>
            <SheetDescription className="sr-only">
              Choose a chapter of Santhosh&apos;s portfolio.
            </SheetDescription>
            <nav aria-label="Mobile navigation">
              <SheetClose asChild>
                <Link href={detail ? "/" : "#home"}>
                  <span>00</span>Home
                </Link>
              </SheetClose>
              {links.map(([text, id], i) => (
                <SheetClose asChild key={id}>
                  <Link href={`${detail ? "/" : ""}#${id}`}>
                    <span>0{i + 1}</span>
                    {text}
                  </Link>
                </SheetClose>
              ))}
              {socials.resume && (
                <SheetClose asChild>
                  <a
                    href={socials.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">↗</span>Resume
                  </a>
                </SheetClose>
              )}
            </nav>
            <p className="eyebrow">
              SANTHOSH KUMAR REDDY
              <br />
              SOFTWARE ENGINEER · AI DEVELOPER
            </p>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
