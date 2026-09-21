import { motion } from 'framer-motion'
import { personal } from '../data/content'
import { pageVariants, staggerContainer, fadeUpItem } from '../anim'
import EditorWindow from '../components/EditorWindow'
import SnakeGame from '../components/SnakeGame'

export default function Hello() {
  return (
    <motion.section
      className="flex-1 flex items-center"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-0 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* Left: greeting */}
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.p variants={fadeUpItem} className="text-menu-text mb-3">
            Hi all. I am
          </motion.p>
          <motion.h1
            variants={fadeUpItem}
            className="text-4xl md:text-6xl font-medium text-hello-name mb-3 tracking-tight"
          >
            {personal.name}
          </motion.h1>
          <motion.h2
            variants={fadeUpItem}
            className="text-xl md:text-3xl text-purple-text mb-4"
          >
            <span className="tok-fn">&gt;</span> {personal.roleShort}
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="text-txt-bright/90 text-base md:text-lg mb-10 max-w-md"
          >
            {personal.tagline}
          </motion.p>

          <motion.p variants={fadeUpItem} className="text-menu-text mb-2">
            <span className="tok-comment">{'// '}complete the game to know more about me</span>
          </motion.p>
          <motion.p variants={fadeUpItem} className="text-menu-text mb-6">
            <span className="tok-comment">{'// '}you can also see it on my Github page</span>
          </motion.p>

          <motion.p variants={fadeUpItem} className="break-all">
            <span className="tok-key">const</span>{' '}
            <span className="tok-var">githubLink</span>{' '}
            <span className="text-txt-bright">=</span>{' '}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tok-str hover:underline"
            >
              &quot;{personal.github.replace('https://', '')}&quot;
            </a>
          </motion.p>
        </motion.div>

        {/* Right: code card + snake */}
        <motion.div
          className="grid gap-8 justify-items-center lg:justify-items-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <EditorWindow filename="developer.js" className="w-full max-w-[420px]">
            <pre className="text-[12.5px] leading-6 whitespace-pre-wrap">
<span className="tok-key">const</span> <span className="tok-var">developer</span> <span className="text-txt-bright">=</span> {'{'}
{'\n'}  <span className="tok-name">name</span>: <span className="tok-str">&apos;Jasir Colovic&apos;</span>,
{'\n'}  <span className="tok-name">role</span>: <span className="tok-str">&apos;AI Engineer&apos;</span>,
{'\n'}  <span className="tok-name">location</span>: <span className="tok-str">&apos;Sarajevo, BiH&apos;</span>,
{'\n'}  <span className="tok-name">stack</span>: [<span className="tok-str">&apos;LLMs&apos;</span>, <span className="tok-str">&apos;Python&apos;</span>, <span className="tok-str">&apos;Automation&apos;</span>],
{'\n'}  <span className="tok-name">available</span>: <span className="tok-key">true</span>,
{'\n'}{'}'}
            </pre>
          </EditorWindow>

          <SnakeGame />
        </motion.div>
      </div>
    </motion.section>
  )
}
