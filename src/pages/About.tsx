"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export default function About() {
  // ====== KONFIG & DATA ======
  const FALLBACK_IMG =
    "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=1200&q=80";

  // ASCII banner aman (pakai backtick normal)
  const ASCII_BANNER = String.raw`
 ██████╗  █████╗ ███████╗██╗   ██╗ █████╗ ██████╗         ██████╗ ███████╗██╗   ██╗
██╔══██╗██╔══██╗██╔════╝╚██╗ ██╔╝██╔══██╗██╔══██╗        ██╔══██╗██╔════╝██║   ██║
██████╔╝███████║███████╗ ╚████╔╝ ███████║██║  ██║        ██║  ██║█████╗  ██║   ██║
██╔══██╗██╔══██║╚════██║  ╚██╔╝  ██╔══██║██║  ██║        ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║██║  ██║███████║   ██║   ██║  ██║██████╔╝███████╗██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚══════╝╚═════╝ ╚══════╝  ╚═══╝  
                                                                                  
`.trim();

  const commands = [
    { key: "whoami", label: "whoami" },
    { key: "skills", label: "skills" },
    { key: "focus", label: "focus" },
    { key: "tools", label: "tools" },
    { key: "contact", label: "contact" },
  ] as const;

  type CommandKey = typeof commands[number]["key"] | "banner";

  const [active, setActive] = useState<CommandKey>("banner");

  const outputs: Record<CommandKey, ReactNode> = {
    banner: (
      <div className="space-y-3">
        <pre className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm leading-[1.15] text-sky-300 select-text whitespace-pre">
          {ASCII_BANNER}
        </pre>
        <p className="text-sky-300/80">
          Selamat datang di terminal profil <span className="text-white font-semibold">RasyadDev</span>.
          Sentuh perintah di bawah untuk mengetahui lebih lanjut.
        </p>
      </div>
    ),

    whoami: (
      <div className="space-y-1 text-sky-200">
        <p><span className="text-sky-400">$</span> whoami</p>
        <p>Nama : <span className="text-white font-semibold">Muhammad Rasyad</span> (RasyadDev)</p>
        <p>Role : <span className="text-white font-semibold">Web Developer</span> — React / Next.js, Laravel, Inertia.js</p>
        <p>Misi : Bangun produk web <span className="text-white font-semibold">cepat, aman, dan berkelas bisnis</span>.</p>
      </div>
    ),

    skills: (
      <div className="space-y-1 text-sky-200">
        <p><span className="text-sky-400">$</span> skills</p>
        <p>Frontend : React, Next.js, TypeScript, Tailwind, shadcn/ui</p>
        <p>Backend  : Laravel, Inertia.js, REST API</p>
        <p>Ops      : Vite/Next Build, Vercel/Nginx, CI/CD dasar</p>
        <p>Extras   : SEO, A11y, Integrasi AI</p>
      </div>
    ),

    focus: (
      <div className="space-y-1 text-sky-200">
        <p><span className="text-sky-400">$</span> focus</p>
        <ul className="list-disc pl-5">
          <li>Arsitektur bersih &amp; scalable</li>
          <li>UX ringan &amp; responsif</li>
          <li>SEO &amp; performa produksi</li>
        </ul>
      </div>
    ),

    tools: (
      <div className="space-y-1 text-sky-200">
        <p><span className="text-sky-400">$</span> tools</p>
        <p>Editor : VSCode • Figma</p>
        <p>Stack  : PNPM/NPM, Vite/Next, PHP, Node</p>
        <p>Deploy : Vercel, VPS (Nginx), Cloudflare</p>
      </div>
    ),

    contact: (
      <div className="space-y-1 text-sky-200">
        <p><span className="text-sky-400">$</span> contact</p>
        <p>
          Email :{" "}
          <a className="text-sky-300 underline underline-offset-4 hover:text-sky-200" href="mailto:hello@rasyad.dev">
            hello@rasyad.dev
          </a>
        </p>
        <p>
          LinkedIn :{" "}
          <a className="text-sky-300 underline underline-offset-4 hover:text-sky-200" href="https://linkedin.com/">
            linkedin.com
          </a>
        </p>
        <p>
          GitHub :{" "}
          <a className="text-sky-300 underline underline-offset-4 hover:text-sky-200" href="https://github.com/">
            github.com
          </a>
        </p>
      </div>
    ),
  };

  // ====== UI ======
  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto w-[min(1120px,92%)] grid lg:grid-cols-[1.25fr_.75fr] gap-10 items-start">
        {/* ===== Terminal Card ===== */}
        <div className="rounded-2xl border border-sky-700/40 bg-slate-950/70 shadow-[0_8px_28px_rgba(56,189,248,.18)] overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-sky-800/40 bg-gradient-to-b from-sky-950/70 to-slate-950/40">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500/80" />
              <span className="size-3 rounded-full bg-yellow-400/80" />
              <span className="size-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[11px] font-mono text-sky-300/80">rasyad@dev — ~/about</div>
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 font-mono text-sm text-sky-200">
            {/* Prompt */}
            <div className="mb-3">
              <span className="text-sky-400">rasyad@dev</span>
              <span className="text-sky-600">:</span>
              <span className="text-sky-400">~</span>
              <span className="text-sky-600">$</span>
              <span className="ml-2">
                tap a command below to explore
                <span className="ml-1 animate-pulse">▊</span>
              </span>
            </div>

            {/* Output window */}
            <div className="rounded-xl border border-sky-800/40 bg-slate-950/50 p-4 sm:p-5 overflow-auto max-h-[360px] min-h-[160px]">
              {outputs[active]}
            </div>

            {/* Command bar */}
            <div className="mt-4 flex flex-wrap gap-2">
              {commands.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={[
                    "rounded-lg border px-3 py-1.5 text-xs font-semibold transition",
                    active === c.key
                      ? "border-sky-500 bg-sky-500/10 text-sky-200"
                      : "border-sky-800/50 bg-white/[.03] text-sky-300 hover:bg-sky-500/10 hover:border-sky-700/60",
                  ].join(" ")}
                  aria-pressed={active === c.key}
                >
                  {c.label}
                </button>
              ))}
              <button
                onClick={() => setActive("banner")}
                className="rounded-lg border border-sky-800/50 bg-white/[.03] text-sky-300 hover:bg-sky-500/10 hover:border-sky-700/60 px-3 py-1.5 text-xs font-semibold transition"
              >
                clear
              </button>
            </div>
          </div>
        </div>

        {/* ===== Foto berdiri ===== */}
        <div className="relative">
          <div className="relative isolate overflow-hidden rounded-2xl border border-sky-700/40 bg-gradient-to-b from-sky-950/60 to-slate-900/30 shadow-[0_6px_18px_rgba(56,189,248,.25)]">
            <div className="aspect-[3/4]">
              {/* Ganti src ke fotomu sendiri */}
              <img
                src="/images/profile-standing.jpg"
                alt="Foto Muhammad Rasyad berdiri"
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                }}
              />
            </div>
          </div>
          {/* soft blue glow */}
          <div className="pointer-events-none absolute -inset-10 -z-10 blur-3xl opacity-25 bg-gradient-to-tr from-sky-600 via-sky-400 to-blue-600" />
          {/* ring tipis */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-sky-300/10" />
        </div>
      </div>

         <section id="tech-stack" className=" mt-10 py-20 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto w-[min(1120px,92%)] text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Teknologi & Framework</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tools dan framework yang saya gunakan untuk membangun sistem cepat, aman, dan scalable.
          </p>

          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center">
            {[
              { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
              { name: "Laravel", logo: "https://logo.svgcdn.com/logos/laravel.png" },
              { name: "Tailwind", logo: "https://logo.svgcdn.com/devicon/tailwindcss-original.png" },
              { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
              { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
              { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
              { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
              { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
              { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
              { name: "TensorFlow", logo: "https://logo.svgcdn.com/devicon/tensorflow-original.png" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group relative flex flex-col items-center justify-center gap-2 transition duration-300 hover:scale-110"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-white/[.05] border border-slate-700/50 shadow-inner shadow-sky-500/10 hover:bg-sky-500/10 transition">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-90 group-hover:opacity-100 transition"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400 group-hover:text-sky-400 transition">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute -inset-10 -z-10 blur-3xl opacity-20 bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600" />
      </section>
    </section>
    
    
  );
}
