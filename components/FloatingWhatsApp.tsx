import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = useCallback(() => {
    setIsVisible(true);
    if (timer) clearTimeout(timer);
    
    const newTimer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    
    setTimer(newTimer);
  }, [timer]);

  useEffect(() => {
    // Initial entry after 3 seconds
    const initialTimer = setTimeout(() => {
      showTooltip();
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      onMouseEnter={showTooltip}
      onTouchStart={showTooltip}
    >
      {/* Premium Glassmorphism Tooltip */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute right-16 bottom-1 md:relative md:right-0 md:bottom-0 mr-2 md:mr-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg py-2 px-4 shadow-2xl pointer-events-none group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-500"
          >
            <span className="text-[12px] font-medium text-slate-200 whitespace-nowrap tracking-wide">
              Agende seu Diagnóstico Agora
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Concierge Button */}
      <motion.a
        href="https://wa.me/" // Adicionar número real se disponível
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-zinc-900 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-white/5 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.5, type: "spring" }}
      >
        {/* Animated Pulse Ring */}
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20 group-hover:border-blue-500/40 transition-colors" />
        
        <MessageCircle size={28} className="text-white relative z-10" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;