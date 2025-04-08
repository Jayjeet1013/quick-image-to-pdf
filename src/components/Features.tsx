import React from "react";
import AdComponent from "./AddComponent";

const Features = () => {
  return (
    <div>
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg">
              Is this service really free?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes, our image to PDF converter is completely free to use with no
              hidden charges. You can convert as many images as you need without
              any limitations.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg">Are my images secure?</h3>
            <p className="text-gray-600 mt-2">
              Absolutely! All conversion happens directly in your browser. We
              never upload your images to any server, ensuring complete privacy
              and security.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg">
              What image formats are supported?
            </h3>
            <p className="text-gray-600 mt-2">
              We support all common image formats including JPG, PNG, WEBP, GIF,
              BMP, and TIFF. You can convert multiple formats in a single PDF.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg">
              Can I rearrange pages in my PDF?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes, our converter lets you easily drag and drop images to
              rearrange them before creating your PDF document.
            </p>
          </div>
        </div>
      </section>
    <AdComponent />
      
    </div>
  );
};

export default Features;
