"use client";

import { motion, type Variants } from "motion/react";
import KawungPattern from "./KawungPattern";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-charcoal pt-24">
      {/* Signature kawung field — faint, ambient, slowly breathing */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <KawungPattern opacity={0.07} tile={130} />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(198,161,91,0.12),rgba(21,18,15,0)_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-charcoal" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 md:px-10"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest2 text-gold"
        >
          Kopi Lokal, Motif Tak Lekang
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl text-balance font-display text-5xl font-medium leading-[1.08] text-ivory sm:text-6xl md:text-7xl"
        >
          Kopi yang <span className="text-gold">Menenun</span> Cerita
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted md:text-lg"
        >
          Racikan kopi dan gula aren khas Nusantara, disatukan dengan filosofi
          motif kawung — empat arah, satu keseimbangan. Singgah sebentar,
          nikmati secangkir ketenangan di tengah hari yang sibuk.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="group inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-bright hover:shadow-card-hover"
          >
            Lihat Menu
          </a>
          <a
            href="#reservasi"
            className="inline-flex items-center justify-center rounded-full border border-emerald-bright/50 bg-emerald/20 px-8 py-3.5 text-sm font-semibold text-ivory transition-all hover:border-emerald-bright hover:bg-emerald/40"
          >
            Reservasi
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex items-center gap-8 text-xs uppercase tracking-widest2 text-muted/70"
        >
          <span>Buka Setiap Hari</span>
          <span className="h-px w-8 bg-line" />
          <span>08.00 — 22.00</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
