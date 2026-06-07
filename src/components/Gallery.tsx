import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import strength1 from "@/assets/training-strength.jpg";
import strength2 from "@/assets/gallery-strength-2.jpg";
import cardio1 from "@/assets/training-cardio.jpg";
import cardio2 from "@/assets/gallery-cardio-2.jpg";
import women1 from "@/assets/training-women.jpg";
import women2 from "@/assets/gallery-women-2.jpg";
import { cn } from "@/lib/utils";

type Item = { src: string; category: "Strength" | "Cardio" | "Women's Fitness"; alt: string };

const items: Item[] = [
  { src: strength1, category: "Strength", alt: "Athlete deadlifting heavy barbell" },
  { src: cardio1, category: "Cardio", alt: "Group HIIT cardio class" },
  { src: women1, category: "Women's Fitness", alt: "Woman training with dumbbells" },
  { src: strength2, category: "Strength", alt: "Bench press station" },
  { src: cardio2, category: "Cardio", alt: "Treadmill row with neon lighting" },
  { src: women2, category: "Women's Fitness", alt: "Woman doing yoga stretch" },
];

const filters = ["All", "Strength", "Cardio", "Women's Fitness"] as const;
type Filter = (typeof filters)[number];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const visible = items.filter((i) => filter === "All" || i.category === filter);

  const close = () => setOpenIdx(null);
  const next = () => setOpenIdx((i) => (i === null ? null : (i + 1) % visible.length));
  const prev = () =>
    setOpenIdx((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIdx]);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Inside <span className="text-gradient">Master Gym</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse of the floor — strength, cardio and women's fitness in action.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border transition-all",
                filter === f
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {visible.map((item, idx) => (
            <motion.button
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setOpenIdx(idx)}
              className="group relative overflow-hidden rounded-xl aspect-square border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Open ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">
                {item.category}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-6 p-3 rounded-full bg-card/80 border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-6 p-3 rounded-full bg-card/80 border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <motion.figure
            key={openIdx}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={visible[openIdx].src}
              alt={visible[openIdx].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-glow"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              <span className="text-primary font-semibold uppercase tracking-wider mr-2">
                {visible[openIdx].category}
              </span>
              {visible[openIdx].alt}
            </figcaption>
          </motion.figure>
        </div>
      )}
    </section>
  );
}
