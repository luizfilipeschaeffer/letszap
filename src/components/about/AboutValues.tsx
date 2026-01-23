'use client';

import React from 'react';

const values = [
  {
    icon: 'solar:heart-linear',
    title: 'Missão',
    description: 'Simplificar o atendimento digital e transformar conversas em relacionamentos duradouros, oferecendo uma plataforma completa e intuitiva para empresas de todos os tamanhos.',
    color: 'from-green-primary to-green-secondary'
  },
  {
    icon: 'solar:eye-linear',
    title: 'Visão',
    description: 'Ser a plataforma de atendimento mais confiável e inovadora do Brasil, reconhecida pela excelência no serviço e pelo impacto positivo na experiência dos clientes.',
    color: 'from-green-secondary to-green-dark'
  },
  {
    icon: 'solar:star-linear',
    title: 'Valores',
    description: 'Transparência, inovação e foco no sucesso dos nossos clientes. Acreditamos que o sucesso da LetsZap está diretamente ligado ao sucesso das empresas que confiam em nós.',
    color: 'from-green-accent to-green-primary'
  }
];

const AboutValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Os princípios que guiam nosso trabalho e definem quem somos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-100 to-green-50 flex items-center justify-center mb-6 text-[#2ECC71]">
                {/* @ts-ignore */}
                <iconify-icon icon={value.icon} width="32" height="32" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
