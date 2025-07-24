'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from './svgs/logo';
import { ChevronDown, Code, Globe, Brain, Cloud, Shield, Users, BarChart, Headphones, HardDrive, Building, GraduationCap, Heart, Scale, MapPin, ShoppingCart, Factory, FileText, Calendar, Wrench, Laptop, BookOpen, Phone, ArrowRight, Star, Zap, ChevronRight, CalendarDays, PhoneCall, PhoneIcon } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [previousDropdown, setPreviousDropdown] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: 'Our Insight', href: '/' },
    {
      label: 'About Us',
      // dropdown: [
      //   { label: 'Who We Are', href: '/about/who' },
      //   { label: 'Our Team', href: '/about/team' },
      //   { label: 'Careers', href: '/careers' },
      //   { label: 'Partners', href: '/partners' },
      // ],
    },
    {
      label: 'Solutions',
      dropdown: [
        { label: 'Custom Software Development', href: '/solutions/custom', icon: Code },
        { label: 'Web & Mobile App Development', href: '/solutions/web-mobile', icon: Globe },
        { label: 'AI & Machine Learning Solutions', href: '/solutions/ai-ml', icon: Brain },
        { label: 'Cloud Services', href: '/solutions/cloud', icon: Cloud },
        { label: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield },
        { label: 'IT Consulting', href: '/solutions/it-consulting', icon: Users },
        { label: 'Data Analytics & BI', href: '/solutions/data-analytics', icon: BarChart },
        { label: 'Outsourcing & BPO', href: '/solutions/outsourcing', icon: Headphones },
        { label: 'Hardware & Infrastructure Services', href: '/solutions/hardware', icon: HardDrive },
      ],
      sidebar: {
        title: 'FEATURED SOLUTION',
        items: [
          {
            title: 'AI-Powered Enterprise Solutions',
            description: 'Transform your business with cutting-edge AI and machine learning technologies.',
            href: '/solutions/ai-enterprise',
            badge: 'Most Popular'
          },
          {
            title: 'Cloud Migration Services',
            description: 'Seamlessly migrate to the cloud with zero downtime.',
            href: '/solutions/cloud-migration'
          }
        ]
      }
    },
    {
      label: 'Industries',
      dropdown: [
        { label: 'Financial Services', href: '/industries/financial', icon: Building },
        { label: 'Education', href: '/industries/education', icon: GraduationCap },
        { label: 'Healthcare', href: '/industries/healthcare', icon: Heart },
        { label: 'Legal & Compliance', href: '/industries/legal', icon: Scale },
        { label: 'Government & Public Sector', href: '/industries/government', icon: MapPin },
        { label: 'E-commerce', href: '/industries/ecommerce', icon: ShoppingCart },
        { label: 'Engineering & Manufacturing', href: '/industries/engineering', icon: Factory },
      ],
      sidebar: {
        title: 'SUCCESS STORIES',
        items: [
          {
            title: 'FinTech Innovation Case Study',
            description: 'How we helped a leading bank modernize their digital infrastructure.',
            href: '/case-studies/fintech',
            badge: 'New'
          },
          {
            title: 'Healthcare Digital Transformation',
            description: 'Revolutionizing patient care through technology.',
            href: '/case-studies/healthcare'
          }
        ]
      }
    },
    {
      label: 'Case Studies',
      // dropdown: [
      //   { label: 'Success Stories', href: '/case-studies/success' },
      //   { label: 'Client Testimonials', href: '/case-studies/testimonials' },
      // ],
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'Blog', href: '/blog', icon: FileText },
        { label: 'Whitepapers', href: '/resources/whitepapers', icon: BookOpen },
        { label: 'Research & Reports', href: '/resources/reports', icon: BarChart },
        { label: 'Events & Webinars', href: '/resources/events', icon: Calendar },
      ],
      sidebar: {
        title: 'LATEST INSIGHTS',
        items: [
          {
            title: 'The Future of AI in Business',
            description: 'Essential insights for 2025 and beyond.',
            href: '/blog/ai-future-2025',
            badge: 'Trending'
          },
          {
            title: 'Cybersecurity Best Practices',
            description: 'Protect your business from emerging threats.',
            href: '/resources/cybersecurity-guide'
          }
        ]
      }
    },
    {
      label: 'Products',
      dropdown: [
        { label: 'AI Tools', href: '/products/ai-tools', icon: Brain },
        { label: 'SaaS Platforms', href: '/products/saas', icon: Cloud },
        { label: 'Rental Marketplace', href: '/products/rental', icon: ShoppingCart },
        { label: 'Educational Software', href: '/products/educational', icon: GraduationCap },
        { label: 'Internal Tools', href: '/products/internal', icon: Wrench },
      ],
      sidebar: {
        title: 'PRODUCT SPOTLIGHT',
        items: [
          {
            title: 'SmartRent Pro',
            description: 'Our flagship rental marketplace platform with advanced analytics.',
            href: '/products/smartrent-pro',
            badge: 'Featured'
          },
          {
            title: 'EduLearn Suite',
            description: 'Comprehensive educational software for modern learning.',
            href: '/products/edulearn-suite'
          }
        ]
      }
    },
    {
      label: 'Contact',
      // dropdown: [
      //   { label: 'Contact Us', href: '/contact' },
      //   { label: 'Request a Quote', href: '/request-quote' },
      // Book a Consultation will be a separate button
      // ],
    },
  ];

  const splitIndex = navItems.findIndex(item => item.label === 'Resources');
  const firstGroup = navItems.slice(0, splitIndex);
  const secondGroup = navItems.slice(splitIndex);

  const handleMouseEnter = (itemLabel: string, hasDropdown: boolean) => {
    // Clear any pending close timeout
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }

    if (!hasDropdown) {
      // Close dropdown immediately for non-link items
      setActiveDropdown(null);
      setPreviousDropdown(null);
      setIsTransitioning(false);
      return;
    }

    if (activeDropdown && activeDropdown !== itemLabel) {
      setPreviousDropdown(activeDropdown);
      setIsTransitioning(true);

      // Quick transition to new content
      setTimeout(() => {
        setActiveDropdown(itemLabel);
        setTimeout(() => {
          setIsTransitioning(false);
          setPreviousDropdown(null);
        }, 50);
      }, 200);
    } else {
      setActiveDropdown(itemLabel);
      setIsTransitioning(false);
    }
  };

  const handleMouseLeave = () => {
    // Set a timeout before closing the dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setPreviousDropdown(null);
      setIsTransitioning(false);
    }, 300); // Reduced delay to 300ms for better responsiveness

    setCloseTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    // Clear close timeout when hovering over dropdown
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Set timeout when leaving dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setPreviousDropdown(null);
      setIsTransitioning(false);
    }, 300);

    setCloseTimeout(timeout);
  };

  const renderDropdownContent = (item: any) => {
    const isActive = activeDropdown === item.label;
    const hasAnyDropdown = activeDropdown !== null;

    return (
      <div className='w-full'>
        <div
          className={`rounded-2xl fixed w-6/12 top-21 left-0 right-0 bg-white border border-[#D3D3D3] text-black z-10 overflow-hidden transition-all duration-300 ${hasAnyDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="flex relative">
            {/* Main dropdown content */}
            <div className={`flex-1 p-6 transition-all duration-300 ease-in-out ${isActive
              ? 'transform translate-x-0 opacity-100'
              : 'transform translate-x-full opacity-0 absolute'
              }`}>
              <div className="grid grid-cols-2 gap-2">
                {item.dropdown?.map((subItem: any) => {
                  const IconComponent = subItem.icon;
                  return (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="flex items-center px-3 py-3 rounded-md transition-colors group/item"
                    >
                      <div className="flex items-center gap-3">
                        {IconComponent && <IconComponent className="size-4 text-[#444444] group-hover/item:text-black transition-colors" />}
                        <span className="text-xs font-medium group-hover/item:font-semibold text-[#444444] group-hover/item:text-black">{subItem.label}</span>
                      </div>
                      <ChevronRight className="size-4 text-black opacity-0 group-hover/item:opacity-100 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-200 ease-out" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Sidebar content */}
            {item.sidebar && (
              <div className={`w-100 h-72 bg-[#fbfbfb] border-l border-l-[#D3D3D3] p-6 transition-all duration-300 ease-in-out ${isActive
                ? 'transform translate-x-0 opacity-100'
                : 'transform translate-x-full opacity-0 absolute'
                }`}>
                <div className="mb-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {item.sidebar.title}
                  </h3>
                  <div className="space-y-4">
                    {item.sidebar.items.map((sidebarItem: any, index: number) => (
                      <a
                        key={index}
                        href={sidebarItem.href}
                        className="block hover:bg-gray-700 p-3 rounded-md transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-semibold text-white group-hover/sidebar:text-green-400 transition-colors">
                            {sidebarItem.title}
                          </h4>
                          {sidebarItem.badge && (
                            <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full font-medium">
                              {sidebarItem.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {sidebarItem.description}
                        </p>
                        <div className="flex items-center mt-2 text-green-400 opacity-0 group-hover/sidebar:opacity-100 transition-opacity">
                          <span className="text-xs font-medium">Learn more</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className='top-0 sticky z-50 w-full h-20 bg-white border-b border-b-[#D3D3D3] text-gray-800 px-72 flex justify-between items-center'>
        {/* Left side: Logo */}
        <div className='w-40'>
          <Logo color='#000' height={50} width={130} />
        </div>

        {/* Middle: Navigation links */}
        <div className="relative w-8/12 flex items-center">
          <ul className="w-full flex items-center justify-between gap-10 font-semibold font-quicksand text-sm" onMouseLeave={handleMouseLeave}>
            {/* First group of nav items */}
            <div className="flex items-center gap-10">
              {firstGroup.map((item) => (
                <li
                  key={item.label}
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.label, !!item.dropdown)}
                >
                  {item.href ? (
                    <a href={item.href} className="group-hover:text-[#2cd16c] transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="cursor-pointer flex items-center group-hover:text-[#2cd16c] transition-colors">
                      {item.label}
                    </span>
                  )}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-full h-2 bg-transparent group-hover:block" />
                  )}
                  {item.dropdown && activeDropdown && renderDropdownContent(item)}
                </li>
              ))}
            </div>
            <div className='border-r border-r-[#D3D3D3] h-10' />
            {/* Second group of nav items */}
            <div className="flex items-center gap-10 text-[#999999]">
              {secondGroup.map((item) => (
                <li
                  key={item.label}
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.label, !!item.dropdown)}
                >
                  {item.href ? (
                    <a href={item.href} className="group-hover:text-[#2cd16c] transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="cursor-pointer flex items-center group-hover:text-[#2cd16c] transition-colors">
                      {item.label}
                    </span>
                  )}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-full h-2 bg-transparent group-hover:block" />
                  )}
                  {item.dropdown && activeDropdown && renderDropdownContent(item)}
                </li>
              ))}
            </div>
          </ul>
        </div>

        {/* Right side: Button */}
        <div className='w-40'>
          <button className="flex items-center group bg-[#2cd16c] text-sm font-semibold font-quicksand text-black px-5 py-2.5 rounded-full transition-colors">
            Get in Touch
            <PhoneIcon className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;