import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectTags } from '../data/content'
import { pageVariants } from '../anim'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const shown =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(filter))

  return (
    <motion.div
      className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-12"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <p className="text-menu-text mb-1">
        <span className="tok-comment">// _projects</span>
      </p>
      <h1 className="text-2xl md:text-3xl text-txt-bright mb-8">
        <span className="tok-key">const</span>{' '}
        <span className="tok-var">projects</span>{' '}
        <span className="text-txt-bright">=</span>{' '}
        <span className="tok-fn">[ ]</span>
      </h1>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {projectTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`text-sm px-3 py-1 rounded border transition-colors ${
              filter === tag
                ? 'border-orange text-orange'
                : 'border-line text-menu-text hover:text-txt-bright'
            }`}
          >
            {tag === 'all' ? '// all' : `#${tag}`}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {shown.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
