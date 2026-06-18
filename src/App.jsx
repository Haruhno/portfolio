import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import HomeTab from './components/HomeTab'
import GameNavbar from './components/GameNavbar'
import MinecraftLoader from './components/MinecraftLoader'
import ProjectDetailTab from './components/ProjectDetailTab'
import ProfileTab from './components/ProfileTab'
import QuestsTab from './components/QuestsTab'
import SkillDetailTab from './components/SkillDetailTab'
import SkillsTab from './components/SkillsTab'
import WorldBackdrop from './components/WorldBackdrop'
import { portfolioData } from './data/portfolioData'

const tabMap = {
  home: HomeTab,
  profile: ProfileTab,
  quests: QuestsTab,
  skills: SkillsTab,
}

export default function App() {
  const [hasEnteredWorld, setHasEnteredWorld] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [sceneMode, setSceneMode] = useState('day')
  const [activeProjectIndex, setActiveProjectIndex] = useState(null)
  const [activeSkillIndex, setActiveSkillIndex] = useState(null)

  useEffect(() => {
    document.title = hasEnteredWorld ? 'Hasmir Boinali | Portfolio' : 'Chargement du portfolio...'
  }, [hasEnteredWorld])

  if (!hasEnteredWorld) {
    return <MinecraftLoader onEnter={() => setHasEnteredWorld(true)} />
  }

  const ActiveTab = tabMap[activeTab]
  const activeProject = activeProjectIndex === null ? null : portfolioData.quests[activeProjectIndex]
  const activeSkill = activeSkillIndex === null ? null : portfolioData.skills[activeSkillIndex]

  const openProject = (projectIndex) => {
    setActiveSkillIndex(null)
    setActiveProjectIndex(projectIndex)
  }

  const openSkill = (skillIndex) => {
    setActiveProjectIndex(null)
    setActiveSkillIndex(skillIndex)
  }

  const handleChangeTab = (tabId) => {
    setActiveTab(tabId)
    setActiveProjectIndex(null)
    setActiveSkillIndex(null)
  }

  return (
    <div className={`relative isolate min-h-screen overflow-x-hidden ${sceneMode === 'day' ? 'bg-slate-100 text-slate-950' : 'bg-slate-950 text-slate-50'}`}>
      <WorldBackdrop sceneMode={sceneMode} />
      <GameNavbar activeTab={activeTab} onChangeTab={handleChangeTab} onToggleScene={() => setSceneMode((current) => (current === 'day' ? 'evening' : 'day'))} sceneMode={sceneMode} />

      <main className="relative mx-auto max-w-6xl px-5 py-10 pb-16 md:px-8 md:py-12">
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div key={activeProject.title}>
              <ProjectDetailTab
                project={activeProject}
                sceneMode={sceneMode}
                onBack={() => setActiveProjectIndex(null)}
                onOpenProject={openProject}
                onToggleScene={() => setSceneMode((current) => (current === 'day' ? 'evening' : 'day'))}
              />
            </motion.div>
          ) : activeSkill ? (
            <motion.div key={activeSkill.name}>
              <SkillDetailTab
                skill={activeSkill}
                skillIndex={activeSkillIndex}
                sceneMode={sceneMode}
                onBack={() => setActiveSkillIndex(null)}
                onOpenSkill={openSkill}
                onToggleScene={() => setSceneMode((current) => (current === 'day' ? 'evening' : 'day'))}
              />
            </motion.div>
          ) : (
            <motion.div key={activeTab}>
              <ActiveTab
                sceneMode={sceneMode}
                onToggleScene={() => setSceneMode((current) => (current === 'day' ? 'evening' : 'day'))}
                onOpenProject={openProject}
                onOpenSkill={openSkill}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
