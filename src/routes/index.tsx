import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Master Gym — Unisex Fitness Centre, Tindivanam" },
      { name: "description", content: "Tindivanam's premier unisex fitness centre. Strength, HIIT, women's fitness & personal training. Join Master Gym today." },
      { property: "og:title", content: "Master Gym — Unisex Fitness Centre, Tindivanam" },
      { property: "og:description", content: "World-class equipment, certified trainers, and a community that pushes you. Join Master Gym Tindivanam." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
