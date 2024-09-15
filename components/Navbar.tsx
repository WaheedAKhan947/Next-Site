"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you're using ShadCN's UI button component
import { Menu } from 'lucide-react'; // Lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Waheed`s CV</Link>

        {/* Hamburger button for small screens */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <Menu className="text-white h-8 w-8" />
        </button>

        {/* Links - shown on larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link href="/education">
            <Button variant="outline" className="text-white">
              Education
            </Button>
          </Link>
          <Link href="/experience">
            <Button variant="outline" className="text-white">
            Experience
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline" className="text-white">
              Projects
            </Button>
          </Link>
          <Link href="/blogs">
            <Button variant="outline" className="text-white">
              Blogs
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="text-white">
              Contact
            </Button>
          </Link>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className="md:hidden bg-black-700 text-white space-y-4 p-4">
          <Link href="/experience" onClick={toggleMenu}>
            Experience
          </Link>
          <Link href="/skills" onClick={toggleMenu}>
            Skills
          </Link>
          <Link href="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link href="/testimonials" onClick={toggleMenu}>
            Testimonials
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
