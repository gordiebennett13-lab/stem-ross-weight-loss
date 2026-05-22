"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type AuroraHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function AuroraHero({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: AuroraHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-neutral-950 text-white",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute -top-1/2 left-1/2 h-[120%] w-[140%] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, #1e3a8a, #0891b2, #14b8a6, #6366f1, #1e3a8a)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-neutral-950/70" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center sm:py-40">
        {eyebrow && (
          <span className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70">
            {eyebrow}
          </span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-balance text-lg text-white/70 sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
