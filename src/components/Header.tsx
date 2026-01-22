'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 80; // Altura do header
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
    
    // Fechar menu mobile após clicar
    setIsMenuOpen(false);
  };

  // Handlers para botões
  const handleLogin = () => {
    window.open('https://portal.letszap.com.br/', '_blank');
  };

  const handleTestFree = () => {
    window.open('https://portal.letszap.com.br/signup', '_blank');
    setIsMenuOpen(false);
  };

  const menuItems = [
    {
      label: 'Início',
      href: '#home'
    },
    {
      label: 'Funcionalidades',
      href: '#features'
    },
    {
      label: 'Planos',
      href: '#pricing'
    },
    {
      label: 'Ajuda',
      href: '#faq',
      dropdown: [
        { label: 'Central de Ajuda', href: '#faq' },
        { label: 'Tutorial Completo', href: '#faq' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contato', href: '#contact' }
      ]
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="LetsZap Logo"
                width={40}
                height={40}
                className="h-8 w-8 lg:h-10 lg:w-10"
                priority
              />
              <span className="text-xl font-bold text-green-secondary">LetsZap</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-secondary transition-colors duration-200 cursor-pointer"
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.dropdown && (
                  <div
                    className={cn(
                      'absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200',
                      activeDropdown === item.label 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible'
                    )}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          onClick={(e) => handleSmoothScroll(e, dropdownItem.href)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-accent hover:text-green-dark transition-colors duration-200 cursor-pointer"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="primary" size="sm" onClick={handleTestFree}>
              Testar gratuitamente
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-green-secondary transition-colors duration-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 transition-all duration-300',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block text-gray-700 hover:text-green-secondary transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
                
                {item.dropdown && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        onClick={(e) => handleSmoothScroll(e, dropdownItem.href)}
                        className="block text-sm text-gray-600 hover:text-green-secondary transition-colors duration-200 cursor-pointer"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <Button variant="ghost" size="sm" className="w-full" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="primary" size="sm" className="w-full" onClick={handleTestFree}>
                Testar gratuitamente
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
