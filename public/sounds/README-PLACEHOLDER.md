# 🔊 Thư mục âm thanh

Đặt file âm thanh vào đây, rồi khai báo đường dẫn trong `src/config/assets.ts`.

```
public/
└── sounds/
    ├── nhac-nen.mp3          ← Nhạc nền (loop, ~30-60s)
    ├── chon-dung.mp3         ← Âm thanh chọn đúng nguyên liệu
    ├── chon-sai.mp3          ← Âm thanh chọn sai
    ├── chon-nguyen-lieu.mp3  ← Click chọn 1 nguyên liệu (~0.2s)
    ├── bo-chon.mp3           ← Bỏ chọn nguyên liệu (~0.2s)
    ├── nau-xong.mp3          ← Tiếng xèo / khói nổi lên (~2s)
    └── chien-thang.mp3       ← Nhạc chiến thắng (~3-5s)
```

## Ghi chú
- Format: **mp3** hoặc **ogg** (ogg nhẹ hơn, tương thích tốt)
- Nhạc nền nên được normalize về -14 LUFS để không quá to
- Khi để `null` trong `assets.ts` → game tự tạo âm thanh bằng Web Audio API
