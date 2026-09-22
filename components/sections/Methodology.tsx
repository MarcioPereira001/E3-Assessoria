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
      icon: <Target className="w-8 h-8 text-neon-blue" />,
      color: "border-neon-blue"
    },
    {
      id: "02",
      name: "VENDAS",
      desc: "Estruturação Comercial de alta performance. Processos e CRM calibrados para transformar o volume de Marketing em Receita Líquida, reduzindo o ciclo de fechamento e aumentando a taxa de conversão.",
      icon: <Zap className="w-8 h-8 text-neon-purple" />,
      color: "border-neon-purple"
    },
    {
      id: "03",
      name: "LTV",
      desc: "Maximização da Margem de Lucro e valor do cliente. Estratégias de retenção e expansão de carteira para garantir que cada cliente gere faturamento recorrente e exponencial para sua Empresa.",
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      color: "border-white"
    }
  ];

  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center px-4 lg:px-0">
        <div className="relative text-center lg:text-left">
          {/* Decorative HUD element */}
          <div className="absolute -left-10 top-0 w-1 h-20 bg-gradient-to-b from-neon-blue to-transparent opacity-50 hidden lg:block" />
          
          <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">Arquitetura de Crescimento Empresarial</div>
          <h2 className="font-orbitron text-2xl md:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight lg:leading-none tracking-tighter">
            PROTOCOLO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple text-glow uppercase">DE ESCALA</span>
          </h2>
          <p className="text-sm lg:text-xl text-slate-500 mb-6 lg:mb-8 font-light leading-relaxed">
            Não é mágica, é <span className="text-slate-200">Engenharia de Negócios</span>. Nossa metodologia foca na otimização dos <span className="text-white">3 setores vitais</span> — Marketing, Vendas e LTV — integrando os vetores fundamentais para a criação de uma máquina de faturamento para sua <span className="text-white">Empresa</span>.
          </p>
          <div className="p-4 lg:p-6 bg-neon-blue/5 border-l-2 border-neon-blue/30 backdrop-blur-sm mx-auto lg:mx-0 max-w-sm lg:max-w-none">
            <p className="text-slate-400 italic text-[10px] lg:text-sm">"Empresas que dependem de sorte são frágeis. Negócios que operam sob protocolos são imparáveis."</p>
          </div>
        </div>

        <div className="space-y-6">
          {pillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-[24px] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group relative shadow-xl overflow-hidden"
            >
              {/* Subtle accent gradient on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#2D8CFF] to-[#0051FF] opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-6">
                    <span className="font-mono text-xl font-bold text-white/20 group-hover:text-neon-blue/40 transition-colors">{p.id}</span>
                    <h3 className="text-xl font-orbitron font-bold text-white tracking-widest uppercase">{p.name}</h3>
                </div>
                <div className="group-hover:scale-110 transition-transform duration-500 text-white/30 group-hover:text-white hidden sm:block">
                  {p.icon}
                </div>
              </div>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed group-hover:text-slate-200 transition-colors">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Methodology;