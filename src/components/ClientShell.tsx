"use client";

import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="has-custom-cursor">
      <SmoothScroll>
        <CustomCursor />
        {children}
      </SmoothScroll>
    </div>
  );
}
