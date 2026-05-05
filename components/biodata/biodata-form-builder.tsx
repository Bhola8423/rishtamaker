"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Plus, Trash2, X, PlusCircle, Loader2, CheckCircle2, Layout } from "lucide-react";

import { ImagePicker } from "@/components/biodata/image-picker";
import { defaultBiodataData } from "@/components/biodata/mock-data";
import { biodataTemplates } from "@/components/biodata/templates";
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

  const [selectedTemplateId, setSelectedTemplateId] = useState(biodataTemplates[0]?.id ?? "");
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

      // Measure the actual height and width dynamically
      const elementHeight = Math.max(842, element.scrollHeight);
      const elementWidth = element.scrollWidth;

      // Use html-to-image to perfectly bypass modern CSS limitations like 'lab'/'oklch' which break html2canvas
      const imgData = await toPng(element, {
        pixelRatio: 2, // 2x for better crispness
        backgroundColor: '#ffffff',
        width: elementWidth,
        height: elementHeight,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
          margin: '0',
          padding: '0'
        }
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [elementWidth, elementHeight]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, elementWidth, elementHeight);
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
    setSelectedTemplateId(biodataTemplates[0]?.id ?? "");
  };

  const PreviewComponent = selectedTemplate.Component;

  return (
    <section className="mx-12 py-20">
      <div className="bg-[#8e1933] px-4 py-10 sm:py-12 sm:px-8 rounded-t-2xl sm:rounded-t-[2.5rem]">
        <div className="mb-10 text-center flex flex-col items-center">
          <h2 className="text-xl sm:text-[1.35rem] font-medium text-white tracking-wide">
            From traditional to modern, our curated biodata formats will create the Best Impression.
          </h2>
          <button
            suppressHydrationWarning
            type="button"
            onClick={() => setIsGalleryOpen(true)}
            className="mt-6 bg-white text-[#8e1933] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-[0.95rem] flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            View All Templates Gallery
          </button>
        </div>

        {/* We only conditionally show the row here if we want to, but standard is fine. Let's keep the row to quick switch. */}
        <TemplateSelectorRow
          data={formData}
          selectedTemplateId={selectedTemplate.id}
          onSelect={setSelectedTemplateId}
        />
      </div>

      <div id="biodata-form" className="grid gap-6 lg:grid-cols-[1fr_1.25fr] bg-[#8e1933] p-4 sm:p-8 rounded-b-2xl sm:rounded-b-[2.5rem] pt-0 sm:pt-0 scroll-mt-6">
        <div className="rounded-[1rem] bg-white p-5 shadow-xl sm:p-7">
          <div className="flex flex-col gap-6 pb-2">
            <ImagePicker
              image={formData.profileImage}
              fullName={formData.fullName}
              onImageChange={(value) => handleProfileChange("profileImage", value)}
            />

            <div className="h-px bg-slate-100 w-full mt-2" />
          </div>

          <div className="mt-4 space-y-6">
            {formData.sections.map((section) => (
              <div key={section.id} className="flex flex-col gap-3">
                <div className="flex items-center justify-between pb-1">
                  <div className="flex-1 max-w-[50%]">
                    <input
                      suppressHydrationWarning
                      value={section.title}
                      onChange={(event) => updateSectionTitle(section.id, event.target.value)}
                      className="text-[#8e1933] font-bold text-lg bg-transparent outline-none border-b border-transparent focus:border-[#8e1933]/30 w-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      suppressHydrationWarning
                      type="button"
                      onClick={() => addField(section.id)}
                      className="flex items-center gap-1.5 rounded bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-200"
                    >
                      <Plus className="h-3 w-3" />
                      Add Field
                    </button>
                    {formData.sections.length > 1 && (
                      <button
                        suppressHydrationWarning
                        type="button"
                        onClick={() => removeSection(section.id)}
                        className="flex items-center rounded bg-red-50 px-2 py-1.5 text-red-600 transition hover:bg-red-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {section.fields.map((field) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <input
                        suppressHydrationWarning
                        value={field.label}
                        onChange={(event) => updateField(section.id, field.id, "label", event.target.value)}
                        className="w-[32%] rounded-md border border-slate-300 bg-[#f4f6f8] px-3 py-2.5 text-[0.85rem] text-slate-700 outline-none transition focus:border-accent"
                        placeholder="Label"
                      />
                      <input
                        suppressHydrationWarning
                        value={field.value}
                        onChange={(event) => updateField(section.id, field.id, "value", event.target.value)}
                        className="w-[68%] rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[0.85rem] text-slate-800 outline-none transition focus:border-accent"
                        placeholder="Value"
                      />
                      <button
                        suppressHydrationWarning
                        type="button"
                        onClick={() => removeField(section.id, field.id)}
                        disabled={section.fields.length === 1}
                        title="Remove Field"
                        className="flex shrink-0 items-center justify-center rounded-full border border-slate-300 p-2 text-slate-500 transition hover:border-red-400 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Trash2 className="h-[15px] w-[15px]" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              suppressHydrationWarning
              type="button"
              onClick={addSection}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(143,29,59,0.22)] transition hover:bg-[#781431]"
            >
              <PlusCircle className="h-5 w-5" />
              Add Section
            </button>
            <button
              suppressHydrationWarning
              type="button"
              onClick={resetForm}
              className="rounded-full border border-foreground/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/30"
            >
              Reset Form
            </button>
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
                Premium Template Gallery
              </h2>
              {/* <p className="text-white/90 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
                Explore our full collection of beautifully crafted matrimonial formats. Select any design to instantly preview it with your details.
              </p> */}
            </div>

            {/* Enhanced Gallery Grid Container strictly bounded inside the modal */}
            <div className="relative z-0 px-4">
              <TemplateSelectorRow
                data={formData}
                // layout="grid"
                selectedTemplateId={selectedTemplate.id}
                onSelect={(id) => {
                  setSelectedTemplateId(id);
                  // Optional: add a slight delay so they see it selected before the modal closes
                  setTimeout(() => setIsGalleryOpen(false), 250);
                }}
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
