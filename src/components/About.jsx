import { motion } from 'framer-motion'
import { TerminalSquare, BrainCircuit, CircuitBoard } from 'lucide-react'

export default function About() {
  const items = [
    {
      key: 'iit',
      label: 'IIT Bombay → ML/Systems',
      hint: 'Metallurgy to machine learning and systems thinking',
      icon: CircuitBoard,
    },
    {
      key: 'adobe',
      label: 'Adobe Express',
      hint: 'Auto-edit timelines, real-time media intelligence',
      icon: TerminalSquare,
    },
    {
      key: 'resobin',
      label: 'ResoBin',
      hint: 'Retrieval flows, reviews, and ranking at scale',
      icon: BrainCircuit,
    },
  ]

  return (
    <section className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">About me</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            I like building end-to-end systems: clean APIs, dependable services, and models that
            pull their weight. I enjoy the craft — shaping data, designing interfaces, and pushing
            code that actually ships. When I say I debug at 3AM, I mean hunting the bug down with
            logs, tests, and a stubborn grin.
          </p>
          <ul className="mt-8 space-y-3">
            {items.map(({ key, label, hint, icon: Icon }) => (
              <li
                key={key}
                className="group flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <Icon className="mt-0.5 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-neutral-300">{hint}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10">
          <motion.div
            className="absolute left-6 top-6 rounded-md bg-black/60 p-3 font-mono text-sm text-lime-300 ring-1 ring-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            $ npm run deploy — Error: no one admitted to breaking it
          </motion.div>

          <motion.div
            className="absolute right-6 top-24 rounded-md bg-black/60 p-3 font-mono text-sm text-cyan-200 ring-1 ring-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Adobe Express ▶ auto-trim timeline… synced.
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-1/2 w-[80%] -translate-x-1/2 rounded-md bg-black/60 p-3 font-mono text-sm text-purple-200 ring-1 ring-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            ResoBin: RAG pipeline → rank → response ✓
          </motion.div>

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute left-1/4 top-1/3 h-2 w-2 animate-ping rounded-full bg-cyan-300/80" />
            <div className="absolute left-1/2 top-2/3 h-2 w-2 animate-ping rounded-full bg-purple-300/80" />
            <div className="absolute left-2/3 top-1/4 h-2 w-2 animate-ping rounded-full bg-teal-300/80" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
