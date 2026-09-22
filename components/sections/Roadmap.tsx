import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Rocket, GraduationCap, Server } from 'lucide-react';
import { RoadmapStepProps } from '../../types';

const RoadmapCard: React.FC<RoadmapStepProps> = ({ phase, title, items, type, isLast }) => {
  const accentGradients = {
    short: 'from-[#0051FF] to-[#2D8CFF]',
    medium: 'from-purple-600 to-purple-400',
    long: 'from-slate-400 to-white',
  };

  const textColors = {
    short: 'text-[#2D8CFF]',
    medium: 'text-purple-400',
    long: 'text-white'
  }

  const icons = {
    short: <Rocket className="text-white" size={24} />,
    medium: <GraduationCap className="text-white" size={24} />,
    long: <Server className="text-white" size={24} />,
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-10 lg:mb-16 last:mb-0 group">
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-[32px] transition-all duration-500 hover:bg-white/10 hover:border-white/20 group-hover:-translate-y-2 shadow-2xl overflow-hidden">
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start text-left relative z-10">
            <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${accentGradients[type]} shadow-lg mb-4 md:mb-0`}>
                {icons[type]}
            </div>
            
            <div className="flex-1">
                <span className={`font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.4em] block mb-3 font-bold ${textColors[type]}`}>{phase}</span>
                
                <h3 className="font-orbitron text-xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 tracking-widest uppercase">{title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors text-sm lg:text-base font-light">
                             <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${accentGradients[type]} opacity-70`}></div>
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
          SEQUÊNCIA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white text-glow">IMPLEMENTAÇÃO</span>
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