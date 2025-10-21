"use client";

import dynamic from "next/dynamic";
import React from "react";
import { ThreeProvider } from "./ThreeProvider";
import { ThreeErrorBoundary } from "./ThreeErrorBoundary";

const ThreeBackground = dynamic(() => import("@/components/three/ThreeBackground"), {
  ssr: false,
});
const PageTransition3D = dynamic(() => import("@/components/three/PageTransition3D"), {
  ssr: false,
});

export function ThreeRoot() {
  const [mounted, setMounted] = React.useState(false);
  const [webglOk, setWebglOk] = React.useState(true);

  React.useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      const ok = !!gl;
      setWebglOk(ok);
      if (!ok) localStorage.setItem("threeEnabled", "false");
    } catch {
      setWebglOk(false);
      try { localStorage.setItem("threeEnabled", "false"); } catch {}
    }
  }, []);

  if (!mounted || !webglOk) return null;
  return (
    <ThreeErrorBoundary>
      <ThreeProvider>
        <ThreeBackground />
        <PageTransition3D />
      </ThreeProvider>
    </ThreeErrorBoundary>
  );
}
