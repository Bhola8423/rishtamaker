import type { BiodataTemplateProps } from "@/components/biodata/types";
import { TemplatePhoto } from "@/components/biodata/templates/template-frame";

export function ElegantHeritageTemplate({ data }: BiodataTemplateProps) {
  return (
    <div
      className="relative mx-auto w-[675px] min-h-[950px] overflow-hidden bg-[length:100%_100%] bg-no-repeat shadow-xl flex flex-col font-sans pb-20"
      style={{
        backgroundImage: "url('/images/templateBack/templateBack2.png')",
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }}
    >
      <div className="relative z-20 px-[80px] pt-[120px] flex-1 flex flex-col">

        <div className="absolute top-[160px] right-[80px] z-30">
          <TemplatePhoto
            name={data.fullName}
            profileImage={data.profileImage}
            className="h-[210px] w-[170px] overflow-hidden rounded-sm shadow-md object-cover border-2 border-[#8b5e34]/30"
            initialsClassName="flex h-[210px] w-[170px] items-center justify-center bg-[#fdfaf5] text-4xl font-sans text-[#8b5e34] font-bold uppercase border-2 border-[#8b5e34]/30"
          />
        </div>

        <div className="space-y-10 w-full z-20">
          {data.sections.map((section, index) => (
            <section key={section.id} className="flex flex-col w-full">

              <h3 className="text-[1.15rem] font-bold text-[#8b5e34] uppercase tracking-wide mb-6 text-center drop-shadow-sm">
                {section.title}
              </h3>

              <div className={`w-full ${index === 0 ? 'max-w-[340px]' : 'max-w-[460px] ml-12'}`}>
                {section.fields.map((field) => (
                  <div key={field.id} className="grid grid-cols-[140px_20px_1fr] py-[5px] items-start w-full">
                    <div className="text-[1.05rem] text-[#5d4037] font-semibold text-left truncate pr-2">
                      {field.label}
                    </div>
                    <div className="text-[1.05rem] text-[#5d4037] font-semibold text-center">
                      :
                    </div>
                    <div className="text-[1.05rem] text-[#3e2723] font-medium text-left truncate pl-2" title={field.value}>
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
