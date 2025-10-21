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
  const duration = 520; // slightly smoother pacing

  useFrame((state, delta) => {
    const now = performance.now();
    const t = Math.min(1, (now - start.current) / duration);
    const k = easeInOutCubic(t);
    const scale = phase === "in" ? k * 8 : (1 - k) * 8;
    if (ref.current) ref.current.scale.setScalar(Math.max(0.0001, scale));

    // add a subtle rotation for visual interest
    if (ref.current) {
      ref.current.rotation.x += delta * 0.8;
      ref.current.rotation.y += delta * 0.6;
    }

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
      <meshStandardMaterial
        color="#6366f1" // indigo-500
        emissive="#1e293b" // slate-800
        emissiveIntensity={0.25}
        roughness={0.5}
        metalness={0.2}
      />
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
        // a faint radial tint that complements the mesh color
        background:
          "radial-gradient(ellipse at center, rgba(99,102,241,0.08), rgba(0,0,0,0) 60%)",
        pointerEvents: "none",
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 6], fov: 60 }}
      >
        <ambientLight intensity={0.45} color="#94a3b8" />
        <directionalLight position={[2, 2, 2]} intensity={0.7} color="#818cf8" />
        <TransitionMesh onDone={() => setActive(false)} />
      </Canvas>
    </div>
  );
}
