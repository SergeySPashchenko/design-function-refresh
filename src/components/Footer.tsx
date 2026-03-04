const Footer = () => (
  <footer className="py-10 bg-foreground">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-xl font-bold text-background">
        IDINGO<span className="text-primary">.</span>
      </p>
      <p className="font-body text-sm text-background/50">
        © {new Date().getFullYear()} Idingo LLC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
