import { StepWrapper, InputField } from "./step-ui";
import { AIGeneratorButton } from "../AIGeneratorButton";

export function PartnerPreferencesStep({ data, updateData }: { data: any, updateData: (key: string, value: any) => void }) {
  const handleChange = (e: any) => updateData(e.target.name, e.target.value);

  return (
    <StepWrapper 
      title="Partner Preferences" 
      description="What are you looking for in a life partner?"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-900">AI Partner Preferences</p>
            <p className="text-xs text-slate-500">Auto-generate polite and clear partner expectations.</p>
          </div>
          <AIGeneratorButton 
            data={data} 
            section="partnerPreferences" 
            onGenerated={(res) => updateData("expectations", res.partnerPreferences)} 
          />
        </div>

        <div className="space-y-4">
        <InputField 
          label="Partner Expectations" 
          name="expectations" 
          type="textarea" 
          value={data.expectations || ""} 
          onChange={handleChange} 
          placeholder="e.g. Looking for a well-educated, family-oriented person..." 
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField label="Preferred Age Group" name="prefAge" value={data.prefAge || ""} onChange={handleChange} placeholder="e.g. 24 - 28 years" />
          <InputField label="Preferred Location" name="prefLocation" value={data.prefLocation || ""} onChange={handleChange} placeholder="e.g. Open to relocate / Same City" />
        </div>
      </div>
      </div>
    </StepWrapper>
  );
}
