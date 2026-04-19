import { useRef, useCallback, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════
//  HYBRID SOUND ENGINE - PHIÊN BẢN NHÚNG TRỰC TIẾP
//  Bạn chỉ cần dán Link nhạc vào các biến "link_xxx" bên dưới.
// ═══════════════════════════════════════════════════════════════

function createCtx(): AudioContext | null {
  try {
    return new (window.AudioContext || (window as any).webkitAudioContext)()
  } catch { return null }
}

function makeAudio(src: string, loop = false, vol = 1): HTMLAudioElement {
  const a = new Audio(src)
  a.loop = loop
  a.volume = vol
  a.preload = 'auto'
  // Cho phép nạp nhạc từ link web bên ngoài (URL)
  a.crossOrigin = "anonymous" 
  return a
}

export function useSound() {
  // ─── ĐỊNH NGHĨA LINK NHẠC TẠI ĐÂY ───
  const link_nhac_nen = '/public/sounds/nhac-nen.mp3'; // <-- Dán link nhạc nền .mp3 vào đây
  const link_chon_mon = '/public/sounds/nhac-bo-chon.mp3'; // <-- Dán link tiếng click vào đây
  const link_bo_chon  = '/public/sounds/nhac-bo-chon.mp3'; // <-- Dán link tiếng bỏ chọn vào đây
  const link_dung_roi = ''; // <-- Dán link tiếng success vào đây
  const link_sai_roi  = ''; // <-- Dán link tiếng wrong vào đây
  const link_chien_thang = '/public/sounds/nhacchienthang.mp3'; // <-- Dán link nhạc victory vào đây

  const ctxRef   = useRef<AudioContext | null>(null)
  const bgGain   = useRef<GainNode | null>(null)
  const mutedRef = useRef(false)

  const bgAudioRef       = useRef<HTMLAudioElement | null>(null)
  const selectAudioRef   = useRef<HTMLAudioElement | null>(null)
  const deselectAudioRef = useRef<HTMLAudioElement | null>(null)
  const successAudioRef  = useRef<HTMLAudioElement | null>(null)
  const wrongAudioRef    = useRef<HTMLAudioElement | null>(null)
  const sizzleAudioRef   = useRef<HTMLAudioElement | null>(null)
  const victoryAudioRef  = useRef<HTMLAudioElement | null>(null)

  const getCtx = useCallback((): AudioContext | null => {
    if (!ctxRef.current) ctxRef.current = createCtx()
    if (ctxRef.current?.state === 'suspended') ctxRef.current.resume()
    return ctxRef.current
  }, [])

  const osc = useCallback((ctx: AudioContext, type: OscillatorType, freq: number, t: number, dur: number, gStart = 0.3, gEnd = 0) => {
    const o = ctx.createOscillator(); const g = ctx.createGain()
    o.type = type; o.frequency.value = freq
    g.gain.setValueAtTime(gStart, t); g.gain.linearRampToValueAtTime(gEnd, t + dur)
    o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + dur + 0.02)
  }, [])

  const playFile = useCallback((ref: React.MutableRefObject<HTMLAudioElement | null>, src: string, opts: { loop?: boolean; volume?: number } = {}) => {
    if (!ref.current) ref.current = makeAudio(src, opts.loop ?? false, opts.volume ?? 1)
    ref.current.volume = mutedRef.current ? 0 : (opts.volume ?? 1)
    ref.current.currentTime = 0
    ref.current.play().catch(() => {})
  }, [])

  // ── 🎵 PHÁT NHẠC NỀN ──
  const startBgMusic = useCallback(() => {
    if (link_nhac_nen) {
      if (!bgAudioRef.current) {
        bgAudioRef.current = makeAudio(link_nhac_nen, true, 0.15)
      }
      bgAudioRef.current.volume = mutedRef.current ? 0 : 0.15
      bgAudioRef.current.play().catch(() => {})
      return
    }

    // Nếu không có link, chạy nhạc Synth mặc định
    const ctx = getCtx(); if (!ctx) return
    const sr = ctx.sampleRate; const bLen = 2.4; const buf = ctx.createBuffer(2, Math.floor(sr * bLen * 4), sr)
    // ... (Logic Synth giữ nguyên để game không bị câm nếu link hỏng) ...
    const master = ctx.createGain(); master.gain.value = mutedRef.current ? 0 : 0.38; master.connect(ctx.destination); bgGain.current = master
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true; src.connect(master); src.start()
    ;(bgGain.current as any)._src = src
  }, [getCtx, playFile, link_nhac_nen])

  const stopBgMusic = useCallback(() => {
    if (bgAudioRef.current) {
      bgAudioRef.current.pause();
      bgAudioRef.current.currentTime = 0;
    }
    if (bgGain.current && (bgGain.current as any)._src) {
      try { (bgGain.current as any)._src.stop(); } catch (e) {}
    }
  }, []);

  // ── 🔊 CÁC HIỆU ỨNG ÂM THANH ──
  const playSelect = useCallback(() => {
    if (mutedRef.current) return
    if (link_chon_mon) { playFile(selectAudioRef, link_chon_mon, { volume: 0.7 }); return }
    const ctx = getCtx(); if (!ctx) return; osc(ctx, 'sine', 880, ctx.currentTime, 0.06, 0.15, 0)
  }, [getCtx, osc, playFile, link_chon_mon])

  const playDeselect = useCallback(() => {
    if (mutedRef.current) return
    if (link_bo_chon) { playFile(deselectAudioRef, link_bo_chon, { volume: 0.5 }); return }
    const ctx = getCtx(); if (!ctx) return; osc(ctx, 'sine', 660, ctx.currentTime, 0.05, 0.10, 0)
  }, [getCtx, osc, playFile, link_bo_chon])

  const playSuccess = useCallback(() => {
    if (mutedRef.current) return
    if (link_dung_roi) { playFile(successAudioRef, link_dung_roi, { volume: 0.85 }); return }
    const ctx = getCtx(); if (!ctx) return; [523.3, 659.3, 783.9].forEach((f, i) => osc(ctx, 'sine', f, ctx.currentTime + i * .1, 0.25, 0.25, 0))
  }, [getCtx, osc, playFile, link_dung_roi])

  const playWrong = useCallback(() => {
    if (mutedRef.current) return
    if (link_sai_roi) { playFile(wrongAudioRef, link_sai_roi, { volume: 0.8 }); return }
    const ctx = getCtx(); if (!ctx) return; [440, 370, 311].forEach((f, i) => osc(ctx, 'sawtooth', f, ctx.currentTime + i * .1, 0.2, 0.2, 0))
  }, [getCtx, osc, playFile, link_sai_roi])

  const playVictory = useCallback(() => {
    if (mutedRef.current) return
    if (link_chien_thang) { playFile(victoryAudioRef, link_chien_thang, { volume: 0.9 }); return }
    const ctx = getCtx(); if (!ctx) return; [523.3, 659.3, 783.9].forEach((f, i) => osc(ctx, 'sine', f, ctx.currentTime + i * .1, 0.3, 0.3, 0))
  }, [getCtx, osc, playFile, link_chien_thang])

  const playSizzle = useCallback(() => {
    if (mutedRef.current) return
    playFile(sizzleAudioRef, '', { volume: 0.6 }) // Tiếng xèo giữ cơ chế cũ hoặc bạn dán link vào đây
  }, [playFile])

  const toggleMute = useCallback((): boolean => {
    mutedRef.current = !mutedRef.current
    const muted = mutedRef.current
    if (bgAudioRef.current) bgAudioRef.current.volume = muted ? 0 : 0.38
    if (bgGain.current && ctxRef.current) bgGain.current.gain.setValueAtTime(muted ? 0 : 0.38, ctxRef.current.currentTime)
    return muted
  }, [])

  useEffect(() => {
    return () => {
      try { (bgGain.current as any)?._src?.stop() } catch {}
      ctxRef.current?.close()
    }
  }, [])

  return { startBgMusic, playSelect, playDeselect, playSuccess, playWrong, playSizzle, playVictory, toggleMute, stopBgMusic }
}