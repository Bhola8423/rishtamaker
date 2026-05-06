import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

const CornerMotif = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`w-28 h-28 ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 C60,0 100,40 100,100" fill="none" stroke="#e6c170" strokeWidth="2.5" />
    <path d="M0,20 C40,20 80,40 80,100" fill="none" stroke="#e6c170" strokeWidth="1.5" />
    <path d="M20,0 C20,40 40,80 100,80" fill="none" stroke="#e6c170" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="4" fill="#e6c170" />
    <circle cx="35" cy="35" r="2.5" fill="#e6c170" />
    <circle cx="65" cy="65" r="2" fill="#e6c170" />
    <path d="M 0,0 L 40,40 Z" fill="none" stroke="#e6c170" strokeWidth="1" />
  </svg>
);

const CenterMandalaSVG = () => (
  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-[0.06] pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#e6c170" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="#e6c170" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="20" fill="none" stroke="#e6c170" strokeWidth="1" />
    <path d="M 50 2 L 55 35 L 98 50 L 55 65 L 50 98 L 45 65 L 2 50 L 45 35 Z" fill="#e6c170" />
    <path d="M 50 15 L 60 40 L 85 50 L 60 60 L 50 85 L 40 60 L 15 50 L 40 40 Z" fill="none" stroke="#e6c170" strokeWidth="0.5" />
    <path d="M 25 25 L 75 75 M 25 75 L 75 25" fill="none" stroke="#e6c170" strokeWidth="0.5" />
  </svg>
);

export function EmeraldRoyalTemplate({ data }: BiodataTemplateProps) {
  // Re-engineered to exactly match Mockup 1 (Deep Teal & Gold)
  return (
    <div
      className="relative mx-auto w-[675px] min-h-[1002px] overflow-hidden bg-[#063b46] shadow-xl p-8 font-serif leading-none"
      style={{ fontFamily: "'Playfair Display', 'Merriweather', 'Georgia', serif" }}
    >

      {/* Background Mandala Image */}
      <CenterMandalaSVG />

      {/* Decorative Outer Border & Corners */}
      <div className="absolute inset-[24px] border-[1px] border-dashed border-[#e6c170]/80">
        <CornerMotif className="absolute -top-[5px] -left-[5px] text-[#e6c170] fill-current" />
        <CornerMotif className="absolute -top-[5px] -right-[5px] text-[#e6c170] fill-current rotate-90" />
        <CornerMotif className="absolute -bottom-[5px] -left-[5px] text-[#e6c170] fill-current -rotate-90" />
        <CornerMotif className="absolute -bottom-[5px] -right-[5px] text-[#e6c170] fill-current rotate-180" />
      </div>

      <div className="relative z-10 px-8 py-3 h-full flex flex-col">
        {/* Profile Image Centered Top */}
        <div className="flex justify-center mb-6 pt-6">
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[140px] w-[140px] overflow-hidden rounded-full border-[2px] border-[#e6c170] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            initialsClassName="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#105360] text-4xl font-serif text-[#e6c170] tracking-wider uppercase"
          />
        </div>

        {/* Dynamic Sections */}
        <div className="flex-1 space-y-6 pt-2 pb-10">
          {data.sections.map((section) => (
            <section key={section.id} className="flex flex-col items-center">
              <h3 className="font-serif text-[1.4rem] font-bold text-[#e6c170] mb-4 tracking-wider text-center">
                {section.title}
              </h3>

              <div className="w-full max-w-[450px]">
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[195px_1fr] gap-x-2 py-[4px] items-start">
                    <div className="text-[1.05rem] text-[#e6c170] font-bold tracking-wide text-left whitespace-nowrap">{field.label}</div>
                    <div className="text-[1.05rem] text-white tracking-wide text-left break-words">{field.value}</div>
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
