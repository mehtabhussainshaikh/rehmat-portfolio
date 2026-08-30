"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { StartInquiryButton } from "@/components/StartInquiryButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-on-paper bg-paper/95 backdrop-blur">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
          <span
            className="text-xl font-bold tracking-tight text-ink"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-ink-secondary transition-premium hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <StartInquiryButton size="sm">Start an Inquiry</StartInquiryButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 border-t border-border-on-paper bg-paper px-5 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-text-ink-secondary transition-premium hover:bg-paper-2 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <StartInquiryButton
            className="mt-2 w-full"
            size="sm"
            onClick={() => setOpen(false)}
          >
            Start an Inquiry
          </StartInquiryButton>
        </nav>
      )}
    </header>
  );
}
