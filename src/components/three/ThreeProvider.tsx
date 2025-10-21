"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThreeContextValue = {
  enabled: boolean;
  setEnabled: (v: boolean) => void;
};

const ThreeContext = createContext<ThreeContextValue | null>(null);

export function ThreeProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState<boolean>(true);

  // Respect prefers-reduced-motion by default
  useEffect(() => {
    try {
      const stored = localStorage.getItem("threeEnabled");
      if (stored !== null) {
        setEnabled(stored === "true");
        return;
      }
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (media.matches) setEnabled(false);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("threeEnabled", String(enabled));
    } catch {}
  }, [enabled]);

  const value = useMemo(() => ({ enabled, setEnabled }), [enabled]);

  return <ThreeContext.Provider value={value}>{children}</ThreeContext.Provider>;
}

export function useThreeEnabled() {
  const ctx = useContext(ThreeContext);
  if (!ctx) throw new Error("useThreeEnabled must be used within ThreeProvider");
  return ctx;
}
