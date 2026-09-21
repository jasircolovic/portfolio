import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="h-full panel-border overflow-hidden flex flex-col hover:border-line-soft/50 transition-colors group"
    >
      {/* Thumbnail */}
      <div
        className={`h-40 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}
      >
        <span className="text-bg/80 text-2xl font-semibold tracking-tight">
          {project.title}
        </span>
        <span className="absolute inset-0 bg-bg/10 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Tags */}
      <div className="px-5 pt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] text-menu-text border border-line rounded px-2 py-0.5"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex-1">
        <p className="text-sm text-txt leading-relaxed">{project.description}</p>
      </div>

      {/* Actions */}
      <div className="px-5 pb-5 flex gap-3">
        <a
          href={project.demo}
          className="btn-outline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          view-project
        </a>
        <a
          href={project.code}
          className="text-sm inline-flex items-center px-4 py-2 text-menu-text hover:text-txt-bright transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          view-code
        </a>
      </div>
    </motion.article>
  )
}
