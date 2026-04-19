// ╔═══════════════════════════════════════════════════════════════╗
// ║            ASSET CONFIGURATION — SỬA TẠI ĐÂY               ║
// ║  Đây là file DUY NHẤT cần chỉnh để thay ảnh và âm thanh.   ║
// ║  Để null  → tự dùng emoji/âm thanh sinh ra (không lỗi).    ║
// ╚═══════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────────
//  📁 QUY ƯỚC THƯ MỤC (đặt file trong /public/)
//
//  public/
//  ├── images/
//  │   ├── ui/
//  │   │   ├── background.jpg        ← ảnh nền toàn màn hình
//  │   │   ├── bat-gom.png           ← bát sứ hoa xanh
//  │   │   └── ban-go.jpg            ← ảnh bàn gỗ (tuỳ chọn)
//  │   ├── dishes/
//  │   │   ├── ga-luoc.png
//  │   │   ├── banh-chung.png
//  │   │   ├── nem-ran.png
//  │   │   ├── canh-mang.png
//  │   │   ├── thit-dong.png
//  │   │   └── xoi-gac.png
//  │   ├── ingredients/
//  │   │   ├── ga.png
//  │   │   ├── gung.png
//  │   │   └── ... (18 nguyên liệu)
//  │   └── icons/
//  │       ├── ga-luoc-icon.png      ← icon nhỏ trên progress bar
//  │       └── ...
//  └── sounds/
//      ├── nhac-nen.mp3              ← nhạc nền loop
//      ├── chon-dung.mp3             ← chọn đúng
//      ├── chon-sai.mp3              ← chọn sai
//      ├── chon-nguyen-lieu.mp3      ← click chọn nguyên liệu
//      ├── bo-chon.mp3               ← bỏ chọn nguyên liệu
//      ├── nau-xong.mp3              ← sizzle khi nấu xong
//      └── chien-thang.mp3           ← nhạc chiến thắng
// ─────────────────────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════
//  🖼️  UI IMAGES
// ══════════════════════════════════════════════════════════════════
export const UI_IMAGES = {
  /** Ảnh nền toàn màn hình (jpg/webp). null = dùng gradient CSS */
  background: null as string | null,
  // background: '/images/ui/background.jpg',

  /** Ảnh bát gốm hoa xanh Bát Tràng. null = dùng SVG vẽ sẵn */
  ceramicBowl: null as string | null,
  // ceramicBowl: '/images/ui/bat-gom.png',

  /** Ảnh bàn gỗ bên dưới bát. null = dùng SVG gradient gỗ */
  woodTable: null as string | null,
  // woodTable: '/images/ui/ban-go.jpg',
}

// ══════════════════════════════════════════════════════════════════
//  🍽️  DISH IMAGES  (ảnh món ăn thành phẩm)
// ══════════════════════════════════════════════════════════════════
export const DISH_IMAGES: Record<string, string | null> = {
  'Gà luộc':    null,
  'Bánh chưng': null,
  'Nem rán':    null,
  'Canh măng':  null,
  'Thịt đông':  null,
  'Xôi gấc':    null,

  // ── Ví dụ khi có ảnh: ──
  // 'Gà luộc':    '/images/dishes/ga-luoc.png',
  // 'Bánh chưng': '/images/dishes/banh-chung.png',
  // 'Nem rán':    '/images/dishes/nem-ran.png',
  // 'Canh măng':  '/images/dishes/canh-mang.png',
  // 'Thịt đông':  '/images/dishes/thit-dong.png',
  // 'Xôi gấc':    '/images/dishes/xoi-gac.png',
}

