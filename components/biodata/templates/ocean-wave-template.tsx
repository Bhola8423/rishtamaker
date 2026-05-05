import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

const ScallopBorder = ({ className }: { className?: string }) => (
  <div className={`w-[675px] h-[35px] flex overflow-hidden ${className}`}>
    {[...Array(15)].map((_, i) => (
      <svg key={i} viewBox="0 0 40 35" className="h-[35px] min-w-[40px] text-[#c9a759]">
        {/* Scallop arch hanging down */}
        <path d="M0,0 Q20,30 40,0" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20,6 L25,12 L20,18 L15,12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="24" r="2" fill="currentColor" />
        <circle cx="0" cy="4" r="2.5" fill="currentColor" />
        <circle cx="40" cy="4" r="2.5" fill="currentColor" />
      </svg>
    ))}
  </div>
);

const FaintMandala = () => (
  <svg className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[450px] h-[450px] opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#2d3b36" strokeWidth="3" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="#2d3b36" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M 50 -10 C 65 30 65 30 110 50 C 65 70 65 70 50 110 C 35 70 35 70 -10 50 C 35 30 35 30 50 -10 Z" fill="#2d3b36" />
    <path d="M 50 15 L 60 40 L 85 50 L 60 60 L 50 85 L 40 60 L 15 50 L 40 40 Z" fill="none" stroke="#2d3b36" strokeWidth="1" />
  </svg>
);

export function OceanWaveTemplate({ data }: BiodataTemplateProps) {
  // Re-engineered to match Mockup 4 (Creamy Mandala Arch Theme)
  return (
    <div
      className="relative mx-auto w-[675px] min-h-[842px] overflow-hidden rounded-none bg-[#fffcf9] shadow-xl font-serif leading-none flex flex-col"
      style={{ fontFamily: "'Playfair Display', 'Merriweather', 'Georgia', serif" }}
    >

      {/* Background Mandala Image */}
      <FaintMandala />

      {/* Top Border */}
      <ScallopBorder className="absolute top-0 left-0 bg-[#fffcf9] z-10" />

      <div className="relative z-20 px-8 py-4 h-full flex flex-col mt-[45px]">
        {/* Profile Image Centered Top */}
        <div className="flex justify-center mb-6">
          {/* <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[145px] w-[145px] overflow-hidden rounded-full border-none shadow-[0_15px_40px_rgba(45,59,54,0.15)] bg-white"
            initialsClassName="flex h-[145px] w-[145px] items-center justify-center rounded-full bg-[#38423e] text-4xl font-serif text-[#c9a759] tracking-wider uppercase"
          /> */}
        </div>

        {/* Dynamic Sections Centered */}
        <div className="flex-1 space-y-7 pt-4 pb-12">
          {data.sections.map((section) => (
            <section key={section.id} className="flex flex-col items-center">
              <h3 className="font-serif text-[1.5rem] font-bold text-[#38423e] mb-4 tracking-wide text-center">
                {section.title}
              </h3>

              <div className="w-full max-w-[450px]">
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[195px_1fr] gap-x-2 py-[4px] items-start">
                    <div className="text-[1.05rem] text-[#38423e] font-bold tracking-wide text-left whitespace-nowrap">{field.label}</div>
                    <div className="text-[1.05rem] text-[#55605b] tracking-wide text-left break-words">{field.value}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <ScallopBorder className="absolute bottom-0 left-0 bg-[#fffcf9] z-10 rotate-180" />
    </div>
  );
}
