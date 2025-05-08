import React from 'react';
import { User, ChevronRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="about-us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-lg transform -rotate-3"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-amber-500/30"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-amber-500/30"></div>
              <img
                src="lovable-uploads/Headshot-removebg.png"
                alt="David Rodriguez, Attorney"
                className="rounded-lg border border-gray-700 shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="flex items-center mb-2">
              <div className="h-px bg-amber-500 w-8 mr-3"></div>
              <span className="gold-text text-sm font-medium tracking-wider uppercase">About the Founder</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-white">DAVID RODRIGUEZ</h2>
            <div className="w-16 h-1 bg-law-gold mb-6"></div>
            <h3 className="text-xl font-medium text-gray-300 mb-8">Lawyer, Owner, BMSc., J.D.</h3>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Grown and raised in Chatham-Kent, I established Rodriguez Law Office in 2020 to
                service the communities' family, real estate, and construction law needs. Since then
                my practice has expanded to help homeowners and builders throughout Ontario.
              </p>

              <p className="text-gray-300 leading-relaxed">
                As a young and independent lawyer, I can provide a greater level of personal
                attention at more competitive rates than older lawyers. Let me show you the
                difference that makes.
              </p>

              <div className="border-l-4 border-law-gold pl-6 py-2 mt-8">
                <h4 className="text-xl font-semibold gold-text mb-3">Our Firm's Philosophy</h4>
                <p className="text-gray-300 leading-relaxed">
                  At Rodriguez Law Office, we believe in a client-centered approach that combines
                  legal expertise with compassion and accessibility. We strive to make the legal
                  process transparent and understandable, empowering our clients to make informed
                  decisions with confidence.
                </p>
              </div>

              <div className="pt-6">
                <a 
                  href="/about" 
                  className="cta-button"
                >
                  <User size={18} className="mr-2" />
                  <span>Learn More About Us</span>
                  <ChevronRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;