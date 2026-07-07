"use client";

import { motion } from "motion/react";

export default function ReservationSection() {
  return (
    <section
      id="reservasi"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10"
      >
        <span className="text-xs font-medium uppercase tracking-widest2 text-gold">
          Reservasi Tempat
        </span>
        <h2 className="mt-3 max-w-xl text-balance font-display text-3xl text-ivory md:text-4xl">
          Sedang Merencanakan Kumpul Bareng?
        </h2>
        <p className="mt-4 max-w-md text-balance text-sm leading-relaxed text-muted md:text-base">
          Kabari kami lewat WhatsApp — sebutkan tanggal, jam, dan jumlah
          orang, dan meja terbaik akan menunggu kedatanganmu.
        </p>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Kawungan%20Coffee%2C%20saya%20ingin%20reservasi%20tempat."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-bright px-9 py-3.5 text-sm font-semibold text-ivory transition-all hover:bg-emerald hover:shadow-card-hover"
        >
          Reservasi via WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
