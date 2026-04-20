import type { Dish, ImagePaths } from '../types'

// ═══════════════════════════════════════════════════════════════
//  1. ĐƯỜNG DẪN ẢNH (IMAGE PATHS)
// ═══════════════════════════════════════════════════════════════
export const IMAGE_PATHS: ImagePaths = {
  dishes: {
    'Canh măng mực': '/public/images/dishes/CANH MANG MUC.png',
    'Su hào xào mực': '/public/images/dishes/Su hào xào mực.png', 
    'Chả tôm lá lốt': '/public/images/dishes/Chả tôm lá lốt.png',
    'Nem chim câu': '/public/images/dishes/Nem chim câu.png', 
    'Gà luộc': '/public/images/dishes/ga luoc.png', 
    'Xôi vò chè đường': '/public/images/dishes/xoi vo che duong.png',
  },
  ingredients: {
    'Măng vầu': '/public/images/ingredients/MANG VAU.png',
    'Mực khô': '/public/images/ingredients/MUC KHO.png',
    'Nước luộc gà': '/public/images/ingredients/NUOC LUOC GA.png',
    'Tôm': '/public/images/ingredients/TOM.png', 
    'Nước trắng': '/public/images/ingredients/BAT NUOC.png', 
    'Su hào': '/public/images/ingredients/su hao.png', 
    'Thịt nạc luộc': '/public/images/ingredients/THIT NAC LUOC.png', 
    'Lá lốt': '/public/images/ingredients/LA LOT.png',
    'Thịt băm': '/public/images/ingredients/THIT BAM.png', 
    'Chim câu': '/public/images/ingredients/CHIM CAU.png', 
    'Bánh đa nem': '/public/images/ingredients/BANH DA NEM.png', 
    'Gà mái tơ': '/public/images/ingredients/Ga mai to.png', 
    'Lá chanh': '/public/images/ingredients/LA CHANH.png',
    'Gạo nếp': '/public/images/ingredients/GAO NEP.png', 
    'Đỗ xanh': '/public/images/ingredients/do xanh.png', 
    'Bột dong riềng, đường, hạt sen': '/public/images/ingredients/BOT DONG RIENG DG HAT SEN.png',
    'Mộc nhĩ, nấm hương': '/public/images/ingredients/moc nhi nam huong.png',

  },
  icons: {
    'Canh măng mực': '/public/images/dishes/CANH MANG MUC.png',
    'Su hào xào mực': '/public/images/dishes/Su hào xào mực.png', 
    'Chả tôm lá lốt': '/public/images/dishes/Chả tôm lá lốt.png',
    'Nem chim câu': '/public/images/dishes/Nem chim câu.png', 
    'Gà luộc': '/public/images/dishes/ga luoc.png', 
    'Xôi vò chè đường': '/public/images/dishes/xoi vo che duong.png',
  },
  ceramicBowl: '/public/images/DIA.png',
}

// ═══════════════════════════════════════════════════════════════
//  2. EMOJI FALLBACKS (Hiển thị khi không có ảnh)
// ═══════════════════════════════════════════════════════════════
export const ING_EMOJI: Record<string, string> = {
  'Măng vầu': '🎍', 'Mực khô': '🦑', 'Nước luộc gà': '🥣', 'Xương': '🦴',
  'Tôm': '🦐', 'Gà': '🍗', 'Nước trắng': '💧', 'Hành hoa': '🌿',
  'Su hào': '🎋', 'Thịt nạc luộc': '🥩', 'Thịt gà': '🍖', 'Giò': '🍱',
  'Tôm khô': '🦐', 'Củ cải trắng': '🥕', 'Mực tươi': '🦑', 'Lá lốt': '🍃',
  'Thịt băm': '🔴', 'Hành khô': '🧅', 'Giò sống': '🍥', 'Mộc nhĩ': '🍄',
  'Chim câu': '🕊️', 'Bánh đa nem': '📄', 'Gà mái tơ': '🐔', 'Lá chanh': '🍃',
  'Gạo nếp': '🌾', 'Đỗ xanh': '🟢', 'Bột dong riềng, đường, hạt sen': '🥣',
}

