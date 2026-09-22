import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import NeonButton from '../ui/NeonButton';

const CtaSection: React.FC = () => {
  return (
    <SectionWrapper id="pricing" className="text-center px-4 lg:px-0">
      <div className="bg-slate-900/40 backdrop-blur-3xl p-8 lg:p-16 rounded-[48px] border border-white/10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-700 max-w-[736px] mx-auto min-h-[500px] flex flex-col justify-center">
        {/* Subtle ambient light */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#2D8CFF]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#2D8CFF]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Refined label */}
        <div className="relative z-10 font-mono text-neon-blue text-[10px] lg:text-[12px] tracking-[0.6em] mb-4 lg:mb-6 font-bold opacity-80 uppercase">Ativação de Crescimento</div>
        
        <h2 className="relative z-10 font-orbitron text-[32px] lg:text-[42px] font-black text-white mb-6 lg:mb-8 leading-[36px] lg:leading-[42px] tracking-tighter">
          INICIAR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue text-glow uppercase text-[35px] lg:text-[45px]">PROTOCOLO ESCALA</span>
        </h2>
        
        <p className="relative z-10 text-sm lg:text-base text-slate-400 max-w-[545px] mx-auto mb-8 lg:mb-12 font-light leading-relaxed px-2">
          Não entregamos teoria. Instalamos <span className="text-white font-semibold">Estruturação Comercial e Marketing Estratégico</span> profissional de verdade. <br className="hidden md:block"/>
          Sua <span className="text-white">Empresa</span> operando com previsibilidade absoluta ou a mediocridade do sistema antigo. A escolha é sua.
        </p>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-4 lg:gap-6 justify-center">
          <NeonButton text="APLICAR AGORA" className="text-xs lg:text-base px-8 lg:px-12 py-4 lg:py-5 font-orbitron tracking-widest w-full md:w-auto" />
          <NeonButton text="FALAR COM CONSULTOR" variant="secondary" className="text-xs lg:text-base px-8 lg:px-12 py-4 lg:py-5 font-orbitron tracking-widest w-full md:w-auto" />
        </div>

        <div className="relative z-10 mt-12 lg:mt-16 flex items-center justify-center gap-6">
           <div className="w-16 h-px bg-white/5"></div>
           <p className="text-[10px] lg:text-[12px] text-slate-500 uppercase tracking-[0.4em] font-mono font-bold">
             EXCLUSIVO PARA EMPRESÁRIOS DE ALTA PERFORMANCE
           </p>
           <div className="w-16 h-px bg-white/5"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CtaSection;