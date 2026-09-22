import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { XCircle, TrendingDown, Users, DollarSign } from 'lucide-react';

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
        <h2 className="font-orbitron text-2xl md:text-5xl font-black text-white mb-6">
          GARGALOS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-red-400 text-glow-red uppercase">CRESCIMENTO</span>
        </h2>
        <p className="text-[#8b6464] text-sm lg:text-lg font-light leading-relaxed px-4 lg:px-0">
          Sua <span className="text-white">Empresa</span> não tem um problema de "crise". Ela tem uma falha na <span className="text-slate-300 font-semibold italic">Estruturação Comercial</span>. Resolvemos os 4 principais vetores que impedem sua escala:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative px-4 lg:px-0">
        {pains.map((pain, index) => (
          <div key={index} className="bg-neon-dark/40 backdrop-blur-md border border-slate-900 p-6 lg:p-8 rounded-none hover:border-neon-blue/30 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-neon-blue/20 group-hover:border-neon-blue/50 transition-colors" />
            
            <div className="mb-4 lg:mb-6 text-[#ff0000] transition-all duration-300 w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-start">
              {pain.icon}
            </div>
            <h3 className="text-base lg:text-lg font-orbitron font-bold text-white mb-3 lg:mb-4 tracking-tighter uppercase">{pain.title}</h3>
            <p className="text-[#8b6464] text-xs lg:text-sm leading-relaxed transition-colors">{pain.desc}</p>
            
            {/* Bottom ID label */}
            <div className="mt-6 lg:mt-8 font-mono text-[8px] text-slate-800 group-hover:text-neon-blue/30 transition-colors">ERR_LOG_00{index + 1}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PainPoints;