import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/listings', label: 'Listings' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-background shadow-[var(--shadow-card)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-xl font-bold text-real-estate-navy">
              Sara Buffie <span className="text-real-estate-gold">|</span> <span className="text-real-estate-text font-medium">Winnipeg Realtor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(path)
                      ? 'text-real-estate-navy border-b-2 border-real-estate-gold'
                      : 'text-real-estate-text hover:text-real-estate-navy'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/listings">
              <Button className="bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold px-6">
                View Listings
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-real-estate-navy hover:text-real-estate-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(path)
                      ? 'text-real-estate-navy bg-real-estate-light'
                      : 'text-real-estate-text hover:text-real-estate-navy hover:bg-real-estate-light'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/listings" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold">
                    View Listings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;