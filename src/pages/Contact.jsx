import { useState } from 'react'
import { motion } from 'framer-motion'
import { personal, socials } from '../data/content'
import { pageVariants } from '../anim'
import EditorWindow from '../components/EditorWindow'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <motion.div
      className="w-full max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-12"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <p className="text-menu-text mb-1">
        <span className="tok-comment">// _contact-me</span>
      </p>
      <h1 className="text-2xl md:text-3xl text-txt-bright mb-8">
        <span className="tok-fn">$</span> send me a message
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          <Field label="_name">
            <input
              required
              value={form.name}
              onChange={update('name')}
              placeholder="Jane Doe"
              className="input"
            />
          </Field>
          <Field label="_email">
            <input
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              placeholder="jane@email.com"
              className="input"
            />
          </Field>
          <Field label="_message">
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={update('message')}
              placeholder="Hi Jasir, let's build something..."
              className="input resize-none"
            />
          </Field>

          <button type="submit" className="btn-outline">
            submit-message
          </button>

          {sent && (
            <p className="text-green text-sm">
              <span className="tok-comment">{'// '}</span>
              opening your mail client… thanks for reaching out!
            </p>
          )}
        </form>

        {/* Right: live code + contacts */}
        <div className="space-y-8">
          <EditorWindow filename="message.js">
            <pre className="text-[12.5px] leading-6 whitespace-pre-wrap">
<span className="tok-key">const</span> <span className="tok-var">message</span> <span className="text-txt-bright">=</span> {'{'}
{'\n'}  <span className="tok-name">from</span>: <span className="tok-str">&apos;{form.name || '...'}&apos;</span>,
{'\n'}  <span className="tok-name">email</span>: <span className="tok-str">&apos;{form.email || '...'}&apos;</span>,
{'\n'}  <span className="tok-name">body</span>: <span className="tok-str">&apos;{form.message || '...'}&apos;</span>,
{'\n'}{'}'}
            </pre>
          </EditorWindow>

          <div className="panel-border p-5 space-y-3 text-sm">
            <p className="text-menu-text">
              <span className="tok-comment">// or reach me directly</span>
            </p>
            <ContactLine label="email" href={`mailto:${personal.email}`}>
              {personal.email}
            </ContactLine>
            <ContactLine label="phone" href={`tel:${personal.phone.replace(/\s/g, '')}`}>
              {personal.phone}
            </ContactLine>
            <ContactLine label="based" href={null}>
              {personal.location}
            </ContactLine>
            {socials.map((s) => (
              <ContactLine key={s.key} label={s.key} href={s.url} external>
                {s.user}
              </ContactLine>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm text-txt-bright mb-2">{label}</span>
      {children}
    </label>
  )
}

function ContactLine({ label, href, external, children }) {
  const inner = href ? (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="tok-str hover:underline break-all"
    >
      {children}
    </a>
  ) : (
    <span className="text-txt-bright">{children}</span>
  )
  return (
    <div className="flex gap-3">
      <span className="tok-var w-16 shrink-0">{label}:</span>
      {inner}
    </div>
  )
}
