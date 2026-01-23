'use client';

import React from 'react';

const AboutCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2ECC71] to-[#25a25a] rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Pronto para fazer parte da nossa história?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se a mais de 220 empresas que já confiam na LetsZap para transformar seu atendimento e encantar seus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5548996846044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2ECC71] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Fale com um consultor
              {/* @ts-ignore */}
              <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="20" />
            </a>
            <a
              href="https://portal.letszap.com.br/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white border-2 border-white rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              Testar gratuitamente
              {/* @ts-ignore */}
              <iconify-icon icon="solar:rocket-2-linear" className="ml-2" width="20" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
