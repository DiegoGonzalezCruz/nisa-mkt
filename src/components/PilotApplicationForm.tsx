import { type ChangeEvent, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button.tsx";
import { FormData } from "../hooks/useJoinPilotForm.ts";

interface PilotApplicationFormProps {
  formData: FormData;
  isSubmitting: boolean;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: FormEvent) => void;
}

export const PilotApplicationForm = ({
  formData,
  isSubmitting,
  handleInputChange,
  handleSubmit,
}: PilotApplicationFormProps) => {
  return (
    <>
      <h3 className="text-xl md:text-xl font-sans font-medium text-gray-800 mb-4">
        Tell us about yourself
      </h3>
      <p className="text-base text-gray-700 mb-6">
        Please complete the form below. We'll review your application promptly
        and be in touch soon. If you have any questions, feel free to contact{" "}
        <a
          href="mailto:info@nisa.coach"
          className="text-primary-700 hover:text-primary-800 font-medium"
        >
          info@nisa.coach
        </a>
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Where are you based?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="schools"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Which school(s) do you currently coach?
          </label>
          <input
            type="text"
            id="schools"
            name="schools"
            value={formData.schools}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="coachingCapacity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            How do you serve as a coach at these schools?
          </label>
          <div className="space-y-2 mt-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="schoolCoach"
                name="coachingCapacity.schoolCoach"
                checked={formData.coachingCapacity.schoolCoach}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="schoolCoach" className="text-sm text-gray-700">
                School Coach
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="districtCoach"
                name="coachingCapacity.districtCoach"
                checked={formData.coachingCapacity.districtCoach}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="districtCoach" className="text-sm text-gray-700">
                District Coach
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="coachingProviderEmployee"
                name="coachingCapacity.coachingProviderEmployee"
                checked={formData.coachingCapacity.coachingProviderEmployee}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label
                htmlFor="coachingProviderEmployee"
                className="text-sm text-gray-700"
              >
                Coaching Provider Employee
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="contractor"
                name="coachingCapacity.contractor"
                checked={formData.coachingCapacity.contractor}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="contractor" className="text-sm text-gray-700">
                Contractor
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="administrator"
                name="coachingCapacity.administrator"
                checked={formData.coachingCapacity.administrator}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="administrator" className="text-sm text-gray-700">
                Administrator
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="otherCapacity"
                name="coachingCapacity.other"
                checked={formData.coachingCapacity.other}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="otherCapacity" className="text-sm text-gray-700">
                Other
              </label>
              {formData.coachingCapacity.other && (
                <input
                  type="text"
                  id="otherCapacityText"
                  name="coachingCapacity.otherText"
                  value={formData.coachingCapacity.otherText}
                  onChange={handleInputChange}
                  placeholder="Please specify"
                  className="ml-2 px-3 py-1 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="subjectsAndGrades"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            What subjects and grade levels do you coach?
          </label>
          <input
            type="text"
            id="subjectsAndGrades"
            name="subjectsAndGrades"
            value={formData.subjectsAndGrades}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Which curriculum do you support teachers with?
          </label>
          <div className="space-y-2 mt-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="illustrativeMath"
                name="curricula.illustrativeMath"
                checked={formData.curricula.illustrativeMath}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label
                htmlFor="illustrativeMath"
                className="text-sm text-gray-700"
              >
                Illustrative Mathematics
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="eurekaMath"
                name="curricula.eurekaMath"
                checked={formData.curricula.eurekaMath}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="eurekaMath" className="text-sm text-gray-700">
                Eureka Math
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="otherCurricula"
                name="curricula.other"
                checked={formData.curricula.other}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="otherCurricula" className="text-sm text-gray-700">
                Other
              </label>
            </div>
            {formData.curricula.other && (
              <div className="ml-6">
                <input
                  type="text"
                  id="otherCurriculaText"
                  name="curricula.otherText"
                  value={formData.curricula.otherText}
                  onChange={handleInputChange}
                  placeholder="Please specify"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What is your relationship with Teaching Lab? *
          </label>
          <p className="text-xs text-gray-700 mb-2">
            Select all that apply. No affiliation is required to join our pilot.
          </p>
          <div className="space-y-2 mt-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="fullTimeEmployee"
                name="teachingLabRelationship.fullTimeEmployee"
                checked={formData.teachingLabRelationship.fullTimeEmployee}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label
                htmlFor="fullTimeEmployee"
                className="text-sm text-gray-700"
              >
                Full-time Teaching Lab employee (including coaches)
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="partTimeFacilitator"
                name="teachingLabRelationship.partTimeFacilitator"
                checked={formData.teachingLabRelationship.partTimeFacilitator}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label
                htmlFor="partTimeFacilitator"
                className="text-sm text-gray-700"
              >
                Part-time Teaching Lab facilitator and/or coach
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="tabMember"
                name="teachingLabRelationship.tabMember"
                checked={formData.teachingLabRelationship.tabMember}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="tabMember" className="text-sm text-gray-700">
                Teacher Advisory Board (TAB) member
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="notAffiliated"
                name="teachingLabRelationship.notAffiliated"
                checked={formData.teachingLabRelationship.notAffiliated}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="notAffiliated" className="text-sm text-gray-700">
                Not affiliated with Teaching Lab
              </label>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="hearAboutNisa"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            How did you discover Nisa?
          </label>
          <input
            type="text"
            id="hearAboutNisa"
            name="hearAboutNisa"
            value={formData.hearAboutNisa}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="whyInterested"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Why are you interested in joining our pilot program?
          </label>
          <div className="relative">
            <textarea
              id="whyInterested"
              name="whyInterested"
              value={formData.whyInterested}
              onChange={handleInputChange}
              rows={4}
              maxLength={500}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 pb-8"
            ></textarea>
            <div className="absolute bottom-2 right-3 text-xs text-gray-600">
              {formData.whyInterested.length}/500
            </div>
          </div>
        </div>
        <div className="pt-2 flex justify-center">
          <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              <>
                Submit Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </div>
        <p className="text-xs text-gray-700 mt-4 text-center">
          By submitting this form, you agree to be contacted about the Nisa
          coaching pilot.
          <br />
          We respect your privacy. Your info will never be shared with third
          parties.
        </p>
      </form>
    </>
  );
};
