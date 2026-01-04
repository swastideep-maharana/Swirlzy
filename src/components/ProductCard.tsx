import { useRef } from 'react';
import { Product, useCartStore } from '@/lib/store';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plus, Star } from 'lucide-react';

export const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCartStore(s => s.addItem);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-white rounded-3xl p-4 shadow-soft hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4 group border border-transparent hover:border-pastelPink/30 relative z-0"
    >
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream shadow-inner"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 text-xs font-bold text-darkText shadow-sm">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>
      </div>
      
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="flex-1 flex flex-col gap-2"
      >
        <h3 className="font-bold text-xl text-darkText font-playful tracking-tight">{product.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">{product.description}</p>
      </div>

      <div 
        style={{ transform: "translateZ(40px)" }}
        className="flex items-center justify-between pt-2"
      >
        <span className="font-playful text-2xl text-accent font-bold">${product.price.toFixed(2)}</span>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            addItem(product);
          }}
          className="bg-darkText text-white p-3 rounded-full hover:bg-accent transition-colors shadow-lg flex items-center justify-center group/btn hover:shadow-accent/40"
        >
          <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
};
