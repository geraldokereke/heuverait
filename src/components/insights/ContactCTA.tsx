import { Upload, Phone, Mail, MessageCircle, Video, FileText } from "lucide-react";
import { useState } from "react";

 export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Need a Consultation?
            </h2>
            <p className="text-gray-600 mb-8">
              Drop us a line! We are here to answer your questions 24/7.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2cd16c] focus:border-transparent outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2cd16c] focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2cd16c] focus:border-transparent outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2cd16c] focus:border-transparent outline-none"
                />
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                    🇳🇬 +234
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="000 000 0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#2cd16c] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send
                </button>
                <div className="flex items-center text-gray-500">
                  <Upload className="w-5 h-5 mr-2" />
                  <span className="text-sm">Drag and drop or browse to upload your file(s)</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Options */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in touch instantly
            </h3>

            <div className="space-y-4 mb-8">
              <a href="tel:+234" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">Call us</span>
              </a>
              <a href="mailto:info@heuvera.com" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">Email us</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <span className="font-medium text-gray-900">WhatsApp</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <Video className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">Live chat</span>
              </a>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">For journalists</h4>
              <a href="#" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <FileText className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">Get unique insights</span>
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Join our team</h4>
              <a href="#" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <Upload className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">Upload your CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};