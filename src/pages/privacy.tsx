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

   
    </div>
  );
};

export default PrivacyPage;
