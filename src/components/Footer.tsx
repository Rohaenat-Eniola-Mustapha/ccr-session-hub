const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-4">
          <span className="font-display text-2xl font-bold text-foreground">CCR</span>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-2">
          Career Clarity Room
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
