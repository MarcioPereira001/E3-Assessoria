import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { XCircle, TrendingDown, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <Users size={32} />,
      title: "Marketing Digital Ineficiente",
      desc: "Investimento em Tráfego Pago sem retorno claro. Leads chegam, mas sua equipe de Vendas não consegue converter o volume gerado."
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Faturamento Instável",
      desc: "Sua Empresa sofre com a montanha-russa financeira. Sem previsibilidade, é impossível planejar a escala real dos seus Negócios."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Baixa Margem de Lucro",
      desc: "O Custo de Aquisição (CAC) sobe enquanto o lucro líquido encolhe. Você trabalha muito, mas o caixa da empresa não reflete esse esforço."
    },
    {
      icon: <XCircle size={32} />,
      title: "Dependência do Fundador",
      desc: "Falta de Estruturação Comercial. Se você não estiver presente, a operação trava e as vendas despencam. Sua empresa não tem autonomia."
    }
  ];

  return (
    <SectionWrapper className="bg-transparent relative">
      {/* HUD background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 relative">
        <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">Diagnóstico de Gestão de Negócios</div>
        <h2 className="font-orbitron font-black text-center flex flex-col items-center mb-10 lg:mb-14">
          <span className="text-[40px] md:text-[67px] leading-tight md:leading-[52px] text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-red-400 text-glow-red uppercase">
            GARGALOS
          </span>
          <span className="text-[14px] md:text-[22px] leading-tight md:leading-[22px] text-white tracking-[0.4em] md:tracking-[0.6em] uppercase mt-2 md:mt-4 opacity-90 font-bold">
            de Crescimento
          </span>
        </h2>
        <p className="text-[#8b6464] text-sm lg:text-lg font-light leading-relaxed px-4 lg:px-0">
          Sua <span className="text-white">Empresa</span> não tem um problema de "crise". Ela tem uma falha na <span className="text-slate-300 font-semibold italic">Estruturação Comercial</span>. Resolvemos os 4 principais vetores que impedem sua escala:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 relative px-2 md:px-0 max-w-6xl mx-auto">
        {pains.map((pain, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-5 rounded-[24px] md:rounded-[20px] hover:bg-white/10 hover:border-white/20 transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden shadow-xl flex flex-col justify-between min-h-[200px] md:min-h-[220px]">
            {/* Subtle glow on hover */}
            <div className="absolute -inset-1 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
            
            <div className="relative z-10">
              <div className="mb-4 md:mb-3 text-red-500/80 group-hover:text-red-500 transition-all duration-300 w-10 h-10 md:w-9 md:h-9 flex items-center justify-start relative z-10">
                {React.cloneElement(pain.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-lg md:text-lg font-orbitron font-bold text-white mb-3 md:mb-2 tracking-tighter uppercase relative z-10 leading-tight">{pain.title}</h3>
              <p className="text-[#8b6464] text-sm md:text-sm leading-relaxed transition-colors relative z-10">{pain.desc}</p>
            </div>
            
            {/* Bottom identifier marker */}
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[9px] text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-[0.2em] relative z-10">Diagnóstico {index + 1}</div>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-16 lg:mt-24 text-center px-4"
      >
        <p className="text-white font-orbitron text-lg lg:text-[21px] font-bold tracking-tight lg:w-[690px] mx-auto leading-relaxed">
          Se todos esses pontos fossem <span className="text-neon-blue">resolvidos hoje</span>, quão rápido sua empresa estaria <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">dominando o mercado?</span>
        </p>
        <p className="mt-4 text-slate-500 font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.3em]">
          O custo da inação é maior que o investimento na escala.
        </p>

        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-slate-900 border border-neon-blue/30 text-neon-blue font-orbitron text-xs lg:text-sm tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(45,140,255,0.1)] hover:shadow-[0_0_25px_rgba(45,140,255,0.2)] uppercase font-bold"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero Resolver
          </motion.button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default PainPoints;