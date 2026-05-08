import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Visit Us</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Ready To <span className="text-gradient">Start?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Walk in for a free trial session. We'd love to meet you.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Address", lines: ["Master Gym Unisex Fitness Centre", "Tindivanam, Tamil Nadu, India"] },
              { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 98765 43211"] },
              { icon: Clock, title: "Hours", lines: ["Mon – Sat: 5:00 AM – 10:00 PM", "Sunday: 6:00 AM – 12:00 PM"] },
              { icon: Mail, title: "Email", lines: ["info@mastergymtindivanam.com"] },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-primary text-primary-foreground h-fit">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll get back to you shortly.");
            }}
            className="p-8 rounded-2xl bg-card border border-border shadow-card"
          >
            <h3 className="font-display text-2xl">Get a Free Trial</h3>
            <p className="text-sm text-muted-foreground mt-1">Fill the form, we'll call you back.</p>

            <div className="mt-6 space-y-4">
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <input
                required
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <select
                className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary focus:outline-none transition-colors"
              >
                <option>Interested in: Strength Training</option>
                <option>Interested in: HIIT & Cardio</option>
                <option>Interested in: Women's Fitness</option>
                <option>Interested in: Personal Training</option>
              </select>
              <textarea
                rows={4}
                placeholder="Message (optional)"
                className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-md font-semibold uppercase tracking-wider shadow-glow hover:scale-[1.02] transition-transform"
              >
                Book My Free Session
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
