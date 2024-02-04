export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="font-[.95em] italic text-white/70">
        &copy; {currentYear} Tomas Le Vesconte
      </p>
    </footer>
  );
}
