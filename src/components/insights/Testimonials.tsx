import { Star } from "lucide-react";
import Image from "next/image";

export const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechFlow Solutions",
      testimonial: "Heuvera's team proved to be extremely flexible and responsive. They delivered innovative solutions that perfectly aligned with our business needs.",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=126&q=80"
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "DataSync Corp",
      testimonial: "The AI solutions developed by Heuvera transformed our operations. We've seen a 40% improvement in efficiency across all departments.",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=126&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};