import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "For casual use",
    features: ["3 images/day", "Standard quality", "JPG, PNG, WEBP", "No signup required"],
    cta: "Current Plan",
    popular: false,
    gradient: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    desc: "For content creators",
    features: ["50 images/day", "HD quality downloads", "Priority processing", "Usage dashboard"],
    cta: "Upgrade to Pro",
    popular: true,
    gradient: true,
  },
  {
    name: "Unlimited",
    price: "₹1,499",
    period: "/month",
    desc: "For teams & businesses",
    features: ["Unlimited images", "Max resolution output", "API access", "Priority support"],
    cta: "Go Unlimited",
    popular: false,
    gradient: true,
  },
];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fade} className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Simple, transparent pricing
          </h1>
          <p className="mt-3 text-muted-foreground">Start free. Upgrade when you need more.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fade}
              transition={{ ...fade.transition, delay: i * 0.1 }}
              className={`surface-card surface-card-hover p-8 flex flex-col relative ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-bg text-xs font-semibold text-primary-foreground flex items-center gap-1">
                  <Zap className="h-3 w-3" /> Most Popular
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="h-4 w-4 text-success shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant={plan.gradient ? "gradient" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Pricing;
