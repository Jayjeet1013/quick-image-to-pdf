import React from 'react'

const Footer = () => {
  return (
    <div>
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
}

export default Footer