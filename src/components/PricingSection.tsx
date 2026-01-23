'use client';

import React from 'react';

const PricingSection = () => {
  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Planos e Preços</h2>
          <p className="mt-4 text-gray-500">Escolha o plano ideal para o tamanho do seu negócio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          
          {/* Individual Plan */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
            <h3 className="text-lg font-medium text-gray-900">Individual</h3>
            <p className="text-sm text-gray-500 mt-2">Para profissionais liberais.</p>
            <div className="my-6">
              <span className="text-3xl font-semibold text-gray-900">R$149,90</span>
              <span className="text-gray-500">/mês</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> 1 usuário
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> 1 número
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> Funcionalidades básicas
              </li>
            </ul>
            <a 
              href="https://wa.me/5548996846044?text=Olá,%20tenho%20interesse%20no%20plano%20Individual" 
              className="w-full block text-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-900 transition-colors"
            >
              Assinar agora
            </a>
          </div>

          {/* Basic Plan */}
          <div className="bg-white rounded-xl border-2 border-[#2ECC71] shadow-md p-6 flex flex-col relative transform scale-105 md:scale-100 lg:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-[#2ECC71] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
            <h3 className="text-lg font-medium text-gray-900">Básico</h3>
            <p className="text-sm text-gray-500 mt-2">Para pequenas equipes.</p>
            <div className="my-6">
              <span className="text-3xl font-semibold text-gray-900">R$199,90</span>
              <span className="text-gray-500">/mês</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> 3 usuários
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> 1 número
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> Acesso a relatórios
              </li>
            </ul>
            <a 
              href="https://portal.letszap.com.br/signup" 
              className="w-full block text-center px-4 py-2 bg-[#2ECC71] rounded-lg text-sm font-medium text-white hover:bg-[#25a25a] transition-colors shadow-sm"
            >
              Testar gratuitamente
            </a>
          </div>

          {/* Advanced Plan */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
            <h3 className="text-lg font-medium text-gray-900">Avançado</h3>
            <p className="text-sm text-gray-500 mt-2">Para empresas em crescimento.</p>
            <div className="my-6">
              <span className="text-3xl font-semibold text-gray-900">R$289,90</span>
              <span className="text-gray-500">/mês</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> 5 usuários
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> Automação completa
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> Múltiplas filas
              </li>
            </ul>
            <a 
              href="https://wa.me/5548996846044?text=Olá,%20tenho%20interesse%20no%20plano%20Avançado" 
              className="w-full block text-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-900 transition-colors"
            >
              Assinar agora
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
            <h3 className="text-lg font-medium text-gray-900">Empresarial</h3>
            <p className="text-sm text-gray-500 mt-2">Operações complexas.</p>
            <div className="my-6">
              <span className="text-2xl font-semibold text-gray-900">Sob Consulta</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> 10+ usuários
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> Suporte prioritário
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]"></iconify-icon> API Dedicada
              </li>
            </ul>
            <a 
              href="https://wa.me/5548996846044?text=Olá,%20tenho%20interesse%20no%20plano%20Empresarial" 
              className="w-full block text-center px-4 py-2 border border-gray-900 bg-gray-900 rounded-lg text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Entrar em Contato
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
