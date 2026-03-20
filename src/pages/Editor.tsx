import { useState, useCallback, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import UploadZone from "@/components/editor/UploadZone";
import ComparisonSlider from "@/components/editor/ComparisonSlider";
import ProcessingOverlay from "@/components/editor/ProcessingOverlay";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Download, RotateCcw, Clock, Trash2 } from "lucide-react";
import { toast } from "sonner";

type EditorState = "idle" | "preview" | "processing" | "done";

type HistoryItem = {
  id: string;
  processedUrl: string;
  timestamp: number;
};

const Editor = () => {
  const [state, setState] = useState<EditorState>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [processedUrl, setProcessedUrl] = useState<string>("");
  const [activeTab, setActiveTab] = useState("editor");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("snapcut-history");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  const saveToHistory = (url: string) => {
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      processedUrl: url,
      timestamp: Date.now(),
    };
    setHistory((prev) => {
      const updated = [newItem, ...prev];
      localStorage.setItem("snapcut-history", JSON.stringify(updated));
      return updated;
    });
  };

  const clearHistoryItem = (id: string) => {
    setHistory((prev) => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem("snapcut-history", JSON.stringify(updated));
      return updated;
    });
  };

  const handleFileSelect = useCallback((f: File) => {
    const url = URL.createObjectURL(f);
    setFile(f);
    setOriginalUrl(url);
    setProcessedUrl("");
    setState("preview");
  }, []);

  const handleProcess = async () => {
    if (!file) return;
    setState("processing");

    try {
      const response = await fetch("https://journiq.app.n8n.cloud/webhook/Remove-Background", {
        method: "POST",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      if (!response.ok) {
        throw new Error("Failed to process image");
      }

      const data = await response.json();
      
      if (!data.url) {
        throw new Error("Invalid response format");
      }
      
      setProcessedUrl(data.url);
      saveToHistory(data.url);
      setState("done");
    } catch (error) {
      console.error("Error processing image:", error);
      toast.error("Failed to process image. Please try again.");
      setState("preview");
    }
  };

  const handleReset = useCallback(() => {
    if (originalUrl) URL.revokeObjectURL(originalUrl);
    setFile(null);
    setOriginalUrl("");
    setProcessedUrl("");
    setState("idle");
  }, [originalUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Delete" || e.key === "Backspace") && state !== "idle") {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        handleReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state, handleReset]);

  const downloadFromUrl = async (urlToDownload: string) => {
    try {
      const response = await fetch(urlToDownload);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `snapcut-${Date.now()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
      toast.error("Failed to download image");
    }
  };

  const handleDownload = () => downloadFromUrl(processedUrl);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="history">
                  <Clock className="w-4 h-4 mr-2" /> History
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="editor" className="max-w-2xl mx-auto focus-visible:outline-none">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-8"
              >
                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                  Remove Background
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Upload an image and get a transparent PNG in seconds.
                </p>
              </motion.div>

              <AnimatePresence mode="wait">
                {state === "idle" && (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <UploadZone onFileSelect={handleFileSelect} />
                  </motion.div>
                )}

                {state === "preview" && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="surface-card overflow-hidden">
                      <img
                        src={originalUrl}
                        alt="Preview"
                        className="w-full aspect-[4/3] object-contain bg-muted/30"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={handleReset} className="flex-1">
                        <RotateCcw className="h-4 w-4 mr-2" /> Change Image
                      </Button>
                      <Button variant="gradient" onClick={handleProcess} className="flex-1">
                        <Zap className="h-4 w-4 mr-2" /> Remove Background
                      </Button>
                    </div>
                  </motion.div>
                )}

                {state === "processing" && (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProcessingOverlay imageUrl={originalUrl} />
                  </motion.div>
                )}

                {state === "done" && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <ComparisonSlider originalUrl={originalUrl} processedUrl={processedUrl} />
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-success flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        Perfect. Your image is ready.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={handleReset} className="flex-1">
                        <RotateCcw className="h-4 w-4 mr-2" /> New Image
                      </Button>
                      <Button variant="gradient" onClick={handleDownload} className="flex-1">
                        <Download className="h-4 w-4 mr-2" /> Download PNG
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            <TabsContent value="history" className="focus-visible:outline-none">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                      History
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Your recently processed images.
                    </p>
                  </div>
                  {history.length > 0 && (
                    <Button variant="outline" onClick={() => { setHistory([]); localStorage.removeItem("snapcut-history"); }}>
                      Clear History
                    </Button>
                  )}
                </div>

                {history.length === 0 ? (
                  <div className="text-center py-12 rounded-xl border border-dashed border-border/50 bg-muted/20">
                    <Clock className="mx-auto h-8 w-8 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-1">No history yet</h3>
                    <p className="text-sm text-muted-foreground">Processed images will appear here.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {history.map((item) => (
                      <div key={item.id} className="surface-card overflow-hidden group relative max-w-full">
                        <img
                          src={item.processedUrl}
                          alt="Processed"
                          className="w-full aspect-square object-contain bg-muted/30"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-background/80 backdrop-blur-sm border-t border-border/50 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex gap-2">
                          <Button size="sm" variant="gradient" className="flex-1" onClick={() => downloadFromUrl(item.processedUrl)}>
                            <Download className="h-4 w-4 mr-2" /> Download
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => clearHistoryItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Editor;
