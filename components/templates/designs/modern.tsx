import React from "react";

export function ModernDesign({ data }: { data: any }) {
  const { fullName, profileImage, sections = [] } = data;

  return (
    <div className="w-full bg-slate-50 p-10 font-sans min-h-full">
      <div className="flex items-center gap-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        {profileImage ? (
          <img src={profileImage} alt="" className="h-32 w-32 rounded-2xl object-cover" />
        ) : (
          <div className="h-32 w-32 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </div>
        )}
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">{fullName || "Your Full Name"}</h1>
          <div className="mt-2 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 uppercase">
            Matrimonial Profile
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6">
        {sections.map((section: any) => (
          <div key={section.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {section.title}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {section.fields.map((field: any) => (
                <div key={field.id} className="space-y-1">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{field.label}</p>
                  <p className="text-sm font-medium text-slate-700">{field.value || "Not provided"}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
