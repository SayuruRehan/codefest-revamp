"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sarala } from "next/font/google";

const sarala = Sarala({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [
    { id: "home", name: "Home", path: "/" },
    {
      id: "competition-details",
      name: "Competition Details",
      path: "/competition-details",
    },
    { id: "gallery", name: "Gallery", path: "/gallery" },
    { id: "registration", name: "Registration", path: "/" },
    { id: "workshops", name: "Workshops", path: "/" },
    { id: "contact", name: "Contact Us", path: "/Contact" },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    setIsOpen(false); // close mobile menu
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div
          className={`bg-white/20 backdrop-blur-md rounded-xl px-3 py-1 shadow-lg ${sarala.className}`}
        >
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  onClick={() => handleItemClick(item.id)}
                  className={`group relative text-sm transition-all duration-300 whitespace-nowrap ${
                    activeItem === item.id
                      ? "text-black font-medium"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div
          className={`bg-white/20 backdrop-blur-md  rounded-2xl px-3 py-0.5 shadow-lg ${sarala.className}`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => handleItemClick("home")}
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={50}
                className="w-auto h-10 object-contain"
              />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-3 py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    onClick={() => handleItemClick(item.id)}
                    className={`group relative block px-2 py-1.5 text-sm transition-all whitespace-nowrap ${
                      activeItem === item.id
                        ? "text-gray-900 font-medium"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <span>{item.name}</span>
                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
