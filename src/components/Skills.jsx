import { skillGroups } from '../data/content'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="bg-ink text-paper py-20 md:py-32 mt-24 relative z-[2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal className="section-label !text-paper/50">Toolkit — 02</Reveal>

        <Reveal
          as="h2"
          className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none tracking-[-0.02em] mb-12 max-w-[18ch]"
        >
          The stack I reach for when{' '}
          <em className="italic text-accent-soft">building something real.</em>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 border-t border-paper/20 pt-10">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <h4 className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-accent-soft mb-5">
                {group.title}
              </h4>
              <ul className="list-none">
                {group.items.map((item) => (
                  <li key={item} className="skill-li">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
