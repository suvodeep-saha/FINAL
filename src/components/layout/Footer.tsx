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
        <div className="flex flex-col gap-4 text-sm text-muted-foreground items-center md:items-end">
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
            <Link to="/refund" className="hover:text-foreground transition-colors">Refund & Cancellation</Link>
            <Link to="/shipping" className="hover:text-foreground transition-colors">Shipping & Delivery</Link>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} SnapCut AI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
