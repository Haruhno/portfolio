import { motion } from 'framer-motion'
import { Braces, GraduationCap, HeartHandshake, LaptopMinimal, Palette, Rocket } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const interestIcons = [LaptopMinimal, HeartHandshake, Rocket, Braces, Palette]

export default function ProfileTab({ sceneMode }) {
  const { profile } = portfolioData
  const isDay = sceneMode === 'day'

  return (
    <motion.section
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]"
    >
      <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-200/80'}`}>Présentation</p>
            <h2 className={`mt-3 text-4xl font-semibold leading-tight ${isDay ? 'text-slate-900' : 'text-slate-50'}`}>{profile.headline}</h2>
          </div>
          <div className={`rounded-2xl border px-4 py-3 lg:min-w-[220px] ${isDay ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
            <p className={`text-[0.7rem] uppercase tracking-[0.3em] ${isDay ? 'text-slate-500' : 'text-slate-300/80'}`}>Statut</p>
            <p className={`mt-2 text-base font-semibold ${isDay ? 'text-slate-800' : 'text-emerald-200'}`}>Étudiant en cycle ingénieur</p>
          </div>
        </div>

        <div className={`grid gap-4 md:grid-cols-2 ${isDay ? 'text-slate-700' : 'text-slate-200'}`}>
          <div className={`rounded-2xl border p-5 ${isDay ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
            <div className={`mb-3 flex items-center gap-2 text-base font-semibold ${isDay ? 'text-slate-900' : 'text-sky-200'}`}>
              <GraduationCap className="h-4 w-4" />
              Statut actuel
            </div>
            <p className="text-base leading-8">{profile.currentStatus}</p>
          </div>

          <div className={`rounded-2xl border p-5 ${isDay ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
            <div className={`mb-3 flex items-center gap-2 text-base font-semibold ${isDay ? 'text-slate-900' : 'text-emerald-200'}`}>
              <Rocket className="h-4 w-4" />
              Projet professionnel
            </div>
            <p className="text-base leading-8">{profile.professionalProject}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
          <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Points forts</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {profile.qualities.map((quality) => (
              <span key={quality} className={`rounded-full border px-4 py-2 text-base font-medium ${isDay ? 'border-slate-200 bg-white text-slate-800' : 'border-slate-700 bg-slate-900 text-slate-100'}`}>
                {quality}
              </span>
            ))}
          </div>
        </div>

        <div className={`rounded-[2rem] border p-8 ${isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950 text-white'}`}>
          <p className={`text-[0.7rem] uppercase tracking-[0.45em] ${isDay ? 'text-slate-600' : 'text-slate-300/80'}`}>Centres d'intérêt</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {profile.interests.map((interest, index) => {
              const Icon = interestIcons[index % interestIcons.length]

              return (
                <div
                  key={interest}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-4 ${isDay ? 'border-slate-200 bg-white text-slate-800' : 'border-slate-700 bg-slate-900 text-slate-100'}`}
                >
                  <div className="rounded-full bg-emerald-500/10 p-2 text-emerald-500">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-base font-medium">{interest}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
