import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5 text-center relative z-10">
      <div className="container mx-auto px-4">
        <h4 className="text-xl font-orbitron font-black text-white mb-4 tracking-tighter uppercase">
          E3 <span className="text-neon-blue">ASSESSORIA</span>
        </h4>
        <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-6">
          Protocolo Escala — Engenharia de Aquisição e Estruturação Comercial.
        </p>
        <div className="flex justify-center gap-8 mb-8 opacity-30 grayscale hover:grayscale-0 transition-all">
           {/* Placeholder for social or trust icons */}
        </div>
        <p className="text-slate-600 text-[9px] font-mono uppercase tracking-widest">
          &copy; {new Date().getFullYear()} E3 Assessoria de Negócios. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;