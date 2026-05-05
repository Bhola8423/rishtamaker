import React from "react";

export function ClassicDesign({ data }: { data: any }) {
  const { fullName, sections = [] } = data;

  return (
    <div className="w-full bg-white p-12 text-[#1a1a1a] font-serif min-h-full">
      <div className="border-b-2 border-black pb-8 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-widest">{fullName || "Full Name"}</h1>
        <p className="mt-2 text-sm italic uppercase tracking-loose">Marriage Biodata</p>
      </div>

      <div className="mt-12 space-y-10">
        {sections.map((section: any) => (
          <div key={section.id} className="space-y-4">
            <h2 className="text-xl font-bold border-b border-slate-300 pb-1 uppercase tracking-wider">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-12">
              {section.fields.map((field: any) => (
                <div key={field.id} className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-slate-500 tracking-tighter">{field.label}</span>
                  <span className="text-base">{field.value || "—"}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
