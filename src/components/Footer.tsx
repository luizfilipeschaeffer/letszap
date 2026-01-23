'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="LetsZap Logo"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="whitespace-nowrap"><span className="text-[#2ECC71]">Lets</span>Zap</span>
            </span>
            <p className="text-sm text-gray-500">
              Transformando conversas em relacionamentos.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-gray-500 hover:text-gray-900">Funcionalidades</a></li>
              <li><a href="#plans" className="text-sm text-gray-500 hover:text-gray-900">Planos</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="/ajuda" className="text-sm text-gray-500 hover:text-gray-900">Central de Ajuda</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:letter-linear"></iconify-icon> contato@letszap.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:phone-linear"></iconify-icon> +55 48 99684-6044
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2023 LetsZap. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              {/* @ts-ignore */}
                <iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              {/* @ts-ignore */}
                <iconify-icon icon="brandico:facebook-rect" width="18"></iconify-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
