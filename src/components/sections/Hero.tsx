"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Terminal, Shield, ArrowRight, Code2 } from "lucide-react";
import { HudFrame } from "@/components/ui/HudFrame";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* SVG Diagonal Cut (Matching User Wireframe: top-center/left to bottom-right) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full z-10 hidden lg:block"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <linearGradient id="diagonalGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.1" />
          </linearGradient>
          <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Glowing cyber line cutting across the screen */}
        <line
          x1="360"
          y1="0"
          x2="1000"
          y2="1000"
          stroke="url(#diagonalGlow)"
          strokeWidth="2.5"
          filter="url(#neonBlur)"
        />
        {/* Subtle decorative tick marks along the diagonal */}
        <circle cx="360" cy="0" r="4" fill="#00f0ff" />
        <circle cx="680" cy="500" r="3" fill="#00f0ff" />
        <circle cx="1000" cy="1000" r="4" fill="#00f0ff" />
      </svg>

      <div className="relative z-20 mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          {/* Left Column (Text & Roles from Wireframe) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 px-3.5 py-1 text-xs font-mono tracking-wider text-cyber-cyan w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
              </span>
              <span>{t.hero.statusBadge}</span>
            </div>

            {/* Greeting: Hola! Me llamo */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-mono text-lg sm:text-xl text-slate-300 tracking-wide mb-1"
            >
              {t.hero.greeting}
            </motion.p>

            {/* Name: Maximo Monardez */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 font-sans"
            >
              {t.hero.name}
            </motion.h1>

            {/* Roles: Soy Programador y Experto en ciberseguridad */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="space-y-1 sm:space-y-2 mb-8 font-sans text-2xl sm:text-4xl font-semibold leading-tight"
            >
              <div className="flex items-center gap-3 text-cyber-cyan text-glow-cyan">
                <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-cyber-cyan flex-shrink-0" />
                <span>
                  {t.hero.rolePrefix} {t.hero.roleDev}
                </span>
              </div>
              <div className="text-slate-400 font-mono text-lg sm:text-xl pl-9">
                {t.hero.roleAnd}
              </div>
              <div className="flex items-center gap-3 text-cyber-electric text-glow-blue">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-cyber-electric flex-shrink-0" />
                <span>{t.hero.roleSec}</span>
              </div>
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#about"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-6 py-3 font-mono text-sm font-bold text-slate-950 transition-all duration-300 hover:shadow-cyan-glow hover:scale-[1.02]"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-cyber-border bg-cyber-surface/80 px-6 py-3 font-mono text-sm text-slate-200 transition-all duration-300 hover:border-cyber-cyan hover:text-cyber-cyan hover:bg-cyber-surface"
              >
                <Terminal className="h-4 w-4 text-cyber-cyan" />
                <span>{t.hero.ctaContact}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column (Rostro Container / Tactical HUD Area from Wireframe) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            {/* Tactical HUD Frame with Biometric Scanner */}
            <HudFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
