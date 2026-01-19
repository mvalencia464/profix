import { useState } from 'react';
import { useProfix Appliance RepairCRM } from '../hooks/useProfix Appliance RepairCRM';
import {
    CheckCircle,
    MapPin,
    ShieldCheck,
    ChevronLeft,
    Mail,
    Phone
} from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';

import fridgeIcon from '../assets/images/icons/fridge.svg';
import ovenIcon from '../assets/images/icons/oven.svg';
import cooktopIcon from '../assets/images/icons/cooktop.svg';
import washerIcon from '../assets/images/icons/washer.svg';
import dryerIcon from '../assets/images/icons/dryer.svg';
import dishwasherIcon from '../assets/images/icons/dishwasher.svg';
import microwaveIcon from '../assets/images/icons/microwave.svg';
import disposalIcon from '../assets/images/icons/disposal.svg';
import iceMakerIcon from '../assets/images/icons/ice-maker.svg';

const appliances = [
    { id: 'fridge_freezer', name: 'Fridge & Freezer', icon: fridgeIcon },
    { id: 'oven', name: 'Oven', icon: ovenIcon },
    { id: 'cooktop', name: 'Cooktop', icon: cooktopIcon },
    { id: 'washing_machine', name: 'Washing Machine', icon: washerIcon },
    { id: 'dryer', name: 'Dryer', icon: dryerIcon },
    { id: 'dishwasher', name: 'Dishwasher', icon: dishwasherIcon },
    { id: 'microwave', name: 'Microwave', icon: microwaveIcon },
    { id: 'garbage_disposal', name: 'Garbage Disposal', icon: disposalIcon },
    { id: 'ice_maker', name: 'Ice Maker', icon: iceMakerIcon },
];

const issuesMap: Record<string, string[]> = {
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

const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
    const progress = (currentStep / totalSteps) * 100;
    return (
        <div className="w-full bg-gray-800 h-2 rounded-full mb-6 overflow-hidden">
            <div
                className="h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%`, backgroundColor: '#D4F427' }}
            ></div>
        </div>
    );
};

