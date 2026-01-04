import { AnimatePresence, motion } from 'framer-motion';
import { useToastStore } from '@/lib/toast';
import { CheckCircle, XCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={cn(
              "pointer-events-auto flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl border backdrop-blur-md min-w-[300px]",
              toast.type === 'success' && "bg-white/90 border-green-200 text-green-800",
              toast.type === 'error' && "bg-white/90 border-red-200 text-red-800",
              toast.type === 'info' && "bg-white/90 border-blue-200 text-blue-800"
            )}
            onClick={() => removeToast(toast.id)}
          >
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500 fill-green-100" />}
            {toast.type === 'error' && <XCircle className="w-5 h-5 text-red-500 fill-red-100" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-blue-500 fill-blue-100" />}
            
            <span className="font-bold text-sm tracking-wide">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
