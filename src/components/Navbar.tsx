import { ShoppingBag, Menu } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const { toggleCart, items } = useCartStore();
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-cream/80 backdrop-blur-lg border-b border-white/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold font-playful text-accent cursor-pointer">
          Swirlzy<span className="text-darkText">.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 font-medium text-darkText">
             <a href="#home" className="hover:text-accent transition-colors">Home</a>
             <a href="#picks" className="hover:text-accent transition-colors">Top Picks</a>
             <a href="#special" className="hover:text-accent transition-colors">Special</a>
          </div>

          <button className="p-2 hover:bg-white/50 rounded-full transition-colors relative" onClick={toggleCart}>
            <ShoppingBag className="w-6 h-6 text-darkText" />
            {count > 0 && (
              <motion.span 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
              >
                {count}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
