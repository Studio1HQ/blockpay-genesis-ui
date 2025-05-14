
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-teal-900/80 backdrop-blur-lg border-b border-teal-900/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 flex items-center justify-center rounded">
            <span className="text-dark-teal-900 font-bold text-sm">BC</span>
          </div>
          <span className="text-xl font-semibold gradient-text">BlockPay</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-200 hover:text-teal-400 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-200 hover:text-teal-400 transition-colors">How It Works</a>
          <a href="#about" className="text-gray-200 hover:text-teal-400 transition-colors">About Us</a>
          <a href="#contact" className="text-gray-200 hover:text-teal-400 transition-colors">Contact</a>
        </nav>

        {/* Download Button */}
        <Button className="hidden md:flex items-center gap-2 bg-transparent border border-teal-500 hover:bg-teal-900/30 text-white">
          <Download className="h-4 w-4" /> Download App
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-teal-300" />
          ) : (
            <Menu className="h-6 w-6 text-teal-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-teal-50 px-4 py-4 border-b border-teal-900/30 animate-slide-up">
          <nav className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-white hover:text-teal-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-white hover:text-teal-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-teal-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-teal-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white mt-2">
              <Download className="h-4 w-4" /> Download App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
