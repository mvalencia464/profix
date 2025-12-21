import React from 'react';
import { SEOPLANTable } from '../components/SEOPLANTable';
import { SiteStructureTree } from '../components/SiteStructureTree';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminStrategy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Strategy Dashboard</h1>
            <p className="text-gray-500 mt-2">Manage and monitor the Core 30 Local SEO content strategy.</p>
        </div>
        <div className="space-y-12">
            <SEOPLANTable />
            <SiteStructureTree />
        </div>
      </div>
    </div>
  );
}