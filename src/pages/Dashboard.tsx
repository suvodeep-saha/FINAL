import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Image as ImageIcon, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Images Today", value: "1 / 3", icon: ImageIcon },
  { label: "Total Processed", value: "12", icon: TrendingUp },
  { label: "Current Plan", value: "Free", icon: Zap },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="mt-2 text-sm text-muted-foreground">Your usage overview</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="surface-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
                <p className="text-2xl font-bold tracking-tight text-foreground">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="surface-card p-8 mt-8 text-center">
            <h2 className="text-lg font-bold text-foreground">Need more images?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Upgrade your plan for higher limits and HD downloads.
            </p>
            <div className="mt-5">
              <Link to="/pricing">
                <Button variant="gradient">View Plans</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Dashboard;
