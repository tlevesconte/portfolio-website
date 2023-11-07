import Header from "@/app/_components/sections/globals/Header";
import Footer from "@/app/_components/sections/globals/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto my-[18vmin] max-w-2xl">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
