import { useParams, Link } from 'react-router-dom';
import { strategyData } from '../data/strategyData';
import {
    ArrowLeft,
    Clock,
    ShieldCheck,
    Award,
    ArrowRight,
    Navigation,
    CheckCircle,
    Phone,
    Zap,
    HelpCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormattedText from '../components/FormattedText';

export default function ServicePage() {
    const { serviceCategory, serviceType } = useParams<{ serviceCategory: string; serviceType: string }>();
    const currentPath = `/${serviceCategory}/${serviceType}`;

    // Find the current page data
    const pageData = strategyData.find(item => item.url === currentPath);

    if (!pageData) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white">Service Not Found</h1>
                    <p className="text-gray-400 mt-2">Could not find strategy data for: {currentPath}</p>
                    <Link to="/" className="text-[#D4F427] hover:underline mt-4 block">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Premium Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4F427]/10 rounded-full blur-3xl -mr-64 -mt-32 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -ml-64 -mb-32 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <Link to={`/${serviceCategory}`} className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-6 font-medium group">
                                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to {serviceCategory?.replace(/-/g, ' ')}
                            </Link>

                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-900 text-[#D4F427] text-xs font-bold uppercase tracking-wide mb-6 border border-gray-800">
                                <Zap size={14} className="mr-1" />
                                Priority Repair Services
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
                                {pageData.pageName.split(' ').map((word, i) => (
                                    <span key={i} className={word.toLowerCase() === 'repair' ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' : ''}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                                Expert appliance diagnostics and repairs in Las Vegas. We combine 15+ years of technical mastery with same-day availability to get your home back in sync.
                            </p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                <button className="px-8 py-4 rounded-full font-black text-lg transition-all flex items-center text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                                    style={{ backgroundColor: '#D4F427' }}>
                                    <Phone size={20} className="mr-2" /> 888-990-8010
                                </button>
                                <Link to="/process" className="px-8 py-4 rounded-full font-bold text-lg bg-white border-2 border-gray-100 text-gray-900 hover:border-[#D4F427] transition-all hover:bg-gray-50">
                                    Our Process
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4F427] to-blue-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                    <img
                                        src={pageData.imageThumbnail || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"}
                                        alt={pageData.pageName}
                                        className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="p-6 bg-gradient-to-t from-black/90 to-transparent absolute bottom-0 left-0 right-0">
                                        <div className="flex items-center gap-2 text-[#D4F427] mb-2">
                                            <ShieldCheck size={20} fill="currentColor" fillOpacity={0.2} />
                                            <span className="text-white text-base font-black tracking-tight">Licensed & Bonded Specialists</span>
                                        </div>
                                        <p className="text-gray-300 text-xs font-bold uppercase tracking-widest pl-7">Las Vegas' Premier Technical Authority</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Ribbon */}
            <div className="bg-gray-50 border-y border-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#D4F427]">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="font-black text-gray-900 leading-none mb-1">Same-Day</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Availability</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#D4F427]">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <p className="font-black text-gray-900 leading-none mb-1">90-Day</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Warranty</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#D4F427]">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="font-black text-gray-900 leading-none mb-1">15+ Years</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Experience</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#D4F427]">
                                <Navigation size={24} />
                            </div>
                            <div>
                                <p className="font-black text-gray-900 leading-none mb-1">All Vegas</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Service Area</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {pageData.sections && pageData.sections.map((section, idx) => (
                        <section key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
                            {/* Decorative Number/Icon Area */}
                            <div className="md:w-1/3 w-full">
                                <div className="sticky top-32">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 text-[#D4F427] font-black text-2xl mb-6 shadow-xl rotate-3">
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </div>
                                    <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                                        {section.title}
                                    </h2>
                                    <div className="h-1.5 w-12 bg-[#D4F427] rounded-full mb-6"></div>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        Deeply technical, locally focused diagnostics for {pageData.pageName}.
                                    </p>
                                    <div className="mt-8 space-y-3">
                                        <div className="flex items-center text-sm font-bold text-gray-900">
                                            <CheckCircle size={16} className="text-[#D4F427] mr-2" />
                                            Professional Standards
                                        </div>
                                        <div className="flex items-center text-sm font-bold text-gray-900">
                                            <CheckCircle size={16} className="text-[#D4F427] mr-2" />
                                            Local Vegas Expertise
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="md:w-2/3 w-full">
                                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all duration-500">
                                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                                        <FormattedText text={section.content} />
                                    </div>

                                    {section.faqs && (
                                        <div className="mt-12 space-y-8">
                                            {section.faqs.map((faq, fIdx) => (
                                                <div key={fIdx} className="group border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                                                    <div className="flex items-start gap-4">
                                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-xl bg-gray-50 group-hover:bg-[#D4F427] flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-all duration-300">
                                                            <HelpCircle size={18} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                                                                {faq.question}
                                                            </h4>
                                                            <p className="text-gray-600 leading-relaxed font-medium">
                                                                <FormattedText text={faq.answer} />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* Final Conversion CTA */}
            <div className="max-w-7xl mx-auto px-4 pb-32">
                <div className="bg-gray-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
                    {/* Animated background element */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4F427] rounded-full blur-[120px] opacity-10 -mr-32 -mt-32"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-[#D4F427] text-sm font-bold mb-8 backdrop-blur-md border border-white/10">
                            Available Now: Same-Day Appointments
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            Ready to Fix Your <span className="text-[#D4F427]">{serviceCategory?.replace(/-/g, ' ')}?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12">
                            Don't let a broken appliance slow you down. Get an instant diagnosis or book your expert repair technician in seconds.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="w-full sm:w-auto px-10 py-5 rounded-full font-black text-xl transition-all flex items-center justify-center text-gray-900 shadow-xl hover:shadow-[#D4F427]/20 hover:scale-105 active:scale-95"
                                style={{ backgroundColor: '#D4F427' }}>
                                <Phone size={24} className="mr-3" /> Call 888-990-8010
                            </button>
                            <Link to="/process" className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-xl border-2 border-white/10 text-white hover:bg-white/5 transition-all flex items-center justify-center group">
                                How It Works <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 border-t border-white/10 pt-12">
                            <div className="text-center">
                                <p className="text-3xl font-black text-white">$125</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Service Call</p>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-3xl font-black text-white">48hr</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Response Time</p>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-3xl font-black text-white">100%</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">OEM Parts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}