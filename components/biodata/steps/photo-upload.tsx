import { StepWrapper } from "./step-ui";
import { ImagePicker } from "../image-picker";
import { Upload } from "lucide-react";

export function PhotoUploadStep({ data, updateData }: { data: any, updateData: (key: string, value: any) => void }) {
  return (
    <StepWrapper 
      title="Photo Upload" 
      description="A clear, professional photo significantly increases the response rate of your biodata."
    >
      <div className="space-y-6">
        <ImagePicker 
          image={data.profileImage || ""} 
          fullName={data.fullName || "User"} 
          onImageChange={(val) => updateData("profileImage", val)} 
        />
        
        <div className="rounded-2xl border border-dashed border-slate-200 p-6 bg-slate-50">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-900/5">
              <Upload className="h-5 w-5 text-slate-500" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-slate-900">Photo Guidelines</h4>
              <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                <li>Use a high-quality portrait photo</li>
                <li>Ensure your face is clearly visible</li>
                <li>Avoid group photos or selfies with filters</li>
                <li>Natural lighting works best</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
