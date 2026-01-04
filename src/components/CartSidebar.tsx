import { useCartStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

export const CartSidebar = () => {
  const { isOpen, toggleCart, items, addItem, removeItemOne, removeItem } = useCartStore();
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-darkText/20 backdrop-blur-[2px] z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold font-playful text-darkText">Your Cart</h2>
              <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {items.length === 0 ? (
                 <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 gap-4">
                    <span className="text-6xl">🥐</span>
                    <div>
                      <p className="text-xl font-bold text-darkText">Your cart is empty</p>
                      <p className="text-sm mt-2">Looks like you haven't made your choice yet.</p>
                    </div>
                 </div>
              ) : (
                items.map(item => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 p-3 rounded-2xl bg-cream border border-transparent hover:border-pastelPink/50 transition-colors"
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover bg-white shadow-sm" />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-bold text-darkText text-lg leading-tight">{item.name}</h4>
                        <p className="text-accent font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-white rounded-lg p-1.5 shadow-sm">
                           <button onClick={() => removeItemOne(item.id)} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-accent hover:bg-red-50 rounded"><Minus className="w-3 h-3" /></button>
                           <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                           <button onClick={() => addItem(item)} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-accent hover:bg-green-50 rounded"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="p-2 text-gray-400 hover:text-red-500 bg-white/50 hover:bg-white rounded-full transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="border-t border-gray-100 pt-6 mt-4">
               <div className="flex items-center justify-between mb-6">
                 <span className="text-gray-500 font-medium">Total Amount</span>
                 <span className="text-4xl font-bold font-playful text-accent">${total.toFixed(2)}</span>
               </div>
               <motion.button 
                  whileTap={{ scale: 0.98 }}
                  disabled={items.length === 0}
                  className="w-full bg-darkText text-white py-4 rounded-2xl font-bold text-xl hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-accent/20"
               >
                 Go to Checkout
               </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
