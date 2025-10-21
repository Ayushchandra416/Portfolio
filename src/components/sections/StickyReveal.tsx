"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type Step = {
  eyebrow?: string;
  title: string;
  description: string;
};

function StepPanel({
  index,
  total,
  scrollYProgress,
  step,
}: {
  index: number;
  total: number;
  scrollYProgress: any;
  step: Step;
}) {
  const s = index / total;
  const e = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [s, (s + e) / 2, e], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [s, (s + e) / 2, e], [20, 0, -20]);
  return (
    <motion.div
      className="absolute inset-0 rounded-xl border bg-card/70 backdrop-blur p-6 md:p-8 shadow-sm"
      style={{ opacity, y }}
    >
      {step.eyebrow && (
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{step.eyebrow}</div>
      )}
      <div className="mt-1 text-2xl md:text-3xl font-medium">{step.title}</div>
      <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

export function StickyReveal({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section ref={containerRef} className="relative min-h-[300vh]">
      <div className="sticky top-0 h-screen">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left – persistent framing copy */}
          <div className="py-16 md:py-0">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Highlights</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold">
              Designed with clarity. Built for speed.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              A few things that set my work apart.
            </p>
          </div>

          {/* Right – stepped panels */}
          <div className="relative h-[60vh] md:h-[70vh]">
            {steps.map((step, i) => (
              <StepPanel
                key={i}
                index={i}
                total={steps.length}
                scrollYProgress={scrollYProgress}
                step={step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
