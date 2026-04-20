import { personal } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-16 relative z-[2]"
    >
      <Reveal className="section-label">Get in Touch — 04</Reveal>

      <Reveal
        as="h2"
        className="font-serif font-light text-[clamp(3rem,11vw,9rem)] leading-[0.95] tracking-[-0.035em] mb-12"
      >
        Have a project? <em className="italic text-accent font-normal">Let's</em>
        <br />
        <a
          href={`mailto:${personal.email}`}
          className="inline-block border-b-2 border-ink hover:text-accent hover:border-accent transition-colors"
        >
          build something.
        </a>
      </Reveal>

      <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 pt-8 border-t border-rule font-mono text-[0.78rem] tracking-[0.08em]">
        <ContactItem label="Email" href={`mailto:${personal.email}`}>
          {personal.email}
        </ContactItem>
        <ContactItem label="Phone" href={`tel:${personal.phone.replace(/\s/g, '')}`}>
          {personal.phone}
        </ContactItem>
        <ContactItem label="GitHub" href={personal.github} external>
          {personal.githubHandle}
        </ContactItem>
        <ContactItem label="LinkedIn" href={personal.linkedin} external>
          {personal.linkedinHandle}
        </ContactItem>
        <div>
          <label className="block text-[0.68rem] uppercase tracking-[0.18em] text-muted mb-2">
            Based in
          </label>
          <span>Sarajevo, BiH</span>
        </div>
      </Reveal>
    </section>
  )
}

function ContactItem({ label, href, external, children }) {
  return (
    <div>
      <label className="block text-[0.68rem] uppercase tracking-[0.18em] text-muted mb-2">
        {label}
      </label>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="text-ink border-b border-transparent hover:text-accent hover:border-accent transition-colors break-all"
      >
        {children}
      </a>
    </div>
  )
}
