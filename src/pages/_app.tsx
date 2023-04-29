import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-montserrat bg-secondary-dark text-sm text-primary-grey sm:text-md`}>
      <Component {...pageProps} />
    </main>
  );
}
