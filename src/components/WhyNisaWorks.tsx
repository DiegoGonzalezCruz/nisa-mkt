import React from 'react';
import { CheckCircle2, Users, School, Award } from 'lucide-react';
export const WhyNisaWorks = () => {
  const stats = [{
    icon: <Users className="w-6 h-6" />,
    value: '94%',
    label: 'of coaches report reduced administrative workload',
    gradient: 'from-primary-500 to-primary-600'
  }, {
    icon: <School className="w-6 h-6" />,
    value: '2.5x',
    label: 'more time spent directly supporting teachers',
    gradient: 'from-purple-600 to-pink-600'
  }, {
    icon: <Award className="w-6 h-6" />,
    value: '87%',
    label: 'of teachers report more personalized support',
    gradient: 'from-pink-600 to-orange-600'
  }];
  return <section id="why-nisa-works" className="w-full bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
      {/* Enhanced gradient blobs */}
      <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-400/10 via-indigo-400/10 to-blue-400/10 rounded-[40%_60%_50%_50%] blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-violet-400/10 via-purple-400/10 to-fuchsia-400/10 rounded-[55%_45%_40%_60%] blur-3xl animate-float" style={{
      animationDelay: '2.5s'
    }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-20 items-start">
          <div className="md:col-span-8 lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-4 leading-tight">
              Built on research.
              <br />
              Designed with coaches.
            </h2>
            <div className="space-y-8 md:space-y-10">
              <p className="text-xl text-gray-900">
                Nisa supports meaningful relationships and evidence-based
                instruction.
              </p>
              <div className="space-y-6 text-gray-600">
                <p>
                  We believe coaching should feel human. Nisa is designed to
                  model instructional best practices. Instead of simply
                  automating tasks, we provide research-aligned scaffolds
                  grounded in the real world of coaching.
                </p>
                <p>
                  The system is powered by a deep partnership with Teaching
                  Lab's team of instructional experts, drawing on a proven
                  coaching theory of action used in districts across the
                  country.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-5 space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                {['Research-backed coaching frameworks', 'Evidence-based instructional strategies', 'Personalized teacher support pathways'].map((point, index) => <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle2 className="w-7 h-7 text-primary-600" />
                    </div>
                    <span className="text-lg text-gray-800 font-medium">
                      {point}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};