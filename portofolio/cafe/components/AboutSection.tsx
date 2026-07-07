"use client";

import { motion, type Variants } from "motion/react";
import { KawungTile } from "./KawungPattern";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section id="cerita" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative aspect-square w-full max-w-md justify-self-center rounded-3xl border border-line bg-surface md:justify-self-start"
        >
          <svg width="100%" height="100%" className="rounded-3xl">
            <defs>
              <KawungTile id="about-tile" color="#C6A15B" opacity={0.7} tile={90} />
            </defs>
            <rect width="100%" height="100%" fill="url(#about-tile)" rx="24" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-gradient-to-br from-charcoal/60 via-transparent to-charcoal/70">
            <span className="rounded-full border border-gold/30 bg-charcoal/70 px-5 py-2 text-xs uppercase tracking-widest2 text-gold">
              Motif Kawung
            </span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="text-xs font-medium uppercase tracking-widest2 text-gold">
            Cerita Kami
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ivory md:text-5xl">
            Empat Arah, Satu Keseimbangan
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            Nama Kawungan diambil dari motif batik kawung — empat lengkung
            yang bertemu di satu titik, konon terinspirasi dari belahan buah
            aren. Pohon yang sama yang menghasilkan gula aren dalam es kopi
            susu andalan kami.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Filosofi itu kami bawa ke ruang ini: sederhana, seimbang, dan
            tanpa perlu ramai untuk terasa hangat. Setiap cangkir diseduh
            dengan tempo yang sama seperti motif itu ditenun — pelan, dan
            penuh perhatian.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <p className="font-display text-3xl text-gold">100%</p>
              <p className="mt-1 text-xs text-muted">Biji Lokal</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">2</p>
              <p className="mt-1 text-xs text-muted">Menu Utama</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">Harian</p>
              <p className="mt-1 text-xs text-muted">Racik Segar</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
