import React from "react";

export function ElegantDesign({ data }: { data: any }) {
  const { fullName, sections = [] } = data;

  return (
    <div className="w-full bg-[#fdfaf8] p-12 text-center min-h-full">
      {/* Decorative border */}
      <div className="border-4 border-[#e9d5ca] p-4 min-h-full">
        <div className="border border-[#e9d5ca] p-8 h-full">
          <div className="mb-12">
            <h1 className="font-serif text-4xl text-[#7c5a4d] italic tracking-wide">{fullName || "Full Name"}</h1>
            <div className="mx-auto mt-4 h-px w-24 bg-[#e9d5ca]" />
          </div>

          <div className="space-y-12">
            {sections.map((section: any) => (
              <div key={section.id}>
                <h2 className="font-serif text-2xl text-[#8d6e63] mb-6 tracking-wider">
                  {section.title}
                </h2>
                <div className="grid grid-cols-2 gap-y-6 gap-x-8 max-w-lg mx-auto">
                  {section.fields.map((field: any) => (
                    <div key={field.id} className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase text-[#bcaaa4] tracking-[0.2em]">{field.label}</span>
                      <span className="text-base text-[#5d4037] font-medium">{field.value || "—"}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-[#bcaaa4] font-serif italic text-sm">
            Thank you for viewing my profile
          </div>
        </div>
      </div>
    </div>
  );
}
