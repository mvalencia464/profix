import React, { useState } from 'react';
import { strategyData, SEOPlanItem } from '../data/strategyData';
import { ImageModal } from './ImageModal';
import { ExternalLink, ImageIcon, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SEOPLANTable() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

    const handleImageClick = (url: string, alt: string) => {
        setSelectedImage({ url, alt });
        setModalOpen(true);
    };

    const getRowStyle = (type: string) => {
        switch (type) {
            case 'L1': return 'bg-white border-l-4 border-l-gray-900';
            case 'L2': return 'bg-blue-50/30 border-l-4 border-l-blue-500';
            case 'L3': return 'bg-purple-50/30 border-l-4 border-l-purple-500';
            default: return 'bg-white';
        }
    };

    const getBadgeStyle = (type: string) => {
        switch (type) {
            case 'L1': return 'bg-gray-900 text-white';
            case 'L2': return 'bg-blue-100 text-blue-800';
            case 'L3': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <FileText className="mr-3 text-gray-500" size={24} />
                    Core 30 SEO Master Plan
                </h2>
                <p className="text-gray-500 mt-1 text-sm">Full breakdown of required pages, URL structure, and content requirements.</p>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 w-24">Type</th>
                            <th className="px-6 py-4">Page Name</th>
                            <th className="px-6 py-4">Target URL</th>
                            <th className="px-6 py-4">Images Req.</th>
                            <th className="px-6 py-4">Word Count</th>
                            <th className="px-6 py-4">Preview</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {strategyData.map((item: SEOPlanItem, idx: number) => (
                            <tr key={idx} className={`hover:bg-gray-50 transition-colors ${getRowStyle(item.type)}`}>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${getBadgeStyle(item.type)}`}>
                                        {item.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-800">
                                    {item.pageName}
                                </td>
                                <td className="px-6 py-4 font-mono text-xs text-gray-600">
                                    <Link to={item.url} className="flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                                        {item.url}
                                        <ExternalLink size={12} className="text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5">
                                        <ImageIcon size={14} className="text-gray-400" />
                                        <span className="font-semibold text-gray-700">{item.imagesNeeded}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${item.wordCount >= 1500 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                        {item.wordCount.toLocaleString()} words
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {item.imageThumbnail ? (
                                        <button
                                            onClick={() => handleImageClick(item.imageThumbnail!, item.pageName)}
                                            className="group relative w-16 h-10 rounded overflow-hidden border border-gray-200 hover:border-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                                        >
                                            <img
                                                src={item.imageThumbnail}
                                                alt={`Preview for ${item.pageName}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                        </button>
                                    ) : (
                                        <span className="text-gray-300">-</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ImageModal
                isOpen={modalOpen}
                imageUrl={selectedImage?.url || ''}
                altText={selectedImage?.alt || ''}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
}
