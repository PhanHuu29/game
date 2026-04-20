interface Props { onStart: () => void }
import { useSound } from '../../hooks/useSound' 

export default function StartScreen({ onStart }: Props) {
  
  const { playSelect } = useSound()

  const handleStartClick = () => {
    playSelect() // 3. Phát tiếng click khi bấm nút
    onStart()    // 4. Chuyển màn hình
  }

  
  return (
    <div className={`
      fixed inset-0 w-full h-full overflow-hidden select-none 
      flex 
      justify-center  /* Căn ngang nội dung chính */
      items-end       /* Đẩy nút bấm xuống đáy */
      pb-[3vh]       /* Khoảng cách nút so với đáy */
    `}>
  
      {/* 1. ẢNH NỀN (BACKGROUND) */}
      <img 
        src="/public/images/ui/background.png" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
        alt="background"
      />

      {/* 2. HAI DÒNG TEXT PHÍA TRÊN CÙNG (SÁT THANH TÌM KIẾM)
          - absolute top-4: cách mép trên một khoảng nhỏ để không bị dính quá chặt
          - left-1/2 -translate-x-1/2: kỹ thuật căn giữa tuyệt đối trong CSS
          - text-center: căn giữa nội dung văn bản
      */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center justify-center z-20 w-full top-[5vh]">
        <h2 className="text-white 
          text-5xl md:text-6xl 
          font-bold 
          drop-shadow-[0_10px_6px_rgba(0,0,0,0.3)] /* ĐIỀU CHỈNH BÓNG: Đổ xuống dưới nhiều (10px) và mờ rộng (6px) */
          tracking-widest 
          uppercase">
          MINI GAME
        </h2>
        <h1 className="text-white mt-[2vh]
          text-5xl md:text-8xl /* TĂNG SIZE: Lớn hơn trên Mobile và Tablet/PC */
          font-bold 
          drop-shadow-[0_10px_6px_rgba(0,0,0,0.3)] /* ĐIỀU CHỈNH BÓNG: Đổ xuống dưới nhiều (10px) và mờ rộng (6px) */
          tracking-widest 
          uppercase">
          NẤU CỖ BÁT TRÀNG
          </h1>
      </div>

      {/* 3. NÚT BẤM (BUTTON) */}
      <button
        onClick={onStart}
        className="relative group outline-none z-10 transition-all duration-300 active:scale-95 [perspective:1000px]"
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