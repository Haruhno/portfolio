import { motion } from 'framer-motion'
import { Home, NotebookText, Sparkles, SunMoon, UserRound } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Accueil', icon: Home },
  { id: 'profile', label: 'Présentation', icon: UserRound },
  { id: 'quests', label: 'Stages et projets', icon: NotebookText },
  { id: 'skills', label: "Mes acquis", icon: Sparkles },
]

export default function GameNavbar({ activeTab, onChangeTab, onToggleScene, sceneMode }) {
  return (
    <header className={`sticky top-0 z-30 border-b ${sceneMode === 'day' ? 'border-sky-100 bg-[#eef6ff]' : 'border-slate-800 bg-[#0b1220]'}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className={`text-[0.7rem] uppercase tracking-[0.4em] ${sceneMode === 'day' ? 'text-slate-500' : 'text-slate-300'}`}>Portfolio</p>
          <h1 className={`mt-1 text-2xl font-semibold md:text-[1.7rem] ${sceneMode === 'day' ? 'text-slate-900' : 'text-slate-50'}`}>Hasmir Boinali</h1>
          <p className={`mt-1 text-base ${sceneMode === 'day' ? 'text-slate-700' : 'text-slate-200'}`}>Parcours BUT et cycle ingénieur</p>
        </div>

        <nav className="flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => onChangeTab(tab.id)}
                className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  isActive
                    ? 'border-emerald-500 bg-emerald-200 text-slate-900'
                    : sceneMode === 'day'
                      ? 'border-sky-200 bg-slate-50 text-slate-700 hover:border-sky-300 hover:bg-white hover:text-slate-900'
                      : 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500 hover:bg-slate-800'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-200 to-sky-200"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                ) : null}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}

          <button
            onClick={onToggleScene}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
              sceneMode === 'day'
                ? 'border-sky-200 bg-white text-slate-800 hover:border-slate-300'
                : 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500 hover:bg-slate-800'
            }`}
          >
            <SunMoon className="h-4 w-4" />
            Lumière
          </button>
        </nav>
      </div>
    </header>
  )
}
