import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "CARLOS MENDES",
      role: "CEO, TechLog",
      text: "A transição de um negócio amador para uma Estruturação Comercial de elite foi o divisor de águas. Minha empresa agora escala sem minha dependência direta.",
      roi: "LUCRO: +125%"
    },
    {
      name: "JOÃO RICARDO",
      role: "Proprietário, Cotafácil Conde-BA",
      text: "A implementação do Tráfego Pago técnico eliminou os gargalos. Nosso Marketing agora gera mais resultado e a equipe sabendo o que fazer para vender mais.",
      roi: "ROI: 3.5x"
    },
    {
      name: "ROBERTO SILVA",
      role: "Fundador, EduCorp",
      text: "Precisão absoluta. O Protocolo Escala removeu o ruído e instalou uma máquina de vendas previsível para o nosso Negócio.",
      roi: "ROAS: 12.0"
    }
  ];

  return (
    <SectionWrapper className="relative">
      <div className="text-center mb-10 lg:mb-16 relative px-4">
        <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">Provas de Resultado Real</div>
        <h2 className="font-orbitron text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
          DEPOIMENTOS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white text-glow">SUCESSO</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 px-4 lg:px-0">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-xl p-8 lg:p-10 rounded-[32px] border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-500 group relative shadow-2xl"
          >
            <div>
              <div className="flex gap-1.5 mb-6 lg:mb-8">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={12} className="text-neon-blue fill-neon-blue" />)}
              </div>
              <p className="text-slate-400 italic mb-10 lg:mb-12 text-sm lg:text-base font-light leading-relaxed group-hover:text-slate-200 transition-colors">"{t.text}"</p>
            </div>
            <div>
              <div className="w-full h-px bg-white/5 mb-6 lg:mb-8 group-hover:bg-white/10 transition-colors"></div>
              <div className="flex justify-between items-end">
                <div className="text-left">
                  <h4 className="text-white font-orbitron text-xs lg:text-sm font-bold tracking-widest uppercase">{t.name}</h4>
                  <p className="text-slate-500 font-mono text-[9px] lg:text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
                </div>
                <div className="text-right">
                  <span className="text-white font-mono text-[10px] lg:text-[12px] font-bold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full shadow-lg">{t.roi}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SocialProof;