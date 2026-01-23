'use client';

import React, { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Como conectar meu número de WhatsApp?',
    answer: 'Para conectar seu número de WhatsApp, acesse o painel de configurações, vá em "Conexões" e clique em "Adicionar WhatsApp". Escaneie o QR Code que aparecerá na tela usando o aplicativo WhatsApp do seu celular. O processo é simples e leva apenas alguns segundos.',
    category: 'Configuração'
  },
  {
    id: 2,
    question: 'Quantos atendentes podem usar a plataforma simultaneamente?',
    answer: 'O número de atendentes simultâneos depende do seu plano. No plano Individual, você pode ter 1 usuário. No plano Básico, até 3 usuários. No Avançado, até 5 usuários. E no plano Empresarial, 10 ou mais usuários conforme sua necessidade.',
    category: 'Planos'
  },
  {
    id: 3,
    question: 'Como funciona a automação de respostas?',
    answer: 'A automação de respostas permite criar fluxos de conversa e respostas rápidas. Você pode configurar palavras-chave que, quando detectadas nas mensagens, acionam respostas automáticas. Isso ajuda a agilizar o atendimento e reduzir o tempo de espera dos clientes.',
    category: 'Funcionalidades'
  },
  {
    id: 4,
    question: 'Posso integrar com outros sistemas?',
    answer: 'Sim! A LetsZap oferece API completa para integração com seus sistemas existentes, como CRMs, ERPs e outras ferramentas. Nossa equipe técnica pode ajudar você na implementação da integração.',
    category: 'Integração'
  },
  {
    id: 5,
    question: 'Como visualizar relatórios e métricas?',
    answer: 'Acesse a seção "Relatórios" no menu principal. Lá você encontrará métricas em tempo real sobre tempo de resposta, volume de mensagens, satisfação dos clientes e muito mais. Os relatórios podem ser exportados em PDF ou Excel.',
    category: 'Relatórios'
  },
  {
    id: 6,
    question: 'O que acontece se eu cancelar minha assinatura?',
    answer: 'Você pode cancelar sua assinatura a qualquer momento sem multas ou taxas. Seu acesso permanecerá ativo até o final do período pago. Após o cancelamento, você não será cobrado no próximo ciclo de faturamento.',
    category: 'Planos'
  },
  {
    id: 7,
    question: 'Como funciona o envio em massa?',
    answer: 'O envio em massa permite enviar mensagens para múltiplos contatos de uma vez. Você pode importar uma lista de contatos, criar uma mensagem personalizada e enviar para todos. A plataforma gerencia a fila de envio automaticamente para evitar bloqueios.',
    category: 'Funcionalidades'
  },
  {
    id: 8,
    question: 'Preciso de treinamento para usar a plataforma?',
    answer: 'A LetsZap é intuitiva e fácil de usar. Oferecemos tutoriais em vídeo, documentação completa e suporte técnico. Para planos Empresariais, incluímos treinamento personalizado para sua equipe.',
    category: 'Suporte'
  }
];

const categories = ['Todos', 'Configuração', 'Planos', 'Funcionalidades', 'Integração', 'Relatórios', 'Suporte'];

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'Todos' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            {/* @ts-ignore */}
            <iconify-icon 
              icon="solar:magnifer-linear" 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
              width="20"
            />
            <input
              type="text"
              placeholder="Buscar por palavras-chave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#2ECC71] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-[#2ECC71]"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-medium text-[#2ECC71] bg-green-50 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  </div>
                  {/* @ts-ignore */}
                  <iconify-icon
                    icon={openFAQ === faq.id ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                    className={`text-gray-400 transition-transform ${openFAQ === faq.id ? 'rotate-180' : ''}`}
                    width="20"
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhuma pergunta encontrada com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
