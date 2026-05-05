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
    scale: 2, 
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
    width: 675,
  });

  // Restore original style
  element.style.cssText = originalStyle;

  const imgData = canvas.toDataURL("image/jpeg", 1.0);
  
  // A4 size in points
  const pdfWidth = 595.28;
  const pdfHeight = 841.89;
  
  const imgWidth = pdfWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  const pdf = new jsPDF("p", "pt", "a4");
  
  let heightLeft = imgHeight;
  let position = 0;

  // Function to add watermark
  const addWatermark = (doc: jsPDF) => {
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(watermarkText, pdfWidth / 2, pdfHeight - 20, { align: "center" });
  };

  // Add first page
  pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, 'FAST');
  addWatermark(pdf);
  heightLeft -= pdfHeight;

  // Add subsequent pages if necessary
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, 'FAST');
    addWatermark(pdf);
    heightLeft -= pdfHeight;
  }

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
