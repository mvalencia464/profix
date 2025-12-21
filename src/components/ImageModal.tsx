import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
    isOpen: boolean;
    imageUrl: string;
    altText: string;
    onClose: () => void;
}

export function ImageModal({ isOpen, imageUrl, altText, onClose }: ImageModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                    <X size={32} />
                </button>
                <img
                    src={imageUrl}
                    alt={altText}
                    className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain bg-white"
                />
                <p className="mt-4 text-white text-center font-medium opacity-90">{altText}</p>
            </div>
        </div>
    );
}
