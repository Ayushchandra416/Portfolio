"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useMemo } from "react";
import { useThreeEnabled } from "./ThreeProvider";

function Scene() {
  // Static starfield as a lightweight background
  return (
    <>
      <ambientLight intensity={0.4} />
      <Stars
        radius={60}
        depth={40}
        count={1200}
        factor={3}
        saturation={0}
        fade
        speed={0.6}
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
