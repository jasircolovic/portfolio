import { experience } from '../data/content'
import Reveal from './Reveal'

export default function Work() {
  return (
    <section
      id="work"
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 relative z-[2]"
    >
      <Reveal className="section-label">Selected Work — 01</Reveal>

      <div>
        {experience.map((role, i) => (
          <Reveal
            as="article"
            key={role.num}
            delay={i * 80}
            className="role-card last:border-b last:border-rule"
          >
            <div className="role-num font-mono text-[0.8rem] font-medium text-muted tracking-wider pt-2 transition-colors duration-300">
              [ {role.num} ]
            </div>

            <div className="grid md:grid-cols-[1.4fr_2fr] gap-6 md:gap-12">
              <div>
                <h3 className="font-serif font-medium text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.1] tracking-[-0.01em] mb-1">
                  {role.company}
                </h3>
                <div className="font-mono text-[0.75rem] tracking-[0.15em] uppercase text-accent mb-3">
                  {role.title}
                </div>
                <div className="font-mono text-[0.75rem] text-muted tracking-wider">
                  {role.meta}
                </div>
              </div>

              <div className="text-[1.02rem] leading-[1.65] text-ink">
                <ul className="arrow-list list-none">
                  {role.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
