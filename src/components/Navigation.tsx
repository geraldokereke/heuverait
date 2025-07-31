'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

type NavDropdownProps = {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
};

const NavDropdown = ({ title, items, isOpen, onToggle }: NavDropdownProps) => {
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-white hover:text-blue-300 transition-colors duration-200 py-2"
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          {items.map((item: string, index: number) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: "SERVICES",
      items: ["Web Development", "Mobile Apps", "AI Solutions", "Cloud Services", "DevOps"]
    },
    {
      title: "INDUSTRIES",
      items: ["Fintech", "Healthcare", "E-commerce", "Education", "Manufacturing"]
    },
    {
      title: "OUR WORK",
      items: ["Portfolio", "Case Studies", "Success Stories", "Testimonials"]
    },
    {
      title: "ABOUT US",
      items: ["Company", "Team", "Careers", "Contact"]
    },
    {
      title: "INSIGHTS",
      items: ["Blog", "Whitepapers", "News", "Events"]
    }
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative inset-0">

      {/* Navigation */}
      <nav className="relative z-20 bg-green-200 bg-opacity-80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">is</span>
                </div> */}
                <div className="text-white">
                  <span className="text-xl font-light">Heuvera</span>
                  <span className="text-xl font-bold text-blue-400">soft</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <NavDropdown
                  key={index}
                  title={item.title}
                  items={item.items}
                  isOpen={openDropdown === index}
                  onToggle={() => handleDropdownToggle(index)}
                />
              ))}
              
              <a 
                href="mailto:info@intellectsoft.net" 
                className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                INFO@INTELLECTSOFT.NET
              </a>
              
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                GET IN TOUCH
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-95 backdrop-blur-sm">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <div key={index} className="py-2">
                  <button
                    className="flex items-center justify-between w-full text-left text-white hover:text-blue-300 transition-colors duration-200 font-medium"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === index && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block text-gray-300 hover:text-white transition-colors duration-200"
                          onClick={closeMobileMenu}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <a 
                  href="mailto:info@intellectsoft.net" 
                  className="block text-white hover:text-blue-300 transition-colors duration-200 font-medium py-2"
                >
                  INFO@INTELLECTSOFT.NET
                </a>
                
                <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 mt-4">
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

    </div>
  );
};

export default Navigation;