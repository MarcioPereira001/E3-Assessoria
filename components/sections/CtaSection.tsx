import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import NeonButton from '../ui/NeonButton';

const CtaSection: React.FC = () => {
  return (
    <SectionWrapper id="pricing" className="text-center px-4 lg:px-0">
      <div className="bg-neon-dark/80 backdrop-blur-xl p-8 lg:p-24 rounded-none border border-slate-900 shadow-[0_0_100px_rgba(0,242,255,0.05)] relative overflow-hidden group hover:border-neon-blue/30 transition-all duration-700">
        {/* Animated background within card */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent"></div>
        
        {/* HUD Elements */}
        <div className="absolute top-4 left-4 font-mono text-[6px] lg:text-[8px] text-neon-blue/30 tracking-[0.5em] uppercase">Status: Authorization Required</div>
        <div className="absolute bottom-4 right-4 font-mono text-[6px] lg:text-[8px] text-neon-blue/30 tracking-[0.5em] uppercase">Protocol: Scale_v1.0</div>

        <div className="relative z-10 font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.6em] mb-4 lg:mb-6 opacity-60 uppercase">Ativação de Crescimento</div>
        <h2 className="relative z-10 font-orbitron text-2xl md:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight lg:leading-none tracking-tighter">
          INICIAR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue text-glow uppercase">PROTOCOLO ESCALA</span>
        </h2>
        
        <p className="relative z-10 text-sm lg:text-xl text-slate-500 max-w-2xl mx-auto mb-8 lg:mb-12 font-light leading-relaxed px-2">
          Não entregamos teoria. Instalamos <span className="text-slate-200">Estruturação Comercial e Tráfego Pago</span> de elite. <br className="hidden md:block"/>
          Sua <span className="text-white">Empresa</span> operando com previsibilidade ou a mediocridade do sistema antigo. A escolha é sua.
        </p>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-4 lg:gap-6 justify-center">
          <NeonButton text="APLICAR AGORA" className="text-sm lg:text-lg px-8 lg:px-12 py-5 lg:py-6 font-orbitron tracking-widest w-full md:w-auto" />
          <NeonButton text="FALAR COM CONSULTOR" variant="secondary" className="text-sm lg:text-lg px-8 lg:px-12 py-5 lg:py-6 font-orbitron tracking-widest w-full md:w-auto" />
        </div>

        <div className="relative z-10 mt-8 lg:mt-12 flex items-center justify-center gap-2 lg:gap-4">
           <div className="w-8 lg:w-12 h-[1px] bg-slate-900"></div>
           <p className="text-[7px] lg:text-[9px] text-slate-600 uppercase tracking-[0.3em] font-mono">
             [ SECURITY CLEARANCE: HIGH-TICKET ONLY ]
           </p>
           <div className="w-8 lg:w-12 h-[1px] bg-slate-900"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CtaSection;