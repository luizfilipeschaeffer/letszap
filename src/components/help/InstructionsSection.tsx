'use client';

import React from 'react';

const instructions = [
  {
    id: 1,
    title: 'Primeiros Passos',
    description: 'Aprenda a configurar sua conta e conectar seu WhatsApp',
    icon: 'solar:rocket-2-linear',
    steps: [
      'Crie sua conta na plataforma',
      'Acesse o painel de configurações',
      'Conecte seu número de WhatsApp',
      'Configure seus atendentes',
      'Comece a atender seus clientes'
    ]
  },
  {
    id: 2,
    title: 'Configuração de Automações',
    description: 'Configure respostas automáticas e fluxos de conversa',
    icon: 'solar:settings-linear',
    steps: [
      'Acesse a seção de Automações',
      'Crie um novo fluxo de conversa',
      'Defina palavras-chave e respostas',
      'Configure condições e ações',
      'Ative e teste sua automação'
    ]
  },
  {
    id: 3,
    title: 'Gerenciamento de Conversas',
    description: 'Aprenda a gerenciar e organizar suas conversas',
    icon: 'solar:chat-round-dots-linear',
    steps: [
      'Visualize todas as conversas em um só lugar',
      'Atribua conversas aos atendentes',
      'Use etiquetas para organização',
      'Acompanhe o histórico completo',
      'Exporte conversas quando necessário'
    ]
  },
  {
    id: 4,
    title: 'Relatórios e Métricas',
    description: 'Entenda como acompanhar o desempenho da sua equipe',
    icon: 'solar:graph-up-linear',
    steps: [
      'Acesse a seção de Relatórios',
      'Selecione o período desejado',
      'Visualize métricas em tempo real',
      'Exporte relatórios em PDF ou Excel',
      'Use os dados para melhorar seu atendimento'
    ]
  }
];

const InstructionsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Guias e Instruções
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Siga nossos guias passo a passo para aproveitar ao máximo a plataforma LetsZap
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {instructions.map((instruction) => (
            <div
              key={instruction.id}
              className="bg-white rounded-xl border border-gray-200 p-8 hover:border-[#2ECC71] transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-[#2ECC71] flex-shrink-0">
                  {/* @ts-ignore */}
                  <iconify-icon icon={instruction.icon} width="24" height="24" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {instruction.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {instruction.description}
                  </p>
                </div>
              </div>
              <ol className="space-y-3">
                {instruction.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2ECC71] text-white text-xs font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
