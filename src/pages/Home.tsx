import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Download, Shield, ArrowRight, Upload, Sparkles, Image as ImageIcon } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload", desc: "Drag & drop any image. JPG, PNG, or WEBP." },
  { icon: Sparkles, title: "Process", desc: "Our AI removes the background in seconds." },
  { icon: Download, title: "Download", desc: "Get your transparent PNG instantly." },
];

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Results in under 5 seconds, powered by cutting-edge AI models." },
  { icon: ImageIcon, title: "Pixel-Perfect Edges", desc: "Hair, fur, complex shapes — handled with surgical precision." },
  { icon: Shield, title: "Private & Secure", desc: "Images are never stored permanently. Auto-deleted within 24 hours." },
  { icon: Download, title: "HD Downloads", desc: "Full resolution output. No watermarks. No quality loss." },
];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Home = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div {...fade}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            <Zap className="h-3 w-3" /> AI-Powered Background Removal
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
            Pro-grade background
            <br />
            removal. <span className="gradient-text">Zero clicks.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Upload an image and let our AI handle the hair, edges, and complex details. High-resolution downloads in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/editor">
              <Button variant="gradient" size="xl">
                Remove Background <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">View Pricing</Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">3 free images/day · No signup required</p>
        </motion.div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div {...fade} className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">How it works</h2>
          <p className="mt-3 text-muted-foreground">Three steps. Five seconds. Done.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              {...fade}
              transition={{ ...fade.transition, delay: i * 0.1 }}
              className="surface-card surface-card-hover p-8 text-center"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Step {i + 1}
              </div>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <motion.div {...fade} className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Built for speed</h2>
          <p className="mt-3 text-muted-foreground">Everything you need, nothing you don't.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fade}
              transition={{ ...fade.transition, delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-lg"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div {...fade}>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Ready to get started?</h2>
          <p className="mt-3 text-muted-foreground">Start removing backgrounds for free today.</p>
          <div className="mt-8">
            <Link to="/editor">
              <Button variant="gradient" size="xl">
                Try SnapCut AI Free <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
