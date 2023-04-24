import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.className} text-[#999] bg-[#191A1F] text-sm sm:text-[0.9375rem] sm:leading-{1.375rem}`}>
      <Component {...pageProps} />
    </main>
  );
}
