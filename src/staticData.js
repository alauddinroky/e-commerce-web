import image1 from "../src/assets/image1.png";
import iphone from "../src/assets/iphone.jpg";
import samsung from "../src/assets/samsung.jpg";
import redmi from "../src/assets/redmi.jpg";
const data = [
  {
    name: "Apple iPhone 15 Pro",
    image: iphone,
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
    image: samsung,
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
    image: image1,
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
  {
    name: "OnePlus 12",
    image: image1,
    id: 4,
    price: "749",
    description:
      "The OnePlus 12 delivers exceptional performance with its Snapdragon 8 Gen 3 chipset and a Fluid AMOLED display. It’s designed to offer a fast and smooth user experience.",
    features: [
      "Snapdragon 8 Gen 3 processor",
      "6.7-inch Fluid AMOLED display",
      "50MP triple camera system",
      "120Hz refresh rate",
      "Fast charging with 100W Warp Charge",
    ],
    colors: ["eternal green", "volcanic gray", "glacial blue"],
    tags: ["performance", "fast charging", "120Hz", "camera"],
    category: "Smartphones",
  },
  {
    name: "Xiaomi Mi 13 Pro",
    image: redmi,
    id: 5,
    price: "849",
    description:
      "The Xiaomi Mi 13 Pro combines powerful hardware with a premium design. It features a high-resolution display and a versatile camera setup for capturing stunning photos and videos.",
    features: [
      "Snapdragon 8 Gen 2 processor",
      "6.73-inch AMOLED display with 120Hz refresh rate",
      "50MP triple camera system with Leica optics",
      "5000mAh battery with 120W fast charging",
      "MIUI 14 based on Android 13",
    ],
    colors: ["black", "white", "green"],
    tags: ["camera", "high-resolution", "fast charging", "premium"],
    category: "Smartphones",
  },
];

export default data;
