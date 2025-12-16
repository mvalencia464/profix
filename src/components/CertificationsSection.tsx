import React, { useState } from 'react';
import { certifications } from '../data/certifications';

const BrandLogo: React.FC<{ name: string; domain?: string }> = ({ name, domain }) => {
  const [hasError, setHasError] = useState(false);

  const clientId = import.meta.env.VITE_BRANDFETCH_CLIENT_ID;

  if (!domain || hasError || !clientId) {
    return (
      <span className="text-xl font-bold text-gray-400 group-hover:text-brand-lime transition-colors duration-300">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.brandfetch.io/${domain}/w/400/h/400?c=1id&clientId=${clientId}`}
      alt={`${name} logo`}
      className="max-h-12 max-w-[80%] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
      onError={() => setHasError(true)}
    />
  );
};

const CertificationsSection: React.FC = () => {
  const showSection = import.meta.env.VITE_SHOW_CERTIFICATIONS !== 'false';

  if (!showSection) return null;

  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
            Certified Appliance Partners
          </h2>
          <p className="text-gray-500 mt-2">
            Factory authorized service for all major brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group flex items-center justify-center w-full h-24 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-brand-lime/50 hover:shadow-md transition-all duration-300 cursor-default px-4"
            >
              <BrandLogo name={cert.name} domain={cert.domain} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Don't see your brand? We likely service it. Call us to confirm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
