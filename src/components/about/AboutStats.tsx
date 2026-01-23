'use client';

import React from 'react';

const stats = [
  { number: '1+', label: 'Anos de experiência', icon: 'solar:calendar-linear' },
  { number: '20+', label: 'Clientes atendidos', icon: 'solar:users-group-rounded-linear' },
  { number: '800k+', label: 'Conversas gerenciadas', icon: 'solar:chat-round-dots-linear' },
  { number: '95%', label: 'Satisfação dos clientes', icon: 'solar:star-linear' }
];

const AboutStats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Nossos Números
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Resultados que comprovam nossa excelência e compromisso
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 transition-all"
            >
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg mb-4 text-[#2ECC71]">
                {/* @ts-ignore */}
                <iconify-icon icon={stat.icon} width="24" height="24" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
