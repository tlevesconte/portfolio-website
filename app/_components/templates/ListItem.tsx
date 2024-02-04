export default function ListItem({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) {
  return (
    <li className="flex flex-col rounded border p-2 sm:flex-row">
      <span className="min-w-[105px] font-bold text-white">{date}</span>
      <span className="mx-2 hidden text-white sm:block"> | </span>
      <div className="flex flex-col">
        <h3 className="text-white">{title}</h3>
        <p className="text-[.85em] text-white/70">{description}</p>
      </div>
    </li>
  );
}
