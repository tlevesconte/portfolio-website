import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-montserrat sm:leading-{1.375rem} bg-[#191A1F] text-sm text-[#999] sm:text-[0.9375rem]`}>
      <Component {...pageProps} />
    </main>
  );
}
