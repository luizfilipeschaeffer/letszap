'use client';

import React from 'react';

const AboutTeam = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Somos uma equipe apaixonada por tecnologia e comprometida em ajudar empresas a oferecerem o melhor atendimento aos seus clientes.
          </p>
          
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#2ECC71]">
                  {/* @ts-ignore */}
                  <iconify-icon icon="solar:users-group-rounded-linear" width="24" height="24" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Equipe Multidisciplinar</h3>
                  <p className="text-gray-600">
                    Contamos com profissionais especializados em desenvolvimento, suporte técnico, atendimento ao cliente e gestão de negócios, todos trabalhando em conjunto para oferecer a melhor experiência.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#2ECC71]">
                  {/* @ts-ignore */}
                  <iconify-icon icon="solar:headphones-round-linear" width="24" height="24" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Suporte Dedicado</h3>
                  <p className="text-gray-600">
                    Nossa equipe de suporte está sempre pronta para ajudar você, seja na configuração inicial, treinamento da equipe ou resolução de dúvidas técnicas. Estamos aqui para garantir seu sucesso.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#2ECC71]">
                  {/* @ts-ignore */}
                  <iconify-icon icon="solar:rocket-2-linear" width="24" height="24" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inovação Contínua</h3>
                  <p className="text-gray-600">
                    Estamos sempre trabalhando em novas funcionalidades e melhorias, ouvindo o feedback dos nossos clientes e acompanhando as tendências do mercado para oferecer sempre a melhor solução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
