import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "CARLOS MENDES",
      role: "CEO, TechLog",
      text: "A transição de um negócio amador para uma Estruturação Comercial de elite foi o divisor de águas. Minha empresa agora escala sem minha dependência direta.",
      roi: "LUCRO: +125%"
    },
    {
      name: "FERNANDA LIMA",
      role: "Diretora, VarejoX",
      text: "A implementação do Tráfego Pago técnico eliminou os gargalos. Nosso Marketing Digital agora opera com métricas reais e margem de lucro otimizada.",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 px-4 lg:px-0">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-neon-dark/40 backdrop-blur-md p-6 lg:p-8 rounded-none border border-slate-900 flex flex-col justify-between hover:border-neon-blue/30 transition-all duration-500 group relative">
             {/* Card ID background label */}
             <div className="absolute top-4 right-6 font-mono text-[8px] text-slate-800 opacity-30">REF_ID: #00{i+1}</div>
             
            <div>
              <div className="flex gap-1 mb-4 lg:mb-6">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={10} className="text-neon-blue fill-neon-blue/20" />)}
              </div>
              <p className="text-slate-500 italic mb-8 lg:mb-10 text-xs lg:text-sm leading-relaxed group-hover:text-slate-300 transition-colors">"{t.text}"</p>
            </div>
            <div>
              <div className="w-full h-[1px] bg-slate-900 mb-4 lg:mb-6 group-hover:bg-neon-blue/20 transition-colors"></div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-orbitron text-[10px] lg:text-xs font-bold tracking-widest uppercase">{t.name}</h4>
                  <p className="text-slate-600 font-mono text-[8px] lg:text-[9px] uppercase tracking-wider">{t.role}</p>
                </div>
                <span className="text-neon-blue font-mono text-[9px] lg:text-[10px] font-bold bg-neon-blue/5 border border-neon-blue/20 px-2 lg:px-3 py-1 rounded-none text-glow">{t.roi}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SocialProof;