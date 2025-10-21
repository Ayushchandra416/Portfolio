"use client";

import dynamic from "next/dynamic";
import { ThreeProvider } from "./ThreeProvider";

const ThreeBackground = dynamic(() => import("@/components/three/ThreeBackground"), {
  ssr: false,
});
const PageTransition3D = dynamic(() => import("@/components/three/PageTransition3D"), {
  ssr: false,
});

export function ThreeRoot() {
  return (
    <ThreeProvider>
      <ThreeBackground />
      <PageTransition3D />
    </ThreeProvider>
  );
}
