import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

const VelvetCorner = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`w-32 h-32 ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 Q100,0 100,100" fill="none" stroke="#d4af37" strokeWidth="3" />
    <path d="M20,0 Q100,20 100,80" fill="none" stroke="#d4af37" strokeWidth="1" />
    <path d="M0,20 Q20,100 80,100" fill="none" stroke="#d4af37" strokeWidth="1" />
    <path d="M50,0 L50,10 M0,50 L10,50" stroke="#d4af37" strokeWidth="2" />
    <circle cx="0" cy="0" r="10" fill="#d4af37" />
    <circle cx="100" cy="100" r="5" fill="#d4af37" />
  </svg>
);

const LuxuryPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <pattern id="velvetPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#velvetPattern)" />
  </svg>
);

export function RoyalVelvetTemplate({ data }: BiodataTemplateProps) {
  return (
    <div
      className="relative mx-auto w-[675px] min-h-[1002px] overflow-hidden bg-[#3d0a14] shadow-2xl p-10 font-serif"
      style={{ fontFamily: "'Playfair Display', 'Merriweather', 'Georgia', serif" }}
    >
      {/* Background Texture */}
      <LuxuryPattern />

      {/* Elegant Border */}
      <div className="absolute inset-6 border-[2px] border-[#d4af37] shadow-[inset_0_0_50px_rgba(212,175,55,0.2)]">
        <VelvetCorner className="absolute -top-1 -left-1" />
        <VelvetCorner className="absolute -top-1 -right-1 rotate-90" />
        <VelvetCorner className="absolute -bottom-1 -left-1 -rotate-90" />
        <VelvetCorner className="absolute -bottom-1 -right-1 rotate-180" />
      </div>

      <div className="relative z-10 px-10 py-6 h-full flex flex-col items-center">
        {/* Ganesh/Om Icon */}
        <div className="mb-6">
          <svg className="w-12 h-12 text-[#d4af37] fill-current" viewBox="0 0 24 24">
            <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S15.31,6,12,6z" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-[#d4af37] tracking-[0.2em] uppercase mb-2 text-center">
          Marriage Biodata
        </h1>
        <div className="w-40 h-[1px] bg-[#d4af37] mb-8" />

        {/* Profile Image with Gold Frame */}
        <div className="mb-10 relative">
          <div className="absolute -inset-4 border border-[#d4af37]/30 rounded-full animate-pulse" />
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[180px] w-[180px] overflow-hidden rounded-full border-[4px] border-[#d4af37] shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            initialsClassName="flex h-[180px] w-[180px] items-center justify-center rounded-full bg-[#2a070e] text-5xl font-serif text-[#d4af37] tracking-wider uppercase"
          />
        </div>

        {/* Dynamic Sections */}
        <div className="w-full space-y-10 pb-10">
          {data.sections.map((section) => (
            <section key={section.id} className="flex flex-col items-center">
              <div className="flex items-center gap-4 w-full mb-6">
                <div className="flex-1 h-[0.5px] bg-[#d4af37]/30" />
                <h3 className="font-serif text-[1.25rem] font-black text-[#d4af37] tracking-[0.15em] uppercase px-4 text-center">
                  {section.title}
                </h3>
                <div className="flex-1 h-[0.5px] bg-[#d4af37]/30" />
              </div>

              <div className="w-full max-w-[500px] space-y-3">
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[200px_1fr] gap-x-6 items-start">
                    <div className="text-[1.1rem] text-[#d4af37]/80 font-bold tracking-wide text-right uppercase text-[10px] pt-1">{field.label}</div>
                    <div className="text-[1.2rem] text-white tracking-wide text-left font-medium">{field.value}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Motif */}
        <div className="mt-auto pt-8">
          <div className="text-[#d4af37] opacity-40 text-[10px] tracking-[0.5em] uppercase">RishtaMaker Premium</div>
        </div>
      </div>
    </div>
  );
}
