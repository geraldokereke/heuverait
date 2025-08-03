import { Phone, Mail, MessageCircle, Calendar, FileText, Users } from "lucide-react";
import { useState } from "react";
import SectionContainer from "../ui/sectionContainer";
import SectionTitle from "../ui/SectionTitle";


export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    'Cloud Migration & Strategy',
    'Cybersecurity Assessment',
    'Digital Transformation',
    'Infrastructure Modernization',
    'Data Analytics & BI',
    'Custom Software Development',
    'IT Support & Maintenance',
    'Other'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Schedule a Call',
      description: 'Book a consultation with our experts',
      href: 'tel:+2341234567890',
      color: 'text-[#41a7ad]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your detailed requirements',
      href: 'mailto:solutions@company.com',
      color: 'text-[#41a7ad]'
    },
    {
      icon: Calendar,
      title: 'Book Meeting',
      description: 'Schedule a strategy session',
      href: '#',
      color: 'text-[#41a7ad]'
    }
  ];

  const businessContacts = [
    {
      icon: FileText,
      title: 'Request Proposal',
      description: 'Get a detailed project proposal',
      href: '#'
    },
    {
      icon: Users,
      title: 'Partner With Us',
      description: 'Explore partnership opportunities',
      href: '#'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <SectionContainer>
        <SectionTitle
          section="Get Started"
          title="Ready to Transform Your Business?"
          subtitle="Connect with our IT consulting experts to discuss your digital transformation journey"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="">
              <div className="mb-8">
                <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900 mb-2">
                  Start Your Digital Transformation
                </h3>
                <p className="text-xs 2xl:text-base text-gray-600">
                  Tell us about your business challenges and objectives. Our team will provide tailored solutions within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] 2xl:text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-xs 2xl:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] 2xl:text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-xs 2xl:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] 2xl:text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-xs 2xl:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] 2xl:text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-xs 2xl:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] 2xl:text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-700 rounded-l-lg text-xs 2xl:text-base">
                        🇳🇬 +234
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="800 000 0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-xs 2xl:text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] 2xl:text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-[10px] 2xl:text-base"
                    >
                      <option value="text-[10px] 2xl:text-sm">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] 2xl:text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Please describe your current challenges, objectives, and any specific requirements..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all duration-200 text-xs 2xl:text-base"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={handleSubmit}
                    className="flex items-center px-3 md:px-4 lg:px-2 xl:px-3 2xl:px-6 py-2 md:py-1.5 lg:py-1 xl:py-1.5 2xl:py-2.5 text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap bg-black text-white"
                  >
                    Submit Request
                  </button>
                  <p className="text-[10px] 2xl:text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information - Takes 1 column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm 2xl:text-xl font-bold text-gray-900 mb-6">
                Connect With Our Team
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-start space-x-4 p-3 2xl:p-4 bg-white rounded-lg 2xl:rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-sm border border-gray-100 hover:shadow-md"
                    >
                      <div className="flex-shrink-0 my-auto">
                        <IconComponent className={`size-4 2xl:size-6 ${method.color}`} />
                      </div>
                      <div>
                        <h4 className="text-xs 2xl:text-base font-semibold text-gray-900 mb-1">
                          {method.title}
                        </h4>
                        <p className="text-[10px] 2xl:text-sm text-gray-600">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-sm 2xl:text-lg font-bold text-gray-900 mb-4">
                Business Inquiries
              </h4>
              <div className="space-y-3">
                {businessContacts.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 p-3 2xl:p-4 bg-white rounded-lg 2xl:rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-sm border border-gray-100 hover:shadow-md"
                    >
                      <IconComponent className="size-3 2xl:size-5 text-[#41a7ad]" />
                      <div>
                        <span className="font-medium text-gray-900 block text-[10px] 2xl:text-base mb-[-8] 2xl:mb-0">
                          {contact.title}
                        </span>
                        <span className="text-[8px] 2xl:text-sm text-gray-600">
                          {contact.description}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#41a7ad50] p-4 2xl:p-6 rounded-lg 2xl:rounded-xl border border-[#41a7ad]">
              <h4 className="font-bold text-[#41a7ad] text-sm 2xl:text-base mb-2">
                Enterprise Solutions
              </h4>
              <p className="text-xs 2xl:text-sm text-[#41a7ad90] mb-4">
                Looking for comprehensive IT transformation? Our enterprise team specializes in large-scale implementations.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#41a7ad] font-medium text-xs 2xl:text-sm hover:text-blue-700 transition-colors"
              >
                Learn more about enterprise services
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};