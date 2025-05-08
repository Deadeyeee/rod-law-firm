import React, { useState } from 'react';
import { Book, Home, FileText, ChevronDown, ChevronUp, MessageSquareQuote } from 'lucide-react';

interface PracticeArea {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

const PracticeAreas: React.FC = () => {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedArea === id) {
      setExpandedArea(null);
    } else {
      setExpandedArea(id);
    }
  };

  const practiceAreas: PracticeArea[] = [
    {
      id: 'family-law',
      title: 'Family Law',
      icon: <Book className="text-law-gold" size={24} />,
      description: "Our family law services provide compassionate guidance during life's most challenging transitions. We handle divorce, custody, and support matters with sensitivity and expertise.",
      services: [
        'Divorce and Separation',
        'Child Custody and Visitation',
        'Child and Spousal Support',
        'Property Division',
        'Mediation Services'
      ],
      testimonial: {
        quote: "David provided clarity and empathy during my divorce. His guidance helped me secure a fair custody arrangement that puts my children first.",
        author: 'Sarah M., Chatham'
      }
    },
    {
      id: 'real-estate',
      title: 'Real Estate Law',
      icon: <Home className="text-law-gold" size={24} />,
      description: 'Our real estate practice serves both residential and commercial clients with comprehensive legal services for property transactions and disputes.',
      services: [
        'Residential Purchases and Sales',
        'Commercial Property Transactions',
        'Title Searches and Insurance',
        'Lease Agreements',
        'Land Use and Zoning Issues'
      ],
      testimonial: {
        quote: "Rodriguez Law Office made our first home purchase smooth and stress-free. Their attention to detail saved us from potential issues we wouldn't have noticed.",
        author: 'Michael & Jennifer K., Chatham'
      }
    },
    {
      id: 'estate-planning',
      title: 'Estate Planning',
      icon: <FileText className="text-law-gold" size={24} />,
      description: "Protect your legacy and provide for your loved ones with our tailored estate planning services designed to safeguard your assets and express your wishes.",
      services: [
        'Wills and Trusts',
        'Power of Attorney',
        'Healthcare Directives',
        'Estate Administration',
        'Probate Services'
      ],
      testimonial: {
        quote: "Creating our estate plan with David gave us peace of mind knowing our children's future is protected. The process was much simpler than we expected.",
        author: 'Robert L., Chatham-Kent'
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-900" id="practice-areas">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center gold-text">Our Practice Areas</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-10"></div>
        <p className="text-center mb-16 max-w-2xl mx-auto text-gray-300">
          At Rodriguez Law Office, we specialize in helping individuals and families navigate
          complex legal matters with expertise and precision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="bg-gray-800/55 border border-gray-700 rounded-md overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-700/20 p-3 rounded-md mr-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold gold-text">{area.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{area.description}</p>
                <button
                  className="flex items-center text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors duration-200"
                  onClick={() => toggleExpand(area.id)}
                >
                  {expandedArea === area.id ? (
                    <>
                      <span>View Less</span>
                      <ChevronUp className="ml-1" size={16} />
                    </>
                  ) : (
                    <>
                      <span>Learn More</span>
                      <ChevronDown className="ml-1" size={16} />
                    </>
                  )}
                </button>
              </div>

              {expandedArea === area.id && (
                <div className="p-6 bg-gray-900 border-t border-gray-700">
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3 font-medium">Services</h4>
                  <ul className="mb-6 space-y-2">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <div className="bg-amber-500 h-1 w-1 rounded-full mt-2 mr-2"></div>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  {area.testimonial && (
                    <div className="bg-gray-800 p-4 rounded border-l-4 border-amber-500">
                      <div className="flex items-start mb-3">
                        <MessageSquareQuote className="text-amber-500 mr-2" size={16} />
                        <p className="text-gray-400 text-sm italic">{area.testimonial.quote}</p>
                      </div>
                      <p className="text-amber-400 text-xs font-medium">— {area.testimonial.author}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="cta-button"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;