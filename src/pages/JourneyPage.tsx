"use client";
import "../styles/journey.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  GraduationCap,
  Cpu,
  Heart,
  ShieldCheck,
  Trophy,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function JourneyPage() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el))
      sectionRefs.current.push(el);
  };

  useEffect(() => {
    // Animasi batang utama pohon
    gsap.set(".tree-trunk__inner", {
      scaleY: 0,
      transformOrigin: "top center",
    });
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

    // Animasi cabang & kartu masuk
    sectionRefs.current.forEach((el, i) => {
      const branch = el.querySelector(".tree-branch") as HTMLElement | null;
      const card = el.querySelector(".journey-card") as HTMLElement | null;

      if (branch) {
        gsap.set(branch, {
          scaleX: 0,
          transformOrigin: i % 2 === 0 ? "right center" : "left center",
        });
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
      lottie:
        "https://lottie.host/7ef49a2e-7d25-49ec-b59c-2acb8d3b6df9/ULbbAKlYEK.json", // hacker animation free
    },
    {
      side: "right",
      year: "SMKN 3 Banjarmasin",
      icon: <GraduationCap />,
      text:
        "Masuk SMKN 3 Banjarmasin (TKJ). Saat COVID-19 datang saya sekolah online dan belajar beradaptasi.",
      lottie:
        "https://lottie.host/7ccffbdc-b01f-49b8-bb86-01b2d9c99dd2/ohlnIQmT4J.json", // online learning
    },
    {
      side: "left",
      year: "Bisnis & Komunitas",
      icon: <Heart />,
      text:
        "Mulai bisnis ikan cupang untuk penghasilan sendiri. Bergabung komunitas Anon Cyber Team untuk mengasah security.",
      lottie:
        "https://lottie.host/18a53d06-d9e0-4a64-8b60-7b014b3a2c4a/2ZB1SnWluD.json", // small business animation
    },
    {
      side: "right",
      year: "Perjuangan Pribadi",
      icon: <Cpu />,
      text:
        "Kelas 3 SMK putus dengan pacar — tapi semangat tetap jalan. Kondisi ekonomi terbatas, saya berjuang dibantu kakak.",
      lottie:
        "https://lottie.host/19465b2b-3022-4a39-b6a7-5af89f7d7920/hK9Ctln6Xv.json", // emotional struggle / motivation
    },
    {
      side: "left",
      year: "Kuliah di POLIBAN (KIP-K)",
      icon: <GraduationCap />,
      text:
        "Diterima KIP-K di Politeknik Negeri Banjarmasin. Awal kuliah naik sepeda jarak jauh. Semester 2 dapat motor dari keluarga.",
      lottie:
        "https://lottie.host/4a3a5f8b-173f-4972-9637-4469b06649ac/BIeixj4F91.json", // college life animation
    },
    {
      side: "right",
      year: "Kompetisi & Kerja Keras",
      icon: <Rocket />,
      text:
        "Ikut KMIPN V Cyber Security. Semester 3 jadi driver online untuk bertahan, semester 4 ambil projek & joki website.",
      lottie:
        "https://lottie.host/bb55b69e-3b2b-4a7c-8e47-1cb93e3e4d8b/NTKw0aYlWm.json", // working hard / coding animation
    },
    {
      side: "left",
      year: "Magang & Tugas Akhir",
      icon: <Cpu />,
      text:
        "Magang di Nurul Fikri. Semester 6 buat TA Smart Akuaponik IoT + website, juara 2 Kratevisia Kalsel 2025.",
      lottie:
        "https://lottie.host/b75000ae-4b8d-4385-8b48-47e87959a95f/lzEC4OehjB.json", // award / success animation
    },
  ] as const;

  return (
    <div className="journey-page bg-grid text-slate-100">
      {/* Header */}
      <header className="journey-header">
        <h1 className="journey-title">🌳 Pohon Perjalanan Saya</h1>
        <p className="journey-sub">
          Dari rasa ingin tahu, keterbatasan, sampai prestasi. Ini kisah yang
          menumbuhkan saya sebagai manusia & developer.
        </p>
      </header>

      {/* Timeline */}
      <section className="journey-timeline">
        <div className="tree-trunk">
          <div className="tree-trunk__inner" />
        </div>

        {timeline.map((item, i) => (
          <div
            key={i}
            ref={addToRefs}
            className={`tree-node tree-node--${item.side}`}
          >
            <span className={`tree-branch tree-branch--${item.side}`} />
            <span className="tree-knot" aria-hidden />

            <motion.article
              className="journey-card"
              whileHover={{
                y: -4,
                boxShadow: "0 12px 36px rgba(56,189,248,.18)",
              }}
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
