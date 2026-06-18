import { motion } from 'framer-motion'
import { ArrowRight, Layers3 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function SkillsTab({ sceneMode, onOpenSkill }) {
  const isDay = sceneMode === 'day'

  return (
    <motion.section
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-8"
    >
      <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className={`mt-3 text-4xl font-semibold leading-tight ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>Mes acquis</h2>
            <p className={`mt-4 max-w-3xl text-base leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>
              Quatre axes, chacun avec sa fiche dédiée.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.skills.map((skill, index) => (
          <article key={skill.name} className={`rounded-[2rem] border p-6 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`rounded-2xl border p-3 ${isDay ? 'border-slate-200 bg-white text-slate-700' : 'border-slate-700 bg-slate-900 text-slate-100'}`}>
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Axe {index + 1}</p>
                  <h3 className={`mt-2 text-2xl font-semibold ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>{skill.name}</h3>
                </div>
              </div>
            </div>

            <p className={`mt-5 text-base leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>{skill.summary}</p>

            <button
              onClick={() => onOpenSkill(index)}
              className={`mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                isDay
                  ? 'border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                  : 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500 hover:bg-slate-800'
              }`}
            >
              Ouvrir la fiche de l'axe
              <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
