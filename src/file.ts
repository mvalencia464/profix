import React, { useState, useEffect } from 'react';
import {
    Star,
    CheckCircle,
    MapPin,
    Clock,
    Phone,
    Mail,
    ChevronRight,
    ChevronLeft,
    ShieldCheck,
    Award,
    Wrench,
    Menu,
    X,
    Quote,
    Facebook,
    Instagram,
    Twitter,
    Navigation
} from 'lucide-react';

// --- Configuration Data ---

const appliances = [
    { id: 'fridge_freezer', name: 'Fridge & Freezer', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7ec99b342d9c436db.svg' },
    { id: 'oven', name: 'Oven', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933cee41d466e024cfe582d.svg' },
    { id: 'cooktop', name: 'Cooktop', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f781eaa1b9d8d35b35.svg' },
    { id: 'washing_machine', name: 'Washing Machine', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f781eaa157b2d35b34.svg' },
    { id: 'dryer', name: 'Dryer', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d2b381eaa13eb6d37ecc.svg' },
    { id: 'dishwasher', name: 'Dishwasher', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7ec99b3064fc436dd.svg' },
    { id: 'microwave', name: 'Microwave', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7e6551c9fd4ac87f7.svg' },
    { id: 'garbage_disposal', name: 'Garbage Disposal', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7ec99b30cf4c436e1.svg' },
    { id: 'ice_maker', name: 'Ice Maker', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7e0f0924405f0c242.svg' },
];

const issuesMap = {
    'fridge_freezer': [
        "Not cooling properly", "Not freezing properly", "Ice buildup", "Leaking water", "Making strange noises", "Door seal issue", "Not defrosting"
    ],
    'oven': [
        "Not heating / Element not working", "Burner not working", "Inconsistent temperature", "Self-cleaning not working", "Gas oven not lighting"
    ],
    'cooktop': [
        "Not heating / Element not working", "Burner not working", "Inconsistent temperature", "Self-cleaning not working", "Gas oven not lighting"
    ],
    'washing_machine': [
        "Not draining", "Not spinning", "Leaking water", "Making loud noises", "Not turning on"
    ],
    'dryer': [
        "Not heating", "Overheating", "Not tumbling / spinning", "Making strange noises", "Not turning on"
    ],
    'dishwasher': [
        "Not cleaning dishes properly", "Leaking water", "Not draining", "Not turning on"
    ],
    'microwave': [
        "Not turning on / No power", "Not heating", "Sparks or burning smell", "Turntable not rotating", "Needs installation (built-in)"
    ],
    'garbage_disposal': [
        "Jammed or not grinding", "Leaking", "Making loud noises", "Not turning on"
    ],
    'ice_maker': [
        "Not producing ice", "Water dispenser not working", "Leaking water", "Making strange noises"
    ]
};

const availabilityOptions = [
    { label: "I'm flexible", subtext: "Not an urgent request" },
    { label: "Within 48 hours", subtext: "Soonest availability" },
    { label: "Within a week", subtext: null }
];

const reviews = [
    {
        name: "Sarah Jenkins",
        location: "Summerlin",
        text: "Tim came out the same day my fridge stopped cooling. Saved me hundreds in groceries. Honest, fast, and didn't try to upsell me.",
        rating: 5
    },
    {
        name: "Michael Torres",
        location: "Henderson",
        text: "Finally a company that communicates. They texted me when they were on the way and fixed my dryer in under an hour. Local pros for sure.",
        rating: 5
    },
    {
        name: "Jessica Reynolds",
        location: "North Las Vegas",
        text: "I thought I needed a new dishwasher, but the technician found a simple clog. Charged me a fair price for the repair instead of pushing a replacement.",
        rating: 5
    }
];

const areasServed = [
    "Summerlin",
    "Henderson",
    "North Las Vegas",
    "Spring Valley",
    "Paradise",
    "Enterprise",
    "Green Valley",
    "Centennial Hills",
    "Southern Highlands",
    "Aliante",
    "Sunrise Manor",
    "The Lakes"
];

// --- Components ---

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;
    return (
        <div className="w-full bg-gray-200 h-2 rounded-full mb-6 overflow-hidden">
            <div
                className="h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%`, backgroundColor: '#D4F427' }}
            ></div>
        </div>
    );
};

const ReviewBadge = () => (
    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm text-sm font-medium text-gray-800 border border-gray-100">
        <div className="flex text-yellow-400">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
        </div>
        <span className="ml-1">4.9/5 from 1,200+ Locals</span>
    </div>
);

// --- Main App Component ---

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        appliance: null,
        issue: null,
        availability: null,
        zipCode: '',
        contactMethod: 'email',
        email: '',
        phone: '',
        name: ''
    });

    const totalSteps = 6;

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const updateForm = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Auto advance on selection for single-choice steps (1, 2, 3)
        if (['appliance', 'issue', 'availability'].includes(field)) {
            setTimeout(() => handleNext(), 300);
        }
    };

    // --- Render Steps ---

    const renderStep1_Appliance = () => (
        <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Which appliance needs repair?</h3>
            <p className="text-gray-500 mb-6">Select the type of appliance to get started.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {appliances.map((app) => (
                    <button
                        key={app.id}
                        onClick={() => updateForm('appliance', app.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${formData.appliance === app.id
                                ? 'text-gray-900'
                                : 'border-gray-100 bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                        style={{
                            borderColor: formData.appliance === app.id ? '#D4F427' : '',
                            backgroundColor: formData.appliance === app.id ? 'rgba(212, 244, 39, 0.1)' : '',
                        }}
                    >
                        <div className={`mb-3 ${formData.appliance === app.id ? 'opacity-100' : 'opacity-70 grayscale'}`}>
                            <img src={app.icon} alt={app.name} className="w-12 h-12 object-contain" />
                        </div>
                        <span className="font-medium text-sm md:text-base text-center">{app.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderStep2_Issue = () => {
        const issues = issuesMap[formData.appliance] || [];
        const applianceName = appliances.find(a => a.id === formData.appliance)?.name;

        return (
            <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">What's wrong with your {applianceName}?</h3>
                <p className="text-gray-500 mb-6">Select the issue that best describes the problem.</p>
                <div className="space-y-3">
                    {issues.map((issue, idx) => (
                        <button
                            key={idx}
                            onClick={() => updateForm('issue', issue)}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${formData.issue === issue
                                    ? 'text-gray-900 font-medium shadow-sm'
                                    : 'border-gray-100 bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                            style={{
                                borderColor: formData.issue === issue ? '#D4F427' : '',
                                backgroundColor: formData.issue === issue ? 'rgba(212, 244, 39, 0.1)' : '',
                            }}
                        >
                            <span>{issue}</span>
                            {formData.issue === issue && <CheckCircle size={20} style={{ color: '#D4F427' }} />}
                        </button>
                    ))}
                    <button
                        onClick={() => updateForm('issue', 'Other / Not Listed')}
                        className="w-full text-left p-4 rounded-xl border-2 border-gray-100 text-gray-500 hover:bg-gray-50 transition-all"
                        style={{
                            ':hover': { borderColor: 'rgba(212, 244, 39, 0.5)' }
                        }}
                    >
                        Other / Not Listed
                    </button>
                </div>
            </div>
        );
    };

    const renderStep3_Availability = () => (
        <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">What is your availability?</h3>
            <div className="space-y-4 mt-6">
                {availabilityOptions.map((option, idx) => (
                    <button
                        key={idx}
                        onClick={() => updateForm('availability', option.label)}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center ${formData.availability === option.label
                                ? 'bg-opacity-10 ring-1'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                        style={{
                            borderColor: formData.availability === option.label ? '#D4F427' : '',
                            backgroundColor: formData.availability === option.label ? 'rgba(212, 244, 39, 0.1)' : '',
                            '--tw-ring-color': formData.availability === option.label ? '#D4F427' : 'transparent',
                        }}
                    >
                        {/* Custom Radio Button */}
                        <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 transition-colors`}
                            style={{ borderColor: formData.availability === option.label ? '#D4F427' : '#9ca3af' }}>
                            {formData.availability === option.label && (
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D4F427' }} />
                            )}
                        </div>

                        {/* Text Content */}
                        <div>
                            <div className="font-bold text-lg text-gray-900">{option.label}</div>
                            {option.subtext && (
                                <div className="text-gray-500 text-sm mt-0.5">{option.subtext}</div>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderStep4_Location = () => (
        <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Where do you need service?</h3>
            <p className="text-gray-500 mb-6">Enter your ZIP code to verify we service your area in Las Vegas.</p>

            <div className="p-4 rounded-lg mb-6 border flex items-start"
                style={{ backgroundColor: 'rgba(212, 244, 39, 0.1)', borderColor: 'rgba(212, 244, 39, 0.2)' }}>
                <ShieldCheck className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#D4F427' }} />
                <p className="text-sm text-gray-800">
                    Pro Fix LV technicians are currently active in Summerlin, Henderson, and North Las Vegas areas.
                </p>
            </div>

            <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                    placeholder="Enter ZIP Code (e.g. 89118)"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-0 text-lg outline-none transition-colors"
                    style={{ ':focus': { borderColor: '#D4F427' } }}
                    maxLength={5}
                />
            </div>

            <button
                onClick={handleNext}
                disabled={formData.zipCode.length < 5}
                className="w-full mt-6 text-gray-900 py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                style={{ backgroundColor: '#D4F427', boxShadow: '0 10px 15px -3px rgba(212, 244, 39, 0.4)' }}
            >
                Continue
            </button>
        </div>
    );

    const renderStep5_Contact = () => (
        <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
            <p className="text-gray-500 mb-6">Where should we send your quote and availability?</p>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateForm('name', e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 outline-none transition-colors"
                        style={{ ':focus': { borderColor: '#D4F427' } }}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateForm('email', e.target.value)}
                            placeholder="john@example.com"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 outline-none transition-colors"
                            style={{ ':focus': { borderColor: '#D4F427' } }}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateForm('phone', e.target.value)}
                            placeholder="(702) 555-0123"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 outline-none transition-colors"
                            style={{ ':focus': { borderColor: '#D4F427' } }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-start mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0">
                    <ShieldCheck className="h-5 w-5" style={{ color: '#D4F427' }} />
                </div>
                <p className="ml-3 text-xs text-gray-500">
                    Your information is secure. By clicking "View Summary", you agree to receive a quote from Pro Fix LV. We do not sell your data.
                </p>
            </div>

            <button
                onClick={handleNext}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="w-full mt-6 text-gray-900 py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                style={{ backgroundColor: '#D4F427', boxShadow: '0 10px 15px -3px rgba(212, 244, 39, 0.4)' }}
            >
                View Summary
            </button>
        </div>
    );

    const renderStep6_Summary = () => {
        const applianceName = appliances.find(a => a.id === formData.appliance)?.name;

        return (
            <div className="animate-fade-in">
                <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                        style={{ backgroundColor: 'rgba(212, 244, 39, 0.2)', color: '#D4F427' }}>
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Summary</h3>
                    <p className="text-gray-500">Please review your request details.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-100 mb-6">
                    <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-500">Service:</span>
                        <span className="font-medium text-gray-900 text-right">{applianceName} Repair</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-500">Issue:</span>
                        <span className="font-medium text-gray-900 text-right max-w-[60%]">{formData.issue}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-500">Urgency:</span>
                        <span className="font-medium text-gray-900 text-right">{formData.availability}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-medium text-gray-900 text-right">{formData.zipCode}, Las Vegas</span>
                    </div>
                    <div className="flex justify-between pt-1">
                        <span className="text-gray-500">Contact:</span>
                        <div className="text-right">
                            <div className="font-medium text-gray-900">{formData.name}</div>
                            <div className="text-sm text-gray-500">{formData.phone}</div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => alert("Request Submitted! We will contact you shortly.")}
                    className="w-full text-gray-900 py-4 rounded-xl font-bold text-lg transition-all shadow-lg animate-pulse-slow"
                    style={{ backgroundColor: '#D4F427', boxShadow: '0 10px 15px -3px rgba(212, 244, 39, 0.4)' }}
                >
                    Submit Request
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">One of our master technicians will review this immediately.</p>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">

            {/* --- Navigation --- */}
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center">
                            <img src="https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933cae0e0f092cbeff039ab.webp" alt="Pro Fix LV Logo" className="h-16 w-auto" />
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-600 font-medium transition-colors" style={{ ':hover': { color: '#D4F427' } }}>Services</a>
                            <a href="#" className="text-gray-600 font-medium transition-colors" style={{ ':hover': { color: '#D4F427' } }}>Why Us</a>
                            <a href="#" className="text-gray-600 font-medium transition-colors" style={{ ':hover': { color: '#D4F427' } }}>Reviews</a>
                            <a href="#" className="text-gray-600 font-medium transition-colors" style={{ ':hover': { color: '#D4F427' } }}>FAQ</a>
                            <button className="px-5 py-2.5 rounded-full font-bold transition-colors flex items-center text-gray-900"
                                style={{ backgroundColor: 'rgba(212, 244, 39, 0.1)', ':hover': { backgroundColor: 'rgba(212, 244, 39, 0.2)' } }}>
                                <Phone size={18} className="mr-2" /> (702) 555-0199
                            </button>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md" style={{ ':hover': { color: '#D4F427', backgroundColor: 'rgba(212, 244, 39, 0.1)' } }}>Services</a>
                            <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md" style={{ ':hover': { color: '#D4F427', backgroundColor: 'rgba(212, 244, 39, 0.1)' } }}>Reviews</a>
                            <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md" style={{ ':hover': { color: '#D4F427', backgroundColor: 'rgba(212, 244, 39, 0.1)' } }}>Contact</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* --- Hero Section --- */}
            <div className="relative pt-20 lg:pt-28 pb-16 lg:pb-32 overflow-hidden">
                {/* Real Home Image Background with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000"
                        alt="Modern Kitchen Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
                </div>

                {/* Brand Accent Blobs (kept subtle) */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full blur-3xl opacity-30 z-0" style={{ backgroundColor: 'rgba(212, 244, 39, 0.5)' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Hero Content */}
                        <div className="text-center lg:text-left space-y-6">
                            <div className="inline-flex items-center space-x-2 rounded-full px-4 py-1.5 mb-4 animate-fade-in-up bg-white shadow-sm border border-gray-100">
                                <Award size={16} style={{ color: '#D4F427' }} />
                                <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Voted #1 Appliance Repair in Vegas</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                                We Fix It Fast.<br />
                                <span style={{ color: '#8db600' }}>So You Can Relax.</span>
                                {/* Darkened the green slightly for better contrast on white */}
                            </h1>

                            <p className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Expert repair for all major brands. Same-day service available in Las Vegas, Henderson, and Summerlin.
                                <span className="font-bold text-gray-900"> No hidden fees. 90-day warranty.</span>
                            </p>

                            {/* Social Proof Badges */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                                <div className="flex items-center">
                                    <div className="flex -space-x-3 mr-4">
                                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" />
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+2k</div>
                                    </div>
                                    <div className="text-left">
                                        <div className="flex text-orange-400">
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                        </div>
                                        <p className="text-xs font-bold text-gray-900">Happy Locals</p>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
                                <div className="flex items-center space-x-2">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-6 h-6" alt="Google" />
                                    <span className="font-bold text-gray-700">4.9 Rating</span>
                                </div>
                            </div>

                            {/* Brand Logos Bar - New Addition */}
                            <div className="pt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">We Service All Major Brands</p>
                                <div className="flex items-center justify-center lg:justify-start space-x-6">
                                    {/* Using text for brands as generic placeholder logos often break. In production use SVGs. */}
                                    <span className="font-bold text-xl text-gray-600">SAMSUNG</span>
                                    <span className="font-bold text-xl text-gray-600">LG</span>
                                    <span className="font-bold text-xl text-gray-600">Whirlpool</span>
                                    <span className="font-bold text-xl text-gray-600">GE</span>
                                    <span className="font-bold text-xl text-gray-600">BOSCH</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Container */}
                        <div className="relative">
                            {/* Decorative behind form */}
                            <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-30" style={{ backgroundImage: 'linear-gradient(to right, #D4F427, #a3e635)' }}></div>

                            <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/50 flex flex-col min-h-[500px]">
                                <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                    <h2 className="font-bold text-gray-800">Diagnostic Wizard</h2>
                                    <div className="text-sm font-medium text-gray-500">Step {step} of {totalSteps}</div>
                                </div>

                                <div className="p-6 md:p-8 flex-grow flex flex-col">
                                    {step < totalSteps && <ProgressBar currentStep={step} totalSteps={totalSteps} />}

                                    {step === 1 && renderStep1_Appliance()}
                                    {step === 2 && renderStep2_Issue()}
                                    {step === 3 && renderStep3_Availability()}
                                    {step === 4 && renderStep4_Location()}
                                    {step === 5 && renderStep5_Contact()}
                                    {step === 6 && renderStep6_Summary()}
                                </div>

                                {/* Form Footer Controls */}
                                {step > 1 && step < 6 && (
                                    <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/80 flex justify-between items-center">
                                        <button
                                            onClick={handleBack}
                                            className="text-gray-500 hover:text-gray-800 font-medium flex items-center transition-colors"
                                        >
                                            <ChevronLeft size={18} className="mr-1" /> Back
                                        </button>
                                        {step > 3 && ( // Only show "Skip" or manual next for steps that aren't auto-advancing
                                            <span className="text-xs text-gray-400">Step {step} of {totalSteps}</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- Trust/Features Section --- */}
            <section className="bg-gray-50 py-16 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Why Las Vegas Chooses Pro Fix</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 244, 39, 0.1)', color: '#D4F427' }}>
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Same Day Service</h3>
                            <p className="text-gray-600">We know broken appliances can't wait. That's why we keep our trucks stocked and ready for same-day dispatch.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">90-Day Warranty</h3>
                            <p className="text-gray-600">We stand by our work. All parts and labor are backed by our rock-solid 90-day warranty for your peace of mind.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Experts</h3>
                            <p className="text-gray-600">Our technicians are factory-trained, background-checked, and licensed to work on all major luxury and standard brands.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- About Founder Section --- */}
            <section className="bg-white py-20 border-b border-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ backgroundColor: '#D4F427' }}></div>
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                                {/* Placeholder for Founder Image */}
                                <img
                                    src="https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/693caac5dbed99e4c781a9a1.webp"
                                    alt="Tim Thibodeaux Jr."
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <p className="text-white font-bold text-xl">Tim Thibodeaux Jr.</p>
                                    <p className="text-gray-300 text-sm">Founder & Lead Technician</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center space-x-2 rounded-full px-4 py-1.5 mb-6"
                                style={{ backgroundColor: 'rgba(212, 244, 39, 0.15)', color: '#9a3412' }}>
                                <span className="text-sm font-bold uppercase tracking-wider text-gray-800">Local Business, Not A Corporation</span>
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                "When you call us, you get a neighbor. Not a call center."
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Hi, I'm <span className="font-bold text-gray-900">Tim Thibodeaux Jr.</span>, and I was born and raised right here in Las Vegas. Pro Fix LV isn't just a business to me—it's my way of serving the neighbors I've known my whole life.
                                </p>
                                <p>
                                    I started this company to do things the old-fashioned way. In a city full of big sales teams, faceless dispatch centers, and endless middlemen designed to make you overpay, we stand for something different.
                                </p>
                                <p>
                                    We believe in honest work, quality service, and fair prices. When you reach out to us, you're connecting with a local expert who listens to your needs. Our crew is 100% local, and we treat every home like it's our own.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <div className="flex items-start">
                                    <Quote className="w-10 h-10 text-gray-200 mr-4 flex-shrink-0" />
                                    <div>
                                        <p className="italic text-gray-700 font-medium mb-4">
                                            "Quality work doesn't just meet expectations—it exceeds them. When you care about every detail, it shows. That commitment doesn't go unnoticed."
                                        </p>
                                        <div className="font-handwriting text-2xl font-bold" style={{ color: '#555' }}>
                                            Tim Thibodeaux Jr.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reviews Section --- */}
            <section className="bg-gray-900 py-24 relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Your Neighbors Are Saying</h2>
                            <div className="flex items-center space-x-3">
                                <span className="text-gray-400 text-lg">Rated</span>
                                <div className="flex" style={{ color: '#D4F427' }}>
                                    <Star fill="currentColor" />
                                    <Star fill="currentColor" />
                                    <Star fill="currentColor" />
                                    <Star fill="currentColor" />
                                    <Star fill="currentColor" />
                                </div>
                                <span className="font-bold text-white text-xl">4.9/5</span>
                                <span className="text-gray-400">on Google</span>
                            </div>
                        </div>
                        <button className="px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
                            style={{ backgroundColor: '#D4F427', color: '#111827' }}>
                            Read All Reviews
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:-translate-y-1 shadow-2xl">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex space-x-1" style={{ color: '#D4F427' }}>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-5 h-5 opacity-70" alt="Google" />
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white mr-3">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">{review.name}</p>
                                        <p className="text-gray-500 text-xs">{review.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Areas Served & Map Section --- */}
            <section className="bg-white py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Proudly Serving Southern Nevada</h2>
                        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                            From Summerlin to Henderson, we have trucks fully stocked and ready to deploy to your neighborhood.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Areas List */}
                        <div className="order-2 lg:order-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Navigation className="mr-2" style={{ color: '#D4F427', fill: '#D4F427' }} />
                                Coverage Areas
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {areasServed.map((area, idx) => (
                                    <div key={idx} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                        <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#D4F427' }} />
                                        <span className="text-gray-700 font-medium text-sm">{area}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <p className="text-sm text-gray-600 mb-2 font-bold">Don't see your area?</p>
                                <p className="text-sm text-gray-500">
                                    We are constantly expanding. Call us at <span className="font-bold text-gray-900">(702) 555-0199</span> to check if a technician is nearby.
                                </p>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="order-1 lg:order-2 h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 relative group">
                            {/* Overlay that fades out on hover */}
                            <div className="absolute inset-0 bg-gray-500/10 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d55226.979168769896!2d-115.26919477750141!3d36.17781390455435!3m2!1i1024!2i768!4f13.1!2m1!1sappliance%20repair%20las%20vegas!5e0!3m2!1sen!2sus!4v1765004812156!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(0%) contrast(1.1)', transition: 'filter 0.5s ease' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full group-hover:filter-none"
                                title="Service Area Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand Column */}
                        <div className="space-y-6">
                            <img src="https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d3d11d466e0616fec916.png" alt="Pro Fix LV Logo" className="h-10 w-auto opacity-90" />
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Las Vegas' trusted choice for honest, expert appliance repair. We bring the tools, the talent, and the transparency you deserve.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors group">
                                    <Facebook size={18} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors group">
                                    <Instagram size={18} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors group">
                                    <Twitter size={18} className="text-gray-400 group-hover:text-white" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-white text-lg mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Tim</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-bold text-white text-lg mb-6">Services</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Refrigerator Repair</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Washer & Dryer Repair</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Oven & Stove Repair</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Emergency Service</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex items-start">
                                    <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" style={{ color: '#D4F427' }} />
                                    <span>Serving Las Vegas, Henderson, & Summerlin</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone size={18} className="mr-3 flex-shrink-0" style={{ color: '#D4F427' }} />
                                    <span className="font-bold text-white">(702) 555-0199</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail size={18} className="mr-3 flex-shrink-0" style={{ color: '#D4F427' }} />
                                    <span>help@profixlv.com</span>
                                </li>
                                <li className="flex items-center">
                                    <Clock size={18} className="mr-3 flex-shrink-0" style={{ color: '#D4F427' }} />
                                    <span>Mon-Sat: 7am - 8pm</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Pro Fix LV. All rights reserved.</p>
                        <p className="mt-2 md:mt-0">Designed with pride in Las Vegas.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}