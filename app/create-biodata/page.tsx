"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PageShell } from "@/components/shared/page-shell";
import { PersonalDetailsStep } from "@/components/biodata/steps/personal-details";
import { EducationCareerStep } from "@/components/biodata/steps/education-career";
import { FamilyDetailsStep } from "@/components/biodata/steps/family-details";
import { AboutMeStep } from "@/components/biodata/steps/about-me";
import { PartnerPreferencesStep } from "@/components/biodata/steps/partner-preferences";
import { PhotoUploadStep } from "@/components/biodata/steps/photo-upload";
import { ChevronLeft, ChevronRight, Check, Save, Loader2, Layout as LayoutIcon } from "lucide-react";
import { TemplatePreview } from "@/components/templates/TemplatePreview";
import { DownloadButton } from "@/components/biodata/DownloadButton";

const STEPS = [
  { id: "personal", title: "Personal", component: PersonalDetailsStep },
  { id: "education", title: "Education", component: EducationCareerStep },
  { id: "family", title: "Family", component: FamilyDetailsStep },
  { id: "about", title: "About Me", component: AboutMeStep },
  { id: "preferences", title: "Preferences", component: PartnerPreferencesStep },
  { id: "photo", title: "Photo", component: PhotoUploadStep },
];

const LOCAL_STORAGE_KEY = "rishtamaker_form_draft";

function BuilderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    fullName: "",
    profileImage: "",
    sections: [],
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    const templateId = searchParams.get("template");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (templateId) parsed.selectedTemplateId = templateId;
        setFormData(parsed);
      } catch (e) {
        console.error("Failed to parse saved draft", e);
      }
    } else if (templateId) {
      setFormData((prev: any) => ({ ...prev, selectedTemplateId: templateId }));
    }
    setIsLoaded(true);
  }, [searchParams]);

  // Auto-save to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

  const updateData = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setIsSaving(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsSaving(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 400);
    } else {
      // Final step: Redirect to templates or preview
      router.push("/templates?status=ready");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;
  const CurrentStepComponent = STEPS[currentStep].component;

  // Validation: Simple check for required fields in first two steps
  const isStepValid = () => {
    if (currentStep === 0) return !!formData.fullName && !!formData.dob;
    if (currentStep === 1) return !!formData.education && !!formData.occupation;
    return true;
  };

  if (!isLoaded) return null;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col px-4 py-8 md:py-12">
      {/* Progress Header */}
      <div className="mb-10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#b11e24]">
              Step {currentStep + 1} of {STEPS.length}
            </p>
            <h1 className="mt-1 text-lg font-bold text-slate-900">
              {STEPS[currentStep].title}
            </h1>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[#b11e24] ring-1 ring-[#b11e24]/10">
            {currentStep === STEPS.length - 1 ? (
              <Check className="h-5 w-5" />
            ) : (
              <span className="text-sm font-bold">{currentStep + 1}</span>
            )}
          </div>
        </div>
        
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#b11e24] to-[#e44b52] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Form Card */}
      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="relative min-h-[400px] rounded-[2rem] border border-white bg-white/70 p-6 shadow-xl shadow-red-900/5 backdrop-blur-xl md:p-10">
          {isSaving && (
            <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[2rem] bg-white/40 backdrop-blur-[2px]">
              <Loader2 className="h-8 w-8 animate-spin text-[#b11e24]" />
            </div>
          )}
          
          <CurrentStepComponent data={formData} updateData={updateData} />

          {/* Navigation Buttons */}
          <div className="mt-12 flex items-center justify-between gap-4 border-t border-slate-100 pt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-900 disabled:opacity-0"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!isStepValid() || isSaving}
              className="flex h-12 min-w-[140px] items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-slate-800 disabled:opacity-50 disabled:hover:scale-100"
            >
              {currentStep === STEPS.length - 1 ? "Finish" : "Continue"}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Live Preview Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-8 space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-bold text-slate-900">Live Preview</h3>
              <button 
                onClick={() => router.push("/templates")}
                className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#b11e24] hover:underline"
              >
                <LayoutIcon className="h-3 w-3" />
                Switch Template
              </button>
            </div>
            <div className="aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl relative">
              <div id="biodata-preview" className="h-full w-full origin-top scale-[0.6] p-0" style={{ transformOrigin: 'top center' }}>
                <div className="mx-auto" style={{ width: '675px' }}>
                  <TemplatePreview templateId={formData.selectedTemplateId} data={formData} />
                </div>
              </div>
            </div>
            
            <div className="flex justify-center pt-2">
              <DownloadButton elementId="biodata-preview" userName={formData.fullName} />
            </div>

            <p className="px-4 text-center text-[10px] font-medium text-slate-400">
              Preview updates instantly as you fill the form.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
        <Save className="h-3 w-3" />
        <span>Changes are automatically saved as you type</span>
      </div>
    </div>
  );
}

export default function CreateBiodataPage() {
  return (
    <PageShell>
      <Suspense fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#b11e24]" />
        </div>
      }>
        <BuilderContent />
      </Suspense>
    </PageShell>
  );
}
