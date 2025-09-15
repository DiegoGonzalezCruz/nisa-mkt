import React from 'react';
import { Button } from './Button';
import { Twitter, Linkedin, Youtube } from 'lucide-react';
import { useModal } from './ModalContext';
export const Footer = () => {
  const {
    openSignupModal
  } = useModal();
  return <footer className="w-full bg-cyan-100 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-800"></div>
      {/* Gradient accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/10 via-cyan-400/5 to-blue-400/10 rounded-[45%_55%_40%_60%] blur-3xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-cyan-400/5 to-emerald-400/10 rounded-[60%_40%_55%_45%] blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-purple-400/10 via-indigo-400/5 to-blue-400/10 rounded-[40%_60%_30%_70%] blur-3xl animate-float" style={{
      animationDelay: '3s'
    }}></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12 md:mb-20">
          {/* Brand and Description */}
          <div className="md:col-span-4">
            <a href="#" className="block mb-6">
              <img src="/nisa-capriola-logotype.png" alt="Nisa" className="h-8 w-auto brightness-0 invert" />
            </a>
            <p className="text-teal-100 mb-4 font-medium font-serif">
              Coaching simplified.
              <br />
              Impact multiplied.
            </p>
            <a href="https://www.linkedin.com/company/nisacoach/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-300" aria-label="Follow Nisa on LinkedIn">
              <div className="bg-white text-primary-800 rounded-sm w-5 h-5 flex items-center justify-center">
                <Linkedin className="w-4 h-4 fill-current" strokeWidth={0} />
              </div>
            </a>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#what-is-nisa" className="text-cyan-100 hover:text-cyan-100/80 transition-colors font-medium">
                  What Is Nisa
                </a>
              </li>
              <li>
                <a href="#features" className="text-cyan-100 hover:text-cyan-100/80 transition-colors font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-nisa-works" className="text-cyan-100 hover:text-cyan-100/80 transition-colors font-medium">
                  Why It Works
                </a>
              </li>
            </ul>
          </div>
          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-cyan-100 hover:text-cyan-100/80 transition-colors font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-cyan-100 hover:text-cyan-100/80 transition-colors font-medium">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-cyan-100 hover:text-cyan-100/80 transition-colors font-medium">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h3 className="text-white font-medium mb-4">Stay Connected</h3>
            <p className="text-grey-300 mb-4">
              Get the latest updates from Nisa
            </p>
            <Button variant="outline" size="sm" onClick={openSignupModal} className="text-cyan-100 border-white/30 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.4)]">
              Stay in the loop
            </Button>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-cyan-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0 font-medium">
            © {new Date().getFullYear()} Nisa. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 text-sm font-medium">
              Powered by
            </span>
            <a href="https://www.teachinglabstudio.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
              Teaching Lab Studio
            </a>
          </div>
        </div>
      </div>
    </footer>;
};