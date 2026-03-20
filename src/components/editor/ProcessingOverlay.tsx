import { motion } from "framer-motion";

interface ProcessingOverlayProps {
  imageUrl: string;
}

const ProcessingOverlay = ({ imageUrl }: ProcessingOverlayProps) => (
  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden surface-card">
    <img src={imageUrl} alt="Processing" className="w-full h-full object-contain opacity-60" />
    <div className="scan-line" />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 px-5 py-3 rounded-lg bg-foreground/80 backdrop-blur-sm"
      >
        <div className="h-2 w-2 rounded-full gradient-bg animate-pulse" />
        <span className="text-sm font-medium text-background">Analyzing edges...</span>
      </motion.div>
    </div>
  </div>
);

export default ProcessingOverlay;