export default function DiagnosticWizard() {
    const { createContact, loading, error } = useProfix Appliance RepairCRM();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        appliance: null as string | null,
        issue: null as string | null,
        availability: null as string | null,
        zipCode: '',
        address: '',
        city: '',
        state: 'NV',
        contactMethod: 'email',
        email: '',
        phone: '',
        name: '',
        smsConsent: false
    });
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

    const totalSteps = 6;

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const updateForm = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (['appliance', 'issue', 'availability'].includes(field)) {
            setTimeout(() => handleNext(), 300);
        }
    };

    const handleSubmit = async () => {
        try {
            // Aggregate all details into a single custom field string
            const serviceDetails = `Appliance: ${formData.appliance} | Issue: ${formData.issue} | Availability: ${formData.availability} | Zip: ${formData.zipCode} | Address: ${formData.address}, ${formData.city}, ${formData.state}`;

            await createContact({
                firstName: formData.name.split(' ')[0],
                lastName: formData.name.split(' ').slice(1).join(' ') || '',
                email: formData.email,
                phone: formData.phone,
                address1: formData.address,
                city: formData.city,
                state: formData.state,
                postalCode: formData.zipCode,
                customFields: {
                    'PoHYSbC0KA87DyvzLI11': serviceDetails
                },
                tags: ['Website Lead'],
                turnstileToken: turnstileToken || ''
            });
            alert("Request Submitted! We will contact you shortly.");
            // Reset form or redirect if needed
            setStep(1);
            setFormData({
                appliance: null,
                issue: null,
                availability: null,
                zipCode: '',
                address: '',
                city: '',
                state: 'NV',
                contactMethod: 'email',
                email: '',
                phone: '',
                name: '',
                smsConsent: false
            });
            setTurnstileToken(null);
        } catch (err) {
            console.error("Submission error:", err);
            // Error is already handled by hook and returned as `error` state
        }
    };

    const renderStep1_Appliance = () => (
        <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-2">Which appliance needs repair?</h3>
            <p className="text-gray-400 mb-6">Select the type of appliance to get started.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {appliances.map((app) => (
                    <button
                        key={app.id}
                        onClick={() => updateForm('appliance', app.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${formData.appliance === app.id
                            ? 'text-white'
                            : 'border-gray-800 bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                            }`}
                        style={{
                            borderColor: formData.appliance === app.id ? '#D4F427' : '',
                            backgroundColor: formData.appliance === app.id ? 'rgba(212, 244, 39, 0.1)' : '',
                        }}
                    >
                        <div className={`mb-3 transition-all duration-300 ${formData.appliance === app.id ? 'opacity-100 scale-110' : 'opacity-40 grayscale group-hover:opacity-70'}`}>
                            <img
                                src={app.icon}
                                alt={app.name}
                                className="w-12 h-12 object-contain transition-all duration-300"
                                style={{
                                    filter: formData.appliance === app.id ? 'drop-shadow(0 0 8px rgba(212, 244, 39, 0.4))' : 'none'
                                }}
                            />
                        </div>
                        <span className="font-medium text-sm md:text-base text-center">{app.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderStep2_Issue = () => {
        const issues = issuesMap[formData.appliance || ''] || [];
        const applianceName = appliances.find(a => a.id === formData.appliance)?.name;

        return (
            <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-2">What's wrong with your {applianceName}?</h3>
                <p className="text-gray-400 mb-6">Select the issue that best describes the problem.</p>
                <div className="space-y-3">
                    {issues.map((issue, idx) => (
                        <button
                            key={idx}
                            onClick={() => updateForm('issue', issue)}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${formData.issue === issue
                                ? 'text-white font-medium shadow-sm border-[#D4F427] bg-[#D4F427]/10'
                                : 'border-gray-800 bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                                }`}
                        >
                            <span>{issue}</span>
                            {formData.issue === issue && <CheckCircle size={20} style={{ color: '#D4F427' }} />}
                        </button>
                    ))}
                    <button
                        onClick={() => updateForm('issue', 'Other / Not Listed')}
                        className="w-full text-left p-4 rounded-xl border-2 border-gray-800 text-gray-500 hover:bg-gray-800 transition-all"
                    >
                        Other / Not Listed
                    </button>
                </div>
            </div>
        );
    };

    const renderStep3_Availability = () => (
        <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-2">What is your availability?</h3>
            <div className="space-y-4 mt-6">
                {availabilityOptions.map((option, idx) => (
                    <button
                        key={idx}
                        onClick={() => updateForm('availability', option.label)}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center ${formData.availability === option.label
                            ? 'bg-[#D4F427]/10 border-[#D4F427] ring-1 ring-[#D4F427]/20'
                            : 'border-gray-800 bg-gray-800/50 text-gray-400 hover:border-gray-700 hover:bg-gray-800'
                            }`}
                    >
                        <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 transition-colors`}
                            style={{ borderColor: formData.availability === option.label ? '#D4F427' : '#4b5563' }}>
                            {formData.availability === option.label && (
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D4F427' }} />
                            )}
                        </div>

                        <div>
                            <div className={`font-bold text-lg ${formData.availability === option.label ? 'text-white' : 'text-gray-300'}`}>{option.label}</div>
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
            <h3 className="text-2xl font-bold text-white mb-2">Where do you need service?</h3>
            <p className="text-gray-400 mb-6">Enter your ZIP code to verify we service your area in Las Vegas.</p>

            <div className="p-4 rounded-lg mb-6 border flex items-start bg-gray-800/50 border-gray-700">
                <ShieldCheck className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#D4F427' }} />
                <p className="text-sm text-gray-300">
                    Profix Appliance Repair Appliance Repair technicians are currently active in Summerlin, Henderson, and North Las Vegas areas.
                </p>
            </div>

            <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                    placeholder="Enter ZIP Code (e.g. 89118)"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-800 bg-gray-800/50 text-white focus:border-[#D4F427] focus:ring-0 text-lg outline-none transition-colors placeholder:text-gray-600"
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
            <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
            <p className="text-gray-400 mb-6">Where should we send your quote and availability?</p>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Street Address</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => updateForm('address', e.target.value)}
                            placeholder="123 Main St"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-800 bg-gray-800/50 text-white focus:border-[#D4F427] outline-none transition-colors placeholder:text-gray-600"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">City</label>
                        <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => updateForm('city', e.target.value)}
                            placeholder="Las Vegas"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-800 bg-gray-800/50 text-white focus:border-[#D4F427] outline-none transition-colors placeholder:text-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">State</label>
                        <input
                            type="text"
                            value={formData.state}
                            onChange={(e) => updateForm('state', e.target.value)}
                            placeholder="NV"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-800 bg-gray-800/50 text-white focus:border-[#D4F427] outline-none transition-colors placeholder:text-gray-600"
                            readOnly
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateForm('name', e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-800 bg-gray-800/50 text-white focus:border-[#D4F427] outline-none transition-colors placeholder:text-gray-600"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateForm('email', e.target.value)}
                            placeholder="john@example.com"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-800 bg-gray-800/50 text-white focus:border-[#D4F427] outline-none transition-colors placeholder:text-gray-600"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateForm('phone', e.target.value)}
                            placeholder="(702) 555-0123"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-800 bg-gray-800/50 text-white focus:border-[#D4F427] outline-none transition-colors placeholder:text-gray-600"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <label className="flex items-start cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={formData.smsConsent}
                        onChange={(e) => setFormData(prev => ({ ...prev, smsConsent: e.target.checked }))}
                        className="mt-0.5 h-5 w-5 rounded border-2 border-gray-700 bg-gray-800 text-[#D4F427] focus:ring-[#D4F427] focus:ring-offset-0 cursor-pointer flex-shrink-0"
                        style={{ accentColor: '#D4F427' }}
                    />
                    <span className="ml-3 text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                        By entering your phone number and submitting this form, you consent to receive marketing and service-related text messages from Profix Appliance Repair Appliance Repair at the number you provide. Up to 4 msgs/month. Message and data rates may apply. Text STOP to cancel, HELP for help. Consent is not a condition of purchase. View our <a href="/privacy" className="text-[#D4F427] hover:underline font-medium">Privacy Policy</a> and <a href="/terms" className="text-[#D4F427] hover:underline font-medium">Terms of Service</a>.
                    </span>
                </label>
            </div>

            <button
                onClick={handleNext}
                disabled={!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.smsConsent}
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
                    <h3 className="text-2xl font-bold text-white">Summary</h3>
                    <p className="text-gray-400">Please review your request details.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 space-y-4 border border-gray-700 mb-6">
                    <div className="flex justify-between border-b border-gray-700 pb-3">
                        <span className="text-gray-500">Service:</span>
                        <span className="font-medium text-white text-right">{applianceName} Repair</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-3">
                        <span className="text-gray-500">Issue:</span>
                        <span className="font-medium text-white text-right max-w-[60%]">{formData.issue}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-3">
                        <span className="text-gray-500">Urgency:</span>
                        <span className="font-medium text-white text-right">{formData.availability}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-3">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-medium text-white text-right">{formData.address}, {formData.city}, {formData.zipCode}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                        <span className="text-gray-500">Contact:</span>
                        <div className="text-right">
                            <div className="font-medium text-white">{formData.name}</div>
                            <div className="text-sm text-gray-500">{formData.phone}</div>
                        </div>
                    </div>
                </div>



                <div className="flex justify-center mb-6">
                    <Turnstile
                        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || "0x4AAAAAACLb04tnAvmTnn-g"}
                        onSuccess={(token) => setTurnstileToken(token)}
                        onError={() => setTurnstileToken(null)}
                        onExpire={() => setTurnstileToken(null)}
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading || !turnstileToken}
                    className="w-full text-gray-900 py-4 rounded-xl font-bold text-lg transition-all shadow-lg animate-pulse-slow disabled:opacity-75 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#D4F427', boxShadow: '0 10px 15px -3px rgba(212, 244, 39, 0.4)' }}
                >
                    {loading ? 'Submitting...' : 'Submit Request'}
                </button>
                {error && <p className="text-center text-red-500 mt-2 text-sm">Error: {error}</p>}
                <p className="text-center text-xs text-gray-500 mt-4">One of our master technicians will review this immediately.</p>
            </div >
        );
    };

    return (
        <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col min-h-[500px]">
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
                <h2 className="font-bold text-white">Diagnostic Wizard</h2>
                <div className="text-sm font-medium text-gray-400">Step {step} of {totalSteps}</div>
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

            {step > 1 && step < 6 && (
                <div className="px-6 py-4 border-t border-gray-700 bg-gray-800/80 flex justify-between items-center">
                    <button
                        onClick={handleBack}
                        className="text-gray-400 hover:text-white font-medium flex items-center transition-colors"
                    >
                        <ChevronLeft size={18} className="mr-1" /> Back
                    </button>
                    {step > 3 && (
                        <span className="text-xs text-gray-500">Step {step} of {totalSteps}</span>
                    )}
                </div>
            )}
        </div>
    );
}
