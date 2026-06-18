import { motion } from 'framer-motion'

export default function WorldBackdrop({ sceneMode }) {
  const isDay = sceneMode === 'day'

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          isDay
            ? 'bg-[linear-gradient(to_bottom,#dbeafe_0%,#bfdbfe_34%,#c7f9cc_34%,#86efac_68%,#d6d3d1_68%,#e5e7eb_100%)]'
            : 'bg-[linear-gradient(to_bottom,#0f172a_0%,#1d4ed8_38%,#0b1120_52%,#14532d_68%,#111827_68%,#020617_100%)]'
        }`}
      />

      <motion.div
        animate={isDay ? { x: [0, 6, 0], y: [0, -4, 0], opacity: 1 } : { x: [0, 10, 0], y: [0, 8, 0], opacity: 1 }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className={`absolute right-10 top-8 h-20 w-20 transition-colors duration-700 ${isDay ? 'bg-amber-300' : 'bg-slate-100'}`}
      />

      <motion.div
        animate={{ x: [0, 28, 0], y: [0, 4, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className={`absolute left-8 top-24 flex gap-6 ${isDay ? 'opacity-100' : 'opacity-90'}`}
      >
        <div className={`h-6 w-14 rounded-full ${isDay ? 'bg-white' : 'bg-slate-200'}`} />
        <div className={`mt-3 h-5 w-16 rounded-full ${isDay ? 'bg-slate-100' : 'bg-slate-300'}`} />
        <div className={`h-4 w-10 rounded-full ${isDay ? 'bg-white' : 'bg-slate-200'}`} />
      </motion.div>

      <motion.div
        animate={{ x: [0, -18, 0], y: [0, 3, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className={`absolute left-[22%] top-[18%] h-5 w-24 rounded-full ${isDay ? 'bg-white/80' : 'bg-slate-200/70'}`}
      />

      <motion.div
        animate={{ x: [0, 22, 0], y: [0, -5, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className={`absolute right-[18%] top-[28%] h-6 w-28 rounded-full ${isDay ? 'bg-white/70' : 'bg-slate-200/60'}`}
      />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute inset-x-0 top-[44%] h-24 bg-emerald-500"
      />
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute inset-x-0 top-[52%] h-24 bg-emerald-700"
      />
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute inset-x-0 top-[62%] h-28 bg-amber-900"
      />

      <motion.div
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute inset-x-0 bottom-0 h-28 bg-slate-950"
      >
        <div className="absolute inset-x-0 top-0 h-4 bg-slate-700" />
        <div className="absolute left-0 top-[-1.2rem] h-16 w-28 rounded-tr-[3rem] bg-slate-900" />
        <div className="absolute right-10 top-[-0.8rem] h-20 w-44 rounded-tl-[4rem] rounded-tr-[2rem] bg-slate-900" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
        transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute left-6 top-[46%] h-28 w-16 rounded-t-full bg-emerald-900"
      >
        <div className="absolute left-1/2 top-[-2.5rem] h-16 w-4 -translate-x-1/2 bg-amber-800" />
        <div className="absolute left-[-1rem] top-[-3.5rem] h-10 w-10 rounded-[0.25rem] bg-emerald-700" />
        <div className="absolute right-[-0.8rem] top-[-2.8rem] h-8 w-8 rounded-[0.25rem] bg-emerald-700" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
        transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute right-24 top-[41%] h-32 w-18 rounded-t-full bg-emerald-900"
      >
        <div className="absolute left-1/2 top-[-2.4rem] h-14 w-4 -translate-x-1/2 bg-amber-800" />
        <div className="absolute left-[-0.8rem] top-[-3rem] h-9 w-9 rounded-[0.25rem] bg-emerald-700" />
        <div className="absolute right-[-0.9rem] top-[-2.2rem] h-8 w-8 rounded-[0.25rem] bg-emerald-700" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_45%)]"
      />

      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black" />
    </div>
  )
}