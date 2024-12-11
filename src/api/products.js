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
        { id: 'color1', name: ['dark-blue'], code: '#2E545C', image: '/images/item-product-trend2.1.webp' },
        { id: 'color2', name: ['blue'], code: '#3121f1', image: '/images/item-product-trend2.2.webp' },
        { id: 'color3', name: ['black'], code: '#000', image: '/images/item-product-trend2.3.webp' },
      ],
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
        { id: 'color2', name: ['dark-gray'], code: '#777777', image: '/images/item-product-trend4.2.webp' },
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
        { id: 'color3', name: ['dark-green'], code: '#1d2e2b', image: '/images/item-product-trend5.3.webp' },
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
        { id: 'color1', name: ['currant'], thumbnail: '/images/color-item-love2.1.webp', image: '/images/item-love2.1.webp' },
        { id: 'color2', name: ['dark-gray'], thumbnail: '/images/color-item-love2.2.jpg', image: '/images/item-love2.2.webp' },
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
        { id: 'color2', name: ['dark-blue'], code: '#375675', image: '/images/item-love5.2.webp' },
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
            { id: 'color3', name: ['dark-blue'], thumbnail: '/images/color-vali-top3.3.webp', image: '/images/vali-top3.3.webp' },
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
        category: 'bag',
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
        category: 'bag',
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
        category: 'bag',
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
        category: 'bag',
        newPrice: '650,000₫',
        oldPrice: '1,300,000₫',
        isTopBag: true,
        colors: [
            { id: 'color1', name: ['dark-blue'], code: '#22477a', image: '/images/bag-top4.1.webp' },
            { id: 'color2', name: ['black'], code: '#000', image: '/images/bag-top4.2.webp' },
            { id: 'color3', name: ['gray'], code: '#807775', image: '/images/bag-top4.3.webp' },
        ],
    },
    {
        id: 30,
        brand: 'AMERICAN TOURISTER',
        name: 'Túi đeo hông Orbit ASR',
        category: 'bag',
        newPrice: '650,000₫',
        oldPrice: '1,300,000₫',
        isTopBag: true,
        colors: [
            { id: 'color1', name: ['gray'], code: '#adb7cb', image: '/images/bag-top5.1.webp' },
            { id: 'color2', name: ['yellow'], code: '#c99657', image: '/images/bag-top5.2.webp' },
            { id: 'color3', name: ['black'], code: '#000', image: '/images/bag-top5.3.webp' },
        ],
    }
  ];
  
  export default products;