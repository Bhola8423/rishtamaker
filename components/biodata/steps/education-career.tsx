import { StepWrapper, InputField } from "./step-ui";

export function EducationCareerStep({ data, updateData }: { data: any, updateData: (key: string, value: any) => void }) {
  const handleChange = (e: any) => updateData(e.target.name, e.target.value);

  return (
    <StepWrapper 
      title="Education & Career" 
      description="Your professional background is an important factor for compatibility."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <InputField label="Highest Qualification" name="education" value={data.education || ""} onChange={handleChange} placeholder="e.g. B.Tech in Computer Science" required />
        </div>
        <InputField label="Occupation" name="occupation" value={data.occupation || ""} onChange={handleChange} placeholder="e.g. Software Engineer" required />
        <InputField label="Company Name" name="company" value={data.company || ""} onChange={handleChange} placeholder="e.g. Google India" />
        <InputField label="Annual Income" name="income" value={data.income || ""} onChange={handleChange} placeholder="e.g. 12 Lakhs Per Year" />
        <InputField label="Job Location" name="jobLocation" value={data.jobLocation || ""} onChange={handleChange} placeholder="e.g. Bangalore, India" />
      </div>
    </StepWrapper>
  );
}
