// pages/blog/how-to-convert-images-to-pdf.tsx
import React from "react";
import { Image, ArrowLeft } from "lucide-react";
import { Link } from "lucide-react";

const BlogPostPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <head>
        <title>
          How to Convert Images to PDF - Complete Guide | Quick Image to PDF
        </title>
        <meta
          name="description"
          content="Step-by-step guide on converting images to PDF documents. Learn the best practices for quality, file size, and organization of your PDF files."
        />
      </head>

     

      <main className="flex-1 container px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* <a
            href="/blog"
            className="flex items-center text-pdf-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </a> */}

          <article className="prose max-w-none bg-white p-6 rounded-lg shadow-sm border">
            <h1 className="text-3xl font-bold mb-2">
              How to Convert Images to PDF: A Complete Guide
            </h1>
            <p className="text-gray-500 mb-8">
              Published on{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <p className="lead">
              Converting images to PDF is a common need for students,
              professionals, and anyone dealing with digital documents. This
              guide will walk you through the process and share tips for optimal
              results.
            </p>

            <h2>Why Convert Images to PDF?</h2>
            <p>PDF is the universal standard for documents because it:</p>
            <ul>
              <li>Preserves formatting across devices</li>
              <li>Combines multiple images into a single file</li>
              <li>Is widely accepted for professional submissions</li>
              <li>Offers better compression than some image formats</li>
            </ul>

            <h2>Step-by-Step Conversion</h2>
            <h3>1. Prepare Your Images</h3>
            <p>
              Ensure your images are clear and properly named if order matters.
              Our tool supports JPG, PNG, WEBP, GIF, BMP, and TIFF formats.
            </p>

            <h3>2. Upload Your Images</h3>
            <p>
              Drag and drop files into our converter or click to browse. You can
              select multiple files at once.
            </p>

            <h3>3. Arrange Pages (Optional)</h3>
            <p>
              Drag to reorder images before conversion. Preview thumbnails help
              ensure everything looks correct.
            </p>

            <h3>4. Convert and Download</h3>
            <p>
              Click "Convert to PDF" and your file will be ready in seconds. The
              download will start automatically.
            </p>

            <h2>Pro Tips for Best Results</h2>
            <ul>
              <li>
                <strong>For documents:</strong> Use high-contrast images (300dpi
                or more for printing)
              </li>
              <li>
                <strong>For photos:</strong> Consider PDF/A format for long-term
                archiving
              </li>
              <li>
                <strong>File size:</strong> Larger images create larger PDFs -
                resize if needed
              </li>
              <li>
                <strong>Naming:</strong> Name files sequentially (01.jpg,
                02.jpg) for automatic ordering
              </li>
            </ul>

            <h2>Common Use Cases</h2>
            <ul>
              <li>Scanning paper documents with your phone</li>
              <li>Creating portfolios from design work</li>
              <li>Submitting multiple photos as one document</li>
              <li>Archiving important receipts or records</li>
            </ul>

            <div className="mt-12 text-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pdf-primary hover:bg-pdf-primary-dark"
              >
                Try Our Converter Now
              </a>
            </div>
          </article>
        </div>
      </main>

      <footer className="bg-white border-t px-4 py-6">
        <div className="container max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Quick Image to PDF. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;
