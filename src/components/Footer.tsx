import { Dumbbell, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="bg-gradient-primary p-2 rounded-md">
            <Dumbbell className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-display tracking-wider">
            MASTER<span className="text-gradient">GYM</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Master Gym Unisex Fitness Centre, Tindivanam. All rights
          reserved.
        </p>
        <div className="flex gap-3">
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Social link"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
