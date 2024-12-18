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
        { tankage: "20-25kg" },
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
        { tankage: "7-10kg" },
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
    details:
    {
      features: [
        "Bánh xe đôi 360° vận hành êm nhẹ",
        "Khoang hành lý rộng rãi, nhiều túi",
        "Khóa số lõm tích hợp TSA",
        "Chất liệu nhựa PP siêu nhẹ và bền bỉ",
        "Khả năng mở rộng (size trung và đại)",
      ],
      desc: ["Vali kéo Litevlo nằm trong bộ sưu tập Litevlo là dòng vali làm từ nhựa Polypropylene (PP) nhẹ nhất từ trước đến nay của thương hiệu American Tourister – Mỹ."],
      paramters: [
        { volume: "3.1kg" },
        { dimension: "47 x 30/31 x 69 cm" },
        { tankage: "20-25kg" },
        { material: "100% Polycarbonate" },
        { warranty: "3 năm" }
      ]
    }
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
    details:
    {
      features: [
        "Khóa kéo đôi chống trộm",
        "Nội thất phong phú, tinh tế",
        "Hệ thống bánh xe đôi 360° vận hành êm nhẹ",
        "Khóa số tích hợp khóa TSA",
        "Khả năng mở rộng tăng sức chứa",
      ],
      desc: ["Lấy cảm hừng từ việc gấp gọn và đóng gói 'wrapping', đặc điểm nổi bật của Enwrap là thiết kế nội thất phong phú tạo khả năng phân chia hành lý tuyệt vời cho dù bạn không phải là người có năng khiếu đóng gói hành lý siêu việt. Những ngăn, túi hỗ trợ sắp xếp kết hợp cùng tăng đơ khóa kéo nới rộng là giải pháp hành lý hoàn hảo cho các tín đồ shopping cho các chuyến du lịch. Dây kéo khóa dày dặn đảm bảo độ bảo mật hơn so với các loại dây kéo khóa thông thường. Enwrap có nhiều phiên bản màu sắc để bạn lựa chọn trên lớp vỏ polycarbonate siêu bền chắc. Còn hơn cả một chiếc vali kéo, Enwrap là người bạn đồng hành đáng tin cậy cho hành trình du lịch của cá nhân lẫn gia đình."],
      paramters: [
        { volume: "3.1kg" },
        { dimension: "47 x 30/31 x 69 cm" },
        { tankage: "20-25kg" },
        { material: "100% Polycarbonate" },
        { warranty: "3 năm" }
      ]
    }
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
    details:
    {
      features: [
        "Combo 2 vali kéo Squasem size cabin 55cm + trung 66cm",
        "Có khả năng mở rộng tăng sức chứa",
        "Hệ thống 4 bánh đôi OPTIMOV™ êm nhẹ, chắc chắn",
        "Khóa kéo đôi an toàn DUOSAF™",
        "Khả năng mở rộng tăng sức chứa",
        "Tích hợp cổng sạc USB (size cabin)",
        "Tổ chức nội thất phong phú, tinh tế",
      ],
      desc: ["Vali kéo Squasem mang trong mình một thiết kế nội thất sáng tạo với các túi phụ để sắp xếp hành lý tốt hơn. Bên cạnh đó lớp lót được làm từ vật liệu tái chế rPET và được xử lý kháng khuẩn bằng công nghệ được cung cấp bởi Microban®."],
      paramters: [
        { capacity: "69/78L" },
        { volume: "3.8kg" },
        { dimension: "46 x 28/31 x 66 cm" },
        { tankage: "20-25kg" },
        { material: "100% Polycarbonate" },
        { warranty: "3 năm" }
      ]
    }
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
    details:
    {
      features: [
        "Combo 3 size vali kéo: cabin 55cm + trung 66cm + đại 76cm",
        "Vali thương hiệu Thụy Sĩ có lịch sử lâu đời",
        "Thiết kế họa tiết sóng tinh tế, thanh lịch",
        "Nhựa ABS bền bỉ, bề mặt kết cấu chống trầy xước",
        "Khóa số TSA an toàn tiêu chuẩn Hoa Kỳ",
        "Bánh xe 360 độ vận hành êm nhẹ, trơn tru",
        "Cần đẩy bằng nhôm bền chắc, dễ dàng thay đổi độ cao",
        "Nội thất tổ chức phong phú, thông minh",
        "Khả năng mở rộng tăng sức chứa (chỉ có trên size trung và đại)"
      ],
      desc: ["Chất lượng và tính năng vượt trội, Combo Vali Kéo In-Flight 3 Size được bán với mức giá cạnh tranh, giúp người tiêu dùng dễ dàng sở hữu một bộ vali hoàn hảo cho các chuyến du lịch. Combo Vali Kéo In-Flight 3 Size là lựa chọn lý tưởng cho những ai yêu thích du lịch và cần một bộ vali đa năng, bền bỉ. Hãy nhanh tay sở hữu ngay bộ sản phẩm này để chuẩn bị cho những chuyến đi sắp tới!"],
      paramters: [
        { capacity: "64L" },
        { volume: "3.8kg" },
        { dimension: "45 x 28/33 x 66.5 cm" },
        { tankage: "20-25kg" },
        { material: "ABS" },
        { warranty: "5 năm" }
      ]
    }
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
    details:
    {
      features: [
        "Combo 2 size vali kéo Wenger Protector: cabin 55cm + trung 67cm",
        "Vali kéo Thụy Sĩ với thiết kế sang trọng, tinh tế",
        "Khóa số TSA an toàn tiêu chuẩn Hoa Kỳ",
        "Khóa kéo đôi chống rạch trộm gia tăng khả năng bảo mật",
        "Tính năng mở rộng tăng sức chứa, giúp sắp xếp hành lý linh hoạt",
        "Dây đai chữ X ổn định hành lý gọn gàng",
        "Nội thất phong phú với vách ngăn và ngăn có khóa kéo",
        "Hệ thống 4 bánh xe đôi 360° vận hành êm nhẹ, ổn định"
      ],
      desc: ["Chất lượng và tính năng vượt trội, Combo Vali Kéo In-Flight 3 Size được bán với mức giá cạnh tranh, giúp người tiêu dùng dễ dàng sở hữu một bộ vali hoàn hảo cho các chuyến du lịch. Combo Vali Kéo In-Flight 3 Size là lựa chọn lý tưởng cho những ai yêu thích du lịch và cần một bộ vali đa năng, bền bỉ. Hãy nhanh tay sở hữu ngay bộ sản phẩm này để chuẩn bị cho những chuyến đi sắp tới!"],
      paramters: [
        { capacity: "64L" },
        { volume: "3.8kg" },
        { dimension: "45 x 28/33 x 66.5 cm" },
        { tankage: "20-25kg" },
        { material: "ABS" },
        { warranty: "5 năm" }
      ]
    }
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
    details:
    {
      features: [
        "Combo 2 size: Cabin 56cm + Trung 66cm",
        "Vỏ nhựa ABS cứng bền chắc, chống va đập giúp bảo vệ tối đa",
        "Cần đẩy chắc chắn, có thể thay đổi độ cao phù hợp với người sử dụng",
        "Tay cầm ở cả phía trên và bên hông, thuận tiện khi di chuyển",
        "Hệ thống bánh xe đôi 360° vận hành êm nhẹ, ổn định",
        "Khả năng mở rộng tăng sức chứa thêm 5cm ở tất cả các size",
        "Nội thất thiết kế tổ chức phong phú, đa năng",
        "Khóa số TSA an toàn tiêu chuẩn Hoa Kỳ",
        "Tích hợp cổng sạc USB iTRAVEL™ và ngăn chứa sạc dự phòng (chỉ có ở size cabin), giữ cho các thiết bị điện tử của bạn luôn sẵn sàng khi đang di chuyển"
      ],
      paramters: [
        { volume: "3.9kg" },
        { dimension: "43 x 28/33 x 66 cm" },
        { tankage: "20-25kg" },
        { material: "ABS" },
        { warranty: "2 năm" }
      ]
    }
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
    details:
    {
      features: [
        "Combo 2 vali Falcon size cabin Combo 2 vali kéo Kamiliant Falcon size cabin",
        "Logo hoàn thiện tinh tế, sang trong",
        "Tổ chức nội thất thông minh, tiện dụng",
        "Kết cấu vỏ vali hạn chế trầy xước",
        "Khóa số TSA an toàn tiêu chuẩn Hoa Kỳ",
        "Tay cầm chắc chắn, có thể thay đổi độ cao để phù hợp với người dùng",
        "Hệ thống bánh xe đôi 360° vận hành êm nhẹ"
      ],
      paramters: [
        { capacity: "35L" },
        { volume: "2.3kg" },
        { dimension: "36 x 24 x 55 cm" },
        { tankage: "7-10kg" },
        { material: "Polyproppylene" },
        { warranty: "1 năm" }
      ]
    }
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
    details:
    {
      features: [
        "Thiết kế hình khối hiện đại, thời trang với các chi tiết tích hợp",
        "Hoàn thiện kết cấu hạn chế trầy xước, kết hợp với các đường rãnh bóng để làm nổi bật sự cao cấp",
        "Tích hợp ngăn trước tiện dụng",
        "Ngăn chứa laptop 14.1'",
        "Công nghệ kháng khuẩn Microban® bảo vệ sản phẩm 24/7 chống lại sự phát triển của vi khuẩn",
        "Hệ thống bánh xe 360 tích hợp công nghệ Aero-Trac™ giảm xóc",
        "Khóa kéo đôi chống trộm kết hợp khóa số TSA an toàn",
        "Công nghệ vải Recyclex™, vật liệu vải lót PET tái chế",
        "Nội thất phong phú với vách ngăn cả 2 bên và có thể tháo rời, các phụ kiện đi kèm như túi giặt và bao trùm vali"
      ],
      paramters: [
        { capacity: "33L" },
        { volume: "3.9kg" },
        { dimension: "37 x 23 x 55 cm" },
        { material: "Polyproppylene" },
        { warranty: "10 năm" }
      ]
    }
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
    details: {
      features: [
        "Bánh xe đôi với công nghệ Aero-Trac",
        "Có khả năng mở rộng (size trung và đại)",
        "Khóa kéo chống trộm",
        "Khóa số lõm tích hợp TSA",
        "Hệ thống treo đa năng với nút ẩn",
        "Lớp lót làm từ vải RECYCLEX™ - chất liệu làm từ 100% chai nhựa PET tái chế",
        "Móc treo tiện dụng"
      ],
      desc: ["Vali kéo Samsonite Minter là bộ sưu tập mang thiết kế tinh tế và sang trọng, tích hợp nhiều tính năng đáp ứng mọi nhu cầu cần thiết"],
      paramters: [
        { capacity: "75/92L" },
        { volume: "4.6kg" },
        { dimension: "49 x 29/33 x 69 cm" },
        { tankage: "20-25kg" },
        { material: "Polyproppylene" },
        { warranty: "10 năm" }
      ]
    }
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
      { id: 'color1', name: ['black'], code: '#000', image: '/images/product-love-trend3.1.jpg' },
    ],
    details: {
      features: [
        "Ngăn chứa bảo vệ laptop 15.6'",
        "Nội thất tổ chức phong phú, tinh tế, tiện dụng",
        "Đệm lưng AirFlow êm ái, thoáng khí, tạo sự thoải mái tối đa khi sử dụng",
        "Túi lưới bên hông để vừa chai nước hoặc ô dù",
        "Balo có dây đai nén giúp giữ balo được gọn gàng"
      ],
      paramters: [
        { capacity: "30L" },
        { volume: "0.77kg" },
        { dimension: "35 x 19 x 47 cm" },
        { warranty: "5 năm" }
      ]
    }
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
    details: {
      paramters: [
        { capacity: "8L" },
        { volume: "0.3kg" },
        { dimension: "22 x 13 x 28 cm" },
        { warranty: "1 năm" }
      ]
    }
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
    details: {
      features: [
        "Ngăn trước truy cập nhanh",
        "Ngăn chính rộng rãi, có ngăn chứa laptop 14'",
        "Dây đeo vai có thể điều chỉnh",
        "Túi ẩn ở mặt sau balo",
        "Ngăn bên hông tiện dụng"
      ],
      paramters: [
        { capacity: "20L" },
        { volume: "0.5kg" },
        { dimension: "29 x 18 x 42 cm" },
        { warranty: "1 năm" },
        { material: "100% Polyester" },
      ]
    }
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
    details: {
      features: [
        "Logo hoàn thiện tinh tế, độc đáo",
        "Tổ chức nội thất thông minh, tiện dụng",
        "Kết cấu vỏ vali hạn chế trầy xước",
        "Khóa số TSA an toàn, tiêu chuẩn Hoa Kỳ",
        "Tay cầm chắc chắn, có thể thay đổi độ cao để phù hợp với người dùng",
        "Hệ thống bánh xe 360° vận hành êm nhẹ"
      ],
      desc: ["Bộ sưu tập vali kéo nhựa Kiza được đặc trưng bởi hình dạng biểu tượng của logo Kamiliant và được thể hiện một cách vui nhộn và độc đáo. Vali Kiza có thiết kế dạng hình hộp với sức chứa được gia tăng tối đa. Với các tính năng thiết thực như siêu nhẹ, dung tích lớn, độ bền cao, bề mặt vali hạn chế trầy xước,... giúp bạn thỏa sức tận hưởng chuyến hành trình một cách thoải mái."],
      paramters: [
        { capacity: "71L" },
        { volume: "3.2kg" },
        { dimension: "47 x 28 x 68 cm" },
        { tankage: "20-25kg" },
        { warranty: "1 năm" },
        { material: "Polypropylen (PP)" },
      ]
    }
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
    details: {
      features: [
        "Có khả năng mở rộng tăng sức chứa",
        "Hệ thống 4 bánh đôi OPTIMOV™ êm nhẹ, chắc chắn",
        "Khóa kéo đôi an toàn DUOSAF™",
        "Khóa số TSA bảo mật tiêu chuẩn Hoa Kỳ",
        "Tích hợp cổng sạc USB (size cabin)",
        "Tổ chức nội thất phong phú, tinh tế"
      ],
      desc: ["Bộ sưu tập vali kéo nhựa Squasem với thiết kế vỏ 3 chiều đặc trưng, được tạo thành bởi các hoa văn hình thoi, kết hợp với các tính năng du lịch thiết yếu được trang bị đầy đủ. Được làm bằng vật liệu PP đa năng và chắc chắn, mang lại cho Squasem một cấu trúc mạnh mẽ, bền bỉ. Khả năng mở rộng trên tất cả các size giúp tăng khả năng lưu trữ hàng lý. Được trang bị bánh xe giảm sốc OPTIMOV™ giảm tiếng ồn, vận hành trơn tru trên mọi bề mặt gồ ghề, chắc chắn sẽ mang đến cho mọi du khách trải nghiệm di chuyển tuyệt vời. Khóa kéo đôi bảo mật DUOSAF™ cũng cung cấp thêm sự an toàn cho hành lý của bạn."],
      paramters: [
        { capacity: "69/78L" },
        { volume: "3.8kg" },
        { dimension: "46 x 28/31 x 66 cm" },
        { tankage: "20-25kg" },
        { warranty: "3 năm" },
        { material: "Polypropylene" },
      ]
    }
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
    details: {
      features: [
        "Lớp lót vali được xử lý kháng khuẩn",
        "Đi kèm túi đựng giày kháng khuẩn và túi tiện ích",
        "Tay nắm và tay cầm cần đẩy được xử lý kháng khuẩn",
        "Hệ thống đóng gói PlentiVol™ tỉ lệ 20:80",
        "Bánh xe xoay 360° tích hợp công nghệ StePause™ giúp vali đứng yên",
        "Khóa kéo đôi bảo mật Duosaf™",

      ],
      desc: ["Bộ sưu tập vali kéo nhựa Squasem với thiết kế vỏ 3 chiều đặc trưng, được tạo thành bởi các hoa văn hình thoi, kết hợp với các tính năng du lịch thiết yếu được trang bị đầy đủ. Được làm bằng vật liệu PP đa năng và chắc chắn, mang lại cho Squasem một cấu trúc mạnh mẽ, bền bỉ. Khả năng mở rộng trên tất cả các size giúp tăng khả năng lưu trữ hàng lý. Được trang bị bánh xe giảm sốc OPTIMOV™ giảm tiếng ồn, vận hành trơn tru trên mọi bề mặt gồ ghề, chắc chắn sẽ mang đến cho mọi du khách trải nghiệm di chuyển tuyệt vời. Khóa kéo đôi bảo mật DUOSAF™ cũng cung cấp thêm sự an toàn cho hành lý của bạn."],
      paramters: [
        { capacity: "69/78L" },
        { volume: "3.8kg" },
        { dimension: "46 x 28/31 x 66 cm" },
        { tankage: "20-25kg" },
        { warranty: "3 năm" },
        { material: "Polypropylene" },
      ]
    }
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
    details: {
        features: [
            "Logo hoàn thiện tinh tế, sang trong",
            "Tổ chức nội thất thông minh, tiện dụng",
            "Kết cấu vỏ vali hạn chế trầy xước",
            "Khóa số TSA an toàn tiêu chuẩn Hoa Kỳ",
            "Tay cầm chắc chắn, có thể thay đổi độ cao để phù hợp với người dùng",
            "Hệ thống bánh xe đôi 360° vận hành êm nhẹ"
        ],
        desc: ["Bộ sưu tập vali kéo nhựa Kiza được đặc trưng bởi hình dạng biểu tượng của logo Kamiliant và được thể hiện một cách vui nhộn và độc đáo. Vali Kiza có thiết kế dạng hình hộp với sức chứa được gia tăng tối đa. Với các tính năng thiết thực như siêu nhẹ, dung tích lớn, độ bền cao, bề mặt vali hạn chế trầy xước,... giúp bạn thỏa sức tận hưởng chuyến hành trình một cách thoải mái."],
        paramters: [
            { capacity: "71L" },
            { volume: "3.2kg" },
            { dimension: "47 x 28 x 68 cm" },
            { tankage: "20-25kg" },
            { warranty: "1 năm" },
            { material: "Polypropylene" },
        ]
    }
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
    details: {
        features: [
           "Hệ thống 4 bánh xe đôi giảm xóc Optimov™",
           "Khóa kéo đôi bảo mật Duosaf™",
           "Tính năng tối đa hóa sức chứa PlentiVol™",
           "Nắp mở phía trước độc đáo",
           "Hệ thống móc treo đồ ở bên hông vali tiện dụng",
           "Tích hợp túi đựng đồ đã sử dụng",
           "Khả năng mở rộng tăng sức chứa",
           "Cổng sạc USB tích hợp trên size cabin",
           "Ngăn chứa laptop 14' ở size cabin"
        ],
        desc: ["Bộ sưu tập này là sự kết hợp hoàn hảo giữa vẻ đẹp và trí tuệ, với ngoại thất tuyệt vời được bổ sung các tính năng thông minh và nội thất tinh tế. Khả năng phân chia không gian PlentiVol™ cho phép sắp xếp hành lý linh hoạt và tối đa hóa sức chứa thêm 15%. Khả năng mở phía trước cho phép truy cập mà không cần mở hoàn toàn vali. Hệ thống bánh xe hấp thụ sốc Optimov™ tăng cường khả năng di chuyển êm ái trên mọi bề mặt. Nội thất tổ chức phong phú với túi đựng đồ đi kèm để dễ dàng đóng gói và sắp xếp. Khóa kéo đôi Duosaf™ giúp bảo vệ hành lý của bạn luôn được an toàn. Mặt trước mở theo chiều dọc với vali size cabin có ngăn chứa laptop và cổng sạc USB cực kỳ hữu ích."],
        paramters: [
            { capacity: "77L" },
            { volume: "4.2kg" },
            { dimension: "46 x 31/35 x 68 cm" },
            { tankage: "20-25kg" },
            { warranty: "3 năm" },
            { material: "Polycarbonate" },
        ]
    }
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
      { id: 'color1', name: ['black'], code: '#000', image: '/images/balo-trend1.1.jpg' },
    ],
    details: {
        features: [
            "Balo laptop 17' XE Extent sử dụng chất liệu vải chính bên ngoài làm từ chai PET tái chế",
            "Ngăn laptop Triple Protect cho laptop lên đến 17'",
            "Ngăn máy tính bảng 10' chuyên dụng",
            "Ngăn chính có thể mở rộng tăng thêm sức chứa",
            "Hệ thống tổ chức thông minh, dễ dàng sắp xếp đồ dạc",
            "Ngăn chứa bàn phím chuyên dụng",
            "Ngăn đựng chuột máy tính",
            "Ngăn bảo mật ẩn ở mặt sau balo cho các vật có giá trị",
            "Túi bên hông đựng bình nước hoặc ô dù",
            "Đai gài cần đẩy vali giúp rảnh tay khi di chuyển",
            "Đệm lưng thông thoáng tạo sự thoải mái tối đa",
            "Dây đeo vai giảm xóc và có đệm êm ái, có thể điều chỉnh để phù hợp với hình dáng cơ thể",
            "Tay cầm có đệm mềm mại và bền chắc, dễ cầm nắm"
        ],
        desc: ["Balo laptop 17' XE Extent là một trong những lựa chọn tối ưu dành cho những người dùng yêu cầu cao về độ bền, tính năng tiện dụng và thiết kế thời trang. Với kích thước phù hợp cho các dòng laptop lên tới 17 inch, chiếc balo này không chỉ là một sản phẩm bảo vệ thiết bị mà còn là phụ kiện lý tưởng giúp bạn di chuyển thuận tiện hơn trong công việc và cuộc sống hàng ngày."],
        paramters: [
            { capacity: "37L" },
            { volume: "1.08kg" },
            { dimension: "35 x 24 x 50 cm" },
            { warranty: "5 năm" },
            { material: "75% recycled Polyester + 19% Polyester + 6% PVC" },
        ]
    }
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
    details: {
        features: [
            "Ngăn ẩn ở mặt sau balo dành cho các vật có giá trị",
            "Lớp vải lót bên trong được làm từ vật liệu tái chế, bền vững với môi trường",
            "Vải lót được xử lý kháng khuẩn hiện đại",
        ],
        desc: ["Balo Rudy 02 ASR là sự kết hợp hoàn hảo giữa thiết kế thông minh, chất liệu bền bỉ và tính năng tiện dụng. Đây chắc chắn là lựa chọn lý tưởng cho những ai đang tìm kiếm một chiếc balo đa năng, phục vụ tốt cho công việc, học tập và các hoạt động ngoài trời. Với Rudy 02 ASR, bạn không chỉ sỡ hữu một chiếc balo tiện lợi mà còn thể hiện phong cách và sự tinh tế trong từng chi tiết."],
        paramters: [
            { capacity: "21L" },
            { volume: "0.4kg" },
            { dimension: "30 x 14 x 42 cm" },
            { warranty: "1 năm" },
            { material: "100% Polyester" },
        ]
    }
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
    details: {
        features: [
            "Chi tiết phản quang được bố trí trên balo",
            "Móc treo có thể tháo rời, dễ dàng gắn các vật dụng nhỏ",
            "Ngăn riêng cho cổng USB và sạc dự phòng",
            "Hai ngăn có khóa kéo ở phía trước",
            "Ngăn chính rộng rãi có thể chứa quần áo",
            "Ngăn riêng cho laptop",
            "Tương thích với laptop 17.3' và tablet 10.5'",
            "2 túi bên hông có khóa kéo",
            "Mặt lưng thiết kế công thái học với hệ thống lưu thông không khí, mang lại cảm giác thoải mái tối đa",
            "Dây đeo ngực có thể tháo rời, tăng cường sự ổn định khi di chuyển",
            "Dây đeo vai giảm xóc giúp giảm áp lực lên vai",
            "Tích hợp đai gài cần đẩy vali"
        ],
        desc: ["Balo laptop 17.3in Biz2Go EXP Overnight với thiết kế nổi bật, tính năng vượt trội, không chỉ là một phụ kiện thời trang mà còn là người bạn đồng hành lý tưởng cho những chuyến đi hằng ngày. Với thiết kế đẹp mắt, chất liệu bền bỉ, có ngăn riêng để chứa laptop, thiết kế không gian chứa đồ thông minh và sự thoải mái tối đa balo laptop sẽ là lựa chọn tuyệt vời cho những ai đang tìm kiếm một chiếc balo vừa tiện dụng lại vừa phong cách."],
        paramters: [
            { capacity: "30/35L" },
            { volume: "1.3kg" },
            { dimension: "35 x 22/26 x 47 cm" },
            { warranty: "2 năm" },
            { material: "100% Polyester" },
        ]
    }
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
    details: {
        features: [
            "Chi tiết phản quang được bố trí trên balo",
            "Móc treo có thể tháo rời, dễ dàng gắn các vật dụng nhỏ",
            "Ngăn riêng cho cổng USB và sạc dự phòng",
            "Hai ngăn có khóa kéo ở phía trước",
            "Ngăn chính rộng rãi có thể chứa quần áo",
            "Ngăn riêng cho laptop",
            "Tương thích với laptop 14.1' và tablet 10.5'",
            "2 túi bên hông có khóa kéo",
            "Mặt lưng thiết kế công thái học với hệ thống lưu thông không khí, mang lại cảm giác thoải mái tối đa",
            "Dây đeo ngực có thể tháo rời, tăng cường sự ổn định khi di chuyển",
            "Dây đeo vai giảm xóc giúp giảm áp lực lên vai",
            "Tích hợp đai gài cần đẩy vali"
        ],
        desc: ["Balo Laptop 14.1' Biz2Go là một lựa chọn lý tưởng cho những người cần sự kết hợp giữa tính năng bảo vệ laptop, sự tiện dụng và phong cách hiện đại. Với chất liệu bền bỉ, ngăn đựng laptop chống sốc, thiết kế gọn gàng và khả năng bảo vệ đồ đạc tốt, chiếc balo này là người bạn đồng hành hoàn hảo cho những chuyến công tác, học tập hay đi làm hàng ngày."],
        paramters: [
            { capacity: "20.5L" },
            { volume: "1kg" },
            { dimension: "32 x 18 x 42.5 cm" },
            { warranty: "2 năm" },
            { material: "100% Polyester" },
        ]
    }
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
    details: {
        desc: ["Balo little Carter có kích thước nhỏ gọn, dây đeo được thiết kế riêng phù hợp với lưng của trẻ em, thiết kế đơn giản nhưng đầy đủ tính năng. Kiểu dáng hiện đại, chất liệu bền bỉ little Carter là sự lựa chọn lý tưởng cho trẻ mang đi học, đi chơi, đi du lịch. Balo Little Carter là sự lựa chọn tuyệt vời cho những ai tìm kiếm một chiếc balo trẻ em nhỏ gọn, tiện dụng và phong cách đáng yêu dành cho trẻ. Với thiết kế đơn giản nhưng hiện đại, chất liệu bền bỉ và tính năng tối ưu, chiếc balo này sẽ là người bạn đồng hành lý tưởng trong cuộc sống hằng ngày, từ đi học, đi chơi, du lịch."],
        paramters: [
            { capacity: "7L" },
            { volume: "0.2kg" },
            { dimension: "20 x 12 x 28 cm" },
            { warranty: "1 năm" },
            { material: "100% Polyester" },
        ]
    }
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
    details: {
        features: [
            "Túi đeo vai Segno 2.0 ASR với nội thất tổ chức phong phú, tinh tế",
            "Lớp lót nội thất được xử lý kháng khuẩn hiện đại",
            "Ngăn có khóa kéo ở mặt trước tiện dụng",
            "Ngăn ẩn ở mặt sau túi dành cho các vật có giá trị"
        ],
        desc: ["Túi đeo vai Segno 2.0 ASR không chỉ là một chiếc túi thông thường. Được thiết kế để đáp ứng nhu cầu của những người luôn di chuyển và có phong cách sống năng động. Sự kết hợp giữa tính năng bảo mật và linh hoạt đã giúp chiếc túi trở thành sự lựa chọn tuyệt vời cho những người yêu thích du lịch, công tác hoặc đơn giản là di chuyển trong môi trường đô thị. Với tất cả những tính năng nổi bật như tính năng bảo mật cao, thiết kế hiện đại và chất liệu bền bỉ, túi đeo vai Segno 2.0 ASR chắc chắn sẽ là sự lựa chọn lý tưởng cho những ai cần một chiếc túi đeo vai vừa tiện lợi, an toàn vừa hiện đại. Đừng bỏ lỡ cơ hội sở hữu sản phẩm này và trải nghiệm sự khác biệt mà sản phẩm mang lại."],
        paramters: [
            { capacity: "5L" },
            { volume: "0.28kg" },
            { dimension: "21 x 8 x 26.5 cm" },
            { warranty: "1 năm" },
            { material: "100% Polyester" },
        ]
    }
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
    details: {
        features: [
            "Bộ sưu tập American Tourister Orbit là sự kết hợp hoàn hảo giữa phong cách và tính năng, mang đến sự tiện lợi và thoải mái cho những người luôn bận rộn. Đây là dòng túi đeo sát cơ thể lý tưởng cho những ai không ngừng di chuyển. Bộ sưu tập bao gồm 3 mẫu: Rigel, Eris và Vega.",
            "Lớp lót RPET được xử lý kháng khuẩn bằng công nghệ Microban™, giúp tiêu diệt đến 99% vi khuẩn và nấm mốc, mang đến sự yên tâm trong suốt hành trình.",
            "Dây đeo vai có thể tháo rời",
            "Ngăn ẩn ở bên trong",
            "Túi phụ có thể tháo rời"
        ],
        paramters: [
            { capacity: "4L" },
            { volume: "0.2kg" },
            { dimension: "17 x 6 x 23 cm" },
            { warranty: "1 năm" },
            { material: "100% Polyester" },
        ]
    }
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
    details: {
        features: [
            "Bộ sưu tập American Tourister Orbit là sự kết hợp hoàn hảo giữa phong cách và tính năng, mang đến sự tiện lợi và thoải mái cho những người luôn bận rộn. Đây là dòng túi đeo sát cơ thể lý tưởng cho những ai không ngừng di chuyển. Bộ sưu tập bao gồm 3 mẫu: Rigel, Eris và Vega.",
            "Lớp lót RPET được xử lý kháng khuẩn bằng công nghệ Microban™, giúp tiêu diệt đến 99% vi khuẩn và nấm mốc, mang đến sự yên tâm trong suốt hành trình.",
            "Cách đeo linh hoạt: có thể đeo chéo hoặc đeo hông",
            "Ngăn khóa kéo ở phía sau giữ an toàn cho các vật có giá trị",
            "Lớp lót làm từ vật liệu tái chế và được xử lý kháng khuẩn"
        ],
        paramters: [
            { capacity: "4L" },
            { volume: "0.23kg" },
            { dimension: "38 x 7 x 16 cm" },
            { warranty: "1 năm" },
            { material: "100% Nylon" },
        ]
    }
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
    details: {
        features: [
            "Bộ sưu tập American Tourister Orbit là sự kết hợp hoàn hảo giữa phong cách và tính năng, mang đến sự tiện lợi và thoải mái cho những người luôn bận rộn. Đây là dòng túi đeo sát cơ thể lý tưởng cho những ai không ngừng di chuyển. Bộ sưu tập bao gồm 3 mẫu: Rigel, Eris và Vega.",
            "Lớp lót RPET được xử lý kháng khuẩn bằng công nghệ Microban™, giúp tiêu diệt đến 99% vi khuẩn và nấm mốc, mang đến sự yên tâm trong suốt hành trình.",
            "Cách đeo linh hoạt: có thể đeo chéo hoặc đeo hông",
            "Ngăn khóa kéo ở phía sau giữ an toàn cho các vật có giá trị",
            "Lớp lót làm từ vật liệu tái chế và được xử lý kháng khuẩn"
        ],
        paramters: [
            { capacity: "2L" },
            { volume: "0.26kg" },
            { dimension: "16 x 3 x 22 cm" },
            { warranty: "1 năm" },
            { material: "100% Nylon" },
        ]
    }
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
    details: {
        features: [
            "Bộ sưu tập American Tourister Orbit là sự kết hợp hoàn hảo giữa phong cách và tính năng, mang đến sự tiện lợi và thoải mái cho những người luôn bận rộn. Đây là dòng túi đeo sát cơ thể lý tưởng cho những ai không ngừng di chuyển. Bộ sưu tập bao gồm 3 mẫu: Rigel, Eris và Vega.",
            "Lớp lót RPET được xử lý kháng khuẩn bằng công nghệ Microban™, giúp tiêu diệt đến 99% vi khuẩn và nấm mốc, mang đến sự yên tâm trong suốt hành trình.",
            "Cách đeo linh hoạt: có thể đeo chéo hoặc đeo hông",
            "Ngăn khóa kéo ở phía sau giữ an toàn cho các vật có giá trị",
            "Lớp lót làm từ vật liệu tái chế và được xử lý kháng khuẩn"
        ],
        paramters: [
            { capacity: "3L" },
            { volume: "0.25kg" },
            { dimension: "26 x 6 x 16 cm" },
            { warranty: "1 năm" },
            { material: "100% Nylon" },
        ]
    }
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
    details: {
      features: [
          "Thiết kế ngăn chứa thông minh Plentivol™ theo tỉ lệ 2/8, dễ dàng sắp xếp những món đồ lớn",
          "Khả năng mở rộng tăng sức chứa (chỉ có trên size trung và đại)",
          "Khóa kéo đôi Duosaf™ tăng cường bảo mật",
          "Trang bị móc treo đa năng ở bên hông vali giúp treo thêm túi xách hoặc các vật dụng khác",
          "Lớp lót được kháng khuẩn bằng công nghệ hiện đại, kèm với các túi phụ kiện tiện dụng"
      ],
      paramters: [
          { capacity: "65/75L" },
          { volume: "4kg" },
          { dimension: "44 x 30/33 x 67 cm" },
          { tankage: "20-25kg" },
          { warranty: "3 năm" },
          { material: "100% Polycarbonate"},
      ]
  }
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
    details: {
      features: [
          "Kích thước size cabin chuẩn (115cm)",
          "Bánh xe giảm xóc OPTIMOV™",
          "Hệ thống khóa khung đa điểm một chạm XTRASECU™",
          "Nội thất tổ chức phong phú, đa năng",
          "Lớp lót làm từ vật liệu tái chế rPET và được xử lý kháng khuẩn"
      ],
      paramters: [
          { capacity: "56L" },
          { volume: "4,1kg" },
          { dimension: "45 x 27 x 65" },
          { tankage: "20-25kg" },
          { warranty: "3 năm" },
          { material: "Polycarbonate"},
      ]
  }
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
    details: {
      features: [
          "Tích hợp khóa 3 số TSA kết hợp với dây cáp gia tăng tính bảo mật",
          "Ngăn phía trước tiện dụng, tối ưu sức chứa",
          "Sử dụng chất liệu polyester nhẹ nhưng vẫn bền chắc",
          "Hệ thống 4 bánh xe 360° vận hành êm nhẹ và trơn tru",
          "Khả năng mở rộng tăng không gian đóng gói ở tất cả các size"
      ],
      paramters: [
          { capacity: "70L" },
          { volume: "2.7kg" },
          { dimension: "42 x 27/30 x 71cm" },
          { tankage: "20-25kg" },
          { warranty: "3 năm" },
          { material: "100% Polyester"},
      ]
  }
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
    details: {
      features: [
          "Ngăn chính dung tích lớn rộng rãi 30l",
          "Tích hợp bao trùm không thấm nước",
          "Thiết kế ngăn nắp túi phụ kiện và khả năng nới rộng sức chứa",
          "Ngăn túi chứa nước bên hông kèm ống hút",
          "Lớp lóp đệm lưng giữ lưng luôn khô và thoáng mát",
          "Dây đai balo cấu tạo nâng tải trọng tối ưu",
      ],
      paramters: [
          { capacity: "30L" },
          { volume: "1.3kg" },
          { dimension: "35 x 35 x 65cm" },
          { warranty: "1 năm" },
      ]
  }
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
    details: {
      features: [
          "PRO-DLX 6 là bước nhảy vọt tiếp theo cho bộ sưu tập cao cấp dành cho doanh nhân của Samsonite. Bộ sưu tập này có kiểu dáng mới mẻ và cực kỳ hiện đại, được làm bằng vật liệu mềm và nhẹ hơn. Bên trong, PRO-DLX 6 cung cấp một loạt các tùy chọn tổ chức được thiết kế để đơn giản hóa việc sắp xếp. Kết hợp tất cả những điều này lại với nhau và bạn có một bộ sưu tập hoàn hảo cho nhu cầu của những doanh nhân thường xuyên phải đi công tác. Khi bạn cần di chuyển nhanh chóng và làm việc hiệu quả, không có lựa chọn nào tốt hơn PRO-DLX 6",
          "Balo laptop 17.3 PRO-DLX 6 có ngăn chính rộng rãi, trong đó có ngăn chứa bảo vệ laptop 17.3 chuyên dụng cùng với ngăn đựng tài liệu và khe cắm sạc dự phòng. Các ngăn phía trước có khóa kéo với nhiều khe cắm cho nhiều thiết bị khác nhau, trong khi 2 túi bên hông có khóa kéo cung cấp thêm chức năng và khả năng lưu trữ thiết bị. Cổng sạc USB ở bên hông giúp dễ dàng sạc pin khi di đang di chuyển và bộ mở rộng cho phép bạn sắp xếp được nhiều hơn khi cần thiết.",
      ],
      paramters: [
          { capacity: "24.5 L" },
          { volume: "1.5kg" },
          { dimension: "32 x 18/24 x 46 cm" },
          { warranty: "2 năm" },
          { material: " 97% Nylon + 2% PU + 1% da"},
      ]
  }
  },
  {

    id: 36,
    brand: 'American Tourister - Mỹ',
    name: 'Túi đeo chéo Paisley Joy size S',
    category: 'handbag',
    newPrice: '750,000đ',
    oldPrice: '1,500,000đ',
    colors: [
      { id: 'color1', name: ['black'], code: '#000000', image: '/images/tuideocheoPaisleyJoy_01.webp' },
      { id: 'color2', name: ['gray'], code: '#c8c1ba', image: '/images/tuideocheoPaisleyJoy_02.webp' },
    ],
    details: {
      features: [
          "Nội thất rộng rãi, có ngăn khóa kéo bên trong",
          "Ngăn có khóa kéo ở cả mặt trước và sau",
          "Dây đeo vai bền chắc, có thể điều chỉnh độ dài",
          "Lớp lót được xử lý kháng khuẩn hiện đại",
      ],
      paramters: [
          { capacity: "3 L" },
          { volume: "0,22kg" },
          { dimension: " 22,5 x 7 x 15 cm" },
          { warranty: "1   năm" },
          { material: "95% Polyester + 5% Microfiber"},
      ]
  },
  },
  {
    id: 37,
    brand: 'American Tourister - Mỹ',
    name: 'Túi duffle Corey 01 ASR',
    category: 'handbag',
    newPrice: '950,000đ',
    oldPrice: '1,900,000đ',
    colors: [
      { id: 'color1', name: ['red'], code: '#FF0000', image: '/images/tuixach_080_01.webp', },
      { id: 'color2', name: ['gray'], code: '#67665b', image: '/images/tuixach_080_02.webp' },
    ],
    details: {
      features: [
          "Túi duffle Corey chính là chiếc túi lý tưởng cho những ai yêu thích thể thao và các hoạt động ngoài trời. Với ngăn chính rộng rãi, bạn có thể thoải mái đựng đồ thể thao, quần áo, đồ vệ sinh cá nhân và các vật dụng khác.",
          "Túi đựng giày giúp bạn dễ dàng mang theo giày thể thao hoặc giày đi bộ.",
          "Hai ngăn lưới bên hông để đựng các vật dụng nhỏ như khăn, bình nước.",
          "Dây đeo vai có thể tháo rời, giúp bạn dễ dàng xách tay hoặc đeo trên vai.",
      ],
      paramters: [
          { capacity: "33,5L" },
          { volume: "0,48 kg" },
          { dimension: "47 x 25 x 24 cm" },
          { warranty: "1 năm" },
          { material: "100% Polyester"},
      ]
  },
  },
  {
    id: 38,
    brand: 'Samsonite Red - Mỹ',
    name: 'Túi đeo chéo Ferley',
    category: 'handbag',
    newPrice: '4,200,000đ',
    oldPrice: '6,000,000đ',
    colors: [
      { id: 'color1', name: ['gray'], code: '#f2eee6', image: '/images/tuixach_081_01.webp', },
      { id: 'color2', name: ['pink'], code: '#ffe2de', image: '/images/tuixach_081_02.webp' },
      { id: 'coler3', name: ['black'], code: '#000000', image: '/images/tuixach_081_03.webp' },
    ],
    details: {
      features: [
          "Bộ sưu tập Ferley mang đến nét nữ tính thanh lịch, kết hợp hài hòa giữa thiết kế tối giản và chất liệu nhẹ nhàng, tạo nên những chiếc túi phù hợp cho mọi hoạt động thường ngày.",
          "Màu sắc đa dạng: Đen, Xám nhạt, Hồng đáng yêu, Denim thời thượng, phù hợp với nhiều phong cách.",
          "Túi đeo chéo nắp gập mang phong cách nữ tính, thanh lịch.",
          "Túi nhỏ đính kèm giúp bạn cất giữ các phụ kiện như tai nghe, sạc điện thoại,...",
          "Dây đeo vai có thể điều chỉnh, mang lại sự thoải mái khi sử dụng.",
      ],
      paramters: [
          { capacity: "3L" },
          { volume: "0,42 kg" },
          { dimension: "31 x 8,5 x 18 cm" },
          { warranty: "2 năm" },
          { material: "63% NYLON + 37% POLYESTER TRICO"},
      ]
  },
  },
  {
    id: 39,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Túi tote 2-way Architecture Urban2',
    category: 'handbag',
    newPrice: '7,210,000đ',
    oldPrice: '10,300,000đ',
    colors: [
      { id: 'color1', name: ['black'], code: '#000000', image: '/images/tuixach_082_01.webp', },
      { id: 'color2', name: ['gray'], code: '#3e444e', image: '/images/tuixach_082_02.webp' },
    ],
    details: {
      features: [
          "Chiếc túi công sở Architecture Urban2 2-Way Carry Tote là người bạn đồng hành linh hoạt, dễ dàng chuyển đổi từ túi xách sang balo. Với thiết kế sáng tạo, lớp lót kháng khuẩn và chất liệu co giãn bảo vệ thiết bị 360 độ, chiếc túi này là một lựa chọn hoàn hảo cho những chuyến công tác.",
          "Bao gồm khóa kéo chống nước và phủ lớp chống thấm ở ngăn chính để giữ đồ dùng khô ráo",
          "Đáy túi được trang bị chân đế để hạn chế tiếp xúc với bề mặt bẩn",
      ],
      paramters: [
          { capacity: "20L" },
          { volume: "1,3 kg" },
          { dimension: "40 x 15 x 40 cm" },
          { warranty: "10 năm" },
          { material: "Nylon / Leather"},
      ]
  },
  },
  {
    id: 40,
    brand: 'American Tourister - Mỹ',
    name: 'Túi tote Alizee Aimee ASR',
    category: 'handbag',
    newPrice: '1,250,000đ',
    oldPrice: '2,500,000đ',
    colors: [
      {id: 'color1', name: ['pink'], code: '#edcbc9', image: '/images/tuixach_083_01.webp'},
      {id: 'color2', name: ['blue'], code: '#353f62', image: '/images/tuixach_083_02.webp'},
      {id: 'color3', name: ['gray'], code: '#d0cedd', image: '/images/tuixach_083_03.webp'},
    ],
    details: {
      features: [
          "Bộ sưu tập Alizee đình đám nay chào đón thành viên mới tuyệt vời - Alizee Aimee. Ba màu sắc sang trọng: Indigo, Light Grey và Rose Beige, mang đến vẻ ngoài thanh lịch, tươi mới cho cuộc sống thường ngày của bạn.Bộ sưu tập Alizee đình đám nay chào đón thành viên mới tuyệt vời - Alizee Aimee. Ba màu sắc sang trọng: Indigo, Light Grey và Rose Beige, mang đến vẻ ngoài thanh lịch, tươi mới cho cuộc sống thường ngày của bạn.",
          "Chất liệu vải và lớp lót được xử lý công nghệ kháng khuẩn, đảm bảo vệ sinh tối ưu cho đồ dùng cá nhân. Hơn thế nữa, thiết kế thông minh và đa năng của Alizee Aimee sẽ khiến mọi hành trình của bạn trở nên dễ dàng và thú vị hơn bao giờ hết.",
          "Túi tote Alizee Aimee sở hữu ngăn chính rộng rãi, dễ dàng lấy đồ, kèm ngăn đựng máy tính bảng 8 inch. Ngăn khóa kéo phía trước tiện cất giữ vật dụng nhỏ, ngăn khóa kéo phía sau bảo vệ đồ dùng quan trọng.",
      ],
      paramters: [
          { capacity: "14L" },
          { volume: "0,5 kg" },
          { dimension: "42 x 14 x 28 cm" },
          { warranty: "1 năm" },
          { material: "100% Polyester"},
      ]
    },
  },
  {
    id: 41,
    brand: 'ACE. - Nhật Bản',
    name: 'Túi đeo chéo Bastique2',
    category: 'handbag',
    newPrice: '1,120,000đ',
    oldPrice: '1,600,000đ',
    colors: [
      {id: 'color1', name: ['blue'], code: '#191972', image: '/images/tuixach_084_01.webp'},
      {id: 'color2', name: ['black'], code: '#000000', image: '/images/tuixach_084_02.webp'},
    ],
    details: {
      features: [
          "Kích thước nhỏ gọn và nhẹ nhàng",
          "Tổ chức nội thất thông minh, dễ dàng sắp xếp",
          "Mặt lưng sử dụng chất liệu lưới thoáng khí",
      ],
      paramters: [
          { capacity: "1L" },
          { volume: "0,2 kg" },
          { dimension: "24 x 6 x 14 cm" },
          { warranty: "5 năm" },
          { material: "Nylon 100 x 210dn Dobby PU finish"},
      ]
    },
  },
  {
    id: 42,
    brand: 'Kanana Project - Nhật Bản',
    name: 'Túi đeo chéo Kanana Monogram 2ND Large',
    category: 'handbag',
    newPrice: '2,380,000₫',
    oldPrice: '3,400,000₫',
    colors: [
      {id: 'color1', name: ['blue'], thumbnail: '/images/color-tuixach_085_01.webp', image: '/images/tuixach_085_01.webp'},
    ],
    details: {
      features: [
          "Bộ sưu tập Monogram được tái thiết kế với vẻ ngoài tinh tế và sang trọng nhờ ánh sáng rực rỡ.",
          "Chất liệu chính là vải dệt Jacquard Monogram độc đáo",
          "Ngăn trước có khóa kéo làm từ vải đã được xử lý kháng khuẩn và virut bởi công nghệ VIRTECT®",
          "Khóa kéo chính có chốt an toàn để tránh mở nhầm",
          "Ngăn khóa kéo ở mặt sau có độ bảo mật cao, thích hợp để đựng ví và các vật dụng có giá trị",
      ],
      paramters: [
          { volume: "0,31 kg" },
          { dimension: "32 x 10 x 24 cm" },
          { warranty: "5 năm" },
          { material: "Polyester 100dn Jacquard / PU"},
      ]
    },
  },
  {
    id: 43,
    brand: 'Samsonite - Mỹ',
    name: 'Túi hobo Up-Line S',
    category: 'handbag',
    newPrice: '2,940,000₫',
    oldPrice: '4,200,000₫',
    colors: [
      {id: 'color1', name: ['pink'], code: '#c5a79c', image: '/images/tuixach_086_01.webp'},
      {id: 'color2', name: ['black'], code: '#000000', image: '/images/tuixach_086_02.webp'},
      {id: 'color3', name: ['gray'], code: '#bbb6ba', image: '/images/tuixach_086_03.webp'},

    ],
    details: {
      features: [
          "Nội thất rộng rãi: Gồm ngăn chính rộng rãi có khóa kéo và 1 ngăn khóa kéo bên trong giúp bạn sắp xếp đồ đạc khoa học, dễ dàng tìm kiếm",
          "Ngăn trước có khóa kéo làm từ vải đã được xử lý kháng khuẩn và virut bởi công nghệ VIRTECT®",
          "Khóa kéo chính có chốt an toàn để tránh mở nhầm",
          "Ngăn khóa kéo ở mặt sau có độ bảo mật cao, thích hợp để đựng ví và các vật dụng có giá trị",
      ],
      paramters: [
          { volume: "0,31 kg" },
          { dimension: "32 x 10 x 24 cm" },
          { warranty: "5 năm" },
          { material: "Polyester 100dn Jacquard / PU"},
      ]
    },
  },
  {
    id: 44,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Túi duffel Touring 2.0 Sports',
    category: 'handbag',
    newPrice: '5,180,000₫',
    oldPrice: '7,400,000₫',
    colors: [
      {id: 'color1', name: ['black'], code: '#000000', image: '/images/tuixach_087_01.webp'},
      {id: 'color2', name: ['gray'], code: '#bbb6ba', image: '/images/tuixach_087_02.webp'},

    ],
    details: {
      features: [
          "Túi chống thấm có thể tháo rời và điều chỉnh độ dài dây đeo, giúp bạn mang theo đồ đạc cá nhân an toàn trong mọi điều kiện thời tiết.",
          "Dây đeo vai có thể tháo rời và điều chỉnh độ dài với lớp đệm mang nhãn hiệu Victorinox.",
          "Ngăn chính rộng rãi với túi lưới có khóa kéo, dễ dàng sắp xếp đồ đạc khoa học và an toàn.",
      ],
      paramters: [
          { capacity: "1L" },
          { volume: "0,7 kg" },
          { dimension: "50 x 29 x 28 cm" },
          { warranty: "10 năm" },
          { material: "Polyester"},
      ]
    },
  },
  {
    id: 45,
    brand: 'Samsonite Red - Mỹ',
    name: 'Túi boston Vickson',
    category: 'handbag',
    newPrice: '3,640,000₫',
    oldPrice: '5,200,000₫',
    colors: [
      {id: 'color1', name: ['blue'], thumbnail: '/images/color-tuixach_088_01.webp', image: '/images/tuixach_088_01.webp'},
      {id: 'color2', name: ['black'], code: '#000000', image: '/images/tuixach_088_02.webp'},

    ],
    details: {
      features: [
          "Túi boston sở hữu khoang chính lớn cùng nhiều ngăn phụ, giúp sắp xếp đồ đạc một cách khoa học và tiện lợi",
          "Dây đeo vai được trang bị đệm mút êm ái, mang lại cảm giác thoải mái khi sử dụng trong thời gian dài và có thể tháo rời",
          "Chất liệu nhẹ, giúp bạn di chuyển dễ dàng",
          "Sử dụng vải CORDURA® siêu bền (trừ màu hoa văn xanh da trời)",
      ],
      paramters: [
          { capacity: "28L" },
          { volume: " 0,98 kg" },
          { dimension: "46 x 18 x 33 cm" },
          { warranty: "2 năm" },
          { material: "100% Polyester"},
      ]
    },
  },
  {
    id: 46,
    brand: 'Samsonite Red - Mỹ',
    name: 'Túi đeo chéo mini Haaper',
    category: 'handbag',
    newPrice: '1,650,000₫',
    oldPrice: '3,300,000₫',
    colors: [
      {id: 'color1', name: ['gray'], thumbnail: '/images/color-tuixach_089_01.webp', image: '/images/tuixach_089_01.webp'},
      {id: 'color2', name: ['black'], thumbnail: '/images/color-tuixach_089_02.webp', image: '/images/tuixach_089_02.webp'},

    ],
    details: {
      features: [
          "Bộ sưu tập Haaper từ Samsonite Red được thiết kế dành cho những người năng động và được làm từ chất liệu Rip Nylon tăng cường độ bền và sự dẻo dai. ",
          "Các sản phẩm Haaper có kiểu dáng mạnh mẽ lấy cảm hứng từ vẻ đẹp của thiên nhiên, có màu xám hoặc bạc với các điểm nhấn màu xanh dương rực rỡ.",
          "Giữ các vật dụng thiết yếu của bạn ngăn nắp, dễ lấy và vẫn an toàn với Túi đeo chéo mini HAAPER. ",
          "Chiếc túi siêu nhỏ gọn này hoàn hảo cho các vật dụng nhỏ như ví, điện thoại và thẻ ngân hàng. Bên cạnh đó, nó còn được tích hợp một chiếc túi để chai nước để tăng sự tiện dụng (Sản phẩm không bao gồm chai nước)",
      ],
      paramters: [
          { capacity: "2L" },
          { volume: "0.14 kg" },
          { dimension: " 21 x 6 x 14 cm" },
          { warranty: "2 năm" },
          { material: "100% Nylon"},
      ]
    },
  },
  {
    id: 47,
    brand: 'Samsonite - Mỹ',
    name: 'Túi đeo chéo Sefton',
    category: 'handbag',
    newPrice: '2,170,000₫',
    oldPrice: '3,100,000₫',
    colors: [
      {id: 'color1', name: ['black'], code: '#000000', image: '/images/tuixach_090_01.webp'},

    ],
    details: {
      features: [
          "Từ những chiếc balo gọn nhẹ thanh lịch đến vali kéo đa năng tiện dụng, Sefton mang đến giải pháp di chuyển đầy phong cách cho những chuyên gia kinh doanh thành thị. ",
          "Bên cạnh nội thất thông minh giúp bạn dễ dàng sắp xếp đồ đạc, các sản phẩm trong bộ sưu tập Sefton còn được chế tác từ nylon mật độ cao và  các chi tiết trang trí PU cap cấp, đảm bảo phong cách du lịch của bạn luôn hoàn hảo.",
          "Túi đeo chéo Sefton, được chế tác từ chất liệu nylon bền bỉ, logo và đầu khóa kéo kim loại sang trọng, mang đến vẻ ngoài lịch lãm và gọn gàng cho các chuyên gia bận rộn, dù đang di chuyển ở bất cứ đâu.",
      ],
      paramters: [
          { volume: "0.5 kg" },
          { dimension: "25 x 9 x 25,5 cm" },
          { warranty: "2 năm" },
          { material: "80% Nylon + 20% PU"},
      ]
    },
  },
  {
    id: 48,
    brand: 'Samsonite Red - Mỹ',
    name: 'Túi tote Nobert Patterned',
    category: 'handbag',
    newPrice: '3,570,000₫',
    oldPrice: '5,100,000₫',
    colors: [
      {id: 'color1', name: ['blue'], thumbnail: '/images/color-tuixach_091_01.webp', image: '/images/tuixach_091_01.webp'},

    ],
    details: {
      features: [
          "Túi tote gấp gọn với chất liệu nylon bền bỉ, linh hoạt cùng lớp phủ PU mờ tinh tế, mang phong cách unisex trẻ trung, năng động.",
          "Không gian lưu trữ rộng rãi bên trong cùng ngăn khóa kéo giúp bạn bảo quản đồ đạc an toàn",
          "Ngăn khóa kéo trước và sau tiện lợi, đáp ứng nhu cầu sử dụng hàng ngày",
          "Dây đeo vai có thể điều chỉnh độ dài, tạo sự thoải mái khi đeo",
      ],
      paramters: [
          { capacity: "19.5L" },
          { volume: "0,62 kg" },
          { dimension: " 37,5 x 9,5 x 40 cm" },
          { warranty: "2 năm" },
          { material: "80% Nylon + 20% PU"},
      ]
    },
  },
  {
    id: 49,
    brand: 'Samsonite Red - Mỹ',
    name: 'Túi đeo chéo mini Nobert',
    category: 'handbag',
    newPrice: '2,380,000₫',
    oldPrice: '3,400,000₫',
    colors: [
      {id: 'color1', name: ['yellow'], code: '#e5dcce', image: '/images/tuixach_092_01.webp'},
      {id: 'color2', name: ['blue'], code: '#4a495e', image: '/images/tuixach_092_02.webp'},
      {id: 'color3', name: ['black'], code: '#000000', image: '/images/tuixach_092_03.webp'},
    ],
    details: {
      features: [
          "Túi tote gấp gọn với chất liệu nylon bền bỉ, linh hoạt cùng lớp phủ PU mờ tinh tế, mang phong cách unisex trẻ trung, năng động.",
          "Không gian lưu trữ rộng rãi bên trong cùng ngăn khóa kéo giúp bạn bảo quản đồ đạc an toàn",
          "Ngăn khóa kéo trước và sau tiện lợi, đáp ứng nhu cầu sử dụng hàng ngày",
          "Dây đeo vai có thể điều chỉnh độ dài, tạo sự thoải mái khi đeo",
      ],
      paramters: [
          { capacity: "19.5L" },
          { volume: "0,62 kg" },
          { dimension: " 37,5 x 9,5 x 40 cm" },
          { warranty: "2 năm" },
          { material: "80% Nylon + 20% PU"},
      ]
    },
  },
  {
    id: 50,
    brand: 'High Sierra - Mỹ',
    name: 'Balo laptop 17in Swoop SG',
    category: 'balo',
    newPrice: '800,000₫',
    oldPrice: '1,600,000₫',
    colors: [
      { id: 'color1', name: ['black'], code: '#2a2829', image: '/images/balo_050_01.jpg' },
      { id: 'color2', name: ['gray'], code: '#676248', image: '/images/balo_050_02.jpg' },
      { id: 'color3', name: ['gray'], thumbnail: '/images/color-balo_050_03.jpg', image: '/images/balo_050_03.jpg' },
      { id: 'color4', name: ['gray'], thumbnail: '/images/color-balo_050_04.jpg', image: '/images/balo_050_04.jpg' },
    ],
  },
  {
    id: 51,
    brand: 'American Tourister - Mỹ',
    name: 'Balo Mate 2 02',
    category: 'balo',
    newPrice: '800,000₫',
    oldPrice: '1,600,000₫',
    colors: [
      { id: 'color1', name: ['blue'], code: '#57a2af', image: '/images/balo_051_01.webp' },
      { id: 'color2', name: ['orange'], code: '#ff9900', image: '/images/balo_051_02.jpg' },

    ],
  },
  {
    id: 52,
    brand: 'American Tourister - Mỹ',
    name: 'Balo trẻ em Diddle 2.0 R',
    category: 'balo',
    newPrice: '700,000₫',
    oldPrice: '1,400,000₫',
    colors: [
      { id: 'color1', name: ['orange'], thumbnail: '/images/color-balo_052_01.jpg', image: '/images/balo_052_01.webp' },
      { id: 'color2', name: ['pink'], thumbnail: '/images/color-balo_052_02.jpg', image: '/images/balo_052_02.jpg' },

    ],
  },
  {
    id: 53,
    brand: 'Samsonite - Mỹ',
    name: 'Balo trẻ em Sammies Dreams - Giraffe',
    category: 'balo',
    newPrice: '800,000₫',
    oldPrice: '1,600,000₫',
    colors: [
      { id: 'color1', name: ['yellow'], code: '#fce151', image: '/images/balo_053_01.webp' },
    ],
  },
  {
    id: 54,
    brand: 'American Tourister - Mỹ',
    name: 'Balo Colton',
    category: 'balo',
    newPrice: '900,000₫',
    oldPrice: '1,800,000₫',
    colors: [
      { id: 'color1', name: ['blue'], thumbnail: '/images/color-balo_054_01.jpg', image: '/images/balo_054_01.jpg' },
      { id: 'color2', name: ['brown'], code: '#996633', image: '/images/balo_054_02.jpg' },
      { id: 'color3', name: ['black'], code: '#000000', image: '/images/balo_054_03.jpg' },
    ],
  },
  {
    id: 70,
    brand: 'Kanana Project - Nhật Bản',
    name: 'Balo Kanana Monogram 2ND Small',
    category: 'balo',
    newPrice: '3,220,000₫',
    oldPrice: '4,600,000₫',
    colors: [
      { id: 'color1', name: ['green'], thumbnail: '/images/color_balo_078_01.jpg', image: '/images/balo_078_01.jpg' },
      { id: 'color2', name: ['gray'], thumbnail: '/images/color_balo_078_02.webp', image: '/images/balo_078_02.jpg' },
    ],
    details: {
        features: [
            "Chất liệu chính là vải dệt Jacquard Monogram độc đáo",
            "Ngăn trước có khóa kéo làm từ vải đã được xử lý kháng khuẩn và virut bởi công nghệ VIRTECT®",
            "Ngăn đựng thẻ tiện lợi ở mặt trước giúp truy cập nhanh",
            "Khóa kéo chính có chốt an toàn để tránh mở nhầm",
            "Ngăn khóa kéo ở mặt sau có độ bảo mật cao, thích hợp để đựng ví và các vật dụng có giá trị",
            "Bên trong ngăn chính có ngăn đựng đồ nhỏ được tổ chức thông minh",
            "Tích hợp đai gài cần đẩy vali, thuận tiện khi di chuyển",
            "Có thể đeo như balo hoặc cầm tay như một chiếc túi xách"
        ],
        paramters: [
            { capacity: "10L" },
            { volume: "0.46kg" },
            { dimension: "39 x 12 x 31 cm" },
            { warranty: "5 năm" },
            { material: "Polyester 100dn Jacquard / PU" },
        ]
    }
  },
  {
    id: 71,
    brand: 'American Tourister - Mỹ',
    name: 'Balo Barton',
    category: 'balo',
    newPrice: '1,000,000₫',
    oldPrice: '1,000,000₫',
    colors: [
      { id: 'color1', name: ['green'], thumbnail: '/images/color_balo_076_01.webp', image: '/images/balo_076_01.jpg' },
      { id: 'color2', name: ['yellow'], thumbnail: '/images/color_balo_076_02.jpg', image: '/images/balo_076_02.jpg' },
      { id: 'color3', name: ['black'], thumbnail: '/images/color_balo_076_03.jpg', image: '/images/balo_076_03.jpg' },
      { id: 'color4', name: ['red'], thumbnail: '/images/color_balo_076_04.jpg', image: '/images/balo_076_04.jpg' },
    ],
    details: {
        features: [
            "2 ngăn trước truy cập nhanh",
            "Túi lót PVC chống nước",
            "Khóa kéo chống thấm nước",
            "Miệng túi mở rộng",
            "Ngăn bảo vệ laptop 15.6'",
            "Đệm lưng êm ái, thoáng mát"
        ],
        desc: ["Một cái balo không chỉ là một cái túi. Đó là một nơi lưu trữ di động. Và đó còn là phản ánh của sự quan tâm tới những vật dụng bạn đã lựa chọn để cất giữ trong balo. Bộ sưu tập balo Barton sử dụng hàng ngày với thiết kế hiện đại, sử dụng chất liệu thân thiện môi trường nhưng vẫn bảo đảm chống thấm nước. Tất cả các thiết bị điện tử thông minh của bạn sẽ không sợ bị ướt trong những ngày mưa. Balo Barton lấy cảm hứng ngoài trời với nhiều màu sắc đẹp mắt, thể hiện cá tính của bạn."],
        paramters: [
            { capacity: "25L" },
            { volume: "0.7kg" },
            { dimension: "31 x 20 x 50 cm" },
            { warranty: "1 năm" },
        ]
    }
  },
  {
    id: 72,
    brand: 'LEVEL8 - Mỹ',
    name: 'Balo laptop 15.6in LEVEL8 Mr. Outstanding',
    category: 'balo',
    newPrice: '1,850,000₫',
    oldPrice: '3,700,000₫',
    colors: [
      { id: 'color1', name: ['black'], code: '#000', image: '/images/balo_075_01.jpg' },
    ],
    details: {
        features: [
           "Balo với chất liệu vải cao cấp bền chắc, có khả năng chống thấm nước bảo vệ hành lý bên trong",
           "Ngăn chính có sức chứa lớn, có ngăn chứa bảo vệ laptop 15.6'",
           "Thiết kế khóa nam châm sáng tạo, an toàn nhưng vẫn dễ dàng truy cập",
           "Ngăn phía trên chứa mắt kinh có lớp lót bằng da lộn mềm mại",
           "Có ngăn phía trước và ngăn bên hông tiện dụng",
           "Nội thất làm từ chất liệu rPET bền vững với môi trường",
        ],
        paramters: [
            { capacity: "18L" },
            { volume: "1.01kg" },
            { dimension: "30 x 13 x 47 cm" },
            { warranty: "1 năm" },
            { material: "Polyester + PU" },
        ]
    }
  },
  {
    id: 73,
    brand: 'Samsonite Red - Mỹ',
    name: 'Balo flap Cambie',
    category: 'balo',
    newPrice: '4,690,000₫',
    oldPrice: '6,700,000₫',
    colors: [
      { id: 'color1', name: ['gray'], code: '#e6e2e2', image: '/images/balo_072_01.jpg' },
      { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_072_03.jpg' },
    ],
    details: {
        features: [
           "Thiết kế nắp gập có thể tháo rời, linh hoạt thay đổi phong cách.",
           "Ngăn khóa kéo rộng rãi với chi tiết xếp li tinh tế, dễ dàng sắp xếp đồ đạc.",
           "Đầu khóa kéo và đường chỉ may phối màu sắc tinh tế.",
           "Logo chính và nhãn sử dụng chất liệu trong suốt, tạo sự hiện đại.",
           "Dây đeo vai và đai ngực có thể điều chỉnh, thoải mái tối đa khi sử dụng."
        ],
        desc: ["Bộ sưu tập Samsonite Red Cambie được làm từ chất liệu nhẹ nhàng, thoáng mát, phù hợp với mùa hè, mang hơi thở của hoạt động ngoài trời và đáp ứng nhiều nhu cầu sử dụng khác nhau. Từ balo thông dụng, balo nắp gập thời trang đến túi tote nhẹ nhàng và túi đeo chéo, bộ sưu tập Cambie mang đến cho bạn những lựa chọn phong cách đa dạng, không chỉ phù hợp cho sử dụng hàng ngày mà còn cả cho những chuyến du lịch."],
        paramters: [
            { capacity: "22L" },
            { volume: "0.62kg" },
            { dimension: "31 x 16.5 x 47.5 cm" },
            { warranty: "2 năm" },
            { material: "75% Nylon + 25% Polyester" },
        ]
    }
  },
  {
    id: 74,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Balo VX Sport EVO Daypack',
    category: 'balo',
    newPrice: '3,640,000₫',
    oldPrice: '5,200,000₫',
    colors: [
      { id: 'color1', name: ['red'], code: '#912222', image: '/images/balo_071_01.jpg' },
      { id: 'color2', name: ['blue'], code: '#52546c', image: '/images/balo_071_02.jpg' },
    ],
    details: {
        features: [
            "Cung cấp tính năng tuyệt vời và khả năng tổ chức đa năng với các ngăn chuyên biệt cho thiết bị công nghệ.",
            "Điểm nhấn với logo hình chữ thập và khiên của Victorinox, biểu tượng cho chất lượng.",
            "Dây đeo vai có đệm, có thể điều chỉnh và đệm lưng có các rãnh khí giúp đảm bảo sự thoải mái tối ưu khi sử dụng.",
            "Tích hợp đai gài cần đẩy vali tiện dụng."
        ],
        desc: ["Balo VX Sport EVO Daypack chính hãng Victorinox Thụy Sĩ giúp bạn bảo vệ các thiết bị công nghệ cá nhân một cách an toàn, đồng thời đảm bảo sự thoải mái tối đa. Được chế tác từ chất liệu polyester bền bỉ, tích hợp hệ thống luồng khí giúp bạn luôn cảm thấy thoải, mát mẻ. Mặt lưng và dây đeo vai lót đệm êm ái, mang đến trải nghiệm thoải mái khi đeo balo di chuyển đường dài. VX Sport EVO Daypack Với chiếc balo này, bạn có thể dễ dàng di chuyển, mang theo đồ đạc cần thiết cho các chuyến đi ngắn hoặc các hoạt động thể thao mà không lo lắng về sự bất tiện hay thiếu không gian lưu trữ. Bạn có thể dễ dàng sắp xếp đồ đạc khoa học, tiện dụng nhờ các ngăn chuyên dụng. Sự kết hợp hoàn hảo giữa thiết kế tinh tế và tính năng vượt trội, mang lại sự tiện lợi, thoải mái và bảo vệ cho người dùng trong mọi hoạt động."],
        paramters: [
            { capacity: "32L" },
            { volume: "1kg" },
            { dimension: "36 x 27 x 49 cm" },
            { warranty: "10 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 75,
    brand: 'ACE. - Nhật Bản',
    name: 'Balo Corty',
    category: 'balo',
    newPrice: '1,680,000₫',
    oldPrice: '2,400,000₫',
    colors: [
      { id: 'color1', name: ['blue'], code: '#0133ff', image: '/images/balo_070_01.jpg' },
      { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_070_02.jpg' },
      { id: 'color3', name: ['brown'], code: '#d4b895', image: '/images/balo_070_03.jpg' },
    ],
    details: {
        features: [
            "Kích thước nhỏ gọn lý tưởng để cất giữ đồ đạc cá nhân",
            "Ngăn chính rộng rãi, có ngăn riêng để tài liệu",
            "Ngăn phía trước tiện dụng",
            "Hai ngăn lưới bên hông để chai nước hoặc dù xếp",
            "Mặt lưng sử dụng chất liệu lưới thoáng khí"
        ],
        desc: ["Một chiếc balo kết hợp giữa kiểu dáng đơn giản với các chi tiết thể thao năng động, phù hợp để sử dụng hàng ngày hoặc đi du lịch."],
        paramters: [
            { capacity: "32L" },
            { volume: "1kg" },
            { dimension: "29 x 15 x 42 cm" },
            { warranty: "5 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 76,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Balo laptop 17" Altmont Original Deluxe',
    category: 'balo',
    newPrice: '4,200,000₫',
    oldPrice: '6,000,000₫',
    colors: [
      { id: 'color1', name: ['red'], code: '#c12c32', image: '/images/balo_069_01.jpg' },
      { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_069_02.jpg' },
      { id: 'color3', name: ['blue'], code: '#52546c', image: '/images/balo_069_03.jpg' },
    ],
    details: {
        features: [
            "Ngăn đựng dao đa năng Victorinox bằng neoprene trên dây đeo vai, giúp bạn dễ dàng lấy ra khi cần",
            "Ngăn lưới có khóa kéo, móc chìa khóa, vòng giữ bút, bảng tên, hai ngăn phụ và dây đai giữ USB",
            "Dây đeo vai và đệm lưng được cải tiến cho sự thoải mái tối đa, với hệ thống lưu thông khí thông minh, đai gài cần đẩy vali và ngăn ẩn phía sau"
        ],
        desc: ["Thiết kế thông minh và chất liệu tiên tiến đưa chiếc balo Thụy Sĩ Victorinox Altmont Original Deluxe lên một tầm cao mới. Được chế tác để bảo vệ laptop và các vật dụng cần thiết khác của bạn khi đi tàu, đạp xe quanh thành phố hoặc đi bộ đường dài, balo này kết hợp hoàn hảo giữa chức năng và sự thoải mái. Ngăn đôi tiện lợi cho phép bạn sắp xếp các thiết bị điện tử trong ba ngăn riêng biệt, lý tưởng cho những ngày bận rộn."],
        paramters: [
            { capacity: "28L" },
            { volume: "1kg" },
            { dimension: "34 x 24 x 48 cm" },
            { warranty: "5 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 77,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Balo laptop 17" Altmont Original Vertical-Zip',
    category: 'balo',
    newPrice: '4,550,000₫',
    oldPrice: '6,500,000₫',
    colors: [
      { id: 'color1', name: ['black'], code: '#000', image: '/images/balo_068_01.jpg' },
      { id: 'color2', name: ['red'], code: '#c12c32', image: '/images/balo_068_02.jpg' },
      { id: 'color3', name: ['blue'], code: '#52546c', image: '/images/balo_068_03.jpg' },
    ],
    details: {
        features: [
            "Ngăn đựng dao đa năng Victorinox bằng neoprene trên dây đeo vai, giúp bạn dễ dàng lấy ra khi cần",
            "Ngăn lưới có khóa kéo, móc chìa khóa, vòng giữ bút, bảng tên, hai ngăn phụ và dây đai giữ USB",
            "Dây đeo vai và đệm lưng được cải tiến cho sự thoải mái tối đa, với hệ thống lưu thông khí thông minh, đai gài cần đẩy vali và ngăn ẩn phía sau"
        ],
        desc: ["Thiết kế thông minh và chất liệu tiên tiến đưa chiếc balo Thụy Sĩ Victorinox Altmont Original Vertical-Zip lên một tầm cao mới. Được thiết kế để bảo vệ laptop và các vật dụng cần thiết khác của bạn khi đi tàu, đạp xe quanh thành phố hoặc đi bộ đường dài, balo này kết hợp hoàn hảo giữa chức năng và sự thoải mái. Ngăn chính rộng rãi chứa một ngăn đựng laptop có đệm và các ngăn tổ chức giúp bạn tách riêng các thiết bị, bút viết và chìa khóa."],
        paramters: [
            { capacity: "24L" },
            { volume: "1kg" },
            { dimension: "33 x 23 x 47 cm" },
            { warranty: "5 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 78,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Balo Altmont Active Rolltop',
    category: 'balo',
    newPrice: '2,050,000₫',
    oldPrice: '2,900,000₫',
    colors: [
        { id: 'color1', name: ['red'], code: '#c12c32', image: '/images/balo_067_01.jpg' },
        { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_067_02.jpg' },
    ],
    details: {
        features: [
            "Balo laptop thương hiệu Thụy Sĩ",
            "Tích hợp nhiều tính năng tiện ích",
            "Dây đeo vai và mặt lưng có đệm thoáng mát",
            "Dụng cụ mở nắp chai trên dây đeo vai"
        ],
        desc: ["Phong cách và chất lượng kết hợp trong dòng balo Victorinox Altmont Active, được thiết kế thông minh để mang lại các chức năng cần thiết cho những cuộc phiêu lưu hàng ngày của cuộc sống. Balo laptop Altmont Active Rolltop được tích hợp phong cách trailwalker như các vòng treo đồ (gear loops) và chuỗi vòng (daisy chains), dụng cụ mở nắp chai, cùng với mặt sau có đệm thoáng mát giúp thoải mái khi sử dụng. Ngăn chứa laptop an toàn có khóa kéo ẩn ở phía sau của balo, có thể truy cập nhanh khi đang di chuyển."],
        paramters: [
            { capacity: "18L" },
            { volume: "0.7kg" },
            { dimension: "29 x 17 x 28 cm" },
            { warranty: "1 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 79,
    brand: 'American Tourister - Mỹ',
    name: 'Balo Work:Out 03',
    category: 'balo',
    newPrice: '1,110,000₫',
    oldPrice: '2,200,000₫',
    colors: [
        { id: 'color1', name: ['black'], code: '#000', image: '/images/balo_065_01.jpg' },
        { id: 'color2', name: ['gray'], thumbnail: '/images/color_balo_065_02.webp', image: '/images/balo_065_02.jpg' },
    ],
    details: {
        features: [
            "Ngăn bí mật an toàn ở mặt sau balo",
            "Quai đeo vai Tractum tạo sự thoải mái",
            "Tổ chức nội thất phong phú",
            "Ngăn bảo vệ laptop và tablet",
            "2 túi ở bên hông",
            "đai gài cần đẩy vali"
        ],
        desc: ["Bộ sưu tập balo Work:Out từ thương hiệu American Tourister là một chiếc balo đa năng, giải pháp hoàn hảo cho những người có lối sống năng động. Dòng balo Work:Out với 3 thiết kế khác nhau, được tích hợp quai đeo vai Tractum chắc chắn, ngăn chứa laptop có thể khóa và các tính năng đặc biệt đáp ứng cho mọi nhu cầu tích cực của người sử dụng."],
        paramters: [
            { capacity: "30L" },
            { volume: "0.9kg" },
            { dimension: "31 x 21 x 48 cm" },
            { warranty: "1 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 80,
    brand: 'Delsey - Pháp',
    name: 'Balo laptop 15" Securflap',
    category: 'balo',
    newPrice: '2,050,000₫',
    oldPrice: '4,100,000₫',
    colors: [
        { id: 'color1', name: ['red'], code: '#990001', image: '/images/balo_064_01.jpg' },
        { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_064_02.jpg' },
        { id: 'color3', name: ['gray'], code: '#cbcbcb', image: '/images/balo_064_03.jpg' },
        { id: 'color4', name: ['orange'], code: '#ff9900', image: '/images/balo_064_04.jpg' },
        { id: 'color5', name: ['darkgray'], code: '#888888', image: '/images/balo_064_05.jpg' },
        { id: 'color6', name: ['blue'], code: '#0133ff', image: '/images/balo_064_06.jpg' },
        { id: 'color7', name: ['green'], code: '#00cc00', image: '/images/balo_064_07.jpg' },
        { id: 'color8', name: ['yellow'], code: '#ffff00', image: '/images/balo_064_08.jpg' },
    ],
    details: {
        features: [
            "Giải thưởng Red Dot Design Award Winner - Best of the best",
            "Hệ thống đóng mở miệng túi sáng tạo và cực kỳ an toàn",
            "Thiết kế hiện đại, thanh lịch",
            "Tối ưu sức chứa, có ngăn chứa laptop 15'",
            "Nội thất tổ chức phong phú, thông minh",
            "Mặt lưng và dây đeo vai có đệm êm ái, thoáng mát",
            "Ngăn bảo mật chống quét trộm RFID",
            "Tích hợp đai gài cần đẩy vali"
        ],
        desc: ["Securflap từ thương hiệu Delsey là chiếc balo cho những hành trình hàng ngày và những chuyến phiêu lưu của bạn. Ngoài hệ thống chống trộm độc đáo, balo Securflap còn có nhiều túi và ngăn an toàn được thiết kế để mang lại sự an tâm khi di chuyển. Balo Securflap được cung cấp cho bạn tất cả sự thoải mái và tính năng cần thiết, cho phép bạn dễ dàng mang theo các hành lý thiết yếu của mình mọi lúc mọi nơi!"],
        paramters: [
            { capacity: "20.78L" },
            { volume: "1kg" },
            { dimension: "31.5 x 14.5 x 45.5 cm" },
            { warranty: "2 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 81,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Balo VX Sport EVO Compact',
    category: 'balo',
    newPrice: '2,660,000₫',
    oldPrice: '3,800,000₫',
    colors: [
        { id: 'color1', name: ['blue'], code: '#2a374b', image: '/images/balo_063_01.jpg' },
        { id: 'color2', name: ['red'], code: '#761a25', image: '/images/balo_063_02.jpg' },
        { id: 'color3', name: ['black'], code: '#000', image: '/images/balo_063_03.jpg' },
    ],
    details: {
        features: [
            "Cung cấp tính năng tuyệt vời và khả năng tổ chức đa năng với các ngăn chuyên biệt cho thiết bị công nghệ.",
            "Điểm nhấn với logo hình chữ thập và khiên của Victorinox, biểu tượng cho chất lượng.",
            "Dây đeo vai có đệm, có thể điều chỉnh và đệm lưng có các rãnh khí giúp đảm bảo sự thoải mái tối ưu khi sử dụng.",
            "Tích hợp đai gài cần đẩy vali tiện dụng."
        ],
        desc: ["Balo Victorinox VX Sport EVO Compact giúp bạn bảo vệ các thiết bị công nghệ cá nhân một cách an toàn, đồng thời đảm bảo sự thoải mái tối đa. Chiếc balo này được chế tác từ chất liệu polyester bền bỉ, tích hợp hệ thống luồng khí giúp bạn luôn mát mẻ. Mặt lưng và dây đeo vai được đệm êm ái, mang đến trải nghiệm đeo thoải mái dù di chuyển đường dài. VX Sport EVO Compact sở hữu hệ thống ngăn chứa đa năng, đáp ứng mọi nhu cầu sử dụng. Bạn có thể dễ dàng sắp xếp đồ đạc khoa học, tiện lợi nhờ các ngăn chuyên dụng. Chiếc balo này là sự kết hợp hoàn hảo giữa tính năng và thiết kế, là người bạn đồng hành đáng tin cậy trên mọi hành trình của bạn."],
        paramters: [
            { capacity: "20L" },
            { volume: "0.7kg" },
            { dimension: "31 x 18 x 45 cm" },
            { warranty: "10 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 82,
    brand: 'American Tourister - Mỹ',
    name: 'Balo Trent',
    category: 'balo',
    newPrice: '950,000₫',
    oldPrice: '1,900,000₫',
    colors: [
        { id: 'color1', name: ['red'], thumbnail: '/images/color_balo_062_01.jpg', image: '/images/balo_062_01.jpg' },
        { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_062_02.jpg' },
        { id: 'color3', name: ['green'], thumbnail: '/images/color_balo_062_03.jpg', image: '/images/balo_062_03.jpg' },
    ],
    details: {
        features: [
            "Tổ chức nội thất tinh tế",
            "Có khả năng chống nước",
            "Hai ngăn bên hông tiện dụng",
            "Ngăn trước truy cập nhanh",
            "Chứa vừa laptop 15.6'",
            "Miệng túi mở rộng"
        ],
        desc: ["Balo không chỉ là một cái túi. Đó là một nơi lưu trữ di động. Và đó còn là phản ánh của sự quan tâm tới những vật dụng bạn đã lựa chọn để cất giữ trong balo. Bộ sưu tập balo Trent sử dụng hàng ngày với thiết kế hiện đại, sử dụng chất liệu thân thiện môi trường nhưng vẫn bảo đảm chống thấm nước. Tất cả các thiết bị điện tử thông minh của bạn sẽ không sợ bị ướt trong những ngày mưa. Balo Trent lấy cảm hứng ngoài trời với nhiều màu sắc đẹp mắt, thể hiện cá tính của bạn."],
        paramters: [
            { capacity: "25L" },
            { volume: "0.7kg" },
            { dimension: "30 x 18 x 49 cm" },
            { warranty: "1 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 83,
    brand: 'Victorinox - Thụy Sĩ',
    name: 'Balo laptop 15.6" Altmont Original',
    category: 'balo',
    newPrice: '2,970,000₫',
    oldPrice: '4,100,000₫',
    colors: [
        { id: 'color1', name: ['red'], code: '#761a25', image: '/images/balo_061_01.jpg' },
        { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_061_02.jpg' },
    ],
    details: {
        features: [
            "Nội thất đa năng được tối ưu hóa để giữ cho tất cả vật dụng của bạn được sắp xếp hoàn hảo và dễ dàng truy cập",
            "Dây đeo vai chắc chắn và cực kỳ thoải mái",
            "Đệm lưng êm ái và thoáng khí, tạo sự thoải mái khi sử dụng",
            "Ngăn chứa laptop 15.6'"
        ],
        desc: ["Một chiếc balo gọn nhẹ có khả năng chứa được tất cả thiết bị của bạn, cho dù bạn đang trên đường đến cuộc họp hay đang trong một chuyến phiêu lưu. Balo laptop 15.6' Altmont Original có một ngăn phía trước dễ dàng truy cập, trong khi một ngăn có đệm bảo vệ laptop của bạn an toàn. Bền bỉ, gọn nhẹ và là một chiếc balo đáp ứng mọi nhu cầu hàng ngày."],
        paramters: [
            { capacity: "22L" },
            { volume: "0.8kg" },
            { dimension: "32 x 21 x 48 cm" },
            { warranty: "10 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 84,
    brand: 'LEVEL8 - Mỹ',
    name: 'Balo laptop 15.6in LEVEL8 Moment',
    category: 'balo',
    newPrice: '2,200,000₫',
    oldPrice: '4,400,000₫',
    colors: [
        { id: 'color1', name: ['gray'], code: '#888', image: '/images/balo_060_01.jpg' },
        { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_060_02.jpg' },
    ],
    details: {
        features: [
            "Balo với chất liệu vải cao cấp bền chắc, có khả năng chống thấm nước bảo vệ hành lý bên trong",
            "Ngăn chính có sức chứa lớn, miệng túi mở rộng dễ dàng truy cập",
            "Có ngăn chứa bảo vệ laptop 15.6'",
            "Thiết kế khóa nam châm sáng tạo, an toàn nhưng vẫn dễ dàng truy cập",
            "Có ngăn phía trước và ngăn bên hông tiện dụng",
            "Đệm lưng êm ái, thoáng mát, tích hợp đai gài cần đẩy vali",
            "Nội thất làm từ chất liệu rPET bền vững với môi trường"
        ],
        paramters: [
            { capacity: "20L" },
            { volume: "1.32kg" },
            { dimension: "30 x 14 x 46.5 cm" },
            { warranty: "1 năm" },
            { material: "Polyester + PU" },
        ]
    }
  },
  {
    id: 85,
    brand: 'Samsonite Red - Mỹ',
    name: 'Balo 3ways Vickson',
    category: 'balo',
    newPrice: '4,410,000₫',
    oldPrice: '6,300,000₫',
    colors: [
        { id: 'color1', name: ['gray'], code: '#9fa190', image: '/images/balo_059_01.jpg' },
        { id: 'color2', name: ['blue'], thumbnail: '/images/color_balo_059_02.webp', image: '/images/balo_059_02.jpg' },
        { id: 'color3', name: ['black'], code: '#000', image: '/images/balo_059_03.jpg' },
    ],
    details: {
        features: [
            "Sử dụng như balo, túi tote hoặc túi đeo chéo",
            "Tối ưu hóa cho việc lưu trữ với không gian có thể mở rộng và nhiều ngăn phụ đa năng bên ngoài",
            "Ngăn bên trong có thể tháo rời, tối ưu cho việc di chuyển",
            "Ngăn đựng laptop 17' có đệm và đai cài thông minh",
            "Tích hợp đai gài cần đẩy vali tiện lợi",
            "Dây đeo vai bằng đệm lưới êm ái và đai ngực có thể điều chỉnh độ dài",
            "Bao gồm dây đeo vai có thể tháo rời",
            "Ngăn phụ bên hông để đựng chai nước hoặc ô dù",
            "Sử dụng vải CORDURA® siêu bền (trừ màu hoa văn xanh da trời)"
        ],
        desc: ["Dành cho những chuyến công tác, du lịch ngắn ngày hay đơn giản là sử dụng hàng ngày, Samsonite Red Vickson được làm từ chất liệu CORDURA® bền bỉ mang đến cho bạn nhiều lựa chọn phong cách với các kiểu dáng đa dạng từ balo 3way đến túi đeo chéo. Bảng màu đa dạng với đen, kaki thanh lích, xanh da trời tươi mới, màu hoa văn xanh da trời và be nhạt giúp bạn dễ dàng phối hợp với mọi trang phục."],
        paramters: [
            { capacity: "29L" },
            { volume: "1.23kg" },
            { dimension: "32 x 17 x 50 cm" },
            { warranty: "2 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 86,
    brand: 'American Tourister - Mỹ',
    name: 'BaBalo Vibe NXT 2A',
    category: 'balo',
    newPrice: '800,000₫',
    oldPrice: '1,600,000₫',
    colors: [
        { id: 'color1', name: ['blue'], code: '#2a59c0', image: '/images/balo_056_01.jpg' },
        { id: 'color2', name: ['black'], code: '#000', image: '/images/balo_056_02.jpg' },
    ],
    details: {
        features: [
            "Ngăn trước dễ dàng truy cập",
            "Nội thất nhiều ngăn tiện ích",
            "Ngăn bảo vệ laptop",
            "Tích hợp bao trùm che mưa",
            "Dây đeo vai có thể điều chỉnh",
            "Đệm lưng êm ái, thoáng mát"
        ],
        desc: ["Bộ sưu tập balo Vibe Nxt từ thương hiệu American Tourister cung cấp thêm sự thoải mái và thuận tiện cho người sử dụng với những tính năng hữu ích: dây đeo vai chắc chắn và có thể điều chỉnh, ngăn trước dễ dàng truy cập, ngăn bảo vệ laptop, bao trùm che mưa, đệm lưng êm ái và thoáng mát..."],
        paramters: [
            { capacity: "28L" },
            { volume: "0.7kg" },
            { dimension: "32 x 19 x 46 cm" },
            { warranty: "1 năm" },
            { material: "Polyester" },
        ]
    }
  },
  {
    id: 56,
    brand: 'American Tourister - Mỹ',
    name: 'Balo Herd 2.0',
    category: 'balo',
    newPrice: '900,000₫',
    oldPrice: '1,800,000₫',
    colors: [
      { id: 'color1', name: ['green'], thumbnail: '/images/color-balo_056_01.jpg', image: '/images/balo_056_01.jpg' },
      { id: 'color2', name: ['blue'], thumbnail: '/images/color-balo_056_02.jpg', image: '/images/balo_056_02.jpg' },
    ],
  },
  {
    id: 57,
    brand: 'American Tourister - Mỹ',
    name: 'Balo trẻ em Yoodle 2.0 - Ava Green',
    category: 'balo',
    newPrice: '550,000₫',
    oldPrice: '1,100,000₫',
    colors: [
      { id: 'color1', name: ['green'], thumbnail: '/images/color-balo_057_01.jpg', image: '/images/balo_057_01.jpg' },
    ],
  },
  {
    id: 58,
    brand: 'American Tourister - Mỹ',
    name: 'Balo trẻ em Zoodle 2.0 R',
    category: 'balo',
    newPrice: '550,000₫',
    oldPrice: '1,100,000₫',
    colors: [
      { id: 'color1', name: ['pink'], thumbnail: '/images/color-balo_058_01.jpg', image: '/images/balo_058_01.jpg' },
      { id: 'color2', name: ['blue'], thumbnail: '/images/color-balo_058_02.jpg', image: '/images/balo_058_02.jpg' },
    ],
  },
];

export default products;