import { education } from '../data/content'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 relative z-[2]"
    >
      <Reveal className="section-label">Education &amp; Certifications — 03</Reveal>

      <div className="border-t border-rule">
        {education.map((item, i) => (
          <Reveal key={item.course} delay={i * 50} className="edu-row">
            <div className="font-serif text-[1.3rem] font-medium tracking-[-0.01em]">
              {item.course}
            </div>
            <div className="font-serif italic text-[0.95rem] text-muted">
              {item.inst}
            </div>
            <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-muted md:text-right">
              {item.date}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
