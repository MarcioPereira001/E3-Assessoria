import React, { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] text-white/20 group-hover:text-neon-blue/60 transition-colors uppercase font-bold tracking-widest">{index < 9 ? `0${index + 1}` : index + 1}</span>
          <span className="text-base lg:text-xl font-orbitron font-bold text-white tracking-widest uppercase group-hover:text-neon-blue transition-all duration-300">{question}</span>
        </div>
        <div className={`p-2 rounded-full border transition-all duration-500 ${isOpen ? 'bg-neon-blue/10 border-neon-blue/30 rotate-180' : 'bg-transparent border-white/10'}`}>
          {isOpen ? <Minus size={18} className="text-neon-blue" /> : <Plus size={18} className="text-white/40" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 lg:pb-8 pl-8 lg:pl-16 pr-4 lg:pr-10">
               <p className="text-slate-500 text-xs lg:text-sm leading-relaxed font-light">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "Serve para o meu Negócio?",
      answer: "O Protocolo Escala é agnóstico ao mercado. Se sua Empresa precisa de mais clientes e maior Margem de Lucro, o sistema é compatível com sua operação."
    },
    {
      question: "Preciso de equipe de Marketing?",
      answer: "Não imediatamente. Instalamos os processos de Tráfego Pago e Estruturação Comercial que podem ser operados por uma equipe enxuta até a fase de escala."
    },
    {
      question: "Qual o prazo de resultado?",
      answer: "Operamos com lógica de engenharia. Os primeiros ajustes de rota ocorrem em semanas, com a estabilização da escala acontecendo nos primeiros 90 dias."
    },
    {
      question: "O que está incluso?",
      answer: "Setup de Dashboards, integração de CRM, automações de Marketing Digital e consultoria estratégica para maximizar seu faturamento."
    }
  ];

  return (
    <SectionWrapper className="max-w-4xl mx-auto px-4 lg:px-0">
      <div className="text-center mb-10 lg:mb-16">
        <div className="font-mono text-neon-blue text-[8px] lg:text-[10px] tracking-[0.5em] mb-4 opacity-50 uppercase">Perguntas Frequentes</div>
        <h2 className="text-2xl lg:text-3xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
          DÚVIDAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white text-glow">FREQUENTES</span>
        </h2>
      </div>
      <div className="space-y-0">
        {faqs.map((f, i) => <FaqItem key={i} index={i} {...f} />)}
      </div>
    </SectionWrapper>
  );
};

export default Faq;