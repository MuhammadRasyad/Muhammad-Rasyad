"use client";

import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import BottomTabNav from "../navigation/BottomTabNav";
import TypedBrand from "../components/TypedBrand";

type AppLayoutProps = { children: ReactNode };

export default function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden text-slate-100">
      {/* ====== Background (SVG fixed + gradient + vignette) ====== */}
      {/* Lapisan gambar SVG (pakai CSS var --page-bg) */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20 bg-center bg-cover opacity-20"
        style={{ backgroundImage: "var(--page-bg)" }}
      />
      {/* Fallback gradient */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-b from-slate-950 to-slate-900" aria-hidden />
      {/* Vignette halus biar teks kontras */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 110% at 50% 10%, rgba(0,0,0,0) 0%, rgba(0,0,0,.10) 55%, rgba(0,0,0,.28) 100%)",
        }}
      />

      {/* ===== Topbar (Desktop) ===== */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-md"
              style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
        <div className="flex items-center justify-between w-full px-6 lg:px-12 py-3">
          <Link to="/" className="inline-flex items-center gap-3 font-bold text-slate-100 hover:text-white transition">
            <TypedBrand typeDuration={5} />
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`relative font-semibold text-slate-300 hover:text-slate-50 transition ${
                isActive("/") ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-sky-400 after:content-['']" : ""
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className={`relative font-semibold text-slate-300 hover:text-slate-50 transition ${
                isActive("/about") ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-sky-400 after:content-['']" : ""
              }`}
            >
              Tentang
            </Link>
            <Link
              to="/services"
              className={`relative font-semibold text-slate-300 hover:text-slate-50 transition ${
                isActive("/services") ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-sky-400 after:content-['']" : ""
              }`}
            >
              Layanan
            </Link>
            <Link
              to="/projects"
              className={`relative font-semibold text-slate-300 hover:text-slate-50 transition ${
                isActive("/projects") ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-sky-400 after:content-['']" : ""
              }`}
            >
              Projek
            </Link>
            <Link
              to="/contact"
              className={`relative font-semibold text-slate-300 hover:text-slate-50 transition ${
                isActive("/contact") ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-sky-400 after:content-['']" : ""
              }`}
            >
              Kontak
            </Link>
          </nav>
        </div>
      </header>

      {/* ===== Topbar (Mobile) ===== */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white backdrop-blur-md"
              style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
        <div className="flex items-center justify-between py-3 px-4">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-slate-900">
            <TypedBrand typeDuration={5} />
          </Link>
        </div>
      </header>

      {/* ===== Main ===== */}
      {/* pt-16 = ruang untuk topbar; md:pt-16 agar konsisten desktop */}
      <main className="relative z-0 flex-1 overflow-y-auto pt-16 md:pt-16 pb-28 md:pb-0">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8">{children}</div>
      </main>

      {/* ===== Bottom Tab (Mobile Only) ===== */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-900/70 backdrop-blur-md"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0px)" }}
      >
        <BottomTabNav />
      </nav>
    </div>
  );
}
