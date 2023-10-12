import Header from "../_components/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-[18vmin] max-w-4xl">
      <Header />
      {children}
    </div>
  );
}
