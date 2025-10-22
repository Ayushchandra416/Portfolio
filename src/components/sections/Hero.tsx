"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [src, setSrc] = React.useState<string>("/ayush-hero.png");
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-background"
        aria-hidden
      />
      {/* Subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -10%, rgba(99,102,241,0.12), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32">
        {/* Absolute image for desktop/tablet to place exactly in the highlighted area */}
        <div className="hidden md:block absolute right-6 lg:right-8 top-16 lg:top-20 w-[320px] lg:w-[400px] xl:w-[460px]">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={src}
              alt="Portrait of Ayush Chandra"
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 35vw, 45vw"
              priority
              className="object-cover object-top"
              onError={() => setSrc("/portrait-placeholder.svg")}
            />
          </div>
        </div>
  <div className="grid items-start gap-10 md:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-5xl/tight font-semibold tracking-tight sm:text-6xl md:text-7xl"
            >
              Building clean, fast web experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              I’m Ayush Chandra, a CSE student at VIT Bhopal focusing on modern React/Next.js apps
              with great UX and performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link href="/projects">See projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Image (mobile) */}
          <div className="relative mx-auto w-full max-w-md md:hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={src}
                alt="Portrait of Ayush Chandra"
                fill
                sizes="85vw"
                priority
                className="object-cover object-top"
                onError={() => setSrc("/portrait-placeholder.svg")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
