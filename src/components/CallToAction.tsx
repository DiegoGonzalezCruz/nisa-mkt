import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useModal } from './ModalContext';
export const CallToAction = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    openSignupModal
  } = useModal();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  return <section id="cta" className="w-full bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
      {/* Enhanced gradient blobs */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-400/10 via-sky-400/10 to-blue-400/10 rounded-[50%_50%_45%_55%] blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 via-indigo-400/10 to-violet-400/10 rounded-[45%_55%_50%_50%] blur-3xl animate-float" style={{
      animationDelay: '3.5s'
    }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            <div className="lg:col-span-12">
              <div className="backdrop-blur-sm bg-white/30 rounded-3xl p-6 md:p-8 lg:p-12">
                <h2 className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-6 md:mb-8 leading-tight">
                  We're building with the best coaches in the country.
                </h2>
                <div className="space-y-6 md:space-y-8">
                  <p className="text-xl md:text-2xl text-gray-900 font-normal leading-relaxed">
                    Join our early pilot network and help shape what coaching
                    can look like when the tools actually work for you.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Whether you're supporting 6 teachers or 60, Nisa is here to
                    make your day-to-day more intentional, less overwhelming,
                    and a lot more impactful.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-12">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl shadow-glow p-4 md:p-8 lg:p-10 space-y-8 border border-primary-100 transition-all duration-300 hover:shadow-glow-hover backdrop-blur-sm">
                <div className="space-y-6">
                  {isSubmitted ? <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Thanks for joining!
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        We'll be in touch soon.
                      </p>
                    </div> : <form onSubmit={handleSubmit} className="space-y-6">
                      <div></div>
                      <Button type="button" size="lg" fullWidth onClick={openSignupModal}>
                        Sign up for Nisa updates
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};