import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

const GoldenCorner = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`w-[80px] h-[80px] text-[#b88c30] fill-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M 10,10 L 90,10 L 90,90" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
    <path d="M 25,25 L 75,25 L 75,75" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path d="M 10,10 Q 50,50 90,10" stroke="currentColor" strokeWidth="2" />
    <path d="M 10,10 Q 50,50 10,90" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.9" />
    <circle cx="20" cy="20" r="4" fill="currentColor" />
  </svg>
);

export function FloralCreamTemplate({ data }: BiodataTemplateProps) {
  // Re-engineered to exactly match Mockup 6 (Pink-Yellow Golden Frame Layout)
  return (
    <div
      className="relative mx-auto w-[675px] min-h-[842px] overflow-hidden rounded-none bg-gradient-to-r from-[#feefa5] to-[#fca5f8] shadow-xl font-serif flex flex-col box-border border-4 border-[#1a1a1a]"
      style={{ fontFamily: "'Playfair Display', 'Merriweather', 'Georgia', serif" }}
    >

      {/* Intricate Golden Frame Overlays */}
      <div className="absolute inset-[14px] z-10 pointer-events-none">
        {/* Dual Border Lines */}
        <div className="absolute inset-0 border-[3px] border-[#b88c30]" />
        <div className="absolute inset-[5px] border-[1px] border-[#b88c30]" />

        {/* Ornate corners */}
        <div className="absolute -top-[5px] -left-[5px]">
          <GoldenCorner />
        </div>
        <div className="absolute -top-[5px] -right-[5px] rotate-90">
          <GoldenCorner />
        </div>
        <div className="absolute -bottom-[5px] -right-[5px] rotate-180">
          <GoldenCorner />
        </div>
        <div className="absolute -bottom-[5px] -left-[5px] rotate-[-90deg]">
          <GoldenCorner />
        </div>
      </div>

      <div className="relative z-20 px-12 pt-20 flex-1 flex flex-col pb-16">

        {/* Floating Right Picture bounded strictly against Personal Details */}
        <div className="absolute top-[80px] right-[35px] z-30">
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[200px] w-[150px] overflow-hidden rounded-none shadow-xl bg-white object-cover border-2 border-black/80"
            initialsClassName="flex h-[210px] w-[160px] items-center justify-center bg-[#fba2ee] text-4xl font-serif text-[#142966] font-bold uppercase border-2 border-black/80"
          />
        </div>

        {/* Dynamic Data Sections */}
        <div className="space-y-11 w-full z-20">
          {data.sections.map((section, index) => (
            <section key={section.id} className="flex flex-col items-start w-full">

              <h3 className="font-serif text-[1.2rem] font-bold text-black bg-[#fba2ee] px-4 py-1.5 mb-6 tracking-wide shadow-sm border border-black/10">
                {section.title}
              </h3>

              {/* Lock first section narrower so the floated image avoids overlapping text */}
              <div className={`w-full ${index === 0 ? 'max-w-[340px]' : 'max-w-[480px]'}`}>
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[190px_300px] gap-x-2 py-[4px] items-start">
                    <div className="text-[1.0rem] text-[#142966] font-extrabold tracking-wide text-left pr-2 whitespace-nowrap">{field.label}</div>
                    <div className="text-[1.05rem] text-black font-medium tracking-wide text-left break-words">{field.value}</div>
                  </div>
                ))}
              </div>

            </section>
          ))}
        </div>
      </div>

      {/* Footer Branding Link */}
      <div className="relative z-20 mt-auto pb-8 text-center">

      </div>

    </div>
  );
}
