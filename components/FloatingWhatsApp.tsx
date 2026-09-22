import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/" // Add actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
    >
      <MessageCircle size={28} fill="white" className="text-green-500" />
      <span className="absolute right-full mr-4 bg-brand-midnight text-white px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block shadow-xl">
        CONSULTORIA AO VIVO
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;