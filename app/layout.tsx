import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const palatinoLinotype = localFont({
  src: './palatino-linotype.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tomas Le Vesconte',
  description: 'Need to change this...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${palatinoLinotype.className} text-lg px-[8%]`}>{children}</body>
    </html>
  )
}
