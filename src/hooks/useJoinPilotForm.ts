import { useState } from "react";

export interface FormData {
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

const initialFormData: FormData = {
  fullName: "",
  email: "",
  city: "",
  state: "",
  schools: "",
  coachingCapacity: {
    schoolCoach: false,
    districtCoach: false,
    coachingProviderEmployee: false,
    contractor: false,
    administrator: false,
    other: false,
    otherText: "",
  },
  subjectsAndGrades: "",
  curricula: {
    illustrativeMath: false,
    eurekaMath: false,
    other: false,
    otherText: "",
  },
  teachingLabRelationship: {
    fullTimeEmployee: false,
    partTimeFacilitator: false,
    tabMember: false,
    notAffiliated: false,
  },
  hearAboutNisa: "",
  whyInterested: "",
};

export const useJoinPilotForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      const checked = checkbox.checked;
      const [field, subField] = name.split(".");

      if (subField) {
        setFormData((prev) => ({
          ...prev,
          [field]: {
            ...(prev[field as keyof FormData] as object),
            [subField]: checked,
          },
        }));
      }
    } else {
      const [field, subField] = name.split(".");
      if (subField) {
        setFormData((prev) => ({
          ...prev,
          [field]: {
            ...(prev[field as keyof FormData] as object),
            [subField]: value,
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/pilot/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred during form submission", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleSubmit,
  };
};
