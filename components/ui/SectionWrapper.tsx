import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../../types';

const SectionWrapper: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`relative py-16 md:py-32 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-5 md:px-4 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;