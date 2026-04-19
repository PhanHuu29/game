import { useEffect, useRef } from 'react'
import { CONFETTI_COLORS } from '../../data/gameData'

interface Particle {
  x: number; y: number; vx: number; vy: number
  color: string; size: number; rotation: number; rotSpeed: number; life: number
}

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = Array.from({ length: 120 }, () => ({
      x:        Math.random() * canvas.width,
      y:        -20 - Math.random() * 200,
      vx:       (Math.random() - 0.5) * 4,
      vy:       2 + Math.random() * 4,
      color:    CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size:     6 + Math.random() * 8,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.15,
      life:     1,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      for (const p of particles) {
        p.x  += p.vx
        p.y  += p.vy
        p.vy += 0.08  // gravity
        p.rotation += p.rotSpeed
        if (p.y < canvas.height + 20) { alive = true }
        ctx.save()
        ctx.globalAlpha = Math.max(0, p.life)
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        ctx.restore()
      }
      if (alive) raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
    />
  )
}
