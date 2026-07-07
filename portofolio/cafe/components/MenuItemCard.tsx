"use client";

import { motion, type Variants } from "motion/react";
import type { MenuItem } from "@/data/menu";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type MenuItemCardProps = {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
};

export default function MenuItemCard({ item, onSelect }: MenuItemCardProps) {
  return (
    <motion.button
      layout
      variants={cardVariants}
      onClick={() => onSelect(item)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex w-full items-start justify-between gap-4 rounded-2xl border border-line bg-surface px-5 py-4 text-left shadow-card transition-shadow duration-300 hover:border-gold/40 hover:shadow-card-hover"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-display text-lg text-ivory group-hover:text-gold-bright">
            {item.name}
          </h3>
        </div>
        {item.tag && (
          <span className="mt-1.5 inline-block rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
            {item.tag}
          </span>
        )}
      </div>

      <span className="shrink-0 whitespace-nowrap pt-1 font-display text-base text-gold">
        Rp {item.price}
      </span>
    </motion.button>
  );
}
