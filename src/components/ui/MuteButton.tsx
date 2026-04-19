import { useState } from 'react'

interface Props {
  onToggle: () => boolean   // returns new muted state
}

export default function MuteButton({ onToggle }: Props) {
  const [muted, setMuted] = useState(false)

  const handleClick = () => {
    const isMuted = onToggle()
    setMuted(isMuted)
  }

  return (
    <button
      onClick={handleClick}
      title={muted ? 'Bật nhạc' : 'Tắt nhạc'}
      className="fixed z-40 flex items-center justify-center rounded-full
                 bg-white/80 border-2 border-parchment
                 text-ceramic text-lg
                 shadow-card backdrop-blur-sm
                 transition-all duration-200
                 hover:scale-110 hover:border-ceramic hover:bg-white
                 active:scale-95"
      style={{ bottom: 20, right: 20, width: 44, height: 44 }}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  )
}
