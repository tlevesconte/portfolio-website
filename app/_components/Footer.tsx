export default function Footer() {
  const currentYear = new Date().getFullYear();

    return (
      <footer>
        <p className="italic font-[.95em] text-footerColour">&copy; {currentYear} Tomas Le Vesconte</p>
      </footer>
    );
  }
  