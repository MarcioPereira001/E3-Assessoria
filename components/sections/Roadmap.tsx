import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Rocket, GraduationCap, Server, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  phase: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ phase, title, items, icon, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-12 lg:-mb-44 last:mb-0">
      {/* Node / Marker with Neon Glow */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 z-20">
        <div className="relative">
          {/* Animated Glow Layer */}
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-md animate-pulse opacity-50" />
          <div className="relative w-4 h-4 rounded-full bg-blue-400 border-2 border-white/40 shadow-[0_0_15px_#2D8CFF,0_0_30px_rgba(45,140,255,0.4)]" />
        </div>
      </div>

      <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} justify-between w-full`}>
        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`w-full md:w-[48%] ml-12 md:ml-0 group lg:min-h-[220px]`}
        >
          <div className="relative bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-1 shadow-2xl h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-all">
                  {icon}
                </div>
                <h3 className="font-orbitron text-base lg:text-lg font-bold text-white tracking-widest uppercase">
                  {title}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2 lg:pr-8">
                {items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-400 group-hover:text-slate-200 transition-colors">
                    <Check size={12} className="text-blue-500/60 mt-0.5 shrink-0" />
                    <span className="text-[10px] lg:text-[12px] font-light leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fase Tag - Fixed at bottom right */}
            <div className="mt-6 flex justify-end">
              <span className="font-mono text-[9px] lg:text-[11px] uppercase tracking-[0.3em] text-blue-500/60 font-bold border-t border-white/5 pt-2 group-hover:text-blue-400 transition-colors">
                {phase}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Empty space for the other side in desktop */}
        <div className="hidden md:block w-[45%]" />
      </div>
    </div>
  );
};

const Roadmap: React.FC = () => {
  const steps = [
    {
      phase: "FASE 01: SETUP INICIAL",
      title: "Estruturação Comercial",
      icon: <Rocket size={20} />,
      items: [
        "Auditoria de Processos de Negócios",
        "Setup de Funis de Tráfego Pago",
        "Correção de Perda de Margem de Lucro",
        "Otimização de Conversão Inicial"
      ]
    },
    {
      phase: "FASE 02: ACELERAÇÃO",
      title: "Escala e Gestão de Marketing Digital",
      icon: <GraduationCap size={20} />,
      items: [
        "Treinamento de Equipe de Vendas",
        "Implementação de Playbooks de Escala",
        "Gestão de Dados e Performance",
        "Consultoria de Ajuste Fino Semanal"
      ]
    },
    {
      phase: "FASE 03: EXPANSÃO TOTAL",
      title: "Ecossistema de Tecnologia e Lucro",
      icon: <Server size={20} />,
      items: [
        "Desenvolvimento de Ativos de Negócios",
        "Integração Avançada de Sistemas",
        "Dashboards de Métricas em Tempo Real",
        "Automação de Recorrência e LTV"
      ]
    }
  ];

  return (
    <SectionWrapper id="roadmap" className="relative lg:min-h-[1280px]">
      <div className="text-center mb-16 lg:mb-24 relative z-10 px-4">
        <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">Fluxo de Implementação</div>
        <h2 className="font-orbitron text-2xl md:text-5xl font-black text-white mb-4 lg:mb-6 tracking-tighter">
          SEQUÊNCIA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white text-glow">IMPLEMENTAÇÃO</span>
        </h2>
        <p className="text-slate-500 text-sm lg:text-lg font-light max-w-2xl mx-auto">Cronograma de evolução sistêmica em 12 meses de alta performance.</p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Continuous Vertical Line - High Visibility Gradient */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent z-10" />

        <div className="relative">
          {steps.map((step, index) => (
            <TimelineItem 
              key={index}
              index={index}
              {...step}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Roadmap;
