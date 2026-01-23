'use client';

import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{
      background: 'radial-gradient(circle at 50% 50%, rgba(46, 204, 113, 0.15) 0%, rgba(255, 255, 255, 0) 50%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-[#145A32] text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Nova atualização disponível
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
          Toda sua equipe em um <br />
          <span className="text-[#2ECC71] inline-block">único WhatsApp.</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 font-normal leading-relaxed">
          Centralize e melhore o desempenho do seu atendimento. Reduza custos, automatize respostas e encante seus clientes em uma única tela.
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <a 
            href="https://portal.letszap.com.br/signup" 
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#2ECC71] hover:bg-[#25a25a] transition-all"
          >
            Começar agora!
            {/* @ts-ignore */}
            <iconify-icon icon="solar:arrow-right-linear" className="ml-2 text-xl"></iconify-icon>
          </a>
        </div>

        {/* Abstract Dashboard Visual (CSS Only representation) */}
        <div className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden p-2">
          <div className="bg-gray-50 rounded-lg border border-gray-100 aspect-[16/9] sm:aspect-[21/9] flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-16 sm:w-64 border-r border-gray-200 bg-white flex flex-col p-4 hidden sm:flex">
              <div className="h-8 w-24 bg-gray-100 rounded mb-6"></div>
              <div className="space-y-3">
                <div className="h-8 w-full bg-green-50 rounded border border-green-100 flex items-center px-3 gap-2">
                  <div className="h-4 w-4 rounded-full bg-[#2ECC71]"></div>
                  <div className="h-2 w-20 bg-green-200 rounded"></div>
                </div>
                <div className="h-8 w-full bg-white rounded hover:bg-gray-50 flex items-center px-3 gap-2">
                  <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                  <div className="h-2 w-16 bg-gray-100 rounded"></div>
                </div>
                <div className="h-8 w-full bg-white rounded hover:bg-gray-50 flex items-center px-3 gap-2">
                  <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                  <div className="h-2 w-24 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
            {/* Chat Area */}
            <div className="flex-1 bg-white flex flex-col relative">
              {/* Chat Header */}
              <div className="h-14 border-b border-gray-100 flex items-center px-6 justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-gray-200 rounded"></div>
                    <div className="h-2 w-16 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Messages */}
              <div className="flex-1 p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div className="bg-gray-100 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-sm">
                    <div className="h-2 w-32 bg-gray-300 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#2ECC71] p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl max-w-sm">
                    <div className="h-2 w-40 bg-white/50 rounded mb-2"></div>
                    <div className="h-2 w-28 bg-white/50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
