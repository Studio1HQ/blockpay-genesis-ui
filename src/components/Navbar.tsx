import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-dark-teal-900/80 border-teal-900/30' 
        : 'bg-white/80 border-gray-200/50'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 flex items-center justify-center rounded">
            <span className="text-dark-teal-900 font-bold text-sm">BC</span>
          </div>
          <span className="text-xl font-semibold gradient-text">BlockPay</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className={`transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}>Features</a>
          <a href="#how-it-works" className={`transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}>How It Works</a>
          <a href="#about" className={`transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}>About Us</a>
          <a href="#contact" className={`transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}>Contact</a>
        </nav>

        {/* Download Button */}
        <Button className={`hidden md:flex items-center gap-2 bg-transparent border border-teal-500 transition-colors ${
          theme === 'dark' 
            ? 'hover:bg-teal-900/30 text-white' 
            : 'hover:bg-teal-50 text-teal-700'
        }`}>
          <Download className="h-4 w-4" /> Download App
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${theme === 'dark' ? 'text-teal-300' : 'text-teal-600'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${theme === 'dark' ? 'text-teal-300' : 'text-teal-600'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-dark-teal-900/95 border-teal-900/30' 
            : 'bg-white/95 border-gray-200/50'
        }`}>
          <nav className="flex flex-col gap-4 p-4">
            <a href="#features" className={`transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}>Features</a>
            <a href="#how-it-works" className={`transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}>How It Works</a>
            <a href="#about" className={`transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}>About Us</a>
            <a href="#contact" className={`transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}>Contact</a>
            <Button className={`items-center gap-2 bg-transparent border border-teal-500 mt-2 transition-colors ${
              theme === 'dark' 
                ? 'hover:bg-teal-900/30 text-white' 
                : 'hover:bg-teal-50 text-teal-700'
            }`}>
              <Download className="h-4 w-4" /> Download App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
