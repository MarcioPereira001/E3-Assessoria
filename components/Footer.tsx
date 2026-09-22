import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container mx-auto px-4">
        <p className="font-orbitron font-bold text-xl text-white mb-4">DESTRAVA VENDAS</p>
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados. <br/>
          Desenvolvido com Wancora Standard.
        </p>
      </div>
    </footer>
  );
};

export default Footer;