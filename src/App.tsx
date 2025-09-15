import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatIsNisa } from "./components/WhatIsNisa";
import { Features } from "./components/Features";
import { WhyNisaWorks } from "./components/WhyNisaWorks";
import { VisionStory } from "./components/VisionStory";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { AboutUs } from "./pages/AboutUs";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ModalProvider } from "./components/ModalContext";
import { BackgroundGraphics } from "./components/BackgroundGraphics";
// This component handles scrolling to anchors when the home page loads
const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === "/" && hash) {
      // Remove the '#' character
      const id = hash.substring(1);
      // Give the DOM time to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname, hash]);
  return null;
};
export function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ScrollToAnchor />
        <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
          <Routes>
            <Route
              path="/terms"
              element={
                <>
                  <Header isStatic={true} />
                  <Terms />
                </>
              }
            />
            <Route
              path="/privacy"
              element={
                <>
                  <Header isStatic={true} />
                  <Privacy />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header isStatic={true} />
                  <AboutUs />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <main className="relative">
                    <BackgroundGraphics />
                    <div className="relative z-10">
                      <Hero />
                      <WhatIsNisa />
                      <Features />
                      <WhyNisaWorks />
                      <VisionStory />
                      <CallToAction />
                    </div>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
}
