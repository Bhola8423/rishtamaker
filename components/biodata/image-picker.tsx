"use client";

import Image from "next/image";
import type { ChangeEvent } from "react";
import { useEffect, useRef } from "react";

type ImagePickerProps = {
  image: string;
  fullName: string;
  onImageChange: (value: string) => void;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ImagePicker({ image, fullName, onImageChange }: ImagePickerProps) {
  const lastObjectUrl = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (lastObjectUrl.current?.startsWith("blob:")) {
        URL.revokeObjectURL(lastObjectUrl.current);
      }
    };
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (lastObjectUrl.current?.startsWith("blob:")) {
      URL.revokeObjectURL(lastObjectUrl.current);
    }

    const nextUrl = URL.createObjectURL(file);
    lastObjectUrl.current = nextUrl;
    onImageChange(nextUrl);
  };

  return (
    <div className="rounded-[1.5rem] border border-[#8f1d3b]/14 bg-white p-4 shadow-[0_16px_32px_rgba(84,32,47,0.06)]">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 overflow-hidden rounded-[1.25rem] border border-[#8f1d3b]/10 bg-[#fff5f7]">
          {image ? (
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={fullName || "Selected profile"}
                fill
                unoptimized
                sizes="80px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8f1d3b] text-sm font-semibold text-white">
                {getInitials(fullName || "RM")}
              </span>
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-[#371620]">Upload profile photo</p>
          <p className="mt-1 text-xs leading-6 text-[#6f4e59]">
            Choose an image from your device and it will appear in the selected biodata template.
          </p>
        </div>
      </div>

      <label className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-full bg-[#8f1d3b] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(143,29,59,0.22)] transition hover:bg-[#781431]">
        Select Image
        <input type="file" accept="image/*" onChange={handleFileChange} className="sr-only" />
      </label>
    </div>
  );
}
