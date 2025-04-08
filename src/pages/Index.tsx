import React from "react";
import {Image, FileText } from "lucide-react";
import PDFConverter from "@/components/PDFConverter";
import BlogPostPage from "./blog/blog/how-to-convert-images-to-pdf";
import AboutPage from "./about";
import PrivacyPage from "./privacy";
import Features from "@/components/Features";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
    

      <main className="flex-1 container px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
              Convert Images to PDF in Seconds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload your images, arrange them in the desired order, and
              download them as a single PDF file. No registration required.
            </p>
          </div>

          <PDFConverter />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-pdf-secondary rounded-full flex items-center justify-center mb-4">
                <Image className="h-6 w-6 text-pdf-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Simple Upload</h3>
              <p className="text-gray-600 text-sm">
                Drag and drop your images or browse to select multiple files at
                once.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-pdf-secondary rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-pdf-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 17h8" />
                  <path d="M8 13h6" />
                  <path d="M8 9h2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Arrange Your Pages</h3>
              <p className="text-gray-600 text-sm">
                Preview and reorder your images before conversion for the
                perfect PDF output.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-pdf-secondary rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-pdf-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Instant Conversion</h3>
              <p className="text-gray-600 text-sm">
                Convert and download your PDF file with a single click. Fast and
                efficient.
              </p>
            </div>
          </div>
          <Features />
          <section className="mt-16 bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Why Choose Our Image to PDF Converter?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-lg mb-3">
                    Browser-Based Conversion
                  </h3>
                  <p className="text-gray-600">
                    Unlike many online converters, our tool processes your
                    images directly in your browser. This means faster
                    conversion times and no waiting in queues. Your files never
                    leave your computer, providing unparalleled privacy for
                    sensitive documents.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-3">Batch Processing</h3>
                  <p className="text-gray-600">
                    Convert multiple images to a single PDF document in one go.
                    Perfect for creating digital portfolios, photo albums, or
                    compiling scanned documents. Our tool maintains image
                    quality while keeping file sizes manageable.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-3">No Watermarks</h3>
                  <p className="text-gray-600">
                    Many free PDF converters add annoying watermarks to your
                    documents. Our service is completely free with no hidden
                    limitations or branding on your converted files.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-3">Mobile Friendly</h3>
                  <p className="text-gray-600">
                    Works perfectly on all devices including smartphones and
                    tablets. Convert photos from your phone directly to PDF
                    without needing to install any apps.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

     
    </div>
  );
};

export default Index;
