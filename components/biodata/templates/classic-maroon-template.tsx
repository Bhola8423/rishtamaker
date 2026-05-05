import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

const MapleLeavesCorner = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`w-[240px] h-[240px] ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none">
    <g stroke="#803d08" strokeWidth="0.5">
      <path d="M100,50 L110,80 L160,70 L130,105 L170,125 L120,135 L140,180 L100,150 L60,180 L80,135 L30,125 L70,105 L40,70 L90,80 Z" fill="#d27b23" transform="scale(0.8) rotate(15, 100, 100) translate(40, -10)" />
      <path d="M100,50 L110,80 L160,70 L130,105 L170,125 L120,135 L140,180 L100,150 L60,180 L80,135 L30,125 L70,105 L40,70 L90,80 Z" fill="#e9a43a" transform="scale(0.55) rotate(-35, 100, 100) translate(0, 120)" />
      <path d="M100,150 Q100,200 130,220" stroke="#4d2f16" strokeWidth="2" />
      <path d="M150,5 Q160,50 140,90" stroke="#4d2f16" strokeWidth="2" />
    </g>
  </svg>
);

export function ClassicMaroonTemplate({ data }: BiodataTemplateProps) {
  // Re-engineered to precisely match Mockup 5 (Autumn Maple Leaf Layout)
  return (
    <div
      className="relative mx-auto w-[675px] min-h-[842px] overflow-hidden rounded-none bg-[#f2f6f9] shadow-xl font-serif flex flex-col"
      style={{ fontFamily: "'Playfair Display', 'Merriweather', 'Georgia', serif" }}
    >

      {/* Watercolor Splotch Blur Effects */}
      <div className="absolute top-[-30px] right-[20px] w-64 h-64 bg-[#fbdec1]/60 blur-[60px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20px] left-[0px] w-80 h-72 bg-[#fbdec1]/50 blur-[70px] pointer-events-none z-0" />

      {/* Actual Leaves Decorative Corner Overlays */}
      <div className="absolute top-[-20px] right-[-20px] z-10 pointer-events-none opacity-90">
        <MapleLeavesCorner />
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] z-10 pointer-events-none opacity-90 rotate-[120deg]">
        <MapleLeavesCorner />
      </div>

      <div className="relative z-20 px-9 pt-16 flex-1 flex flex-col pb-16">

        {/* Floating Right Picture bounded strictly against Personal Details */}
        <div className="absolute top-[60px] right-[25px] z-30">
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[200px] w-[150px] overflow-hidden rounded-none border-[1px] border-black/10 shadow-[0_5px_15px_rgba(0,0,0,0.15)] bg-white object-cover"
            initialsClassName="flex h-[210px] w-[160px] items-center justify-center bg-[#fcd071] text-4xl font-serif text-[#bc741e] font-bold uppercase"
          />
        </div>

        {/* Dynamic Data Sections */}
        <div className="space-y-10 w-full z-20">
          {data.sections.map((section, index) => (
            <section key={section.id} className="flex flex-col items-start w-full">

              <h3 className="font-serif text-[1.2rem] font-bold text-black bg-[#fdce6c] px-4 py-1.5 mb-5 tracking-wide shadow-sm">
                {section.title}
              </h3>

              <div className={`w-full ${index === 0 ? 'max-w-[350px]' : 'max-w-[480px]'}`}>
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[190px_300px] gap-x-2 py-[3px] items-start">
                    <div className="text-[1.0rem] text-[#b06f15] font-bold tracking-wide text-left pr-1 whitespace-nowrap">{field.label}</div>
                    <div className="text-[1.05rem] text-[#1a1a1a] font-medium tracking-wide text-left break-words">{field.value}</div>
                  </div>
                ))}
              </div>

            </section>
          ))}
        </div>
      </div>

      {/* Footer Branding Link */}

    </div>
  );
}
