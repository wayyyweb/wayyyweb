"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { MenuItem } from "@/data/menu";
import { KawungTile } from "./KawungPattern";

type QuickViewModalProps = {
  item: MenuItem | null;
  categoryLabel: string;
  onClose: () => void;
};

export default function QuickViewModal({
  item,
  categoryLabel,
  onClose,
}: QuickViewModalProps) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Detail menu ${item.name}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-line bg-surface shadow-card-hover"
          >
            <div className="relative flex h-32 items-center justify-center overflow-hidden bg-charcoal">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <KawungTile id="qv-tile" color="#C6A15B" opacity={0.5} tile={60} />
                </defs>
                <rect width="100%" height="100%" fill="url(#qv-tile)" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-charcoal/40" />
              {item.tag && (
                <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-charcoal">
                  {item.tag}
                </span>
              )}
              <button
                onClick={onClose}
                aria-label="Tutup detail menu"
                className="absolute right-4 top-4 rounded-full bg-charcoal/70 p-1.5 text-ivory/80 transition-colors hover:text-gold"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-7 py-6">
              <p className="text-xs uppercase tracking-widest2 text-muted">
                {categoryLabel}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ivory">
                {item.name}
              </h3>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-5">
                <span className="font-display text-2xl text-gold">
                  Rp {item.price}
                </span>
                <button
                  onClick={onClose}
                  className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-bright"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
