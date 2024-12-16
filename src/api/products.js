const products = [
  {
    id: 1,
    brand: 'AZPAC',
    name: 'Vali kéo AZPAC New Basic',
    category: 'vali',
    newPrice: '2,000,000₫',
    oldPrice: '6,900,000₫',
    isBestSeller: true,
    colors: [
      { id: 'color1', name: ['gray'], code: '#D9D9D9', image: '/images/item-product-trend1.1.webp' },
      { id: 'color2', name: ['black'], code: '#000', image: '/images/item-product-trend1.2.webp' },
    ],
    details:
    {
      features: [
        "Vỏ vali được chế tạo từ 100% nhựa polycarbonate Makrolon® nguyên chất, đảm bảo khả năng chống va đập tối đa, bảo vệ hành lý của bạn một cách toàn diện",
        "Hệ thống bánh xe đôi Hinomoto Nhật Bản cho phép xoay 360°, linh hoạt trên mọi địa hình, tăng cường độ bám và ổn định.",
        "Tay kéo ba tầng được làm từ nhôm cao cấp kết hợp với đế ABS cao cấp, mang đến độ bền và khả năng chống va đập vượt trội. Sau 500 lần thử rút và kéo liên tục vẫn hoạt động bình thường, không bị hư hại.",
        "Chất liệu AZTPU® được sử dụng cho tay cầm, có khả năng chống mài mòn, va đập và độ bền vượt trội. Sau 3000 lần kéo thử nghiệm liên tục, tay cầm vẫn đảm bảo chất lượng như ban đầu.",
        "Khóa kéo đôi YKK® chống rạch trộm và chống cháy nổ, hoạt động trơn tru, bền bỉ."
      ],
      paramters: [
        { capacity: "90L" },
        { volume: "5.1kg" },
        { dimension: "42 x 35 x 67 cm" },
        { tankage: "20-25kg" },
        { material: "100% Pure Polycarbonate" }
      ]
    }
  },
  {
    id: 2,
    brand: 'DELSEY - PHÁP',
    name: 'Vali kéo Eclipse SE',
    category: 'vali',
    newPrice: '2,000,000₫',
    oldPrice: '7,000,000₫',
    isBestSeller: true,
    colors: [
      { id: 'color1', name: ['blue'], code: '#2E545C', image: '/images/item-product-trend2.1.webp' },
      { id: 'color2', name: ['blue'], code: '#3121f1', image: '/images/item-product-trend2.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/item-product-trend2.3.webp' },
    ],
    details:
    {
      features: [
        "Vali kéo Eclipse SE thiết kế nắp mở phía trước độc đáo",
        "Ngăn chứa bảo vệ laptop lên tới 17.3' (chỉ có trên size cabin 55cm)",
        "Vỏ vali làm từ chất liệu ABS+PC bền chắc, hoàn thiện nhám mờ giúp hạn chế trầy xước ",
        "Khả năng mở rộng tăng sức chứa giúp linh hoạt trong việc sắp xếp hành lý",
        "Cần đẩy ống đôi làm bằng hợp kim chắc chắn, dễ dàng thay đổi độ cao để phù hợp với người sử dụng.",
        "Khóa số TSA an toàn tiêu chuẩn Hoa Kỳ",
        "Hệ thống 4 bánh xe đôi xoay 360 vận hành êm nhẹ, ổn định"
      ],
      paramters: [
        { capacity: "77/84L" },
        { volume: "4.43kg" },
        { dimension: "44.5 x 27.5/ 30 x 65 cm" },
        { capacity: "20-25kg" },
        { warranty: "3 năm" }
      ]
    }
  },
  {
    id: 3,
    brand: 'KAMILIANT BY AMERICAN',
    name: 'Combo 2 vali Rock-Lite',
    category: 'vali',
    newPrice: '1,200,000₫',
    oldPrice: '5,800,000₫',
    isBestSeller: true,
    colors: [
      { id: 'color1', name: ['blue'], code: '#3121f1', image: '/images/item-product-trend3.1.webp' },
      { id: 'color2', name: ['black'], code: '#000', image: '/images/item-product-trend3.2.webp' },
      { id: 'color3', name: ['red'], code: '#fe0100', image: '/images/item-product-trend3.3.webp' },
    ],
    details:
    {
      features: [
        "Combo 2 vali kéo Kamiliant Rock-Lite size cabin",
        "Vali kéo nhựa siêu nhẹ, chỉ từ 2 kg (size cabin)",
        "Được làm từ nhựa PP đa năng cho độ bền cao và chống va đập",
        "Họa tiết zigzag được lấy cảm hứng từ thiết kế hình học thương mại",
        "Tấm logo kim loại sang trọng, tinh tế",
        "Khóa số TSA an toàn tiêu chuẩn Hoa Kỳ",
        "Cần đẩy chắc chắn, có thể thay đổi độ cao"
      ],
      desc: ["Kamiliant Rock-Lite là bộ sưu tập vali kéo với lớp vỏ làm bằng nhựa PP giá trị cao. Rock-Lite được coi là thế hệ thứ 2 của Zakk về cảm hứng thiết kế, được đặc trưng bởi các họa tiết zigzag hình học mang tính biểu tượng, kết hợp với các tính năng du lịch thiết thực: siêu nhẹ (chỉ từ 2 kg), độ bền cao, khả năng chống trầy xước trên thiết kế kết cấu kép."],
      paramters: [
        { volume: "2kg" },
        { dimension: "37 x 25 x 55 cm" },
        { capacity: "7-10kg" },
        { material: "100% Pure Polycarbonate" },
        { warranty: "1 năm" }
      ]
    }
  },
  {
    id: 4,
    brand: 'AMIRICAN TOURISTER',
    name: 'Vali kéo Litevlo',
    category: 'vali',
    newPrice: '1,550,000₫',
    oldPrice: '3,100,000₫',
    isBestSeller: true,
    colors: [
      { id: 'color1', name: ['pink'], code: '#f9aa8c', image: '/images/item-product-trend4.1.webp' },
      { id: 'color2', name: ['gray'], code: '#777777', image: '/images/item-product-trend4.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/item-product-trend4.3.webp' },
    ],
  },
  {
    id: 5,
    brand: 'SAMSONITE - MỸ',
    name: 'Vali kéo Enwrap',
    category: 'vali',
    newPrice: '4,300,000₫',
    oldPrice: '8,600,000₫',
    isBestSeller: true,
    colors: [
      { id: 'color1', name: ['gray'], code: '#d9d9d9', image: '/images/item-product-trend5.1.webp' },
      { id: 'color2', name: ['black'], code: '#000', image: '/images/item-product-trend5.2.webp' },
      { id: 'color3', name: ['green'], code: '#1d2e2b', image: '/images/item-product-trend5.3.webp' },
    ],
  },


  {
    id: 6,
    brand: 'AMERICAN TOURISTER',
    name: 'Combo vali kéo Squasem',
    category: 'vali',
    newPrice: '5,050,000₫',
    oldPrice: '10,500,000₫',
    isTopFavoriteVali: true,
    colors: [
      { id: 'color1', name: ['green'], thumbnail: '/images/color-item-love1.1.webp', image: '/images/item-love1.1.webp' },
      { id: 'color2', name: ['pink'], thumbnail: '/images/color-item-love1.2.webp', image: '/images/item-love1.2.webp' },
    ],
  },
  {
    id: 7,
    brand: 'WENGER - THUỴ SĨ',
    name: 'Combo vali kéo In-Flight 3',
    category: 'vali',
    newPrice: '4,399,000₫',
    oldPrice: '9,400,000₫',
    isTopFavoriteVali: true,
    colors: [
      { id: 'color1', name: ['red'], thumbnail: '/images/color-item-love2.1.webp', image: '/images/item-love2.1.webp' },
      { id: 'color2', name: ['gray'], thumbnail: '/images/color-item-love2.2.jpg', image: '/images/item-love2.2.webp' },
      { id: 'color3', name: ['black'], thumbnail: '/images/color-item-love2.3.webp', image: '/images/item-love2.3.webp' },
    ],
  },
  {
    id: 8,
    brand: 'WENGER - THUỴ SĨ',
    name: 'Combo vali kéo Protector',
    category: 'vali',
    newPrice: '2,990,000₫',
    oldPrice: '8,700,000₫',
    isTopFavoriteVali: true,
    colors: [
      { id: 'color1', name: ['black'], code: '#000', image: '/images/item-love3.1.webp' },
    ],
  },
  {
    id: 9,
    brand: "TRAVELER'S CHOICE - MỸ",
    name: 'Combo vali kéo Harbor',
    category: 'vali',
    newPrice: '2,999,000₫',
    oldPrice: '7,500,000₫',
    isTopFavoriteVali: true,
    colors: [
      { id: 'color1', name: ['pink'], code: '#e6969d', image: '/images/item-love4.1.webp' },
      { id: 'color2', name: ['gray'], code: '#777777', image: '/images/item-love4.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/item-love4.3.webp' },
    ],
  },
  {
    id: 10,
    brand: 'KAMILIANT BY AMERICAN',
    name: 'Combo 2 vali kéo Falcon',
    category: 'vali',
    newPrice: '2,000,000₫',
    oldPrice: '7,800,000₫',
    isTopFavoriteVali: true,
    colors: [
      { id: 'color1', name: ['purple'], code: '#886296', image: '/images/item-love5.1.webp' },
      { id: 'color2', name: ['blue'], code: '#375675', image: '/images/item-love5.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/item-love5.3.webp' },
    ],
  },


  {
    id: 11,
    brand: 'SAMSONITE - MỸ',
    name: 'Vali kéo Cube-048 Front Pkt',
    category: 'vali',
    newPrice: '4,850,000₫',
    oldPrice: '9,700,000₫',
    isTopFavoriteProduct: true,
    colors: [
      { id: 'color1', name: ['blue'], thumbnail: '/images/color-product-love-trend1.1.webp', image: '/images/product-love-trend1.1.webp' },
      { id: 'color2', name: ['black'], thumbnail: '/images/color-product-love-trend1.2.webp', image: '/images/product-love-trend1.2.webp' },
    ],
  },
  {
    id: 12,
    brand: 'SAMSONITE - MỸ',
    name: 'Vali kéo Minter',
    category: 'vali',
    newPrice: '6,860,000₫',
    oldPrice: '9,000,000₫',
    isTopFavoriteProduct: true,
    colors: [
      { id: 'color1', name: ['red'], thumbnail: '/images/color-product-love-trend2.1.webp', image: '/images/product-love-trend2.1.webp' },
      { id: 'color2', name: ['blue'], thumbnail: '/images/color-product-love-trend2.2.webp', image: '/images/product-love-trend2.2.webp' },
      { id: 'color3', name: ['black'], thumbnail: '/images/color-product-love-trend2.3.webp', image: '/images/product-love-trend2.3.webp' },
    ],
  },
  {
    id: 13,
    brand: 'WENGER - THUỴ SĨ',
    name: 'Balo laptop 15.6" Pilot Pro',
    category: 'balo',
    newPrice: '1,200,000₫',
    oldPrice: '2,400,000₫',
    isTopFavoriteProduct: true,
    colors: [
      { id: 'color1', name: ['black'], code: '#000', image: '/images/product-love-trend3.1.webp' },
    ],
  },
  {
    id: 14,
    brand: 'AMERICAN TOURISTER',
    name: 'Balo mini Mia Love',
    category: 'balo',
    newPrice: '750,000₫',
    oldPrice: '1,500,000₫',
    isTopFavoriteProduct: true,
    colors: [
      { id: 'color1', name: ['blue'], code: '#b9cbcb', image: '/images/product-love-trend4.1.webp' },
      { id: 'color2', name: ['pink'], code: '#d79aa5', image: '/images/product-love-trend4.2.webp' },
    ],
  },
  {
    id: 15,
    brand: 'AMERICAN TOURISTER',
    name: 'Balo laptop Carter 1 AS',
    category: 'balo',
    newPrice: '750,000₫',
    oldPrice: '1,500,000₫',
    isTopFavoriteProduct: true,
    colors: [
      { id: 'color1', name: ['red', 'yellow'], thumbnail: '/images/color-product-love-trend5.1.webp', image: '/images/product-love-trend5.1.webp' },
      { id: 'color2', name: ['blue'], thumbnail: '/images/color-product-love-trend5.2.webp', image: '/images/product-love-trend5.2.jpg' },
      { id: 'color3', name: ['blue', 'green'], thumbnail: '/images/color-product-love-trend5.3.webp', image: '/images/product-love-trend5.3.jpg' },
    ],
  },


  {
    id: 16,
    brand: 'KAMILIANT BY MERICAN',
    name: 'Vali kéo Kiza',
    category: 'vali',
    newPrice: '1,088,000₫',
    oldPrice: '2,900,000₫',
    isTopVali: true,
    colors: [
      { id: 'color1', name: ['blue'], thumbnail: '/images/color-vali-top1.1.webp', image: '/images/vali-top1.1.webp' },
      { id: 'color2', name: ['black'], thumbnail: '/images/color-vali-top1.2.webp', image: '/images/vali-top1.2.jpg' },
      { id: 'color3', name: ['green'], thumbnail: '/images/color-vali-top1.3.webp', image: '/images/vali-top1.3.webp' },
    ],
  },
  {
    id: 17,
    brand: 'AMERICAN TOURISTER',
    name: 'Vali kéo Squasem',
    category: 'vali',
    newPrice: '2,450,000₫',
    oldPrice: '9,000,000₫',
    isTopVali: true,
    colors: [
      { id: 'color1', name: ['pink'], thumbnail: '/images/color-vali-top2.1.webp', image: '/images/vali-top2.1.webp' },
      { id: 'color2', name: ['green'], thumbnail: '/images/color-vali-top2.2.webp', image: '/images/vali-top2.2.webp' },
      { id: 'color3', name: ['black'], thumbnail: '/images/color-vali-top2.3.webp', image: '/images/vali-top2.3.webp' },
    ],
  },
  {
    id: 18,
    brand: 'AMERICAN TOURISTER',
    name: 'Vali kéo Maxivo',
    category: 'vali',
    newPrice: '2,250,000₫',
    oldPrice: '4,500,000₫',
    isTopVali: true,
    colors: [
      { id: 'color1', name: ['black'], thumbnail: '/images/color-vali-top3.1.webp', image: '/images/vali-top3.1.webp' },
      { id: 'color2', name: ['yellow'], thumbnail: '/images/color-vali-top3.2.webp', image: '/images/vali-top3.2.webp' },
      { id: 'color3', name: ['blue'], thumbnail: '/images/color-vali-top3.3.webp', image: '/images/vali-top3.3.webp' },
    ],
  },
  {
    id: 19,
    brand: 'KAMILIANT BY MERICAN',
    name: 'Vali kéo Falcon',
    category: 'vali',
    newPrice: '1,488,000₫',
    oldPrice: '3,900,000₫',
    isTopVali: true,
    colors: [
      { id: 'color1', name: ['blue'], thumbnail: '/images/color-vali-top4.1.webp', image: '/images/vali-top4.1.webp' },
      { id: 'color2', name: ['black'], thumbnail: '/images/color-vali-top4.2.webp', image: '/images/vali-top4.2.webp' },
      { id: 'color3', name: ['purple'], thumbnail: '/images/color-vali-top4.3.webp', image: '/images/vali-top4.3.webp' },
    ],
  },
  {
    id: 20,
    brand: 'AMERICAN TOURISTER',
    name: 'Vali kéo Frontec AM',
    category: 'vali',
    newPrice: '3,050,000₫',
    oldPrice: '6,100,000₫',
    isTopVali: true,
    colors: [
      { id: 'color1', name: ['pink'], code: '#d8b2a5', image: '/images/vali-top5.1.webp' },
      { id: 'color2', name: ['yellow'], code: '#e8d2a1', image: '/images/vali-top5.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/vali-top5.3.webp' },
    ],
  },


  {
    id: 21,
    brand: 'WEBGER - THUỴ SĨ',
    name: 'Balo laptop 17" XE Extent',
    category: 'balo',
    newPrice: '2,250,000₫',
    oldPrice: '4,500,000₫',
    isTopBalo: true,
    colors: [
      { id: 'color1', name: ['black'], code: '#000', image: '/images/balo-trend1.1.webp' },
    ],
  },
  {
    id: 22,
    brand: 'AMERICAN TOURISTER',
    name: 'Balo Rudy 02 ASR',
    category: 'balo',
    newPrice: '550,000₫',
    oldPrice: '1,100,000₫',
    isTopBalo: true,
    colors: [
      { id: 'color1', name: ['blue'], code: '#09a9c1', image: '/images/balo-trend2.1.webp' },
    ],
  },
  {
    id: 23,
    brand: 'SAMSONITE - MỸ',
    name: 'Balo laptop 17.3in',
    category: 'balo',
    newPrice: '5,460,000₫',
    oldPrice: '7,800,000₫',
    isTopBalo: true,
    colors: [
      { id: 'color1', name: ['black'], code: '#000', image: '/images/balo-trend3.1.webp' },
    ],
  },
  {
    id: 24,
    brand: 'SAMSONITE - MỸ',
    name: 'Balo laptop 14.1in',
    category: 'balo',
    newPrice: '4,760,000₫',
    oldPrice: '6,800,000₫',
    isTopBalo: true,
    colors: [
      { id: 'color1', name: ['black'], code: '#000', image: '/images/balo-trend4.1.webp' },
    ],
  },
  {
    id: 25,
    brand: 'AMERICAN TOURISTER',
    name: 'Balo Little Carter',
    category: 'balo',
    newPrice: '550,000₫',
    oldPrice: '1,100,000₫',
    isTopBalo: true,
    colors: [
      { id: 'color1', name: ['yellow'], code: '#e1b43d', image: '/images/balo-trend5.1.webp' },
      { id: 'color2', name: ['blue'], code: '#0285e6', image: '/images/balo-trend5.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/balo-trend5.3.webp' },
    ],
  },


  {
    id: 26,
    brand: 'AMERICAN TOURISTER',
    name: 'Túi đeo vai Segno 2.0 AR',
    category: 'handbag',
    newPrice: '600,000₫',
    oldPrice: '1,200,000₫',
    isTopBag: true,
    colors: [
      { id: 'color1', name: ['black'], code: '#000', image: '/images/bag-top1.1.webp' },
    ],
  },
  {
    id: 27,
    brand: 'AMERICAN TOURISTER',
    name: 'Túi đeo chéo Orbit 02 ASR',
    category: 'handbag',
    newPrice: '650,000₫',
    oldPrice: '1,300,000₫',
    isTopBag: true,
    colors: [
      { id: 'color1', name: ['yellow'], code: '#ddab71', image: '/images/bag-top2.1.webp' },
      { id: 'color2', name: ['blue'], code: '#4d859b', image: '/images/bag-top2.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/bag-top2.3.webp' },
    ],
  },
  {
    id: 28,
    brand: 'AMERICAN TOURISTER',
    name: 'Túi đeo hông Orbit ASR',
    category: 'handbag',
    newPrice: '550,000₫',
    oldPrice: '1,100,000₫',
    isTopBag: true,
    colors: [
      { id: 'color1', name: ['gray'], code: '#a49fa0', image: '/images/bag-top3.1.webp' },
      { id: 'color2', name: ['blue'], code: '#4c6ea5', image: '/images/bag-top3.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/bag-top3.3.webp' },
    ],
  },
  {
    id: 29,
    brand: 'AMERICAN TOURISTER',
    name: 'Túi đeo chéo Orbit 03 ASR',
    category: 'handbag',
    newPrice: '650,000₫',
    oldPrice: '1,300,000₫',
    isTopBag: true,
    colors: [
      { id: 'color1', name: ['blue'], code: '#22477a', image: '/images/bag-top4.1.webp' },
      { id: 'color2', name: ['black'], code: '#000', image: '/images/bag-top4.2.webp' },
      { id: 'color3', name: ['gray'], code: '#807775', image: '/images/bag-top4.3.webp' },
    ],
  },
  {
    id: 30,
    brand: 'AMERICAN TOURISTER',
    name: 'Túi đeo hông Orbit ASR',
    category: 'handbag',
    newPrice: '650,000₫',
    oldPrice: '1,300,000₫',
    isTopBag: true,
    colors: [
      { id: 'color1', name: ['gray'], code: '#adb7cb', image: '/images/bag-top5.1.webp' },
      { id: 'color2', name: ['yellow'], code: '#c99657', image: '/images/bag-top5.2.webp' },
      { id: 'color3', name: ['black'], code: '#000', image: '/images/bag-top5.3.webp' },
    ],
  },
  {
    id: 31,
    brand: 'American Tourister - Mỹ',
    name: 'Vali kéo Maxivo OS',
    category: 'vali',
    newPrice: '2,450,000₫',
    oldPrice: '4,900,000₫',
    isBestSeller: false,
    colors: [
      { id: 'color1', name: ['purple'], code: '#9e8db2', image: '/images/vali_item001_01.webp' },
      { id: 'color2', name: ['gray'], code: '#bebdc0', image: '/images/vali_item001_02.webp' },
      { id: 'color3', name: ['gray'], code: '#4e5e62', image: '/images/vali_item001_03.webp' },
    ],
  },
  {
    id: 32,
    brand: 'American Tourister - Mỹ',
    name: 'Vali kéo LOCKation',
    category: 'vali',
    newPrice: '3,350,000₫',
    oldPrice: '6,700,000₫',
    isBestSeller: false,
    colors: [
      { id: 'color1', name: ['blue'], code: '#818fac', image: '/images/vali_item002_01.webp' },
      { id: 'color2', name: ['gray'], code: '#333333', image: '/images/vali_item002_02.webp' },
      { id: 'color3', name: ['gray'], code: '#6b6869', image: '/images/vali_item002_03.webp' },
    ],
  },
  {
    id: 33,
    brand: 'Samsonite - Mỹ',
    name: 'Vali kéo Base Boost',
    category: 'vali',
    newPrice: '4,340,000₫',
    oldPrice: '6,200,000₫',
    isBestSeller: false,
    colors: [
      { id: 'color1', name: ['blue'], code: '#0033ff', image: '/images/vali_item003_01.webp' },
      { id: 'color2', name: ['black'], code: '#000000', image: '/images/vali_item003_02.webp' },
    ],
  },
  {
    id: 34,
    brand: 'High Sierra - Mỹ',
    name: 'Balo Colts 30',
    category: 'balo',
    newPrice: '1,450,000₫',
    oldPrice: '2,900,000₫',
    colors: [
      { id: 'color1', name: ['blue'], code: '#0242fd', image: '/images/balo_047_01.jpg' },
      { id: 'color2', name: ['black'], code: '#000000', image: '/images/balo_047_02.jpg' },
    ],
  },
  {
    id: 35,
    brand: 'Samsonite - Mỹ',
    name: 'Balo laptop 17.3in PRO-DLX 6 3vol Exp',
    category: 'balo',
    newPrice: '7,600,000₫',
    oldPrice: '10,900,000₫',
    colors: [
      { id: 'color1', name: ['blue'], code: '#0242fd', image: '/images/balo_048_01.jpg' },
      { id: 'color2', name: ['black'], code: '#000000', image: '/images/balo_048_02.jpg' },
    ],
  },
  {
    id: 36,
    brand: 'American Tourister - Mỹ',
    name:'Túi đeo chéo Paisley Joy size S',
    category: 'handbag',
    newPrice: '750,000đ',
    oldPrice: '1,500,000đ',
    colors: [
      {id: 'color1', name: ['black'], code: '#000000', image: '/images/tuideocheoPaisleyJoy_01.webp' },
      {id: 'color2', name: ['gray'],code: '#c8c1ba',image: '/images/tuideocheoPaisleyJoy_02.webp'},
    ]
  },
  {
    id: 37,
    brand: 'American Tourister - Mỹ',
    name: 'Túi duffle Corey 01 ASR',
    category: 'handbag',
    newPrice: '950,000đ',
    oldPrice: '1,900,000đ',
    colors: [
      {id: 'color1', name: ['red'], code: '#FF0000', image: '/images/tuixach_080_01.webp',},
      {id: 'color2', name: ['gray'], code: '#67665b', image: '/images/tuixach_080_02.webp'},
    ],
  },
  {
    id: 38,
    brand: 'Samsonite Red - Mỹ',
    name: 'Túi đeo chéo Ferley',
    category: 'handbag',
    newPrice: '4,200,000đ',
    oldPrice: '6,000,000đ',
    colors: [
      {id: 'color1', name: ['gray'], code: '#f2eee6', image: '/images/tuixach_081_01.webp',},
      {id: 'color2', name: ['pink'], code: '#ffe2de', image: '/images/tuixach_081_02.webp'},
      {id: 'coler3', name: ['black'], code: '#000000', image: '/images/tuixach_081_03.webp'},
    ],
  },
  {
    id: 39,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Túi tote 2-way Architecture Urban2',
    category: 'handbag',
    newPrice: '7,210,000đ',
    oldPrice: '10,300,000đ',
    colors: [
      {id: 'color1', name: ['black'], code: '#000000', image: '/images/tuixach_082_01.webp',},
      {id: 'color2', name: ['gray'], code: '#3e444e', image: '/images/tuixach_082_02.webp'},
    ],
  }
];

export default products;