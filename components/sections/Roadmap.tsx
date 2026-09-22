import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Rocket, GraduationCap, Server } from 'lucide-react';
import { RoadmapStepProps } from '../../types';

const RoadmapCard: React.FC<RoadmapStepProps> = ({ phase, title, items, type, isLast }) => {
  const colors = {
    short: 'bg-neon-blue shadow-[0_0_20px_rgba(0,242,255,0.4)]',
    medium: 'bg-neon-purple shadow-[0_0_20px_rgba(112,0,255,0.4)]',
    long: 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]',
  };

  const textColors = {
    short: 'text-neon-blue',
    medium: 'text-neon-purple',
    long: 'text-white'
  }

  const icons = {
    short: <Rocket className="text-black" size={24} />,
    medium: <GraduationCap className="text-black" size={24} />,
    long: <Server className="text-black" size={24} />,
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-10 lg:mb-16 last:mb-0 group">
      <div className={`relative bg-neon-dark/60 backdrop-blur-md border border-slate-900 p-6 lg:p-10 rounded-none transition-all duration-500 hover:border-neon-blue/30 group-hover:-translate-y-2 relative overflow-hidden`}>
        {/* HUD Corner */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/5 group-hover:border-neon-blue/20 transition-colors" />

        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start text-left">
            <div className={`shrink-0 w-12 lg:w-14 h-12 lg:h-14 rounded-none flex items-center justify-center ${colors[type]} mb-4 md:mb-0`}>
                {icons[type]}
            </div>
            
            <div className="flex-1">
                <span className={`font-mono text-[8px] lg:text-[10px] uppercase tracking-[0.4em] block mb-2 ${textColors[type]}`}>{phase}</span>
                
                <h3 className="font-orbitron text-lg lg:text-2xl font-bold text-white mb-4 lg:mb-6 tracking-widest uppercase">{title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-300 transition-colors text-xs lg:text-sm leading-tight">
                             <div className={`w-1 h-1 rounded-full ${colors[type]} opacity-50`}></div>
                             <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Roadmap: React.FC = () => {
  return (
    <SectionWrapper id="roadmap" className="relative">
      <div className="text-center mb-12 lg:mb-24 relative z-10 px-4">
        <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">Fluxo de Implementação</div>
        <h2 className="font-orbitron text-2xl md:text-5xl font-black text-white mb-4 lg:mb-6 tracking-tighter">
          SEQUÊNCIA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white text-glow">DEPLOYMENT</span>
        </h2>
        <p className="text-slate-500 text-sm lg:text-lg font-light max-w-2xl mx-auto">Cronograma de evolução sistêmica em 12 meses de alta performance.</p>
      </div>

      <div className="relative px-4">
        <div className="flex flex-col relative z-10">
          <RoadmapCard 
            phase="PHASE 01: SETUP INICIAL"
            title="Estruturação Comercial"
            type="short"
            items={[
              "Auditoria de Processos de Negócios",
              "Setup de Funis de Tráfego Pago",
              "Correção de Perda de Margem de Lucro",
              "Otimização de Conversão Inicial"
            ]}
          />
          <RoadmapCard 
            phase="PHASE 02: ACELERAÇÃO"
            title="Escala e Gestão de Marketing Digital"
            type="medium"
            items={[
              "Treinamento de Equipe de Vendas",
              "Implementação de Playbooks de Escala",
              "Gestão de Dados e Performance",
              "Consultoria de Ajuste Fino Semanal"
            ]}
          />
          <RoadmapCard 
            phase="PHASE 03: EXPANSÃO TOTAL"
            title="Ecossistema de Tecnologia e Lucro"
            type="long"
            items={[
              "Desenvolvimento de Ativos de Negócios",
              "Integração Avançada de Sistemas",
              "Dashboards de Métricas em Tempo Real",
              "Automação de Recorrência e LTV"
            ]}
            isLast={true}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Roadmap;