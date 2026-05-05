import type { BiodataFormData } from "@/components/biodata/types";

export const defaultBiodataData: BiodataFormData = {
  fullName: "Priya Thakar",
  profileImage: "/images/profile6.jpg",
  sections: [
    {
      id: "personal-details",
      title: "Personal Details",
      fields: [
        { id: "name", label: "Name", value: "Priya Thakar" },
        { id: "gender", label: "Gender", value: "Male" },
        { id: "dob", label: "Date Of Birth", value: "30-07-2005", type: "date" },
        { id: "birth-place", label: "Place Of Birth", value: "Siwan, Gopalganj" },
        { id: "complexion", label: "Complexion", value: "Fair" },
        { id: "height", label: "Height", value: "5 feet 2 inch" },
        { id: "caste", label: "Caste", value: "Gupta" },
        { id: "education", label: "Education", value: "Intermediate (12th)" },
        { id: "hobby", label: "Hobby", value: "Cooking food" },
        { id: "skills", label: "Skills", value: "Sewing" },
      ],
    },
    {
      id: "family-details",
      title: "Family Details",
      fields: [
        { id: "father-name", label: "Father's Name", value: "Sri Rajendra Gupta" },
        { id: "father-occupation", label: "Father's Occupation", value: "Business" },
        { id: "mother-name", label: "Mother's Name", value: "Smt. Rekha Devi" },
        { id: "mother-occupation", label: "Mother's Occupation", value: "House wife" },
        { id: "brother", label: "Brother", value: "2" },
      ],
    },
    {
      id: "contact-details",
      title: "Contact Details",
      fields: [
        { id: "contact-number", label: "Contact Number", value: "8888888888" },
        { id: "address", label: "Address", value: "Siwan, Gopalganj, Bihar" },
      ],
    },
  ],
};
