"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Plus, Trash2, X, PlusCircle, Loader2, CheckCircle2, Layout, Crown, Sparkles, UserCircle } from "lucide-react";
import Link from "next/link";

import { ImagePicker } from "@/components/biodata/image-picker";
import { defaultBiodataData } from "@/components/biodata/mock-data";
import { standardTemplates, premiumTemplates, biodataTemplates } from "@/components/biodata/templates";
import { TemplateSelectorRow } from "@/components/biodata/template-selector-row";
import type { BiodataField, BiodataFormData } from "@/components/biodata/types";

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function cloneDefaultData() {
  return {
    ...defaultBiodataData,
    sections: defaultBiodataData.sections.map((section) => ({
      ...section,
      fields: section.fields.map((field) => ({ ...field })),
    })),
  };
}

export function BiodataFormBuilder() {
  const searchParams = useSearchParams();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "verifying" | "success">("idle");
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form"); // For mobile tabs

  const [selectedTemplateId, setSelectedTemplateId] = useState(standardTemplates[0]?.id ?? "");
  const [formData, setFormData] = useState<BiodataFormData>(() => cloneDefaultData());

  // Sync with URL parameters when they change
  useEffect(() => {
    const templateId = searchParams?.get("template");
    if (templateId && biodataTemplates.some(t => t.id === templateId)) {
      setSelectedTemplateId(templateId);
      setActiveTab("form"); // Force switch to form tab when coming from a template link

      // Auto-scroll to the form area so they bypass the template gallery header
      setTimeout(() => {
        document.getElementById("biodata-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [searchParams]);

  const selectedTemplate =
    biodataTemplates.find((template) => template.id === selectedTemplateId) ?? biodataTemplates[0];

  const handleTemplateSelect = (id: string) => {
    setSelectedTemplateId(id);
    if (isGalleryOpen) {
      setTimeout(() => setIsGalleryOpen(false), 250);
    }
    // Auto-scroll to the form area after a short delay
    setTimeout(() => {
      document.getElementById("biodata-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const handleProfileChange = (key: "fullName" | "profileImage", value: string) => {
    setFormData((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      const { toPng } = await import('html-to-image');
      const { jsPDF } = await import('jspdf');

      const element = document.getElementById('pdf-download-node');
      if (!element) throw new Error("Preview element not found");

      // Use a consistent width for capture to ensure standard scaling
      const captureWidth = 675;
      const captureHeight = Math.max(842, element.scrollHeight);

      // Use html-to-image to perfectly bypass modern CSS limitations like 'lab'/'oklch' which break html2canvas
      const imgData = await toPng(element, {
        pixelRatio: 3, // High quality for printing
        backgroundColor: '#ffffff',
        width: captureWidth,
        height: captureHeight,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
          margin: '0',
          padding: '0'
        }
      });

      // Create PDF with EXACT dimensions of the content in points (pt)
      // This removes all white space and fixes the "oversized" issue in Chrome
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: [675, captureHeight]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 675, captureHeight, undefined, 'FAST');

      pdf.save(`${formData.fullName.replace(/\s+/g, '_') || 'Biodata'}.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF", error);
    } finally {
      setIsGenerating(false);
      setIsDownloadModalOpen(false);
      setPaymentStatus("idle");
    }
  };

  const handlePremiumPayment = () => {
    setPaymentStatus("verifying");
    // Mock backend gateway verification
    setTimeout(() => {
      setPaymentStatus("success");
      setTimeout(() => {
        handleDownloadPDF();
      }, 1000);
    }, 3500);
  };

  const updateSectionTitle = (sectionId: string, title: string) => {
    setFormData((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === sectionId ? { ...section, title } : section,
      ),
    }));
  };

  const updateField = (
    sectionId: string,
    fieldId: string,
    key: keyof Pick<BiodataField, "label" | "value">,
    value: string,
  ) => {
    setFormData((current) => {
      const updatedFullName = (fieldId === "name" && key === "value") ? value : current.fullName;

      return {
        ...current,
        fullName: updatedFullName,
        sections: current.sections.map((section) =>
          section.id === sectionId
            ? {
              ...section,
              fields: section.fields.map((field) =>
                field.id === fieldId ? { ...field, [key]: value } : field,
              ),
            }
            : section,
        ),
      };
    });
  };

  const addField = (sectionId: string) => {
    setFormData((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === sectionId
          ? {
            ...section,
            fields: [
              ...section.fields,
              { id: createId("field"), label: "New Field", value: "New Value", type: "text" },
            ],
          }
          : section,
      ),
    }));
  };

  const removeField = (sectionId: string, fieldId: string) => {
    setFormData((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === sectionId
          ? {
            ...section,
            fields: section.fields.filter((field) => field.id !== fieldId),
          }
          : section,
      ),
    }));
  };

  const addSection = () => {
    setFormData((current) => ({
      ...current,
      sections: [
        ...current.sections,
        {
          id: createId("section"),
          title: "New Section",
          fields: [{ id: createId("field"), label: "New Field", value: "New Value", type: "text" }],
        },
      ],
    }));
  };

  const removeSection = (sectionId: string) => {
    setFormData((current) => ({
      ...current,
      sections: current.sections.filter((section) => section.id !== sectionId),
    }));
  };

  const resetForm = () => {
    setFormData(cloneDefaultData());
    setSelectedTemplateId(standardTemplates[0]?.id ?? "");
  };

  const PreviewComponent = selectedTemplate.Component;

  return (
    <section className="mx-4 lg:mx-12 py-16 lg:py-24 animate-in fade-in duration-1000">
      <div className="relative overflow-hidden bg-[#2a050c] px-6 py-12 sm:py-16 sm:px-12 rounded-t-[2.5rem] lg:rounded-t-[3.5rem]">
        {/* Animated Background for Builder Header */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.08]" />

        <div className="relative mb-12 text-center flex flex-col items-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#fcd071]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Professional Builder</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-display)]">
            Design Your <span className="text-[#b11e24] italic">Perfect Impression</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
            From traditional elegance to modern sophistication, choose the format that reflects your true personality.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="bg-white text-[#120d0e] px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-50 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 text-[0.95rem] flex items-center gap-3 cursor-pointer group"
            >
              <Layout className="w-5 h-5 group-hover:rotate-6 transition-transform" />
              Standard Designs
            </button>
            <Link
              href="/premium-templates"
              className="bg-[#b11e24] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-red-900/20 hover:bg-[#931719] hover:shadow-red-900/40 hover:-translate-y-1 transition-all duration-300 text-[0.95rem] flex items-center gap-3 group"
            >
              <Crown className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              Premium Templates
            </Link>
          </div>
        </div>

        <div className="relative z-10 p-2 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-sm">
          <TemplateSelectorRow
            data={formData}
            templates={standardTemplates}
            selectedTemplateId={selectedTemplate.id}
            onSelect={handleTemplateSelect}
          />
        </div>
      </div>

      <div id="biodata-form" className="grid gap-10 lg:grid-cols-[1fr_1.35fr] bg-slate-50/50 p-6 sm:p-10 lg:p-16 rounded-b-[2.5rem] lg:rounded-b-[3.5rem] border-x border-b border-slate-100 shadow-2xl shadow-slate-200/50 scroll-mt-10 relative">
        <div className="flex flex-col gap-8">
          <div className="rounded-[2.5rem] bg-white p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group">
            {/* Subtle highlight */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b11e24]/20 to-transparent" />

            <div className="flex flex-col gap-8 pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-10 w-10 rounded-xl bg-[#b11e24]/5 flex items-center justify-center text-[#b11e24]">
                  <UserCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Identity & Photo</h3>
              </div>

              <ImagePicker
                image={formData.profileImage}
                fullName={formData.fullName}
                onImageChange={(value) => handleProfileChange("profileImage", value)}
              />

              <div className="h-px bg-slate-100 w-full" />
            </div>

            <div className="space-y-10">
              {formData.sections.map((section, sIdx) => (
                <div key={section.id} className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${sIdx * 100}ms` }}>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-1.5 h-6 bg-[#b11e24]/20 rounded-full" />
                      <input
                        suppressHydrationWarning
                        value={section.title}
                        onChange={(event) => updateSectionTitle(section.id, event.target.value)}
                        className="text-[#120d0e] font-bold text-xl bg-transparent outline-none border-b-2 border-transparent focus:border-[#b11e24]/20 w-full py-1 transition-all"
                        placeholder="Section Title"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        suppressHydrationWarning
                        type="button"
                        onClick={() => addField(section.id)}
                        className="flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100 hover:text-[#b11e24]"
                      >
                        <PlusCircle className="h-4 w-4" />
                        Add Field
                      </button>
                      {formData.sections.length > 1 && (
                        <button
                          suppressHydrationWarning
                          type="button"
                          onClick={() => removeSection(section.id)}
                          className="flex items-center justify-center rounded-full bg-red-50 p-2 text-red-500 transition hover:bg-red-500 hover:text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {section.fields.map((field, fIdx) => (
                      <div key={field.id} className="flex items-center gap-3 group/field animate-in fade-in duration-300">
                        <div className="relative flex-1 flex items-center gap-3">
                          <input
                            suppressHydrationWarning
                            value={field.label}
                            onChange={(event) => updateField(section.id, field.id, "label", event.target.value)}
                            className="w-[35%] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[0.9rem] font-bold text-slate-700 outline-none transition-all focus:border-[#b11e24]/30 focus:bg-white focus:ring-4 focus:ring-[#b11e24]/5"
                            placeholder="Label (e.g. Height)"
                          />
                          <input
                            suppressHydrationWarning
                            value={field.value}
                            onChange={(event) => updateField(section.id, field.id, "value", event.target.value)}
                            className="w-[65%] rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-[0.9rem] font-medium text-slate-800 outline-none transition-all focus:border-[#b11e24]/30 focus:ring-4 focus:ring-[#b11e24]/5"
                            placeholder="Value (e.g. 5'10&quot;)"
                          />
                        </div>
                        <button
                          suppressHydrationWarning
                          type="button"
                          onClick={() => removeField(section.id, field.id)}
                          disabled={section.fields.length === 1}
                          className="flex shrink-0 items-center justify-center rounded-xl border border-slate-100 p-2.5 text-slate-300 transition-all hover:border-red-200 hover:text-red-500 hover:bg-red-50 disabled:opacity-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-50 pt-10">
              <button
                suppressHydrationWarning
                type="button"
                onClick={addSection}
                className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-[0.95rem] font-bold text-white shadow-xl hover:bg-[#120d0e] hover:-translate-y-1 transition-all"
              >
                <PlusCircle className="h-5 w-5" />
                Add New Section
              </button>
              <button
                suppressHydrationWarning
                type="button"
                onClick={resetForm}
                className="rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-[0.95rem] font-bold text-slate-600 transition-all hover:border-red-100 hover:text-red-500 hover:bg-red-50/30"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Strictly bound the preview wrapper to exactly 700x900 as requested, fully decoupled using absolute centering to prevent layout clipping */}
        <div className="lg:sticky lg:top-8 w-full max-w-[700px] mx-auto h-[900px] max-h-[calc(100vh-4rem)] flex flex-col pt-0 pb-4">
          <div className="flex justify-end mb-4">
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => setIsDownloadModalOpen(true)}
              className="flex items-center gap-2 bg-[#b11e24] text-white px-5 py-2.5 rounded-full font-bold shadow-[0_10px_20px_rgba(177,30,36,0.25)] hover:bg-[#8e1933] hover:-translate-y-0.5 hover:shadow-[0_15px_25px_rgba(177,30,36,0.3)] transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download PDF
            </button>
          </div>

          <div
            className="relative w-full flex-1 flex items-center justify-center rounded-2xl bg-black/10 shadow-inner"
            ref={(el) => {
              if (el && !el.dataset.observerAttached) {
                el.dataset.observerAttached = "true";
                const child = el.firstElementChild as HTMLElement;

                const updateScale = () => {
                  if (!child) return;

                  // The parent strictly controls the maximum render bounds (requested 550x900 scaled safely for margins)
                  const availableW = el.getBoundingClientRect().width - 32; // 16px padding
                  const availableH = el.getBoundingClientRect().height - 32;

                  const childW = child.scrollWidth;
                  // Accurately capture total document scroll height
                  const childH = Math.max(842, child.scrollHeight);

                  const scaleX = availableW / childW;
                  const scaleY = availableH / childH;

                  // Ensure exactly 100% full visibility without touching edges using math absolute clamp
                  const scale = Math.min(scaleX, scaleY);

                  // Pure absolute centering with transform prevents any CSS flow clipping!
                  child.style.transform = `translate(-50%, -50%) scale(${scale})`;
                };

                const observer = new ResizeObserver(updateScale);
                observer.observe(el);
                if (child) {
                  observer.observe(child);
                  const mutationObserver = new MutationObserver(updateScale);
                  mutationObserver.observe(child, { childList: true, subtree: true, characterData: true });
                }
              }
            }}
          >
            {/* Absolute positioning completely removes clipping from parent layout boundaries */}
            <div className="absolute top-1/2 left-1/2 inline-block origin-center transition-transform duration-200 ease-out shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-white rounded-md overflow-hidden">
              <div id="pdf-download-node" className="min-w-[675px] min-h-[842px] bg-white relative inline-block">
                <PreviewComponent data={formData} />
              </div>

              <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-50 bg-slate-800 py-6 text-center flex flex-col gap-2 shadow-2xl z-10 border-y border-slate-700/50">
                <p className="text-[18px] font-bold text-white tracking-wide">Use this preview to verify your details and photograph.</p>
                <p className="text-[14px] font-medium text-slate-300">This banner will not be present in Final Biodata PDF.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Full-Screen Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-[#350a14]/60 backdrop-blur-md transition-opacity"
            onClick={() => setIsGalleryOpen(false)}
          />
          <div className="relative w-full max-w-[1400px] h-full max-h-[90vh] overflow-y-auto bg-[#8e1933] bg-gradient-to-br from-[#8e1933] to-[#601122] rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] p-6 sm:p-10 lg:p-14 animate-in zoom-in-[0.98] duration-300 border border-white/10 custom-scrollbar">

            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all z-10 cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="text-center mb-10 sm:mb-14 relative z-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#fcd071] tracking-wide mb-3 sm:mb-4 drop-shadow-md">
                Standard Template Gallery
              </h2>
            </div>

            {/* Enhanced Gallery Grid Container strictly bounded inside the modal */}
            <div className="relative z-0 px-4">
              <TemplateSelectorRow
                data={formData}
                templates={standardTemplates}
                selectedTemplateId={selectedTemplate.id}
                onSelect={handleTemplateSelect}
              />
            </div>
          </div>
        </div>
      )}

      {/* Download Modal - Payment or Free */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsDownloadModalOpen(false)} />
          <div className="relative bg-white rounded-[2rem] shadow-2xl p-6 sm:p-8 w-full max-w-lg lg:max-w-[900px] flex flex-col lg:flex-row gap-8 lg:gap-10 animate-in zoom-in-[0.98] duration-300">
            <button
              onClick={() => setIsDownloadModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left side: Preview Area, dynamically resizing height to prevent bottom truncation */}
            <div className="hidden lg:flex w-[350px] xl:w-[400px] shrink-0 flex-col items-center justify-center bg-slate-50/80 border border-slate-100 rounded-3xl p-6 relative max-h-[85vh] overflow-y-auto custom-scrollbar">
              <div className="relative w-full shadow-lg border border-slate-200 overflow-hidden rounded-md bg-white pointer-events-none">
                <div
                  className="w-full relative"
                  ref={(el) => {
                    if (el && !el.dataset.observerAttached) {
                      el.dataset.observerAttached = "true";
                      const updateScale = () => {
                        const child = el.firstElementChild as HTMLElement;
                        if (!child) return;
                        const width = el.getBoundingClientRect().width;
                        const scale = width / (child.scrollWidth || 675);
                        child.style.transform = `scale(${scale})`;
                        // Calculate and enforce the accurate scaled height so the container grows downwards fully!
                        el.style.height = `${Math.max(842, child.scrollHeight) * scale}px`;
                      };
                      const observer = new ResizeObserver(updateScale);
                      observer.observe(el);

                      // Observe child mutations to auto-grow height
                      if (el.firstElementChild) {
                        new MutationObserver(updateScale).observe(el.firstElementChild, { childList: true, subtree: true, characterData: true });
                      }
                      // Fire initial frame
                      setTimeout(updateScale, 50);
                    }
                  }}
                >
                  <div className="absolute top-0 left-0 min-w-[675px] min-h-[842px] origin-top-left bg-white">
                    <PreviewComponent data={formData} />
                  </div>
                </div>
              </div>
              {isGenerating && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-50 flex flex-col items-center justify-center rounded-3xl text-[#8e1933]">
                  <Loader2 className="w-12 h-12 mb-4 animate-spin" />
                  <span className="font-bold text-lg">Preparing PDF...</span>
                </div>
              )}
            </div>

            {/* Right side: Payment / Download action */}
            <div className="flex-1 flex flex-col justify-center py-4">
              <div className="mb-6 lg:mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-800 font-serif leading-tight">Download Biodata</h2>
                <p className="text-slate-500 mt-2 text-lg">Get your high-quality PDF ready for sharing.</p>
              </div>

              {selectedTemplate.price && selectedTemplate.price > 0 ? (
                <div className="flex flex-col gap-4 border border-amber-200 bg-gradient-to-b from-amber-50 to-white rounded-2xl p-6 lg:p-7 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-amber-600" />
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-lg text-amber-900 tracking-wide">Premium Template</span>
                    <span className="font-bold text-3xl text-amber-600 drop-shadow-sm">₹{selectedTemplate.price}</span>
                  </div>

                  {paymentStatus === "success" ? (
                    <div className="flex flex-col items-center justify-center py-10 gap-4">
                      <CheckCircle2 className="w-20 h-20 text-green-500 animate-in zoom-in duration-500" />
                      <h3 className="text-2xl font-bold text-slate-800">Payment Verified!</h3>
                      <p className="text-slate-500 text-center">Your premium biodata PDF is generating securely.</p>
                      <div className="flex items-center gap-2 mt-4 text-emerald-600 font-bold bg-emerald-50 px-6 py-3 rounded-full">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Downloading PDF...
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Mobile Quick Pay Button */}
                      <a
                        href={`upi://pay?pa=8423454879@ptaxis&pn=Biodata%20Premium&am=${selectedTemplate.price}&cu=INR`}
                        className="flex lg:hidden w-full bg-gradient-to-r from-[#00b9f1] to-[#004e92] text-white font-bold py-3.5 rounded-xl shadow-md justify-center items-center gap-2 mb-2 active:scale-[0.98] transition-transform"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
                        Pay Now via UPI App
                      </a>

                      <div className="flex justify-center bg-white p-3 rounded-xl shadow-sm mx-auto w-44 h-44 sm:w-48 sm:h-48 border-[1.5px] border-amber-100 relative group hidden lg:flex">
                        {/* Dynamic UPI QR Code that automatically bills ₹49 */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi%3A%2F%2Fpay%3Fpa%3D8423454879%40ptaxis%26pn%3DBiodata%2520Premium%26am%3D${selectedTemplate.price}%26cu%3DINR`} alt={`Pay ${selectedTemplate.price} via UPI`} className="w-full h-full object-contain rounded-lg group-hover:scale-[1.02] transition-transform" />
                      </div>

                      <p className="text-center font-bold text-slate-700 tracking-wide mt-1 bg-white py-2 rounded-lg border border-slate-100 shadow-sm user-select-all text-[0.9rem] hidden lg:block">
                        Scan code to Pay <b>₹{selectedTemplate.price}</b>
                      </p>

                      <p className="text-slate-500 text-sm font-medium text-center mt-3 mb-2 px-4 leading-relaxed">
                        Once you have scanned and completed the payment on your mobile, click the button below to generate your PDF.
                      </p>

                      <button
                        onClick={handlePremiumPayment}
                        disabled={paymentStatus !== "idle"}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-80 disabled:cursor-wait text-white font-bold py-4 rounded-xl shadow-[0_8px_20px_rgba(245,158,11,0.3)] transition-all hover:-translate-y-0.5 flex justify-center items-center gap-2 cursor-pointer text-[1.05rem]"
                      >
                        {paymentStatus === "verifying" ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Verifying Transaction...</>
                        ) : (
                          <><CheckCircle2 className="w-5 h-5" /> Confirm Payment & Download</>
                        )}
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-6 border border-emerald-100 bg-gradient-to-b from-emerald-50/50 to-white rounded-2xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600" />
                  <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-emerald-100/50">
                    <span className="font-bold text-slate-700 text-lg">Template Price</span>
                    <span className="font-bold text-emerald-600 uppercase tracking-widest bg-emerald-100/80 px-4 py-1.5 rounded-full text-sm">Free</span>
                  </div>

                  <p className="text-slate-600 text-[1.05rem] leading-relaxed text-center lg:text-left my-2">
                    This template is completely free. You can directly proceed to download and share it instantly with your matches!
                  </p>

                  <button
                    onClick={handleDownloadPDF}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-80 disabled:cursor-wait text-white font-bold py-4 rounded-xl shadow-[0_8px_20px_rgba(16,185,129,0.3)] transition-all hover:-translate-y-0.5 mt-2 flex justify-center items-center gap-2 cursor-pointer text-[1.05rem]"
                  >
                    {isGenerating ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Preparing Download...</>
                    ) : (
                      <><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Confirm Download</>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
