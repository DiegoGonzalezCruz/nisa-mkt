import React from 'react';
export const BackgroundGraphics = () => {
  return <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02]" />
      {/* Main gradient blobs - now with cyan-10 and teal-20 variations */}
      <div className="absolute top-0 right-1/4 w-[900px] h-[900px] bg-gradient-to-br from-cyan-400/10 via-teal-400/20 to-blue-400/10 rounded-[60%_40%_55%_45%] blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-teal-400/20 via-cyan-400/10 to-sky-400/10 rounded-[40%_60%_45%_55%] blur-3xl animate-float" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-gradient-to-br from-sky-400/10 via-cyan-400/10 to-teal-400/20 rounded-[45%_55%_50%_50%] blur-3xl animate-float" style={{
      animationDelay: '3.5s'
    }} />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/20 via-cyan-300/10 to-emerald-400/10 rounded-[55%_45%_40%_60%] blur-3xl animate-float" style={{
      animationDelay: '1.5s'
    }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
    </div>;
};