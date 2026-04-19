import { useState, useEffect, useRef } from 'react'
import type { Dish, SuccessPhase } from '../../types'
import { IMAGE_PATHS, ING_EMOJI } from '../../data/gameData'
import SmokeEffect from '../ui/SmokeEffect'

interface Props {
  dish: Dish
  onContinue: () => void
  playSizzle: () => void
  playSuccess: () => void
}

export default function SuccessOverlay({ dish, onContinue, playSizzle, playSuccess }: Props) {
  const [phase, setPhase] = useState<SuccessPhase>(0)
  const calledRef = useRef(false)

  useEffect(() => {
    playSizzle()
    const tSuccess = setTimeout(() => {
      if (!calledRef.current) {
        calledRef.current = true
        playSuccess()
      }
    }, 1800)

    const t1 = setTimeout(() => setPhase(1), 500)
    const t2 = setTimeout(() => setPhase(2), 1600)
    const t3 = setTimeout(() => setPhase(3), 2800)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(tSuccess)
    }
  }, [playSizzle, playSuccess])

  const dishImgSrc = IMAGE_PATHS.dishes[dish.name] ?? null

  return (
    <div
      className="fixed inset-0 z-50 transition-all duration-700 flex items-center justify-center"
      style={{
        background: phase >= 3 ? 'rgba(44,24,16,0.75)' : 'rgba(0,0,0,0)',
        backdropFilter: phase >= 3 ? 'blur(6px)' : 'none',
        pointerEvents: phase < 1 ? 'none' : 'auto',
      }}
    >
      {/* ── 1. HIỆU ỨNG KHÓI KHI ĐANG NẤU (Phases 0–2) ── */}
      {phase <= 2 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-[400px] h-[320px]">
            <SmokeEffect
              originX={200}
              originY={160}
              count={phase === 0 ? 30 : 65}
              className="absolute inset-0"
            />
          </div>
        </div>
      )}

      {/* ── 2. KHỐI MÓN ĂN & TÊN MÓN - CĂN GIỮA CHÍNH DIỆN ── */}
      {phase >= 2 && (
        <div 
          className="relative z-20 flex flex-col items-center justify-center text-center pointer-events-none"
          style={{
            animation: 'dishReveal 0.8s cubic-bezier(0.34,1.15,0.64,1) both',
          }}
        >
          {/* Hiệu ứng tia sáng lấp lánh quay quanh tâm */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 51, 103, 154, 206, 257, 309].map((deg, i) => (
              <div
                key={deg}
                className="absolute text-gold text-2xl"
                style={{
                  transform: `rotate(${deg}deg) translateY(-140px)`,
                  animation: 'sparklePop 1s ease-out forwards',
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                ✦
              </div>
            ))}
          </div>

          {/* Ảnh món ăn chính */}
          <div className="relative mb-6">
            {dishImgSrc ? (
              <img
                src={dishImgSrc}
                alt={dish.name}
                className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-float"
              />
            ) : (
              <span className="text-[120px] leading-none animate-float drop-shadow-lg">
                {dish.emoji}
              </span>
            )}
            
            {/* Làn khói nhẹ bay trực tiếp trên món ăn */}
          </div>

          {/* Tên món ăn dưới ảnh */}
          <h2
            className="font-display text-4xl md:text-5xl text-white drop-shadow-2xl"
            style={{ textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}
          >
            {dish.name}
          </h2>
        </div>
      )}

      {/* ── 3. BẢNG THÔNG TIN MÓN (CÓ KHUNG NGUYÊN LIỆU MỚI) ── */}
      {phase >= 3 && (
        <div
          className="ceramic-panel absolute shadow-overlay"
          style={{
            right: '3%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 320,
            padding: '28px 24px 24px',
            animation: 'slideRight 0.6s cubic-bezier(0.34,1.15,0.64,1) both',
            zIndex: 60,
          }}
        >
          {/* Thanh trang trí phía trên */}
          <div
            className="absolute top-0 left-0 right-0 rounded-t-xl h-1"
            style={{ background: 'linear-gradient(to right,#2B5D8A,#D4A017,#C0752A)' }}
          />

          {/* Ảnh nhỏ của món ăn */}
          <div className="text-center mb-3">
            {dishImgSrc ? (
              <img
                src={dishImgSrc}
                alt={dish.name}
                className="inline-block object-contain rounded-xl bg-white p-1 border border-[#E2F2FC]"
                style={{ width: 65, height: 65 }}
              />
            ) : (
              <span className="text-5xl leading-none">{dish.emoji}</span>
            )}
          </div>

          <h3 className="font-display text-2xl text-ink text-center mb-2">
            {dish.name}
          </h3>

          <div className="divider-ceramic mb-3" />

          <p className="font-body text-brown-dark italic leading-relaxed text-center mb-5" style={{ fontSize: 13 }}>
            "{dish.info}"
          </p>

          {/* ── DANH SÁCH NGUYÊN LIỆU DẠNG ICON TRÒN ── */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {dish.ingredients.map((ing) => {
              const src = IMAGE_PATHS.ingredients[ing] ?? null
              return (
                <div key={ing} className="flex flex-col items-center gap-1 group">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center p-1.5 transition-transform group-hover:scale-110 shadow-sm"
                    style={{
                      background: 'linear-gradient(135deg, #f0f7fd 0%, #e2f2fc 100%)',
                      border: '1.5px solid #2B5D8A'
                    }}
                  >
                    {src ? (
                      <img src={src} alt={ing} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-xl">{ING_EMOJI[ing]}</span>
                    )}
                  </div>
                  <span className="font-body text-[10px] text-ceramic font-bold uppercase tracking-tighter">
                    {ing}
                  </span>
                </div>
              )
            })}
          </div>

          <button 
            className="btn-gold w-full text-[15px] font-bold py-3 shadow-lg active:scale-95 transition-transform" 
            onClick={onContinue}
          >
            Tiếp tục &nbsp;→
          </button>
        </div>
      )}
    </div>
  )
}