import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Search } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-law-black bg-opacity-95 shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="lovable-uploads/RodLawOffceLogo.png"
            alt="Rodriguez Law Office"
            className="h-12 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex flex-col justify-center space-y-3">
            <a
              href="tel:5196823100"
              className="flex items-center  ms-auto text-law-gold hover:text-law-gold-light transition-colors duration-300"
            >
              <Phone className="mr-2 h-6 w-6" />
              <span className="border-l border-law-gold pl-2">(519) 682-3100</span>
              <Search className="ml-5 h-6 w-6 text-white" />
            </a>
            <span className="md:flex items-center space-x-8">
              <Link
                to="/about-us"
                className="text-white hover:text-law-gold transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/family-law"
                className="text-white hover:text-law-gold transition-colors duration-300"
              >
                Family Law
              </Link>
              <Link
                to="/divorce-law"
                className="text-white hover:text-law-gold transition-colors duration-300"
              >
                Divorce Law
              </Link>
              <Link
                to="/custody"
                className="text-white hover:text-law-gold transition-colors duration-300"
              >
                Custody
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-law-gold transition-colors duration-300"
              >
                Contact
              </Link>
            </span>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-law-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-law-black bg-opacity-95 py-4 px-6 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/practice-areas"
              className="text-white hover:text-law-gold transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-law-gold transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-law-gold transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:5196823100"
              className="flex items-center text-law-gold hover:text-law-gold-light transition-colors duration-300 py-2"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>(519) 682-3100</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
