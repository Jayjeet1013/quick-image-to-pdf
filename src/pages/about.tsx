// pages/about.tsx
import React from "react";
import { Image, Users, Shield, Globe } from "lucide-react";
import { Link } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <head>
        <title>About Our Free Image to PDF Converter | Mission & Values</title>
        <meta
          name="description"
          content="Learn about our mission to provide free, secure document conversion tools. Our commitment to privacy and accessibility."
        />
      </head>

      <header className="bg-white border-b px-4 py-4 shadow-sm">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image className="h-8 w-8 text-pdf-primary" />
              <h1 className="text-xl font-bold text-gray-800">
                Quick Image to PDF
              </h1>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              About Our Image to PDF Converter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission is to provide free, accessible tools that make
              document management simple for everyone.
            </p>
          </div>

          <div className="prose max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in {new Date().getFullYear()}, Quick Image to PDF was
              created to solve a simple but common problem: converting images to
              PDF documents shouldn't require expensive software or compromise
              your privacy. We built a tool that works entirely in your browser,
              with no file uploads and no registration required.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-pdf-secondary rounded-full flex items-center justify-center mt-1">
                  <Shield className="h-5 w-5 text-pdf-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Privacy First</h4>
                  <p className="text-gray-600 text-sm">
                    Unlike many online converters, we never see your files. All
                    processing happens in your browser, keeping your documents
                    completely private.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-pdf-secondary rounded-full flex items-center justify-center mt-1">
                  <Globe className="h-5 w-5 text-pdf-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Accessibility</h4>
                  <p className="text-gray-600 text-sm">
                    Our tool is completely free with no hidden limits. We
                    believe basic document tools should be available to
                    everyone, everywhere.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-gray-600 mb-6">
              We're committed to maintaining this service as a free resource.
              Our development is supported by non-intrusive ads and optional
              donations, never by selling your data or putting limits on our
              free tier.
            </p>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pdf-primary hover:bg-pdf-primary-dark"
              >
                Try Our Converter Now
              </Link>
            </div>
          </div>
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

export default AboutPage;
