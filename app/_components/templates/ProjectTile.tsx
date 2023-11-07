import Link from "next/link";

export default function ProjectTile({
  link,
  title,
  description,
}: {
  link: URL;
  title: String;
  description: React.ReactNode;
}) {
  return (
    <Link
      className="border rounded p-4 hover:border-borderColourHover duration-300"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <h3 className="text-[1.1em] text-titleColour font-medium mb-2">
          {title}
        </h3>
        <p className="text-[.85em] text-descriptionColour">{description}</p>
      </div>
    </Link>
  );
}
