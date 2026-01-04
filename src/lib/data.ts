import { Product } from './store';

export const HERO_PRODUCT: Product = {
  id: 1,
  name: "Berry Bliss Swirl",
  description: "A delicate fusion of wild berries and vanilla bean cream, topped with edible gold leaf.",
  price: 8.50,
  image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=800&auto=format&fit=crop", // Delicious berry cake
  rating: 4.9
}

export const POPULAR_PRODUCTS: Product[] = [
  {
    id: 2,
    name: "Matcha Moon Cake",
    description: "Premium matcha infused sponge with red bean paste center.",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop", // Matcha cake
    rating: 4.8
  },
  {
    id: 3,
    name: "Lemon Drizzle Donut",
    description: "Zesty lemon glaze on a fluffy yeast donut.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1551024601-bec0273e5a32?q=80&w=800&auto=format&fit=crop", // Donuts
    rating: 4.7
  },
  {
    id: 4,
    name: "Choco-Hazelnut Tart",
    description: "Rich dark chocolate ganache with roasted hazelnuts.",
    price: 7.25,
    image: "https://images.unsplash.com/photo-1563729768640-d091da3c3318?q=80&w=800&auto=format&fit=crop",
    rating: 4.9
  },
  {
    id: 6,
    name: "Red Velvet Cloud",
    description: "Airy red velvet sponge with a light cream cheese frosting cloud.",
    price: 5.75,
    image: "https://images.unsplash.com/photo-1586788680434-30d32443d516?q=80&w=800&auto=format&fit=crop",
    rating: 4.6
  },
  {
    id: 7,
    name: "Blueberry Scone",
    description: "Buttery, crumbly scones packed with fresh organic blueberries.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop",
    rating: 4.5
  },
  {
    id: 8,
    name: "Salted Caramel Macaron",
    description: "Delicate french almond cookies with a gooey salted caramel center.",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop",
    rating: 4.8
  }
];

export const DAILY_SPECIAL: Product = {
  id: 5,
  name: "Rose & Pistachio Croissant",
  description: "Buttery layers with rosewater essence and crushed pistachios. Limited availability.",
  price: 5.50,
  image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop", // Croissant
  rating: 5.0
}
