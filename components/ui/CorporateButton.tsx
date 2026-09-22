import React from 'react';
import { motion } from 'framer-motion';

interface CorporateButtonProps {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CorporateButton: React.FC<CorporateButtonProps> = ({ 
  text, 
  onClick, 
  fullWidth = false, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "relative px-8 py-4 font-bold tracking-tight text-sm transition-all duration-300 rounded-lg shadow-sm flex items-center justify-center gap-2";
  
  const primaryStyles = "bg-brand-royal text-white hover:bg-brand-accent hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0";
  
  const secondaryStyles = "bg-white text-brand-midnight border border-slate-200 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0";

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default CorporateButton;
