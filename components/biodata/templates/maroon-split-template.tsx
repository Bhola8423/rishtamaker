import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

export function MaroonSplitTemplate({ data }: BiodataTemplateProps) {
  const personalSection = data.sections[0];
  let leftFields: any[] = [];
  let extraRightFields: any[] = [];

  if (personalSection) {
    // Exclude the 'name' field completely since it's shown in large text on the right
    const fieldsWithoutName = personalSection.fields.filter(f => !f.label.toLowerCase().includes('name'));
    // Take the first 7 fields (Gender -> Education) for the left sidebar
    leftFields = fieldsWithoutName.slice(0, 7);
    // Take the remaining fields (Hobby, Skills, etc.) for a new section on the right
    extraRightFields = fieldsWithoutName.slice(7);
  }
  
  // Put Family Details, Contact Details, etc. (Sections 1+) on the right
  const rightSections = data.sections.slice(1);

  return (
    <div
      className="relative mx-auto w-[675px] min-h-[950px] bg-[#f9f3e4] shadow-xl flex flex-row font-sans overflow-hidden border border-slate-200"
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif"
      }}
    >
      {/* Decorative top right mandalas (optional CSS circles to simulate the image) */}
      <div className="absolute top-4 left-[350px] w-[50px] h-[50px] border-[1px] border-dashed border-slate-300 rounded-full opacity-50"></div>
      <div className="absolute top-10 left-[420px] w-[80px] h-[80px] border-[1px] border-dashed border-slate-300 rounded-full opacity-50"></div>
      
      {/* LEFT MAROON COLUMN WITH ARCH */}
      {/* The arch is achieved using rounded-t-[140px] to make a perfect semi-circle at the top */}
      <div className="w-[280px] min-h-full bg-[#8b1c31] flex flex-col items-center pt-[40px] px-6 text-white z-20 flex-shrink-0 rounded-t-[140px] ml-4 mt-4 shadow-[5px_0_15px_rgba(0,0,0,0.1)]">
        
        {/* Top Icon and BIODATA Text */}
        <div className="flex flex-col items-center mb-6">
          <svg className="w-12 h-12 text-[#e8c051] mb-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" />
          </svg>
          <h2 className="text-[#e8c051] text-2xl font-bold tracking-widest uppercase">BIODATA</h2>
        </div>

        {/* Profile Photo with scalloped/double border effect */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute inset-[-12px] rounded-full border-[4px] border-dashed border-[#e8c051]" />
          
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-[4px] border-[#e8c051] object-cover z-10"
            initialsClassName="relative flex h-[150px] w-[150px] items-center justify-center bg-[#fdfaf5] text-5xl font-sans text-[#8b1c31] font-bold uppercase rounded-full border-[4px] border-[#e8c051] z-10"
          />
        </div>

        {/* Left Sections (User Details / Personal Details) */}
        {personalSection && leftFields.length > 0 && (
          <div className="w-full flex flex-col gap-6 pb-10">
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-3 border-y border-[#e8c051]/40 py-2 mb-4 justify-center">
                <span className="text-[#e8c051] text-2xl" style={{fontFamily: "Arial"}}>卐</span>
                <h3 className="text-[#fdfaf5] text-[1.25rem] italic font-serif tracking-wide">{personalSection.title}</h3>
              </div>
              
              <div className="flex flex-col gap-2.5 w-full pl-2">
                {leftFields.map(f => (
                  <div key={f.id} className="flex items-start gap-2.5 w-full leading-snug">
                    <span className="text-[#e8c051] text-[0.6rem] mt-[8px]">●</span>
                    <span className="text-[#fdfaf5] text-[1.05rem] tracking-wide break-words text-left">
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT CREAM COLUMN */}
      <div className="w-[375px] pt-[80px] pl-8 pr-6 flex flex-col z-20">
        
        {/* Name Block */}
        <div className="mb-10 text-center">
          <h1 className="text-[3.4rem] font-bold text-[#8b1c31] italic font-serif leading-none drop-shadow-sm" style={{ fontFamily: "'Brush Script MT', 'Great Vibes', 'Dancing Script', cursive" }}>
            {data.fullName}
          </h1>
        </div>

        {/* Right Sections (Family Details, Contact Details) */}
        <div className="space-y-8 w-full pl-1 pb-10">
          {rightSections.map((section) => {
            if (section.fields.length === 0) return null;

            return (
              <section key={section.id} className="flex flex-col items-center w-full">
                
                <div className="bg-[#dfa658] text-[#8b1c31] font-bold uppercase tracking-wider px-8 py-1.5 rounded-full mb-6 shadow-sm text-[1.05rem]">
                  {section.title}
                </div>

                <div className="w-full">
                  {section.fields.map((field) => (
                    <div key={field.id} className="grid grid-cols-[160px_1fr] py-[4px] items-start w-full gap-2">
                      <div className="text-[1.05rem] text-[#4a232f] font-semibold text-left truncate">
                        {field.label}
                      </div>
                      <div className="text-[1.05rem] text-[#2a1218] font-normal text-left leading-snug break-words">
                        {field.value}
                      </div>
                    </div>
                  ))}
                </div>

              </section>
            );
          })}

          {/* Extra Personal Details (Hobby, Skills, etc. moved from left) */}
          {extraRightFields.length > 0 && (
            <section className="flex flex-col items-center w-full">
              <div className="bg-[#dfa658] text-[#8b1c31] font-bold uppercase tracking-wider px-8 py-1.5 rounded-full mb-6 shadow-sm text-[1.05rem]">
                Other Details
              </div>
              <div className="w-full">
                {extraRightFields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[160px_1fr] py-[4px] items-start w-full gap-2">
                    <div className="text-[1.05rem] text-[#4a232f] font-semibold text-left truncate">
                      {field.label}
                    </div>
                    <div className="text-[1.05rem] text-[#2a1218] font-normal text-left leading-snug break-words">
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

    </div>
  );
}
