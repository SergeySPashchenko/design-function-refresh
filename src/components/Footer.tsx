import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="py-16 bg-foreground text-background">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <Link to="/" className="font-display text-2xl font-bold mb-6 inline-block">
          IDINGO<span className="text-primary">.</span>
        </Link>
        <p className="text-background/60 leading-relaxed max-w-sm">
          Optimize Health Naturally. We are your #1 health advocate, providing science-backed natural supplements.
        </p>
      </div>

        <nav aria-label="Footer navigation">
        <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
        <ul className="space-y-3 text-background/60 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Locations</h4>
        <ul className="space-y-4 text-background/60 text-sm">
          <li>Headquarters: Boynton Beach, FL</li>
          <li>Warehouse: Norcross, GA</li>
          <li>Manufacturing: Oklahoma City, OK</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
        <p className="text-sm text-background/60 mb-4">Stay In Touch. Sign Up to get the latest updates.</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="bg-background/10 border border-background/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary"
          />
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold">Join</button>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-6 mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-body text-xs text-background/40">
        © {new Date().getFullYear()} Idingo LLC. All rights reserved.
      </p>
      <div className="flex gap-6 text-xs text-background/40">
        <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
