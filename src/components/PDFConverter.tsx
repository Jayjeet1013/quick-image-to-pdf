
import React, { useState, useCallback } from "react";
import { jsPDF } from "jspdf";
import { toast } from "sonner";
import { FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import DragDropUpload from "./DragDropUpload";
import ImagePreview from "./ImagePreview";

export const PDFConverter: React.FC = () => {
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const [isConverting, setIsConverting] = useState(false);

  const handleImagesSelected = useCallback((files: File[]) => {
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const handleRemoveImage = useCallback((index: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      // Revoke the object URL to prevent memory leaks
      URL.revokeObjectURL(newImages[index].url);
      newImages.splice(index, 1);
      return newImages;
    });
  }, []);

  const handleMoveUp = useCallback((index: number) => {
    if (index === 0) return;
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const temp = newImages[index];
      newImages[index] = newImages[index - 1];
      newImages[index - 1] = temp;
      return newImages;
    });
  }, []);

  const handleMoveDown = useCallback((index: number) => {
    setImages((prevImages) => {
      if (index === prevImages.length - 1) return prevImages;
      const newImages = [...prevImages];
      const temp = newImages[index];
      newImages[index] = newImages[index + 1];
      newImages[index + 1] = temp;
      return newImages;
    });
  }, []);

  const handleConvertToPDF = useCallback(async () => {
    if (images.length === 0) {
      toast.error("Please add at least one image to convert");
      return;
    }

    setIsConverting(true);

    try {
      // Create a new PDF document
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
      });

      let firstPage = true;

      for (let i = 0; i < images.length; i++) {
        // Load image
        const img = new Image();
        img.src = images[i].url;
        
        await new Promise<void>((resolve) => {
          img.onload = () => {
            // Calculate dimensions
            let imgWidth = img.width;
            let imgHeight = img.height;
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            let scale = 1;
            
            if (imgWidth > pdfWidth || imgHeight > pdfHeight) {
              const widthRatio = pdfWidth / imgWidth;
              const heightRatio = pdfHeight / imgHeight;
              scale = Math.min(widthRatio, heightRatio) * 0.9; // 0.9 to add some margin
            }

            imgWidth *= scale;
            imgHeight *= scale;

            // Center image on page
            const x = (pdfWidth - imgWidth) / 2;
            const y = (pdfHeight - imgHeight) / 2;

            // Add a new page if this isn't the first image
            if (!firstPage) {
              pdf.addPage();
            } else {
              firstPage = false;
            }

            // Add the image to the PDF
            pdf.addImage(img, "JPEG", x, y, imgWidth, imgHeight);
            resolve();
          };
        });
      }

      // Generate PDF filename based on current date and time
      const filename = `images_to_pdf_${new Date().toISOString().replace(/[:.]/g, "-")}.pdf`;
      
      // Save the PDF
      pdf.save(filename);
      toast.success("PDF created successfully!");
    } catch (error) {
      console.error("Error creating PDF:", error);
      toast.error("Failed to create PDF. Please try again.");
    } finally {
      setIsConverting(false);
    }
  }, [images]);

  const handleClearAll = useCallback(() => {
    // Revoke all object URLs to prevent memory leaks
    images.forEach((image) => URL.revokeObjectURL(image.url));
    setImages([]);
    toast("All images cleared");
  }, [images]);

  // Clean up object URLs when component unmounts
  React.useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.url));
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto w-full space-y-8 animate-slide-up">
      <DragDropUpload
        onImagesSelected={handleImagesSelected}
        disabled={isConverting}
      />

      {images.length > 0 && (
        <ImagePreview
          images={images}
          onRemove={handleRemoveImage}
          onMoveUp={handleMoveUp}
          onMoveDown={handleMoveDown}
        />
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {images.length > 0 && (
          <>
            <Button
              className="bg-pdf-primary hover:bg-pdf-accent text-white"
              onClick={handleConvertToPDF}
              disabled={isConverting || images.length === 0}
            >
              {isConverting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <FileDown className="mr-2 h-4 w-4" />
                  Convert to PDF
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={handleClearAll}
              disabled={isConverting || images.length === 0}
            >
              Clear All
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PDFConverter;
