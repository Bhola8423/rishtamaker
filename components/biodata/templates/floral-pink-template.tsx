import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

export function FloralPinkTemplate({ data }: BiodataTemplateProps) {
  // To match the layout: 
  // Left column: sections 1 and 2
  // Right column: section 0 (Personal) and sections 3+ (Family, Contact, etc.)

  const leftSections = data.sections.length > 1 ? data.sections.slice(1, 3) : [];
  const rightSections = data.sections.length > 0 ? [data.sections[0], ...data.sections.slice(3)] : [];

  return (
    <div
      className="relative mx-auto w-[675px] min-h-[950px] bg-white shadow-xl flex flex-col font-sans overflow-hidden border border-slate-200 pb-10"
      style={{
        backgroundImage: "url('/images/templateBack/templateBack4.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        fontFamily: "'Arial', 'Helvetica', sans-serif" // Clean sans-serif for body
      }}
    >
      <div className="flex flex-row w-full h-full pt-[160px] px-[40px] z-20">

        {/* LEFT COLUMN */}
        <div className="w-[230px] flex flex-col items-center flex-shrink-0">

          {/* Profile Photo */}
          <div className="relative mb-10 flex items-center justify-center">
            <div className="absolute inset-[-8px] rounded-full border-[2px] border-dashed border-[#c1121f]/50" />
            <TemplatePhoto
              name={data.fullName}
              profileImage={data.profileImage}
              className="relative h-[155px] w-[155px] overflow-hidden rounded-full border-[4px] border-[#c1121f] object-cover shadow-lg z-10"
              initialsClassName="relative flex h-[155px] w-[155px] items-center justify-center bg-[#fdfaf5] text-5xl font-sans text-[#c1121f] font-bold uppercase rounded-full border-[4px] border-[#c1121f] z-10 shadow-lg"
            />
          </div>

          {/* Left Sections */}
          <div className="w-full flex flex-col gap-10 pr-2 pl-2">
            {leftSections.map(section => (
              <div key={section.id} className="flex flex-col w-full">
                <div className="flex items-center gap-2 mb-4 border-b border-[#c1121f]/20 pb-2">
                  <span className="text-[#c1121f] text-[1.1rem] leading-none">❂</span>
                  <h3 className="text-[#c1121f] text-[1.2rem] font-bold tracking-wider uppercase drop-shadow-sm">{section.title}</h3>
                </div>

                <div className="flex flex-col gap-3.5 w-full pl-1">
                  {section.fields.map(f => (
                    <div key={f.id} className="flex items-start gap-2 w-full leading-snug">
                      <span className="text-[#c1121f]/60 text-[0.85rem] mt-[5px]">☆</span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[#a11b27] font-semibold italic text-[1.05rem] tracking-wide">
                          {f.label}
                        </span>
                        <span className="text-[#1e293b] font-medium text-[1.05rem] tracking-wide break-words">
                          {f.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[365px] pl-6 pr-2 flex flex-col z-20 mt-2">

          {/* Name Block */}
          <div className="mb-12 text-center w-full">
            <h1 className="text-[2.8rem] font-bold text-[#c1121f] leading-none drop-shadow-md tracking-wider uppercase" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              {data.fullName}
            </h1>
            <div className="w-24 h-[2px] bg-[#c1121f]/40 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Right Sections */}
          <div className="space-y-10 w-full pl-1 pb-10">
            {rightSections.map((section) => {
              if (section.fields.length === 0) return null;

              const isParagraph = section.fields.length === 1 && section.fields[0].value.length > 50;

              return (
                <section key={section.id} className="flex flex-col w-full">

                  <div className="flex items-center gap-2 mb-5 border-b border-[#c1121f]/20 pb-2">
                    <span className="text-[#c1121f] text-[1.1rem] leading-none">❂</span>
                    <h3 className="text-[#c1121f] text-[1.2rem] font-bold tracking-wider uppercase drop-shadow-sm">{section.title}</h3>
                  </div>

                  <div className="w-full pl-2">
                    {isParagraph ? (
                      <p className="text-[#1e293b] font-medium text-[1.05rem] leading-relaxed italic">
                        "{section.fields[0].value}"
                      </p>
                    ) : (
                      <div className="flex flex-col gap-3.5">
                        {section.fields.map((field) => (
                          <div key={field.id} className="grid grid-cols-[145px_1fr] items-start w-full gap-2">
                            <div className="text-[1.05rem] text-[#a11b27] font-semibold italic text-left truncate tracking-wide">
                              {field.label}:
                            </div>
                            <div className="text-[1.05rem] text-[#1e293b] font-medium text-left leading-relaxed break-words">
                              {field.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </section>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
