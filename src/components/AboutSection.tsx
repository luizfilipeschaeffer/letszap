'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Sobre a LetsZap</h2>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          "A LetsZap nasceu para simplificar o atendimento digital de pequenas, médias e grandes empresas. Nosso foco é ajudar empresas a transformar conversas em relacionamentos duradouros."
        </p>
        <a 
          href="https://wa.me/5548996846044" 
          className="inline-flex items-center text-[#2ECC71] font-medium hover:text-[#145A32] transition-colors"
        >
          Fale com um consultor
          {/* @ts-ignore */}
          <iconify-icon icon="solar:arrow-right-linear" className="ml-1"></iconify-icon>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
