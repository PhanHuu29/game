# 📁 Thư mục ảnh

Đặt ảnh vào đây theo đúng cấu trúc bên dưới,
rồi khai báo đường dẫn trong `src/config/assets.ts`.

```
public/
└── images/
    ├── ui/
    │   ├── background.jpg      ← Ảnh nền toàn màn hình (tùy chọn)
    │   ├── bat-gom.png         ← Ảnh bát sứ hoa xanh Bát Tràng
    │   └── ban-go.jpg          ← Ảnh bàn gỗ (tùy chọn)
    │
    ├── dishes/                 ← Ảnh 6 món ăn thành phẩm
    │   ├── ga-luoc.png
    │   ├── banh-chung.png
    │   ├── nem-ran.png
    │   ├── canh-mang.png
    │   ├── thit-dong.png
    │   └── xoi-gac.png
    │
    ├── ingredients/            ← Ảnh 18 nguyên liệu
    │   ├── ga.png
    │   ├── gung.png
    │   ├── hanh-la.png
    │   ├── nep.png
    │   ├── dau-xanh.png
    │   ├── thit-lon.png
    │   ├── thit-xay.png
    │   ├── mien.png
    │   ├── moc-nhi.png
    │   ├── mang-kho.png
    │   ├── xuong-lon.png
    │   ├── hanh-kho.png
    │   ├── thit-chan-gio.png
    │   ├── bi-lon.png
    │   ├── nuoc-mam.png
    │   ├── gao-nep.png
    │   ├── gac.png
    │   └── dua-nao.png
    │
    └── icons/                  ← Icon nhỏ 48×48px cho progress bar
        ├── ga-luoc-icon.png
        ├── banh-chung-icon.png
        ├── nem-ran-icon.png
        ├── canh-mang-icon.png
        ├── thit-dong-icon.png
        └── xoi-gac-icon.png
```

## Kích thước khuyến nghị

| Loại          | Kích thước | Format |
|---------------|-----------|--------|
| background    | 1920×1080 | jpg/webp |
| bat-gom       | 600×500   | png (trong suốt) |
| ban-go        | 800×200   | jpg/webp |
| dishes        | 400×400   | png (trong suốt) |
| ingredients   | 200×200   | png (trong suốt) |
| icons         | 96×96     | png (trong suốt) |
