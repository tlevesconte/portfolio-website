export default function Section({
  heading,
  children,
}: {
  heading: String
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[2.5em]">
      <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">
        {heading}
      </h2>
      {children}
    </section>
  );
}
