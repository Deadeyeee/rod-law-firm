import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const MapSection: React.FC = () => {
  return (
    <section className="py-20 bg-law-darker">
      <div className="w-full">
        {/* <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gold-text">Find Us</h2>
          <p className="text-white/80">
            Our office is conveniently located in downtown Chatham
          </p>
        </div> */}

        <div className="flex flex-col lg:flex-row">
          <div className="overflow-hidden h-full w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1481.9236628930836!2d-82.19929036024394!3d42.40413593394839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882fea0fef0f60b5%3A0xdf9a9b645decc32f!2s55%20Dover%20St%2C%20Chatham%2C%20ON%20N7M%201S7%2C%20Canada!5e0!3m2!1sen!2sus!4v1714444641123!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rodriguez Law Office Location"
            ></iframe>
          </div>
          <div className="lg:w-1/2 w-full relative">
            {/* Container with relative positioning */}
            <div className="relative h-full pl-24">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: "url('lovable-uploads/cityBG.jpg')",
                }}
              ></div>
              {/* Vertical Line - absolutely positioned */}
              <div className="absolute left-6 top-6 bottom-6 pl-16">
                <div className="w-1 h-2/5 bg-yellow-400"></div>
              </div>

              {/* Content with padding to make space for line */}
              <div className="p-6 border-law-gold/20 h-full">
                <h3 className="text-4xl font-bold mb-2 gold-text">Check Us Out</h3>
                <h5 className="text-xl mb-6 pb-4">
                  Our office is located at 55 Dover Street, Chatham, ON N7M 1S7
                </h5>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <Phone className="text-law-gold mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-semibold">Phone</h4>
                      <a
                        href="tel:5196823100"
                        className="text-white/80 hover:text-law-gold transition-colors"
                      >
                        (519) 682-3100
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-law-gold mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-semibold">Email</h4>
                      <a
                        href="mailto:info@rodlaw.ca"
                        className="text-white/80 hover:text-law-gold transition-colors"
                      >
                        info@rodlaw.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-law-gold mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-semibold">Office Location</h4>
                      <address className="text-white/80 not-italic">
                        55 Dover Street
                        <br />
                        Chatham, ON N7M 1S7
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-law-gold mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-semibold">Office Hours</h4>
                      <p className="text-white/80">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-white/80">
                        Saturdays & Evenings: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Rodriguez Law Office</h3>
          <p className="text-white/80">55 Dover Street, Chatham, ON N7M 1S7</p>
          <p className="mt-4">
            <a
              href="https://goo.gl/maps/YourSpecificGoogleMapsLink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-law-gold hover:text-law-gold-light transition-colors"
            >
              Get Directions
            </a>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default MapSection;