// ══════════════════════════════════════════════════════════════════
//  🥕  INGREDIENT IMAGES
// ══════════════════════════════════════════════════════════════════
export const INGREDIENT_IMAGES: Record<string, string | null> = {
  'Gà':            null,
  'Gừng':          null,
  'Hành lá':       null,
  'Nếp':           null,
  'Đậu xanh':      null,
  'Thịt lợn':      null,
  'Thịt xay':      null,
  'Miến':          null,
  'Mộc nhĩ':       null,
  'Măng khô':      null,
  'Xương lợn':     null,
  'Hành khô':      null,
  'Thịt chân giò': null,
  'Bì lợn':        null,
  'Nước mắm':      null,
  'Gạo nếp':       null,
  'Gấc':           null,
  'Dừa nạo':       null,

  // ── Ví dụ khi có ảnh: ──
  // 'Gà':            '/images/ingredients/ga.png',
  // 'Gừng':          '/images/ingredients/gung.png',
  // 'Hành lá':       '/images/ingredients/hanh-la.png',
  // 'Nếp':           '/images/ingredients/nep.png',
  // 'Đậu xanh':      '/images/ingredients/dau-xanh.png',
  // 'Thịt lợn':      '/images/ingredients/thit-lon.png',
  // 'Thịt xay':      '/images/ingredients/thit-xay.png',
  // 'Miến':          '/images/ingredients/mien.png',
  // 'Mộc nhĩ':       '/images/ingredients/moc-nhi.png',
  // 'Măng khô':      '/images/ingredients/mang-kho.png',
  // 'Xương lợn':     '/images/ingredients/xuong-lon.png',
  // 'Hành khô':      '/images/ingredients/hanh-kho.png',
  // 'Thịt chân giò': '/images/ingredients/thit-chan-gio.png',
  // 'Bì lợn':        '/images/ingredients/bi-lon.png',
  // 'Nước mắm':      '/images/ingredients/nuoc-mam.png',
  // 'Gạo nếp':       '/images/ingredients/gao-nep.png',
  // 'Gấc':           '/images/ingredients/gac.png',
  // 'Dừa nạo':       '/images/ingredients/dua-nao.png',
}

// ══════════════════════════════════════════════════════════════════
//  🔵  PROGRESS BAR ICON IMAGES  (icon nhỏ 48×48px)
// ══════════════════════════════════════════════════════════════════
export const ICON_IMAGES: Record<string, string | null> = {
  'Gà luộc':    null,
  'Bánh chưng': null,
  'Nem rán':    null,
  'Canh măng':  null,
  'Thịt đông':  null,
  'Xôi gấc':    null,

  // ── Ví dụ: ──
  // 'Gà luộc':    '/images/icons/ga-luoc-icon.png',
  // 'Bánh chưng': '/images/icons/banh-chung-icon.png',
}

// ══════════════════════════════════════════════════════════════════
//  🔊  SOUND FILES
//  null = dùng âm thanh sinh ra bằng Web Audio API
//  string = đường dẫn đến file mp3/ogg trong /public/sounds/
// ══════════════════════════════════════════════════════════════════
export const SOUND_FILES = {
  /** Nhạc nền (loop liên tục) */
  bgMusic: null as string | null,
  // bgMusic: '/sounds/nhac-nen.mp3',

  /** Chọn đúng nguyên liệu → nấu thành công */
  success: null as string | null,
  // success: '/sounds/chon-dung.mp3',

  /** Chọn sai nguyên liệu */
  wrong: null as string | null,
  // wrong: '/sounds/chon-sai.mp3',

  /** Click chọn 1 nguyên liệu */
  select: null as string | null,
  // select: '/sounds/chon-nguyen-lieu.mp3',

  /** Bỏ chọn nguyên liệu */
  deselect: null as string | null,
  // deselect: '/sounds/bo-chon.mp3',

  /** Tiếng xèo khi nấu / khói nổi lên */
  sizzle: null as string | null,
  // sizzle: '/sounds/nau-xong.mp3',

  /** Nhạc chiến thắng (hoàn thành 6 món) */
  victory: null as string | null,
  // victory: '/sounds/chien-thang.mp3',
}
