export type Serveware  = 'plate' | 'bowl' | 'box'
export type GameScreen = 'start' | 'instruction' | 'gameplay' | 'end'
export type Overlay    = 'success' | 'wrong' | null

export type SuccessPhase = 0 | 1 | 2 | 3

export interface Dish {
  id:          number
  name:        string
  emoji:       string
  icon:        string
  color:       string
  info:        string
  ingredients: string[]
  serveware:   Serveware
}

export interface ImagePaths {
  dishes:      Record<string, string | null>
  ingredients: Record<string, string | null>
  icons:       Record<string, string | null>
  ceramicBowl: string | null
}

export interface Particle {
  id: number; x: number; y: number
  color: string; size: number
  angle: number; speed: number; life: number
}
