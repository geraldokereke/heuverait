
"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ChevronRight, ArrowRight, Brain, Users, Heart, TrendingUp, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ComingSoonModal from "./ComingSoonModal";
import { SolutionsData } from "@/data/SolutionsData";
import { IndustriesData } from "@/data/IndustriesData";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<number | null>(null);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

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
      title: "About Us",
      items: [
        { label: "Who We Are", href: "/about-us/who-we-are", icon: Users, description: "Learn about our company story and values" },
        { label: "Our Team", href: "/about-us/team", icon: Users, description: "Meet the experts behind our success" },
        // { label: "Careers", href: "/careers", icon: Building, description: "Join our growing team of innovators" },
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
        ]
      }
    },
    {
      title: "Solutions",
      items: SolutionsData.slice(3).map((solution) => ({
        label: solution.name,
        href: `/solutions/${solution.slug}`,
        icon: solution.icon,
        description: solution.description
      })),
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
        ]
      }
    },
    {
      title: "Industries",
      items: IndustriesData.slice(7).map((industry) => ({
        label: industry.name,
        href: `/industries/${industry.slug}`,
        icon: industry.icon,
        description: industry.description
      })),
      sidebar: {
        title: 'SUCCESS STORIES',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&auto=format',
        items: [
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
      title: "Portfolio",
      href: "/work/portfolio",
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
        ]
      }
    },
    // {
    //   title: "Resources",
    //   href: "",
    //   items: [
    //     // { label: "Whitepapers & Insights", href: "/resources/whitepapers", icon: BookOpen, description: "In-depth research and technical analysis" },
    //     { label: "Case Studies", href: "/resources/case-studies", icon: FileText, description: "Real-world client success stories" },
    //   ],
    //   sidebar: {
    //     title: 'LATEST INSIGHTS',
    //     image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&auto=format',
    //     items: [
    //       {
    //         title: 'The Future of AI in Business',
    //         description: 'Essential insights for 2025 and beyond - how AI will reshape industries and business models.',
    //         href: '/blog/ai-future-2025',
    //         badge: 'Trending',
    //         icon: Brain
    //       },
    //     ]
    //   }
    // },
    // {
    //   title: "Products",
    //   items: ProductsData.map((product) => ({
    //     label: product.name,
    //     href: `/products/${product.slug}`,
    //     icon: product.icon,
    //     description: product.description
    //   })),
    //   sidebar: {
    //     title: 'FEATURED PRODUCTS',
    //     image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&auto=format',
    //     items: ProductsData.slice(0, 2).map(product => ({
    //       title: product.name,
    //       description: product.description,
    //       href: `/products/${product.slug}`,
    //       icon: product.icon
    //     }))
    //   }
    // },
  ];


  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoveredSidebar, setHoveredSidebar] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (itemTitle: string, hasDropdown: boolean) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    if (hasDropdown) {
      setActiveDropdown(itemTitle);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
      setHoveredSidebar(null);
    }, 200);
    setCloseTimeout(timeout);
  };

  const renderDropdownContent = (item: any) => {
    const isActive = activeDropdown === item.title;

    return (
      <div
        className={`fixed top-16 left-0 right-0 transition-all duration-300 ${isActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        onMouseEnter={() => {
          if (closeTimeout) clearTimeout(closeTimeout);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-[#0A0A0A]/90 backdrop-blur-xl shadow-2xl">
          <div className="max-w-screen-2xl mx-auto px-16 py-8">
            <div className="grid grid-cols-12 gap-6">
              {/* Main Content - 8 columns */}
              <div className="col-span-8">
                {/* Section Header */}
                <div className="mb-6 pb-4 border-b border-white/20">
                  <h3 className="text-xs font-semibold text-[#41a7ad] tracking-wider uppercase mb-1">
                    Explore {item.title}
                  </h3>
                  <p className="text-sm text-slate-200">Discover our comprehensive offerings</p>
                </div>

                {/* Grid Items */}
                <div className="grid grid-cols-2 gap-4">
                  {item.items?.map((subItem: any, idx: number) => {
                    const IconComponent = subItem.icon;
                    const isHovered = hoveredItem === idx;

                    return (
                      <a
                        key={idx}
                        href={subItem.href}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-5 transition-all duration-300 hover:border-[#41a7ad]/30 hover:shadow-lg hover:-translate-y-1"
                        onMouseEnter={() => setHoveredItem(idx)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Gradient Background on Hover */}
                        {/* <div className={`absolute inset-0 bg-gradient-to-br from-[#41a7ad]/5 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                          }`}></div> */}

                        {/* Corner Accent */}
                        {/* <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#41a7ad]/10 to-transparent rounded-bl-full transition-all duration-300 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
                          }`}></div> */}

                        <div className="relative flex items-start gap-4">
                          {/* Icon Container */}
                          <div className="relative">
                            <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 from-[#41a7ad] to-[#41a7ad]/80' : ''
                              }`}>
                              {IconComponent && (
                                <IconComponent className={`w-6 h-6 transition-colors duration-300 text-slate-200`} />
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className={`text-sm font-semibold transition-colors duration-300 ${isHovered ? 'text-[#41a7ad]' : 'text-slate-200'
                                }`}>
                                {subItem.label}
                              </h4>
                              <ChevronRight className={`w-4 h-4 text-slate-400 transition-all duration-300 ${isHovered ? 'text-[#41a7ad] translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'
                                }`} />
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                              {subItem.description}
                            </p>

                            {/* Progress Bar */}
                            {/* <div className="mt-3 h-0.5 rounded-full overflow-hidden">
                              <div className={`h-full bg-gradient-to-r from-[#41a7ad] to-[#41a7ad]/50 transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'
                                }`}></div>
                            </div> */}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#41a7ad] hover:gap-3 transition-all duration-300 group">
                    <span>View all {item.title.toLowerCase()}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              {/* Sidebar - 4 columns */}
              {item.sidebar && (
                <div className="col-span-4 flex items-start gap-6">
                  <div className="h-full w-1 bg-white/10"/>
                  <div className="sticky top-8 border border-white/10 bg-[#121212] rounded-2xl overflow-hidden border border-white/10 shadow-sm">
                    {/* Header Image with Overlay */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={item.sidebar.image}
                        alt={item.sidebar.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Animated Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#41a7ad]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute bottom-4 left-5 right-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1 h-4 bg-[#41a7ad] rounded-full"></div>
                          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                            {item.sidebar.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {item.sidebar.items.map((sidebarItem: any, idx: number) => {
                        const SidebarIcon = sidebarItem.icon;
                        const isSidebarHovered = hoveredSidebar === idx;

                        return (
                          <a
                            key={idx}
                            href={sidebarItem.href}
                            className="group relative block bg-[#121212] rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/10 hover:border-[#41a7ad]/30 overflow-hidden"
                            onMouseEnter={() => setHoveredSidebar(idx)}
                            onMouseLeave={() => setHoveredSidebar(null)}
                          >
                            <div className="relative">
                              <div className="flex items-start gap-4">
                                {/* Icon */}
                                {SidebarIcon && (
                                  <div className="relative">
                                    <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 ${isSidebarHovered ? 'scale-110' : ''
                                      }`}>
                                      <SidebarIcon className={`w-6 h-6 transition-colors duration-300 text-white`} />
                                    </div>
                                  </div>
                                )}

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between mb-2">
                                    <h4 className={`text-sm font-semibold leading-tight transition-colors duration-300 ${isSidebarHovered ? 'text-[#41a7ad]' : 'text-slate-200'
                                      }`}>
                                      {sidebarItem.title}
                                    </h4>
                                    {sidebarItem.badge && (
                                      <span className="text-[10px] bg-[#41a7ad] text-white px-2 py-1 rounded-full font-medium whitespace-nowrap">
                                        {sidebarItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                                    {sidebarItem.description}
                                  </p>

                                  {/* Action Link */}
                                  <div className={`flex items-center gap-1 text-[#41a7ad] font-medium transition-all duration-300 ${isSidebarHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                                    }`}>
                                    <span className="text-xs">Learn more</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </div>
                                </div>
                              </div>

                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Accent line at top */}
          <div className="h-1 bg-gradient-to-r from-[#41a7ad] via-[#41a7ad]/50 to-transparent"></div>
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

  // FIXED: Determine mobile menu button color - now properly handles scrolled state
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
      {/* Modal for Coming Soon */}
      <ComingSoonModal open={comingSoonOpen} onClose={() => setComingSoonOpen(false)} />

      {/* Navigation */}
      <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A0A0A]/70 backdrop-blur-md`}>
        <div className="px-4 md:px-10 lg:px-26 xl:px-16 2xl:px-16 mx-auto max-w-screen-2xl">
          {/* FIXED: Consistent height across all screen sizes - removed lg:h-12 */}
          <div className="flex justify-between items-center h-12 xl:h-16 2xl:h-18">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="">
                <div className="flex items-center gap-2 h-6 w-28 lg:w-20 xl:w-24 2xl:w-28 md:h-6 lg:h-4 xl:h-5 2xl:h-6">
                  <Image
                    src={`/logo-white.png`}
                    alt="Heuvera Logo"
                    width={120}
                    height={120}
                    className="transition-all duration-500 ease-in-out h-full w-full object-fit"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center space-x-[0.5px] xl:space-x-[1px] 2xl:space-x-2"
              onMouseLeave={handleMouseLeave}
            >
              {navItems.map((item, index) => {
                const hasDropdown = Array.isArray(item.items) && item.items.length > 0;
                return (
                  <div
                    key={index}
                    className="relative group h-16 xl:h-16 2xl:h-18 flex items-center"
                    onMouseEnter={() => handleMouseEnter(item.title, hasDropdown)}
                  >
                    <a
                      href={item.href}
                      className={`cursor-pointer flex items-center space-x-1 px-3 py-2 lg:text-[10px] xl:text-[13px] 2xl:text-sm font-medium rounded-lg transition-colors duration-300 relative whitespace-nowrap text-white/90 hover:text-white`}
                    >
                      <span>{item.title}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`size-2 xl:size-3 2xl:size-4 flex-shrink-0 transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180" : "rotate-0"}`}
                        />
                      )}
                      <span className={`absolute inset-x-3 z-10 bottom-[-11] xl:bottom-[-14] 2xl:bottom-[-11] h-0.5 bg-[#41a7ad] transition-transform duration-200 origin-left ${activeDropdown === item.title ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {hasDropdown && activeDropdown === item.title && renderDropdownContent(item)}
                  </div>
                );
              })}

              {/* Contact Link */}
              <Link
                href="/contact-us"
                className={`px-3 py-2 text-[10px] xl:text-[13px] 2xl:text-sm font-medium rounded-lg transition-colors duration-300 relative group whitespace-nowrap text-white/90 hover:text-white hover:bg-opacity-10`}
                onMouseEnter={() => handleMouseEnter('CONTACT', false)}
              >
                Contact
                <span className={`absolute inset-x-3 bottom-[-11] xl:bottom-[-14] 2xl:bottom-[-11] h-0.5 bg-[#41a7ad] transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100`}></span>
              </Link>
            </div>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <a href="/contact-us" className={`hidden font-poppins lg:flex items-center px-2 xl:px-3 2xl:px-6 py-1 xl:py-1.5 2xl:py-3 text-[10px] xl:text-[13px] 2xl:text-sm font-medium rounded-md transition-all duration-300 whitespace-nowrap bg-black text-[#41a7ad] border border-[#41a7ad] hover:bg-[#41A7AD] hover:text-black shadow-lg hover:shadow-xl`}>
                Get In Touch
                <svg className="ml-2 size-3 md:size-4 lg:size-2 xl:size-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* Mobile menu button - FIXED: Now properly visible when scrolled */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-lg transition-colors duration-200 ${getMobileButtonColor()}`}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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

        {/* Mobile Navigation - Now completely separate with fixed positioning */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[100] h-screen flex justify-end">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
              onClick={closeMobileMenu}
            />

            <div className="relative w-80 max-w-[90vw] h-screen bg-white shadow-2xl flex flex-col animate-slide-in-right z-[101] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
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

              <div className="flex-1 px-6 py-4 overflow-y-auto bg-white">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <div key={index} className="border-b border-slate-50 pb-2 mb-2 last:border-b-0">
                      <button
                        className="flex items-center justify-between w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 font-medium"
                        onClick={() => {
                          if (item.items && item.items.length > 0) {
                            handleMobileDropdownToggle(index);
                          } else {
                            closeMobileMenu();
                            // Ensure a string is assigned to window.location.href by providing a fallback
                            window.location.href = item.href ?? "/";
                          }
                        }}
                      >
                        <span className="text-sm">{item.title}</span>
                        {item.items && item.items.length > 0 && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === index ? "rotate-180" : ""}`}
                          />
                        )}
                      </button>
                      {mobileOpenDropdown === index && (
                        <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                          {item.items?.map((subItem, subIndex) => {
                            if (subItem.label === "Careers") {
                              return (
                                <button
                                  key={subIndex}
                                  className="block px-4 py-2 text-sm text-slate-600 hover:text-[#41a7ad] hover:bg-slate-50 rounded-lg transition-colors duration-200 w-full text-left"
                                  onClick={() => {
                                    setComingSoonOpen(true);
                                    closeMobileMenu();
                                  }}
                                  type="button"
                                >
                                  {subItem.label}
                                </button>
                              );
                            }
                            return (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-slate-600 hover:text-[#41a7ad] hover:bg-slate-50 rounded-lg transition-colors duration-200"
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="border-b border-slate-50 pb-2 mb-2">
                    <a
                      href="/contact-us"
                      className="flex items-center w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 font-medium"
                      onClick={closeMobileMenu}
                    >
                      <span className="text-sm">Contact</span>
                    </a>
                  </div>
                </nav>
              </div>

              <div className="p-6 border-t border-slate-100 bg-white">
                <button className="flex items-center justify-center w-full bg-black hover:bg-black/80 text-white px-6 py-4 rounded-xl text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
                  Get In Touch
                </button>

                <div className="mt-4 text-center">
                  <a
                    href="mailto:info@heuvera.com"
                    className="text-sm text-slate-600 hover:text-[#41a7ad] transition-colors duration-200"
                  >
                    info@heuvera.com
                  </a>
                  <p className="text-xs text-slate-500 mt-2"> 2024 Heuvera. All rights reserved.</p>
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