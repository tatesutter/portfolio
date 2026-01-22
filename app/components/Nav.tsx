"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/skills", label: "Skills" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape to close + lock scroll while open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        {/* Brand */}
        <Link href="/" className="text-base font-semibold tracking-tight">
          Tate Sutter
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cx(
                "hover:text-white transition",
                pathname === l.href && "text-white",
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
          >
            Get a quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 px-3 py-2 text-sm text-zinc-100 hover:bg-zinc-900"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {/* Icon */}
          <div className="flex flex-col gap-1.5">
            <span
              className={cx(
                "block h-0.5 w-5 bg-zinc-200 transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cx(
                "block h-0.5 w-5 bg-zinc-200 transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cx(
                "block h-0.5 w-5 bg-zinc-200 transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile panel + overlay */}
      <div className={cx("md:hidden", open ? "block" : "hidden")}>
        {/* Overlay */}
        <button
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />

        {/* Panel */}
        <div className="relative z-50 border-t border-zinc-900 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cx(
                    "rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-base text-zinc-100 hover:bg-zinc-900 transition",
                    pathname === l.href && "border-zinc-600",
                  )}
                >
                  {l.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-2 rounded-2xl bg-white px-4 py-3 text-center text-base font-semibold text-zinc-900 hover:bg-zinc-200"
              >
                Get a quote
              </Link>

              <p className="mt-2 text-xs text-zinc-500">
                Fast replies • Friendly, local-first builds
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
