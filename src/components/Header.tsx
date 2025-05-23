
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-green-700 text-white py-4 fixed w-full top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">GreenLink</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><button onClick={() => scrollToSection('home')} className="hover:text-green-200 transition-colors">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-green-200 transition-colors">About</button></li>
            <li><button onClick={() => scrollToSection('features')} className="hover:text-green-200 transition-colors">Features</button></li>
            <li><button onClick={() => scrollToSection('buy')} className="hover:text-green-200 transition-colors">Buy</button></li>
            <li><button onClick={() => scrollToSection('sell')} className="hover:text-green-200 transition-colors">Sell</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-200 transition-colors">Contact</button></li>
          </ul>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-green-200 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-green-200 transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 hover:text-green-200 transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection('buy')} className="block w-full text-left py-2 hover:text-green-200 transition-colors">Buy</button></li>
              <li><button onClick={() => scrollToSection('sell')} className="block w-full text-left py-2 hover:text-green-200 transition-colors">Sell</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-green-200 transition-colors">Contact</button></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
