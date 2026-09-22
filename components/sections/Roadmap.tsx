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
    <div className="relative mb-12 md:mb-16 lg:mb-32 last:mb-0">
      {/* Node / Marker with Neon Glow */}
      <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-0 z-20">
        <div className="relative">
          {/* Animated Glow Layer */}
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-sm animate-pulse opacity-50" />
          <div className="relative w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-blue-400 border-2 border-white/40 shadow-[0_0_15px_#2D8CFF,0_0_30px_rgba(45,140,255,0.4)]" />
        </div>
      </div>

      <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} justify-between w-full`}>
        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`w-full md:w-[45%] ml-10 md:ml-0 group`}
        >
          <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 p-5 md:p-6 lg:p-10 rounded-2xl transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2 shadow-2xl h-full flex flex-col">
            <div className="flex items-center gap-4 mb-5 md:mb-6 lg:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-all shadow-inner">
                {React.cloneElement(icon as React.ReactElement, { size: 20 })}
              </div>
              <h3 className="font-orbitron text-sm md:text-base lg:text-xl font-bold text-white tracking-widest uppercase leading-tight">
                {title}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-y-2.5 md:gap-y-3 mb-6 md:mb-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                  <Check size={14} className="text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-[11px] md:text-xs lg:text-sm font-light leading-snug tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 md:pt-6 border-t border-white/5 flex justify-end">
              <span className="font-mono text-[8px] md:text-[9px] lg:text-[11px] uppercase tracking-[0.4em] text-blue-500 font-bold group-hover:text-blue-300 transition-colors">
                {phase}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Spacer for desktop zig-zag */}
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
      icon: <Rocket size={24} />,
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
      icon: <GraduationCap size={24} />,
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
      icon: <Server size={24} />,
      items: [
        "Desenvolvimento de Ativos de Negócios",
        "Integração Avançada de Sistemas",
        "Dashboards de Métricas em Tempo Real",
        "Automação de Recorrência e LTV"
      ]
    }
  ];

  return (
    <SectionWrapper id="roadmap" className="relative py-24 lg:py-40">
      <div className="text-center mb-20 lg:mb-32 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-neon-blue text-[10px] lg:text-[12px] tracking-[0.5em] mb-6 opacity-60 uppercase font-bold">Fluxo de Implementação</div>
          <h2 className="font-orbitron text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            SEQUÊNCIA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white text-glow">IMPLEMENTAÇÃO</span>
          </h2>
          <p className="text-slate-400 text-base lg:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Cronograma estratégico desenhado para evolução sistêmica em 12 meses de alta performance comercial.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Continuous Vertical Line - Improved Visibility */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent z-10" />

        <div className="relative space-y-12">
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
