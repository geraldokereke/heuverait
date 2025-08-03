import React from 'react';
import { Github, Linkedin, Twitter, Youtube, Moon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';

// Logo component with white color for dark theme
const Logo = ({ color = '#ffffff', height = 60, width = 180 }) => (
  <svg width={width} height={height} viewBox="0 0 180 60" fill="none">
    <text x="10" y="40" fontSize="28" fontWeight="bold" fill={color} fontFamily="Arial, sans-serif">
      Heuvera
    </text>
  </svg>
);

const Footer = () => {
  // Data configuration to eliminate redundancy
  const socialLinks = [
    { Icon: FaXTwitter, href: "#" },
    { Icon: FaGithub, href: "#" },
    { Icon: FaLinkedin, href: "#" },
    { Icon: FaFacebook, href: "#" }
  ];

  const footerSections = [
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Partners",
        "Press & Media",
        "Contact"
      ]
    },
    {
      title: "Services",
      links: [
        "Custom Software Development",
        "Mobile & Web Development",
        "AI & Machine Learning",
        "IT Consulting",
        "Cloud & DevOps",
        "Cybersecurity",
        "Data Analytics",
        "Outsourcing & BPO"
      ]
    },
    {
      title: "Products & Solutions",
      links: [
        "AI Tools & Automation",
        "E-commerce Platforms",
        "Rental Marketplace",
        "Enterprise Software",
        "Educational Software"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Case Studies",
        "Events & Webinars",
        "Whitepapers",
        "Help Center / FAQs"
      ]
    }
  ];

  const contactInfo = [
    {
      title: "Head Office",
      content: "123 Innovation Drive\nVictoria Island, Lagos\nNigeria"
    },
    {
      title: "Contact",
      content: "Phone: +234-XXX-XXX-XXXX\nEmail: info@heuvera.com"
    },
    {
      title: "Business Hours",
      content: "Mon–Fri: 9AM – 5PM (WAT)\nSat: 10AM – 2PM (WAT)"
    }
  ];

  const linkClasses = "hover:text-[#41a7ad] transition-colors duration-200 text-[10px] xl:text-xs 2xl:text-sm";
  const headingClasses = "text-black font-bold mb-4 text-[10px] xl:text-xs 2xl:text-sm";
  const borderClasses = "border-t border-gray-700";

  return (
    <footer className="bg-gray-50 border-t border-t-gray-100 text-black py-16 px-20 xl:px-42 2xl:px-40">
      <div className="px-6">
        {/* Main Footer Content */}
        <div className="flex gap-8 mb-12 justify-between flex-wrap w-full">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-3 md:mb-0 gap-2 w-2/12 xl:w-3/12 2xl:w-4/12">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="">
                <div className="flex items-center gap-2 h-5 md:h-3 xl:h-4 2xl:h-6">
                  <Image
                    src="/logo.png"
                    alt="Heuvera Logo"
                    width={120}
                    height={120}
                    className="transition-all duration-500 ease-in-out h-full w-full"
                  />
                </div>
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href} className={`${linkClasses} hover:text-[#41a7ad]`}>
                  <Icon className='size-3 xl:size-4 2xl:size-5' />
                </a>
              ))}
            </div>
            {/* Contact Information Section */}
            {/* <div className={`${borderClasses} pt-8 mb-8`}>
            <div className="flex justify-between text-sm flex-wrap">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <h4 className={headingClasses.replace('mb-4', 'mb-2')}>{info.title}</h4>
                <p style={{ whiteSpace: 'pre-line' }} className="text-gray-400">{info.content}</p>
              </div>
            ))}
            </div>
          </div> */}
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className={headingClasses}>{section.title}</h3>
              <ul className="space-y-2 xl:space-y-3 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className={linkClasses}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;