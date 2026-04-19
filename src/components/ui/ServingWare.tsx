import type { Dish, Serveware } from '../../types'
import { IMAGE_PATHS } from '../../data/gameData'
import { JSX } from 'react'

interface Props { dish: Dish }

function PlateSVG() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      <ellipse cx="100" cy="170" rx="72" ry="12" fill="rgba(0,0,0,0.12)" />
      <ellipse cx="100" cy="105" rx="74" ry="60" fill="#F5F5F0" stroke="#2B5D8A" strokeWidth="2" />
      <ellipse cx="100" cy="105" rx="66" ry="52" fill="#FAFAF6" stroke="#2B5D8A" strokeWidth="1" />
      <ellipse cx="100" cy="105" rx="55" ry="43" fill="#F0EDE0" />
      {/* Glaze */}
      <ellipse cx="80" cy="90" rx="16" ry="7" fill="white" opacity="0.3" transform="rotate(-15,80,90)" />
      {/* Rim dots */}
      {Array.from({ length: 14 }).map((_, i) => {
        const a = (i / 14) * Math.PI * 2
        return <circle key={i} cx={100 + 68 * Math.cos(a)} cy={105 + 54 * Math.sin(a)} r="2" fill="#2B5D8A" opacity="0.3" />
      })}
    </svg>
  )
}

function BowlSVG() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      <ellipse cx="100" cy="175" rx="74" ry="13" fill="rgba(0,0,0,0.12)" />
      <path d="M22 88 Q18 155 100 163 Q182 155 178 88 Z" fill="#F0F8FF" stroke="#2B5D8A" strokeWidth="2.5" />
      <ellipse cx="100" cy="88" rx="78" ry="22" fill="#E2F2FC" stroke="#2B5D8A" strokeWidth="2.5" />
      <ellipse cx="100" cy="88" rx="64" ry="15" fill="#C8E6F5" />
      {/* Glaze */}
      <ellipse cx="78" cy="78" rx="15" ry="7" fill="white" opacity="0.3" transform="rotate(-20,78,78)" />
      {Array.from({ length: 9 }).map((_, i) => {
        const a = (i / 9) * Math.PI * 2 - Math.PI / 2
        return <circle key={i} cx={100 + 71 * Math.cos(a)} cy={88 + 20 * Math.sin(a)} r="2.5" fill="#2B5D8A" opacity="0.38" />
      })}
    </svg>
  )
}

function BoxSVG() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      <rect x="20" y="60" width="160" height="120" rx="8" fill="#F5F0E8" stroke="#2B5D8A" strokeWidth="2" />
      <rect x="28" y="68" width="144" height="104" rx="5" fill="#FAF7F0" stroke="#2B5D8A" strokeWidth="1" />
      <ellipse cx="100" cy="185" rx="72" ry="10" fill="rgba(0,0,0,0.1)" />
    </svg>
  )
}
const WARE_MAP: Record<Serveware, () => JSX.Element> = {
  plate: PlateSVG,
  bowl:  BowlSVG,
  box:   BoxSVG,
}

export default function ServingWare({ dish }: Props) {
  const Ware   = WARE_MAP[dish.serveware]
  const imgSrc = IMAGE_PATHS.dishes[dish.name] ?? null

  return (
    <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
      <Ware />
      <div className="relative z-10 text-center">
        {imgSrc
          ? <img src={imgSrc} alt={dish.name} className="object-contain block" style={{ width: 100, height: 100 }} />
          : <span className="leading-none select-none" style={{ fontSize: 80 }}>{dish.emoji}</span>
        }
      </div>
    </div>
  )
}
