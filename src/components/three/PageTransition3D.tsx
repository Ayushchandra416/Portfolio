"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { useThreeEnabled } from "./ThreeProvider";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function TransitionMesh({ onDone }: { onDone: () => void }) {
  const ref = useRef<any>();
  const [phase, setPhase] = useState<"in" | "out">("in");
  const start = useRef<number>(performance.now());
  const duration = 420; // ms per phase

  useFrame(() => {
    const now = performance.now();
    const t = Math.min(1, (now - start.current) / duration);
    const k = easeInOutCubic(t);
    const scale = phase === "in" ? k * 8 : (1 - k) * 8;
    if (ref.current) ref.current.scale.setScalar(Math.max(0.0001, scale));

    if (t >= 1) {
      if (phase === "in") {
        setPhase("out");
        start.current = performance.now();
      } else {
        onDone();
      }
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#111827" roughness={0.6} metalness={0.1} />
    </mesh>
  );
}

export default function PageTransition3D() {
  const pathname = usePathname();
  const { enabled } = useThreeEnabled();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    // Trigger transition on route change
    setActive(true);
  }, [pathname, enabled]);

  if (!enabled || !active) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 6], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <TransitionMesh onDone={() => setActive(false)} />
      </Canvas>
    </div>
  );
}
