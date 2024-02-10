export default function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[5em] lg:scroll-mt-24" id={id}>
      <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">
        {heading}
      </h2>
      {children}
    </section>
  );
}
