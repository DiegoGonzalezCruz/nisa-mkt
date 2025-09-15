import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, HelpCircle, XIcon, CalendarClock, Target, Users, DollarSign } from 'lucide-react';
import { Button } from './Button';
interface JoinPilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  origin: {
    x: number;
    y: number;
  } | null;
}
interface FormData {
  fullName: string;
  email: string;
  city: string;
  state: string;
  schools: string;
  coachingCapacity: {
    schoolCoach: boolean;
    districtCoach: boolean;
    coachingProviderEmployee: boolean;
    contractor: boolean;
    administrator: boolean;
    other: boolean;
    otherText: string;
  };
  subjectsAndGrades: string;
  curricula: {
    illustrativeMath: boolean;
    eurekaMath: boolean;
    other: boolean;
    otherText: string;
  };
  teachingLabRelationship: {
    fullTimeEmployee: boolean;
    partTimeFacilitator: boolean;
    tabMember: boolean;
    notAffiliated: boolean;
  };
  hearAboutNisa: string;
  whyInterested: string;
}
export const JoinPilotModal: React.FC<JoinPilotModalProps> = ({
  isOpen,
  onClose,
  origin
}) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    city: '',
    state: '',
    schools: '',
    coachingCapacity: {
      schoolCoach: false,
      districtCoach: false,
      coachingProviderEmployee: false,
      contractor: false,
      administrator: false,
      other: false,
      otherText: ''
    },
    subjectsAndGrades: '',
    curricula: {
      illustrativeMath: false,
      eurekaMath: false,
      other: false,
      otherText: ''
    },
    teachingLabRelationship: {
      fullTimeEmployee: false,
      partTimeFacilitator: false,
      tabMember: false,
      notAffiliated: false
    },
    hearAboutNisa: '',
    whyInterested: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const checked = checkbox.checked;
      if (name.startsWith('curricula.')) {
        const curriculaField = name.split('.')[1];
        setFormData(prev => ({
          ...prev,
          curricula: {
            ...prev.curricula,
            [curriculaField]: checked
          }
        }));
      } else if (name.startsWith('teachingLabRelationship.')) {
        const relationshipField = name.split('.')[1];
        setFormData(prev => ({
          ...prev,
          teachingLabRelationship: {
            ...prev.teachingLabRelationship,
            [relationshipField]: checked
          }
        }));
      } else if (name.startsWith('coachingCapacity.')) {
        const capacityField = name.split('.')[1];
        setFormData(prev => ({
          ...prev,
          coachingCapacity: {
            ...prev.coachingCapacity,
            [capacityField]: checked
          }
        }));
      }
    } else {
      // Handle text inputs and textareas
      if (name === 'curricula.otherText') {
        setFormData(prev => ({
          ...prev,
          curricula: {
            ...prev.curricula,
            otherText: value
          }
        }));
      } else if (name === 'coachingCapacity.otherText') {
        setFormData(prev => ({
          ...prev,
          coachingCapacity: {
            ...prev.coachingCapacity,
            otherText: value
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  useEffect(() => {
    if (isOpen) {
      // Reset animation state when modal opens
      setAnimationComplete(false);
      // Mark animation as complete after transition ends
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 400); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  if (!isOpen) return null;
  // Calculate transform origin based on button position
  const getTransformOriginStyle = () => {
    if (!origin) return {};
    // Convert absolute position to percentage of viewport
    const originX = origin.x / window.innerWidth * 100;
    const originY = origin.y / window.innerHeight * 100;
    return {
      transformOrigin: `${originX}% ${originY}%`
    };
  };
  return <div className={`fixed inset-0 z-50 overflow-y-auto bg-white transition-all duration-400 ease-out ${animationComplete ? '' : 'scale-enter'}`} style={{
    ...getTransformOriginStyle()
  }}>
      <style jsx global>{`
        .scale-enter {
          transform: scale(0.1);
          opacity: 0;
        }
        @keyframes rippleEffect {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 122, 143, 0.3);
          }
          100% {
            box-shadow: 0 0 0 100vmax rgba(0, 122, 143, 0);
          }
        }
      `}</style>
      <div className="absolute top-4 right-4 z-50">
        <button onClick={onClose} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center" aria-label="Close modal">
          <XIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <main className="relative min-h-screen bg-gradient-to-r from-white via-primary-50/40 to-blue-50/30 overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute -top-40 -right-20 w-[600px] h-[500px] bg-gradient-to-br from-orange-400/20 via-red-400/20 to-yellow-400/20 rounded-[60%_40%_55%_45%] blur-3xl transform rotate-12 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[600px] bg-gradient-to-tr from-purple-500/20 via-violet-400/20 to-fuchsia-400/20 rounded-[40%_60%_45%_55%] blur-3xl transform -rotate-12 animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] z-0" />
        {/* Header section */}
        <section className="w-full pt-12 pb-3 md:pt-16 md:pb-4 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div id="hero-logo" className="mb-4 text-center">
                <img src="/nisa-capriola-logotype.png" alt="Nisa" className="h-10 md:h-14 w-auto mx-auto" />
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
        {/* Content section */}
        <section className="w-full py-8 md:py-12 relative z-10">
          {/* XL Gradient Blobs - Background Layer */}
          <div className="absolute -top-[400px] -right-[300px] w-[1000px] h-[1000px] bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-teal-400/10 rounded-[55%_45%_60%_40%] blur-3xl animate-float z-0"></div>
          <div className="absolute -bottom-[300px] -left-[200px] w-[900px] h-[900px] bg-gradient-to-tr from-purple-400/10 via-violet-400/10 to-fuchsia-400/10 rounded-[40%_60%_55%_45%] blur-3xl animate-float z-0" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-[10%] left-[30%] w-[800px] h-[800px] bg-gradient-to-r from-amber-400/10 via-orange-400/10 to-pink-400/10 rounded-[45%_55%_40%_60%] blur-3xl animate-float z-0" style={{
          animationDelay: '3.5s'
        }}></div>
          <div className="absolute bottom-[20%] right-[20%] w-[700px] h-[700px] bg-gradient-to-l from-emerald-400/10 via-green-400/10 to-lime-400/10 rounded-[60%_40%_50%_50%] blur-3xl animate-float z-0" style={{
          animationDelay: '1.5s'
        }}></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                {/* Combined content in a single container */}
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
              {/* Application Form Section */}
              <div className="mb-12">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                  {isSubmitted ? <div className="py-8">
                      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-700 mb-6 mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4 text-center">
                        Thank you for applying!
                      </h3>
                      <p className="text-lg text-gray-700 text-center">
                        We've received your application for the Nisa coaching
                        pilot. We'll be in touch with you soon about next steps.
                      </p>
                    </div> : <>
                      <h3 className="text-xl md:text-xl font-sans font-medium text-gray-800 mb-4">
                        Tell us about yourself
                      </h3>
                      <p className="text-base text-gray-700 mb-6">
                        Please complete the form below. We'll review your
                        application promptly and be in touch soon. If you have
                        any questions, feel free to contact{' '}
                        <a href="mailto:info@nisa.coach" className="text-primary-700 hover:text-primary-800 font-medium">
                          info@nisa.coach
                        </a>
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            Where are you based?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <input type="text" id="city" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                            </div>
                            <div>
                              <input type="text" id="state" name="state" placeholder="State" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="schools" className="block text-sm font-medium text-gray-700 mb-1">
                            Which school(s) do you currently coach?
                          </label>
                          <input type="text" id="schools" name="schools" value={formData.schools} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                        <div>
                          <label htmlFor="coachingCapacity" className="block text-sm font-medium text-gray-700 mb-1">
                            How do you serve as a coach at these schools?
                          </label>
                          <div className="space-y-2 mt-2">
                            <div className="flex items-start">
                              <input type="checkbox" id="schoolCoach" name="coachingCapacity.schoolCoach" checked={formData.coachingCapacity.schoolCoach} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="schoolCoach" className="text-sm text-gray-700">
                                School Coach
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="districtCoach" name="coachingCapacity.districtCoach" checked={formData.coachingCapacity.districtCoach} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="districtCoach" className="text-sm text-gray-700">
                                District Coach
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="coachingProviderEmployee" name="coachingCapacity.coachingProviderEmployee" checked={formData.coachingCapacity.coachingProviderEmployee} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="coachingProviderEmployee" className="text-sm text-gray-700">
                                Coaching Provider Employee
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="contractor" name="coachingCapacity.contractor" checked={formData.coachingCapacity.contractor} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="contractor" className="text-sm text-gray-700">
                                Contractor
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="administrator" name="coachingCapacity.administrator" checked={formData.coachingCapacity.administrator} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="administrator" className="text-sm text-gray-700">
                                Administrator
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="otherCapacity" name="coachingCapacity.other" checked={formData.coachingCapacity.other} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="otherCapacity" className="text-sm text-gray-700">
                                Other
                              </label>
                              {formData.coachingCapacity.other && <input type="text" id="otherCapacityText" name="coachingCapacity.otherText" value={formData.coachingCapacity.otherText} onChange={handleInputChange} placeholder="Please specify" className="ml-2 px-3 py-1 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />}
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subjectsAndGrades" className="block text-sm font-medium text-gray-700 mb-1">
                            What subjects and grade levels do you coach?
                          </label>
                          <input type="text" id="subjectsAndGrades" name="subjectsAndGrades" value={formData.subjectsAndGrades} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Which curriculum do you support teachers with?
                          </label>
                          <div className="space-y-2 mt-2">
                            <div className="flex items-start">
                              <input type="checkbox" id="illustrativeMath" name="curricula.illustrativeMath" checked={formData.curricula.illustrativeMath} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="illustrativeMath" className="text-sm text-gray-700">
                                Illustrative Mathematics
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="eurekaMath" name="curricula.eurekaMath" checked={formData.curricula.eurekaMath} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="eurekaMath" className="text-sm text-gray-700">
                                Eureka Math
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="otherCurricula" name="curricula.other" checked={formData.curricula.other} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="otherCurricula" className="text-sm text-gray-700">
                                Other
                              </label>
                            </div>
                            {formData.curricula.other && <div className="ml-6">
                                <input type="text" id="otherCurriculaText" name="curricula.otherText" value={formData.curricula.otherText} onChange={handleInputChange} placeholder="Please specify" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                              </div>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            What is your relationship with Teaching Lab? *
                          </label>
                          <p className="text-xs text-gray-700 mb-2">
                            Select all that apply. No affiliation is required to
                            join our pilot.
                          </p>
                          <div className="space-y-2 mt-2">
                            <div className="flex items-start">
                              <input type="checkbox" id="fullTimeEmployee" name="teachingLabRelationship.fullTimeEmployee" checked={formData.teachingLabRelationship.fullTimeEmployee} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="fullTimeEmployee" className="text-sm text-gray-700">
                                Full-time Teaching Lab employee (including
                                coaches)
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="partTimeFacilitator" name="teachingLabRelationship.partTimeFacilitator" checked={formData.teachingLabRelationship.partTimeFacilitator} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="partTimeFacilitator" className="text-sm text-gray-700">
                                Part-time Teaching Lab facilitator and/or coach
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="tabMember" name="teachingLabRelationship.tabMember" checked={formData.teachingLabRelationship.tabMember} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="tabMember" className="text-sm text-gray-700">
                                Teacher Advisory Board (TAB) member
                              </label>
                            </div>
                            <div className="flex items-start">
                              <input type="checkbox" id="notAffiliated" name="teachingLabRelationship.notAffiliated" checked={formData.teachingLabRelationship.notAffiliated} onChange={handleInputChange} className="mt-1 mr-2" />
                              <label htmlFor="notAffiliated" className="text-sm text-gray-700">
                                Not affiliated with Teaching Lab
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="hearAboutNisa" className="block text-sm font-medium text-gray-700 mb-1">
                            How did you discover Nisa?
                          </label>
                          <input type="text" id="hearAboutNisa" name="hearAboutNisa" value={formData.hearAboutNisa} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                        <div>
                          <label htmlFor="whyInterested" className="block text-sm font-medium text-gray-700 mb-1">
                            Why are you interested in joining our pilot program?
                          </label>
                          <div className="relative">
                            <textarea id="whyInterested" name="whyInterested" value={formData.whyInterested} onChange={handleInputChange} rows={4} maxLength={500} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 pb-8"></textarea>
                            <div className="absolute bottom-2 right-3 text-xs text-gray-600">
                              {formData.whyInterested.length}/500
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 flex justify-center">
                          <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                            {isSubmitting ? <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </span> : <>
                                Submit Your Application
                                <ArrowRight className="w-5 h-5 ml-2" />
                              </>}
                          </Button>
                        </div>
                        <p className="text-xs text-gray-700 mt-4 text-center">
                          By submitting this form, you agree to be contacted
                          about the Nisa coaching pilot.
                          <br />
                          We respect your privacy. Your info will never be
                          shared with third parties.
                        </p>
                      </form>
                    </>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>;
};