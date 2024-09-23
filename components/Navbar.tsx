"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN's UI button component
import { X ,Menu } from "lucide-react"; // Lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Waheed`s CV
        </Link>

        {/* Hamburger button for small screens */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="text-white h-8 w-8" /> // Show X when the menu is open
          ) : (
            <Menu className="text-white h-8 w-8" /> // Show Menu when the menu is closed
          )}
        </button>

        {/* Links - shown on larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link href="/education">
            <Button variant="outline" size="sm" className="text-white">
              Education
            </Button>
          </Link>
          <Link href="/experience">
            <Button variant="outline" size="sm" className="text-white">
              Experience
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline" size="sm" className="text-white">
              Projects
            </Button>
          </Link>
          <Link href="/blogs">
            <Button variant="outline" size="sm" className="text-white">
              Blogs
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="sm" className="text-white">
              Contact
            </Button>
          </Link>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 bg-black-700 text-white space-y-4 p-4">
          <Link href="/education" onClick={toggleMenu}>
            <Button variant="outline" size="sm" className="text-white w-full text-left">
              Education
            </Button>
          </Link>
          <Link href="/experience" onClick={toggleMenu}>
            <Button variant="outline" size="sm" className="text-white w-full text-left">
              Experience
            </Button>
          </Link>
          <Link href="/projects" onClick={toggleMenu}>
            <Button variant="outline" size="sm" className="text-white w-full text-left">
              Projects
            </Button>
          </Link>
          <Link href="/blogs" onClick={toggleMenu}>
            <Button variant="outline" size="sm" className="text-white w-full text-left">
              Blogs
            </Button>
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            <Button variant="outline" size="sm" className="text-white w-full text-left">
              Contact
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
