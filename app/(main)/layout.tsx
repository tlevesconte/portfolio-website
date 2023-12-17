import Header from "@/app/_components/sections/globals/Header";
import Footer from "@/app/_components/sections/globals/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:flex mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:gap-4 lg:justify-between">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
