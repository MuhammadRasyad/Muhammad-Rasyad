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
    // Batang pohon tumbuh mengikuti scroll
    gsap.set(".tree-trunk__inner", { scaleY: 0, transformOrigin: "top center" });
    gsap.to(".tree-trunk__inner", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".journey-timeline",
        start: "top 85%",
        end: "bottom 15%",
        scrub: true,
      },
    });

    // Cabang menggeliat masuk + kartu fade-in
    sectionRefs.current.forEach((el, i) => {
      const branch = el.querySelector(".tree-branch") as HTMLElement | null;
      const card = el.querySelector(".journey-card") as HTMLElement | null;

      if (branch) {
        gsap.set(branch, { scaleX: 0, transformOrigin: i % 2 === 0 ? "right center" : "left center" });
        gsap.to(branch, {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      }
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, rotate: i % 2 === 0 ? -1 : 1 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 78%" },
          }
        );
      }
    });
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
      {/* Header */}
      <header className="journey-header">
        <h1 className="journey-title">Pohon Perjalanan Saya</h1>
        <p className="journey-sub">
          Dari rasa ingin tahu, keterbatasan, sampai prestasi. Ini kisah yang menumbuhkan saya sebagai manusia & developer.
        </p>
      </header>

      {/* Timeline as a Tree */}
      <section className="journey-timeline">
        {/* Batang pohon */}
        <div className="tree-trunk">
          <div className="tree-trunk__inner" />
        </div>

        {/* Node / Cabang */}
        {timeline.map((item, i) => (
          <div
            key={i}
            ref={addToRefs}
            className={`tree-node tree-node--${item.side}`}
          >
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
                <Player autoplay loop src={item.lottie} />
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
