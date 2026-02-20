import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const images = ["/hero/hero1.png", "/hero/hero2.png", "/hero/hero3.png"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-slate-950 px-6 py-20 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Container - Set to absolute inset-0 to fill the section */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }} // Keeping opacity high enough to see, low enough for text
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>

        {/* Overlay - Ensuring it doesn't hide the image entirely */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-slate-950/30 via-slate-950/70 to-slate-950" />
      </div>

      {/* Content - Elevated z-index to stay above the background images */}
      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <Reveal>
          {/* AskC Brand Header */}
          <h1 className="mb-2 text-5xl font-black tracking-tighter md:text-9xl">
            AskC
          </h1>

          <p className="mb-8 text-sm font-bold tracking-[0.3em] uppercase text-emerald-400">
            Education & Career Consultancy
          </p>

          {/* Student-centric Headline */}
          <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl">
            Your Shortcut to <br />
            <span className="text-blue-400">Bengaluru’s Top Colleges.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            Admissions can be stressful. We make them easy. Get expert guidance
            on course selection, direct admissions, and career mapping from
            Bengaluru’s most trusted consultants.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-14 w-full bg-emerald-500 px-10 text-lg font-bold text-slate-950 hover:bg-emerald-400 sm:w-auto"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Free Counseling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full border-white/20 bg-white/5 px-10 text-lg font-bold text-white hover:bg-white hover:text-slate-950 sm:w-auto"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              How We Help
            </Button>
          </div>

          {/* Quick Info Bar */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Direct Admission Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Top Bengaluru Colleges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Personal Career Roadmap</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
