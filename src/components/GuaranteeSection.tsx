'use client';

import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-[#F0FDF4]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 text-[#2ECC71]">
          {/* @ts-ignore */}
          <iconify-icon icon="solar:shield-check-linear" width="32" height="32"></iconify-icon>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Garantia Risco Zero</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Se em até 7 dias você não estiver satisfeito com nossa plataforma, devolvemos seu dinheiro sem burocracia.
        </p>
        <a 
          href="https://portal.letszap.com.br/signup" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#2ECC71] hover:bg-[#25a25a] transition-all"
        >
          Comece agora sem riscos
        </a>
      </div>
    </section>
  );
};

export default GuaranteeSection;
