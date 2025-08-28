import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsNisa } from './components/WhatIsNisa';
import { Features } from './components/Features';
import { WhyNisaWorks } from './components/WhyNisaWorks';
import { VisionStory } from './components/VisionStory';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './components/ModalContext';
export function App() {
  return <BrowserRouter>
      <ModalProvider>
        <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
          <Routes>
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/" element={<>
                  <Header />
                  <main className="relative">
                    <div>
                      <Hero />
                      <WhatIsNisa />
                      <Features />
                      <WhyNisaWorks />
                      <VisionStory />
                      <CallToAction />
                    </div>
                  </main>
                  <Footer />
                </>} />
          </Routes>
        </div>
      </ModalProvider>
    </BrowserRouter>;
}