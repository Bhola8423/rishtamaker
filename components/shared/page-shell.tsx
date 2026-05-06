import type { ReactNode } from "react";

import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";

export function PageShell({
  children,
  showHeader = true,
}: {
  children: ReactNode;
  showHeader?: boolean;
}) {
  return (
    <main className="relative overflow-clip">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(255,255,255,0.78)_34%,_rgba(255,230,211,0.55)_58%,_transparent_80%)]" />
      <div className="absolute right-[-12rem] top-24 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(215,106,67,0.22),_transparent_70%)] blur-3xl opacity-60" />
      <div className="absolute left-[-10rem] top-[10rem] -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(191,74,47,0.15),_transparent_72%)] blur-3xl opacity-60" />

      <div className="mx-auto flex min-h-screen w-full max-w-8xl flex-col pb-8 pt-6">
        {showHeader ? <SiteHeader /> : null}
        {children}

      </div>
      <SiteFooter />
    </main>
  );
}
