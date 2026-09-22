import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Target, Zap, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Methodology: React.FC = () => {
  const pillars = [
    {
      id: "01",
      name: "MARKETING",
      desc: "Engenharia de aquisição através de Tráfego Pago estratégico. Instalamos canais de captação que operam sob lógica matemática, garantindo um fluxo constante de leads qualificados para seu Negócio.",
      icon: <Target className="w-8 h-8 text-neon-blue" />
    },
    {
      id: "02",
      name: "VENDAS",
      desc: "Estruturação Comercial de alta performance. Processos e CRM calibrados para transformar o volume de Marketing em Receita Líquida, reduzindo o ciclo de fechamento e aumentando a taxa de conversão.",
      icon: <Zap className="w-8 h-8 text-neon-purple" />
    },
    {
      id: "03",
      name: "LTV",
      desc: "Arquitetura de retenção. Maximizamos o Lifetime Value transformando compradores pontuais em receita recorrente e recompras contínuas, garantindo o lucro líquido.",
      icon: <RefreshCw className="w-8 h-8 text-white" />
    }
  ];

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-16 lg:gap-24 px-4 lg:px-0">
        <div className="relative text-center max-w-4xl mx-auto">
          {/* Decorative HUD element */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-px h-20 bg-gradient-to-b from-neon-blue to-transparent opacity-50" />
          
          <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">Arquitetura de Crescimento Empresarial</div>
          <h2 className="font-orbitron text-3xl md:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight lg:leading-none tracking-tighter">
            PROTOCOLO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple text-glow uppercase">DE ESCALA</span>
          </h2>
          <p className="text-sm lg:text-xl text-slate-500 mb-6 lg:mb-8 font-light leading-relaxed">
            Não é mágica, é <span className="text-slate-200">Engenharia de Negócios</span>. Nossa metodologia foca na otimização dos <span className="text-white">3 setores vitais</span> integrando os vetores fundamentais para a criação de uma máquina de faturamento para sua <span className="text-white">Empresa</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 lg:p-10 rounded-2xl border border-white/10 hover:bg-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Watermark Number */}
              <span className="absolute top-2 right-6 text-7xl md:text-8xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-all duration-500 pointer-events-none select-none italic leading-none">
                {p.id}
              </span>

              {/* Icon */}
              <div className="absolute top-8 left-8 p-0 group-hover:scale-110 transition-transform duration-500">
                {p.icon}
              </div>

              <div className="relative z-10 pt-16">
                <h3 className="text-white font-bold text-xl md:text-xl mb-4 tracking-wider uppercase font-orbitron">
                  {p.name}
                </h3>
                
                <p className="text-slate-300 md:text-slate-400 text-base md:text-base leading-relaxed group-hover:text-slate-200 transition-colors">
                  {p.desc}
                </p>
              </div>

              {/* Bottom accent glow on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue/0 via-neon-blue/40 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </motion.div>
          ))}
        </div>

        <div className="p-6 bg-neon-blue/5 border-l-2 border-neon-blue/30 backdrop-blur-sm max-w-2xl mx-auto text-center">
          <p className="text-slate-400 italic text-sm lg:text-base">"Empresas que dependem de sorte são frágeis. Negócios que operam sob protocolos são imparáveis."</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Methodology;