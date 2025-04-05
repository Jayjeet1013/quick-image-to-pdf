
import React from "react";
import { X, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImagePreviewProps {
  images: {
    file: File;
    url: string;
  }[];
  onRemove: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  images,
  onRemove,
  onMoveUp,
  onMoveDown,
}) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 animate-fade-in">
      <h3 className="text-lg font-medium">Image Preview</h3>
      <p className="text-sm text-gray-500 mb-2">
        {images.length} image{images.length > 1 ? "s" : ""} selected. Drag to reorder.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={`${image.file.name}-${index}`}
            className="relative group border rounded-lg overflow-hidden hover:shadow-md transition-all bg-white"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={image.url}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 border-t">
              <p className="text-sm font-medium truncate" title={image.file.name}>
                {image.file.name}
              </p>
              <p className="text-xs text-gray-500">
                {(image.file.size / 1024).toFixed(1)} KB
              </p>
            </div>
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onRemove(index)}
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="absolute top-2 left-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="secondary"
                size="icon"
                className="w-8 h-8"
                disabled={index === 0}
                onClick={() => onMoveUp(index)}
                aria-label="Move image up"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="w-8 h-8"
                disabled={index === images.length - 1}
                onClick={() => onMoveDown(index)}
                aria-label="Move image down"
              >
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePreview;
