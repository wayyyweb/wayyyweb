import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kawungan Coffee — Kopi Lokal, Motif Tak Lekang",
  description:
    "Kawungan Coffee menyajikan racikan kopi dan makanan ringan khas Nusantara dalam ruang yang hangat dan tenang. Lihat menu dan reservasi tempatmu hari ini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-gold/30 selection:text-ivory">
        {children}
      </body>
    </html>
  );
}
