export const HERO_PRODUCT = {
  id: "drip-heavyweight-hoodie",
  name: "DOWNUNDER CORE HEAVYWEIGHT HOODIE",
  tag: "PREMIUM RELEASE",
  price: 95,
  originalPrice: 125,
  kanji: "DRIP DOWNUNDER",
  subtitle: "Elevate Your Style Down Under with Unrivaled Elegance. Experience the perfect blend of sophistication and comfort.",
  image: "/guy-compression.png",
  details: "480 GSM ultra-heavyweight organic combed cotton fleece hoodie in crisp black & white contrast tone. Double-walled hood with clean geometric relaxed silhouette."
};

export const ALL_PRODUCTS = [
  {
    id: "downunder-core-hoodie",
    name: "DOWNUNDER CORE HEAVYWEIGHT HOODIE",
    price: 95,
    originalPrice: 125,
    rating: 5.0,
    reviewsCount: 248,
    badge: "BEST SELLER",
    image: "/guy-compression.png",
    gallery: [
      "/guy-compression.png",
      "/guy-cap-tank.png"
    ],
    category: "HOODIES",
    isNew: true,
    stockLeft: 8,
    description: "Signature 480 GSM ultra-heavyweight combed cotton hoodie engineered in sleek black and white contrast tone with double-walled hood.",
    features: [
      "480 GSM Heavyweight Organic Combed Cotton",
      "Double-Walled Articulated Hood Architecture",
      "Raw Australian Spirit Tonal Monochrome Crest",
      "Pre-Shrunk Premium Hand Feel & Ribbed Cuffs"
    ]
  },
  {
    id: "monochrome-oversized-tee",
    name: "MONOCHROME OVERSIDED HEAVYWEIGHT TEE",
    price: 55,
    originalPrice: 75,
    rating: 4.9,
    reviewsCount: 192,
    badge: "ESSENTIAL",
    image: "/guy-tanktop.png",
    gallery: [
      "/guy-tanktop.png",
      "/guy-cap-tank.png"
    ],
    category: "T-SHIRTS",
    isNew: true,
    stockLeft: 6,
    description: "Luxury 260 GSM combed cotton oversized T-Shirt in crisp monochromatic black & white cut, offering effortless sophistication and breathability.",
    features: [
      "260 GSM Premium Combed Ring-Spun Cotton",
      "Relaxed Drop-Shoulder Streetwear Silhouette",
      "Reinforced High-Density Seamless Neckband",
      "Minimalist Drip Downunder Contrast Label"
    ]
  },
  {
    id: "outback-contrast-hoodie",
    name: "OUTBACK MONOCHROME ZIP HOODIE",
    price: 110,
    originalPrice: 140,
    rating: 5.0,
    reviewsCount: 156,
    badge: "NEW ARRIVAL",
    image: "/guy-cap-tank.png",
    gallery: [
      "/guy-cap-tank.png",
      "/guy-compression.png"
    ],
    category: "HOODIES",
    isNew: true,
    stockLeft: 4,
    description: "Full-zip luxury fleece hoodie combining raw Australian spirit with clean monochromatic lines and custom matte hardware.",
    features: [
      "Heavyweight French Terry Cotton Construction",
      "Custom Matte Black Dual Metal Zipper",
      "Deep Ergonomic Kangaroo Front Pockets",
      "Precision Black & White Panel Detailing"
    ]
  },
  {
    id: "downunder-signature-tee",
    name: "DOWNUNDER RAW-EDGE BLACK T-SHIRT",
    price: 48,
    originalPrice: 65,
    rating: 4.9,
    reviewsCount: 134,
    badge: "TRENDING",
    image: "/guy-tanktop.png",
    gallery: [
      "/guy-tanktop.png"
    ],
    category: "T-SHIRTS",
    isNew: true,
    stockLeft: 9,
    description: "Minimalist black T-Shirt with subtle raw-edge detailing, crafted for those who demand timeless black & white elegance.",
    features: [
      "100% Organic Combed Cotton",
      "Precision Raw-Edge Sleeve & Hem Stitches",
      "Tailored Modern Fit for Everyday Wear",
      "Tagless Inner Comfort Collar"
    ]
  },
  {
    id: "urban-jungle-pullover-hoodie",
    name: "URBAN JUNGLE PULLOVER HOODIE",
    price: 105,
    originalPrice: 135,
    rating: 5.0,
    reviewsCount: 178,
    badge: "HIGH RATED",
    image: "/guy-compression.png",
    gallery: [
      "/guy-compression.png"
    ],
    category: "HOODIES",
    isNew: true,
    stockLeft: 3,
    description: "Structured streetwear hoodie crafted from high-density fleece, bridging urban utility and untamed Australian spirit.",
    features: [
      "450 GSM Heavy Fleece Interior",
      "Structured Drop-Shoulder Cut",
      "Hidden Zippered Sleeve Pocket",
      "Tonal Drip Downunder Monogram"
    ]
  },
  {
    id: "minimalist-white-logo-tee",
    name: "SILHOUETTE WHITE ESSENTIAL T-SHIRT",
    price: 52,
    originalPrice: 70,
    rating: 4.8,
    reviewsCount: 110,
    badge: "LIMITED",
    image: "/guy-tanktop.png",
    gallery: [
      "/guy-tanktop.png"
    ],
    category: "T-SHIRTS",
    isNew: false,
    stockLeft: 5,
    description: "Crisp white premium T-Shirt featuring clean geometric lines and understated black typography.",
    features: [
      "240 GSM Ultra-Soft Combed Cotton",
      "Clean Geometric Silhouette",
      "Shrink-Resistant Enzyme Wash",
      "High-Density Printed Drip Crest"
    ]
  }
];

