'use client';

import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Pronto para transformar o seu atendimento?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Ferramentas essenciais para escalar sua operação sem perder a qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6 text-[#145A32]">
              {/* @ts-ignore */}
              <iconify-icon icon="solar:users-group-rounded-linear" width="24" height="24"></iconify-icon>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Conexão Multiagente</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Permita que múltiplos atendentes utilizem o mesmo número de WhatsApp simultaneamente, eliminando gargalos.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6 text-[#145A32]">
              {/* @ts-ignore */}
              <iconify-icon icon="solar:chart-linear" width="24" height="24"></iconify-icon>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Métricas em Tempo Real</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Acompanhe o desempenho da equipe com relatórios detalhados de tempo de resposta e volume de mensagens.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6 text-[#145A32]">
              {/* @ts-ignore */}
              <iconify-icon icon="solar:chat-round-dots-linear" width="24" height="24"></iconify-icon>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Automação de Respostas</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Crie fluxos de conversa e respostas rápidas para agilizar o atendimento e reduzir o tempo de espera do cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
