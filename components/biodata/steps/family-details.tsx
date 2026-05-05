import { StepWrapper, InputField } from "./step-ui";
import { AIGeneratorButton } from "../AIGeneratorButton";

export function FamilyDetailsStep({ data, updateData }: { data: any, updateData: (key: string, value: any) => void }) {
  const handleChange = (e: any) => updateData(e.target.name, e.target.value);

  return (
    <StepWrapper 
      title="Family Details" 
      description="Help others understand your family background and values."
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-900">AI Family Description</p>
            <p className="text-xs text-slate-500">Generate a respectful summary of your family background.</p>
          </div>
          <AIGeneratorButton 
            data={data} 
            section="familyDetails" 
            onGenerated={(res) => updateData("familyBackground", res.familyDetails)} 
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
        <InputField label="Father's Name" name="fatherName" value={data.fatherName || ""} onChange={handleChange} placeholder="e.g. Ramesh Sharma" />
        <InputField label="Father's Occupation" name="fatherOccupation" value={data.fatherOccupation || ""} onChange={handleChange} placeholder="e.g. Retired Govt. Officer" />
        <InputField label="Mother's Name" name="motherName" value={data.motherName || ""} onChange={handleChange} placeholder="e.g. Sunita Sharma" />
        <InputField label="Mother's Occupation" name="motherOccupation" value={data.motherOccupation || ""} onChange={handleChange} placeholder="e.g. Homemaker" />
        <div className="sm:col-span-2">
          <InputField label="Siblings (Brothers/Sisters)" name="siblings" value={data.siblings || ""} onChange={handleChange} placeholder="e.g. 1 Brother (Married), 1 Sister" />
        </div>
        <div className="sm:col-span-2">
          <InputField 
            label="Family Description / Background" 
            name="familyBackground" 
            type="textarea"
            value={data.familyBackground || ""} 
            onChange={handleChange} 
            placeholder="A brief summary about your family's values, heritage and social status..." 
          />
        </div>
      </div>
      </div>
    </StepWrapper>
  );
}
