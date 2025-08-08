"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import SectionContainer from "@/components/ui/sectionContainer";
import Hero from "@/components/hero";
import BottomSection from "@/components/contact-us/BottomSection";
import ChooseUs from "@/components/contact-us/ChooseUs";
import FormSelect from "@/components/contact-us/FormSelect";
import FormTextarea from "@/components/contact-us/FormTextarea";
import { contactData, contactInput } from "@/components/data/Contact";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION - Modern Unsplash background */}
      <Hero
        imgLink="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80"
        section="Contact Us"
        title="Let's Build Something Great"
        description="Ready to transform your business with cutting-edge technology? Our expert team is here to turn your vision into reality."
        height="h-[50vh]"
      />

      {/* MAIN CONTENT SECTION */}
      <div className="py-20 bg-gray-50">
        <SectionContainer>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* CONTACT FORM */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-bl-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-black to-gray-800 rounded-tr-full opacity-5"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Start Your Project
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {[0, 1].map((row) => (
                    <div className="grid md:grid-cols-2 gap-6" key={row}>
                      {contactInput.slice(row * 2, row * 2 + 2).map((input) => (
                        <div key={input.name}>
                          <label
                            htmlFor={input.name}
                            className="block text-sm font-semibold text-gray-800 mb-3"
                          >
                            {input.label}
                            {input.name === "name" || input.name === "email"
                              ? " *"
                              : ""}
                          </label>
                          <input
                            type={input.type}
                            id={input.name}
                            name={input.name}
                            value={formData[input.name as keyof typeof formData] || ""}
                            onChange={handleInputChange}
                            required={
                              input.name === "name" || input.name === "email"
                            }
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                            placeholder={input.placeholder}
                          />
                        </div>
                      ))}
                    </div>
                  ))}

                  <FormSelect
                    label="Service Needed"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    options={[
                      { value: "", label: "Select a service" },
                      { value: "web-development", label: "Web Development" },
                      { value: "mobile-apps", label: "Mobile Applications" },
                      { value: "cloud-solutions", label: "Cloud Solutions" },
                      { value: "data-analytics", label: "Data Analytics" },
                      { value: "cybersecurity", label: "Cybersecurity" },
                      { value: "consulting", label: "IT Consulting" },
                    ]}
                  />

                  <FormTextarea
                    label="Project Description *"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 text-lg"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={24} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={24} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* CONTACT INFO & CTA */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {item.heading}
                        </h3>
                        <p className="text-gray-600">{item.subHeading}</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      {item.otherHeading}
                    </p>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <ChooseUs />
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* BOTTOM CTA SECTION */}
      <BottomSection />
    </div>
  );
}
