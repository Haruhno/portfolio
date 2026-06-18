import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function QuestsTab({ sceneMode, onOpenProject }) {
  const isDay = sceneMode === 'day'

  return (
    <motion.section
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-6"
    >
      <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Stages et projets</p>
            <h2 className={`mt-3 text-4xl font-semibold leading-tight ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>Des expériences concrètes, séparées en projets</h2>
          </div>
          <p className={`max-w-3xl text-base leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>
            Découvrez les principales expériences académiques et professionnelles qui ont marqué mon parcours en BUT Informatique.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-2">
        {portfolioData.quests.map((quest, index) => (
          <article
            key={quest.title}
            className={`flex h-full flex-col rounded-[2rem] border p-6 transition-transform duration-200 hover:-translate-y-1 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`text-[0.7rem] uppercase tracking-[0.4em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Expérience</p>
                <h3 className={`mt-2 text-2xl font-semibold ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>{quest.title}</h3>
                <p className={`mt-3 text-base ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>{quest.subtitle}</p>
              </div>
            </div>

            <div className={`mt-6 rounded-2xl border p-5 ${isDay ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
              <p className={`text-[0.7rem] uppercase tracking-[0.35em] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Contexte</p>
              <p className="mt-3 text-base leading-8">{quest.mission}</p>
            </div>

            <div className="mt-6">
              <p className={`text-[0.7rem] uppercase tracking-[0.35em] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Technologies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {quest.technologies.map((technology) => (
                  <span
                    key={technology}
                    className={`rounded-full border px-3 py-2 text-sm ${isDay ? 'border-slate-300 bg-white text-slate-700' : 'border-slate-600 bg-slate-900 text-slate-100'}`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className={`mt-6 flex flex-1 items-end border-t pt-5 ${isDay ? 'border-slate-200' : 'border-slate-700'}`}>
              <button
                onClick={() => onOpenProject(index)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  isDay
                    ? 'border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                    : 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500 hover:bg-slate-800'
                }`}
              >
                Voir la fiche détaillée
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
