import type { BiodataFormData } from "@/components/biodata/types";

export const defaultBiodataData: BiodataFormData = {
  fullName: "Priya Thakar",
  profileImage: "/images/mock-girl.png",
  sections: [
    {
      id: "personal-details",
      title: "Personal Details",
      fields: [
        { id: "name", label: "Name", value: "Priya Thakar" },
        { id: "gender", label: "Gender", value: "Female" },
        { id: "dob", label: "Date Of Birth", value: "30-07-2005", type: "date" },
        { id: "birth-place", label: "Place Of Birth", value: "Siwan, Gopalganj" },
        { id: "complexion", label: "Complexion", value: "Fair" },
        { id: "height", label: "Height", value: "5 feet 2 inch" },
        { id: "caste", label: "Caste", value: "Gupta" },
        { id: "education", label: "Education", value: "Intermediate (12th)" },
        { id: "hobby", label: "Hobby", value: "Painting" },
        { id: "skills", label: "Skills", value: "Classical Dance" },
      ],
    },
    {
      id: "family-details",
      title: "Family Details",
      fields: [
        { id: "father-name", label: "Father's Name", value: "Sri Rajendra Gupta" },
        { id: "father-occupation", label: "Father's Occupation", value: "Business" },
        { id: "mother-name", label: "Mother's Name", value: "Smt. Rekha Devi" },
        { id: "mother-occupation", label: "Mother's Occupation", value: "Home maker" },
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

export const boyMockData: BiodataFormData = {
  ...defaultBiodataData,
  fullName: "Rahul Sharma",
  profileImage: "/images/mock-boy.png",
  sections: defaultBiodataData.sections.map(s => {
    if (s.id === "personal-details") {
      return {
        ...s,
        fields: s.fields.map(f => {
          if (f.id === "name") return { ...f, value: "Rahul Sharma" };
          if (f.id === "gender") return { ...f, value: "Male" };
          if (f.id === "height") return { ...f, value: "5 feet 11 inch" };
          if (f.id === "hobby") return { ...f, value: "Photography" };
          if (f.id === "skills") return { ...f, value: "Software Development" };
          return f;
        })
      };
    }
    return s;
  })
};

export const girlMockData: BiodataFormData = defaultBiodataData;
