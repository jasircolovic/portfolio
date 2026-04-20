import { personal } from '../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen grid content-center max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-16 relative z-[2]"
    >
      {/* Meta line */}
      <div
        className="fade-in-delayed font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted flex justify-between mb-12 pb-4 border-b border-rule"
        style={{ animationDelay: '0.05s' }}
      >
        <span>Portfolio / MMXXVI</span>
        <span className="text-right">Sarajevo — {personal.coords}</span>
      </div>

      {/* Huge name */}
      <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] m-0 text-[clamp(3.5rem,13vw,11rem)]">
        <span className="hero-word">Jasir </span>
        <span className="hero-word italic font-normal text-accent">Colovic.</span>
      </h1>

      {/* Lower hero grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12 items-end">
        <div
          className="fade-in-delayed font-mono text-sm tracking-[0.1em] uppercase leading-[1.8]"
          style={{ animationDelay: '0.7s' }}
        >
          <span className="inline-block w-[7px] h-[7px] rounded-full bg-accent mr-2 animate-pulse-dot" />
          Software Engineer
          <br />
          Front-end &amp; DevOps
          <br />
          Available for 2026
        </div>

        <p
          className="fade-in-delayed font-serif text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.55] max-w-[38ch] text-muted"
          style={{ animationDelay: '0.85s' }}
        >
          Final-year software engineer building{' '}
          <strong className="text-ink font-medium italic">scalable, user-focused</strong>{' '}
          applications — from React interfaces to Terraform-provisioned cloud infrastructure,
          with a taste for clean architecture and automated pipelines.
        </p>
      </div>
    </section>
  )
}
