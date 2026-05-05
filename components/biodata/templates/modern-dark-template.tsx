import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

const ContinuousBorder = ({ className }: { className?: string }) => (
  <div className={`w-[675px] h-[35px] flex overflow-hidden ${className}`}>
    {[...Array(12)].map((_, i) => (
      <svg key={i} viewBox="0 0 50 35" className="h-[35px] min-w-[50px] text-[#e6c170]">
        <path d="M0,0 L50,0 L50,15 C40,15 35,32 25,32 C15,32 10,15 0,15 Z" fill="#641016" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="25" cy="22" r="3" fill="currentColor" />
        <path d="M0,35 Q25,20 50,35" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M25,0 L25,8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="25" cy="11" r="1.5" fill="currentColor" />
      </svg>
    ))}
  </div>
);

const ShreeGaneshaySVG = () => (
  <svg viewBox="0 0 400 100" className="w-[340px] h-[85px] mx-auto text-[#e6c170] drop-shadow-md" fill="currentColor">
    {/* Decorative swooshes resembling calligraphy flourish */}
    <path d="M40 50 Q100 20 200 50 T360 50" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <path d="M140 85 C170 100 230 100 260 85" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
    <path d="M120 15 C160 -5 240 -5 280 15" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <text x="200" y="65" fontSize="48" fontFamily="serif" textAnchor="middle" fontWeight="bold">
      ॥ श्री गणेशाय नमः ॥
    </text>
  </svg>
);

const BottomDivider = () => (
  <div className="flex justify-center items-center py-2 opacity-90 mx-auto w-3/4">
    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#e6c170] to-[#e6c170]" />
    <svg viewBox="0 0 20 20" className="w-4 h-4 mx-3 text-[#e6c170] fill-current">
      <path d="M10,0 C12,5 15,8 20,10 C15,12 12,15 10,20 C8,15 5,12 0,10 C5,8 8,5 10,0 Z" />
    </svg>
    <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#e6c170] to-[#e6c170]" />
  </div>
);

export function ModernDarkTemplate({ data }: BiodataTemplateProps) {
  // Re-engineered to exactly match Mockup 2 (Crimson, Golden Header, White Fields, Custom Right Image)
  return (
    <div
      className="relative mx-auto w-[675px] min-h-[842px] overflow-hidden rounded-none bg-[#641016] shadow-xl font-serif leading-none flex flex-col"
      style={{ fontFamily: "'Playfair Display', 'Merriweather', 'Georgia', serif" }}
    >

      {/* Background radial fade for texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,193,112,0.06),transparent_70%)] pointer-events-none" />

      {/* Top Border */}
      <ContinuousBorder className="absolute top-0 left-0 bg-[#4a0a0f]" />

      <div className="relative z-10 flex-1 flex flex-col pt-12 pb-16">

        {/* Calligraphy Header */}
        <div className="mt-3 mb-6">
          <ShreeGaneshaySVG />
        </div>

        {/* Dynamic Sections and Floating Square Profile Photo */}
        <div className="relative px-10 flex-1 space-y-7">

          <div className="absolute top-0 right-8 z-20">
            <TemplatePhoto
              name={data.fullName}
              profileImage={data.profileImage}
              className="h-[170px] w-[140px] overflow-hidden rounded-sm border-[2px] border-white/20 shadow-[-10px_15px_30px_rgba(0,0,0,0.3)] bg-white/5"
              initialsClassName="flex h-[170px] w-[140px] items-center justify-center rounded-none bg-[#4a0a0f] text-4xl font-serif text-[#e6c170] uppercase"
            />
          </div>

          {data.sections.map((section, index) => (
            <section key={section.id} className="flex flex-col">
              <h3 className="font-serif text-[1.6rem] font-bold text-[#e1a243] mb-4 tracking-wide shadow-black drop-shadow-sm">
                {section.title}
              </h3>

              {/* Force first section to mathematically dodge the absolute profile picture */}
              <div className={`w-full ${index === 0 ? 'max-w-[340px]' : 'max-w-[480px]'}`}>
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[190px_300px] gap-x-4 py-[3px] items-start">
                    <div className="text-[1.05rem] text-white font-bold tracking-wide text-left whitespace-nowrap">{field.label}</div>
                    <div className="text-[1.05rem] text-white/95 tracking-wide text-left break-words leading-tight">{field.value}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>

      {/* Footer Content */}
      <div className="relative z-10 mt-auto pb-10">
        <BottomDivider />
      </div>

      {/* Bottom Border */}
      <ContinuousBorder className="absolute bottom-0 left-0 bg-[#4a0a0f] rotate-180" />
    </div>
  );
}
