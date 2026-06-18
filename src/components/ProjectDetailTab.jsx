import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Layers3 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const projectHighlights = (project) => [
  { label: 'Cadre', value: project.subtitle },
  { label: 'Architecture', value: project.details[0] },
  { label: 'Stack', value: project.technologies.join(' · ') },
  { label: 'Retenu', value: project.result },
]

function getRelevantSkills(project) {
  const terms = project.technologies.map((technology) => technology.toLowerCase())

  return portfolioData.skills.filter((skill) =>
    skill.evidence.some((item) => terms.some((term) => item.toLowerCase().includes(term)))
  )
}

export default function ProjectDetailTab({ project, sceneMode, onBack, onToggleScene, onOpenProject }) {
  const isDay = sceneMode === 'day'
  const relatedSkills = getRelevantSkills(project)
  const highlights = projectHighlights(project)

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
            <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Fiche projet</p>
            <h2 className={`mt-3 text-4xl font-semibold leading-tight md:text-5xl ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>{project.title}</h2>
            <p className={`mt-3 text-base ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>{project.subtitle}</p>
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
            Retour aux projets
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
          <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Contexte métier</p>
          <p className={`mt-4 text-lg leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>{project.mission}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight.label} className={`rounded-2xl border px-4 py-4 ${isDay ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
                <p className={`text-[0.7rem] uppercase tracking-[0.35em] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>{highlight.label}</p>
                <p className={`mt-3 text-base leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>{highlight.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
          <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Compétences mobilisées</p>
          <div className="mt-5 space-y-3">
            {relatedSkills.map((skill) => (
              <div key={skill.name} className={`rounded-2xl border p-4 ${isDay ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
                <div className="flex items-center gap-3">
                  <div className={`rounded-full p-2 ${isDay ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-slate-100'}`}>
                    <Layers3 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className={`text-base font-semibold ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>{skill.name}</p>
                    <p className={`mt-2 text-base leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>{skill.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Détails techniques</p>
            <h3 className={`mt-3 text-3xl font-semibold leading-tight ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>Toutes les briques utilisées sur le projet</h3>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {project.details.map((detail) => (
            <div key={detail} className={`flex gap-3 rounded-2xl border p-4 text-base leading-8 ${isDay ? 'border-slate-200 bg-white text-slate-700' : 'border-slate-700 bg-slate-900 text-slate-200'}`}>
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
              <span>{detail}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className={`rounded-full border px-3 py-2 text-sm ${isDay ? 'border-slate-300 bg-white text-slate-700' : 'border-slate-700 bg-slate-900 text-slate-100'}`}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
        <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Résultat</p>
        <p className={`mt-4 max-w-4xl text-lg leading-8 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>{project.result}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {portfolioData.quests.map((item, index) => (
          <button
            key={item.title}
            onClick={() => onOpenProject(index)}
            className={`rounded-full border px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
              item.title === project.title
                ? isDay
                  ? 'border-slate-400 bg-slate-900 text-white'
                  : 'border-slate-500 bg-slate-100 text-slate-900'
                : isDay
                  ? 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                  : 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500 hover:bg-slate-800'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </motion.section>
  )
}