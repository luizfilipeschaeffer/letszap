'use client';

import React from 'react';

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
              Por que escolher a <span className="text-[#2ECC71]">LetsZap</span>?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {/* @ts-ignore */}
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#2ECC71]" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">Redução de Custos</h4>
                  <p className="text-sm text-gray-500 mt-1">Elimine múltiplas licenças de ferramentas e centralize tudo em um lugar.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {/* @ts-ignore */}
                  <iconify-icon icon="solar:bolt-linear" className="text-[#2ECC71]" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">Produtividade Aumentada</h4>
                  <p className="text-sm text-gray-500 mt-1">Ferramentas que automatizam processos manuais e repetitivos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {/* @ts-ignore */}
                  <iconify-icon icon="solar:headphones-round-linear" className="text-[#2ECC71]" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">Suporte Dedicado</h4>
                  <p className="text-sm text-gray-500 mt-1">Equipe pronta para ajudar na configuração e uso diário da plataforma.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl opacity-50 transform rotate-3"></div>
            <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              {/* Abstract illustration of metrics increasing */}
              <div className="space-y-4">
                <div className="flex items-end gap-2 h-40 border-b border-gray-100 pb-2">
                  <div className="w-1/5 bg-gray-100 rounded-t h-1/3"></div>
                  <div className="w-1/5 bg-gray-200 rounded-t h-1/2"></div>
                  <div className="w-1/5 bg-green-200 rounded-t h-2/3"></div>
                  <div className="w-1/5 bg-green-300 rounded-t h-3/4"></div>
                  <div className="w-1/5 bg-[#2ECC71] rounded-t h-full relative group">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      +145%
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>Antes</span>
                  <span className="text-[#145A32]">Com LetsZap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
