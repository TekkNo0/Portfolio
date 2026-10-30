"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Globe } from "lucide-react";

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl rounded-2xl border border-cyber-border/80 bg-cyber-surface/75 px-5 py-3 backdrop-blur-md shadow-lg shadow-black/40 transition-all duration-300 hover:border-cyber-cyan/40"
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand Indicator */}
          <a
            href="#home"
            className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-wider text-slate-100 hover:text-cyber-cyan transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan group-hover:border-cyber-cyan group-hover:shadow-cyan-glow-sm transition-all">
              <Shield className="h-4 w-4" />
            </span>
            <span className="hidden sm:inline-block">MM // SEC.DEV</span>
            <span className="sm:hidden font-bold text-cyber-cyan">MM</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {t.navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-slate-300 hover:text-cyber-cyan transition-colors duration-200 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Language Toggle & Status */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 rounded-full border border-cyber-border bg-cyber-card/80 px-3 py-1 font-mono text-xs text-slate-300 hover:border-cyber-cyan/60 hover:text-cyber-cyan transition-all duration-200"
              title="Cambiar idioma / Toggle language"
            >
              <Globe className="h-3 w-3 text-cyber-cyan" />
              <span className={language === "es" ? "font-bold text-cyber-cyan" : "text-slate-400"}>
                ES
              </span>
              <span className="text-slate-600">/</span>
              <span className={language === "en" ? "font-bold text-cyber-cyan" : "text-slate-400"}>
                EN
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1 rounded-full border border-cyber-border bg-cyber-card/80 px-2.5 py-1 font-mono text-xs text-slate-300 hover:border-cyber-cyan"
            >
              <span className="font-bold text-cyber-cyan uppercase">{language}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="rounded-lg border border-cyber-border bg-cyber-card/80 p-1.5 text-slate-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-cyber-border/60 mt-3 pt-3 md:hidden"
            >
              <div className="flex flex-col gap-3 pb-1">
                {t.navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-mono text-xs uppercase tracking-widest text-slate-200 hover:text-cyber-cyan py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
