'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 80;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
    
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      'bg-white/80 backdrop-blur-md border-b border-gray-100'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a 
              href="#hero" 
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2"
            >
              <Image
                src="/logo.png"
                alt="LetsZap Logo"
                width={32}
                height={32}
                className="h-8 w-8"
                priority
              />
              <span className="whitespace-nowrap"><span className="text-[#2ECC71]">Lets</span>Zap</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#hero" 
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Início
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Funcionalidades
            </a>
            <a 
              href="#plans" 
              onClick={(e) => handleSmoothScroll(e, '#plans')}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Planos
            </a>
            <a 
              href="/sobre" 
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Sobre
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://portal.letszap.com.br/login" 
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </a>
            <a 
              href="https://portal.letszap.com.br/signup" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#2ECC71] hover:bg-[#25a25a] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ECC71]"
            >
              Testar gratuitamente
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
            <a 
              href="#hero" 
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Início
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className="block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Funcionalidades
            </a>
            <a 
              href="#plans" 
              onClick={(e) => handleSmoothScroll(e, '#plans')}
              className="block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Planos
            </a>
            <a 
              href="/sobre" 
              className="block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Sobre
            </a>
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a 
                href="https://portal.letszap.com.br/login" 
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Login
              </a>
              <a 
                href="https://portal.letszap.com.br/signup" 
                className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#2ECC71] hover:bg-[#25a25a] transition-all"
              >
                Testar gratuitamente
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
