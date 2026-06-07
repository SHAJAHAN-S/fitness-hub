import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "1,200",
    period: "/ month",
    features: ["Full gym access", "Locker facility", "Group classes", "Fitness assessment"],
  },
  {
    name: "Quarterly",
    price: "3,000",
    period: "/ 3 months",
    features: [
      "Everything in Monthly",
      "1 PT session / month",
      "Diet plan",
      "Body composition check",
    ],
    featured: true,
  },
  {
    name: "Annual",
    price: "9,000",
    period: "/ year",
    features: ["Everything in Quarterly", "4 PT sessions free", "Free gym kit", "Priority support"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Membership
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple, transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all ${
                p.featured
                  ? "border-primary bg-card shadow-glow scale-100 md:scale-105"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl text-muted-foreground">₹</span>
                <span className="font-display text-5xl text-gradient">{p.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block text-center px-6 py-3 rounded-md font-semibold uppercase tracking-wider transition-all ${
                  p.featured
                    ? "bg-gradient-primary text-primary-foreground hover:scale-105"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
