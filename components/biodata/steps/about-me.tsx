import { StepWrapper, InputField } from "./step-ui";

export function AboutMeStep({ data, updateData }: { data: any, updateData: (key: string, value: any) => void }) {
  const handleChange = (e: any) => updateData(e.target.name, e.target.value);

  return (
    <StepWrapper 
      title="About Me" 
      description="Write a brief introduction about yourself, your hobbies, and what you are looking for."
    >
      <div className="space-y-6">
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
