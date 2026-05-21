const navLinks = [
  { label: "Projects", href: "/" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "People", href: "#people" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="flex h-14 items-center justify-between px-4 md:h-16 md:px-8 lg:px-10">
        <a href="/" className="font-body text-sm font-medium tracking-wide text-foreground md:text-[0.9rem]">
          OBJE
        </a>

        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 md:gap-x-6 lg:gap-x-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-[0.65rem] font-normal text-foreground transition-opacity hover:opacity-50 md:text-xs"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
