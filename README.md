# 🏺 Nấu Mâm Cỗ Bát Tràng

Game đố vui ẩm thực Tết Việt — chọn đúng 3 nguyên liệu để hoàn thành 6 món cỗ truyền thống.

## Stack
- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS v3** (pnpm)
- **Web Audio API** (no deps — âm thanh sinh ra procedurally)

---

## Cài & chạy

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # production build
pnpm preview
```

---

## Âm thanh & Nhạc nền

Tất cả âm thanh được tạo bằng **Web Audio API** trong `src/hooks/useSound.ts` — không cần file mp3.

| Sự kiện | Âm thanh |
|---------|---------|
| Chọn nguyên liệu | Chime nhẹ (sine, 880Hz → 1320Hz) |
| Bỏ chọn | Nốt đi xuống |
| **Chọn đúng** | Ascending pentatonic fanfare |
| **Chọn sai** | Descending minor thirds + low thud |
| Khói / nấu | White noise sizzle (bandpass 2500Hz) |
| Chiến thắng | Full triumphant melody + cymbal |
| Nhạc nền | Pentatonic ambient loop (Eb major) |
| Nút 🔊/🔇 | Góc dưới phải — toggle mute |

### Thêm file nhạc thật

Trong `useSound.ts`, thay hàm `startBgMusic` bằng:
```ts
const audio = new Audio('/sounds/nhac-nen.mp3')
audio.loop = true
audio.volume = 0.35
audio.play()
```

---

## Hiệu ứng khói

`SmokeEffect.tsx` dùng **Canvas 2D** vẽ các đám khói mềm (radial gradient particles):

- Pha 0–0.5s: Bát mờ dần, khói xuất hiện
- Pha 0.5–1.6s: Khói dày đặc, sizzle sound
- Pha 1.6–2.8s: Khói tan, món ăn hiện ra trên bàn gỗ
- Pha 2.8s+: Background tối, info card trượt từ phải

---

## Thêm ảnh thực tế

Mở `src/data/gameData.ts`, thay `null` bằng đường dẫn:
```ts
dishes:      { 'Gà luộc': '/images/dishes/ga-luoc.png', ... }
ingredients: { 'Gà': '/images/ingredients/ga.png', ... }
icons:       { 'Gà luộc': '/images/icons/ga-luoc-icon.png', ... }
ceramicBowl: '/images/bat-gom.png'
```
Đặt file vào `public/images/`. Khi `null` → emoji fallback.

---

## Cấu trúc

```
src/
├── App.tsx                    # Root — state + sound wiring
├── index.css                  # Tailwind v3 + component classes
├── main.tsx
├── vite-env.d.ts
├── types/index.ts             # TypeScript types
├── data/gameData.ts           # ⭐ DISHES + IMAGE_PATHS
├── hooks/
│   └── useSound.ts            # ⭐ Web Audio engine (no deps)
└── components/
    ├── ui/
    │   ├── CeramicBowl.tsx    # SVG bát gốm hoa xanh
    │   ├── ServingWare.tsx    # SVG đĩa/bát thành phẩm
    │   ├── SmokeEffect.tsx    # ⭐ Canvas smoke particles
    │   ├── Confetti.tsx       # Canvas confetti (end screen)
    │   ├── ProgressBar.tsx    # 6-dot progress
    │   └── MuteButton.tsx     # Floating 🔊/🔇 button
    └── screens/
        ├── StartScreen.tsx
        ├── InstructionScreen.tsx
        ├── GameplayScreen.tsx
        ├── SuccessOverlay.tsx  # 4-phase: bowl→smoke→dish→info
        ├── WrongOverlay.tsx
        └── EndScreen.tsx
```
# game
