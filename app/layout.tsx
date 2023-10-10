import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const sitka = localFont({
  src: "./sitka.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tomas Le Vesconte",
  description: "Need to change this...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sitka.className} px-[8%]`}>{children}</body>
    </html>
  );
}
