import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Header from "./_components/sections/globals/Header";

const sitka = localFont({
  src: "./sitka.ttf",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tomas Le Vesconte",
  description:
    "I'm a Software Engineer with dual British and Swedish nationality, now living in Sweden. If you'd like to get in touch, you can reach me at tomas.levesconte@gmail.com.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sitka.className}`}>
        <div className="lg:flex mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:gap-4 lg:justify-between">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
