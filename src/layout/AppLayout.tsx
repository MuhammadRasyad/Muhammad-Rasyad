import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import BottomTabNav from "../navigation/BottomTabNav";
import TypedBrand from "../components/TypedBrand";

type AppLayoutProps = { children: ReactNode };

export default function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="app-layout bg-grid text-slate-100 min-h-screen">
      {/* ===== Topbar (Desktop) ===== */}
      <header className="app-topbar hidden md:flex fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-md">
        <div className="flex items-center justify-between w-full px-6 lg:px-12 py-3">
          <Link to="/" className="brand-link flex items-center gap-3">
            <TypedBrand typeDuration={5} />
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/" className={`nav-link ${isActive("/") ? "is-active" : ""}`}>Beranda</Link>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "is-active" : ""}`}>Tentang</Link>
            <Link to="/services" className={`nav-link ${isActive("/services") ? "is-active" : ""}`}>Layanan</Link>
            <Link to="/projects" className={`nav-link ${isActive("/projects") ? "is-active" : ""}`}>Projek</Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "is-active" : ""}`}>Kontak</Link>
          </nav>
        </div>
      </header>

      {/* ===== Topbar (Mobile) ===== */}
      <header className="app-topbar md:hidden fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-md">
        <div className="flex items-center justify-between py-3 px-4">
          <Link to="/" className="brand-link flex items-center gap-2">
            <TypedBrand typeDuration={5} />
          </Link>
        </div>
      </header>

      {/* ===== Main Content ===== */}
      <main className="app-main relative z-0">
        <div className="app-content max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* ===== Bottom Tab (Mobile Only) ===== */}
      <nav className="app-bottom md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-900/70 backdrop-blur-md">
        <BottomTabNav />
      </nav>
    </div>
  );
}
