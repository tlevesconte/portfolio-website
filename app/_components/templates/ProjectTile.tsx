import Link from "next/link";
import { UrlObject } from "url";

export default function ProjectTile({
  link,
  title,
  description,
}: {
  link: string;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <Link
      className="rounded border p-4 duration-300 hover:bg-[#EBEBEB]"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <h3 className="mb-2 text-[1.1em] font-medium text-titleColour">
          {title}
        </h3>
        <p className="text-[.85em] text-descriptionColour">{description}</p>
      </div>
    </Link>
  );
}
