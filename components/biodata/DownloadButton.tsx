"use client";

import React, { useState } from "react";
import { Download, FileText, ImageIcon, Loader2, Share2, Check, Copy, X } from "lucide-react";
import { generatePdf, generateImage } from "@/utils/generatePdf";

const SHARE_MESSAGE = "I created my marriage biodata using Rishtamaker. You can try it here: https://rishtamaker.in";
const SHARE_URL = "https://rishtamaker.in";

interface DownloadButtonProps {
  elementId: string;
  userName: string;
}

export function DownloadButton({ elementId, userName }: DownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const safeName = (userName || "User").trim().replace(/\s+/g, "_");

  const handleDownloadPdf = async () => {
    try {
      setIsGenerating(true);
      setShowOptions(false);
      await generatePdf({
        elementId,
        fileName: `biodata-${safeName}.pdf`,
      });
      setShowShareModal(true);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Something went wrong while generating your PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadImage = async () => {
    try {
      setIsGenerating(true);
      setShowOptions(false);
      await generateImage(elementId, `biodata-${safeName}.png`);
    } catch (error) {
      console.error("Failed to generate Image:", error);
      alert("Something went wrong while generating your image.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        disabled={isGenerating}
        className="flex h-14 items-center justify-center gap-3 rounded-full bg-[#b11e24] px-8 text-base font-bold text-white shadow-[0_15px_30px_rgba(177,30,36,0.3)] transition-all hover:scale-105 hover:bg-[#8b1c31] disabled:opacity-70 disabled:hover:scale-100"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Download className="h-5 w-5" />
            Download Biodata
          </>
        )}
      </button>

      {showOptions && !isGenerating && (
        <div className="absolute bottom-full left-1/2 mb-4 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300 z-[120]">
          <button
            onClick={handleDownloadPdf}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <FileText className="h-4 w-4" />
            </div>
            Download as PDF
          </button>
          <button
            onClick={handleDownloadImage}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <ImageIcon className="h-4 w-4" />
            </div>
            Download as Image
          </button>
        </div>
      )}

      {/* Viral Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowShareModal(false)}
              className="absolute right-6 top-6 rounded-full bg-slate-100 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                <Check className="h-8 w-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                Download Successful!
              </h2>
              <p className="mt-4 text-slate-500 text-sm">
                Your professional biodata is ready. Help your friends & family create theirs too!
              </p>

              <div className="mt-8 flex flex-col w-full gap-3">
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(SHARE_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:opacity-90"
                >
                  <Share2 className="h-4 w-4" />
                  Share on WhatsApp
                </a>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(SHARE_URL);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50"
                >
                  {copied ? (
                    <><Check className="h-4 w-4 text-green-500" /> Copied!</>
                  ) : (
                    <><Copy className="h-4 w-4" /> Copy Link</>
                  )}
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 w-full">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Special Offer</p>
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Share with <span className="font-bold">3 friends</span> to unlock premium templates soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
