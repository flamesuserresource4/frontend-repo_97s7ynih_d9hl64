import { motion } from 'framer-motion'
import { Globe, GitBranch, ExternalLink, Cpu } from 'lucide-react'

const projects = [
  {
    name: 'ResoBin',
    desc: 'Retrieval → Rank → Generate. Course resources, explained.',
    tags: ['React', 'FastAPI', 'RAG', 'Vector DB'],
    links: [
      { href: 'https://github.com/viditkh/resobin', label: 'GitHub' },
      { href: '#', label: 'Live Demo' },
    ],
  },
  {
    name: 'Server Metrics',
    desc: 'Live metrics, stream visualizations, and alerting.',
    tags: ['WebSockets', 'Dashboards', 'Time Series'],
    links: [
      { href: '#', label: 'GitHub' },
    ],
  },
  {
    name: 'API Visualizer',
    desc: 'Requests in, responses out — follow the flow.',
    tags: ['FastAPI', 'Tracing', 'OpenTelemetry'],
    links: [
      { href: '#', label: 'GitHub' },
    ],
  },
]

function Tag({ text }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-cyan-200">
      {text}
    </span>
  )
}

export default function Projects() {
  return (
    <section className="w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="hidden items-center gap-2 text-cyan-300 md:flex">
            <GitBranch className="h-4 w-4" />
            <span className="text-sm">Shipping beats showing</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
              </div>
              <div className="relative z-10">
                <div className="mb-2 flex items-center gap-2 text-cyan-300">
                  <Cpu className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wider">{p.name}</span>
                </div>
                <p className="font-medium">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Tag key={t} text={t} />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
