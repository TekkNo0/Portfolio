"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Radio } from "lucide-react";

// Crisp brand SVGs
function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website_url: "", // Honeypot
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const getSocialIcon = (icon: "github" | "linkedin" | "mail" | "telegram") => {
    switch (icon) {
      case "github":
        return <GithubIcon className="h-5 w-5 text-slate-200 group-hover:text-cyber-cyan transition-colors" />;
      case "linkedin":
        return <LinkedinIcon className="h-5 w-5 text-slate-200 group-hover:text-cyber-electric transition-colors" />;
      case "mail":
      case "telegram":
      default:
        return <Mail className="h-5 w-5 text-slate-200 group-hover:text-emerald-400 transition-colors" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", website_url: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || t.contact.formErrorMessage);
      }
    } catch {
      setStatus("error");
      setErrorMessage(t.contact.formErrorMessage);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 border-t border-cyber-border/40"
    >
      <div className="relative z-20 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-3">
            <Radio className="h-3.5 w-3.5 text-cyber-cyan animate-pulse" />
            <span>ENCRYPTED_CHANNEL // SECURE_PORT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            {t.contact.sectionTitle}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 font-mono">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="font-mono text-sm uppercase tracking-wider text-slate-300 font-semibold mb-4">
              // {t.contact.directChannelsTitle}
            </h3>

            <div className="space-y-4">
              {t.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-cyber-border/80 bg-cyber-surface/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyber-cyan/60 hover:shadow-cyan-glow-sm hover:translate-x-1"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyber-border bg-cyber-card/80 group-hover:border-cyber-cyan/40 transition-colors">
                      {getSocialIcon(social.icon)}
                    </div>
                    <div>
                      <div className="font-sans font-bold text-white group-hover:text-cyber-cyan transition-colors">
                        {social.name}
                      </div>
                      <div className="font-mono text-xs text-slate-400">
                        {social.handle || "Abrir enlace"}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    [CONNECT] ➔
                  </span>
                </a>
              ))}
            </div>

            <div className="rounded-xl border border-cyber-border/40 bg-cyber-card/30 p-5 font-mono text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">● SECURE_DISPATCH:</span> Respuestas directas en menos de 24 horas hábiles.
            </div>
          </motion.div>

          {/* Interactive Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-cyber-border/80 bg-cyber-surface/75 p-6 sm:p-8 backdrop-blur-md shadow-2xl"
            >
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-cyber-cyan/60" />
              <div className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-cyber-cyan/60" />
              <div className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-cyber-cyan/60" />
              <div className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-cyber-cyan/60" />

              {/* Honeypot field for anti-bot protection */}
              <input
                type="text"
                name="website_url"
                value={formData.website_url}
                onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
                aria-hidden="true"
              />

              <div className="space-y-5">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5">
                    {t.contact.formNameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.formNamePlaceholder}
                    className="w-full rounded-xl border border-cyber-border bg-cyber-bg/80 px-4 py-2.5 font-sans text-sm text-white placeholder-slate-500 focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5">
                    {t.contact.formEmailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.formEmailPlaceholder}
                    className="w-full rounded-xl border border-cyber-border bg-cyber-bg/80 px-4 py-2.5 font-sans text-sm text-white placeholder-slate-500 focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5">
                    {t.contact.formMessageLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.formMessagePlaceholder}
                    className="w-full rounded-xl border border-cyber-border bg-cyber-bg/80 px-4 py-2.5 font-sans text-sm text-white placeholder-slate-500 focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    <span>{t.contact.formSuccessMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs font-mono text-rose-400">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errorMessage || t.contact.formErrorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-6 py-3 font-mono text-sm font-bold text-slate-950 transition-all duration-300 hover:shadow-cyan-glow hover:scale-[1.01] disabled:opacity-50"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>
                    {status === "sending"
                      ? t.contact.formSendingButton
                      : t.contact.formSubmitButton}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
