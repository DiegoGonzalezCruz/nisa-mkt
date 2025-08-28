import React from 'react';
export const Features = () => {
  const features = [{
    icon: <img src="/Tracked_Goals_and_Action_Steps.png" alt="" className="w-20 h-20" />,
    title: 'Track Goals and Action Steps',
    description: 'Upload notes and generate meaningful action steps instantly'
  }, {
    icon: <img src="/Personalized_Podcasts.png" alt="" className="w-20 h-20" />,
    title: 'Personalized Podcasts',
    description: "Send custom podcast episodes aligned with each teacher's goals"
  }, {
    icon: <img src="/Efficient_Prep.png" alt="" className="w-20 h-20" />,
    title: 'Efficient Prep',
    description: 'Review coaching cycles and prep for 1:1s in seconds'
  }, {
    icon: <img src="/Cognitive_Support.png" alt="" className="w-20 h-20" />,
    title: 'Cognitive Support',
    description: 'Stay grounded in pedagogy while reducing mental load'
  }, {
    icon: <img src="/Smart_Reminders.png" alt="" className="w-20 h-20" />,
    title: 'Smart Reminders',
    description: 'Send timely reminders and encouragement to maintain momentum',
    comingSoon: true
  }];
  return <section id="features" className="w-full py-section-mobile md:py-section-desktop bg-white relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
      {/* Updated gradient blobs with increased saturation */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-green-400/20 via-emerald-400/20 to-teal-400/20 rounded-[60%_40%_55%_45%] blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-orange-400/20 via-amber-400/20 to-yellow-400/20 rounded-[45%_55%_50%_50%] blur-3xl animate-float" style={{
      animationDelay: '2.5s'
    }} />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-12 md:mb-20 text-center">
          <h2 className="text-h2-mobile md:text-h2-desktop font-serif font-normal text-gray-900 mb-4">
            Nisa is a coach's second brain
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
          // Array of background colors for cards
          const bgColors = ['bg-orange-100 hover:bg-orange-50', 'bg-amber-100 hover:bg-amber-50', 'bg-red-100 hover:bg-red-50', 'bg-purple-100 hover:bg-purple-50', 'bg-gray-100 hover:bg-gray-50'];
          return <div key={index} className={`group relative ${bgColors[index]} rounded-2xl p-8 shadow-glow hover:shadow-glow-hover transition-all duration-500 hover:-translate-y-1 border-2 border-gray-100`}>
                <div className="relative">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  {feature.comingSoon && <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-400/80 text-white">
                      Coming Soon
                    </span>}
                </div>
              </div>;
        })}
        </div>
        <div className="mt-20 max-w-2xl mx-auto text-center"></div>
      </div>
    </section>;
};