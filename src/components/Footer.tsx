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
  <footer className="py-16 bg-[hsl(30,10%,6%)] text-[hsl(40,20%,90%)]">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <Link to="/" className="font-display text-2xl font-bold mb-6 inline-block text-white">
          IDINGO<span className="text-primary">.</span>
        </Link>
        <p className="text-[hsl(40,10%,60%)] leading-relaxed max-w-sm font-body text-sm">
          Optimize Health Naturally. We are your #1 health advocate, providing science-backed natural supplements.
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <h3 className="font-bold mb-6 uppercase tracking-wider text-sm text-white">Navigation</h3>
        <ul className="space-y-3 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="text-[hsl(40,10%,60%)] hover:text-primary transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h3 className="font-bold mb-6 uppercase tracking-wider text-sm text-white">Locations</h3>
        <ul className="space-y-4 text-[hsl(40,10%,60%)] text-sm font-body">
          <li>Headquarters: Boynton Beach, FL</li>
          <li>Warehouse: Norcross, GA</li>
          <li>Manufacturing: Oklahoma City, OK</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-white">Newsletter</h4>
        <p className="text-sm text-[hsl(40,10%,50%)] mb-4 font-body">Stay In Touch. Sign Up to get the latest updates.</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full text-white placeholder:text-white/30 focus:outline-none focus:border-primary"
          />
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold font-body shrink-0 hover:brightness-110 transition-all">
            Join
          </button>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-body text-xs text-[hsl(40,10%,55%)]">
        © {new Date().getFullYear()} Idingo LLC. All rights reserved.
      </p>
      <div className="flex gap-6 text-xs text-[hsl(40,10%,35%)]">
        <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
