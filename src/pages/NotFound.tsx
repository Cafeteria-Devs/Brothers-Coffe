import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black font-sans p-4">
      <div className="text-center">
        <h1 className="text-9xl font-black tracking-tighter">
          404
        </h1>
        
        <div className="w-16 h-1 bg-black mx-auto my-6"></div>
        
        <h2 className="text-2xl font-light uppercase tracking-widest mb-4">
          Página não encontrada
        </h2>
        
        <p className="text-sm max-w-xs mx-auto mb-8 opacity-60">
          O conteúdo que você está procurando não existe ou foi movido para outro endereço.
        </p>

        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 border-2 border-black text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors duration-300"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
