export default function ListItem({
  date,
  title,
  description,
}: {
  date: String;
  title: String;
  description: String;
}) {
  return (
    <li className="flex flex-col sm:flex-row">
      <span className="font-bold text-dateColour min-w-[105px]">{date}</span>
      <span className="mx-2 hidden sm:block"> | </span>
      <div className="flex flex-col">
        <h3 className="text-titleColour">{title}</h3>
        <p className="text-descriptionColour text-[.85em]">{description}</p>
      </div>
    </li>
  );
}
