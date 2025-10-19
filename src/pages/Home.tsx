"use client";

import "../styles/home.css";
import "../index.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code, Cpu, Sparkles, ShieldCheck, Rocket, Github, Linkedin, Mail,
} from "lucide-react";

export default function HomePage() {
  const heroRef = useRef<Player>(null);

  // === AOS INIT ===
  useEffect(() => {
    AOS.init({
      duration: 700,       // durasi animasi (ms)
      easing: "ease-out",  // kurva
      once: true,          // hanya sekali saat masuk viewport
      offset: 80,          // jarak trigger dari bawah viewport
    });
  }, []);

  // Fallback image
  const FALLBACK_IMG =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80";

  // Data Projects
  const items = [
    {
      id: 1,
      title: "Sistem Administrasi Klinik — Rilis v2",
      excerpt:
        "Optimasi antrian, rekam medis, dan billing. Peningkatan performa 34% dan audit trail terintegrasi.",
      image:
        "https://images.unsplash.com/photo-1588776814546-83e58d9584e1?auto=format&fit=crop&w=1600&q=80",
      href: "#",
      category: "Enterprise",
      date: "Okt 2025",
      read: "3 mnt",
    },
    {
      id: 2,
      title: "IoT Smart Aquaponik — Dashboard Realtime",
      excerpt:
        "Pemantauan pH/DO/Temp dengan notifikasi realtime & chart historis. Integrasi IoT + Web yang solid.",
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1600&q=80",
      href: "#",
      category: "IoT",
      date: "Sep 2025",
      read: "4 mnt",
    },
    {
      id: 3,
      title: "Landing Page Edu — Skor SEO 98/100",
      excerpt:
        "Desain ringan, aksesibilitas baik, CTR naik 21%. Stack: Next.js + Best-practice SEO.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
      href: "#",
      category: "Web",
      date: "Agu 2025",
      read: "2 mnt",
    },
  ];

  return (
    <div className="home">
       <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto w-[min(1120px,92%)] grid lg:grid-cols-2 gap-10 items-center">
        {/* ===== Teks ===== */}
        <div data-aos="fade-right" className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-600/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
            Tentang Saya
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
            Halo, saya <span className="text-sky-400">Muhammad Rasyad</span>
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Saya seorang <span className="text-white font-semibold">Web Developer</span> yang fokus pada
            performa, aksesibilitas, dan keamanan. Saya biasa membangun sistem berbasis{" "}
            <span className="text-white">Laravel</span>, <span className="text-white">React/Next.js</span>,{" "}
            dan integrasi <span className="text-white">AI</span> untuk meningkatkan efisiensi bisnis.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {[
              "Arsitektur bersih & scalable",
              "SEO & performa produksi",
              "Integrasi API & otomasi",
              "UI modern dengan Tailwind",
            ].map((f, i) => (
              <li
                key={f}
                data-aos="fade-up"
                data-aos-delay={120 + i * 80}
                className="flex items-start gap-2"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span className="text-slate-300">{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-3">
            {["Next.js", "React", "TypeScript", "Laravel", "Inertia.js", "Tailwind", "SEO", "AI"].map(
              (chip, i) => (
                <span
                  key={chip}
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 60}
                  className="rounded-lg border border-sky-600/30 bg-white/[.04] px-3 py-1.5 text-sm font-semibold text-slate-200"
                >
                  {chip}
                </span>
              )
            )}
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-sky-500/30 hover:bg-sky-600 transition"
            >
              Ajak Kolaborasi
            </a>
            <a
              href="#projects"
              className="ml-3 inline-flex items-center gap-2 rounded-xl border border-sky-600/50 px-5 py-3 font-semibold text-sky-300 hover:bg-sky-500/10 transition"
            >
              Lihat Portofolio
            </a>
          </div>
        </div>

        {/* ===== Foto berdiri ===== */}
        <div data-aos="fade-left" className="relative">
          {/* Bingkai / panel */}
          <div className="relative isolate overflow-hidden rounded-2xl border border-sky-700/40 bg-gradient-to-b from-sky-950/60 to-slate-900/30 shadow-[0_6px_18px_rgba(56,189,248,.25)]">
            <div className="aspect-[3/4]">
              <img
                src="/images/profile-standing.jpg" // ← ganti ke foto kamu (berdiri, portrait)
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

          {/* ring tipis elegan */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-sky-300/10" />
        </div>
      </div>
    </section>
    
      {/* ================= HERO (Full Tailwind + AOS) ================= */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="mx-auto w-[min(1120px,92%)] grid lg:grid-cols-2 items-center gap-10">
          {/* ========== TEXT AREA ========== */}
          <div className="space-y-6">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
            >
              Saya bantu Anda membangun website
              <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-300 bg-clip-text text-transparent"> cepat</span>,
              <span className="bg-gradient-to-r from-sky-500 via-blue-400 to-sky-300 bg-clip-text text-transparent"> aman</span>, &nbsp;
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent"> terpercaya</span>.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Laravel • React • Inertia.js • SEO • Integrasi AI. Fokus pada performa,
              aksesibilitas, dan desain modern—tanpa kompromi.
            </p>

            {/* CTA BUTTONS */}
            <div
              data-aos="fade-up"
              data-aos-delay="160"
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-sky-500/30 hover:bg-sky-600 transition"
              >
                Lihat Portofolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-sky-500/60 px-6 py-3 font-semibold text-sky-400 hover:bg-sky-500/10 transition"
              >
                Konsultasi Gratis
              </a>

              {/* Socials */}
              <div className="flex items-center gap-2 ml-2">
                <a
                  href="https://github.com/"
                  aria-label="GitHub"
                  className="grid place-items-center w-10 h-10 rounded-lg border border-sky-500/40 hover:bg-sky-500/10 transition"
                >
                  <Github className="w-5 h-5 text-sky-400" />
                </a>
                <a
                  href="https://linkedin.com/"
                  aria-label="LinkedIn"
                  className="grid place-items-center w-10 h-10 rounded-lg border border-sky-500/40 hover:bg-sky-500/10 transition"
                >
                  <Linkedin className="w-5 h-5 text-sky-400" />
                </a>
                <a
                  href="mailto:hello@rasyad.dev"
                  aria-label="Email"
                  className="grid place-items-center w-10 h-10 rounded-lg border border-sky-500/40 hover:bg-sky-500/10 transition"
                >
                  <Mail className="w-5 h-5 text-sky-400" />
                </a>
              </div>
            </div>

            {/* TRUST SIGNALS */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: Code, label: "Clean Code" },
                { icon: ShieldCheck, label: "Keamanan Prioritas" },
                { icon: Cpu, label: "Performant" },
                { icon: Rocket, label: "Cepat Deploy" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  data-aos="zoom-in"
                  data-aos-delay={220 + i * 80}
                  className="inline-flex items-center gap-2 rounded-lg border border-sky-600/40 bg-sky-500/5 px-3 py-2 text-sm font-semibold text-sky-300"
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ========== LOTTIE / ILLUSTRATION ========== */}
          <div
            data-aos="fade-left"
            data-aos-delay="120"
            className="relative"
          >
            <div className="rounded-2xl border border-sky-700/40 bg-gradient-to-b from-sky-950/60 to-slate-900/30 shadow-[0_6px_18px_rgba(56,189,248,.25)] overflow-hidden">
              <div className="p-2 sm:p-4">
                <Player
                  ref={heroRef}
                  autoplay
                  loop
                  controls={false}
                  src="https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json"
                />
              </div>
            </div>
            {/* Soft Glow Dekorasi */}
            <div className="pointer-events-none absolute -inset-10 -z-10 blur-3xl opacity-30 bg-gradient-to-tr from-sky-600 via-sky-400 to-blue-600" />
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="100">
          <a
            href="#projects"
            className="text-sky-400 text-sm font-medium hover:text-sky-300 transition"
          >
            ↓ Gulir ke bawah
          </a>
        </div>
      </section>

      {/* ================= SERVICES (pakai AOS) ================= */}
      <section id="services" className="py-16">
        <div className="mx-auto w-[min(1120px,92%)]">
          <div className="mb-10" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Layanan Utama</h2>
            <p className="text-slate-300 mt-2">Solusi end-to-end untuk kebutuhan digital Anda.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Code, title: "Website & Landing Page", desc: "Desain modern, SEO-ready, dan cepat diakses." },
              { icon: Cpu, title: "Sistem Internal/Enterprise", desc: "Arsitektur bersih, scalable, dan mudah dirawat." },
              { icon: Sparkles, title: "Integrasi AI", desc: "Otomatisasi, insight, dan efisiensi alur kerja." },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                  className="rounded-2xl border border-slate-700/50 bg-white/[.05] p-6 shadow-[0_6px_18px_rgba(2,6,23,.3)]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-6 h-6 text-sky-400" />
                    <Player autoplay loop src="https://assets5.lottiefiles.com/packages/lf20_x62chJ.json" style={{ width: 48, height: 48 }} />
                  </div>
                  <h3 className="text-white font-bold text-lg">{card.title}</h3>
                  <p className="text-slate-300 text-sm mt-1.5">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= NEWS / PROJECTS (Full Tailwind + AOS) ================= */}
      <section id="projects" className="py-16">
        <div className="mx-auto w-[min(1120px,92%)]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8" data-aos="fade-up">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Portofolio Terpilih</h2>
              <p className="text-slate-300 mt-2">
                Rangkuman proyek terbaru bergaya “news” — singkat, padat, visual kuat.
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center font-semibold text-sky-400 hover:text-sky-300 transition"
            >
              Lihat semua →
            </a>
          </div>

          {/* Grid Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, idx) => (
              <article
                key={it.id}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                className="group rounded-2xl border border-slate-700/50 bg-white/[.05] overflow-hidden shadow-[0_6px_18px_rgba(2,6,23,.3)]"
              >
                {/* Media */}
                <a href={it.href} aria-label={it.title} className="block relative">
                  {/* Skeleton shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 animate-pulse" />

                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={it.image}
                      alt={it.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] scale-[1.02] group-hover:scale-105"
                      onLoad={(e) => {
                        const parent = e.currentTarget.parentElement?.previousElementSibling;
                        if (parent instanceof HTMLElement) parent.style.display = "none";
                      }}
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMG;
                        const parent = e.currentTarget.parentElement?.previousElementSibling;
                        if (parent instanceof HTMLElement) parent.style.display = "none";
                      }}
                    />
                    {/* Overlay gradient bawah */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
                    {/* Kategori badge */}
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-sky-400 text-slate-900 font-bold text-xs px-3 py-1 shadow-md">
                      {it.category}
                    </span>
                  </div>
                </a>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <time>{it.date}</time>
                    <span aria-hidden>•</span>
                    <span>{it.read} baca</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white leading-snug">
                    <a href={it.href} className="hover:underline underline-offset-4 decoration-sky-400">
                      {it.title}
                    </a>
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mt-1.5">
                    {it.excerpt}
                  </p>

                  <div className="mt-3">
                    <a
                      href={it.href}
                      className="inline-flex items-center gap-1.5 text-sky-400 font-bold text-sm hover:text-sky-300 transition"
                    >
                      Baca detail →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Keyframes untuk animasi kartu (fallback jika ingin pakai animate-[fadeInUp_...]) */}
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="home-section">
        <div className="home__container home-grid home-grid--2center">
          <div data-aos="fade-right">
            <h2 className="home-title">Tentang Saya</h2>
            <p className="home-sub home-sub--lg">
              Saya Muhammad Rasyad (RasyadDev), freelance web developer yang fokus pada sistem cepat,
              aman, dan scalable. Saya membantu UMKM, startup, dan perusahaan membangun platform profesional
              dengan praktik terbaik industri.
            </p>
            <div className="home-chips">
              {["Next.js 14","React","TypeScript","Tailwind","shadcn/ui","Laravel","Inertia.js","SEO","AI Integration"]
                .map((chip, i) => (
                  <span key={chip} data-aos="zoom-in" data-aos-delay={i * 80} className="home-chip">
                    {chip}
                  </span>
                ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="120">
            <div className="home-surface home-surface--panel">
              <div className="home-surface__inner home-surface__inner--md">
                <Player autoplay loop src="https://assets9.lottiefiles.com/packages/lf20_49rdyysj.json" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="home-section home-section--alt">
        <div className="home__container">
          <div className="home-head" data-aos="fade-up">
            <h2 className="home-title">Mari Diskusi Proyek</h2>
            <p className="home-sub">Ceritakan kebutuhan Anda—saya akan bantu wujudkan dengan solusi yang tepat.</p>
          </div>

          <div className="home-grid home-grid--3">
            <div className="home-surface home-surface--panel home-colspan-2" data-aos="fade-up" data-aos-delay="100">
              <form className="home-form">
                <input className="home-input" placeholder="Nama" />
                <input className="home-input" placeholder="Email" />
                <input className="home-input home-colspan-2" placeholder="Subjek" />
                <textarea className="home-input home-textarea home-colspan-2" placeholder="Ceritakan kebutuhan proyek Anda..." />
                <button type="button" className="home-btn home-btn--primary home-colspan-2">Kirim Pesan</button>
              </form>
            </div>

            <div className="home-surface home-surface--panel" data-aos="fade-up" data-aos-delay="160">
              <h3 className="home-card__title">Kontak Cepat</h3>
              <p className="home-card__desc">
                Email: hello@rasyad.dev<br/>Lokasi: Banjarmasin, Kalimantan Selatan
              </p>
              <div className="home-social">
                <a href="https://github.com/" className="home-iconbtn"><Github /></a>
                <a href="https://linkedin.com/" className="home-iconbtn"><Linkedin /></a>
                <a href="mailto:hello@rasyad.dev" className="home-iconbtn"><Mail /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="home-footer">
        © {new Date().getFullYear()} RasyadDev • Dibangun dengan Next.js, Tailwind, & LottieFiles
      </footer>
    </div>
  );
}
