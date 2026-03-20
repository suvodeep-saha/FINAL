import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="SnapCut AI" className="h-7 w-7 rounded-md" />
          <span className="text-sm font-bold tracking-tight text-foreground">
            Snap<span className="gradient-text">Cut</span> AI
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <span>·</span>
          <span>© {new Date().getFullYear()} SnapCut AI</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
