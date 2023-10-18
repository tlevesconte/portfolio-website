import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-[18vmin] max-w-4xl">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
