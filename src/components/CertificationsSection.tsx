import React, { useState } from 'react';
import { certifications } from '../data/certifications';

const BrandLogo: React.FC<{ name: string; domain?: string }> = ({ name, domain }) => {
  const [hasError, setHasError] = useState(false);

  if (!domain || hasError) {
    return (
      <span className="text-xl font-bold text-gray-300 text-center px-2">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.brandfetch.io/${domain}/w/800/fallback/transparent/type/logo?c=1idEdsUla_OnJPZWieq`}
      alt={`${name} logo`}
      className="max-h-14 w-auto object-contain transition-all duration-300 hover:scale-110"
      onError={() => setHasError(true)}
    />
  );
};

const CertificationsSection: React.FC = () => {
  const showSection = import.meta.env.VITE_SHOW_CERTIFICATIONS !== 'false';

  if (!showSection) return null;

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Reliable Service for All Major Brands
          </h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Our technicians are factory-certified to repair and maintain appliances from the world's leading manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-20 items-center justify-items-center">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center justify-center w-full transition-all duration-300"
              title={cert.name}
            >
              <BrandLogo name={cert.name} domain={cert.domain} />
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-lg text-gray-500">
            Don't see your brand? <span className="font-bold text-brand-blue">We likely service it.</span> Contact us today for a diagnostic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
