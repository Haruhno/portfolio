import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const blockCount = 9

export default function MinecraftLoader({ onEnter }) {
  const [filledBlocks, setFilledBlocks] = useState(0)
  const [isReady, setIsReady] = useState(false)

  const blocks = useMemo(
    () =>
      Array.from({ length: blockCount }, (_, index) => ({
        id: index,
        active: index < filledBlocks,
        tone: index % 3 === 0 ? 'emerald' : index % 3 === 1 ? 'stone' : 'sky',
      })),
    [blockCount, filledBlocks],
  )

  useEffect(() => {
    const fillTimer = window.setInterval(() => {
      setFilledBlocks((current) => {
        if (current >= blockCount) {
          window.clearInterval(fillTimer)
          return blockCount
        }

        return current + 1
      })
    }, 120)

    const readyTimer = window.setTimeout(() => setIsReady(true), 1300)

    return () => {
      window.clearInterval(fillTimer)
      window.clearTimeout(readyTimer)
    }
  }, [blockCount])

  useEffect(() => {
    if (isReady) {
      const enterTimer = window.setTimeout(() => onEnter(), 220)

      return () => window.clearTimeout(enterTimer)
    }

    return undefined
  }, [isReady, onEnter])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#87ceeb_0%,#87ceeb_54%,#53b8ff_54%,#22c55e_55%,#16a34a_74%,#1f2937_74%,#0f172a_100%)]" />
      <div className="absolute right-12 top-10 h-20 w-20 bg-amber-300" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-slate-950" />
      <div className="absolute inset-x-0 bottom-16 h-4 bg-emerald-600" />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.45em] text-slate-600">Chargement</p>
          <h1 className="text-balance text-3xl font-semibold text-slate-900 md:text-5xl">Hasmir Boinali</h1>
          <p className="mt-3 text-sm text-slate-700 md:text-base">
            Portfolio universitaire et professionnel.
          </p>
        </div>

        <div className="flex w-full max-w-4xl items-end justify-center gap-6 rounded-2xl border border-slate-300 bg-white px-5 py-6">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex h-24 w-20 items-end justify-center"
          >
            <div className="absolute bottom-0 h-10 w-6 bg-amber-900" />
            <div className="absolute bottom-9 h-7 w-10 rounded-sm bg-slate-800" />
            <div className="absolute bottom-16 h-6 w-6 rounded-sm bg-amber-200" />
            <motion.div
              animate={{ rotate: [12, -38, 12] }}
              transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-10 right-1 h-16 w-2 origin-bottom bg-amber-900"
              style={{ transformOrigin: 'bottom center' }}
            />
            <motion.div
              animate={{ rotate: [20, -25, 20], x: [0, 2, 0] }}
              transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-12 right-[-2px] h-3 w-7 rounded-sm bg-slate-700"
              style={{ transformOrigin: 'left center' }}
            />
          </motion.div>

          <div className="flex items-center gap-2">
            {blocks.map((block) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: -10, scale: 0.8 }}
                animate={block.active ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.25, y: 0, scale: 0.92 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className={`h-10 w-10 rounded-sm border border-slate-500 ${
                  block.active
                    ? block.tone === 'emerald'
                      ? 'bg-emerald-600'
                      : block.tone === 'sky'
                        ? 'bg-sky-500'
                        : 'bg-slate-500'
                    : 'bg-slate-200/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-3xl rounded-2xl border border-slate-300 bg-white p-4">
          <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-600">
            <span>Progression du chargement</span>
            <span>{Math.round((filledBlocks / blockCount) * 100)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-300"
              initial={{ width: '0%' }}
              animate={{ width: `${(filledBlocks / blockCount) * 100}%` }}
              transition={{ duration: 0.15, ease: 'linear' }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isReady ? (
            <motion.div
              key="waiting-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-slate-700"
            >
              Chargement de la page d'accueil...
            </motion.div>
          ) : (
            <motion.div key="ready-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-slate-700">
              Ouverture automatique du portfolio...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
