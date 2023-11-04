import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const sitka = localFont({
  src: "./sitka.ttf",
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
      <body className={`${sitka.className} px-[8%]`}>{children}</body>
    </html>
  );
}
