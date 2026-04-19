import { IMAGE_PATHS, ING_EMOJI } from '../../data/gameData'

interface Props {
  ingredients: string[]
  glowing?: boolean
}

const SLOT_POS = [
  { x: 110, y: 145 },
  { x: 150, y: 138 },
  { x: 190, y: 145 },
]

export default function CeramicBowl({ ingredients, glowing }: Props) {
  return (
    <div className={`relative transition-all duration-500 ${glowing ? 'animate-bowl-glow rounded-full' : ''}`}>
      {IMAGE_PATHS.ceramicBowl ? (
        /* ── Real bowl image ── */
        <div className="relative" style={{ width: 280, height: 215 }}>
          <img
            src={IMAGE_PATHS.ceramicBowl}
            alt="Bát gốm Bát Tràng"
            className="w-full h-full object-contain drop-shadow-[0_12px_32px_rgba(43,93,138,0.25)]"
          />
          {/* overlay ingredients on image */}
          <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-3">
            {ingredients.slice(0, 3).map((ing, i) => {
              const src = IMAGE_PATHS.ingredients[ing] ?? null
              return (
                <span
                  key={ing}
                  className="animate-drop-into-bowl text-2xl leading-none"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  {src
                    ? <img src={src} alt={ing} className="w-8 h-8 object-contain" />
                    : ING_EMOJI[ing] ?? '🌿'}
                </span>
              )
            })}
          </div>
        </div>
      ) : (
        /* ── SVG fallback ── */
        <svg
          viewBox="0 0 300 230"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_12px_32px_rgba(43,93,138,0.25)]"
          style={{ width: 280, height: 215 }}
        >
          {/* Wood table */}
          <rect x="0" y="172" width="300" height="58" rx="7" fill="#8B6340" />
          <rect x="0" y="172" width="300" height="9"  rx="3" fill="#A07248" />
          {[186,200,214].map((y, i) => (
            <path key={i} d={`M0 ${y} Q150 ${y - 5} 300 ${y}`}
              stroke="#7A5530" strokeWidth="1" fill="none" opacity="0.36" />
          ))}

          {/* Shadow */}
          <ellipse cx="150" cy="176" rx="86" ry="11" fill="rgba(0,0,0,0.14)" />

          {/* Bowl body */}
          <path d="M64 136 Q59 176 150 181 Q241 176 236 136 Z"
            fill="#F0F8FF" stroke="#2B5D8A" strokeWidth="2.5" />

          {/* Rim outer */}
          <ellipse cx="150" cy="136" rx="86" ry="22"
            fill="#E8F4FC" stroke="#2B5D8A" strokeWidth="2.5" />
          {/* Rim inner highlight */}
          <ellipse cx="150" cy="136" rx="70" ry="15"
            fill="#D0E8F5" stroke="none" />

          {/* Glaze sheen */}
          <ellipse cx="125" cy="128" rx="18" ry="7"
            fill="white" opacity="0.35" transform="rotate(-20,125,128)" />

          {/* Rim dots */}
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i / 10) * Math.PI * 2 - Math.PI / 2
            return (
              <circle key={i}
                cx={150 + 78 * Math.cos(a)}
                cy={136 + 20 * Math.sin(a)}
                r="2.8" fill="#2B5D8A" opacity="0.45" />
            )
          })}

          {/* Lotus motif */}
          <path d="M122 136 Q136 123 150 133 Q164 123 178 136 Q164 149 150 140 Q136 149 122 136Z"
            fill="none" stroke="#2B5D8A" strokeWidth="1.5" opacity="0.55" />

          {/* Inner concentric ring */}
          <ellipse cx="150" cy="136" rx="56" ry="11"
            fill="none" stroke="#2B5D8A" strokeWidth="0.8" opacity="0.2" />

          {/* Glowing bowl rim when 3 selected */}
          {glowing && (
            <ellipse cx="150" cy="136" rx="90" ry="24"
              fill="none" stroke="#D4A017" strokeWidth="2.5" opacity="0.7"
              style={{ filter: 'drop-shadow(0 0 8px #D4A017)' }} />
          )}

          {/* Ingredients */}
          {ingredients.slice(0, 3).map((ing, i) => {
            const pos    = SLOT_POS[i]
            const imgSrc = IMAGE_PATHS.ingredients[ing] ?? null
            const delay  = `${i * 0.13}s`
            return imgSrc ? (
              <image key={ing} href={imgSrc}
                x={pos.x - 14} y={pos.y - 14} width="28" height="28"
                style={{ animation: `dropIntoBowl 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay} both` }} />
            ) : (
              <text key={ing} x={pos.x} y={pos.y}
                textAnchor="middle" dominantBaseline="middle" fontSize="22"
                style={{ animation: `dropIntoBowl 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay} both` }}>
                {ING_EMOJI[ing] ?? '🌿'}
              </text>
            )
          })}
        </svg>
      )}
    </div>
  )
}
