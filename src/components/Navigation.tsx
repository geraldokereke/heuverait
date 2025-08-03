"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ChevronRight, ArrowRight, Code, Globe, Brain, Cloud, Shield, Users, BarChart, Headphones, HardDrive, Building, GraduationCap, Heart, Scale, MapPin, ShoppingCart, Factory, FileText, Calendar, Wrench, Laptop, BookOpen, Phone, Star, Zap, Award, TrendingUp, Rocket, Target, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [previousDropdown, setPreviousDropdown] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "ABOUT US",
      items: [
        { label: "Who We Are", href: "/about/who", icon: Users, description: "Learn about our company story and values" },
        { label: "Our Team", href: "/about/team", icon: Users, description: "Meet the experts behind our success" },
        { label: "Mission & Vision", href: "/about/mission", icon: Star, description: "Our purpose and future aspirations" },
        { label: "Company Culture", href: "/about/culture", icon: Heart, description: "What makes us unique as a workplace" },
        { label: "Careers", href: "/careers", icon: Building, description: "Join our growing team of innovators" },
        { label: "Partners & Alliances", href: "/partners", icon: Users, description: "Strategic partnerships that drive success" }
      ],
      sidebar: {
        title: 'COMPANY HIGHLIGHTS',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop&auto=format',
        items: [
          {
            title: 'Our Journey',
            description: 'From startup to industry leader - discover our remarkable growth story and milestones.',
            href: '/about/journey',
            badge: 'Featured',
            icon: TrendingUp
          },
          // {
          //   title: 'Awards & Recognition',
          //   description: 'Industry accolades, certifications, and testimonials from satisfied clients worldwide.',
          //   href: '/about/awards',
          //   icon: Award
          // }
        ]
      }
    },
    {
      title: "SOLUTIONS",
      items: [
        { label: "Custom Software Development", href: "/solutions/custom", icon: Code, description: "Tailored solutions for your unique needs" },
        { label: "Web & Mobile App Development", href: "/solutions/web-mobile", icon: Globe, description: "Modern apps for web and mobile platforms" },
        { label: "AI & Machine Learning Solutions", href: "/solutions/ai-ml", icon: Brain, description: "Intelligent systems that learn and adapt" },
        { label: "Cloud Services", href: "/solutions/cloud", icon: Cloud, description: "Scalable cloud infrastructure and migration" },
        { label: "Cybersecurity", href: "/solutions/cybersecurity", icon: Shield, description: "Comprehensive security for digital assets" },
        { label: "IT Consulting", href: "/solutions/it-consulting", icon: Users, description: "Strategic technology guidance and planning" },
        { label: "Data Analytics & BI", href: "/solutions/data-analytics", icon: BarChart, description: "Transform data into actionable insights" },
        { label: "Outsourcing & BPO", href: "/solutions/outsourcing", icon: Headphones, description: "Efficient business process optimization" },
        { label: "Hardware & Infrastructure", href: "/solutions/hardware", icon: HardDrive, description: "Robust IT infrastructure solutions" }
      ],
      sidebar: {
        title: 'FEATURED SOLUTIONS',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&auto=format',
        items: [
          {
            title: 'AI-Powered Enterprise Solutions',
            description: 'Transform your business operations with cutting-edge AI and machine learning technologies.',
            href: '/solutions/ai-enterprise',
            badge: 'Most Popular',
            icon: Brain
          },
          // {
          //   title: 'Cloud Migration Services',
          //   description: 'Seamlessly migrate to the cloud with zero downtime and enhanced performance.',
          //   href: '/solutions/cloud-migration',
          //   icon: Cloud
          // }
        ]
      }
    },
    {
      title: "INDUSTRIES",
      items: [
        { label: "Financial Services", href: "/industries/financial", icon: Building, description: "Banking, fintech, and financial solutions" },
        { label: "Healthcare", href: "/industries/healthcare", icon: Heart, description: "Medical technology and healthcare systems" },
        { label: "Education", href: "/industries/education", icon: GraduationCap, description: "EdTech and learning management systems" },
        { label: "Government & Public Sector", href: "/industries/government", icon: MapPin, description: "Public service digital transformation" },
        { label: "Legal & Compliance", href: "/industries/legal", icon: Scale, description: "Legal tech and compliance solutions" },
        { label: "E-commerce", href: "/industries/ecommerce", icon: ShoppingCart, description: "Online retail and marketplace platforms" },
        { label: "Engineering & Manufacturing", href: "/industries/engineering", icon: Factory, description: "Industrial automation and IoT solutions" }
      ],
      sidebar: {
        title: 'SUCCESS STORIES',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&auto=format',
        items: [
          // {
          //   title: 'FinTech Innovation Case Study',
          //   description: 'How we helped a leading bank modernize their digital infrastructure and improve customer experience.',
          //   href: '/case-studies/fintech',
          //   badge: 'New',
          //   icon: Building
          // },
          {
            title: 'Healthcare Digital Transformation',
            description: 'Revolutionizing patient care through innovative technology and seamless integration.',
            href: '/case-studies/healthcare',
            icon: Heart
          }
        ]
      }
    },
    {
      title: "WORK",
      items: [
        { label: "Case Studies", href: "/work/case-studies", icon: FileText, description: "Detailed project breakdowns and results" },
        { label: "Success Stories", href: "/work/success", icon: Star, description: "Client transformations and achievements" },
        { label: "Client Testimonials", href: "/work/testimonials", icon: Heart, description: "What our clients say about us" },
        { label: "Project Showcase", href: "/work/showcase", icon: Globe, description: "Visual portfolio of our best work" },
        { label: "Our Impact", href: "/work/impact", icon: BarChart, description: "Measurable results and business value" }
      ],
      sidebar: {
        title: 'CLIENT SPOTLIGHT',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop&auto=format',
        items: [
          {
            title: 'Fortune 500 Transformation',
            description: 'Complete digital overhaul for a major corporation, resulting in 40% efficiency improvement.',
            href: '/work/fortune-500',
            badge: 'Trending',
            icon: Rocket
          },
          // {
          //   title: 'Startup Success Story',
          //   description: 'From concept to IPO in 24 months with our comprehensive technology partnership.',
          //   href: '/work/startup-success',
          //   icon: Target
          // }
        ]
      }
    },
    {
      title: "RESOURCES",
      items: [
        { label: "Blog & Insights", href: "/blog", icon: FileText, description: "Latest industry trends and insights" },
        { label: "Whitepapers & eBooks", href: "/resources/whitepapers", icon: BookOpen, description: "In-depth research and analysis" },
        { label: "Industry Reports", href: "/resources/reports", icon: BarChart, description: "Market research and data insights" },
        { label: "Events & Webinars", href: "/resources/events", icon: Calendar, description: "Educational events and workshops" },
        { label: "Technical Guides", href: "/resources/guides", icon: Wrench, description: "Step-by-step implementation guides" }
      ],
      sidebar: {
        title: 'LATEST INSIGHTS',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&auto=format',
        items: [
          {
            title: 'The Future of AI in Business',
            description: 'Essential insights for 2025 and beyond - how AI will reshape industries and business models.',
            href: '/blog/ai-future-2025',
            badge: 'Trending',
            icon: Brain
          },
          // {
          //   title: 'Cybersecurity Best Practices',
          //   description: 'Protect your business from emerging threats with our comprehensive security guide.',
          //   href: '/resources/cybersecurity-guide',
          //   icon: Shield
          // }
        ]
      }
    },
    {
      title: "PRODUCTS",
      items: [
        { label: "AI Tools & Platforms", href: "/products/ai-tools", icon: Brain, description: "Intelligent automation and analytics tools" },
        { label: "SaaS Solutions", href: "/products/saas", icon: Cloud, description: "Cloud-based software solutions" },
        { label: "Educational Software", href: "/products/educational", icon: GraduationCap, description: "Learning management and educational tools" },
        { label: "Business Tools", href: "/products/business", icon: Wrench, description: "Productivity and workflow optimization" },
        { label: "Rental Marketplace", href: "/products/rental", icon: ShoppingCart, description: "Advanced marketplace platform solutions" }
      ],
      sidebar: {
        title: 'PRODUCT SPOTLIGHT',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&auto=format',
        items: [
          // {
          //   title: 'SmartRent Pro',
          //   description: 'Our flagship rental marketplace platform with advanced analytics, AI-powered matching, and seamless transactions.',
          //   href: '/products/smartrent-pro',
          //   badge: 'Featured',
          //   icon: ShoppingCart
          // },
          {
            title: 'EduLearn Suite',
            description: 'Comprehensive educational software suite for modern learning with interactive features and progress tracking.',
            href: '/products/edulearn-suite',
            icon: GraduationCap
          }
        ]
      }
    }
  ];

  const handleMouseEnter = (itemTitle: string, hasDropdown: boolean) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }

    if (!hasDropdown) {
      setActiveDropdown(null);
      setPreviousDropdown(null);
      setIsTransitioning(false);
      return;
    }

    if (activeDropdown && activeDropdown !== itemTitle) {
      setPreviousDropdown(activeDropdown);
      setIsTransitioning(true);

      setTimeout(() => {
        setActiveDropdown(itemTitle);
        setTimeout(() => {
          setIsTransitioning(false);
          setPreviousDropdown(null);
        }, 50);
      }, 200);
    } else {
      setActiveDropdown(itemTitle);
      setIsTransitioning(false);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setPreviousDropdown(null);
      setIsTransitioning(false);
    }, 300);

    setCloseTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setPreviousDropdown(null);
      setIsTransitioning(false);
    }, 300);

    setCloseTimeout(timeout);
  };

  const renderDropdownContent = (item: any) => {
    const isActive = activeDropdown === item.title;
    const hasAnyDropdown = activeDropdown !== null;

    return (
      <div className='w-full'>
        <div
          className={`fixed w-12/12 top-12 2xl:top-16 left-0 right-0 bg-white border border-slate-200 text-black z-10 overflow-hidden transition-all duration-300 shadow-2xl ${hasAnyDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="flex relative px-4 md:px-10 lg:px-26 xl:px-48 2xl:px-16 mx-auto max-w-screen-2xl">
            <div className={`flex-1 p-8 transition-all duration-300 ease-in-out ${isActive
              ? 'transform translate-x-0 opacity-100'
              : 'transform translate-x-full opacity-0 absolute'
              }`}>
              <div className="grid grid-cols-2 gap-0 xl:gap-3">
                {item.items?.map((subItem: any) => {
                  const IconComponent = subItem.icon;
                  return (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 group/item hover:bg-slate-50 hover:shadow-sm border border-transparent hover:border-slate-100"
                    >
                      <div className="flex-shrink-0 mt-0 2xl:mt-1">
                        {IconComponent && (
                          <div className="size-6 xl:size-8 2xl:size-10 rounded-lg bg-slate-100 group-hover/item:bg-[#41a7ad] transition-colors duration-200 flex items-center justify-center">
                            <IconComponent className="size-3 xl:size-4 2xl:size-5 text-slate-600 group-hover/item:text-white transition-colors duration-200" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0 2xl:mb-1">
                          <h3 className="text-[10px] xl:text-xs 2xl:text-sm font-semibold text-slate-900 group-hover/item:text-[#41a7ad] transition-colors duration-200">
                            {subItem.label}
                          </h3>
                          <ChevronRight className="size-4 text-slate-400 group-hover/item:text-[#41a7ad] opacity-0 group-hover/item:opacity-100 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-200 flex-shrink-0" />
                        </div>
                        <p className="text-[8px] xl:text-[10px] 2xl:text-xs text-slate-600 leading-relaxed">
                          {subItem.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Sidebar section */}
            {item.sidebar && (
              <div className={`w-96 bg-gradient-to-br from-slate-50 to-slate-100 border-l border-slate-200 transition-all duration-300 ease-in-out ${isActive
                ? 'transform translate-x-0 opacity-100'
                : 'transform translate-x-full opacity-0 absolute right-0'
                }`}>

                {/* Header Image */}
                <div className="relative h-36 xl:h-40 2xl:h-44 overflow-hidden">
                  <img
                    src={item.sidebar.image}
                    alt={item.sidebar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {item.sidebar.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-5">
                    {item.sidebar.items.map((sidebarItem: any, index: number) => {
                      const SidebarIcon = sidebarItem.icon;
                      return (
                        <a
                          key={index}
                          href={sidebarItem.href}
                          className="block bg-white hover:bg-slate-50 p-5 rounded-xl transition-all duration-200 group/sidebar hover:shadow-md border border-slate-200 hover:border-[#41a7ad]/20"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="size-6 xl:size-8 2xl:size-10 rounded-lg bg-[#41a7ad]/10 group-hover/sidebar:bg-[#41a7ad] transition-colors duration-200 flex items-center justify-center">
                                <SidebarIcon className="size-3 xl:size-4 2xl:size-5 text-[#41a7ad] group-hover/sidebar:text-white transition-colors duration-200" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-0 2xl:mb-2">
                                <h4 className="text-[10px] xl:text-xs 2xl:text-sm font-semibold text-slate-900 group-hover/sidebar:text-[#41a7ad] transition-colors duration-200 leading-tight">
                                  {sidebarItem.title}
                                </h4>
                                {sidebarItem.badge && (
                                  <span className="text-[8px] xl:text-[10px] 2xl:text-xs bg-[#41a7ad] text-white px-2.5 py-1 rounded-full font-medium flex-shrink-0 ml-2">
                                    {sidebarItem.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                                {sidebarItem.description}
                              </p>
                              <div className="flex items-center text-[#41a7ad] opacity-0 group-hover/sidebar:opacity-100 transition-all duration-200 transform translate-y-1 group-hover/sidebar:translate-y-0">
                                <span className="text-[8px] xl:text-[10px] 2xl:text-xs font-semibold">Learn more</span>
                                <ArrowRight className="size-2 2xl:size-3 ml-1" />
                              </div>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  {/* Call to Action */}
                  {/* <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <p className="text-xs text-slate-600 mb-3">Ready to get started?</p>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-[#41a7ad] hover:bg-[#007145] text-white text-xs font-semibold rounded-lg transition-colors duration-200"
                      >
                        <span>Contact Us</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const handleMobileDropdownToggle = (index: number) => {
    setMobileOpenDropdown(mobileOpenDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Determine navbar styles based on scroll and dropdown state
  const getNavbarStyles = () => {
    const hasDropdown = activeDropdown !== null;

    if (hasDropdown) {
      // When dropdown is open, always show white background
      return 'bg-white backdrop-blur-lg shadow-lg border-b border-slate-100';
    } else if (scrolled) {
      // When scrolled without dropdown
      return 'bg-white backdrop-blur-lg shadow-lg border-b border-slate-100';
    } else {
      // Default transparent state
      return 'bg-transparent';
    }
  };

  // Determine text colors based on navbar state
  const getTextStyles = () => {
    const hasDropdown = activeDropdown !== null;

    if (hasDropdown || scrolled) {
      return 'text-slate-700 hover:text-slate-900';
    } else {
      return 'text-white/90 hover:text-white';
    }
  };

  // Determine underline color
  const getUnderlineColor = () => {
    const hasDropdown = activeDropdown !== null;

    if (hasDropdown || scrolled) {
      return 'bg-[#41a7ad]';
    } else {
      return 'bg-white';
    }
  };

  // Determine CTA button styles
  const getCTAStyles = () => {
    const hasDropdown = activeDropdown !== null;

    if (hasDropdown || scrolled) {
      return 'bg-black text-white hover:bg-black/90 shadow-lg hover:shadow-xl';
    } else {
      return 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg';
    }
  };

  // Determine logo color
  const getLogo = () => {
    const hasDropdown = activeDropdown !== null;

    if (hasDropdown || scrolled) {
      return "/logo.png";
    } else {
      return "/logo-white.png";
    }
  };

  // Determine mobile menu button color
  const getMobileButtonColor = () => {
    const hasDropdown = activeDropdown !== null;

    if (hasDropdown || scrolled) {
      return 'text-slate-700 hover:bg-slate-100';
    } else {
      return 'text-white hover:bg-white/10';
    }
  };

  return (
    <div className="relative">

      {/* Navigation */}
      <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-0 ${getNavbarStyles()}`}>
        <div className="px-4 md:px-10 lg:px-26 xl:px-48 2xl:px-16 mx-auto max-w-screen-2xl">
          <div className="flex justify-between items-center h-16 lg:h-12 xl:h-18">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="">
                <div className="flex items-center gap-2 h-5 md:h-3 xl:h-4 2xl:h-6">
                  <Image
                    src={`${getLogo()}`}
                    alt="Heuvera Logo"
                    width={120}
                    height={120}
                    className="transition-all duration-500 ease-in-out h-full w-full"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center space-x-[0.5px] xl:space-x-[1px] 2xl:space-x-2"
              onMouseLeave={handleMouseLeave}
            >
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group h-16 xl:h-18 flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.title, true)}
                >
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 lg:text-[6px] xl:text-[8px] 2xl:text-sm font-medium rounded-lg transition-colors duration-0 relative whitespace-nowrap ${getTextStyles()}`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`size-2 2xl:size-4 flex-shrink-0 transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180" : "rotate-0"}`}
                    />
                    <span className={`absolute inset-x-3 bottom-[-11] xl:bottom-[-14] 2xl:bottom-[-11] h-0.5 ${getUnderlineColor()} transition-transform duration-200 origin-left ${activeDropdown === item.title ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </button>

                  {activeDropdown && renderDropdownContent(item)}
                </div>
              ))}

              {/* Contact Link */}
              <a
                href="#contact"
                className={`px-3 py-2 text-[6px] xl:text-[8px] 2xl:text-sm font-medium rounded-lg transition-colors duration-0 relative group whitespace-nowrap ${getTextStyles()} hover:bg-opacity-10`}
                onMouseEnter={() => handleMouseEnter('CONTACT', false)}
              >
                CONTACT
                <span className={`absolute inset-x-3 bottom-0 h-0.5 ${getUnderlineColor()} transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100`}></span>
              </a>
            </div>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button className={`hidden lg:flex items-center px-2 xl:px-3 2xl:px-6 py-1 xl:py-1.5 2xl:py-2.5 text-[6px] xl:text-[8px] 2xl:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${getCTAStyles()}`}>
                GET IN TOUCH
              </button>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-lg transition-colors duration-200 ${getMobileButtonColor()}`}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
              onClick={closeMobileMenu}
            />

            <div className="relative w-80 max-w-[90vw] h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-light text-slate-900">Heuvera</span>
                </div>
                <button
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="flex-1 px-6 py-4 overflow-y-auto">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <div key={index} className="border-b border-slate-50 pb-2 mb-2 last:border-b-0">
                      <button
                        className="flex items-center justify-between w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 font-medium"
                        onClick={() => handleMobileDropdownToggle(index)}
                      >
                        <span className="text-sm">{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === index ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileOpenDropdown === index && (
                        <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-slate-600 hover:text-[#41a7ad] hover:bg-slate-50 rounded-lg transition-colors duration-200"
                              onClick={closeMobileMenu}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="border-b border-slate-50 pb-2 mb-2">
                    <a
                      href="#contact"
                      className="flex items-center w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 font-medium"
                      onClick={closeMobileMenu}
                    >
                      <span className="text-sm">CONTACT</span>
                    </a>
                  </div>
                </nav>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <button className="flex items-center justify-center w-full bg-black hover:bg-black/80 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
                  GET IN TOUCH
                </button>

                <div className="mt-4 text-center">
                  <a
                    href="mailto:info@heuvera.com"
                    className="text-sm text-slate-600 hover:text-[#41a7ad] transition-colors duration-200"
                  >
                    info@heuvera.com
                  </a>
                  <p className="text-xs text-slate-500 mt-2">© 2024 Heuvera. All rights reserved.</p>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes slide-in-right {
                from { 
                  transform: translateX(100%); 
                  opacity: 0; 
                }
                to { 
                  transform: translateX(0); 
                  opacity: 1; 
                }
              }
              @keyframes fade-in {
                from { 
                  opacity: 0; 
                  transform: translateY(-10px); 
                }
                to { 
                  opacity: 1; 
                  transform: translateY(0); 
                }
              }
              .animate-slide-in-right {
                animation: slide-in-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
              }
              .animate-fade-in {
                animation: fade-in 0.2s ease-out both;
              }
            `}</style>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;