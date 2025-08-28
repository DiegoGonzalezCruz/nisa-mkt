import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, UserIcon, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { useModal } from './ModalContext';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    openSignupModal
  } = useModal();
  useEffect(() => {
    const handleScroll = () => {
      const heroLogo = document.getElementById('hero-logo');
      if (heroLogo) {
        const rect = heroLogo.getBoundingClientRect();
        setShowLogo(rect.bottom < 0);
      }
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      {/* Desktop Header */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 md:block hidden ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100/20 shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-accent-500/10 to-blue-50/50 opacity-50 -z-10" />
          <div className="flex items-center relative z-10">
            <a href="#" className={`h-8 transition-all duration-500 ${showLogo ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-4'}`}>
              <img src="/nisa-capriola-logotype.png" alt="Nisa" className="h-full w-auto" />
            </a>
          </div>
          <nav className="flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {['What Is Nisa', 'Features', 'Why Nisa Works'].map((item, index) => <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </a>)}
            </div>
            <div className="flex items-center space-x-4">
              <a href="http://app.nisa.coach/login">
                <Button variant="outline" size="sm">
                  <UserIcon className="w-5 h-5 mr-2" />
                  Login
                </Button>
              </a>
              <Button variant="primary" size="sm" onClick={openSignupModal}>
                Sign up for updates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </nav>
        </div>
      </header>
      {/* Mobile Floating Menu Button */}
      <button className="md:hidden fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/60" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        <div className="relative flex items-center justify-center w-6 h-6">
          <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
          <span className={`absolute w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
        </div>
      </button>
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 backdrop-blur-lg bg-white/95 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'}`} style={{
      zIndex: 40
    }}>
        <div className="container mx-auto px-6 py-24">
          <nav className="flex flex-col">
            <div className="space-y-6">
              {['What Is Nisa', 'Features', 'Why Nisa Works'].map((item, index) => <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block text-xl text-gray-800 hover:text-primary-500 transition-all duration-300 transform hover:translate-x-2 py-2 px-4 rounded-lg hover:bg-primary-50 active:bg-primary-100" onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>)}
            </div>
            <div className="mt-12 space-y-4">
              <a href="http://app.nisa.coach/login" className="block">
                <Button variant="outline" fullWidth size="lg">
                  <UserIcon className="w-5 h-5 mr-2" />
                  Login
                </Button>
              </a>
              <Button variant="primary" fullWidth size="lg" onClick={() => {
              setIsMenuOpen(false);
              openSignupModal();
            }}>
                Sign up for updates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>;
};