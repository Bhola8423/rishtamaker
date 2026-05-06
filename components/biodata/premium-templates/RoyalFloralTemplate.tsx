"use client";

import React from 'react';
import { Playball, Fraunces, Manrope } from "next/font/google";
import { Heart, Calendar, MapPin, Ruler, Users, Star, Moon, Phone, Mail } from "lucide-react";
import type { BiodataTemplateProps } from "@/components/biodata/types";

const playball = Playball({
  weight: "400",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RoyalFloralTemplate({ data }: BiodataTemplateProps) {
  // Extract common fields for the quick stats row
  // In a real scenario, we'd search data.sections for these labels
  const getFieldValue = (label: string) => {
    for (const section of data.sections) {
      const field = section.fields.find(f => f.label.toLowerCase().includes(label.toLowerCase()));
      if (field) return field.value;
    }
    return "";
  };

  const dob = getFieldValue("date of birth") || "DD/MM/YYYY";
  const birthPlace = getFieldValue("birth place") || "City, State";
  const height = getFieldValue("height") || "5'4\"";
  const religion = getFieldValue("religion") || "Hindu";
  const caste = getFieldValue("caste") || "Your Caste";
  const zodiac = getFieldValue("zodiac") || "Your Sign";

  return (
    <div className={`w-[794px] min-h-[1123px] bg-[#fffdf9] p-6 relative overflow-hidden text-slate-800 shadow-2xl mx-auto border-[16px] border-[#f3e5d8] ${manrope.className}`}>
      {/* Decorative Gold Inner Border */}
      <div className="absolute inset-2 border border-[#d4af37]/30 pointer-events-none" />

      {/* Main Container with subtle background pattern */}
      <div className="relative h-full p-8 flex flex-col z-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-10">
          {/* Profile Picture with Ornate Frame */}
          <div className="relative pt-4">
            <div className="w-56 h-56 rounded-full border-[6px] border-[#d4af37] overflow-hidden shadow-2xl relative z-20 bg-white">
              {data.profileImage ? (
                <img src={data.profileImage} className="w-full h-full object-cover" alt="Profile" />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                  <Users className="w-20 h-20" />
                </div>
              )}
            </div>
            {/* Floral decorations around photo - Using SVGs for reliability */}
            <div className="absolute -top-6 -left-6 w-32 h-32 text-pink-200/60 z-10 rotate-[-15deg]">
              <FloralOrnament />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 text-pink-300/40 z-10">
              <FloralOrnament />
            </div>
          </div>

          {/* Title and Name Area */}
          <div className="flex-1 text-center pt-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-[#d4af37]/40" />
              <div className="text-[#b11e24]">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div className="h-px w-12 bg-[#d4af37]/40" />
            </div>
            
            <h1 className={`${playball.className} text-7xl text-[#b11e24] mb-4 leading-tight`}>Marriage Biodata</h1>
            
            <div className={`${fraunces.className} text-[11px] font-bold tracking-[0.25em] text-[#8b4513] mb-8 flex flex-col gap-2`}>
              <p>BEAUTIFUL SOUL, KIND HEART</p>
              <p className="opacity-80">LOOKING FOR A LIFELONG PARTNER</p>
              <div className="flex justify-center mt-1">
                <Heart className="w-2 h-2 text-[#b11e24] fill-current" />
              </div>
            </div>

            <div className="relative inline-block mt-4">
              <div className="absolute inset-x-[-40px] inset-y-[-10px] bg-pink-100/40 blur-2xl rounded-full" />
              <h2 className={`${playball.className} text-6xl text-[#b11e24] relative z-10 px-8`}>
                {data.fullName || "Your Name Here"}
              </h2>
            </div>
          </div>
        </div>

        {/* Quick Stats Row with Icons */}
        <div className="grid grid-cols-6 gap-0 mb-12 border-y border-[#d4af37]/30 py-6 text-center">
           <StatItem icon={<Calendar className="w-5 h-5" />} label="Date of Birth" value={dob} subValue="DD/MM/YYYY" />
           <StatItem icon={<MapPin className="w-5 h-5" />} label="Birth Place" value={birthPlace} subValue="City, State" />
           <StatItem icon={<Ruler className="w-5 h-5" />} label="Height" value={height} subValue={"5'4\""} />
           <StatItem icon={<Users className="w-5 h-5" />} label="Religion" value={religion} subValue="Hindu" />
           <StatItem icon={<Star className="w-5 h-5" />} label="Caste" value={caste} subValue="Your Caste" />
           <StatItem icon={<Moon className="w-5 h-5" />} label="Zodiac Sign" value={zodiac} subValue="Your Sign" />
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-12 gap-10 flex-1">
          {/* Left Column */}
          <div className="col-span-5 flex flex-col gap-10">
            {/* Personal Details */}
            <Section title="PERSONAL DETAILS" fields={data.sections.find(s => s.title.toUpperCase().includes("PERSONAL"))?.fields || []} />
            
            {/* Family Details */}
            <Section title="FAMILY DETAILS" fields={data.sections.find(s => s.title.toUpperCase().includes("FAMILY"))?.fields || []} />

            {/* Quote Card */}
            <div className="mt-auto p-8 rounded-3xl bg-pink-50/50 border border-pink-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 opacity-20 -rotate-45">
                 <FloralOrnament />
               </div>
               <div className="relative z-10">
                 <div className="text-[#b11e24] mb-3 opacity-40">
                   <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor"><path d="M0 24V13.5C0 9.1 1.06667 5.73333 3.2 3.4C5.33333 1.06667 8.26667 0 12 0V5.2C10.1333 5.2 8.73333 5.73333 7.8 6.8C6.86667 7.86667 6.4 9.4 6.4 11.4V12.8H12V24H0ZM19.2 24V13.5C19.2 9.1 20.2667 5.73333 22.4 3.4C24.5333 1.06667 27.4667 0 31.2 0V5.2C29.3333 5.2 27.9333 5.73333 27 6.8C26.0667 7.86667 25.6 9.4 25.6 11.4V12.8H31.2V24H19.2Z"/></svg>
                 </div>
                 <p className={`${fraunces.className} text-lg text-[#8b4513] leading-relaxed text-center font-medium italic`}>
                   A good partner is someone who brings out the best in you and stands by you in every phase of life.
                 </p>
                 <div className="flex justify-center mt-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b11e24]/30" />
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-7 flex flex-col gap-10">
            {/* Education & Career */}
            <Section title="EDUCATION & CAREER" fields={data.sections.find(s => s.title.toUpperCase().includes("EDUCATION"))?.fields || []} isRight />
            
            {/* About Me */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[#d4af37]/20" />
                <div className="px-6 py-2 rounded-full bg-pink-100/50 text-[#b11e24] text-sm font-bold tracking-widest flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  ABOUT ME
                  <div className="w-4 h-px bg-[#b11e24]/30" />
                </div>
                <div className="h-px flex-1 bg-[#d4af37]/20" />
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                  I am a simple, kind-hearted and ambitious girl with a positive outlook towards life. I believe in honesty, respect and strong values. I love spending time with my family and friends. I am passionate about my career and always eager to learn new things.
                </p>
                <div className="flex justify-center mt-4 text-[#b11e24]">
                  <Heart className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>

            {/* Partner Preferences */}
            <Section title="PARTNER PREFERENCES" fields={data.sections.find(s => s.title.toUpperCase().includes("PARTNER"))?.fields || []} isRight />

            {/* Contact Details */}
            <div className="mt-auto">
               <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#d4af37]/20" />
                <div className="px-6 py-2 rounded-full bg-[#8b4513]/5 text-[#8b4513] text-sm font-bold tracking-widest flex items-center gap-2 uppercase">
                  <Phone className="w-4 h-4" />
                  Contact Details
                  <div className="w-4 h-px bg-[#8b4513]/30" />
                </div>
                <div className="h-px flex-1 bg-[#d4af37]/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-[#8b4513] text-white flex items-center justify-center shrink-0">
                       <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">+91 12345 67890</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-[#8b4513] text-white flex items-center justify-center shrink-0">
                       <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">+91 12345 67890</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-[#b11e24] text-white flex items-center justify-center shrink-0">
                       <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">youremail@email.com</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center shrink-0">
                       <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">Your City, State</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center relative">
           <div className="absolute inset-x-0 top-1/2 h-px bg-[#d4af37]/20 -z-10" />
           <div className="bg-[#fffdf9] inline-block px-8 relative z-10">
              <p className={`${playball.className} text-[#b11e24] text-3xl mb-1`}>Looking forward to a beautiful journey together</p>
              <div className="flex justify-center items-center gap-2 mt-1">
                 <Heart className="w-3 h-3 text-[#b11e24] fill-current" />
                 <Heart className="w-4 h-4 text-[#b11e24] fill-current animate-pulse" />
                 <Heart className="w-3 h-3 text-[#b11e24] fill-current" />
              </div>
           </div>
        </div>
      </div>

      {/* Extreme Corner Florals */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-60 z-0 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-contain mix-blend-multiply" alt="" />
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-60 z-0 pointer-events-none rotate-180">
         <img src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-contain mix-blend-multiply" alt="" />
      </div>
    </div>
  );
}

function StatItem({ icon, label, value, subValue }: { icon: any, label: string, value: string, subValue: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#8b4513] group-hover:bg-[#8b4513] group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</span>
        <span className="text-xs font-bold text-slate-800">{value}</span>
        <span className="text-[8px] text-slate-400 font-medium">{subValue}</span>
      </div>
    </div>
  );
}

function Section({ title, fields, isRight = false }: { title: string, fields: any[], isRight?: boolean }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        {!isRight && <div className="h-px flex-1 bg-[#d4af37]/20" />}
        <div className={`px-5 py-2 rounded-full ${isRight ? 'bg-orange-50' : 'bg-pink-50'} text-[#b11e24] text-[11px] font-black tracking-[0.2em] border border-[#d4af37]/20 flex items-center gap-3`}>
           <div className="w-1.5 h-1.5 rounded-full bg-[#b11e24]/40" />
           {title}
           <div className="w-1.5 h-1.5 rounded-full bg-[#b11e24]/40" />
        </div>
        {isRight && <div className="h-px flex-1 bg-[#d4af37]/20" />}
      </div>
      <div className="space-y-3 pl-2">
        {fields.length > 0 ? fields.map((field, i) => (
          <div key={i} className="flex items-start gap-3 group">
            <Heart className="w-3 h-3 text-[#b11e24]/30 mt-1 shrink-0 group-hover:text-[#b11e24] transition-colors" />
            <div className="flex flex-1 items-baseline gap-2">
              <span className="text-[0.85rem] font-bold text-slate-700 min-w-[110px]">{field.label}</span>
              <span className="text-slate-400">:</span>
              <span className="text-[0.9rem] font-medium text-slate-600">{field.value}</span>
            </div>
          </div>
        )) : (
          <p className="text-xs text-slate-300 italic">No details provided</p>
        )}
      </div>
    </div>
  );
}

function FloralOrnament() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 20C80 20 60 40 60 60C60 80 80 100 100 100C120 100 140 80 140 60C140 40 120 20 100 20Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="M100 100C80 100 60 120 60 140C60 160 80 180 100 180C120 180 140 160 140 140C140 120 120 100 100 100Z" fill="currentColor" fillOpacity="0.1"/>
      <path d="M60 100C40 100 20 80 20 60C20 40 40 20 60 20C80 20 100 40 100 60C100 80 80 100 60 100Z" fill="currentColor" fillOpacity="0.15"/>
      <path d="M140 100C160 100 180 80 180 60C180 40 160 20 140 20C120 20 100 40 100 60C100 80 120 100 140 100Z" fill="currentColor" fillOpacity="0.15"/>
    </svg>
  );
}
