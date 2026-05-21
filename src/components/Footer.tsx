const footerLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:hello@obje.partners" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border px-6 py-12 md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl font-light tracking-tight text-foreground md:text-4xl">
            OBJE and Partners
          </p>
          <p className="mt-3 font-body text-sm font-light text-muted">
            Architecture & Creative Industry
          </p>
        </div>

        <div className="flex flex-col gap-8 md:items-end">
          <ul className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-[0.7rem] uppercase tracking-[0.25em] text-foreground transition-opacity duration-300 hover:opacity-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-body text-[0.65rem] font-light uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} OBJE and Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
