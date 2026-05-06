"use client";

import RoyalFloralTemplate from "@/components/biodata/premium-templates/RoyalFloralTemplate";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { ArrowLeft, Download, Crown } from "lucide-react";

export default function FloralRoyalPreview() {
  const mockData = {
    fullName: "Priya Sharma",
    profileImage: "https://images.unsplash.com/photo-1594744803329-a584af1af518?q=80&w=1000&auto=format&fit=crop",
    sections: [
      {
        id: "personal",
        title: "Personal Details",
        fields: [
          { id: "1", label: "Full Name", value: "Priya Sharma" },
          { id: "2", label: "Nickname", value: "Piku" },
          { id: "3", label: "Marital Status", value: "Unmarried" },
          { id: "4", label: "Nationality", value: "Indian" },
          { id: "5", label: "Languages Known", value: "English, Hindi, Punjabi" },
          { id: "6", label: "Manglik", value: "No" },
          { id: "7", label: "Complexion", value: "Fair" },
          { id: "8", label: "Diet", value: "Vegetarian" },
          { id: "9", label: "Hobbies", value: "Painting, Reading, Travelling" },
        ]
      },
      {
        id: "education",
        title: "Education & Career",
        fields: [
          { id: "10", label: "Education", value: "MBA in Finance" },
          { id: "11", label: "College", value: "IIM Ahmedabad" },
          { id: "12", label: "Profession", value: "Investment Banker" },
          { id: "13", label: "Company", value: "Goldman Sachs" },
          { id: "14", label: "Annual Income", value: "25 LPA+" },
        ]
      },
      {
        id: "family",
        title: "Family Details",
        fields: [
          { id: "15", label: "Father's Name", value: "Mr. Rajesh Sharma" },
          { id: "16", label: "Father's Occ.", value: "Senior Architect" },
          { id: "17", label: "Mother's Name", value: "Mrs. Sunita Sharma" },
          { id: "18", label: "Mother's Occ.", value: "Homemaker" },
          { id: "19", label: "Brother(s)", value: "1 Younger Brother" },
          { id: "20", label: "Family Type", value: "Nuclear" },
          { id: "21", label: "Family Status", value: "Upper Middle Class" },
        ]
      },
      {
        id: "partner",
        title: "Partner Preferences",
        fields: [
          { id: "22", label: "Age Range", value: "26 - 30 Years" },
          { id: "23", label: "Height", value: "5'8\" - 6'0\"" },
          { id: "24", label: "Qualification", value: "Post Graduate" },
          { id: "25", label: "Profession", value: "Software Engineer / MBA" },
          { id: "26", label: "Location", value: "India or Abroad" },
        ]
      }
    ]
  };

  return (
    <PageShell>
      <div className="bg-[#fffdfc] min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Actions */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-6">
              <Link href="/premium-templates" className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Premium Template</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900">Royal Floral Signature</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/#builder" className="bg-[#b11e24] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#931719] transition-all flex items-center gap-2">
                Use This Template
              </Link>
            </div>
          </div>

          {/* Template Center Rendering */}
          <div className="flex justify-center bg-slate-100/30 py-16 rounded-[3rem] border border-slate-100 shadow-inner overflow-x-auto">
             <div className="scale-[0.8] md:scale-100 origin-top transform-gpu">
                <RoyalFloralTemplate data={mockData as any} />
             </div>
          </div>
          
          <div className="mt-12 text-center text-slate-400 text-sm">
             <p>This is a live preview of the Royal Floral Signature template.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
