"use client";

import "../styles/home.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  ArrowRight, Code, Cpu, Sparkles, ShieldCheck, Rocket, Github, Linkedin, Mail,
} from "lucide-react";

export default function HomePage() {
  const heroRef = useRef<Player>(null);

  return (
    <div className="home bg-grid">
      {/* ================= HERO ================= */}
      <section className="home-hero">
        {/* BG FX */}
        <div className="home-hero__fx" aria-hidden>
          <div className="home-hero__blob home-hero__blob--tr">
            <Player autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_8x3cikjb.json" />
          </div>
          <div className="home-hero__blob home-hero__blob--bl">
            <Player autoplay loop src="https://assets2.lottiefiles.com/packages/lf20_myejiggj.json" />
          </div>
        </div>

        <div className="home__container home-hero__grid">
          <div className="home-hero__copy">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="home-hero__title"
            >
              Saya bantu Anda membangun website
              <span className="home-grad home-grad--sky"> cepat</span>,
              <span className="home-grad home-grad--emerald"> aman</span>, &
              <span className="home-grad home-grad--indigo"> berkelas bisnis</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="home-hero__sub"
            >
              Laravel • React • Inertia.js • SEO • Integrasi AI. Fokus pada performa,
              aksesibilitas, dan desain modern—tanpa kompromi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="home-cta"
            >
              <a href="#projects" className="home-btn home-btn--primary">Lihat Portofolio</a>
              <a href="#contact" className="home-btn home-btn--outline">Konsultasi Gratis</a>

              <div className="home-social">
                <a href="https://github.com/" aria-label="GitHub" className="home-iconbtn">
                  <Github />
                </a>
                <a href="https://linkedin.com/" aria-label="LinkedIn" className="home-iconbtn">
                  <Linkedin />
                </a>
                <a href="mailto:hello@rasyad.dev" aria-label="Email" className="home-iconbtn">
                  <Mail />
                </a>
              </div>
            </motion.div>

            {/* Trust signals */}
            <div className="home-trust">
              {[
                { icon: Code, label: "Clean Code" },
                { icon: ShieldCheck, label: "Keamanan Prioritas" },
                { icon: Cpu, label: "Performant" },
                { icon: Rocket, label: "Cepat Deploy" },
              ].map((item) => (
                <div key={item.label} className="home-chipstat">
                  <item.icon />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Lottie */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="home-hero__media"
          >
            <div className="home-surface home-surface--panel">
              <div className="home-surface__inner">
                <Player
                  ref={heroRef}
                  autoplay
                  loop
                  controls={false}
                  src="https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json"
                />
              </div>
            </div>
            <div className="home-hero__credit">
              <span className="home-dot" /> Powered by LottieFiles
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="home-scrollcue">
          <Player autoplay loop src="https://assets2.lottiefiles.com/packages/lf20_wglnxby3.json" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="home-section">
        <div className="home__container">
          <div className="home-head">
            <h2 className="home-title">Layanan Utama</h2>
            <p className="home-sub">Solusi end-to-end untuk kebutuhan digital Anda.</p>
          </div>

          <div className="home-grid home-grid--3">
            {[
              { icon: Code, title: "Website & Landing Page", desc: "Desain modern, SEO-ready, dan cepat diakses." },
              { icon: Cpu, title: "Sistem Internal/Enterprise", desc: "Arsitektur bersih, scalable, dan mudah dirawat." },
              { icon: Sparkles, title: "Integrasi AI", desc: "Otomatisasi, insight, dan efisiensi alur kerja." },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="home-card home-card--service"
              >
                <div className="home-card__head">
                  <card.icon />
                  <Player autoplay loop src="https://assets5.lottiefiles.com/packages/lf20_x62chJ.json" />
                </div>
                <h3 className="home-card__title">{card.title}</h3>
                <p className="home-card__desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="home-section home-section--alt">
        <div className="home__container">
          <div className="home-head home-head--row">
            <div>
              <h2 className="home-title">Portofolio Terpilih</h2>
              <p className="home-sub">Beberapa proyek terbaru yang mewakili kualitas kerja saya.</p>
            </div>
            <a href="#" className="home-link">Lihat semua</a>
          </div>

          <div className="home-grid home-grid--3">
            {[1, 2, 3].map((i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="home-card home-card--project"
              >
                <div className="home-card__media">
                  <Player autoplay loop src="https://assets9.lottiefiles.com/packages/lf20_eK7mVh.json" />
                  <div className="home-card__overlay" />
                </div>
                <div className="home-card__body">
                  <h3 className="home-card__title">Project {i}</h3>
                  <p className="home-card__desc">
                    Deskripsi singkat project {i}. Hasil cepat, rapi, dan mudah dikembangkan.
                  </p>
                  <a href="#" className="home-link home-link--inline">
                    Detail Proyek <ArrowRight />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="home-section">
        <div className="home__container home-grid home-grid--2center">
          <div>
            <h2 className="home-title">Tentang Saya</h2>
            <p className="home-sub home-sub--lg">
              Saya Muhammad Rasyad (RasyadDev), freelance web developer yang fokus pada sistem cepat,
              aman, dan scalable. Saya membantu UMKM, startup, dan perusahaan membangun platform profesional
              dengan praktik terbaik industri.
            </p>
            <div className="home-chips">
              {["Next.js 14","React","TypeScript","Tailwind","shadcn/ui","Laravel","Inertia.js","SEO","AI Integration"]
                .map((chip) => <span key={chip} className="home-chip">{chip}</span>)}
            </div>
          </div>

          <div>
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
          <div className="home-head">
            <h2 className="home-title">Mari Diskusi Proyek</h2>
            <p className="home-sub">Ceritakan kebutuhan Anda—saya akan bantu wujudkan dengan solusi yang tepat.</p>
          </div>

          <div className="home-grid home-grid--3">
            <div className="home-surface home-surface--panel home-colspan-2">
              <form className="home-form">
                <input className="home-input" placeholder="Nama" />
                <input className="home-input" placeholder="Email" />
                <input className="home-input home-colspan-2" placeholder="Subjek" />
                <textarea className="home-input home-textarea home-colspan-2" placeholder="Ceritakan kebutuhan proyek Anda..." />
                <button type="button" className="home-btn home-btn--primary home-colspan-2">Kirim Pesan</button>
              </form>
            </div>

            <div className="home-surface home-surface--panel">
              <h3 className="home-card__title">Kontak Cepat</h3>
              <p className="home-card__desc">
                Email: hello@rasyad.dev<br/>Lokasi: Banjarmasin, Kalimantan Selatan
              </p>
              <div className="home-social">
                <a href="https://github.com/" className="home-iconbtn"><Github /></a>
                <a href="https://linkedin.com/" className="home-iconbtn"><Linkedin /></a>
                <a href="mailto:hello@rasyad.dev" className="home-iconbtn"><Mail /></a>
              </div>
              <div className="home-miniLottie">
                <Player autoplay loop src="https://assets3.lottiefiles.com/packages/lf20_Q7C1Bp.json" />
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
