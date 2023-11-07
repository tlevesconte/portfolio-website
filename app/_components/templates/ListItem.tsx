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
      <span className="font-bold text-dateColour">{date}</span>
      <span className="mx-2 hidden sm:block"> | </span>
      <div className="flex flex-col">
        <span className="text-titleColour">{title}</span>
        <span className="text-descriptionColour text-[.85em]">{description}</span>
      </div>
    </li>
  );
}
