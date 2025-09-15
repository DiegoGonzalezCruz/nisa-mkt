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
  return <section id="vision-story" className="w-full py-section-mobile md:py-section-desktop bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 opacity-100">
            <h2 className="text-h2-mobile md:text-h2-desktop font-serif font-normal text-teal-900 mb-4 leading-tight">
              Why we built Nisa
            </h2>
            <p className="text-xl text-teal-800 max-w-3xl mx-auto">
              Our vision is to extend the reach of great instructional coaches,
              making their expertise and support more accessible to every
              teacher.
            </p>
          </div>
          {/* Vision Points */}
          {/* Video Section */}
          <div className="relative lg:max-w-[80%] lg:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl opacity-90" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-800">
              <ReactPlayer url="https://www.youtube.com/watch?v=JAwX1PJzNJU" width="100%" height="100%" controls playing={false} light={true} playIcon={<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20 transition-transform hover:scale-110 duration-300">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>} className="aspect-video" />
            </div>
          </div>
          {/* Bottom Content */}
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center lg:max-w-[80%] lg:mx-auto">
            <div className="space-y-6">
              <p className="text-xl text-teal-800">
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
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};