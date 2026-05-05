import Image from "next/image";

import type { BiodataField, BiodataSection } from "@/components/biodata/types";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TemplatePhoto({
  name,
  profileImage,
  className,
  initialsClassName,
}: {
  name: string;
  profileImage: string;
  className: string;
  initialsClassName: string;
}) {
  return (
    <div className={className}>
      {profileImage ? (
        <div className="relative h-full w-full">
          <Image src={profileImage} alt={name} fill unoptimized sizes="112px" className="object-cover" />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-white/70">
          <span className={initialsClassName}>{getInitials(name)}</span>
        </div>
      )}
    </div>
  );
}

export function getSectionByTitle(sections: BiodataSection[], keyword: string) {
  return (
    sections.find((section) => section.title.toLowerCase().includes(keyword.toLowerCase())) ??
    sections[0]
  );
}

export function renderFieldRows(
  fields: BiodataField[],
  labelClassName: string,
  valueClassName: string,
) {
  return fields.map((field) => (
    <div key={field.id} className="grid grid-cols-[0.85fr_1.15fr] gap-x-3 mb-2">
      <p className={labelClassName}>{field.label || "Field"}</p>
      <p className={valueClassName}>{field.value || "-"}</p>
    </div>
  ));
}
