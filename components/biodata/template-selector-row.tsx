import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { biodataTemplates, type BiodataTemplateDefinition } from "@/components/biodata/templates";
import type { BiodataFormData } from "@/components/biodata/types";
import { defaultBiodataData } from "@/components/biodata/mock-data";



const DEMO_PROFILES = [
  { name: "Priyanka Singhania", image: "/images/profile1.jpg" },
  { name: "Krishna Singhania", image: "/images/profil2.jpg" },
  { name: "Aarav Sharma", image: "/images/profile3.jpg" },
  { name: "Sneha Kapoor", image: "/images/profile4.jpg" },
  { name: "Rohan Desai", image: "/images/profile5.jpg" },
  { name: "Ananya Patel", image: "/images/profil2.jpg" },
];

export function TemplateSelectorRow({
  data, // Ignored internally to prevent live form data from mutating thumbnails
  selectedTemplateId,
  onSelect,
  layout = "carousel",
  templates = biodataTemplates,
}: TemplateSelectorRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.children[0] as HTMLElement;
      const secondCard = container.children[1] as HTMLElement;

      let scrollAmount = 520;
      if (firstCard && secondCard) {
        // Exact distance between two cards including gap
        // scrollAmount = secondCard.offsetLeft - firstCard.offsetLeft;

      } else if (firstCard) {
        scrollAmount = firstCard.offsetWidth + 64;
      }

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const cards = templates.map((template, index) => {
    const profile = DEMO_PROFILES[index % DEMO_PROFILES.length];
    const demoData: BiodataFormData = {
      ...defaultBiodataData,
      fullName: profile.name,
      profileImage: profile.image
    };

    return (
      <TemplateCard
        key={template.id}
        template={template}
        data={demoData}
        selected={selectedTemplateId === template.id}
        onSelect={onSelect}
      />
    );
  });

  if (layout === "grid") {
    return (
      <div className="pb-2">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-[1400px] mx-auto px-2">
          {cards.map((card, idx) => (
            <div key={idx} className="w-full sm:w-[320px] md:w-[350px] lg:w-[380px] xl:w-[400px]">
              {card}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Carousel layout
  return (
    <div className="relative pb-2 group">
      <button
        type="button"
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 z-30 bg-white text-[#8e1933] p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110 cursor-pointer"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 pt-2 px-4 snap-x snap-mandatory scroll-smooth hide-scrollbar mx-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', maxWidth: 'max-content' }}
      >
        {cards.map((card, idx) => (
          <div key={idx} className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[400px] xl:w-[420px] flex-none snap-center shrink-0">
            {card}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 z-30 bg-white text-[#8e1933] p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110 cursor-pointer"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

function TemplateCard({
  template,
  data,
  selected,
  onSelect,
}: {
  template: BiodataTemplateDefinition;
  data: BiodataFormData;
  selected: boolean;
  onSelect: (templateId: string) => void;
}) {
  const PreviewComponent = template.Component;

  return (
    <button
      type="button"
      onClick={() => onSelect(template.id)}
      className={`group relative flex w-full h-[600px] rounded-2xl overflow-hidden transition-all duration-300 shadow-lg cursor-pointer ${selected
        ? "border-4 border-yellow-400 scale-[1.02] z-10"
        : "border border-black/5 hover:scale-[1.02] hover:z-10"
        }`}
      ref={(btn) => {
        if (btn && !btn.dataset.observerAttached) {
          btn.dataset.observerAttached = "true";
          const updateScale = () => {
            // Leave exactly 40px padding on the sides and 50px top/bottom
            const availableW = btn.getBoundingClientRect().width - 40;
            const availableH = 600 - 50;

            const container = btn.querySelector('.template-inner-wrapper') as HTMLElement;
            const child = container?.firstElementChild as HTMLElement;

            if (child) {
              const childW = 675;
              const childH = Math.max(842, child.scrollHeight);

              const scaleX = availableW / childW;
              const scaleY = availableH / childH;
              // Strict math clamp prevents any part of the template from exceeding the padding
              const scale = Math.min(scaleX, scaleY);

              // Explicitly lock child geometry to prevent CSS flow collapse
              child.style.width = `${childW}px`;
              child.style.height = `${childH}px`;

              // Geometrically flawless absolute centering via transform origins
              child.style.transform = `translate(-50%, -50%) scale(${scale})`;
            }
          };

          const observer = new ResizeObserver(updateScale);
          observer.observe(btn);
          setTimeout(updateScale, 50);

          if (btn.querySelector('.template-inner-wrapper')) {
            const child = btn.querySelector('.template-inner-wrapper')?.firstElementChild;
            if (child) {
              new MutationObserver(updateScale).observe(child, { childList: true, subtree: true, characterData: true });
            }
          }
        }
      }}
    >
      <div className="absolute inset-0 bg-[#f7f5f2] template-inner-wrapper">
        <div className="absolute top-1/2 left-1/2 origin-center bg-white shadow-xl rounded-md overflow-hidden">
          <PreviewComponent data={data} />
        </div>
      </div>

      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-300 z-20 ${selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
        <div className="bg-black text-white px-5 py-2 rounded font-bold text-[13px] shadow-lg whitespace-nowrap cursor-pointer">
          Select Template
        </div>
      </div>

      {template.price && template.price > 0 ? (
        <div className="absolute top-3 right-3 z-30 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-md border border-white/20">
          Premium ₹{template.price}
        </div>
      ) : (
        <div className="absolute top-3 right-3 z-30 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-md border border-white/20">
          Free
        </div>
      )}
    </button>
  );
}
