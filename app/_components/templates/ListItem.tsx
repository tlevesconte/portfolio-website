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
    // hover:border-borderColourHover
    <li className="flex flex-col sm:flex-row border rounded p-2">
      <span className="font-bold text-dateColour min-w-[105px]">{date}</span>
      <span className="mx-2 hidden sm:block"> | </span>
      <div className="flex flex-col">
        <h3 className="text-titleColour">{title}</h3>
        <p className="text-descriptionColour text-[.85em]">{description}</p>
      </div>
    </li>
  );
}
