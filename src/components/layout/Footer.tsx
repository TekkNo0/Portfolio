"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, ChevronUp } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyber-border/60 bg-cyber-bg/95 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <Shield className="h-4 w-4 text-cyber-cyan" />
          <span>{t.footer.copyright}</span>
        </div>

        {/* Security Telemetry Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-cyber-border bg-cyber-surface px-3 py-1 font-mono text-[11px] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">{t.footer.statusIndicator}</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyber-border bg-cyber-surface text-slate-400 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
