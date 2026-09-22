import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  text, 
  onClick, 
  fullWidth = false, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "relative px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-500 group overflow-hidden rounded-lg shadow-lg";
  
  // Luxury Blue Gradient with glass effect on hover
  const primaryStyles = "bg-gradient-to-br from-[#0051FF] via-[#2D8CFF] to-[#00A3FF] text-white border-none hover:shadow-[0_10px_40px_rgba(45,140,255,0.4)] hover:translate-y-[-2px]";
  
  const secondaryStyles = "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:translate-y-[-2px]";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      )}
    </motion.button>
  );
};

export default NeonButton;