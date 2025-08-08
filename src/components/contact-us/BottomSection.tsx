import SectionContainer from "../ui/sectionContainer";

export default function BottomSection() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-600 py-16">
        <SectionContainer>
          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who've accelerated their growth with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-200">
                View Our Portfolio
              </button>
            </div>
          </div>
        </SectionContainer>
      </div>
  );
}