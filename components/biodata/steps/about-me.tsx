import { StepWrapper, InputField } from "./step-ui";
import { AIGeneratorButton } from "../AIGeneratorButton";

export function AboutMeStep({ data, updateData }: { data: any, updateData: (key: string, value: any) => void }) {
  const handleChange = (e: any) => updateData(e.target.name, e.target.value);

  return (
    <StepWrapper 
      title="About Me" 
      description="Write a brief introduction about yourself, your hobbies, and what you are looking for."
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-900">AI Personal Statement</p>
            <p className="text-xs text-slate-500">Auto-generate a professional bio based on your details.</p>
          </div>
          <AIGeneratorButton 
            data={data} 
            section="aboutMe" 
            onGenerated={(res) => updateData("aboutMe", res.aboutMe)} 
          />
        </div>

        <div className="space-y-4">
        <InputField 
          label="Bio / Introduction" 
          name="aboutMe" 
          type="textarea" 
          value={data.aboutMe || ""} 
          onChange={handleChange} 
          placeholder="Write a few lines about your personality, values, and lifestyle..." 
        />
        <InputField 
          label="Hobbies" 
          name="hobbies" 
          value={data.hobbies || ""} 
          onChange={handleChange} 
          placeholder="e.g. Reading, Traveling, Playing Cricket" 
        />
      </div>
      </div>
    </StepWrapper>
  );
}
