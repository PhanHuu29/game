import { useEffect } from 'react'
import { DISHES, IMAGE_PATHS } from '../../data/gameData'
import Confetti from '../ui/Confetti'

interface Props {
  onRestart:   () => void
  playVictory: () => void
}

export default function EndScreen({ onRestart, playVictory }: Props) {
  useEffect(() => {
    playVictory()
  }, [])

  return (
    <div className="screen gap-5 px-6 select-none">
      <img
        src="/images/ui/mission.png"
        className="absolute inset-0 w-full h-full object-fill z-0"
        alt="background"
      />
      {/* Confetti canvas */}
      <Confetti />

      {/* Rainbow top stripe */}
      <div
        className="absolute top-0 left-0 right-0 z-30"
        style={{ height: 6, background: 'linear-gradient(to right,#2B5D8A,#D4A017,#C0752A,#4A7C59,#B22222,#2B5D8A)' }}
      />

      {/* Celebration emoji */}
      <div className="text-6xl animate-pop-in leading-none z-20" style={{ animationDelay: '0.1s' }}>
        🎉
      </div>

      {/* Header banner */}
      <div
        className="text-center px-8 py-4 rounded-xl z-20 animate-slide-up shadow-overlay"
        style={{
          background:   'linear-gradient(135deg,#2C1810 0%,#5C3317 100%)',
          animationDelay: '0.15s',
          border: '2px solid rgba(212,160,23,0.4)',
        }}
      >
        <p
          className="font-display tracking-wide"
          style={{ fontSize: 'clamp(16px,2.5vw,24px)', color: '#D4A017' }}
        >
          Bạn đã hoàn thành
        </p>
        <p
          className="font-display italic"
          style={{ fontSize: 'clamp(20px,3vw,32px)', color: '#E8C84B' }}
        >
          Mâm Cỗ Bát Tràng! &nbsp;🏺
        </p>
      </div>

      {/* 6-dish grid */}
      <div
        className="grid grid-cols-3 gap-3.5 z-20"
        style={{ maxWidth: 390 }}
      >
        {DISHES.map((d, i) => {
          const src = IMAGE_PATHS.dishes[d.name] ?? null
          return (
            <div
              key={d.id}
              className="mam-dish-card"
              style={{ animationDelay: `${0.25 + i * 0.1}s` }}
            >
              {src
                ? <img
                    src={src}
                    alt={d.name}
                    className="block mx-auto object-contain"
                    style={{ width: 50, height: 50, marginBottom: 6 }}
                  />
                : <div
                    className="leading-none select-none"
                    style={{ fontSize: 38, marginBottom: 6 }}
                  >
                    {d.emoji}
                  </div>
              }
              <p
                className="font-body font-bold text-ink leading-tight"
                style={{ fontSize: 11 }}
              >
                {d.name}
              </p>
            </div>
          )
        })}
      </div>

      <p
        className="font-body text-brown-dark italic text-center z-20 animate-fade-in text-white"
        style={{ fontSize: 13, maxWidth: 340, animationDelay: '1s' }}
      >
        Mâm cỗ Bát Tràng đã hoàn thiện với 6 món ăn truyền thống tuyệt vời!
      </p>

      {/* Action buttons */}
      <div className="flex gap-3 z-20 animate-slide-up" style={{ animationDelay: '0.9s' }}>
        <button className="btn-clay" onClick={onRestart}>
          🔄 Chơi Lại
        </button>
        <button className="btn-primary">
          🌐 Khám Phá Tiếp
        </button>
      </div>
    </div>
  )
}
