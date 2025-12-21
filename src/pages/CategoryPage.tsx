import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { strategyData } from '../data/strategyData';
import { ArrowLeft, CheckCircle, Phone, Award, ShieldCheck, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormattedText from '../components/FormattedText';

export default function CategoryPage() {
    const { serviceCategory } = useParams<{ serviceCategory: string }>();
    const currentPath = `/${serviceCategory}`;

    // Find the current L2 page data
    const categoryData = strategyData.find(item => item.url === currentPath && item.type === 'L2');

    // Find all child L3 services
    const childServices = useMemo(() => {
        if (!categoryData) return [];
        return strategyData.filter(item =>
            item.type === 'L3' && item.url.startsWith(categoryData.url + '/')
        );
    }, [categoryData]);

    if (!categoryData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Category Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:underline mt-4 block">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-20 lg:pt-32 pb-16 bg-gray-900 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4F427] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-[#D4F427]/60 mb-6 group">
                        <Link to="/" className="hover:text-[#D4F427] transition-colors flex items-center">
                            <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Home
                        </Link>
                        <span>/</span>
                        <span className="text-white font-bold">{categoryData.pageName}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        {categoryData.pageName.split(' Services')[0]}
                        <span className="block text-[#D4F427]">Las Vegas Experts</span>
                    </h1>

                    <div className="flex flex-wrap gap-4 items-center mt-8">
                        <Link
                            to="/process"
                            className="px-8 py-4 rounded-full font-black text-lg transition-all flex items-center bg-[#D4F427] text-black hover:scale-105 shadow-xl hover:shadow-[#D4F427]/20"
                        >
                            <Phone size={20} className="mr-2" /> Book Service Now
                        </Link>
                        <div className="flex items-center space-x-4 px-6 py-4 bg-white/5 bg-backdrop-blur rounded-full border border-white/10">
                            <ShieldCheck size={20} className="text-[#D4F427]" />
                            <span className="text-white font-bold text-sm tracking-wide">90-Day Warranty Included</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content & Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-16">
                        {categoryData.sections ? (
                            categoryData.sections.map((section, idx) => (
                                <section key={idx} className="relative group">
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#D4F427] opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                                    <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center">
                                        <span className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 text-sm flex items-center justify-center mr-4 group-hover:bg-[#D4F427] group-hover:text-black transition-all">0{idx + 1}</span>
                                        {section.title}
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                                        <FormattedText text={section.content} />
                                    </div>
                                </section>
                            ))
                        ) : (
                            <div className="bg-gray-50 rounded-3xl p-12 border-2 border-dashed border-gray-200">
                                <p className="text-gray-400 text-center font-bold italic text-xl">
                                    [Building out {categoryData.pageName} Content Hub...]
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Service Sidebar (Interlinking) */}
                    <div className="space-y-8">
                        <div className="sticky top-32">
                            <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4F427] opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
                                <h2 className="text-2xl font-black mb-8">Our Specializations</h2>
                                <div className="space-y-4">
                                    {childServices.map((service: any, idx: number) => (
                                        <Link
                                            key={idx}
                                            to={service.url}
                                            className="group/item flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#D4F427] hover:border-[#D4F427] transition-all"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-4 group-hover/item:bg-white/20 transition-colors">
                                                <CheckCircle size={18} className="text-[#D4F427] group-hover/item:text-black" />
                                            </div>
                                            <span className="font-bold text-gray-300 group-hover/item:text-black transition-colors">{service.pageName.split(' Las Vegas')[0]}</span>
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <h3 className="flex items-center font-black text-[#D4F427] mb-2 uppercase tracking-widest text-xs">
                                        <Award size={14} className="mr-2" /> Local Trusted Parts
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                        We exclusively use OEM factory-certified parts for all {categoryData.pageName.split(' ')[0]} repairs.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-[#D4F427] rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                                    <Clock size={32} className="text-black" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">Same-Day Availability</h3>
                                <p className="text-gray-500 font-medium mb-6">Technicians are dispatched within 2-4 hours of your call.</p>
                                <a href="tel:8889908010" className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-colors flex items-center justify-center gap-2">
                                    <Phone size={18} /> Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
