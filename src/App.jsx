import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-center text-neutral-400">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-md rounded-lg bg-black/40 p-4 text-left font-mono">
            <div>$ whoami</div>
            <div className="text-white">→ Vidit Khazanchi</div>
            <div className="mt-2">$ system status: <span className="text-emerald-300">active</span></div>
          </div>
          <p className="mt-6 text-sm">© {new Date().getFullYear()} Vidit Khazanchi</p>
        </div>
      </footer>
    </div>
  )
}

export default App
