export const SITE_CONFIG = {
  name: "WeebWear",
  description: "Your premier destination for anime-inspired fashion.",
  url: "https://weebwear.com",
  ogImage: "/images/og.jpg",
  links: {
    twitter: "https://twitter.com/weebwear",
    instagram: "https://instagram.com/weebwear",
    github: "https://github.com/weebwear",
  },
};

export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
  ],
  categories: [
    {
      name: "T-Shirts",
      href: "/shop/t-shirts",
      image: "/images/categories/t-shirts.jpg",
    },
    {
      name: "Hoodies",
      href: "/shop/hoodies",
      image: "/images/categories/hoodies.jpg",
    },
    {
      name: "Accessories",
      href: "/shop/accessories",
      image: "/images/categories/accessories.jpg",
    },
  ],
  footer: {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    support: [
      { name: "Contact", href: "/contact" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
};

export const PRODUCT_CATEGORIES = [
  {
    id: "anime-series",
    name: "Anime Series",
    subcategories: [
      { id: "demon-slayer", name: "Demon Slayer" },
      { id: "one-piece", name: "One Piece" },
      { id: "attack-on-titan", name: "Attack on Titan" },
      { id: "naruto", name: "Naruto" },
      { id: "my-hero-academia", name: "My Hero Academia" },
    ],
  },
  {
    id: "clothing-type",
    name: "Clothing Type",
    subcategories: [
      { id: "t-shirts", name: "T-Shirts" },
      { id: "hoodies", name: "Hoodies" },
      { id: "sweatshirts", name: "Sweatshirts" },
      { id: "jackets", name: "Jackets" },
      { id: "accessories", name: "Accessories" },
    ],
  },
  {
    id: "collections",
    name: "Collections",
    subcategories: [
      { id: "new-arrivals", name: "New Arrivals" },
      { id: "best-sellers", name: "Best Sellers" },
      { id: "limited-edition", name: "Limited Edition" },
      { id: "collaborations", name: "Collaborations" },
    ],
  },
];

export const SORT_OPTIONS = [
  { name: "Most Popular", value: "popular" },
  { name: "Newest", value: "newest" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
];

export const SIZES = [
  { name: "XXS", value: "xxs" },
  { name: "XS", value: "xs" },
  { name: "S", value: "s" },
  { name: "M", value: "m" },
  { name: "L", value: "l" },
  { name: "XL", value: "xl" },
  { name: "XXL", value: "xxl" },
];

export const SHIPPING_METHODS = [
  {
    id: "standard",
    name: "Standard Shipping",
    price: 4.99,
    estimatedDays: "3-5",
  },
  {
    id: "express",
    name: "Express Shipping",
    price: 14.99,
    estimatedDays: "1-2",
  },
];

export const PAYMENT_METHODS = {
  cards: ["visa", "mastercard", "amex"],
  digital: ["paypal", "apple-pay", "google-pay"],
};

export const ERROR_MESSAGES = {
  required: "This field is required",
  email: "Please enter a valid email address",
  password: "Password must be at least 8 characters",
  passwordMatch: "Passwords do not match",
  invalidCredentials: "Invalid email or password",
};

export const SUCCESS_MESSAGES = {
  accountCreated: "Your account has been created successfully",
  passwordReset: "Password reset email has been sent",
  orderPlaced: "Your order has been placed successfully",
  contactSubmitted: "Thank you for your message. We will get back to you soon",
};

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
