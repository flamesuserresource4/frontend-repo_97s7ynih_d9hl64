import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, FileText, GraduationCap, Sparkles } from 'lucide-react'

const words = [
  'systems',
  'platforms',
  'models',
  'features',
  'tools',
  'things that actually ship',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const current = words[index]

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  const links = useMemo(
    () => [
      {
        href: 'https://drive.google.com',
        label: 'Resume',
        icon: FileText,
      },
      {
        href: 'https://github.com/viditkh',
        label: 'GitHub',
        icon: Github,
      },
      {
        href: 'https://www.linkedin.com/in/viditkhazanchi',
        label: 'LinkedIn',
        icon: Linkedin,
      },
      {
        href: 'https://scholar.google.com',
        label: 'Scholar',
        icon: GraduationCap,
      },
      {
        href: 'mailto:vidit.khazanchi@gmail.com',
        label: 'Email',
        icon: Mail,
      },
    ],
    []
  )

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignettes that don't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_70%)]" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm text-cyan-300 ring-1 ring-white/10 backdrop-blur"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="h-4 w-4" />
          Building at the edge of AI × Software
        </motion.div>

        <motion.h1
          className="text-balance bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I’m <span className="font-bold">Vidit Khazanchi</span> — I build intelligent
          <span className="whitespace-nowrap"> systems</span> and software that scales.
        </motion.h1>

        <div className="mt-4 h-10 text-lg text-cyan-300/90 sm:text-xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="inline-block align-middle font-mono"
            >
              I ship {current}.
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 font-medium text-white/90 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
            >
              <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:scale-110" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
