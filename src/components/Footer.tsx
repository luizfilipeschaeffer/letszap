'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { 
  Linkedin, 
  Youtube, 
  Instagram, 
  Facebook,
  MessageCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  const whatsapp = 'https://wa.me/5548996846044';

  const about = [
    { name: 'Políticas de Privacidade', href: '#privacy' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2025 LetsZap - Todos os direitos reservados.
            </motion.div>

            {/* Social Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-secondary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div> */}

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#privacy" className="text-gray-400 hover:text-green-primary transition-colors duration-200">
                Políticas e Privacidade
              </a>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-green-dark transition-colors duration-200 group"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
