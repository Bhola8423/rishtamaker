import { StepWrapper, InputField } from "./step-ui";

export function PersonalDetailsStep({ data, updateData }: { data: any, updateData: (key: string, value: any) => void }) {
  const handleChange = (e: any) => updateData(e.target.name, e.target.value);

  return (
    <StepWrapper 
      title="Personal Details" 
      description="Tell us a bit about yourself. This information will be prominently displayed."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <InputField label="Full Name" name="fullName" value={data.fullName || ""} onChange={handleChange} placeholder="e.g. Rahul Sharma" required />
        </div>
        <InputField label="Date of Birth" name="dob" type="date" value={data.dob || ""} onChange={handleChange} required />
        <InputField label="Time of Birth" name="tob" value={data.tob || ""} onChange={handleChange} placeholder="e.g. 10:30 AM" />
        <InputField label="Caste" name="caste" value={data.caste || ""} onChange={handleChange} placeholder="e.g. Brahmin" />
        <InputField label="Gotra" name="gotra" value={data.gotra || ""} onChange={handleChange} placeholder="e.g. Kashyap" />
        <InputField label="Height" name="height" value={data.height || ""} onChange={handleChange} placeholder="e.g. 5' 10''" />
        <InputField label="Blood Group" name="bloodGroup" value={data.bloodGroup || ""} onChange={handleChange} placeholder="e.g. O+" />
      </div>
    </StepWrapper>
  );
}
