"use client";

import React, { useState } from "react";
import { Sparkles, Loader2, RefreshCw } from "lucide-react";

interface AIGeneratorButtonProps {
  data: any;
  onGenerated: (results: { aboutMe?: string, familyDetails?: string, partnerPreferences?: string }) => void;
  tone?: "Traditional" | "Modern" | "Simple";
  section: "aboutMe" | "familyDetails" | "partnerPreferences";
}

export function AIGeneratorButton({ data, onGenerated, tone = "Simple", section }: AIGeneratorButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    // Basic validation
    if (!data.fullName || !data.dob) {
      alert("Please fill in your Basic Details (Name, Age) first to help AI generate better content.");
      return;
    }

    try {
      setIsGenerating(true);
      setError(null);

      const response = await fetch("/api/generate-biodata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          age: data.age || "28", // Fallback age if not calculated
          education: data.education || "Graduate",
          profession: data.occupation || "Professional",
          religion: data.religion || "Indian",
          location: data.location || "India",
          tone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate content");
      }

      const result = await response.json();
      onGenerated(result);
    } catch (err) {
      console.error(err);
      setError("AI was unable to generate content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleGenerate}
        disabled={isGenerating}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-3 w-3 animate-spin" />
            Generating with AI...
          </>
        ) : (
          <>
            <Sparkles className="h-3 w-3" />
            Generate with AI
          </>
        )}
      </button>
      {error && <p className="text-[10px] text-red-500 font-medium">{error}</p>}
    </div>
  );
}
