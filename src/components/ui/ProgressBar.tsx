import { DISHES, IMAGE_PATHS } from '../../data/gameData'

interface Props { round: number }   // 0 = none done, 6 = all done

export default function ProgressBar({ round }: Props) {
  return (
    <div className="flex items-center gap-2">
      {DISHES.map((dish, i) => {
        const done    = i < round
        const current = i === round
        const cls     = done    ? 'prog-dot prog-dot-done'
                      : current ? 'prog-dot prog-dot-current'
                      :           'prog-dot'

        const iconSrc = IMAGE_PATHS.icons[dish.name] ?? null

        return (
          <div
            key={dish.id}
            className={cls}
            style={{
              width: 48, height: 48,
              animationDelay: `${i * 0.06}s`,
            }}
            title={dish.name}
          >
            {iconSrc
              ? <img src={iconSrc} alt={dish.name}
                  className="rounded-full object-contain"
                  style={{ width: 30, height: 30 }} />
              : <span className="leading-none text-lg select-none">{dish.icon}</span>
            }
          </div>
        )
      })}

      {/* Counter */}
      <span className="ml-1 text-xs text-ceramic italic font-body select-none">
        {round}/6
      </span>
    </div>
  )
}
