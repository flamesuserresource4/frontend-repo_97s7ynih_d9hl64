import { motion } from 'framer-motion'
import { Shield, Video, ServerCog, Loop } from 'lucide-react'

const roles = [
  {
    company: 'Adobe',
    title: 'Software/ML',
    points: [
      'Auto-generated video edits',
      'Realtime media intelligence',
    ],
    icon: Video,
    accent: 'from-pink-500/20 to-purple-500/10',
  },
  {
    company: 'Bosch',
    title: 'Security Analytics',
    points: ['Intrusion detection', 'Adversarial robustness'],
    icon: Shield,
    accent: 'from-red-500/20 to-blue-500/10',
  },
  {
    company: 'IIT Bombay',
    title: 'SysAdmin',
    points: ['Server upgrades', 'Network graph ops'],
    icon: ServerCog,
    accent: 'from-sky-500/20 to-emerald-500/10',
  },
  {
    company: 'senzcraft',
    title: 'Human-in-the-loop ML',
    points: ['Feedback loops', 'Production pipelines'],
    icon: Loop,
    accent: 'from-indigo-500/20 to-cyan-500/10',
  },
]

export default function Experience() {
  return (
    <section className="w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {roles.map(({ company, title, points, icon: Icon, accent }, i) => (
            <motion.div
              key={company}
              className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${accent} p-5`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-400/30 blur-3xl" />
              </div>
              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-2">
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <span className="text-sm uppercase tracking-wider text-cyan-300/90">{company}</span>
                </div>
                <h3 className="text-xl font-medium">{title}</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-300">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
