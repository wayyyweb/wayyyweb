import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import { KawungDivider } from "./KawungPattern";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/kawungan.coffee", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/6281234567890", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer id="lokasi" className="relative bg-charcoal">
      <KawungDivider />

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-4 md:px-10">
        <div className="grid gap-10 border-b border-line pb-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-ivory">
              Kawungan<span className="text-gold">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Kedai kopi dan ruang singgah dengan racikan gula aren khas
              Nusantara, disajikan dalam suasana yang tenang dan hangat.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-gold">
              Lokasi
            </p>
            <div className="mt-4 flex gap-3 text-sm text-muted">
              <MapPin size={18} className="mt-0.5 shrink-0 text-muted" />
              <span>
                Jl. Kawung Raya No. 8,
                <br />
                Semarang, Jawa Tengah 50241
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-gold">
              Jam Buka
            </p>
            <div className="mt-4 flex gap-3 text-sm text-muted">
              <Clock size={18} className="mt-0.5 shrink-0 text-muted" />
              <span>
                Senin — Minggu
                <br />
                08.00 — 22.00 WIB
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-muted/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Kawungan Coffee. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat dengan secangkir kopi dan kesabaran.</p>
        </div>
      </div>
    </footer>
  );
}
