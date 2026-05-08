import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

const GYM_ADDRESS = "Master Gym Unisex Fitness Centre, Tindivanam, Tamil Nadu, India";
const MAPS_QUERY = encodeURIComponent(GYM_ADDRESS);
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;

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

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-border shadow-card bg-card">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <iframe
              title="Master Gym location map"
              src={MAPS_EMBED_URL}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.7) contrast(0.95)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 border-t border-border">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{GYM_ADDRESS}</p>
            </div>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-md font-semibold uppercase tracking-wider text-sm shadow-glow hover:scale-105 transition-transform whitespace-nowrap"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
