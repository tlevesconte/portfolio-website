import Header from "@/app/_components/sections/globals/Header";
import About from "@/app/_components/sections/About";
import ComponentSwitcher from "@/app/_components/ComponentSwitcher";
import Footer from "@/app/_components/sections/globals/Footer";

export default function Home() {
  return (
    <div className="lg:flex mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:gap-4 lg:justify-between">
      <Header />
      <main className="lg:py-24 lg:w-1/2">
        <About />
        <ComponentSwitcher />
        <Footer />
      </main>
    </div>
  );
}