// ═══════════════════════════════════════════════════════════════
//  3. DANH SÁCH MÓN ĂN (DISHES)
// ═══════════════════════════════════════════════════════════════
export const DISHES: Dish[] = [
  {
    id: 1, name: 'Canh măng mực', emoji: '/public/images/dishes/CANH MANG MUC.png', icon: '/public/images/dishes/CANH MANG MUC.png', color: '#D4A017', serveware: 'bowl',
    info: 'Canh măng mực là đặc trưng và món ăn danh giá nhất trong mâm cỗ Bát Tràng, thường chỉ xuất hiện trong những dịp trọng đại như cưới hỏi hay tiếp khách quý. Sự kết hợp giữa măng rừng mang vị ngọt thanh và mực mang vị mặn mòi của biển thể hiện sự tinh tế và triết lý hài hòa nguyên liệu trong ẩm thực truyền thống Bát Tràng.',
    ingredients: ['Măng vầu', 'Mực khô', 'Nước luộc gà'],
  },
  {
    id: 2, name: 'Su hào xào mực', emoji: '🎋', icon: '🎋', color: '#4A7C59', serveware: 'plate',
    info: 'Su hào xào mực là món ăn tiêu biểu cho sự kết hợp giữa sản vật đồng bằng và vùng biển trong mâm cỗ Bát Tràng. Món ăn thể hiện rõ triết lý “hài hòa” trong mâm cỗ Bát Tràng khi kết hợp nguyên liệu khô (mực) và nguyên liệu tươi (su hào), tạo trải nghiệm “miệng nhai, tai nghe, lưỡi thưởng thức”.. ',
    // Chứa đầy đủ các nguyên liệu để buildPool đưa hết vào tủ đồ
    ingredients: ['Su hào', 'Mực khô', 'Thịt nạc luộc'],
  },
  {
    id: 3, name: 'Chả tôm lá lốt', emoji: '🍢', icon: '🍢', color: '#C0752A', serveware: 'plate',
    info: 'Chả tôm cuốn lá lốt gây ấn tượng bởi vị ngọt tự nhiên của tôm kết hợp với hương thơm đặc trưng của lá lốt nướng. Món ăn để lại hương vị hòa quyện khó quên cho người thưởng thức.',
    ingredients: ['Tôm', 'Lá lốt', 'Thịt băm'],
  },
  {
    id: 4, name: 'Nem chim câu', emoji: '🥘', icon: '🥘', color: '#8B5E3C', serveware: 'bowl',
    info: 'Nem chim bồ câu là món ăn ra đời từ sự chắt chiu thời khó, nhỏ bé nhưng vừa miệng, hợp với mâm cỗ đông người của người Bát Tràng. Món ăn được đánh giá cao nhờ hương vị thơm ngon và cách chế biến tỉ mỉ.',
    ingredients: ['Chim câu', 'Mộc nhĩ, nấm hương', 'Bánh đa nem'],
  },
  {
    id: 5, name: 'Gà luộc', emoji: '🍖', icon: '🍖', color: '#A0522D', serveware: 'bowl',
    info: 'Gà luộc là món ăn không thể thiếu trong mâm cỗ Bát Tràng, cũng giống như bao mâm cỗ truyền thống khác. Với món này, người Bát Tràng lựa chọn gà mái tơ, dù rất hao thịt và không được các nơi khác chuộng khi nấu cỗ. Nhưng gà mái tơ lại cho thịt ngọt, mềm hơn tất thảy loại gà khác.',
    ingredients: ['Gà mái tơ', 'Lá chanh', 'Nước trắng'],
  },
  {
    id: 6, name: 'Xôi vò chè đường', emoji: '🔴', icon: '🔴', color: '#B22222', serveware: 'plate',
    info: 'Xôi vò chè đường gợi nhớ đến hương vị truyền thống và thể hiện nét tinh tế trong ẩm thực của người Bát Tràng. Đây là món tráng miệng mùa hè, mang lại cảm giác thanh mát và dễ chịu khi thưởng thức.',
    ingredients: ['Gạo nếp', 'Đỗ xanh', 'Bột dong riềng, đường, hạt sen'],
  },
]

export const ALL_INGREDIENTS = [...new Set(DISHES.flatMap(d => d.ingredients))]

// ═══════════════════════════════════════════════════════════════
//  4. HÀM HỖ TRỢ (HELPERS)
// ═══════════════════════════════════════════════════════════════

export const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5)

/**
 * Tạo tủ nguyên liệu (Pool) 8 món cho Game:
 * Đảm bảo đưa toàn bộ ingredients của món đó vào pool (đặc biệt là ID 2 sẽ có 5 món)
 * sau đó lấy thêm các món sai ngẫu nhiên cho đủ 8 ô.
 */
export const buildIngredientPool = (dish: Dish): string[] => {
  const correct = dish.ingredients; 
  const wrong = ALL_INGREDIENTS.filter(i => !correct.includes(i));
  
  // Trộn: [Tất cả món đúng] + [Món sai ngẫu nhiên cho đủ 8 ô]
  const finalPool = [...correct, ...shuffle(wrong).slice(0, 8 - correct.length)];
  return shuffle(finalPool); 
}

export const CONFETTI_COLORS = ['#D4A017', '#2B5D8A', '#C0752A', '#4A7C59', '#B22222']