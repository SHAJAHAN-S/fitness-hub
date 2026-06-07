import { motion } from "framer-motion";
import { ShieldCheck, Users, Sparkles, Clock } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Certified Trainers", desc: "Expert coaches guiding every workout." },
  { icon: Users, title: "Unisex Floors", desc: "Comfortable, safe space for everyone." },
  { icon: Sparkles, title: "Modern Equipment", desc: "Top-tier imported machines & free weights." },
  { icon: Clock, title: "Flexible Hours", desc: "Open 5 AM – 10 PM, all days of the week." },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              About Us
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              More Than A Gym.
              <br />
              <span className="text-gradient">A Movement.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              At Master Gym Unisex Fitness Centre, Tindivanam, we believe fitness transforms lives.
              From first-time beginners to seasoned athletes, our space is designed to challenge,
              support and elevate every member.
            </p>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Strength training, cardio, functional fitness and personal coaching — all under one
              roof, with a vibe you'll feel the moment you walk in.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
