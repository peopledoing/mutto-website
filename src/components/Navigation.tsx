const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-16">
        <a href="#" className="group leading-none text-foreground">
          <span className="block font-display text-xl font-medium tracking-[0.02em] md:text-2xl">
            OBJE
          </span>
          <span className="mt-1 block font-body text-[0.6rem] font-light uppercase tracking-[0.35em] text-muted md:text-[0.65rem]">
            and Partners
          </span>
        </a>

        <ul className="flex items-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[0.7rem] font-normal uppercase tracking-[0.25em] text-foreground transition-opacity duration-300 hover:opacity-50"
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
