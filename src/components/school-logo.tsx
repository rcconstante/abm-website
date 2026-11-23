export function SchoolLogo({
  variant = "light",
  size = 42,
}: {
  variant?: "light" | "dark";
  size?: number;
}) {
  const isDark = variant === "dark";
  const shieldFill = isDark ? "#ffffff18" : "url(#westbridge-shield)";
  const shieldStroke = isDark ? "#f2d6e0" : "#512232";
  const accent = isDark ? "#f3cfbe" : "#e9c4b4";
  const ink = "#ffffff";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="school-logo-svg"
    >
      <defs>
        <linearGradient
          id="westbridge-shield"
          x1="8"
          y1="4"
          x2="40"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7c364c" />
          <stop offset="100%" stopColor="#451f2d" />
        </linearGradient>
      </defs>

      {/* Collegiate crest shield */}
      <path
        d="M24 3.5L40.5 9.2V23.4C40.5 33.4 33.6 40.6 24 44.5C14.4 40.6 7.5 33.4 7.5 23.4V9.2L24 3.5Z"
        fill={shieldFill}
        stroke={shieldStroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Inner crest border */}
      <path
        d="M24 7.2L37 11.7V23.2C37 31.1 31.6 36.9 24 40.3C16.4 36.9 11 31.1 11 23.2V11.7L24 7.2Z"
        stroke={isDark ? "#ffffff30" : "#ffffff26"}
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Top academic star */}
      <path
        d="M24 10.8L25.2 13.8L28.2 15L25.2 16.2L24 19.2L22.8 16.2L19.8 15L22.8 13.8L24 10.8Z"
        fill={accent}
      />

      {/* Ascending ABM columns */}
      <rect x="16" y="24.5" width="3.4" height="6.5" rx="1.2" fill={ink} fillOpacity="0.82" />
      <rect x="22.3" y="21.5" width="3.4" height="9.5" rx="1.2" fill={ink} />
      <rect x="28.6" y="18.5" width="3.4" height="12.5" rx="1.2" fill={accent} />

      {/* Westbridge arch base */}
      <path
        d="M14.5 33.2C17.4 31.2 20.6 30.2 24 30.2C27.4 30.2 30.6 31.2 33.5 33.2"
        stroke={ink}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
