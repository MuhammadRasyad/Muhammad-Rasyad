"use client";
import "../styles/journey.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, GraduationCap, Cpu, Heart, ShieldCheck, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function JourneyPage() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  useEffect(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Parallax background
    if (!prefersReduced) {
      gsap.to(".bg-parallax--tr", {
        yPercent: -15, ease: "none",
        scrollTrigger: { trigger: ".journey-page", start: "top bottom", end: "bottom top", scrub: true }
      });
      gsap.to(".bg-parallax--bl", {
        yPercent: 20, ease: "none",
        scrollTrigger: { trigger: ".journey-page", start: "top bottom", end: "bottom top", scrub: true }
      });
    }

    // Batang tumbuh & progress rail kanan
    gsap.set(".tree-trunk__inner", { scaleY: 0, transformOrigin: "top center" });
    gsap.to(".tree-trunk__inner", {
      scaleY: 1, ease: "none",
      scrollTrigger: { trigger: ".journey-timeline", start: "top 85%", end: "bottom 15%", scrub: true }
    });

    gsap.set(".progress-rail__bar", { scaleY: 0, transformOrigin: "top center" });
    gsap.to(".progress-rail__bar", {
      scaleY: 1, ease: "none",
      scrollTrigger: { trigger: ".journey-timeline", start: "top top", end: "bottom bottom", scrub: true }
    });

    // Batch animate setiap node (cabang, knot, card, media, icon)
    sectionRefs.current.forEach((el, i) => {
      const isLeft = el.classList.contains("tree-node--left");
      const branch = el.querySelector(".tree-branch") as HTMLElement | null;
      const knot = el.querySelector(".tree-knot") as HTMLElement | null;
      const card = el.querySelector(".journey-card") as HTMLElement | null;
      const media = el.querySelector(".journey-card__media") as HTMLElement | null;
      const icon = el.querySelector(".journey-icon svg") as HTMLElement | null;

      // Cabang grow
      if (branch) {
        gsap.set(branch, { scaleX: 0, transformOrigin: isLeft ? "right center" : "left center" });
        gsap.to(branch, {
          scaleX: 1,
          duration: prefersReduced ? 0 : 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%" }
        });
      }
      // Titik (knot) pulse
      if (knot) {
        gsap.fromTo(knot,
          { scale: 0.7, filter: "brightness(0.9)" },
          {
            scale: 1, filter: "brightness(1.2)",
            duration: prefersReduced ? 0 : 0.5, ease: "back.out(2)",
            scrollTrigger: { trigger: el, start: "top 78%" }
          }
        );
      }
      // Card slide + tilt
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 48, rotate: isLeft ? -2 : 2 },
          {
            opacity: 1, y: 0, rotate: 0,
            duration: prefersReduced ? 0 : 0.7, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 78%" }
          }
        );
      }
      // Media (Lottie) reveal mask
      if (media) {
        gsap.set(media, { clipPath: isLeft ? "inset(0 100% 0 0 round 14px)" : "inset(0 0 0 100% round 14px)" });
        gsap.to(media, {
          clipPath: "inset(0 0 0 0 round 14px)",
          duration: prefersReduced ? 0 : 0.7, ease: "power2.out",
          delay: 0.05,
          scrollTrigger: { trigger: el, start: "top 74%" }
        });
      }
      // Icon pop + glow
      if (icon) {
        gsap.fromTo(icon,
          { scale: 0.6, opacity: 0.4, filter: "drop-shadow(0 0 0 rgba(56,189,248,0))" },
          {
            scale: 1, opacity: 1,
            filter: "drop-shadow(0 6px 14px rgba(56,189,248,.35))",
            duration: prefersReduced ? 0 : 0.45, ease: "back.out(2)",
            scrollTrigger: { trigger: el, start: "top 82%" }
          }
        );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      mm.revert();
    };
  }, []);

  const timeline = [
    {
      side: "left",
      year: "Awal Ketertarikan",
      icon: <ShieldCheck />,
      text:
        'Saya mulai tertarik dengan dunia IT setelah menonton film "Hacker Who Am I". Dari situ saya penasaran dengan jaringan & keamanan komputer.',
      lottie: "https://assets6.lottiefiles.com/packages/lf20_vf3z3c0v.json",
    },
    {
      side: "right",
      year: "SMKN 3 Banjarmasin",
      icon: <GraduationCap />,
      text:
        "Masuk SMKN 3 Banjarmasin (TKJ). Saat COVID-19 datang saya sekolah online dan belajar beradaptasi.",
      lottie: "https://assets1.lottiefiles.com/packages/lf20_xlkxtmul.json",
    },
    {
      side: "left",
      year: "Bisnis & Komunitas",
      icon: <Heart />,
      text:
        "Mulai bisnis ikan cupang untuk penghasilan sendiri. Bergabung komunitas Anon Cyber Team untuk mengasah security.",
      lottie: "https://assets4.lottiefiles.com/packages/lf20_q5pk6p1k.json",
    },
    {
      side: "right",
      year: "Perjuangan Pribadi",
      icon: <Cpu />,
      text:
        "Kelas 3 SMK putus dengan pacar — tapi semangat tetap jalan. Kondisi ekonomi terbatas, saya berjuang dibantu kakak.",
      lottie: "https://assets3.lottiefiles.com/packages/lf20_kcyjjwtc.json",
    },
    {
      side: "left",
      year: "Kuliah di POLIBAN (KIP-K)",
      icon: <GraduationCap />,
      text:
        "Diterima KIP-K di Politeknik Negeri Banjarmasin. Awal kuliah naik sepeda jarak jauh. Semester 2 dapat motor dari keluarga.",
      lottie: "https://assets6.lottiefiles.com/packages/lf20_tno6cg2w.json",
    },
    {
      side: "right",
      year: "Kompetisi & Kerja Keras",
      icon: <Rocket />,
      text:
        "Ikut KMIPN V Cyber Security. Semester 3 jadi driver online untuk bertahan, semester 4 ambil projek & joki website.",
      lottie: "https://assets10.lottiefiles.com/packages/lf20_7lykvn3v.json",
    },
    {
      side: "left",
      year: "Magang & Tugas Akhir",
      icon: <Cpu />,
      text:
        "Magang di Nurul Fikri. Semester 6 buat TA Smart Akuaponik IoT + website, juara 2 Kratevisia Kalsel 2025.",
      lottie: "https://assets9.lottiefiles.com/packages/lf20_3vbOcw.json",
    },
  ] as const;

  return (
    <div className="journey-page bg-grid text-slate-100">
      {/* Parallax BG */}
      <div className="bg-parallax bg-parallax--tr" aria-hidden />
      <div className="bg-parallax bg-parallax--bl" aria-hidden />

      {/* Header */}
      <header className="journey-header">
        <motion.h1
          className="journey-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pohon Perjalanan Saya
        </motion.h1>
        <motion.p
          className="journey-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Dari rasa ingin tahu, keterbatasan, sampai prestasi. Ini kisah yang menumbuhkan saya sebagai manusia & developer.
        </motion.p>
      </header>

      {/* Progress rail kanan */}
      <aside className="progress-rail" aria-hidden>
        <div className="progress-rail__bar" />
      </aside>

      {/* Timeline as a Tree */}
      <section className="journey-timeline">
        {/* Batang pohon */}
        <div className="tree-trunk">
          <div className="tree-trunk__inner" />
        </div>

        {/* Node / Cabang */}
        {timeline.map((item, i) => (
          <div key={i} ref={addToRefs} className={`tree-node tree-node--${item.side}`}>
            {/* Cabang dari batang ke kartu */}
            <span className={`tree-branch tree-branch--${item.side}`} />

            {/* Titik pada batang */}
            <span className="tree-knot" aria-hidden />

            {/* Kartu konten */}
            <motion.article
              className="journey-card"
              whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(56,189,248,.18)" }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <div className="journey-card__header">
                <span className="journey-icon">{item.icon}</span>
                <h3 className="journey-year">{item.year}</h3>
              </div>
              <p className="journey-text">{item.text}</p>
              <div className="journey-card__media">
                <Player autoplay loop src={item.lottie} style={{ width: "100%", height: "100%" }} />
              </div>
            </motion.article>
          </div>
        ))}
      </section>

      <footer className="journey-footer">
        <Trophy className="inline h-5 w-5 mr-2 text-yellow-400" />
        Juara 2 Kratevisia Banjarmasin 2025 — Smart Akuaponik IoT
      </footer>
    </div>
  );
}
