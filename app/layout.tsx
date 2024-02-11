import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Inter } from "next/font/google";

const sitka = localFont({
  src: "./sitka.ttf",
  display: "swap",
});

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Tomas Le Vesconte",
  description:
    "Hi! I'm Tomas, an aspiring Software Engineer living in Sweden. In my spare time, I enjoy long-distance running and working on personal projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sitka.className} bg-[#181A1B] text-white`}>
        {children}
      </body>
    </html>
  );
}
