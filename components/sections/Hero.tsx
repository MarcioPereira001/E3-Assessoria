import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import NeonButton from '../ui/NeonButton';
import { ArrowDown, TrendingUp } from 'lucide-react';

const Counter: React.FC<{ value: number; prefix?: string; suffix?: string; decimals?: number }> = ({ value, prefix = "", suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });
  
  const springConfig = { damping: 30, stiffness: 100 };
  const rawValue = useTransform(scrollYProgress, [0, 1], [0, value]);
  const animatedValue = useSpring(rawValue, springConfig);
  
  const [displayValue, setDisplayValue] = React.useState("0");

  React.useEffect(() => {
    return animatedValue.on("change", (latest) => {
      setDisplayValue(latest.toFixed(decimals));
    });
  }, [animatedValue, decimals]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-12 lg:pt-16 overflow-hidden">
      {/* Intense spotlight behind text/image */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          
          {/* Subject Image with Effects - Now at the background of the text or tightly above */}
          <div className="relative w-full flex items-end justify-center -mb-20 lg:-mb-32">
             {/* Glow behind the person */}
             <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 lg:w-[500px] h-64 lg:h-[500px] bg-neon-blue/15 rounded-full blur-[100px] pointer-events-none" />
             
             <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 w-full flex items-end justify-center"
             >
                <div className="relative w-full max-w-[280px] md:max-w-md lg:max-w-lg mx-auto">
                    {/* The Image with Gradient Mask and Shadows */}
                    <img 
                      src="https://www.image2url.com/r2/default/images/1789766622213-b212deec-5b43-464b-8485-af659a6a7b4c.png" 
                      alt="Subject"
                      className="w-full h-auto object-contain relative z-10 brightness-[1.1] contrast-[1.1] saturate-[0.8]"
                      style={{
                        maskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, black 45%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, black 45%, black 100%)',
                        filter: 'drop-shadow(0 0 40px rgba(0, 242, 255, 0.2)) hue-rotate(10deg)',
                      }}
                    />
                    
                    {/* Futuristic Overlays (Scanline & HUD) */}
                    <div className="absolute top-1/3 -right-4 lg:-right-12 z-20 bg-black/60 backdrop-blur-md border border-neon-blue/30 p-2 lg:p-3 rounded-none font-mono text-[7px] lg:text-[9px] text-neon-blue tracking-tighter animate-pulse shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                        <div className="flex flex-col gap-1 text-right">
                            <span className="text-white opacity-50 underline decoration-neon-blue/50">MÉTRICAS_AO_VIVO</span>
                            <span>Setor_Vendas: <span className="text-white">+83%</span></span>
                            <span>Conversão_LTV: <span className="text-white">MAX</span></span>
                        </div>
                    </div>

                    <div className="absolute top-1/4 -left-4 lg:-left-12 z-20 bg-black/60 backdrop-blur-md border border-neon-blue/30 p-2 lg:p-3 rounded-none font-mono text-[7px] lg:text-[9px] text-white/50 tracking-tighter animate-pulse">
                        <div className="flex flex-col gap-1 text-left">
                            <span className="text-neon-blue">ESTRUTURAÇÃO: ATIVA</span>
                            <span>MARGEM_LUCRO: <span className="text-neon-blue">+42%</span></span>
                        </div>
                    </div>
                </div>
             </motion.div>
          </div>

          {/* Copy - Starting near the waist due to negative margins on image container */}
          <div className="relative z-20 mt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue mb-6 lg:mb-8 backdrop-blur-md shadow-[0_0_10px_rgba(0,242,255,0.05)] font-mono text-[8px] lg:text-[10px] tracking-[0.2em]"
            >
              <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-neon-blue animate-pulse" />
              SISTEMA DE ESCALA: 100%
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-orbitron text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight lg:leading-none tracking-tighter"
            >
              PROTOCOLO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue/50 text-glow">ESCALA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm md:text-xl text-slate-400 max-w-2xl mb-8 lg:mb-12 font-light leading-relaxed mx-auto"
            >
              Implemente o sistema de <span className="text-white font-semibold italic">Engenharia de Aquisição</span> que substitui a sorte por processos matemáticos em sua <span className="text-white">Empresa</span>. O marketing digital amador morreu. Bem-vindo à <span className="text-neon-blue font-mono uppercase tracking-wider">Escala Inevitável</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-6 lg:gap-10 justify-center items-center"
            >
              <NeonButton text="INICIAR PROTOCOLO" onClick={scrollToPricing} className="w-full md:w-auto px-12 py-5 text-sm lg:text-lg font-orbitron tracking-widest" />
              <div className="flex flex-col items-center gap-1 font-mono text-[9px] lg:text-[11px] text-slate-500 uppercase tracking-[0.3em] border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                 <span className="text-neon-blue">Core: Estruturação Comercial</span>
                 <span className="opacity-60">Negócios: Expansão Global</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dashboard Preview Visual */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 mx-auto max-w-5xl relative perspective-1000"
        >
            {/* Glow under the dashboard */}
            <div className="absolute -inset-2 bg-neon-blue/20 rounded-xl blur-xl opacity-50 animate-pulse"></div>
            
            <div className="relative bg-black border border-slate-800 rounded-xl p-4 shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-80">
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent h-[10px] w-full animate-pulse pointer-events-none" style={{ animationDuration: '3s' }}></div>

                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_red]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_yellow]"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_green]"></div>
                    <div className="ml-auto text-xs font-mono text-slate-500">DASHBOARD_V1.2</div>
                </div>
                {/* Mock UI Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    <motion.div 
                      whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
                      transition={{ duration: 0.5 }}
                      className="bg-slate-900/80 border border-slate-800 p-6 rounded-lg hover:border-neon-blue/50 transition-colors"
                    >
                        <p className="text-slate-400 text-sm font-mono">RECEITA_PREVISÍVEL</p>
                        <h3 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
                             R$ <Counter value={1.2} suffix="M" decimals={1} /> <TrendingUp size={20} className="text-green-400" />
                        </h3>
                        <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "70%" }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="h-full bg-neon-blue shadow-[0_0_10px_#2d8cff]"
                            ></motion.div>
                        </div>
                    </motion.div>
                    <motion.div 
                      whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-slate-900/80 border border-slate-800 p-6 rounded-lg hover:border-purple-500/50 transition-colors"
                    >
                        <p className="text-slate-400 text-sm font-mono">CONVERSÃO_TRÁFEGO</p>
                        <h3 className="text-2xl font-bold text-white mt-2">
                          <Counter value={18.5} suffix="%" decimals={1} />
                        </h3>
                         <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "45%" }}
                              transition={{ duration: 1.5, delay: 0.6 }}
                              className="h-full bg-purple-500 shadow-[0_0_10px_purple]"
                            ></motion.div>
                        </div>
                    </motion.div>
                    <motion.div 
                      whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-slate-900/80 border border-slate-800 p-6 rounded-lg hover:border-green-500/50 transition-colors"
                    >
                        <p className="text-slate-400 text-sm font-mono">MARGEM_LUCRO</p>
                        <h3 className="text-2xl font-bold text-white mt-2">
                          <Counter value={4.2} suffix="x" decimals={1} />
                        </h3>
                         <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "80%" }}
                              transition={{ duration: 1.5, delay: 0.7 }}
                              className="h-full bg-green-400 shadow-[0_0_10px_green]"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-4 bg-slate-900/50 p-6 rounded-lg border border-dashed border-slate-800 flex items-center justify-between">
                    <p className="text-slate-500 font-mono text-sm">INTEGRIDADE DO SISTEMA: <span className="text-green-400 animate-pulse">100%</span></p>
                    <div className="text-xs text-slate-600 font-mono">ÚLTIMA_ATUALIZAÇÃO: AGORA</div>
                </div>
            </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};

export default Hero;