"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export function ScreenLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden animate-in fade-in duration-300">
      {/* Decorative background elements for a premium feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px] opacity-60 animate-pulse [animation-delay:1s]" />
      
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Loader Graphic */}
        <div className="relative w-28 h-28">
          {/* outer ring */}
          <div className="absolute inset-0 border-[3px] border-slate-100 rounded-full" />
          {/* spinning accent ring */}
          <div className="absolute inset-0 border-[3px] border-t-[#b11e24] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
          
          {/* middle pulsating ring */}
          <div className="absolute inset-4 border-[2px] border-red-100 rounded-full animate-ping opacity-20" />
          
          {/* Inner core with icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#b11e24] to-[#8a171c] rounded-full flex items-center justify-center shadow-lg shadow-red-200 animate-pulse">
               <Heart className="w-7 h-7 text-white fill-white/20" />
            </div>
          </div>
        </div>

        {/* Branding & Loading Text */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative h-10 w-48">
             <Image 
                src="/images/short_logo.png" 
                alt="RishtaMaker" 
                fill 
                className="object-contain"
                priority
             />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1.5">
              <span className="h-2 w-2 bg-[#b11e24] rounded-full animate-bounce [animation-delay:-0.32s]" />
              <span className="h-2 w-2 bg-[#b11e24] rounded-full animate-bounce [animation-delay:-0.16s]" />
              <span className="h-2 w-2 bg-[#b11e24] rounded-full animate-bounce" />
            </div>
            
            <p className="text-sm font-semibold tracking-[0.3em] text-slate-400 uppercase animate-pulse">
              Creating Memories
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom text */}
      <div className="absolute bottom-12 flex flex-col items-center gap-1">
        <p className="text-slate-300 text-[10px] font-medium tracking-widest uppercase">
          Matrimonial Excellence
        </p>
      </div>
    </div>
  );
}
