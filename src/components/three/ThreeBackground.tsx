"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useMemo } from "react";
import { useThreeEnabled } from "./ThreeProvider";

function Scene() {
  // Calmer starfield for a subtle backdrop
  return (
    <>
      <ambientLight intensity={0.35} color="#94a3b8" />
      <Stars
        radius={70}
        depth={60}
        count={1000}
        factor={2.5}
        saturation={0}
        fade
        speed={0.18}
      />
    </>
  );
}

export default function ThreeBackground() {
  const { enabled } = useThreeEnabled();
  const style = useMemo(
    () => ({
      position: "fixed" as const,
      inset: 0,
      zIndex: 0,
      pointerEvents: "none" as const,
    }),
    []
  );

  if (!enabled) return null;

  return (
    <div aria-hidden style={style}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 8], fov: 60 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
