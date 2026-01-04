import { Product } from './store';

export const HERO_PRODUCT: Product = {
  id: 1,
  name: "Berry Bliss Swirl",
  description: "A delicate fusion of wild berries and vanilla bean cream, topped with edible gold leaf.",
  price: 8.50,
  image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop", // Berry Cake
  rating: 4.9
}

export const POPULAR_PRODUCTS: Product[] = [
  {
    id: 2,
    name: "Matcha Moon Cake",
    description: "Premium matcha infused sponge with red bean paste center.",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?q=80&w=800&auto=format&fit=crop", // Matcha
    rating: 4.8
  },
  {
    id: 3,
    name: "Lemon Drizzle Donut",
    description: "Zesty lemon glaze on a fluffy yeast donut.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop", // Safe Donut
    rating: 4.7
  },
  {
    id: 4,
    name: "Choco-Hazelnut Tart",
    description: "Rich dark chocolate ganache with roasted hazelnuts.",
    price: 7.25,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop", // Reusing the known-good 'hero' style image for reliability temporarily to verify load, or a very close variant.
    rating: 4.9
  },
  {
    id: 6,
    name: "Red Velvet Cloud",
    description: "Airy red velvet sponge with a light cream cheese frosting cloud.",
    price: 5.75,
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop", // Red Velvet Slice
    rating: 4.6
  },
  {
    id: 7,
    name: "Blueberry Scone",
    description: "Buttery, crumbly scones packed with fresh organic blueberries.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1509456592530-5d38e33f3fdd?q=80&w=800&auto=format&fit=crop", // Scones
    rating: 4.5
  },
  {
    id: 8,
    name: "Salted Caramel Macaron",
    description: "Delicate french almond cookies with a gooey salted caramel center.",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop", // Macarons
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
