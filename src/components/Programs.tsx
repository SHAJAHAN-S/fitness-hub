import { motion } from "framer-motion";
import strength from "@/assets/training-strength.jpg";
import cardio from "@/assets/training-cardio.jpg";
import women from "@/assets/training-women.jpg";

const programs = [
  { img: strength, title: "Strength & Power", desc: "Build raw muscle with barbell, dumbbell and powerlifting protocols." },
  { img: cardio, title: "HIIT & Cardio", desc: "Burn fat fast with high-intensity group conditioning sessions." },
  { img: women, title: "Women's Fitness", desc: "Toning, weight-loss & body-shaping programs in a private floor." },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-secondary/30 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Our Programs</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Train With <span className="text-gradient">Purpose</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick the path that matches your goal — every program is designed and
            led by certified Master Gym coaches.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border shadow-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-primary font-semibold text-sm uppercase tracking-wider hover:underline">
                  Join Class →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
