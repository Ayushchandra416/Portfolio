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
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <ThreeErrorBoundary>
      <ThreeProvider>
        <ThreeBackground />
        <PageTransition3D />
      </ThreeProvider>
    </ThreeErrorBoundary>
  );
}
