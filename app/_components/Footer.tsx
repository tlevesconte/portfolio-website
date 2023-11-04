export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="italic font-[.95em] text-paragraphColour">
        &copy; {currentYear} Tomas Le Vesconte
      </p>
    </footer>
  );
}
