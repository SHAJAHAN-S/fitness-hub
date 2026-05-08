import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const interests = [
  "Strength Training",
  "HIIT & Cardio",
  "Women's Fitness",
  "Personal Training",
] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be less than 60 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{7,15}$/, "Enter a valid phone number"),
  interest: z.enum(interests, { message: "Please select an option" }),
  message: z
    .string()
    .trim()
    .max(500, "Message must be less than 500 characters")
    .optional()
    .or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const fieldClass = (hasError: boolean) =>
  cn(
    "w-full px-4 py-3 rounded-md bg-input border focus:outline-none transition-colors",
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-primary"
  );

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", interest: "Strength Training", message: "" },
    mode: "onTouched",
  });

  const onSubmit = async (_values: FormValues) => {
    // Simulate request — replace with API call when backend is added
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  const reopen = () => {
    setSubmitted(false);
    reset();
  };

  return (
    <div className="p-8 rounded-2xl bg-card border border-border shadow-card relative overflow-hidden">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center py-6"
          >
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-display text-2xl">You're In!</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
              Thanks for reaching out. Our team will call you within 24 hours to
              schedule your free trial session at Master Gym.
            </p>
            <button
              onClick={reopen}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-md border border-border font-semibold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Send Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h3 className="font-display text-2xl">Get a Free Trial</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fill the form, we'll call you back.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  className={fieldClass(!!errors.name)}
                />
                {errors.name && <FieldError message={errors.name.message} />}
              </div>

              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone number"
                  aria-invalid={!!errors.phone}
                  className={fieldClass(!!errors.phone)}
                />
                {errors.phone && <FieldError message={errors.phone.message} />}
              </div>

              <div>
                <select
                  {...register("interest")}
                  aria-invalid={!!errors.interest}
                  className={fieldClass(!!errors.interest)}
                >
                  {interests.map((i) => (
                    <option key={i} value={i}>
                      Interested in: {i}
                    </option>
                  ))}
                </select>
                {errors.interest && <FieldError message={errors.interest.message} />}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Message (optional)"
                  aria-invalid={!!errors.message}
                  className={cn(fieldClass(!!errors.message), "resize-none")}
                />
                {errors.message && <FieldError message={errors.message.message} />}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground py-4 rounded-md font-semibold uppercase tracking-wider shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Book My Free Session"
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
      <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
      {message}
    </p>
  );
}
