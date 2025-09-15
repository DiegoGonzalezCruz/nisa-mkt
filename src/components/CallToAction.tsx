import React, { useState } from "react";
import { Button } from "./Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useModal } from "./ModalContext";
export const CallToAction = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { openSignupModal, openJoinPilotModal } = useModal();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <section
      id="cta"
      className="w-full bg-white py-section-mobile md:py-section-desktop relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            <div className="lg:col-span-12"></div>
            <div className="lg:col-span-12">
              <img
                src="/image.png"
                alt="Decorative divider with plant illustrations"
                className="w-full mx-auto mb-8"
              />
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl shadow-glow p-4 md:p-8 lg:p-10 space-y-8 border border-primary-100 transition-all duration-300 hover:shadow-glow-hover backdrop-blur-sm lg:max-w-[80%] lg:mx-auto">
                <h2 className="text-h2-mobile md:text-h2-desktop font-serif font-normal text-cyan-800 mb-4 leading-tight text-center">
                  Building with the best coaches in the country
                </h2>
                <div className="space-y-6 md:space-y-8 max-w-[80%] mx-auto">
                  <p className="text-base font-medium md:text-lg text-gray-600 leading-relaxed text-center">
                    Join our early pilot network to shape what coaching can look
                    like when tools actually work for you.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                    Whether you're supporting 6 teachers or 60, Nisa is here to
                    make your day-to-day more intentional, less overwhelming,
                    and a lot more impactful.
                  </p>
                </div>
                <div className="space-y-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Thanks for joining!
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        We'll be in touch soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div></div>
                      <div className="flex justify-center">
                        <div className="transform scale-110">
                          <Button
                            type="button"
                            size="lg"
                            onClick={openJoinPilotModal}
                          >
                            Join the Nisa pilot
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
