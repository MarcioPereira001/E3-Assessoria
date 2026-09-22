import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const RandomParticle: React.FC<{ delay: number }> = ({ delay }) => {
  // Random starting positions
  const randomTop = Math.random() * 100;
  const randomLeft = Math.random() * 100;
  const size = Math.random() * 4 + 1; // 1px to 5px
  const duration = Math.random() * 10 + 10; // 10s to 20s

  return (
    <motion.div
      className="absolute rounded-full bg-neon-blue blur-[1px]"
      style={{
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 50 - 25, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
    />
  );
};

const BackgroundEffects: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<SVGPathElement>(null);
  const [pathString, setPathString] = useState("");
  const [docHeight, setDocHeight] = useState(0);

  // Smooth out the scroll progress for drawing the line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the pathLength based on scroll to "draw" the line
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Dynamically calculate the S-curve based on document height
    const updatePath = () => {
      const width = window.innerWidth;
      const height = document.body.scrollHeight;
      setDocHeight(height);

      const centerX = width / 2;
      const amplitude = Math.min(width * 0.4, 300); // Max 300px sway
      const frequency = 800; // How often it curves vertically
      
      let d = `M ${centerX} 0 `;
      
      // Generate curve points
      for (let y = 0; y < height; y += frequency) {
        const nextY = Math.min(y + frequency, height);
        // Randomize direction slightly or keep it a regular sine wave
        const side = (y / frequency) % 2 === 0 ? 1 : -1; 
        const controlX = centerX + (amplitude * side);
        
        d += `Q ${controlX} ${y + frequency / 2}, ${centerX} ${nextY} `;
      }

      setPathString(d);
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    // Observer to update when content changes size
    const observer = new ResizeObserver(updatePath);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('resize', updatePath);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none h-full">
      {/* 1. Base Gradient Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black opacity-40" />
      
      {/* 2. Grid Pattern (Subtle Tech Feel) */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05]" style={{ height: docHeight }} />

      {/* 3. Random Floating Neon Particles */}
      <div className="fixed inset-0">
        {[...Array(20)].map((_, i) => (
          <RandomParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* 4. Moving Light Blobs (Spotlights) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -150, 100, 0], y: [0, 100, -50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* 5. THE SNAKE (The Neon Line) */}
      {/* z-index 30 + screen blend mode allows it to 'light up' text it passes over */}
      <svg 
        className="absolute top-0 left-0 w-full z-30 pointer-events-none mix-blend-screen"
        style={{ height: docHeight }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2d8cff" stopOpacity="0" />
            <stop offset="10%" stopColor="#2d8cff" stopOpacity="1" />
            <stop offset="90%" stopColor="#2d8cff" stopOpacity="1" />
            <stop offset="100%" stopColor="#2d8cff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* The faint trace line (always visible) */}
        <path 
          d={pathString}
          fill="none"
          stroke="#1e293b"
          strokeWidth="2"
          strokeDasharray="10 10"
          className="opacity-30"
        />

        {/* The Active Neon Beam */}
        <motion.path
          ref={pathRef}
          d={pathString}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#neon-glow)"
          style={{ pathLength: pathLength }}
        />
      </svg>
    </div>
  );
};

export default BackgroundEffects;