export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a code workspace"
    >
      <rect width="560" height="460" rx="24" fill="#EDE0C6" />
      <circle cx="430" cy="120" r="80" fill="#E8A548" />
      <circle cx="430" cy="120" r="80" fill="url(#sun-gradient)" opacity="0.4" />

      <path
        d="M60 130 q40 -30 80 0 t80 0 t80 0 t80 0"
        stroke="#16233A"
        strokeOpacity="0.15"
        strokeWidth="2"
        strokeDasharray="4 8"
        strokeLinecap="round"
      />

      <rect x="70" y="260" width="70" height="140" rx="6" fill="#16233A" />
      <rect x="150" y="220" width="60" height="180" rx="6" fill="#1F3049" />
      <rect x="220" y="290" width="80" height="110" rx="6" fill="#16233A" />
      <rect x="310" y="240" width="55" height="160" rx="6" fill="#1F3049" />

      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`w1-${row}-${col}`}
            x={82 + col * 24}
            y={280 + row * 30}
            width="14"
            height="14"
            rx="2"
            fill="#E8A548"
            opacity="0.85"
          />
        ))
      )}
      {[0, 1, 2, 3].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`w2-${row}-${col}`}
            x={160 + col * 22}
            y={240 + row * 30}
            width="12"
            height="12"
            rx="2"
            fill="#F4ECDC"
            opacity="0.7"
          />
        ))
      )}

      <rect x="380" y="330" width="140" height="70" rx="8" fill="#16233A" opacity="0.9" />
      <rect x="395" y="345" width="50" height="8" rx="4" fill="#E8A548" />
      <rect x="395" y="360" width="90" height="6" rx="3" fill="#F4ECDC" opacity="0.6" />
      <rect x="395" y="374" width="70" height="6" rx="3" fill="#F4ECDC" opacity="0.4" />

      <g>
        <rect
          x="190"
          y="70"
          width="200"
          height="130"
          rx="14"
          fill="#FFFDF8"
          stroke="#16233A"
          strokeOpacity="0.08"
        />
        <circle cx="212" cy="92" r="4" fill="#E8A548" />
        <circle cx="226" cy="92" r="4" fill="#2F7F76" />
        <circle cx="240" cy="92" r="4" fill="#16233A" opacity="0.3" />
        <rect x="206" y="112" width="90" height="8" rx="4" fill="#16233A" opacity="0.8" />
        <rect x="206" y="130" width="150" height="6" rx="3" fill="#16233A" opacity="0.35" />
        <rect x="206" y="146" width="130" height="6" rx="3" fill="#16233A" opacity="0.35" />
        <rect x="206" y="162" width="60" height="6" rx="3" fill="#2F7F76" opacity="0.7" />
      </g>

      <circle cx="120" cy="90" r="10" fill="#FFFDF8" opacity="0.8" />
      <circle cx="145" cy="80" r="6" fill="#FFFDF8" opacity="0.7" />

      <defs>
        <radialGradient id="sun-gradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FCE3B0" />
          <stop offset="100%" stopColor="#E8A548" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
