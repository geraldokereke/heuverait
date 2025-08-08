import { Mail, MapPin, Phone } from "lucide-react"

export const contactInput=[
    {label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe',  },
    {label: 'Email', name: 'email', type: 'email', placeholder: 'john.doe@example.com', },
    {label: 'Company Name', name: 'company', type: 'text', placeholder: 'Your Company', },
    {label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+1 (555) 123-4567',  },
  ]
  export const contactData = [
    {
      icon: Phone,
      heading: "Call Us",
      subHeading: "Mon-Fri 9AM-6PM EST",
      otherHeading: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      heading: "Email Us",
      subHeading: "Quick response guaranteed",
      otherHeading: "hello@itconsult.com",
    },
    {
        //  size={24} className="text-white" />
      icon: MapPin,
      heading: "Visit Us",
      subHeading: "Schedule an appointment",
      otherHeading: "123 Street, City, Country",
    },
  ];