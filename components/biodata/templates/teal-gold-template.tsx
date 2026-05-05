import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

export function TealGoldTemplate({ data }: BiodataTemplateProps) {
  // Extract DOB and Birth Place for the top header area to perfectly match the design
  const personalSection = data.sections[0];
  let topFields: any = [];
  let otherFields: any = [];

  if (personalSection) {
    topFields = personalSection.fields.filter(f =>
      f.label.toLowerCase().includes('date of birth') ||
      f.label.toLowerCase().includes('birth place') ||
      f.label.toLowerCase() === 'dob' ||
      f.label.toLowerCase() === 'birth time'
    ).slice(0, 3); // Max 3 fields in header to prevent breaking layout

    otherFields = personalSection.fields.filter(f =>
      !topFields.includes(f)
    );
  }

  return (
    <div
      className="relative mx-auto w-[675px] min-h-[950px] overflow-hidden bg-[length:100%_100%] bg-no-repeat shadow-xl flex flex-col font-sans pb-20"
      style={{
        backgroundImage: "url('/images/templateBack/templateBack3.png')",
        fontFamily: "'Poppins', 'Inter', sans-serif"
      }}
    >
      <div className="relative z-20 px-[85px] pt-[135px] flex-1 flex flex-col">

        <div className="flex gap-6 items-start mb-8 w-full max-w-[480px] mx-auto">
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[175px] w-[135px] overflow-hidden border-[2.5px] border-[#e6d59b] shadow-lg object-cover flex-shrink-0"
            initialsClassName="flex h-[175px] w-[135px] items-center justify-center bg-[#113a47]/80 text-4xl font-sans text-[#e6d59b] font-bold uppercase border-[2.5px] border-[#e6d59b] flex-shrink-0"
          />
          <div className="flex flex-col pt-4 mt-10">
            <h1 className="text-[1.7rem] font-bold text-[#e6d59b] tracking-wide mb-2 drop-shadow-md leading-tight">
              {data.fullName}
            </h1>
            {topFields?.map((f: any) => (
              <div key={f.id} className="text-[#e6d59b] text-[0.95rem] mb-1 font-medium tracking-wide">
                {f.label}: <span className="font-normal opacity-90">{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 w-full z-20 mt-2">
          {data.sections.map((section, index) => {
            const fieldsToRender = index === 0 ? otherFields : section.fields;
            if (fieldsToRender.length === 0) return null;

            return (
              <section key={section.id} className="flex flex-col items-center w-full">

                <div className="bg-[#fbebc4] text-[#113a47] font-bold uppercase tracking-widest px-6 py-1.5 rounded-full mb-5 shadow-sm text-[0.9rem]">
                  {section.title}
                </div>

                <div className="w-full max-w-[460px] mx-auto">
                  {fieldsToRender.map((field: any) => (
                    <div key={field.id} className="grid grid-cols-[180px_1fr] py-[3px] items-start w-full gap-4">
                      {/* No colon according to the image */}
                      <div className="text-[0.95rem] text-[#e6d59b] font-semibold text-left truncate tracking-wide">
                        {field.label}
                      </div>
                      <div className="text-[0.95rem] text-[#e6d59b] font-normal text-left truncate opacity-90" title={field.value}>
                        {field.value}
                      </div>
                    </div>
                  ))}
                </div>

              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
