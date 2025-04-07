// pages/features.tsx
import React from "react";
import {
  Image,
  FileText,
  LayoutGrid,
  Smartphone,
  Lock,
  CheckCircle,
  Link,
} from "lucide-react";



const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <head>
        <title>
          Advanced Features - Our Image to PDF Converter | Quick, Secure & Free
        </title>
        <meta
          name="description"
          content="Discover all the powerful features of our free Image to PDF converter. Batch processing, privacy protection, mobile support and more."
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
              Powerful Features for All Your PDF Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our free Image to PDF converter comes packed with features to make
              document conversion simple and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-pdf-secondary rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pdf-primary hover:bg-pdf-primary-dark"
            >
              Start Converting Now
            </Link>
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

const features = [
  {
    icon: <LayoutGrid className="h-6 w-6 text-pdf-primary" />,
    title: "Batch Processing",
    description:
      "Convert multiple images to a single PDF file at once. Perfect for creating photo albums or compiling documents.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-pdf-primary" />,
    title: "Mobile Friendly",
    description:
      "Works perfectly on all devices. Convert photos from your phone directly to PDF without installing apps.",
  },
  {
    icon: <Lock className="h-6 w-6 text-pdf-primary" />,
    title: "100% Private",
    description:
      "All conversion happens in your browser. Your files never leave your computer.",
  },
  {
    icon: <FileText className="h-6 w-6 text-pdf-primary" />,
    title: "No Watermarks",
    description:
      "Get clean PDFs without any branding or limitations. Completely free.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-pdf-primary" />,
    title: "Multiple Formats",
    description:
      "Supports JPG, PNG, WEBP, GIF, BMP and TIFF. Convert different formats in one PDF.",
  },
  {
    icon: <Image className="h-6 w-6 text-pdf-primary" />,
    title: "Quality Preservation",
    description:
      "Maintains original image quality while optimizing PDF file size.",
  },
];

export default FeaturesPage;
