import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { CartSidebar } from '@/components/CartSidebar';
import { HERO_PRODUCT, POPULAR_PRODUCTS, DAILY_SPECIAL } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Heart } from 'lucide-react';

import { ToastContainer } from '@/components/ToastContainer';
import { ParallaxBackground } from '@/components/ParallaxBackground';
import { useToastStore } from '@/lib/toast';

function App() {
  const addItem = useCartStore(s => s.addItem);
  const addToast = useToastStore(s => s.addToast);

  const handleAddToCart = (product: any) => {
    addItem(product);
    addToast(`Added ${product.name} to your cart! 🥐`);
  };

  return (
    <div className="min-h-screen bg-cream/30 selection:bg-accent selection:text-white overflow-x-hidden bg-noise">
      <ParallaxBackground />
      <ToastContainer />
      <Navbar />
      <CartSidebar />
      
      {/* Hero Section */}
      <section id="home" className="pt-36 pb-20 px-6 min-h-screen flex items-center justify-center relative">
         {/* Background blobs */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pastelPink/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pastelBlue/30 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
            >
               <motion.span 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="inline-block px-4 py-2 rounded-full bg-white text-accent font-bold text-sm mb-6 shadow-sm tracking-wide uppercase border border-accent/10"
               >
                  ✨ Handmade with Passion
               </motion.span>
               <h1 className="text-6xl md:text-8xl font-playful text-darkText leading-[0.95] mb-8">
                  Life is <span className="text-accent">Sweet</span>,<br/>Eat a <span className="text-secondaryAccent">Treat</span>.
               </h1>
               <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
                  Indulge in our artisanal selection of pastries, cakes, and sweets. Baked fresh daily with love and the finest ingredients for you.
               </p>
                <div className="flex flex-col gap-8">
                   <div className="flex flex-wrap gap-4">
                      <button 
                         className="bg-accent text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-accent/40 hover:scale-[1.02] transition-all flex items-center gap-2 group active:scale-[0.98]"
                      >
                         Order Now <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <a 
                         href="#picks"
                         className="bg-white text-darkText px-10 py-5 rounded-full font-bold text-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all border border-gray-100 active:scale-[0.98]"
                      >
                         View Menu
                      </a>
                   </div>
                   
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="flex items-center gap-4"
                   >
                     <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                          <img 
                            key={i}
                            src={`https://i.pravatar.cc/100?img=${i+20}`} 
                            className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm" 
                            alt="Customer"
                          />
                        ))}
                     </div>
                     <div className="flex flex-col">
                       <div className="flex items-center gap-1">
                         {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                         <span className="font-bold text-darkText ml-1">4.8/5</span>
                       </div>
                       <p className="text-sm text-gray-500 font-medium">Join 2,000+ happy customers</p>
                     </div>
                   </motion.div>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:h-full flex items-center justify-center p-8"
             >
                <div className="relative z-10 w-full max-w-lg">
                   <div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-6 border border-white/60 shadow-soft">
                     <img 
                       src={HERO_PRODUCT.image} 
                       alt="Hero Cake" 
                       className="w-full aspect-square object-cover rounded-[2rem] shadow-lg"
                     />
                   </div>
                   
                   <div 
                     className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-4 max-w-xs cursor-pointer hover:scale-[1.02] transition-transform"
                     onClick={() => handleAddToCart(HERO_PRODUCT)}
                   >
                      <div className="bg-yellow-100 p-3.5 rounded-full">
                         <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                      </div>
                      <div className="pr-4">
                         <p className="font-bold text-darkText text-lg leading-tight">Best Seller</p>
                         <p className="text-sm text-gray-500">Berry Bliss Swirl</p>
                      </div>
                      <div className="bg-darkText text-white w-10 h-10 rounded-full flex items-center justify-center ml-auto">
                         <ArrowRight className="w-5 h-5 -rotate-45" />
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
       </section>

       {/* Top Picks */}
       <section id="picks" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl font-playful text-darkText mb-4"
                >
                  Top Picks
                </motion.h2>
                <p className="text-gray-500 text-lg">Customer favorites that always disappear first!</p>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {POPULAR_PRODUCTS.map((product) => (
                   <div key={product.id}>
                      <ProductCard product={product} />
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* Daily Special */}
       <section id="special" className="py-24 px-6 relative overflow-hidden my-12">
          {/* Decorative bg */}
          <div className="absolute inset-x-0 top-0 bottom-0 bg-secondaryAccent/5 -skew-y-3 z-0" />
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
             <div className="flex-1 order-2 md:order-1">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                   <span className="text-accent font-bold tracking-wider uppercase mb-2 block">✨ Only Today</span>
                   <h2 className="text-5xl md:text-6xl font-playful text-darkText mb-6">{DAILY_SPECIAL.name}</h2>
                   <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                      {DAILY_SPECIAL.description}
                   </p>
                   <div className="flex items-center gap-6 mb-10">
                      <div className="text-5xl font-playful text-darkText font-bold">${DAILY_SPECIAL.price.toFixed(2)}</div>
                      <div className="h-12 w-px bg-gray-300" />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1 text-yellow-400">
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <span className="text-sm text-gray-400 font-bold">5.0 Rating</span>
                      </div>
                   </div>
                   <button 
                      onClick={() => handleAddToCart(DAILY_SPECIAL)}
                      className="bg-darkText text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-secondaryAccent hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-secondaryAccent/30 flex items-center gap-3"
                   >
                      Add to Cart <Heart className="w-6 h-6 fill-current" />
                   </button>
                </motion.div>
             </div>
             
             <div className="flex-1 order-1 md:order-2 relative w-full flex justify-center">
                <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   className="relative z-10 w-full max-w-md"
                >
                   <div className="bg-white p-4 rounded-[3rem] shadow-soft">
                      <img src={DAILY_SPECIAL.image} alt="Special" className="w-full aspect-square object-cover rounded-[2.5rem]" />
                   </div>
                   <div 
                     className="absolute -top-8 -right-4 bg-white/90 backdrop-blur rounded-full p-4 shadow-xl text-accent"
                   >
                      <Heart className="w-10 h-10 fill-accent" />
                   </div>
                </motion.div>
                <div className="absolute inset-0 bg-secondaryAccent rounded-full blur-[150px] opacity-30 transform translate-x-10 translate-y-10 -z-10" />
             </div>
          </div>
       </section>

       {/* Ratings */}
       <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-5xl font-playful text-darkText mb-16">Swirlzy Love</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { text: "Fresh, delicious & fast delivery. The best experience!", name: "Alice M.", color: "bg-pastelPink/20" },
                   { text: "Best desserts I’ve tried online. The quality is unmatched.", name: "John D.", color: "bg-pastelGreen/20" },
                   { text: "My kids loved the donuts. We will definitely order again.", name: "Emily R.", color: "bg-pastelBlue/20" }
                 ].map((review, i) => (
                    <div 
                      key={i}
                      className={`${review.color} p-8 rounded-[2rem] text-left relative hover:shadow-lg transition-all`}
                    >
                       <div className="flex gap-1 text-yellow-500 mb-6">
                          {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                       </div>
                       <p className="text-darkText/80 mb-8 text-xl italic font-medium">"{review.text}"</p>
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-full overflow-hidden p-1 shadow-sm">
                             <img 
                                 src={[
                                   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80", 
                                   "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
                                   "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
                                 ][i]} 
                                 alt="User" 
                                 className="w-full h-full rounded-full object-cover" 
                              />
                          </div>
                          <div>
                             <p className="font-bold text-darkText text-lg">{review.name}</p>
                             <p className="text-sm text-gray-500 font-medium">Verified Sweet Tooth</p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
          </div>
       </section>

       <footer className="py-12 bg-darkText text-white text-center rounded-t-[3rem] mx-2">
          <p className="font-playful text-3xl mb-4">Swirlzy<span className="text-accent">.</span></p>
          <div className="flex justify-center gap-6 mb-8 text-white/60">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <p className="text-white/40">© 2026 Swirlzy Bakery. Baked with love.</p>
       </footer>
    </div>
  )
}

export default App
