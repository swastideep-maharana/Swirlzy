import { Product, useCartStore } from '@/lib/store';
import { useToastStore } from '@/lib/toast';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';

export const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCartStore(s => s.addItem);
  const addToast = useToastStore(s => s.addToast);

  return (
    <div
      className="bg-white rounded-3xl p-4 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col gap-4 group border border-transparent hover:border-pastelPink/30 relative z-0"
    >
      <div 
        className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream shadow-inner"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 text-xs font-bold text-darkText shadow-sm">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>
      </div>
      
      <div 
        className="flex-1 flex flex-col gap-2"
      >
        <h3 className="font-bold text-xl text-darkText font-playful tracking-tight">{product.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">{product.description}</p>
      </div>

      <div 
        className="flex items-center justify-between pt-2"
      >
        <span className="font-playful text-2xl text-accent font-bold">${product.price.toFixed(2)}</span>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            addItem(product);
            addToast(`Added ${product.name} to your cart! 🍩`);
          }}
          className="bg-darkText text-white p-3 rounded-full hover:bg-accent transition-colors shadow-lg flex items-center justify-center group/btn hover:shadow-accent/40"
        >
          <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
};
