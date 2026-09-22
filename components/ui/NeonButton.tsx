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
  const baseStyles = "relative px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 group overflow-hidden rounded-sm";
  
  // Updated to Zoom Blue with stronger glow
  const primaryStyles = "bg-transparent text-neon-blue border border-neon-blue hover:bg-neon-blue hover:text-white hover:shadow-[0_0_30px_rgba(45,140,255,0.8)]";
  
  const secondaryStyles = "bg-white text-black border border-white hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="relative z-10">{text}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
      )}
    </motion.button>
  );
};

export default NeonButton;