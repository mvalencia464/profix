import { useState } from 'react';
import { useHighLevel } from '../hooks/useHighLevel';
import {
    CheckCircle,
    MapPin,
    ShieldCheck,
    ChevronLeft,
    Mail,
    Phone
} from 'lucide-react';

const appliances = [
    { id: 'fridge_freezer', name: 'Fridge & Freezer', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7ec99b342d9c436db.svg' },
    { id: 'oven', name: 'Oven', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7ec99b31f4dc436dc.svg' },
    { id: 'cooktop', name: 'Cooktop', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f781eaa1b9d8d35b35.svg' },
    { id: 'washing_machine', name: 'Washing Machine', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f781eaa157b2d35b34.svg' },
    { id: 'dryer', name: 'Dryer', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d2b381eaa13eb6d37ecc.svg' },
    { id: 'dishwasher', name: 'Dishwasher', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7ec99b3064fc436dd.svg' },
    { id: 'microwave', name: 'Microwave', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7e6551c9fd4ac87f7.svg' },
    { id: 'garbage_disposal', name: 'Garbage Disposal', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7ec99b30cf4c436e1.svg' },
    { id: 'ice_maker', name: 'Ice Maker', icon: 'https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933d0f7e0f0924405f0c242.svg' },
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
        <div className="w-full bg-gray-200 h-2 rounded-full mb-6 overflow-hidden">
            <div
                className="h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%`, backgroundColor: '#D4F427' }}
            ></div>
        </div>
    );
};

export default function DiagnosticWizard() {
    const { createContact, loading, error } = useHighLevel();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        appliance: null as string | null,
        issue: null as string | null,
        availability: null as string | null,
        zipCode: '',
        contactMethod: 'email',
        email: '',
        phone: '',
        name: '',
        smsConsent: false
    });

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
            await createContact({
                firstName: formData.name.split(' ')[0],
                lastName: formData.name.split(' ').slice(1).join(' ') || '',
                email: formData.email,
                phone: formData.phone,
                smsConsent: formData.smsConsent
            });
            alert("Request Submitted! We will contact you shortly.");
            // Reset form or redirect if needed
            setStep(1);
            setFormData({
                appliance: null,
                issue: null,
                availability: null,
                zipCode: '',
                contactMethod: 'email',
                email: '',
                phone: '',
                name: '',
                smsConsent: false
            });
        } catch (err) {
            console.error("Submission error:", err);
            // Error is already handled by hook and returned as `error` state
        }
    };

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
        const issues = issuesMap[formData.appliance || ''] || [];
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
                        }}
                    >
                        <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 transition-colors`}
                            style={{ borderColor: formData.availability === option.label ? '#D4F427' : '#9ca3af' }}>
                            {formData.availability === option.label && (
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D4F427' }} />
                            )}
                        </div>

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
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D4F427] focus:ring-0 text-lg outline-none transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4F427] outline-none transition-colors"
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
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4F427] outline-none transition-colors"
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
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4F427] outline-none transition-colors"
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
                        className="mt-0.5 h-5 w-5 rounded border-2 border-gray-300 text-[#D4F427] focus:ring-[#D4F427] focus:ring-offset-0 cursor-pointer flex-shrink-0"
                        style={{ accentColor: '#D4F427' }}
                    />
                    <span className="ml-3 text-xs text-gray-600 leading-relaxed">
                        By entering your phone number and submitting this form, you consent to receive marketing and service-related text messages from Profix Appliance Repair at the number you provide. Up to 4 msgs/month. Message and data rates may apply. Text STOP to cancel, HELP for help. Consent is not a condition of purchase. View our <a href="/privacy" className="text-[#D4F427] hover:underline font-medium">Privacy Policy</a> and <a href="/terms" className="text-[#D4F427] hover:underline font-medium">Terms of Service</a>.
                    </span>
                </label>
            </div>

            <button
                onClick={handleNext}
                disabled={!formData.name || !formData.email || !formData.phone || !formData.smsConsent}
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
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full text-gray-900 py-4 rounded-xl font-bold text-lg transition-all shadow-lg animate-pulse-slow disabled:opacity-75 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#D4F427', boxShadow: '0 10px 15px -3px rgba(212, 244, 39, 0.4)' }}
                >
                    {loading ? 'Submitting...' : 'Submit Request'}
                </button>
                {error && <p className="text-center text-red-500 mt-2 text-sm">Error: {error}</p>}
                <p className="text-center text-xs text-gray-400 mt-4">One of our master technicians will review this immediately.</p>
            </div>
        );
    };

    return (
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

            {step > 1 && step < 6 && (
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/80 flex justify-between items-center">
                    <button
                        onClick={handleBack}
                        className="text-gray-500 hover:text-gray-800 font-medium flex items-center transition-colors"
                    >
                        <ChevronLeft size={18} className="mr-1" /> Back
                    </button>
                    {step > 3 && (
                        <span className="text-xs text-gray-400">Step {step} of {totalSteps}</span>
                    )}
                </div>
            )}
        </div>
    );
}
