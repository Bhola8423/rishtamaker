import React from "react";

interface StepWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function StepWrapper({ title, description, children }: StepWrapperProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-1">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
          {title}
        </h2>
        <p className="text-slate-500 text-sm">
          {description}
        </p>
      </div>
      <div className="pt-2">
        {children}
      </div>
    </div>
  );
}

export function InputField({ label, name, value, onChange, placeholder, type = "text", required = false }: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#b11e24] focus:ring-2 focus:ring-[#b11e24]/10 transition-all outline-none min-h-[100px]"
          required={required}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#b11e24] focus:ring-2 focus:ring-[#b11e24]/10 transition-all outline-none"
          required={required}
        />
      )}
    </div>
  );
}
