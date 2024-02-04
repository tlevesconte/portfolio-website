export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-col gap-y-4 text-[1.1em] leading-[1.5] text-white/70">
      {children}
    </ul>
  );
}
