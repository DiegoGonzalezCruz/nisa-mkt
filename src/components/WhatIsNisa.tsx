import React from 'react';
import { Sparkles, Users, Brain } from 'lucide-react';
export const WhatIsNisa = () => {
  return <section id="what-is-nisa" className="w-full bg-primary-500 py-section-mobile md:py-section-desktop relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-5xl lg:max-w-[80%] mx-auto">
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