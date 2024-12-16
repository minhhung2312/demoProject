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
  },

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
      { id: 'color1', name: ['blue'], code: '#57a2af', image: '/images/balo_051_01.jpg' },
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
      { id: 'color1', name: ['orange'], thumbnail: '/images/color-balo_052_01.jpg', image: '/images/balo_052_01.jpg' },
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
      { id: 'color1', name: ['yellow'], code: '#fce151', image: '/images/balo_053_01.jpg' },
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
    id: 55,
    brand: 'Samsonite - Mỹ',
    name: 'Balo trẻ em Sammies Dreams - Ducky',
    category: 'balo',
    newPrice: '800,000₫',
    oldPrice: '1,600,000₫',
    colors: [
      { id: 'color1', name: ['yellow'], thumbnail: '/images/color-balo_055_01.jpg', image: '/images/balo_055_01.jpg' },
    ],
  },
];

export default products;