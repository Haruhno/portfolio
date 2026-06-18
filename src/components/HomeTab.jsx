import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function HomeTab({ sceneMode, onToggleScene }) {
  const isDay = sceneMode === 'day'
  const { profile, skills } = portfolioData

  const categories = [
    { label: 'Formation', value: 'BUT Informatique -> ESIEE Paris', icon: GraduationCap },
    { label: 'Compétences', value: `${skills.length} axes de progression`, icon: Sparkles },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex min-h-[calc(100vh-10rem)] items-center justify-center py-2 md:py-4"
    >
      <div className={`w-full max-w-4xl ${isDay ? 'text-slate-900' : 'text-white'}`}>
        <section className={`rounded-[2.25rem] border p-8 text-center md:p-12 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950'}`}>
          <h2 className={`mt-4 text-5xl font-semibold leading-tight md:text-6xl ${isDay ? 'text-slate-900' : 'text-white'}`}>Hasmir Boinali</h2>
          <p className={`mx-auto mt-4 max-w-2xl text-lg leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>
            Étudiant en cycle ingénieur informatique à l'ESIEE Paris, diplômé du BUT Informatique de l'IUT de Créteil-Vitry.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {categories.map((category) => {
              const Icon = category.icon

              return (
                <div key={category.label} className={`rounded-2xl border p-4 text-left ${isDay ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-xs uppercase tracking-[0.35em] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>{category.label}</span>
                    <Icon className={`h-4 w-4 ${isDay ? 'text-slate-500' : 'text-slate-300'}`} />
                  </div>
                  <p className={`mt-3 text-base leading-7 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>{category.value}</p>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </motion.section>
  )
}