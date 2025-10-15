import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, User, Mail } from "lucide-react"; // ikon modern

export default function SideNav() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { to: "/", label: "Home", Icon: Home },
    { to: "/projects", label: "Projects", Icon: Briefcase },
    { to: "/about", label: "About", Icon: User },
    { to: "/contact", label: "Contact", Icon: Mail },
  ];

  return (
    <div className="side-nav">
      {/* ===== Navigation Section ===== */}
      <div className="side-section">
        <div className="side-title">Navigation</div>
        {navItems.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className={`side-link ${isActive(to) ? "active" : ""}`}
          >
            <Icon className="side-icon" />
            <span>{label}</span>
          </Link>
        ))}
      </div>

      {/* ===== Footer Section ===== */}
      <div className="side-section muted">
        <div className="side-caption">
          © {new Date().getFullYear()} RasyadDev
        </div>
      </div>
    </div>
  );
}
