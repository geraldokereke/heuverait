import React from 'react';
import { Github, Linkedin, Twitter, Youtube, Moon } from 'lucide-react';
import Logo from './svgs/logo';

const Footer = () => {
  // Data configuration to eliminate redundancy
  const socialLinks = [
    { Icon: Twitter, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" }
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

  const linkClasses = "hover:text-black hover:font-semibold transition-colors";
  const headingClasses = "text-black font-bold mb-4 text-sm";
  const borderClasses = "border-t border-[#D3D3D3]";

  return (
    <footer className="bg-white text-[#444444] py-16 px-40">
      <div className="px-6">
        {/* Main Footer Content */}
        <div className="flex gap-8 mb-12 justify-between flex-wrap w-full">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-2 md:mb-0 w-4/12">
            <div>
              <Logo color='#000' height={60} width={180} />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 px-3">
              {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href} className={linkClasses}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className={headingClasses}>{section.title}</h3>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className={linkClasses}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className={`${borderClasses} pt-8 mb-8`}>
          <div className="flex justify-between text-sm flex-wrap">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <h4 className={headingClasses.replace('mb-4', 'mb-2')}>{info.title}</h4>
                <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className={`${borderClasses} pt-6 flex flex-col md:flex-row justify-between items-center`}>
          <div className="flex w-full items-center justify-between">
            <div className="text-sm">
              <span>&copy; {new Date().getFullYear()} Heuvera Inc</span>
            </div>

            <button className="p-2 hover:bg-gray-800 rounded-md transition-colors">
              <Moon size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;