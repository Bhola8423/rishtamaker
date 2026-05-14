"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenLoader } from "@/components/shared/screen-loader";

export function BlogNavigationHandler({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // This handles clicks on any link within the children
  const handleLinkClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a");

    if (link && link.href && link.href.startsWith(window.location.origin + "/blog/")) {
      // It's a blog link
      e.preventDefault();
      setIsLoading(true);
      router.push(link.href);
    }
  };

  return (
    <div onClick={handleLinkClick}>
      {isLoading && <ScreenLoader />}
      {children}
    </div>
  );
}
