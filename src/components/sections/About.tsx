"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Code2, Shield, Terminal, Cpu, Lock } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  const getPillarIcon = (icon: "code" | "shield" | "terminal") => {
    switch (icon) {
      case "code":
        return <Code2 className="h-6 w-6 text-cyber-cyan" />;
      case "shield":
        return <Shield className="h-6 w-6 text-cyber-electric" />;
      case "terminal":
        return <Terminal className="h-6 w-6 text-emerald-400" />;
      default:
        return <Cpu className="h-6 w-6 text-cyber-cyan" />;
    }
  };

  return (
    <section
      id="about"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 border-t border-cyber-border/40"
    >
      <div className="relative z-20 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>MODULE // PROFILE_DATA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            {t.about.sectionTitle}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 font-mono">
            {t.about.subtitle}
          </p>
        </div>

        {/* Bio Text Card (Easy for Máximo to adjust via content.ts) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 rounded-2xl border border-cyber-border/80 bg-cyber-surface/60 p-6 sm:p-8 backdrop-blur-md shadow-xl"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-cyber-cyan/60" />
          <div className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-cyber-cyan/60" />
          <div className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-cyber-cyan/60" />
          <div className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-cyber-cyan/60" />

          <div className="space-y-4 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            {t.about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="border-l-2 border-cyber-cyan/50 pl-4 py-1 italic text-slate-200"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.about.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl border border-cyber-border/80 bg-cyber-card/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyber-cyan/60 hover:shadow-cyan-glow-sm hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyber-border bg-cyber-surface/90 shadow-inner group-hover:border-cyber-cyan/40 transition-colors">
                {getPillarIcon(pillar.icon)}
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills / Arsenal Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-cyber-border/80 bg-cyber-surface/50 p-6 sm:p-8 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-6 text-white font-mono text-sm uppercase tracking-wider font-semibold">
            <Lock className="h-4 w-4 text-cyber-cyan" />
            <span>{t.about.skillsTitle}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Software Dev Skills */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyber-cyan mb-3">
                // Software Engineering
              </div>
              <div className="flex flex-wrap gap-2">
                {t.about.devSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-cyber-cyan/20 bg-cyber-cyan/5 px-3 py-1 font-mono text-xs text-slate-200 transition-colors hover:border-cyber-cyan/60 hover:text-cyber-cyan"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cybersecurity Skills */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyber-electric mb-3">
                // Cybersecurity & Hardening
              </div>
              <div className="flex flex-wrap gap-2">
                {t.about.secSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-cyber-electric/20 bg-cyber-electric/5 px-3 py-1 font-mono text-xs text-slate-200 transition-colors hover:border-cyber-electric/60 hover:text-cyber-electric"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
