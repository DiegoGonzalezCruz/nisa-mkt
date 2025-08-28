import React from 'react';
import { Button } from './Button';
import { Twitter, Linkedin, Youtube } from 'lucide-react';
export const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900"></div>
      {/* Gradient accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12 md:mb-20">
          {/* Brand and Description */}
          <div className="md:col-span-4">
            <a href="#" className="block mb-6">
              <img src="/nisa-capriola-logotype.png" alt="Nisa" className="h-8 w-auto brightness-0 invert" />
            </a>
            <p className="text-gray-400 mb-6 font-light">
              Coaching simplified. Impact multiplied.
            </p>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#what-is-nisa" className="text-gray-400 hover:text-white transition-colors font-light">
                  What Is Nisa
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors font-light">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-nisa-works" className="text-gray-400 hover:text-white transition-colors font-light">
                  Why It Works
                </a>
              </li>
            </ul>
          </div>
          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors font-light">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors font-light">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 font-light">
            © {new Date().getFullYear()} Nisa. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm font-light">Powered by</span>
            <a href="https://www.teachinglabstudio.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
              Teaching Lab Studio
            </a>
          </div>
        </div>
      </div>
    </footer>;
};