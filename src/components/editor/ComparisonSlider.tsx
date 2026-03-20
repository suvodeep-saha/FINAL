import { useState, useRef, useCallback } from "react";
import { GripVertical } from "lucide-react";

interface ComparisonSliderProps {
  originalUrl: string;
  processedUrl: string;
}

const ComparisonSlider = ({ originalUrl, processedUrl }: ComparisonSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = () => { isDragging.current = true; };
  const handlePointerUp = () => { isDragging.current = false; };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-col-resize select-none surface-card"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Processed (right side with checkerboard) */}
      <div className="absolute inset-0 checkerboard">
        <img src={processedUrl} alt="Processed" className="w-full h-full object-contain" />
      </div>

      {/* Original (left side, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={originalUrl}
          alt="Original"
          className="w-full h-full object-contain"
          style={{ width: `${containerRef.current?.offsetWidth || 0}px` }}
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground/80"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-6 items-center justify-center rounded-full bg-primary-foreground shadow-lg">
          <GripVertical className="h-4 w-4 text-foreground" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-md bg-foreground/70 text-background">
        Original
      </span>
      <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-md bg-foreground/70 text-background">
        Processed
      </span>
    </div>
  );
};

export default ComparisonSlider;
