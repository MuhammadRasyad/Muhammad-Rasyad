import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const svgProps = (props: IconProps) => {
  const { size = 22, width, height, ...rest } = props;
  return { width: width ?? size, height: height ?? size, ...rest };
};

/* ========== HOME ========== */
export function HomeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      {...svgProps(props)}
      data-variant="outline"
      aria-hidden
    >
      <path
        d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function HomeSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...svgProps(props)} data-variant="solid" aria-hidden>
      <path
        d="M12 3 3 10.5V21a1 1 0 0 0 1 1h6v-6h4v6h6a1 1 0 0 0 1-1v-10.5L12 3z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ========== BRIEFCASE ========== */
export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...svgProps(props)} data-variant="outline" aria-hidden>
      <path
        d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M3 10h18M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function BriefcaseSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...svgProps(props)} data-variant="solid" aria-hidden>
      <path
        d="M9 6V5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1h3a3 3 0 0 1 3 3v3H3v-3a3 3 0 0 1 3-3h3z"
        fill="currentColor"
      />
      <path
        d="M3 12h18v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
        fill="currentColor"
        opacity=".9"
      />
    </svg>
  );
}

/* ========== USER ========== */
export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...svgProps(props)} data-variant="outline" aria-hidden>
      <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth={2}/>
      <path d="M4 20a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
    </svg>
  );
}
export function UserSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...svgProps(props)} data-variant="solid" aria-hidden>
      <path d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8z" fill="currentColor"/>
      <path d="M4 20a8 8 0 0 1 16 0H4z" fill="currentColor" opacity=".92"/>
    </svg>
  );
}

/* ========== MAIL ========== */
export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...svgProps(props)} data-variant="outline" aria-hidden>
      <path
        d="M3 6h18v12H3z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M3 7l9 7 9-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function MailSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...svgProps(props)} data-variant="solid" aria-hidden>
      <path d="M3 6h18v12H3z" fill="currentColor" />
      <path d="M3 7l9 7 9-7" fill="#fff" opacity=".9"/>
    </svg>
  );
}
