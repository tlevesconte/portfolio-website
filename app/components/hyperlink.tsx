export default function Hyperlink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <a
      className="no-underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
