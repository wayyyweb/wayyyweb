"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { MENU, type MenuItem } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";
import QuickViewModal from "./QuickViewModal";
import { KawungDivider } from "./KawungPattern";

const listContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

export default function MenuSection() {
  const [activeId, setActiveId] = useState(MENU[0].id);
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const active = MENU.find((c) => c.id === activeId) ?? MENU[0];

  return (
    <section id="menu" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest2 text-gold">
            Daftar Menu
          </span>
          <h2 className="mt-3 font-display text-4xl text-ivory md:text-5xl">
            Pilih, Cicipi, Nikmati
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Dua dunia rasa dalam satu kedai: racikan kopi &amp; minuman, dan
            makanan pendamping yang selalu pas ditemani obrolan panjang.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Kategori menu"
          className="mt-12 flex justify-center gap-3"
        >
          {MENU.map((category) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(category.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-charcoal"
                    : "text-muted hover:text-ivory"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tab-pill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm text-muted/80">
          {active.description}
        </p>

        {/* Menu grid — AnimatePresence handles the swap between categories */}
        <div className="mt-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              variants={listContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {active.items.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onSelect={setSelected}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-xs text-muted/60">
          Sentuh salah satu menu untuk melihat detail. Harga dapat berubah
          tanpa pemberitahuan.
        </p>
      </div>

      <div className="mt-20">
        <KawungDivider />
      </div>

      <QuickViewModal
        item={selected}
        categoryLabel={active.label}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
