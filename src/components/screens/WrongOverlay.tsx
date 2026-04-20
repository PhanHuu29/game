import { useEffect } from 'react'

interface Props {
  onRetry:   () => void
  playWrong: () => void
}

export default function WrongOverlay({ onRetry, playWrong }: Props) {
  useEffect(() => { playWrong() }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background:     'rgba(44,24,16,0.62)',
        backdropFilter: 'blur(5px)',
        animation:      'fadeIn 0.3s ease both',
      }}
    >
      <div
        className="relative text-center"
        style={{
          background:   '#FFF5F5',
          border:       '3px solid #D94040',
          borderRadius: 18,
          padding:      '40px 40px 32px',
          maxWidth:     380,
          width:        '90%',
          boxShadow:    '0 24px 80px rgba(0,0,0,0.38)',
          animation:    'cardEntrance 0.45s cubic-bezier(0.34,1.2,0.64,1) both',
        }}
      >
        {/* Inner border */}
        <div
          className="absolute pointer-events-none"
          style={{ inset: 9, border: '1px solid rgba(217,64,64,0.2)', borderRadius: 13 }}
        />

        {/* Red top accent */}
        <div
          className="absolute top-0 left-0 right-0 rounded-t-[14px]"
          style={{ height: 4, background: 'linear-gradient(to right,#D94040,#FF6B6B,#D94040)' }}
        />

        {/* Shake emoji */}
        <div
          className="leading-none select-none"
          style={{ fontSize: 68, marginBottom: 16, animation: 'shakeX 0.65s ease both' }}
        >
          
        </div>

        <h3
          className="font-display mb-3"
          style={{ fontSize: 27, color: '#C0392B' }}
        >
          Chưa đúng rồi!
        </h3>

        <div style={{ height: 1, margin: '0 0 16px', background: 'linear-gradient(to right,transparent,#D94040,transparent)' }} />

        <p className="font-body text-brown-dark leading-[1.9] mb-7" style={{ fontSize: 14 }}>
          Nguyên liệu chưa đúng. Hãy thử lại và chọn đúng{' '}
          <strong>3 nguyên liệu</strong> cho món ăn này nhé!
        </p>

        <button className="btn-clay w-full text-base" onClick={onRetry}>
          🔄 &nbsp;Chơi Lại
        </button>
      </div>
    </div>
  )
}
