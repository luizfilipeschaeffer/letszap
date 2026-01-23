'use client';

import React from 'react';

const AboutMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Nossa História
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A LetsZap nasceu da necessidade de simplificar o atendimento digital. Desenvolvemos uma plataforma que centraliza todos os canais de comunicação em um só lugar, permitindo que empresas de todos os tamanhos ofereçam um atendimento excepcional aos seus clientes.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nossa jornada começou quando identificamos que muitas empresas enfrentavam dificuldades para gerenciar múltiplos canais de atendimento, resultando em respostas lentas, clientes insatisfeitos e equipes sobrecarregadas. Foi então que decidimos criar uma solução completa e intuitiva.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Hoje, a LetsZap é utilizada por mais de 20 empresas pelo Brasil, processando 800.000 conversas e ajudando nossos clientes a transformar cada interação em uma oportunidade de construir relacionamentos duradouros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
