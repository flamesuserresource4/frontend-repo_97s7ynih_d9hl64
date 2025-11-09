import { useState } from 'react'
import { motion } from 'framer-motion'
import { SendHorizontal } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-semibold">Let’s collaborate</h2>
        <p className="mt-3 text-neutral-300">
          Building something cool? Ping me. I’m always up for systems that push boundaries.
        </p>

        <motion.form
          onSubmit={onSubmit}
          className="mx-auto mt-8 grid w-full gap-3 rounded-xl border border-white/10 bg-white/5 p-6 text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-sm text-neutral-300">Name</label>
          <input
            className="rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none ring-cyan-400/20 placeholder:text-neutral-500 focus:ring-2"
            placeholder="> your-name"
            required
          />
          <label className="mt-3 block text-sm text-neutral-300">Message</label>
          <textarea
            className="min-h-[120px] rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none ring-cyan-400/20 placeholder:text-neutral-500 focus:ring-2"
            placeholder="> what are we building?"
            required
          />
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-cyan-500/10 px-4 py-2 font-medium text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/20"
          >
            <SendHorizontal className="h-4 w-4" /> Send
          </button>
          {submitted && (
            <p className="mt-3 text-sm text-emerald-300">Message queued. See you in the inbox.</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
