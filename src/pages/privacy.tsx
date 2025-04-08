// pages/privacy.tsx
import React from "react";
import { Image, Lock } from "lucide-react";
import { Link } from "lucide-react";
const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <head>
        <title>Privacy Policy | Image to PDF Converter</title>
        <meta
          name="description"
          content="Our privacy policy explains how we handle your data. Your files never leave your browser - we don't store or access your documents."
        />
      </head>

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
     
                   <a
                     href="/about"
                     className="ml-4 text-gray-500 hover:text-gray-700 text-sm"
                   >
                     About
                   </a>
                   <a
                     href="/features"
                     className="ml-4 text-gray-500 hover:text-gray-700 text-sm"
                   >
                     Features
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-16 w-16 bg-pdf-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-pdf-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Privacy Policy
            </h2>
            <p className="text-lg text-gray-600">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="prose max-w-none bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">
              1. Information We Collect
            </h3>
            <p>
              Our Image to PDF converter operates entirely in your browser. We
              do not collect, store, or process your images or PDF documents on
              our servers. All conversion happens locally on your device.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">2. Analytics</h3>
            <p>
              We use basic website analytics to understand how visitors use our
              tool. This includes anonymous information like page views, device
              type, and country. This data cannot identify individual users.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">3. Cookies</h3>
            <p>
              Our website may use cookies to improve user experience. These
              cookies don't contain personal information and are used for
              functionality and analytics only.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">
              4. Third-Party Services
            </h3>
            <p>
              We may display advertisements from third-party networks. These
              services may collect information about your visits to our and
              other websites to provide relevant ads.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">
              5. Changes to This Policy
            </h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">6. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us through our website.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pdf-primary hover:bg-pdf-primary-dark"
            >
              Back to Converter
            </a>
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

export default PrivacyPage;
