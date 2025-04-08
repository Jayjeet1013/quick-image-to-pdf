import React, { useState } from "react";
import { Image, Menu, X } from "lucide-react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b px-4  py-4 shadow-sm">
      <div className="md:container max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image className="h-8 w-8 text-pdf-primary" />
            <h1 className="text-xl font-bold text-gray-800">
              Quick Image to PDF
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            <a
              href="/blog"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Blog
            </a>
            <a
              href="/about"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              About
            </a>
            <a
              href="/features"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Features
            </a>
            <a
              href="/privacy"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Privacy
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3">
            <a
              onClick={closeMenu}
              href="/blog"
              className="text-gray-700 hover:underline text-sm"
            >
              Blog
            </a>
            <a
              onClick={closeMenu}
              href="/about"
              className="text-gray-700 hover:underline text-sm"
            >
              About
            </a>
            <a
              onClick={closeMenu}
              href="/features"
              className="text-gray-700 hover:underline text-sm"
            >
              Features
            </a>
            <a
              onClick={closeMenu}
              href="/privacy"
              className="text-gray-700 hover:underline text-sm"
            >
              Privacy
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
