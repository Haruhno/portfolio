import { motion } from 'framer-motion'
import { ArrowLeft, Layers3 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function SkillDetailTab({ skill, skillIndex, sceneMode, onBack, onOpenSkill, onToggleScene }) {
  const isDay = sceneMode === 'day'

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-8"
    >
      <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Fiche axe</p>
            <h2 className={`mt-3 text-4xl font-semibold leading-tight md:text-5xl ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>{skill.name}</h2>
            <p className={`mt-3 text-base ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>{skill.summary}</p>
          </div>

          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
              isDay
                ? 'border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                : 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500 hover:bg-slate-800'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au résumé
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
          <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Résumé</p>
          <p className={`mt-4 text-lg leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>{skill.summary}</p>

          <div className="mt-8 grid gap-3">
            {skill.evidence.map((item) => (
              <div key={item} className={`rounded-2xl border p-4 text-base leading-8 ${isDay ? 'border-slate-200 bg-white text-slate-700' : 'border-slate-700 bg-slate-900 text-slate-200'}`}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
          <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Ce que cet axe couvre</p>
          <div className="mt-5 grid gap-3">
            {portfolioData.skills.map((item, index) => (
              <button
                key={item.name}
                onClick={() => onOpenSkill(index)}
                className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition-all duration-200 hover:scale-[1.01] ${
                  index === skillIndex
                    ? isDay
                      ? 'border-slate-400 bg-white text-slate-900'
                      : 'border-slate-500 bg-slate-100 text-slate-900'
                    : isDay
                      ? 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      : 'border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500'
                }`}
              >
                <span className="text-base font-medium">{item.name}</span>
                <Layers3 className="h-4 w-4 shrink-0" />
              </button>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  )
}
