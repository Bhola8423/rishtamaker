import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export interface GeneratePdfOptions {
  fileName?: string;
  elementId: string;
  watermarkText?: string;
}

export const generatePdf = async ({
  elementId,
  fileName = "biodata.pdf",
  watermarkText = "Created with Rishtamaker.in"
}: GeneratePdfOptions): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id ${elementId} not found`);
  }

  // Store original style to restore later
  const originalStyle = element.style.cssText;
  
  // Reset transform and other properties that might interfere with capture
  element.style.transform = "none";
  element.style.width = "675px"; // Standard width for our templates
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.top = "0";

  const canvas = await html2canvas(element, {
    scale: 3, // Higher scale for better crispness in PDF
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
    width: 675,
  });

  // Restore original style
  element.style.cssText = originalStyle;

  const imgData = canvas.toDataURL("image/jpeg", 1.0);
  const captureHeight = canvas.height / 3; // Adjust for scale 3

  // Create PDF with EXACT dimensions in points (pt) for no margins
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: [675, captureHeight]
  });

  pdf.addImage(imgData, "JPEG", 0, 0, 675, captureHeight, undefined, 'FAST');
  
  pdf.save(fileName);
};

export const generateImage = async (elementId: string, fileName: string = "biodata.png"): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const originalStyle = element.style.cssText;
  element.style.transform = "none";
  element.style.width = "675px";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.top = "0";

  const canvas = await html2canvas(element, {
    scale: 3,
    useCORS: true,
    backgroundColor: "#ffffff",
    width: 675,
  });

  element.style.cssText = originalStyle;
  
  const link = document.createElement("a");
  link.download = fileName;
  link.href = canvas.toDataURL("image/png");
  link.click();
};
