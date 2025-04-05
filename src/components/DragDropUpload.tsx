
import React, { useState, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DragDropUploadProps {
  onImagesSelected: (files: File[]) => void;
  disabled?: boolean;
}

export const DragDropUpload: React.FC<DragDropUploadProps> = ({
  onImagesSelected,
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) {
        setIsDragging(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const processFiles = useCallback(
    (files: FileList | null) => {
      if (!files || disabled) return;

      const imageFiles: File[] = [];
      const invalidFiles: string[] = [];

      Array.from(files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          imageFiles.push(file);
        } else {
          invalidFiles.push(file.name);
        }
      });

      if (invalidFiles.length > 0) {
        toast({
          title: "Invalid file types",
          description: `Only image files are allowed. Failed to upload: ${invalidFiles.join(", ")}`,
          variant: "destructive",
        });
      }

      if (imageFiles.length > 0) {
        onImagesSelected(imageFiles);
        toast({
          title: "Images uploaded",
          description: `${imageFiles.length} image${imageFiles.length > 1 ? "s" : ""} uploaded successfully.`,
        });
      }
    },
    [onImagesSelected, disabled, toast]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      processFiles(e.dataTransfer.files);
    },
    [processFiles]
  );

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      processFiles(e.target.files);
      // Reset the input value so the same file can be uploaded again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [processFiles]
  );

  const handleButtonClick = useCallback(() => {
    if (fileInputRef.current && !disabled) {
      fileInputRef.current.click();
    }
  }, [disabled]);

  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-lg p-8 transition-colors duration-300 flex flex-col items-center justify-center cursor-pointer hover:border-pdf-primary",
        isDragging ? "border-pdf-primary bg-pdf-secondary" : "border-gray-300",
        disabled && "opacity-60 cursor-not-allowed"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleButtonClick}
      aria-disabled={disabled}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileInputChange}
        className="hidden"
        disabled={disabled}
      />
      <Upload
        className={cn(
          "w-12 h-12 mb-4 transition-colors duration-300",
          isDragging ? "text-pdf-primary" : "text-gray-400"
        )}
      />
      <h3 className="text-lg font-semibold mb-2">Drag and drop your images here</h3>
      <p className="text-sm text-gray-500 mb-4 text-center max-w-md">
        or click to select files from your device. Only image files are supported.
      </p>
      <Button
        type="button"
        variant="outline"
        onClick={(e) => {
          e.stopPropagation();
          handleButtonClick();
        }}
        disabled={disabled}
        className="bg-white hover:bg-gray-50"
      >
        Select Images
      </Button>
    </div>
  );
};

export default DragDropUpload;
