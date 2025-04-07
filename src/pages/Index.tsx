import React from "react";
import {Image, FileText } from "lucide-react";
import PDFConverter from "@/components/PDFConverter";
import BlogPostPage from "./blog/blog/how-to-convert-images-to-pdf";
import AboutPage from "./about";
import PrivacyPage from "./privacy";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b px-4 py-4 shadow-sm">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image className="h-8 w-8 text-pdf-primary" />
              <h1 className="text-xl font-bold text-gray-800">
                Quick Image to PDF
              </h1>
            </div>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">View on GitHub</span>
            </a> */}
            <div>
              <a
                href="/blog"
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Blog
              </a>
              <a href="/about" className="ml-4 text-gray-500 hover:text-gray-700 text-sm">
                About
              </a>
              <a
                href="/privacy"
                className="ml-4 text-gray-500 hover:text-gray-700 text-sm"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </header>

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
                  Yes, our image to PDF converter is completely free to use with
                  no hidden charges. You can convert as many images as you need
                  without any limitations.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-lg">Are my images secure?</h3>
                <p className="text-gray-600 mt-2">
                  Absolutely! All conversion happens directly in your browser.
                  We never upload your images to any server, ensuring complete
                  privacy and security.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-lg">
                  What image formats are supported?
                </h3>
                <p className="text-gray-600 mt-2">
                  We support all common image formats including JPG, PNG, WEBP,
                  GIF, BMP, and TIFF. You can convert multiple formats in a
                  single PDF.
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

      <script
        async
        data-cfasync="false"
        src="//pl26319174.effectiveratecpm.com/d5ba697c09e6886e1f7e98f4c8cab99a/invoke.js"
      ></script>
      <div id="container-d5ba697c09e6886e1f7e98f4c8cab99a"></div>

      <footer className="bg-white border-t px-4 py-6">
        <div className="container max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Quick Image to PDF. All rights
            reserved.
          </p>
          <p className="mt-2">
            Your files are processed entirely in your browser. We never upload
            or store your images.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
