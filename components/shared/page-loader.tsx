import { Heart } from "lucide-react";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fcf9f7] backdrop-blur-sm">
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Pulsing background rings */}
        <div className="absolute inset-0 animate-ping rounded-full bg-[#b11e24]/20" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-2 animate-ping rounded-full bg-[#b11e24]/30" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
        
        {/* Center circle with heart */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#b11e24] to-[#e44b52] shadow-lg shadow-[#b11e24]/30">
          <Heart className="h-8 w-8 animate-pulse text-white fill-white/20" />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-8 flex flex-col items-center">
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-slate-900">
          RishtaMaker
        </h3>
        <p className="mt-2 text-sm font-medium tracking-widest text-[#b11e24] uppercase animate-pulse">
          Crafting your profile...
        </p>
      </div>
    </div>
  );
}
