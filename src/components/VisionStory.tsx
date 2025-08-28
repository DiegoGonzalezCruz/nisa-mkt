import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { PlayCircle, Lightbulb, Heart, Target } from 'lucide-react';
export const VisionStory = () => {
  const visionPoints = [{
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation in Education',
    description: 'Reimagining how technology can support meaningful coaching relationships',
    gradient: 'from-primary-500 to-blue-600'
  }, {
    icon: <Heart className="w-6 h-6" />,
    title: 'Human-Centered Design',
    description: 'Built with and for instructional coaches to enhance their impact',
    gradient: 'from-blue-600 to-purple-600'
  }, {
    icon: <Target className="w-6 h-6" />,
    title: 'Measurable Impact',
    description: 'Focused on improving teacher support and student outcomes',
    gradient: 'from-pink-600 to-orange-600'
  }];
  return <section id="vision-story" className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50 -z-10" />
      {/* Gradient blobs */}
      <div className="absolute top-0 right-1/4 w-[900px] h-[900px] bg-gradient-to-br from-orange-400/10 via-amber-400/10 to-yellow-400/10 rounded-[45%_55%_40%_60%] blur-3xl animate-float -z-10" />
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-tr from-red-400/10 via-orange-400/10 to-amber-400/10 rounded-[60%_40%_55%_45%] blur-3xl animate-float" style={{
      animationDelay: '4s'
    }} />
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 opacity-100">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-4">
              Why We Built Nisa
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vision is to extend the reach of great instructional coaches,
              making their expertise and support more accessible to every
              teacher.
            </p>
          </div>
          {/* Vision Points */}

          {/* Video Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl opacity-90" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-800">
              <ReactPlayer url="https://www.youtube.com/watch?v=JAwX1PJzNJU" width="100%" height="100%" controls playing={false} light={true} playIcon={<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20 transition-transform hover:scale-110 duration-300">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>} className="aspect-video" />
            </div>
          </div>
          {/* Bottom Content */}
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-900">
                In this short talk at{' '}
                <span className="font-medium">The AI Show at ASU+GSV 2025</span>
                , learn how Nisa aims to transform instructional coaching.
              </p>
              <p className="text-gray-600">
                From overloaded teachers to the promise of "AI as connective
                tissue," this vision grounds every decision we make.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
                Video: The AI Show at ASU+GSV 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};