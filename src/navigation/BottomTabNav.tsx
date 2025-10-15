import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon, BriefcaseIcon, UserIcon, MailIcon,
  HomeSolidIcon, BriefcaseSolidIcon, UserSolidIcon, MailSolidIcon
} from "../ui/Icons";

export default function BottomTabNav() {
  const { pathname } = useLocation();

  // aktif: root exact, selain root boleh nested (/about/xxx)
  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  const items = [
    { to: "/",         label: "Home",     Icon: HomeIcon,      ActiveIcon: HomeSolidIcon },
    { to: "/projects", label: "Projects", Icon: BriefcaseIcon, ActiveIcon: BriefcaseSolidIcon },
    { to: "/about",    label: "About",    Icon: UserIcon,      ActiveIcon: UserSolidIcon },
    { to: "/contact",  label: "Contact",  Icon: MailIcon,      ActiveIcon: MailSolidIcon },
  ];

  return (
    <nav className="tabbar mobile-only" aria-label="Bottom Navigation" role="tablist">
      {items.map(({ to, label, Icon, ActiveIcon }) => {
        const active = isActive(to);

        // ✅ perbaikan di sini
        const IconComp = active
          ? (ActiveIcon ?? Icon) // pakai ActiveIcon kalau ada
          : Icon;

        return (
          <Link
            key={to}
            to={to}
            className={`tab${active ? " active" : ""}`}
            role="tab"
            aria-selected={active}
            aria-current={active ? "page" : undefined}
            data-active={active ? "true" : undefined}
            tabIndex={active ? 0 : -1}
            title={label}
          >
            <IconComp aria-hidden className="tab-icon" />
            <span className="tab-label">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
