import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

const ElegantCorner = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`w-32 h-32 absolute ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Inner border line extensions */}
    <path d="M0 20 L20 20 Q100 20 100 100 Q100 180 180 180 L200 180" stroke="#c09b4d" strokeWidth="2.5" fill="none" />
    <path d="M20 0 L20 20 Q20 100 100 100 Q180 100 180 200" stroke="#c09b4d" strokeWidth="2.5" fill="none" />

    {/* Decorative swirls matching the image */}
    <path d="M25 40 C60 20 90 60 70 80 C60 90 40 70 50 50" stroke="#c09b4d" strokeWidth="2" fill="none" />
    <path d="M40 25 C20 60 60 90 80 70 C90 60 70 40 50 50" stroke="#c09b4d" strokeWidth="2" fill="none" />

    {/* Floral leaf elements */}
    <path d="M30 40 Q40 30 50 40 Q40 50 30 40 Z" fill="#c09b4d" />
    <path d="M40 30 Q50 20 60 30 Q50 40 40 30 Z" fill="#c09b4d" />
    <path d="M70 60 Q80 50 90 60 Q80 70 70 60 Z" fill="#c09b4d" />
    <path d="M60 70 Q70 80 80 70 Q70 60 60 70 Z" fill="#c09b4d" />

    <path d="M110 90 Q120 70 140 80 Q130 100 110 90 Z" fill="none" stroke="#c09b4d" strokeWidth="1.5" />
    <path d="M90 110 Q70 120 80 140 Q100 130 90 110 Z" fill="none" stroke="#c09b4d" strokeWidth="1.5" />
    <path d="M120 110 Q140 120 130 140 Q110 130 120 110 Z" fill="#c09b4d" />

    <circle cx="95" cy="95" r="5" fill="#c09b4d" />
    <circle cx="80" cy="110" r="3" fill="#c09b4d" />
    <circle cx="110" cy="80" r="3" fill="#c09b4d" />
  </svg>
);

const FloralWatermark = () => (
  <svg viewBox="0 0 500 500" className="absolute opacity-[0.03] w-[400px] h-[400px] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#c09b4d" strokeWidth="2">
      <circle cx="250" cy="250" r="40" />
      <path d="M250 210 C200 100 300 100 250 210" />
      <path d="M250 290 C200 400 300 400 250 290" />
      <path d="M210 250 C100 200 100 300 210 250" />
      <path d="M290 250 C400 200 400 300 290 250" />

      <path d="M220 220 C120 120 180 80 250 210" />
      <path d="M280 280 C380 380 320 420 250 290" />
      <path d="M280 220 C380 120 420 180 290 250" />
      <path d="M220 280 C120 380 80 320 210 250" />

      <path d="M250 150 C220 50 280 50 250 150" />
      <path d="M250 350 C220 450 280 450 250 350" />
    </g>
    <g fill="#c09b4d">
      <circle cx="250" cy="250" r="15" />
      <circle cx="250" cy="150" r="8" />
      <circle cx="250" cy="350" r="8" />
      <circle cx="150" cy="250" r="8" />
      <circle cx="350" cy="250" r="8" />
    </g>
  </svg>
);


export function GoldenVintageTemplate({ data }: BiodataTemplateProps) {
  return (
    <div
      className="relative mx-auto w-[675px] min-h-[1050px] overflow-hidden bg-white shadow-xl flex flex-col p-[12px]"
      style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
    >
      {/* Outer Thick Border (Mustard/Golden) */}
      <div className="absolute inset-0 border-[12px] border-[#c19b48] pointer-events-none z-10" />

      {/* Watermarks */}
      <div className="absolute top-[10%] left-[-10%] rotate-45 pointer-events-none">
        <FloralWatermark />
      </div>
      <div className="absolute bottom-[-10%] right-[-5%] -rotate-45 pointer-events-none">
        <FloralWatermark />
      </div>

      {/* Inner Thin Border with Ornaments */}
      <div className="absolute top-[28px] bottom-[28px] left-[28px] right-[28px] pointer-events-none z-10">
        {/* The actual straight lines connecting the corners */}
        <div className="absolute top-[20px] left-[20px] right-[20px] bottom-[20px] border-[2px] border-[#c19b48]" />

        {/* Diamond Side Ornaments (Left and Right) */}
        <div className="absolute top-1/2 left-[12px] w-[18px] h-[18px] bg-[#c19b48] rotate-45 -translate-y-1/2" />
        <div className="absolute top-1/2 right-[12px] w-[18px] h-[18px] bg-[#c19b48] rotate-45 -translate-y-1/2" />

        {/* Top Left Corner */}
        <div className="absolute top-0 left-0">
          <ElegantCorner />
        </div>
        {/* Top Right Corner */}
        <div className="absolute top-0 right-0 scale-x-[-1]">
          <ElegantCorner />
        </div>
        {/* Bottom Left Corner */}
        <div className="absolute bottom-0 left-0 scale-y-[-1]">
          <ElegantCorner />
        </div>
        {/* Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1]">
          <ElegantCorner />
        </div>
      </div>

      <div className="relative z-20 px-12 pt-10 flex-1 flex flex-col pb-[100px]">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center w-full mb-2 text-center">
          <img
            src="/images/ganesh.jpg"
            alt="Ganesha"
            className="w-20 h-20 mb-2 object-contain"
          />
          <h2 className="text-[1.4rem] font-bold text-[#c19b48] tracking-wide ">
            ॥ श्री गणेशाय नमः ॥
          </h2>
        </div>

        {/* Floating Right Picture */}
        <div className="absolute top-[220px] right-[45px] z-30">
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[220px] w-[170px] overflow-hidden rounded-none border-[3px] border-[#c19b48] shadow-sm bg-white object-cover"
            initialsClassName="flex h-[220px] w-[170px] items-center justify-center bg-[#fdfaf5] text-4xl font-sans text-[#c19b48] font-bold uppercase border-[3px] border-[#c19b48]"
          />
        </div>

        {/* Dynamic Data Sections */}
        <div className="space-y-6 w-full z-20">
          {data.sections.map((section, index) => (
            <section key={section.id} className="flex flex-col items-center w-full">

              {/* Center aligned bold headers matching the original image */}
              {index > 0 && (
                <h3 className="text-[1.15rem] font-bold text-[#c19b48] uppercase tracking-wide mb-3 mt-3">
                  {section.title}
                </h3>
              )}

              <div className={`w-full ${index === 0 ? 'max-w-[420px] self-start ml-2' : 'max-w-[500px]'}`}>
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[160px_20px_1fr] py-[4px] items-start w-full">
                    <div className="text-[1.05rem] text-[#c19b48] font-semibold text-left truncate pr-2">
                      {field.label}
                    </div>
                    <div className="text-[1.05rem] text-[#c19b48] font-semibold text-center">
                      :
                    </div>
                    <div className="text-[1.05rem] text-[#63615a] font-medium text-left truncate pl-2" title={field.value}>
                      {field.value}
                    </div>
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
