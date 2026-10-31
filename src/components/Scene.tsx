import { useId } from 'react'

export type SceneVariant = 'hero' | 'family' | 'kids' | 'mountain' | 'splash' | 'lanes'

interface SceneProps {
  variant: SceneVariant
  label: string
  className?: string
}

/**
 * Ilustrasi vektor bernuansa Santorini/pegunungan. Dipakai sebagai pengganti foto
 * sampai foto resmi tersedia (lihat README: mengganti galeri dengan foto asli).
 */
export function Scene({ variant, label, className }: SceneProps) {
  const uid = useId().replace(/:/g, '')
  const sky = `sky-${uid}`
  const water = `water-${uid}`
  const hill = `hill-${uid}`

  const showPool = variant !== 'mountain'
  const poolTop = variant === 'hero' ? 190 : variant === 'lanes' ? 120 : 175

  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7cc5ea" />
          <stop offset="1" stopColor="#e6f4f1" />
        </linearGradient>
        <linearGradient id={water} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#35c0d0" />
          <stop offset="1" stopColor="#0c8ea3" />
        </linearGradient>
        <linearGradient id={hill} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4f9a63" />
          <stop offset="1" stopColor="#2f7a52" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#${sky})`} />
      <ellipse cx="90" cy="46" rx="42" ry="12" fill="#fff" opacity=".85" />
      <ellipse cx="128" cy="40" rx="30" ry="10" fill="#fff" opacity=".85" />
      <ellipse cx="300" cy="62" rx="36" ry="10" fill="#fff" opacity=".7" />

      {/* Pegunungan */}
      <path d="M0 150 L70 88 L130 132 L205 70 L290 138 L350 100 L400 135 V230 H0Z" fill="#6aa7b0" opacity=".75" />
      <path d="M0 175 L60 128 L125 168 L210 112 L300 170 L360 140 L400 165 V240 H0Z" fill={`url(#${hill})`} />

      {variant === 'mountain' && (
        <g>
          <path d="M0 215 Q100 190 200 212 T400 205 V300 H0Z" fill="#3f8d58" />
          <path d="M0 240 Q100 220 200 238 T400 232 V300 H0Z" fill="#6bb56b" />
          <path d="M20 260 Q100 245 190 258" stroke="#9bd081" strokeWidth="3" fill="none" opacity=".8" />
          <path d="M210 266 Q300 250 390 262" stroke="#9bd081" strokeWidth="3" fill="none" opacity=".8" />
          <rect x="270" y="196" width="46" height="22" fill="#fbf8ef" />
          <path d="M264 198 L293 178 L322 198Z" fill="#ee7a62" />
        </g>
      )}

      {/* Pohon kelapa */}
      {variant !== 'lanes' && (
        <g fill="none" strokeLinecap="round">
          <path d="M36 190 Q40 160 30 138" stroke="#7a5a3a" strokeWidth="4" />
          <path d="M30 138 q-22 -4 -28 12 M30 138 q-6 -20 -26 -18 M30 138 q14 -18 34 -8 M30 138 q22 -2 28 14" stroke="#2f8a4e" strokeWidth="5" />
          {variant !== 'mountain' && variant !== 'family' && (
            <g>
              <path d="M370 190 Q366 165 376 144" stroke="#7a5a3a" strokeWidth="4" />
              <path d="M376 144 q-20 -6 -30 8 M376 144 q-2 -22 -22 -22 M376 144 q18 -16 34 -4 M376 144 q22 0 26 14" stroke="#2f8a4e" strokeWidth="5" />
            </g>
          )}
        </g>
      )}

      {showPool && (
        <g>
          {/* Tepi kolam */}
          <rect x="0" y={poolTop - 12} width="400" height="14" fill="#e9d9bd" />
          <rect x="0" y={poolTop} width="400" height={300 - poolTop} fill={`url(#${water})`} />
          <g stroke="#fff" strokeWidth="2" fill="none" opacity=".45" strokeLinecap="round">
            <path d={`M10 ${poolTop + 30} q15 -8 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0`} />
            <path d={`M90 ${poolTop + 58} q15 -8 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0`} />
            <path d={`M0 ${poolTop + 86} q15 -8 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0`} />
          </g>
        </g>
      )}

      {/* Wahana air: menara, ember, perosotan */}
      {(variant === 'hero' || variant === 'kids') && (
        <g>
          <rect x="278" y="92" width="8" height="100" fill="#2f9bb0" />
          <rect x="326" y="92" width="8" height="100" fill="#2f9bb0" />
          <rect x="274" y="88" width="64" height="8" fill="#f2b84b" />
          <rect x="296" y="52" width="26" height="22" rx="3" fill="#ee7a62" />
          <path d="M292 52 h34 l-4 -10 h-26z" fill="#f2b84b" />
          <path d="M338 120 Q372 150 360 192 L378 192 Q392 142 346 108Z" fill="#f4c84a" />
          <path d="M274 130 Q240 160 252 192 L238 192 Q222 146 268 120Z" fill="#4fb3d9" />
        </g>
      )}

      {/* Pelampung & perenang */}
      {(variant === 'family' || variant === 'splash') && (
        <g>
          <ellipse cx="190" cy="228" rx="46" ry="16" fill="none" stroke="#f4c84a" strokeWidth="14" />
          <circle cx="170" cy="214" r="12" fill="#f0c19a" />
          <path d="M158 210 q12 -16 24 0" fill="#3a2a22" />
          <circle cx="212" cy="212" r="10" fill="#e6b08a" />
          <path d="M203 208 q9 -14 18 0" fill="#3a2a22" />
          <circle cx="286" cy="236" r="9" fill="#e6b08a" />
          <path d="M278 232 q8 -12 16 0" fill="#3a2a22" />
          <rect x="278" y="244" width="16" height="6" rx="3" fill="#ee7a62" />
        </g>
      )}

      {variant === 'splash' && (
        <g fill="#fff" opacity=".85">
          <circle cx="110" cy="196" r="4" />
          <circle cx="124" cy="184" r="3" />
          <circle cx="98" cy="182" r="3" />
          <circle cx="136" cy="200" r="2.5" />
        </g>
      )}

      {variant === 'lanes' && (
        <g>
          {[150, 185, 220, 255].map((y) => (
            <g key={y}>
              <line x1="0" y1={y} x2="400" y2={y} stroke="#fff" strokeWidth="3" strokeDasharray="10 6" opacity=".8" />
              <line x1="0" y1={y + 3} x2="400" y2={y + 3} stroke="#ee7a62" strokeWidth="2" strokeDasharray="10 6" opacity=".7" />
            </g>
          ))}
          <path d="M0 108 H400" stroke="#e9d9bd" strokeWidth="14" />
          <g>
            <path d="M310 70 q40 -30 70 0z" fill="#4fb3d9" />
            <rect x="344" y="70" width="3" height="40" fill="#6b5a46" />
            <path d="M40 78 q36 -26 64 0z" fill="#ee7a62" />
            <rect x="70" y="78" width="3" height="30" fill="#6b5a46" />
          </g>
        </g>
      )}
    </svg>
  )
}
