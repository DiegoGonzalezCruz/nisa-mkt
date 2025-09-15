import { CheckCircle2, Users, School, Award } from "lucide-react";
export const WhyNisaWorks = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "94%",
      label: "of coaches report reduced administrative workload",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: <School className="w-6 h-6" />,
      value: "2.5x",
      label: "more time spent directly supporting teachers",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "87%",
      label: "of teachers report more personalized support",
      gradient: "from-pink-600 to-orange-600",
    },
  ];
  return (
    <section
      id="why-nisa-works"
      className="w-full bg-white py-section-mobile md:py-section-desktop relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-20 items-start">
          <div className="md:col-span-8 lg:col-span-7">
            <h2 className="text-h2-mobile md:text-h2-desktop font-serif font-normal text-cyan-800 mb-4 leading-tight">
              Built on research.
              <br />
              Designed with coaches.
            </h2>
            <div className="space-y-8 md:space-y-10">
              <p className="text-xl text-cyan-900">
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
          <div className="md:col-span-4 lg:col-span-5 space-y-8 lg:flex lg:flex-col lg:justify-end">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                {[
                  "Research-backed coaching frameworks",
                  "Evidence-based instructional strategies",
                  "Personalized teacher support pathways",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle2 className="w-7 h-7 text-primary-600" />
                    </div>
                    <span className="text-lg text-gray-800 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
