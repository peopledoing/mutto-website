export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end px-6 pb-24 pt-32 md:px-12 md:pb-32 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="mb-8 font-body text-[0.65rem] font-light uppercase tracking-[0.4em] text-muted md:mb-12 md:text-xs">
          Architecture · Creative Industry
        </p>

        <h1 className="font-display max-w-[14ch] text-[clamp(3.25rem,10vw,9.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-foreground">
          Space shaped by vision.
        </h1>

        <div className="mt-16 flex flex-col gap-12 border-t border-border pt-12 md:mt-24 md:flex-row md:items-end md:justify-between md:pt-16 lg:mt-32">
          <p className="max-w-md font-body text-sm font-light leading-relaxed text-muted md:text-base">
            OBJE and Partners is an architecture and creative industry practice
            working at the intersection of built form, culture, and narrative —
            with clarity, restraint, and purpose.
          </p>

          <a
            href="#work"
            className="group inline-flex items-center gap-4 font-body text-[0.7rem] uppercase tracking-[0.25em] text-foreground"
          >
            <span>Explore work</span>
            <span
              aria-hidden
              className="inline-block h-px w-12 bg-foreground transition-all duration-500 group-hover:w-20"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden md:right-12 md:block lg:right-16">
        <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-muted [writing-mode:vertical-rl]">
          Est. 2024
        </span>
      </div>
    </section>
  );
}
