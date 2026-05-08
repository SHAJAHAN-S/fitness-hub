import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import hero from "@/assets/hero-gym.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Master Gym training"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            Tindivanam's #1 Unisex Fitness Centre
          </span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Forge The
            <br />
            <span className="text-gradient">Body You</span>
            <br />
            Deserve.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
            World-class equipment, certified trainers and a community that pushes
            you. Train with intensity at Master Gym — built for men &amp; women
            of every level.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-4 rounded-md font-semibold uppercase tracking-wider shadow-glow hover:scale-[1.03] transition-transform"
            >
              Start Training
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-border bg-background/40 backdrop-blur px-7 py-4 rounded-md font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              <Play className="h-4 w-4" /> Tour the Gym
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            {[
              { v: "1500+", l: "Members" },
              { v: "15+", l: "Trainers" },
              { v: "5★", l: "Rated" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl sm:text-4xl text-gradient">{s.v}</div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
