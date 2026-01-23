'use client';

import React from 'react';

const HelpCenterHero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
            Como podemos <span className="text-[#2ECC71]">ajudar você?</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 font-normal leading-relaxed">
            Encontre respostas rápidas para suas dúvidas ou entre em contato com nossa equipe de suporte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterHero;
