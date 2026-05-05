import React from "react";
import { biodataTemplates } from "@/components/biodata/templates";
import { Loader2 } from "lucide-react";

interface TemplatePreviewProps {
  templateId?: string;
  data: any;
}

export function TemplatePreview({ templateId, data }: TemplatePreviewProps) {
  const selectedTemplate = biodataTemplates.find((t) => t.id === templateId) || biodataTemplates[0];
  const DesignComponent = selectedTemplate.Component;

  // Transform flat multi-step form data into structured sections for the templates
  const transformedData = {
    ...data,
    sections: [
      {
        id: "personal",
        title: "Personal Details",
        fields: [
          { id: "name", label: "Full Name", value: data.fullName },
          { id: "dob", label: "Date of Birth", value: data.dob },
          { id: "height", label: "Height", value: data.height },
          { id: "weight", label: "Weight", value: data.weight },
          { id: "religion", label: "Religion / Caste", value: data.religion },
          { id: "location", label: "Current Location", value: data.location },
        ].filter(f => f.value)
      },
      {
        id: "education",
        title: "Education & Career",
        fields: [
          { id: "edu", label: "Education", value: data.education },
          { id: "job", label: "Occupation", value: data.occupation },
          { id: "income", label: "Annual Income", value: data.income },
        ].filter(f => f.value)
      },
      {
        id: "family",
        title: "Family Background",
        fields: [
          { id: "father", label: "Father's Name", value: data.fatherName },
          { id: "focc", label: "Father's Job", value: data.fatherOccupation },
          { id: "mother", label: "Mother's Name", value: data.motherName },
          { id: "siblings", label: "Siblings", value: data.siblings },
        ].filter(f => f.value)
      },
      // Special long text sections
      ...(data.aboutMe ? [{
        id: "about",
        title: "About Me",
        fields: [{ id: "bio", label: "Introduction", value: data.aboutMe }]
      }] : []),
      ...(data.familyBackground ? [{
        id: "family-desc",
        title: "Family Heritage",
        fields: [{ id: "fbg", label: "Background", value: data.familyBackground }]
      }] : []),
      ...(data.expectations ? [{
        id: "partner",
        title: "Partner Preferences",
        fields: [
          { id: "exp", label: "Expectations", value: data.expectations },
          { id: "pa", label: "Age Group", value: data.prefAge },
          { id: "pl", label: "Location", value: data.prefLocation },
        ].filter(f => f.value)
      }] : []),
    ]
  };

  if (!DesignComponent) {
    return (
      <div className="flex h-full items-center justify-center bg-slate-50 text-slate-400">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-white overflow-hidden shadow-2xl">
      <DesignComponent data={transformedData} />
    </div>
  );
}
