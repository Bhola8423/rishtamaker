export type BiodataFieldType = "text" | "textarea" | "date";

export type BiodataField = {
  id: string;
  label: string;
  value: string;
  type?: BiodataFieldType;
};

export type BiodataSection = {
  id: string;
  title: string;
  fields: BiodataField[];
};

export type BiodataFormData = {
  fullName: string;
  profileImage: string;
  sections: BiodataSection[];
};

export type BiodataTemplateProps = {
  data: BiodataFormData;
};
