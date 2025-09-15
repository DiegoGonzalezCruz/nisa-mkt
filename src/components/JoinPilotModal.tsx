import React, { useEffect, useState } from "react";
import { CalendarClock, DollarSign, Target, Users, XIcon } from "lucide-react";
import { useJoinPilotForm } from "../hooks/useJoinPilotForm.ts";
import { PilotApplicationForm } from "./PilotApplicationForm.tsx";
import { SubmissionSuccessMessage } from "./SubmissionSuccessMessage.tsx";

interface JoinPilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  origin: {
    x: number;
    y: number;
  } | null;
}

export const JoinPilotModal = ({
  isOpen,
  onClose,
  origin,
}: JoinPilotModalProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleSubmit,
  } = useJoinPilotForm();

  useEffect(() => {
    if (isOpen) {
      setAnimationComplete(false);
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getTransformOriginStyle = () => {
    if (!origin) return {};
    const originX = (origin.x / window.innerWidth) * 100;
    const originY = (origin.y / window.innerHeight) * 100;
    return {
      transformOrigin: `${originX}% ${originY}%`,
    };
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-white transition-all duration-400 ease-out ${
        animationComplete ? "" : "scale-enter"
      }`}
      style={getTransformOriginStyle()}
    >
      <style>{`
        .scale-enter {
          transform: scale(0.1);
          opacity: 0;
        }
      `}</style>
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
          aria-label="Close modal"
        >
          <XIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <main className="relative min-h-screen bg-gradient-to-r from-white via-primary-50/40 to-blue-50/30 overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[600px] h-[500px] bg-gradient-to-br from-orange-400/20 via-red-400/20 to-yellow-400/20 rounded-[60%_40%_55%_45%] blur-3xl transform rotate-12 animate-float"></div>
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[600px] bg-gradient-to-tr from-purple-500/20 via-violet-400/20 to-fuchsia-400/20 rounded-[40%_60%_45%_55%] blur-3xl transform -rotate-12 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] z-0" />
        <section className="w-full pt-12 pb-3 md:pt-16 md:pb-4 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div id="hero-logo" className="mb-4 text-center">
                <img
                  src="/nisa-capriola-logotype.png"
                  alt="Nisa"
                  className="h-10 md:h-14 w-auto mx-auto"
                />
              </div>
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-serif font-normal text-gray-900 mb-4 text-center pt-5">
                  Join the Nisa coaching pilot
                </h1>
                <p className="text-base md:text-lg text-gray-700 px-4">
                  Nisa is a platform for instructional coaches to extend
                  professional learning between coaching sessions. Our AI tools
                  lighten your workload and strengthen coach–teacher
                  relationships.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12 relative z-10">
          <div className="absolute -top-[400px] -right-[300px] w-[1000px] h-[1000px] bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-teal-400/10 rounded-[55%_45%_60%_40%] blur-3xl animate-float z-0"></div>
          <div
            className="absolute -bottom-[300px] -left-[200px] w-[900px] h-[900px] bg-gradient-to-tr from-purple-400/10 via-violet-400/10 to-fuchsia-400/10 rounded-[40%_60%_55%_45%] blur-3xl animate-float z-0"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[10%] left-[30%] w-[800px] h-[800px] bg-gradient-to-r from-amber-400/10 via-orange-400/10 to-pink-400/10 rounded-[45%_55%_40%_60%] blur-3xl animate-float z-0"
            style={{ animationDelay: "3.5s" }}
          ></div>
          <div
            className="absolute bottom-[20%] right-[20%] w-[700px] h-[700px] bg-gradient-to-l from-emerald-400/10 via-green-400/10 to-lime-400/10 rounded-[60%_40%_50%_50%] blur-3xl animate-float z-0"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl py-5 px-9 shadow-sm border border-gray-100">
                  <h3 className="text-lg md:text-xl font-sans font-medium text-gray-800 mb-3">
                    Now recruiting for the first coach cohort
                  </h3>
                  <p className="text-sm text-gray-700 mb-6">
                    We're building a group of US-based instructional coaches,
                    currently working in K-12 schools. Coaches can join at any
                    point in the school year.
                  </p>
                  <div className="border-none border-gray-100 pt-4 mt-4">
                    <h3 className="text-lg md:text-xl font-sans font-medium text-gray-800 mb-3">
                      Benefits for pilot coaches
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <div className="bg-blue-50/70 rounded-lg p-3 border border-blue-100/50 hover:shadow-sm transition-shadow">
                        <div className="flex items-center">
                          <div className="bg-blue-100 rounded-full p-1.5 mr-3 flex-shrink-0">
                            <CalendarClock className="w-4 h-4 text-blue-700" />
                          </div>
                          <span className="text-sm text-gray-800">
                            Get early access at no cost for '25–'26
                          </span>
                        </div>
                      </div>
                      <div className="bg-cyan-50/70 rounded-lg p-3 border border-cyan-100/50 hover:shadow-sm transition-shadow">
                        <div className="flex items-center">
                          <div className="bg-cyan-100 rounded-full p-1.5 mr-3 flex-shrink-0">
                            <DollarSign className="w-4 h-4 text-cyan-700" />
                          </div>
                          <span className="text-sm text-gray-800">
                            Access paid feedback opportunities
                          </span>
                        </div>
                      </div>
                      <div className="bg-primary-50/70 rounded-lg p-3 border border-primary-100/50 hover:shadow-sm transition-shadow">
                        <div className="flex items-center">
                          <div className="bg-primary-100 rounded-full p-1.5 mr-3 flex-shrink-0">
                            <Users className="w-4 h-4 text-primary-700" />
                          </div>
                          <span className="text-sm text-gray-800">
                            Receive support and connect with other coaches
                          </span>
                        </div>
                      </div>
                      <div className="bg-purple-50/70 rounded-lg p-3 border border-purple-100/50 hover:shadow-sm transition-shadow">
                        <div className="flex items-center">
                          <div className="bg-purple-100 rounded-full p-1.5 mr-3 flex-shrink-0">
                            <Target className="w-4 h-4 text-purple-700" />
                          </div>
                          <span className="text-sm text-gray-800">
                            Shape the future of coaching tools
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                  {isSubmitted ? (
                    <SubmissionSuccessMessage />
                  ) : (
                    <PilotApplicationForm
                      formData={formData}
                      isSubmitting={isSubmitting}
                      handleInputChange={handleInputChange}
                      handleSubmit={handleSubmit}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
