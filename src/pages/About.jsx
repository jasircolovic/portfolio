import { useState } from 'react'
import { motion } from 'framer-motion'
import { aboutSections, experience, skillGroups, education } from '../data/content'
import { pageVariants } from '../anim'
import Reveal from '../components/Reveal'

export default function About() {
  const [openSections, setOpenSections] = useState(() =>
    Object.fromEntries(aboutSections.map((s) => [s.key, true])),
  )
  const [active, setActive] = useState({
    section: aboutSections[0].key,
    file: aboutSections[0].files[0].key,
  })

  const toggle = (key) =>
    setOpenSections((o) => ({ ...o, [key]: !o[key] }))

  const activeFile = aboutSections
    .find((s) => s.key === active.section)
    ?.files.find((f) => f.key === active.file)

  return (
    <motion.div
      className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-12"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <p className="text-menu-text mb-1">
        <span className="tok-comment">// _about-me</span>
      </p>
      <h1 className="text-2xl md:text-3xl text-txt-bright mb-8">
        <span className="tok-fn">$</span> whoami
      </h1>

      {/* Explorer + content */}
      <div className="panel-border overflow-hidden grid md:grid-cols-[260px_1fr] mb-14">
        {/* Sidebar */}
        <aside className="border-b md:border-b-0 md:border-r border-line bg-panel/40 py-3 text-sm">
          <p className="px-4 pb-2 text-[11px] uppercase tracking-widest text-menu-text">
            personal-info
          </p>
          {aboutSections.map((section) => (
            <div key={section.key}>
              <button
                onClick={() => toggle(section.key)}
                className="w-full flex items-center gap-2 px-4 py-1.5 text-txt hover:text-txt-bright transition-colors"
              >
                <span
                  className={`inline-block transition-transform ${
                    openSections[section.key] ? 'rotate-90' : ''
                  }`}
                >
                  ▸
                </span>
                <span>{section.icon}</span>
                <span>{section.key}</span>
              </button>
              {openSections[section.key] && (
                <div className="pl-9">
                  {section.files.map((file) => {
                    const isActive =
                      active.section === section.key && active.file === file.key
                    return (
                      <button
                        key={file.key}
                        onClick={() => setActive({ section: section.key, file: file.key })}
                        className={`w-full text-left py-1 flex items-center gap-2 transition-colors ${
                          isActive ? 'text-orange' : 'text-menu-text hover:text-txt-bright'
                        }`}
                      >
                        <span className="text-line-soft">📄</span>
                        {file.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div className="p-6 md:p-8 min-h-[280px]">
          <p className="text-menu-text mb-4">
            <span className="tok-comment">
              {`// ${active.section} / ${activeFile?.label}`}
            </span>
          </p>
          <div className="code-lines text-[13.5px] text-txt max-w-2xl">
            {activeFile?.body.map((line, i) => (
              <div className="cl" key={i}>
                <span className="whitespace-pre-wrap">
                  {line || ' '}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <SectionTitle comment="// professional experience" title="experience[]" />
      <div className="grid gap-4 mb-14">
        {experience.map((job, idx) => (
          <Reveal
            key={job.num}
            delay={idx * 0.06}
            className="panel-border p-5 md:p-6 hover:border-line-soft/50 transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h3 className="text-txt-bright text-lg">
                <span className="tok-fn">{job.num}.</span> {job.title}{' '}
                <span className="text-purple-text">@ {job.company}</span>
              </h3>
              <span className="text-xs text-menu-text">{job.meta}</span>
            </div>
            <ul className="space-y-1.5 text-sm text-txt">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="tok-fn shrink-0">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Skills */}
      <SectionTitle comment="// what I work with" title="skills{}" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {skillGroups.map((group, idx) => (
          <Reveal key={group.title} delay={idx * 0.05} className="panel-border p-5">
            <h3 className="text-green mb-3">{group.title}</h3>
            <ul className="space-y-1.5 text-sm">
              {group.items.map((item) => (
                <li key={item} className="text-txt flex gap-2">
                  <span className="text-line-soft">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Education */}
      <SectionTitle comment="// certifications & coursework" title="education[]" />
      <div className="panel-border divide-y divide-line">
        {education.map((e, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[1fr_1.4fr_auto] gap-2 md:gap-8 p-5 hover:bg-panel/50 transition-colors"
          >
            <span className="text-txt-bright">{e.course}</span>
            <span className="text-txt text-sm">{e.inst}</span>
            <span className="text-menu-text text-xs md:text-right whitespace-nowrap">
              {e.date}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function SectionTitle({ comment, title }) {
  return (
    <div className="mb-5">
      <p className="text-menu-text">
        <span className="tok-comment">{comment}</span>
      </p>
      <h2 className="text-xl md:text-2xl text-txt-bright">
        <span className="tok-key">const</span>{' '}
        <span className="tok-var">{title}</span>
      </h2>
    </div>
  )
}
