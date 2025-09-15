import { Footer } from "../components/Footer";
import {
  BookOpen,
  Brain,
  Handshake,
  Globe,
  Target,
  Building,
  Ear,
} from "lucide-react";
export const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="relative flex-grow overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />
        {/* XL Cyan gradient blob */}
        <div className="absolute -top-[200px] left-1/3 w-[1200px] h-[1200px] bg-gradient-to-br from-cyan-400/20 via-cyan-300/15 to-primary-200/10 rounded-[45%_55%_50%_50%] blur-3xl -z-10" />
        {/* Hero section */}
        <section className="w-full pt-16 pb-10 md:pt-20 md:pb-14 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[900px] h-[900px] bg-gradient-to-br from-cyan-700/10 via-teal-500/20 to-blue-400/10 rounded-[60%_40%_55%_45%] blur-3xl -z-10" />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6 justify-center p-0">
                <h1 className="text-4xl md:text-4xl font-serif font-normal text-cyan-900 text-center md:text-left pt-6">
                  About the Nisa Team
                </h1>
                <div className="md:w-auto flex justify-center">
                  <img
                    src="/Nisa_-_Plant_Arc_Growth.png"
                    alt="Plant growth illustration"
                    className="w-full max-w-[150px]"
                  />
                </div>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="text-xl font-medium mb-6 text-center">
                  We believe great instruction is a right, not a privilege.
                </p>
                <p
                  className="mb-6 text-lg pb-5 mx-auto"
                  style={{
                    width: "calc(80% + 40px)",
                  }}
                >
                  We're building tools that support the people who make that
                  possible every day: instructional coaches and the teachers
                  they partner with. Whether it's helping a coach prepare a
                  planning session, supporting a teacher as they refine their
                  lesson, or capturing insights from classroom practice, Nisa is
                  designed to show up quietly and helpfully—just when it's
                  needed.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Mission image moved here, above Why Nisa section */}
        <div className="mb-10 max-w-3xl mx-auto">
          <img
            src="/image.png"
            alt="Our Mission: Reduce the mental overhead of coaching and teaching, so educators can focus on what matters most: great instruction and thriving classrooms."
            className="w-full rounded-lg shadow-sm"
          />
        </div>
        {/* Why Nisa section */}
        <section className="w-full py-section-mobile relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-blue-50/30">
          <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-teal-400/20 via-cyan-400/10 to-sky-400/10 rounded-[40%_60%_45%_55%] blur-3xl -z-10" />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-2xl md:text-4xl font-serif font-normal text-gray-600">
                  Why "Nisa"?
                </h2>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100">
                <p className="mb-6 text-gray-700">
                  The name "Nisa" is inspired by Nisaba, the ancient Sumerian
                  goddess of learning, writing, and memory. She was believed to
                  hold humanity's story—tracking its unfolding through careful
                  inscription. That same spirit lives in our work.
                </p>
                <p className="mb-6 text-gray-700">How Nisa helps educators:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-sky-100 to-sky-200/90 rounded-lg p-4 border border-sky-300/60 hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-sky-200 to-sky-300 rounded-full p-3 mb-3 flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-sky-700" />
                      </div>
                      <span className="text-gray-800 font-medium">
                        Capture what matters
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-100 to-blue-200/90 rounded-lg p-4 border border-indigo-300/60 hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-indigo-200 to-blue-300 rounded-full p-3 mb-3 flex-shrink-0">
                        <Target className="w-5 h-5 text-indigo-700" />
                      </div>
                      <span className="text-gray-800 font-medium">
                        Plan with purpose
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-fuchsia-200/90 rounded-lg p-4 border border-purple-300/60 hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-purple-200 to-fuchsia-300 rounded-full p-3 mb-3 flex-shrink-0">
                        <Building className="w-5 h-5 text-purple-700" />
                      </div>
                      <span className="text-gray-800 font-medium">
                        Build conditions for excellent, equitable teaching
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Like Nisaba, we honor the knowledge that lives in classrooms.
                  We see educators not just as implementers of curriculum, but
                  as authors of progress. Nisa is here to support their wisdom,
                  not replace it.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Values section */}
        <section className="w-full py-section-mobile relative overflow-hidden">
          <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-gradient-to-br from-sky-400/10 via-cyan-400/10 to-teal-400/20 rounded-[45%_55%_50%_50%] blur-3xl -z-10" />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-2xl md:text-4xl font-serif font-normal text-gray-600">
                  Our Values
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-100/80 rounded-lg p-6 border border-cyan-200/60 hover:shadow-sm transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-cyan-300 rounded-md p-1 mr-4 flex-shrink-0">
                      <Ear className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Listen deeply
                      </h3>
                      <p className="text-gray-700">
                        We center the lived experiences of educators. Their
                        voice shapes everything we build.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-100/80 rounded-lg p-6 border border-teal-200/60 hover:shadow-sm transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-teal-300 rounded-md p-1 mr-4 flex-shrink-0">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Reduce cognitive load
                      </h3>
                      <p className="text-gray-700">
                        Teaching and coaching are complex. We strive to bring
                        clarity, not clutter.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-sky-100/80 rounded-lg p-6 border border-sky-200/60 hover:shadow-sm transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-sky-300 rounded-md p-1 mr-4 flex-shrink-0">
                      <Handshake className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Partner with purpose
                      </h3>
                      <p className="text-gray-700">
                        We don't chase trends. We build tools that integrate
                        into real workflows and support lasting change.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-100/80 rounded-lg p-6 border border-primary-200/60 hover:shadow-sm transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-300 rounded-md p-1 mr-4 flex-shrink-0">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Equity as a design principle
                      </h3>
                      <p className="text-gray-700">
                        We believe every student deserves access to excellent
                        instruction—and every educator deserves tools that
                        support that mission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Who We Are section */}
        <section className="w-full py-section-mobile pb-16 relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-blue-50/30">
          <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/20 via-cyan-300/10 to-emerald-400/10 rounded-[55%_45%_40%_60%] blur-3xl -z-10" />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-2xl md:text-4xl font-serif font-normal text-gray-600">
                  Who We Are
                </h2>
              </div>
              <div className="bg-gradient-to-r from-cyan-100/25 to-teal-200/25 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center">
                <div className="md:w-auto flex-shrink-0">
                  <img
                    src="/Nisa_Duo_Orange.png"
                    alt="Nisa team illustration"
                    className="w-full max-w-[224px]"
                  />
                </div>
                <div className="md:flex-1">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We're a team of educators and technologists committed to
                    reimagining the tools educators use every day. We've taught
                    in classrooms, led school teams, coached teachers, and built
                    edtech products. Now we're building something better for the
                    people we've worked alongside and the communities they
                    serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
