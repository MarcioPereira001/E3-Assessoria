import React, { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Check, Target, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Founder: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'founder' | 'mission'>('about');

  const tabs = [
    { id: 'about', label: 'Quem Somos' },
    { id: 'founder', label: 'O Fundador' },
    { id: 'mission', label: 'Missão & Valores' }
  ];

  return (
    <SectionWrapper className="bg-gradient-to-b from-black/70 via-black/70 to-slate-900/40 py-24 lg:py-32 min-h-[860px] flex flex-col items-center border-b border-white/5">
      
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 lg:mb-24 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-8 py-3 rounded-full font-orbitron text-[10px] lg:text-xs tracking-widest transition-all duration-300 border border-white/5 ${
              activeTab === tab.id 
                ? 'bg-white/10 text-neon-blue shadow-[0_0_15px_rgba(45,140,255,0.15)]' 
                : 'bg-slate-800/10 text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">
        <AnimatePresence mode="wait">
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex justify-center mb-10">
                <div className="w-full max-w-xs lg:max-w-3xl h-[140px] flex items-center justify-center group transition-all duration-500">
                  <img 
                    src="https://www.image2url.com/r2/default/images/1790117567442-7c2785de-6622-4413-9ac5-a12930f8a790.png" 
                    alt="E3 Assessoria Logo" 
                    className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_0_50px_rgba(45,140,255,0.4)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">Engenharia Operacional</div>
                <h3 className="font-orbitron text-2xl lg:text-4xl font-bold text-white mb-8 tracking-tighter uppercase">
                  A Arquitetura do <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">Crescimento.</span>
                </h3>
                <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed mb-6">
                  A E3 Assessoria é o resultado de décadas de execução no front comercial. Nossa base não é teórica; é forjada na gestão prática e no marketing "mão na massa". Essa trajetória nos permitiu desenvolver metodologias inteligentes que unem a força das vendas tradicionais à escala e precisão do digital.
                </p>
                <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed">
                  Hoje, replicamos processos de alta performance em diversos nichos, tratando a operação de cada cliente com a seriedade e o rigor técnico que o mercado de alto nível exige. Nascemos para estruturar vendas e escalar negócios com o suporte genuíno que o empreendedor moderno necessita para crescer de forma previsível e honesta.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'founder' && (
            <motion.div
              key="founder"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-20 items-center"
            >
              <div className="order-2 lg:order-1 text-left">
                <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">The Strategist</div>
                <h3 className="font-orbitron text-2xl lg:text-4xl font-bold text-white mb-8 tracking-tighter uppercase">
                  Visão de Campo e <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">Execução.</span>
                </h3>
                <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed mb-8">
                  Fundada por <span className="text-white">Márcio Santos</span>, a E3 traz em seu DNA mais de <span className="text-white font-semibold">15 anos de experiência</span> forjada no front comercial. Com 7 anos de atuação em vendas de alto impacto e forte background liderando agências de marketing, Márcio já gerou mais de <span className="text-white">R$ 180 Milhões em VGV</span> operando em 5 estados. Estruturou cases de sucesso para Claro Empresas, Cotafácil e diversas redes, unindo inteligência de negócios à execução impecável.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check size={18} className="text-neon-blue" />
                    </div>
                    <span className="text-slate-300 text-sm lg:text-base font-light">15+ Anos de inteligência comercial aplicada.</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Check size={18} className="text-neon-blue" />
                    </div>
                    <span className="text-slate-300 text-sm lg:text-base font-light">Especialista em Vendas de Alto Impacto.</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-neon-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-white/10 overflow-hidden shadow-[0_10px_40px_rgba(37,99,235,0.15)] group-hover:border-neon-blue/30 transition-all duration-500">
                    <img 
                      src="https://www.image2url.com/r2/default/images/1789766622213-b212deec-5b43-464b-8485-af659a6a7b4c.png" 
                      alt="Marcio Santosi" 
                      className="w-full h-full object-cover object-top grayscale-[20%] transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-neon-dark border border-white/10 p-2 rounded-xl shadow-2xl backdrop-blur-md">
                     <div className="w-8 h-8 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse shadow-[0_0_8px_#2D8CFF]"></div>
                     </div>
                  </div>
                </div>
                <div className="mt-8 text-center lg:text-right">
                  <h4 className="text-white font-orbitron text-sm font-bold tracking-widest uppercase">Marcio Santosi</h4>
                  <p className="text-neon-blue font-mono text-[10px] uppercase tracking-widest mt-1">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'mission' && (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 lg:p-12 rounded-2xl group hover:border-blue-500/30 transition-all duration-500">
                <div className="flex items-center justify-start text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Target size={32} />
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-4 tracking-widest uppercase">Missão</h3>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Fazer empresas e famílias prosperarem de verdade, não apenas "sobreviverem" ao mercado. Entregamos processos replicáveis e sistemas de gestão robustos para que o empresário possa delegar com segurança, recuperar sua liberdade e escalar com previsibilidade matemática.
                </p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 lg:p-12 rounded-2xl group hover:border-blue-500/30 transition-all duration-500">
                <div className="flex items-center justify-start text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={32} />
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-4 tracking-widest uppercase">Valores</h3>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Verdade, justiça e compromisso absoluto com o resultado. Não negociamos com a mediocridade ou com promessas vazias. Destruímos crenças limitantes através de análises profundas de dados, tratando cada cenário como único e dedicando exclusividade total à vitória do parceiro.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button at the bottom of the section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-white text-blue-600 font-orbitron text-xs lg:text-sm font-black tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-500 hover:scale-105 uppercase"
          >
            Agendar Diagnóstico Empresarial
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Founder;
