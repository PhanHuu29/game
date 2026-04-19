import { useEffect, useRef } from 'react'

interface SmokeParticle {
  x:        number
  y:        number
  vx:       number
  vy:       number
  radius:   number
  opacity:  number
  life:     number    // 0→1
  lifeRate: number    // how fast it ages
  color:    string
  rotation: number
  rotSpeed: number
  scale:    number
}

interface Props {
  /** x,y = centre origin of smoke (relative to container) */
  originX?: number
  originY?: number
  /** how many particles */
  count?: number
  /** called when all particles have died */
  onDone?: () => void
  className?: string
}

function makePuff(ox: number, oy: number): SmokeParticle {
  const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.8   // mostly upward, slight spread
  const speed = 0.5 + Math.random() * 1.4
  const grey  = Math.floor(210 + Math.random() * 45)
  return {
    x:        ox + (Math.random() - 0.5) * 30,
    y:        oy,
    vx:       Math.cos(angle) * speed * 0.4 + (Math.random() - 0.5) * 0.5,
    vy:       Math.sin(angle) * speed,
    radius:   18 + Math.random() * 28,
    opacity:  0.55 + Math.random() * 0.3,
    life:     0,
    lifeRate: 0.005 + Math.random() * 0.008,
    color:    `rgb(${grey},${grey},${grey})`,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.025,
    scale:    0.3 + Math.random() * 0.4,
  }
}

export default function SmokeEffect({
  originX = 150,
  originY = 80,
  count   = 55,
  onDone,
  className = 'absolute inset-0 pointer-events-none',
}: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const doneRef    = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    canvas.width  = canvas.offsetWidth  || 600
    canvas.height = canvas.offsetHeight || 400

    /* Spawn particles in batches with stagger */
    const particles: SmokeParticle[] = []
    const spawnTimers: ReturnType<typeof setTimeout>[] = []

    for (let i = 0; i < count; i++) {
      spawnTimers.push(
        setTimeout(() => {
          particles.push(makePuff(originX, originY))
        }, i * 35),
      )
    }

    let raf: number
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let anyAlive = false
      for (const p of particles) {
        p.life  += p.lifeRate
        p.x     += p.vx
        p.y     += p.vy * (1 - p.life * 0.4)   // slow down as it rises
        p.vx    *= 0.99
        p.rotation += p.rotSpeed
        p.scale  = 0.3 + p.life * 1.8           // puff grows over life
        const alpha = p.opacity * (1 - Math.pow(p.life, 1.4))

        if (alpha > 0.01) {
          anyAlive = true
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.rotation)
          ctx.scale(p.scale, p.scale)

          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius)
          grad.addColorStop(0,   `rgba(255,255,255,${alpha})`)
          grad.addColorStop(0.5, `rgba(230,230,230,${alpha * 0.7})`)
          grad.addColorStop(1,   `rgba(180,180,180,0)`)

          ctx.beginPath()
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()
          ctx.restore()
        }
      }

      if (!anyAlive && particles.length >= count && !doneRef.current) {
        doneRef.current = true
        onDone?.()
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      spawnTimers.forEach(clearTimeout)
    }
  }, [originX, originY, count, onDone])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