export const NEW_ARRIVALS = ALL_PRODUCTS.slice(0, 4);

export const CATEGORIES = [
  {
    id: "t-shirts",
    title: "T-SHIRTS",
    count: 18,
    image: "/guy-tanktop.png",
    link: "/catalog/t-shirts"
  },
  {
    id: "hoodies",
    title: "HOODIES",
    count: 14,
    image: "/guy-compression.png",
    link: "/catalog/hoodies"
  },
  {
    id: "essentials",
    title: "BLACK & WHITE ESSENTIALS",
    count: 12,
    image: "/guy-cap-tank.png",
    link: "/catalog/essentials"
  }
];

export const FEATURED_COLLECTION = {
  title: "DRIP DOWNUNDER BLACK & WHITE COLLECTION",
  subtitle: "Explore our signature premium T-shirts and heavyweight hoodies crafted with timeless black & white elegance.",
  image: "/guy-compression.png",
  slides: [
    {
      title: "HEAVYWEIGHT CORE HOODIES",
      subtitle: "480 GSM ultra-heavyweight organic combed cotton hoodies in crisp black & white contrast tone.",
      image: "/guy-compression.png"
    },
    {
      title: "PREMIUM OVERSIZED T-SHIRTS",
      subtitle: "Luxury 260 GSM combed cotton oversized T-Shirts with clean geometric lines and effortless fit.",
      image: "/guy-tanktop.png"
    },
    {
      title: "RAW AUSTRALIAN SPIRIT FLEECE",
      subtitle: "French terry zip hoodies engineered for urban sophistication and raw outback beauty.",
      image: "/guy-cap-tank.png"
    }
  ]
};

export const INSTAGRAM_POSTS = [
  { id: 1, handle: "@dripdownunder", image: "/guy-compression.png", likes: "3.8k" },
  { id: 2, handle: "@dripdownunder", image: "/guy-tanktop.png", likes: "2.9k" },
  { id: 3, handle: "@dripdownunder", image: "/guy-cap-tank.png", likes: "4.1k" },
  { id: 4, handle: "@dripdownunder", image: "/guy-compression.png", likes: "5.2k" },
  { id: 5, handle: "@dripdownunder", image: "/guy-tanktop.png", likes: "2.4k" },
  { id: 6, handle: "@dripdownunder", image: "/guy-cap-tank.png", likes: "3.7k" },
];
