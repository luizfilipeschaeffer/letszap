'use client';

import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[#2ECC71] font-semibold tracking-wide uppercase text-xs">Poderoso e Completo</span>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mt-2">Funcionalidades Principais</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Feature Items */}
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:devices-linear" className="text-[#2ECC71]" width="20"></iconify-icon>
            <span className="text-sm font-medium text-gray-700">Multiatendimento</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:plain-linear" className="text-[#2ECC71]" width="20"></iconify-icon>
            <span className="text-sm font-medium text-gray-700">Envio em Massa</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:bot-linear" className="text-[#2ECC71]" width="20"></iconify-icon>
            <span className="text-sm font-medium text-gray-700">Chatbot</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:calendar-linear" className="text-[#2ECC71]" width="20"></iconify-icon>
            <span className="text-sm font-medium text-gray-700">Agendamento</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:code-circle-linear" className="text-[#2ECC71]" width="20"></iconify-icon>
            <span className="text-sm font-medium text-gray-700">Integração API</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:tag-linear" className="text-[#2ECC71]" width="20"></iconify-icon>
            <span className="text-sm font-medium text-gray-700">Etiquetas</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:graph-up-linear" className="text-[#2ECC71]" width="20"></iconify-icon>
            <span className="text-sm font-medium text-gray-700">Relatórios</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:history-linear" className="text-[#2ECC71]" width="20"></iconify-icon>
            <span className="text-sm font-medium text-gray-700">Histórico Completo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
