import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

const FloralPaintedCorner = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`w-[180px] h-[180px] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dark Blue & Indigo Leaves */}
    <path d="M0,0 C80,5 130,40 140,80 C90,80 40,50 0,0 Z" fill="#4d5c7c" opacity="0.9" />
    <path d="M0,0 C5,80 40,130 80,140 C80,90 50,40 0,0 Z" fill="#6e5783" opacity="0.9" />
    
    {/* Copper/Orange Stems */}
    <path d="M0,0 Q80,20 170,40" stroke="#cd7a65" strokeWidth="3" strokeLinecap="round" />
    <path d="M0,0 Q20,80 40,170" stroke="#cd7a65" strokeWidth="3" strokeLinecap="round" />
    <path d="M0,0 Q70,70 110,110" stroke="#cd7a65" strokeWidth="3" strokeLinecap="round" />
    
    {/* Little leaves along stems */}
    <path d="M120,29 Q130,22 140,32 Q130,42 120,29" fill="#d3778a" />
    <path d="M145,35 Q155,28 165,38 Q155,48 145,35" fill="#d3778a" />
    <path d="M29,120 Q22,130 32,140 Q42,130 29,120" fill="#d3778a" />
    <path d="M35,145 Q28,155 38,165 Q48,155 35,145" fill="#d3778a" />
    <path d="M70,75 Q80,70 90,80 Q80,90 70,75" fill="#d3778a" />

    {/* Central Red/Magenta blossom */}
    <path d="M0,0 C40,-15 65,25 0,0 C-15,40 25,65 0,0 Z" fill="#b9375e"/>
    <path d="M0,0 C-40,15 -25,-25 0,0 C15,-40 -25,-65 0,0 Z" fill="#cf5074"/>
    <circle cx="0" cy="0" r="9" fill="#f7d488"/>
    <circle cx="0" cy="0" r="3.5" fill="#fff"/>
  </svg>
);

const SmallFloret = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={`w-14 h-14 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25,25 C40,10 50,25 25,25 C10,40 25,50 25,25 Z" fill="#b9375e"/>
    <path d="M25,25 C10,10 0,25 25,25 C40,40 25,50 25,25 Z" fill="#cf5074"/>
    <circle cx="25" cy="25" r="5" fill="#cd7a65" />
    <circle cx="25" cy="25" r="2" fill="#fff" />
  </svg>
);

export function MinimalSlateTemplate({ data }: BiodataTemplateProps) {
  // Re-engineered strictly to Mockup 3 (Floral Painted Cream theme)
  return (
    <div 
      className="relative mx-auto w-[675px] min-h-[842px] overflow-hidden rounded-none bg-[#fcebef] shadow-xl p-8 font-serif leading-none flex flex-col"
      style={{ fontFamily: "'Playfair Display', 'Merriweather', 'Georgia', serif" }}
    >
      
      {/* Inner White Frame */}
      <div className="absolute inset-[24px] bg-white shadow-sm z-0" />
      
      {/* Floral Corners */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <FloralPaintedCorner />
      </div>
      <div className="absolute top-[16px] right-[16px] z-10 pointer-events-none">
        <SmallFloret />
      </div>
      <div className="absolute bottom-[16px] left-[16px] z-10 pointer-events-none">
        <SmallFloret className="rotate-180" />
      </div>
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
        <FloralPaintedCorner className="rotate-180" />
      </div>

      <div className="relative z-20 px-8 py-5 h-full flex flex-col">
        {/* Profile Image Centered Top */}
        <div className="flex justify-center mb-6 pt-5">
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[145px] w-[145px] overflow-hidden rounded-full border-none shadow-[0_5px_20px_rgba(0,0,0,0.15)] bg-white"
            initialsClassName="flex h-[145px] w-[145px] items-center justify-center rounded-full bg-[#b9375e] text-4xl font-serif text-white tracking-wider uppercase"
          />
        </div>

        {/* Dynamic Sections Centered */}
        <div className="flex-1 space-y-7 pt-2 pb-10">
          {data.sections.map((section) => (
            <section key={section.id} className="flex flex-col items-center">
              <h3 className="font-serif text-[1.45rem] font-bold text-[#202020] mb-4 tracking-wide text-center">
                {section.title}
              </h3>
              
              <div className="w-full max-w-[450px]">
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[195px_1fr] gap-x-2 py-[4.5px] items-start">
                    <div className="text-[1.05rem] text-[#1c1c1c] font-bold tracking-wide text-left whitespace-nowrap">{field.label}</div>
                    <div className="text-[1.05rem] text-[#333333] tracking-wide text-left break-words">{field.value}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
