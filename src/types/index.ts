export interface Shop {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo: string;
  coverImage: string;
  owner: User;
  rating: number;
  totalSales: number;
  items: Item[];
  createdAt: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: ItemCategory;
  material: string;
  dimensions: string;
  inStock: boolean;
  shop: Shop;
  rating: number;
  reviews: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  shop?: Shop;
}

export type ItemCategory =
  | "figurines"
  | "home-decor"
  | "gadgets"
  | "jewelry"
  | "art"
  | "toys"
  | "functional"
  | "custom"
  | "other";

export interface CartItem {
  item: Item;
  quantity: number;
}

export const CATEGORIES: { value: ItemCategory; label: string; icon: string }[] = [
  { value: "figurines", label: "Figurines", icon: "🎭" },
  { value: "home-decor", label: "Home Decor", icon: "🏠" },
  { value: "gadgets", label: "Gadgets", icon: "⚙️" },
  { value: "jewelry", label: "Jewelry", icon: "💍" },
  { value: "art", label: "Art", icon: "🎨" },
  { value: "toys", label: "Toys", icon: "🧸" },
  { value: "functional", label: "Functional", icon: "🔧" },
  { value: "custom", label: "Custom Orders", icon: "✨" },
  { value: "other", label: "Other", icon: "📦" },
];
