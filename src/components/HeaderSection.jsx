import React, { useState } from 'react';

const Header = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State to toggle the 'Product' dropdown menu
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  return (
    <section>
      <header className="bg-transparent">
        <nav className="bg-transparent mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="flex justify-center items-center">
              <img className="h-12 w-auto" src="/images/logo-bs.png" alt="Basisthan" />
              <span className="font-bold text-2xl ml-2">Basisthan</span>
            </a>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-8">
            <a href="#" className="text-lg font-semibold text-gray-900">Home</a>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-lg font-semibold text-gray-900"
                aria-expanded={isProductMenuOpen}
                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)} // Toggle 'Product' dropdown
              >
                Products
                <svg
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Product Dropdown for Desktop */}
              {isProductMenuOpen && (
                <div className="absolute left-0 top-full z-10 mt-2 w-48 bg-white shadow-lg ring-1 ring-gray-900/5">
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Analytics</a>
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Other Products</a>
                </div>
              )}
            </div>
            <a href="#" className="text-lg font-semibold text-gray-900">Contact</a>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-white p-4 shadow-lg z-10">
              <a href="#" className="block text-lg font-semibold text-gray-900">Home</a>
              <button
                type="button"
                className="mt-2 flex items-center gap-x-1 text-lg font-semibold text-gray-900"
                aria-expanded={isProductMenuOpen}
                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)} // Toggle 'Product' dropdown
              >
                Products
                <svg
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Product Dropdown for Mobile */}
              {isProductMenuOpen && (
                 <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                 <div className="p-4">
                   <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                     <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                       <svg
                         className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth="1.5"
                         stroke="currentColor"
                         aria-hidden="true"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                         />
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                         />
                       </svg>
                     </div>
                     <div className="flex-auto">
                       <a href="#" className="block font-semibold text-gray-900">
                         Analytics
                         <span className="absolute inset-0" />
                       </a>
                       <p className="mt-1 text-gray-600">Get a better understanding of your traffic</p>
                     </div>
                   </div>
                   {/* Additional dropdown items... */}
                 </div>
               </div>
              )}
              <a href="#" className="block text-lg font-semibold text-gray-900 mt-2">Contact</a>
            </div>
          )}
        </nav>
      </header>
    </section>
  );
};

export default Header;
