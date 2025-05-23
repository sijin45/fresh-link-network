
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="bg-green-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">GreenLink</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-green-200 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-200 transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-green-200 transition-colors">Features</a></li>
              <li><a href="#buy" className="hover:text-green-200 transition-colors">Buy</a></li>
              <li><a href="#sell" className="hover:text-green-200 transition-colors">Sell</a></li>
              <li><a href="#contact" className="hover:text-green-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:bg-green-600 rounded-md">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-green-600 rounded-md">About</a>
            <a href="#features" className="block px-3 py-2 hover:bg-green-600 rounded-md">Features</a>
            <a href="#buy" className="block px-3 py-2 hover:bg-green-600 rounded-md">Buy</a>
            <a href="#sell" className="block px-3 py-2 hover:bg-green-600 rounded-md">Sell</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-green-600 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
