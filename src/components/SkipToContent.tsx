import { Link } from "react-router-dom";

const SkipToContent = () => (
  <Link
    to="#main-content"
    onClick={(e) => {
      e.preventDefault();
      const main = document.getElementById("main-content");
      if (main) {
        main.focus();
        main.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-body focus:text-sm focus:font-semibold focus:shadow-lg"
  >
    Skip to content
  </Link>
);

export default SkipToContent;
