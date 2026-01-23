'use client';

import React from 'react';

const ContactSupport = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2ECC71] to-[#25a25a] rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:headphones-round-linear" width="32" height="32" />
          </div>
          <h2 className="text-3xl font-semibold mb-4">
            Ainda precisa de ajuda?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe de suporte está pronta para ajudar você. Entre em contato através dos canais abaixo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5548996846044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2ECC71] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {/* @ts-ignore */}
              <iconify-icon icon="solar:phone-linear" className="mr-2" width="20" />
              WhatsApp
            </a>
            <a
              href="mailto:contato@letszap.com.br"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white border-2 border-white rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              {/* @ts-ignore */}
              <iconify-icon icon="solar:letter-linear" className="mr-2" width="20" />
              E-mail
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-white/80">
              Horário de atendimento: Segunda a Sexta, das 8h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
