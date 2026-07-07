"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Cerita Kami", href: "#cerita" },
  { label: "Lokasi", href: "#lokasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-line/60 bg-charcoal/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-display text-xl tracking-wide text-ivory"
          aria-label="Kawungan Coffee, kembali ke atas"
        >
          Kawungan<span className="text-gold">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#reservasi"
            className="rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-charcoal"
          >
            Reservasi
          </a>
        </div>

        <button
          className="text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-line/60 bg-charcoal/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-ivory/90 hover:bg-surface hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservasi"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-gold/60 px-5 py-3 text-center text-sm font-medium text-gold"
            >
              Reservasi
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
