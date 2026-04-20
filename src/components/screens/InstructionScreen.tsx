import { useSound } from '../../hooks/useSound'

interface Props { onStart: () => void }

export default function InstructionScreen({ onStart }: Props) {
  const { playSelect } = useSound()

  const handleStartClick = () => {
    playSelect()
    onStart()
  }

  return (
    <div className="screen gap-7 px-6">
      {/* 1. ẢNH NỀN TOÀN MÀN HÌNH */}
      <img
        src="/public/images/ui/mission.png"        
        className="absolute inset-0 w-full h-full object-fill z-0"
        alt="background"
      />

      {/* TIÊU ĐỀ - NẰM TRÊN CÙNG */}
      <h1 className="font-display text-5xl md:text-6xl text-white animate-slide-up relative z-10 drop-shadow-[0_12px_6px_rgba(0,0,0,2.5)]">
        Nhiệm Vụ
      </h1>

      {/* 2. KHỐI BẢNG NHIỆM VỤ */}
      <div className="relative animate-card-entrance max-w-[740px] w-full min-h-[510px] flex items-center justify-center p-10 md:p-24 drop-shadow-[0_12px_6px_rgba(0,0,0,3.4)]">

        {/* 1. ẢNH TẤM BẢNG (LÀM NỀN) */}
        <img
          src="/public/images/ui/ nhiệm vụ.png"
          className="absolute inset-0 w-full h-full object-fill z-0 items-center justify-center"
          alt="board-ui"
        />

        {/* 2. KHỐI NỘI DUNG - Đã xóa absolute ở các thẻ con để Flexbox tự căn giữa */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center w-full h-full">

          {/* Icon cái hũ */}
          <div className="text-6xl mb-6 leading-none animate-float drop-shadow-[0_12px_6px_rgba(0,0,0,0.4)]">🏺</div>

          {/* Dòng text 1 - Đã bỏ absolute để nằm trong luồng Flex */}
          <p className="font-body text-[17px] md:text-[18px] leading-[1.7] text-ink max-w-[80%]">
            Hãy chọn đúng{' '}
            <strong className="text-ceramic">3 nguyên liệu</strong>{' '}
            để hoàn thành mỗi món ăn trong mâm cỗ Bát Tràng.
          </p>

          {/* Thanh kẻ ngang */}
          <div className="divider-clay my-6 w-3/4 h-[1px] bg-ink/20 opacity-30" />

          {/* Dòng text 2 */}
          <p className="font-body text-[17px] md:text-[18px] leading-[1.7] text-ink max-w-[80%]">
            Hoàn thành đủ{' '}
            <strong className="text-clay font-bold">6 món</strong>{' '}
            để chiến thắng trò chơi!
          </p>

        </div>
      </div>

      <button
        onClick={onStart}
        className="relative group outline-none z-10 transition-all items-center duration-300 active:scale-95 [perspective:1000px]"
      >
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
        </div>

        <img
          src="/public/images/nút bắt đầu.png"
          alt="Bắt đầu"
          className="
            w-[85vw] md:w-[480px] h-auto object-contain z-10
            transition-all duration-500 ease-out
            drop-shadow-[0_12px_6px_rgba(0,0,0,0.4)]
            [transform:rotateX(5deg)]
            transform-style-3d
            group-hover:scale-110
            group-hover:-translate-y-8
            group-hover:[transform:rotateX(-5deg)]
            group-hover:drop-shadow-[0_80px_30px_rgba(0,0,0,0.3)]
            group-hover:brightness-115
          "
          onClick={handleStartClick}
        />

      </button>
    </div>
  )
}