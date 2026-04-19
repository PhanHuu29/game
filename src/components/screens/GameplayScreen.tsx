import { useState, useEffect, useCallback } from 'react'
import type { Dish } from '../../types'
import { IMAGE_PATHS, ING_EMOJI, buildIngredientPool } from '../../data/gameData'
import CeramicBowl from '../ui/CeramicBowl'
import ProgressBar from '../ui/ProgressBar'

interface Props {
  dish: Dish
  round: number
  onSubmit: (selected: string[]) => void
  playSelect: () => void
  playDeselect: () => void
  playSizzle: () => void // ĐÃ THÊM: Khai báo prop này để khớp với App.tsx
}

export default function GameplayScreen({ 
  dish, 
  round, 
  onSubmit, 
  playSelect, 
  playDeselect,
  playSizzle // ĐÃ THÊM: Nhận hàm từ props
}: Props) {
  const [selected, setSelected] = useState<string[]>([])
  const [pool, setPool] = useState<string[]>(() => buildIngredientPool(dish))
  const [bowlKey, setBowlKey] = useState(0)

  const canSubmit = selected.length === 3

  useEffect(() => {
    setSelected([]);
    setPool(buildIngredientPool(dish));
    setBowlKey(k => k + 1);
  }, [dish.id])

  const toggle = useCallback((ing: string) => {
    if (selected.includes(ing)) {
      setSelected(s => s.filter(x => x !== ing));
      playDeselect();
    } else if (selected.length < 3) {
      setSelected(s => [...s, ing]);
      playSelect();
    }
  }, [selected, playSelect, playDeselect])

  const handleStartCooking = () => {
    playSizzle(); // Phát âm thanh xèo xèo khi bắt đầu nấu
    onSubmit(selected);
  }

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col items-center bg-stone-50 overflow-hidden">
      {/* 1. NỀN TOÀN MÀN HÌNH */}
      <img 
        src="/images/ui/gameplay.png" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
        alt="background"
      />
      
      {/* ── TOP BAR ── */}
      <div className="w-full pt-6 pb-2 flex flex-col items-center justify-center z-50">
        <div className={`w-full max-w-md transition-all duration-500 ${canSubmit ? 'animate-shimmer scale-105' : 'opacity-80'}`}>
          <ProgressBar round={round} />
        </div>
        <div className="mt-4 px-6 py-1.5 bg-[#5D4037] border-b-4 border-[#3E2723] rounded-2xl shadow-lg">
          <p className="font-display font-bold text-white text-lg tracking-wide uppercase">
            {dish.name}
          </p>
        </div>
      </div>

      {/* ── 2. MAIN CONTENT AREA ── */}
      <div className="flex-1 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 px-8 z-10">
        
        {/* KHU VỰC BÁT (TRÁI) */}
        <div className="flex flex-col items-center justify-center flex-1 relative mt-20">
          <div className="relative transform scale-[2.2] transition-all duration-500">
             {/* KỆ ĐĨA TĨNH */}
             <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-32 h-4 bg-black/20 rounded-[50%] blur-sm z-0" />
             
             <div className="relative z-10">
                <CeramicBowl key={bowlKey} ingredients={selected} glowing={canSubmit} />
             </div>
          </div>

          <div className="h-20 flex items-center mt-36 z-20">
            {canSubmit && (
              <button 
                onClick={handleStartCooking}
                className="btn-submit-active bg-[#8D6E63] hover:bg-[#5D4037] text-white px-12 py-4 rounded-full font-black shadow-[0_8px_0_#3E2723] active:translate-y-1 active:shadow-none transition-all animate-pop-in text-lg"
              >
                BẮT ĐẦU NẤU NÀO
              </button>
            )}
          </div>
        </div>

        {/* ── KHU VỰC THỚT GỖ ── */}
        <div 
          className="relative flex-1 lg:flex-none p-10 rounded-[3.5rem] shadow-[inset_0_4px_10px_rgba(255,255,255,0.4),0_12px_0_#8D6E63,0_15px_30px_rgba(0,0,0,0.4)]"
          style={{
            backgroundColor: '#D7CCC8',
            backgroundImage: `
              repeating-linear-gradient(90deg, rgba(74, 55, 40, 0.05) 0px, rgba(74, 55, 40, 0.05) 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, rgba(74, 55, 40, 0.03) 0px, rgba(74, 55, 40, 0.03) 1px, transparent 1px, transparent 15px),
              linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)
            `,
          }}
        >
          <div 
            className="absolute inset-0 rounded-[3.5rem] opacity-40 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(74, 55, 40, 0.1) 0%, transparent 80%)`,
              backgroundSize: '200px 300px',
            }}
          />

          <div className="relative grid grid-cols-4 gap-4 z-10" style={{ perspective: '1000px' }}>
            {pool.map((ing) => {
              const isSel = selected.includes(ing);
              const isFull = !isSel && selected.length === 3;
              const src = IMAGE_PATHS.ingredients[ing];

              return (
                <button
                  key={ing}
                  disabled={isFull}
                  onClick={() => toggle(ing)}
                  className={`
                    group relative w-24 h-28 rounded-2xl flex flex-col items-center justify-center
                    transition-all duration-300 transform-gpu
                    ${isSel 
                      ? 'bg-orange-50 ring-4 ring-orange-400 shadow-inner' 
                      : 'bg-white/90 shadow-[0_4px_0_#BCAAA4] hover:shadow-none hover:translate-y-1'
                    }
                    ${isFull ? 'opacity-30 grayscale' : 'opacity-100'}
                  `}
                  onMouseMove={(e) => {
                    if (isFull) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(600px) rotateX(${y * -15}deg) rotateY(${x * 15}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
                  }}
                >
                  <div className="mb-2 transition-transform group-hover:scale-110">
                    {src ? <img src={src} className="w-12 h-12 object-contain" alt={ing} /> : <span className="text-3xl">{ING_EMOJI[ing]}</span>}
                  </div>
                  <span className="text-[10px] font-black text-stone-700 uppercase px-1 text-center leading-tight">
                    {ing}
                  </span>
                  {isSel && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                       <span className="text-white text-[10px]">✓</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}