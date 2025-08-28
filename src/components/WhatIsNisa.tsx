import React, { useEffect } from 'react';
import { Sparkles, Users, Brain } from 'lucide-react';
export const WhatIsNisa = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const blobs = document.querySelectorAll('.parallax-blob');
      blobs.forEach(blob => {
        const speed = blob.getAttribute('data-speed') || 0.15;
        const yPos = -(scrolled * speed);
        blob.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="what-is-nisa" className="w-full bg-primary-500 py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/40 via-primary-500/30 to-primary-400/20" />
      {/* Refined gradient blobs */}
      <div className="absolute top-1/2 -translate-y-1/2 right-1/3 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/30 via-primary-400/30 to-purple-400/30 rounded-full blur-3xl parallax-blob" data-speed="0.2"></div>
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/15 via-blue-400/15 to-indigo-400/15 rounded-full blur-3xl parallax-blob mix-blend-multiply z-0" data-speed="0.15"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-12 md:mb-20 text-center">
          <h2 className="relative z-10 text-h2-mobile md:text-h2-desktop font-serif font-normal text-white mb-4 leading-tight">
            Focus on your people,
            <br className="hidden md:block" /> not your paperwork
          </h2>

          <p className="text-xl text-white/100 max-w-3xl mx-auto">
            Great coaches are knowledgeable, intentional, and relational. They
            deserve better support to maximize their impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-5xl mx-auto">
          {[{
          icon: <img src="/Intelligent_Support.png" alt="" className="w-32 h-32 opacity-80" />,
          title: 'Intelligent Support',
          description: 'Streamline your work and keep relevant information at your fingertips, reducing administrative overhead.',
          gradient: 'from-cyan-500/90 to-blue-500/90'
        }, {
          icon: <img src="/Personalized_Support.png" alt="" className="w-32 h-32 opacity-80" />,
          title: 'Personalized Resources',
          description: "Integrate each teacher's context and needs into custom supports for deeper, more personal connections.",
          gradient: 'from-blue-500/90 to-teal-500/90'
        }, {
          icon: <img src="/Coach_Enhancement.png" alt="" className="w-32 h-32 opacity-80" />,
          title: 'Coach Enhancement',
          description: 'Support knowledgeable, intentional, and relational coaching practices without replacing your expertise.',
          gradient: 'from-teal-500/90 to-cyan-500/90'
        }].map((card, index) => <div key={index} className="group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-200/50 rounded-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-95 group-hover:opacity-100 transition-all duration-300`} />
              <div className="relative flex flex-col items-center text-center p-8 rounded-2xl text-white">
                <div className="mb-6 transform group-hover:scale-110 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};