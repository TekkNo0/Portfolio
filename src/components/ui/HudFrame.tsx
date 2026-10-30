"use client";

import React from "react";
import { Shield, Crosshair, Cpu, Eye } from "lucide-react";

interface HudFrameProps {
  imageSrc?: string;
  className?: string;
}

export function HudFrame({ imageSrc, className = "" }: HudFrameProps) {
  return (
    <div
      className={`relative w-full max-w-md sm:max-w-lg aspect-[4/3.5] rounded-3xl border-2 border-cyber-cyan/40 bg-cyber-surface/75 p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 flex flex-col items-center justify-center text-center overflow-hidden group transition-all duration-300 hover:border-cyber-cyan/70 hover:shadow-cyan-glow ${className}`}
    >
      {/* Precision Tactical Corner Markers */}
      <div className="absolute top-3 left-3 h-5 w-5 border-t-2 border-l-2 border-cyber-cyan" />
      <div className="absolute top-3 right-3 h-5 w-5 border-t-2 border-r-2 border-cyber-cyan" />
      <div className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-cyber-cyan" />
      <div className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-cyber-cyan" />

      {/* Top Telemetry Header */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-cyber-cyan/80 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>REC // BIO_METRIC: LOCKED</span>
        </div>
        <div className="flex items-center gap-1">
          <Cpu className="h-3 w-3 text-cyber-cyan" />
          <span>SYS_ID: MM-2026</span>
        </div>
      </div>

      {/* Laser Scanning Line Animation */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-80 shadow-[0_0_15px_#00f0ff] animate-[scan_3.5s_ease-in-out_infinite]" />

      {/* Ambient Grid Scanner inside frame */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      {/* Center Display: Photo or Cyber Biometric Silhouette */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {imageSrc ? (
          <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-2xl overflow-hidden border border-cyber-cyan/50 shadow-inner">
            <img
              src={imageSrc}
              alt="Máximo Monárdez"
              className="h-full w-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="pointer-events-none absolute inset-0 bg-cyber-cyan/10 mix-blend-overlay" />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            {/* Center Target Reticle */}
            <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-2xl border-2 border-dashed border-cyber-cyan/50 bg-cyber-cyan/5 text-cyber-cyan shadow-cyan-glow-sm transition-transform duration-500 group-hover:scale-105">
              <Crosshair className="absolute h-8 w-8 text-cyber-cyan/40 animate-spin [animation-duration:12s]" />
              <Shield className="h-14 w-14 text-cyber-cyan animate-pulse drop-shadow-[0_0_10px_rgba(0,240,255,0.7)]" />

              {/* Corner mini brackets */}
              <div className="absolute top-1 left-1 h-2 w-2 border-t border-l border-cyber-cyan" />
              <div className="absolute top-1 right-1 h-2 w-2 border-t border-r border-cyber-cyan" />
              <div className="absolute bottom-1 left-1 h-2 w-2 border-b border-l border-cyber-cyan" />
              <div className="absolute bottom-1 right-1 h-2 w-2 border-b border-r border-cyber-cyan" />
            </div>

            {/* Target Label */}
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 font-mono text-xs text-cyber-cyan font-bold tracking-widest uppercase">
                <Eye className="h-3.5 w-3.5 text-cyber-cyan" />
                <span>FACIAL SCANNER // STANDBY</span>
              </div>
              <p className="font-mono text-xs text-slate-300">
                [ Espacio reservado para fotografía ]
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-slate-400 pointer-events-none border-t border-cyber-border/40 pt-2">
        <span className="text-slate-400">
          STATUS: <span className="text-emerald-400 font-semibold">VERIFIED</span>
        </span>
        <span className="text-cyber-cyan/80">34.6037° S, 58.3816° W</span>
      </div>

      {/* Decorative Cyber CSS Keyframes */}
      <style jsx>{`
        @keyframes scan {
          0% {
            top: 5%;
            opacity: 0.2;
          }
          50% {
            top: 92%;
            opacity: 0.9;
          }
          100% {
            top: 5%;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
