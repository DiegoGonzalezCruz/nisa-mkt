import React, { useEffect } from 'react';
import { Button } from './Button';
import { PlayIcon, Users, Brain, Target, Star, Heart, BookOpenIcon } from 'lucide-react';
import { useModal } from './ModalContext';
export const Hero = () => {
  const {
    openSignupModal
  } = useModal();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxFast = document.querySelector('.parallax-fast');
      if (parallaxFast) parallaxFast.setAttribute('style', `transform: translateY(${scrollY * 0.02}px)`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section className="w-full py-24 md:py-32 overflow-hidden relative bg-gradient-to-br from-white via-primary-50/30 to-blue-50/30">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-20 w-[800px] h-[600px] bg-gradient-to-br from-orange-400/20 via-red-400/20 to-yellow-400/20 rounded-[60%_40%_55%_45%] blur-3xl transform rotate-12 animate-float"></div>
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[800px] bg-gradient-to-tr from-purple-500/20 via-violet-400/20 to-fuchsia-400/20 rounded-[40%_60%_45%_55%] blur-3xl transform -rotate-12 animate-float" style={{
      animationDelay: '2s'
    }}></div>
      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pattern overlay with 30% opacity behind gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-blue-50/30" />
        {/* Background gradient blob */}
        <div className="absolute -top-40 -right-20 w-[800px] h-[600px] bg-gradient-to-br from-primary-400/30 via-blue-400/30 to-purple-400/30 rounded-[60%_40%_55%_45%] blur-3xl transform rotate-12"></div>
        {/* Icons with adjusted opacity */}
        <div className="absolute top-20 left-[10%] w-32 h-32 text-white/10 transform -rotate-12">
          <BookOpenIcon strokeWidth={1} />
        </div>
        <div className="absolute top-40 right-[15%] w-40 h-40 text-white/10 transform rotate-12">
          <Users strokeWidth={1} />
        </div>
        <div className="absolute bottom-40 left-[20%] w-36 h-36 text-white/10 transform rotate-45">
          <Brain strokeWidth={1} />
        </div>
        <div className="absolute top-1/3 right-[25%] w-28 h-28 text-white/10">
          <Target strokeWidth={1} />
        </div>
        <div className="absolute bottom-1/4 right-[10%] w-24 h-24 text-white/10 transform -rotate-12">
          <Star strokeWidth={1} />
        </div>
        <div className="absolute top-2/3 left-[15%] w-32 h-32 text-white/10">
          <Heart strokeWidth={1} />
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div id="hero-logo" className="mb-8 lg:mb-12">
              <img src="/nisa-capriola-logotype.png" alt="Nisa" className="h-14 md:h-20 w-auto" />
            </div>
            <h1 className="font-serif font-medium text-display-mobile md:text-display-desktop text-gray-900 mb-6 lg:mb-10 leading-tight">
              Coaching simplified.
              <br />
              Impact multiplied.
            </h1>
            <div className="gradient-line w-16 md:w-24 mb-6 lg:mb-10"></div>
            <p className="text-body-large text-gray-600 mb-8 max-w-2xl leading-[1.35] md:leading-normal">
              Nisa is a thoughtful companion for instructional coaches. Our
              ecosystem of connected tools understands your context, lightens
              your load, and helps you support teachers more meaningfully. Chat
              with Nisa anytime for all of your coaching touchpoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative group">
                <Button size="lg" onClick={openSignupModal}>
                  Save your spot
                </Button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out top-full left-1/2 transform -translate-x-1/2 translate-y-2 mt-1 w-48 bg-gray-500 text-white text-xs rounded-md py-2 px-3 pointer-events-none">
                  Reserve early access to Nisa's pilot tools
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-500"></div>
                </div>
              </div>
              <div className="relative group">
                <Button size="lg" variant="secondary" onClick={openSignupModal}>
                  Stay in the loop
                </Button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out top-full left-1/2 transform -translate-x-1/2 translate-y-2 mt-1 w-48 bg-gray-500 text-white text-xs rounded-md py-2 px-3 pointer-events-none">
                  Follow along for news, tips, and resources
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative h-full">
              <img src="/Nisa_Duo_-_Coach_2B_Teacher.png" alt="Illustration of a coach and teacher having a conversation" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};