import About from "@/app/_components/sections/About";
import ComponentSwitcher from "@/app/_components/ComponentSwitcher";
import Footer from "@/app/_components/sections/globals/Footer";

export default function Home() {
  return (
    <main className="lg:py-24 lg:w-1/2">
      <About />
      <ComponentSwitcher />
      <Footer />
    </main>
  );
}
