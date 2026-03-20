import { useCallback, useEffect, useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

const MAX_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED = ["image/jpeg", "image/png", "image/webp"];

const UploadZone = ({ onFileSelect }: UploadZoneProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback((file: File): boolean => {
    if (!ACCEPTED.includes(file.type)) {
      setError("Only JPG, PNG, and WEBP files are supported.");
      return false;
    }
    if (file.size > MAX_SIZE) {
      setError("File too large. Max size is 10MB.");
      return false;
    }
    setError(null);
    return true;
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const file = e.dataTransfer.files?.[0];
      if (file && validate(file)) onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validate(file)) onFileSelect(file);
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const file = e.clipboardData?.files?.[0];
      if (file && validate(file)) {
        onFileSelect(file);
      }
    };

    document.addEventListener("paste", handlePaste as unknown as EventListener);
    return () => {
      document.removeEventListener("paste", handlePaste as unknown as EventListener);
    };
  }, [onFileSelect, validate]);

  return (
    <div className="w-full">
      <motion.label
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`upload-zone flex flex-col items-center justify-center gap-4 p-12 cursor-pointer ${
          dragActive ? "upload-zone-active" : ""
        }`}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
      >
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          className="hidden"
          onChange={handleChange}
        />
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          {dragActive ? (
            <ImageIcon className="h-7 w-7 text-primary" />
          ) : (
            <Upload className="h-7 w-7 text-primary" />
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">
            {dragActive ? "Drop your image here" : "Drag & drop your image"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            or click to browse · JPG, PNG, WEBP · Max 10MB
          </p>
        </div>
      </motion.label>
      {error && (
        <p className="mt-3 text-sm text-destructive text-center">{error}</p>
      )}
    </div>
  );
};

export default UploadZone;
