import React, { useEffect, useState, useRef } from 'react';
import { MenuIcon, XIcon, UserIcon, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { useModal } from './ModalContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export const Header = ({
  isStatic = false
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(isStatic);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const {
    openSignupModal,
    openJoinPilotModal
  } = useModal();
  const desktopPilotButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePilotButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      // If header is static, always show logo regardless of scroll position
      if (!isStatic) {
        const heroLogo = document.getElementById('hero-logo');
        if (heroLogo) {
          const rect = heroLogo.getBoundingClientRect();
          setShowLogo(rect.bottom < 0);
        }
      }
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStatic]);
  const handleOpenJoinPilotModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    openJoinPilotModal(centerX, centerY);
  };
  // Handle navigation with proper scrolling
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    if (isHomePage) {
      // If already on home page, just scroll to the section
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // If not on home page, navigate to home and then scroll to section
      navigate('/');
      // Need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  // Create links with proper routing and handling
  const navItems = [{
    name: 'What Is Nisa',
    anchor: 'what-is-nisa'
  }, {
    name: 'Features',
    anchor: 'features'
  }, {
    name: 'Why Nisa Works',
    anchor: 'why-nisa-works'
  }];
  return <>
      {/* Desktop Header */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 md:block hidden ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100/20 shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-accent-500/10 to-blue-50/50 opacity-50 -z-10" />
          <div className="flex items-center relative z-10">
            <a href="/" className={`h-8 transition-all duration-300 ${showLogo || isStatic ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              <img src="/nisa-capriola-logotype.png" alt="Nisa" className="h-full w-auto" />
            </a>
          </div>
          <nav className="flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => <a key={index} href={`#${item.anchor}`} onClick={e => handleNavigation(e, item.anchor)} className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  {item.name}
                </a>)}
            </div>
            <div className="flex items-center space-x-4">
              <a href="http://app.nisa.coach/login">
                <Button variant="outline" size="sm">
                  <UserIcon className="w-5 h-5 mr-2" />
                  Login
                </Button>
              </a>
              <Button ref={desktopPilotButtonRef} variant="primary" size="sm" onClick={handleOpenJoinPilotModal}>
                Join the Nisa pilot
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
              {navItems.map((item, index) => <a key={index} href={`#${item.anchor}`} onClick={e => handleNavigation(e, item.anchor)} className="block text-xl text-gray-800 hover:text-primary-500 transition-all duration-300 transform hover:translate-x-2 py-2 px-4 rounded-lg hover:bg-primary-50 active:bg-primary-100">
                  {item.name}
                </a>)}
            </div>
            <div className="mt-12 space-y-4">
              <a href="http://app.nisa.coach/login" className="block">
                <Button variant="outline" fullWidth size="lg">
                  <UserIcon className="w-5 h-5 mr-2" />
                  Login
                </Button>
              </a>
              <Button ref={mobilePilotButtonRef} variant="primary" fullWidth size="lg" onClick={e => {
              setIsMenuOpen(false);
              handleOpenJoinPilotModal(e);
            }}>
                Join the Nisa pilot
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>;
};