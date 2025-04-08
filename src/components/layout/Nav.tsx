import { Image } from 'lucide-react';
import React from 'react'

const Nav = () => {
  return (
    <div>
      <header className="bg-white border-b px-4 py-4 shadow-sm">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <a href='/' className="flex items-center gap-2">
              <Image className="h-8 w-8 text-pdf-primary" />
              <h1 className="text-xl font-bold text-gray-800">
                Quick Image to PDF
              </h1>
            </a>
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
    </div>
  );
}

export default Nav