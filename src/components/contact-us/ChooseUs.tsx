import { Zap, Users, CheckCircle } from "lucide-react";

export default function ChooseUs() {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap size={20} className="text-teal-400 flex-shrink-0" />
                      <span className="font-medium">Lightning-fast project delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-teal-400 flex-shrink-0" />
                      <span className="font-medium">Dedicated expert team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-400 flex-shrink-0" />
                      <span className="font-medium">100% satisfaction guarantee</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-xl">
                    <p className="text-teal-300 font-semibold text-lg mb-2">Free Consultation</p>
                    <p className="text-sm opacity-90">Let's discuss your project with no strings attached</p>
                  </div>
                </div>
              </div>
  );
}