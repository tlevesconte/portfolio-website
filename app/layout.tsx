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
    "Hi! I'm Tomas, an aspiring Software Engineer living in Sweden.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sitka.className} px-[6%] mx-auto my-[18vmin] max-w-3xl bg-[#1F1F1F]`}>
        {children}
      </body>
    </html>
  );
}
