import image1 from "../src/assets/image1.png";
import iphone from "../src/assets/iphone.jpg";
import samsung from "../src/assets/samsung.jpg";
import redmi from "../src/assets/redmi.jpg";

const data = [
  {
    name: "Apple iPhone 15 Pro",
    image:['https://www.apple.com/v/iphone-16-pro/f/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_large_2x.jpg','https://www.apple.com/v/iphone-16-pro/f/images/overview/product-viewer/iphone-pro/desert_titanium__gcg1i94xakuq_large_2x.jpg', 'https://www.apple.com/v/iphone-16-pro/f/images/overview/product-viewer/iphone-pro/natural_titanium__22ovjg0i0huy_large_2x.jpg']
    ,
    id: 1,
    price: "999",
    description:
      "The Apple iPhone 15 Pro features a sleek design, cutting-edge technology, and enhanced performance. With its A17 Bionic chip and ProMotion display, it offers a superior user experience.",
    features: [
      "A17 Bionic chip with 6-core CPU",
      "6.1-inch Super Retina XDR display",
      "48MP main camera with advanced image stabilization",
      "5G connectivity",
      "Ceramic Shield front cover",
    ],
    colors: ["black", "silver", "deep purple", "gold"],
    tags: ["premium", "performance", "5G", "camera"],
    category: "Smartphones",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    image: [
      "https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-carousel-exclusive.jpg?imbypass=true",
      "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/1920x920.jpg?imbypass=true",
      "https://7news1.com/wp-content/uploads/2024/01/59-3.webp",
    ],
    id: 2,
    price: "1199",
    description:
      "The Samsung Galaxy S24 Ultra is designed for those who demand high performance and advanced features. It comes with a powerful Snapdragon 8 Gen 2 processor and a versatile camera system.",
    features: [
      "Snapdragon 8 Gen 2 processor",
      "6.8-inch Dynamic AMOLED 2X display",
      "200MP main camera with Space Zoom",
      "12GB RAM and 512GB storage",
      "S Pen support",
    ],
    colors: ["phantom black", "phantom silver", "burgundy", "green"],
    tags: ["high-end", "camera", "S Pen", "5G"],
    category: "Smartphones",
  },
  {
    name: "Google Pixel 8 Pro",
    image: [
      "https://images.expertreviews.co.uk/wp-content/uploads/2023/11/Google_Pixel_8_Pro_7-3.jpg",
      "https://www.androidauthority.com/wp-content/uploads/2023/10/google-pixel-8-pro-vs-pixel-6-pro-side-by-side.jpg",
      "https://www.androidauthority.com/wp-content/uploads/2023/10/google-pixel-8-pro-color-options-1000w-563h.jpg",
    ],
    id: 3,
    price: "899",
    description:
      "The Google Pixel 8 Pro offers a clean Android experience with the latest Google innovations. It features a stunning OLED display and advanced AI-driven photography capabilities.",
    features: [
      "Google Tensor G3 processor",
      "6.7-inch LTPO OLED display",
      "50MP main camera with AI enhancements",
      "5G support",
      "Android 14 with exclusive Google features",
    ],
    colors: ["charcoal", "sky", "porcelain"],
    tags: ["AI", "Android", "camera", "premium"],
    category: "Smartphones",
  },
];
export default data