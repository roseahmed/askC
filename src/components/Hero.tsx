import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const images = ["/hero/hero1.png", "/hero/hero2.png", "/hero/hero3.png"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative py-40 md:py-48 min-h-[70vh] text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Blur placeholder */}
        <div className="absolute inset-0 bg-slate-900 blur-2xl scale-110" />

        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: 1,
              scale: prefersReducedMotion ? 1 : 1.12,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 2,
              ease: "easeOut",
            }}
          />
        </AnimatePresence>

        {/* Gradient overlay (keeps your existing design) */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-blue-800/70 to-sky-600/70" />
      </div>

      {/* Content */}
      <Reveal>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl leading-tight">
            AskC – Education & Career Consulting
          </h1>

          <p className="mb-10 text-lg text-blue-100">
            Bangalore-based experts helping students succeed
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Free Counseling
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-700"
              onClick={() => {
                const el = document.getElementById("services");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
