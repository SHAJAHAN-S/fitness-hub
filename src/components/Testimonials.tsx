import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  time: string;
  text: string;
  highlight?: boolean;
}

const reviews: Review[] = [
  {
    name: "Dharaneeja Sivakrishnan",
    rating: 5,
    time: "5 months ago",
    text: "I have been working out for past 2 months & I had lost nearly 7 kgs of my weight.. & it was an amazing experience and my trainer Ms.Sarathy has been taking care of my workout and diet, she is kind and dedicated to her work and the experience was worth it ...✨",
    highlight: true,
  },
  {
    name: "Dinesh Raj",
    rating: 5,
    time: "4 months ago",
    text: "Master gym is amazing fitness centre and more comfortable... all equipments are very good for use.. and especially all trainers are having good knowledge and pakka professional...",
  },
  {
    name: "Liyerna Paul",
    rating: 5,
    time: "6 months ago",
    text: "I joined this gym in 15th September. I really lost 7 kg in a short time. Amazing results and great trainers!",
  },
  {
    name: "Yogesh S",
    rating: 5,
    time: "2 months ago",
    text: "I have trained past 2 weeks since I joined I feel a new positive way and I got best trainer Mr. Prethive. He explained how to lose weight and how to maintain both balance mental health and physical health. I suggest everyone to try at least once.",
  },
  {
    name: "Vinoth R",
    rating: 5,
    time: "4 months ago",
    text: "I joined in September at 55 kg, 4 months later I'm at 61 kg — amazing results. Good training and friendly environment. My PT trainer Prithivi master, thank you so much for supporting with diet plan. Nice quality gym!",
  },
  {
    name: "Prem Kumar",
    rating: 5,
    time: "2 years ago",
    text: "Master Gym is an outstanding fitness facility. It boasts top-notch equipment, expert trainers, and a welcoming environment. The gym is always clean, and the staff is friendly and supportive. Diverse range of classes and cutting-edge equipment.",
    highlight: true,
  },
  {
    name: "Sreenu Sree",
    rating: 5,
    time: "3 years ago",
    text: "Good atmosphere with flexible people. Proper equipments for beginners level. Friendly Master with good knowledge. Gym lovers please visit here! ❤️👌",
  },
  {
    name: "Karuppu V",
    rating: 5,
    time: "10 months ago",
    text: "I am one of the customers of Master Gym! I feel very free and friendly. The master's guidance is amazing 💓",
  },
  {
    name: "Priya Monishaa",
    rating: 5,
    time: "a year ago",
    text: "I am incredibly proud of my trainers Ms.Sarathi and Anuradha's dedication and hard work. From day one, amazing consistency, discipline, and a strong commitment to improving my strength and fitness.",
  },
  {
    name: "Srinivasan Radhakrishnan",
    rating: 5,
    time: "2 years ago",
    text: "Gym has a good vibe, clean environment and well equipped with low monthly cost in Tindivanam. Trainers behave like friends when we approach for guidance. Last 4 months of personal training in MASTER gym is awesome.",
    highlight: true,
  },
  {
    name: "Keerthana K",
    rating: 5,
    time: "a year ago",
    text: "The gym offers a great variety of equipment, and everything is well-maintained. The trainers and the Master are friendly. Lady Trainer Sarathi is very good in coaching, knowledgeable, and always available to help.",
  },
  {
    name: "Raja S",
    rating: 5,
    time: "a year ago",
    text: "I'm so impressed with the training at this gym! Trainer Ganesh is a standout – his unique core and stretching exercises are superb. Thank you for the support provided.",
  },
  {
    name: "Ravi Bharathi",
    rating: 5,
    time: "11 months ago",
    text: "The environment of the Gym was so good to workout... MASTER and the TRAINEE'S teach various workouts very well and clearly, step by step. The Lady Trainers Miss Sarathy and Miss Anuradha are amazing.",
  },
  {
    name: "Athila Begum",
    rating: 5,
    time: "a year ago",
    text: "The best gym in Tindivanam. Anu and Sara are the trainers for girls — so friendly! Very good master and well deserved champion. I truly recommend this gym for everyone both male and female. Stay fit and stay healthy! ❤️",
  },
  {
    name: "Md Aashiq",
    rating: 5,
    time: "2 years ago",
    text: "The atmosphere is effective, equipments are sufficient for both cardio and weight training. Based on our goals, Gym master spends time analyzing client requirements and provides diet plans and exercises. Trainers monitor our workout daily.",
    highlight: true,
  },
  {
    name: "Prahalad",
    rating: 5,
    time: "a year ago",
    text: "Excellent Master who is not only a champion but also well versed in training, providing nutritional advices, understanding the fitness requirements. Gym is very spacious and equipments are great.",
  },
  {
    name: "Nafila Nilofer",
    rating: 5,
    time: "a year ago",
    text: "This Gym is very comfortable for ladies. Two female trainers Ms.Sarathi and Anuradha have good knowledge and very friendly approach. One of the best in Tindivanam area!",
  },
  {
    name: "Monisri Moni",
    rating: 5,
    time: "2 years ago",
    text: "Amazing gym, amazing workouts and great place to workout with customized workout plans. Very neatly maintained gym. A very good motivated environment. The best trainers and Master is an amazing instructor.",
  },
  {
    name: "Sandhiya Palani",
    rating: 5,
    time: "3 years ago",
    text: "The Best in Tindivanam. Safe and secure for girls moreover they give individual guidance for everyone. Trustable place.",
  },
  {
    name: "Shahid Khan",
    rating: 5,
    time: "3 years ago",
    text: "Really good gym, unlike others where you come and go — but here you are pushed to improve.",
  },
  {
    name: "Soorya Prakash",
    rating: 5,
    time: "5 months ago",
    text: "Good gym with weight machine facilities. The environment of the gym is positive and the gym trainer is friendly 😄",
  },
  {
    name: "DJ Naren",
    rating: 5,
    time: "a year ago",
    text: "Amazing gym in this area. Good quality equipment and trainer Mr. Venkat was friendly. Great training approach! 🔥💛",
  },
  {
    name: "Arun Kumar",
    rating: 5,
    time: "a year ago",
    text: "Good gym in Tindivanam area. All trainers have good knowledge and very friendly approaches. Thank you Master Gym.",
  },
  {
    name: "Vignesh Kumar",
    rating: 5,
    time: "3 years ago",
    text: "Amazing Gym with good environment. Master has good knowledge and clears doubts for students at anytime. This is the Best Gym in Tindivanam with very updated equipments.",
  },
  {
    name: "Kishor A",
    rating: 5,
    time: "7 months ago",
    text: "Neat and clean gym with good trainers and equipment. If you are searching for a gym this is the right place.",
  },
  {
    name: "Lavanya R",
    rating: 5,
    time: "3 years ago",
    text: "Good place to workout. Very safe & secured. Good ambiance and spacious.",
  },
  {
    name: "Rohith Saran",
    rating: 5,
    time: "a year ago",
    text: "This gym is awesome with great equipment. Trainers are well trained professionals. If you're searching for a gym, this is the best place!",
  },
  {
    name: "Siva Kumar",
    rating: 5,
    time: "3 years ago",
    text: "Very good Gym and trainer — very friendly, good knowledge person. Thanks! 👍🙏",
  },
  {
    name: "Chithra Ravi",
    rating: 5,
    time: "2 years ago",
    text: "This gym is a safe place for women. The trainers provide friendly training. Thanks Master Gym!",
  },
  {
    name: "Veera Muthu",
    rating: 5,
    time: "3 years ago",
    text: "Best gym in Tindivanam. Well knowledgeable master🔥 and he's friendly with everyone. Good place to start your fitness goals! 👍",
  },
];

