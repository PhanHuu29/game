import { useState, useCallback, useRef } from 'react'
import type { GameScreen, Overlay } from './types'
import { DISHES }         from './data/gameData'
import { UI_IMAGES }      from './config/assets'
import { useSound }       from './hooks/useSound'

import StartScreen       from './components/screens/StartScreen'
import InstructionScreen from './components/screens/InstructionScreen'
import GameplayScreen    from './components/screens/GameplayScreen'
import SuccessOverlay    from './components/screens/SuccessOverlay'
import WrongOverlay      from './components/screens/WrongOverlay'
import EndScreen         from './components/screens/EndScreen'
import MuteButton        from './components/ui/MuteButton'

export default function App() {
  const [screen,  setScreen]  = useState<GameScreen>('start')
  const [round,   setRound]   = useState(0)
  const [overlay, setOverlay] = useState<Overlay>(null)

  // Quản lý nhạc nền (Background Music)
  const bgStarted = useRef(false)
  const sound = useSound()

  const ensureBgMusic = useCallback(() => {
    if (!bgStarted.current) {
      bgStarted.current = true
      sound.startBgMusic() // Nhạc nền bắt đầu và lặp lại
    }
  }, [sound])

  const currentDish = DISHES[round]

  // ── Xử lý chuyển màn hình ───────────────────────────────────
  const handleStart = useCallback(() => {
    ensureBgMusic() 
    setScreen('instruction')
  }, [ensureBgMusic])

  const handleBeginGame = useCallback(() => setScreen('gameplay'), [])

  const handleSubmit = useCallback((selected: string[]) => {
    const correct =
      currentDish.ingredients.every(i => selected.includes(i)) &&
      selected.every(i => currentDish.ingredients.includes(i))
    
    setOverlay(correct ? 'success' : 'wrong')
  }, [currentDish])

  const handleContinue = useCallback(() => {
    setOverlay(null)
    const next = round + 1
    if (next >= DISHES.length) {
      setScreen('end')
    } else {
      setRound(next)
    }
  }, [round])

  const handleRetry = useCallback(() => setOverlay(null), [])

  const handleRestart = useCallback(() => {
    setRound(0)
    setOverlay(null)
    setScreen('start')
  }, [])

  // ── Giao diện nền (Background Visuals) ──────────────────────
  const bgStyle: React.CSSProperties = UI_IMAGES.background
    ? {
        backgroundImage:    `url(${UI_IMAGES.background})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center',
      }
    : {
        background: `
          radial-gradient(ellipse at 15% 85%, rgba(192,117,42,0.14) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 15%, rgba(43,93,138,0.11) 0%, transparent 50%),
          linear-gradient(155deg, #FDF6E3 0%, #F5E8C8 55%, #EDD9A3 100%)
        `,
      }

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={bgStyle}>
      {/* Lớp phủ họa tiết gốm Bát Tràng (Batik) */}
      <div
        className="absolute inset-0 bg-batik pointer-events-none z-0"
        style={{ opacity: UI_IMAGES.background ? 0.06 : 1 }}
      />

      {/* Điều hướng màn hình chính */}
      {screen === 'start' && (
        <StartScreen onStart={handleStart} />
      )}

      {screen === 'instruction' && (
        <InstructionScreen onStart={handleBeginGame} />
      )}

      {screen === 'gameplay' && (
        <>
          <GameplayScreen
            dish={currentDish}
            round={round}
            onSubmit={handleSubmit}
            playSelect={sound.playSelect}
            playDeselect={sound.playDeselect}
            playSizzle={sound.playSizzle}
          />

          {/* Lớp phủ kết quả (Overlays) */}
          {overlay === 'success' && (
            <SuccessOverlay
              dish={currentDish}
              onContinue={handleContinue}
              playSizzle={sound.playSizzle}
              playSuccess={sound.playSuccess}
            />
          )}

          {overlay === 'wrong' && (
            <WrongOverlay
              onRetry={handleRetry}
              playWrong={sound.playWrong}
            />
          )}
        </>
      )}

      {screen === 'end' && (
        <EndScreen 
          onRestart={handleRestart} 
          playVictory={sound.playVictory} 
        />
      )}

      {/* Nút điều chỉnh âm thanh - luôn nổi lên trên cùng */}
      <div className="absolute top-4 right-4 z-50">
        <MuteButton onToggle={sound.toggleMute} />
      </div>
    </div>
  )
}