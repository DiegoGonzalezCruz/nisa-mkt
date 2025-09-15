import { CheckCircle2 } from "lucide-react";

export const SubmissionSuccessMessage = () => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-700 mb-6 mx-auto">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4 text-center">
        Thank you for applying!
      </h3>
      <p className="text-lg text-gray-700 text-center">
        We've received your application for the Nisa coaching pilot. We'll be in
        touch with you soon about next steps.
      </p>
    </div>
  );
};
