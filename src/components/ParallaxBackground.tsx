import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Donut Shape */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[10%] left-[5%] w-24 h-24 border-4 border-pastelPink/40 rounded-full opacity-30"
      />
      
      {/* Floating Star */}
      <motion.div 
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[40%] right-[10%] text-pastelBlue/30"
      >
        <svg  width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>

      {/* Floating Triangle */}
      <motion.div 
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[70%] left-[15%] w-0 h-0 border-l-[30px] border-l-transparent border-t-[50px] border-t-pastelGreen/30 border-r-[30px] border-r-transparent opacity-40"
      />

       {/* Floating Circle Filled */}
       <motion.div 
        style={{ y: y1, scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.5]) }}
        className="absolute top-[20%] right-[30%] w-8 h-8 bg-warning/20 rounded-full blur-sm"
      />
    </div>
  );
};