const STATS = { rating: 4.9, total: 169 };
const ITEMS_PER_PAGE = 3;
const AUTO_SCROLL_INTERVAL = 5000;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  );
}

function RatingSummary() {
  const bars = [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 5 },
    { stars: 3, pct: 2 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row items-center gap-8 justify-center mb-14 p-6 sm:p-8 rounded-2xl bg-card/60 border border-border backdrop-blur-sm max-w-2xl mx-auto"
    >
      {/* Big score */}
      <div className="text-center flex-shrink-0">
        <div className="flex items-center gap-2 justify-center mb-1">
          <svg viewBox="0 0 48 48" className="h-7 w-7" aria-label="Google">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 000 24c0 3.77.9 7.35 2.56 10.56l7.97-5.97z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.97C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          <span className="text-sm font-semibold text-muted-foreground">Google Reviews</span>
        </div>
        <span className="font-display text-6xl text-gradient">{STATS.rating}</span>
        <div className="flex justify-center mt-2">
          <Stars count={5} />
        </div>
        <p className="text-sm text-muted-foreground mt-1">{STATS.total} reviews</p>
      </div>

      {/* Bars */}
      <div className="flex-1 w-full space-y-1.5">
        {bars.map((b) => (
          <div key={b.stars} className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-3 text-right">{b.stars}</span>
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <div className="flex-1 h-2 rounded-full bg-muted/40 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${b.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <span className="text-xs text-muted-foreground w-8">{b.pct}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const visible = reviews.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            What Our <span className="text-gradient">Members</span> Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories from real people — {STATS.total} five-star reviews and counting.
          </p>
        </div>

        {/* Rating summary */}
        <RatingSummary />

        {/* Review cards */}
        <div
          className="grid md:grid-cols-3 gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((r, i) => (
            <motion.div
              key={`${page}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-all group hover:-translate-y-1 ${
                r.highlight
                  ? "border-primary/50 bg-card shadow-glow"
                  : "border-border bg-card hover:border-primary/40 shadow-card"
              }`}
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/15 group-hover:text-primary/30 transition-colors" />

              <Stars count={r.rating} />

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90 line-clamp-5">
                "{r.text}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                {/* Avatar */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous reviews"
            className="p-2.5 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === page
                    ? "w-8 bg-gradient-primary"
                    : "w-2 bg-muted hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next reviews"
            className="p-2.5 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
