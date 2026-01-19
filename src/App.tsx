import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { certifications } from './data/certifications';
import { strategyData } from './data/strategyData';
import DiagnosticWizard from './components/DiagnosticWizard';
import CertificationsSection from './components/CertificationsSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FormattedText from './components/FormattedText';
import {
    Star,
    CheckCircle,
    Clock,
    Phone,
    ShieldCheck,
    Award,
    Quote,
    Navigation,
    ArrowRight
} from 'lucide-react';
import heroVanImage from './assets/images/WEBP/profix-truck.webp';
import wolfLogo from './assets/images/wolf.svg';
import NetlifyImage from './components/NetlifyImage';
import timImage from './assets/images/team/tim.webp';
import bryanImage from './assets/images/team/bryan.webp';

// const reviews = [
//     {
//         name: "Sarah Jenkins",
//         location: "Summerlin",
//         text: "Tim came out the same day my fridge stopped cooling. Saved me hundreds in groceries. Honest, fast, and didn't try to upsell me.",
//         rating: 5
//     },
//     {
//         name: "Michael Torres",
//         location: "Henderson",
//         text: "Finally a company that communicates. They texted me when they were on the way and fixed my dryer in under an hour. Local pros for sure.",
//         rating: 5
//     },
//     {
//         name: "Jessica Reynolds",
//         location: "North Las Vegas",
//         text: "I thought I needed a new dishwasher, but the technician found a simple clog. Charged me a fair price for the repair instead of pushing a replacement.",
//         rating: 5
//     }
// ];
interface Review {
    name: string;
    location: string;
    text: string;
    rating: number;
}
const reviews: Review[] = []; // Temporarily removed until real feedback is secured

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

export default function App() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <Navbar />

            <div className="relative pt-20 lg:pt-32 pb-16 lg:pb-32 overflow-hidden bg-gray-900">
                {/* Background Van Image - Positioned to blend */}
                <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none">
                    <NetlifyImage
                        src={heroVanImage}
                        alt="Service Van Background"
                        className="w-full h-full object-cover object-right-bottom opacity-35 xl:opacity-50 transition-opacity duration-1000"
                        cdnOptions={{ width: 1920, format: 'webp' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 35% via-gray-900/60 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-[900px] h-[900px] rounded-full blur-3xl opacity-10 z-0" style={{ background: 'radial-gradient(circle, rgba(212, 244, 39, 0.25) 0%, rgba(212, 244, 39, 0.12) 40%, transparent 70%)' }}></div>
                <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-10 z-0" style={{ background: 'radial-gradient(circle, rgba(212, 244, 39, 0.15) 0%, rgba(212, 244, 39, 0.05) 50%, transparent 100%)' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="text-center lg:text-left space-y-6 relative">
                            <div className="absolute -left-8 top-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#D4F427' }}></div>

                            <div className="relative inline-flex items-center space-x-2 rounded-full px-4 py-1.5 mb-4 animate-fade-in-up shadow-lg border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
                                <Award size={16} className="text-[#D4F427]" />
                                <span className="text-sm font-semibold text-gray-200 uppercase tracking-wide">15 Years Expert Service in Vegas</span>
                            </div>

                            <h1 className="relative text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                                Appliance Repair Service<br />
                                <span className="relative inline-block" style={{
                                    background: 'linear-gradient(135deg, #D4F427 0%, #84cc16 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Las Vegas, NV
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 opacity-50" style={{ background: 'linear-gradient(to right, #D4F427, #84cc16)' }}></div>
                                </span>
                            </h1>
                            <p className="text-xl text-gray-200 font-medium mt-2">We Fix It Fast. So You Can Relax.</p>

                            <p className="text-xl text-gray-400 leading-relaxed font-medium mb-10 max-w-2xl">
                                <FormattedText text="Specializing in the repair of [refrigerators and freezers](/refrigerator-freezer-repair), [laundry appliances](/laundry-appliance-repair), and [kitchen cooking units](/kitchen-appliance-repair) across the entire Las Vegas valley." />
                                <span className="font-bold text-gray-200"> No hidden fees. 90-day warranty.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                                <div className="flex items-center space-x-3 px-4 py-2 bg-gray-800/80 backdrop-blur rounded-full shadow-sm border border-gray-700">
                                    <Clock size={18} style={{ color: '#D4F427' }} />
                                    <span className="text-sm font-bold text-gray-200">15 Years Experience</span>
                                </div>
                                <div className="flex items-center space-x-3 px-4 py-2 bg-gray-800/80 backdrop-blur rounded-full shadow-sm border border-gray-700">
                                    <Phone size={18} style={{ color: '#D4F427' }} />
                                    <span className="text-sm font-bold text-gray-200">24/7 Booking</span>
                                </div>
                            </div>

                            <div className="pt-8 opacity-90 transition-all duration-500">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Expert Service for Premium & Domestic Brands</p>
                                <div className="flex items-center justify-center lg:justify-start space-x-10 flex-wrap gap-y-8">
                                    {['Wolf', 'Sub-Zero', 'Samsung', 'Whirlpool', 'LG', 'GE'].map((brandName) => {
                                        const cert = certifications.find(c => c.name === brandName);
                                        if (!cert) return null;
                                        return (
                                            <img
                                                key={cert.name}
                                                src={cert.name.toLowerCase() === 'wolf' ? wolfLogo : `https://cdn.brandfetch.io/${cert.domain}/w/400/fallback/transparent/type/logo?c=1idEdsUla_OnJPZWieq`}
                                                alt={cert.name}
                                                className="h-6 brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 pointer-events-none"
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-30" style={{ backgroundImage: 'linear-gradient(to right, #D4F427, #a3e635)' }}></div>
                            <DiagnosticWizard />
                        </div>
                    </div>
                </div>
            </div>

            <section id="services" className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-[#84cc16] font-bold tracking-wider uppercase text-sm">Comprehensive Care</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Core Services</h2>
                        <p className="text-gray-700 max-w-2xl mx-auto mt-3">Specialized repair for every major household appliance.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {strategyData.filter(item => item.type === 'L2').map((category, idx) => (
                            <Link key={idx} to={category.url} className="group block bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-[#84cc16] group-hover:bg-[#D4F427] group-hover:text-black transition-colors">
                                    <Award size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#84cc16] transition-colors line-clamp-2 min-h-[3.5rem]">{category.pageName.split(' in ')[0]}</h3>
                                <div className="flex items-center text-sm text-gray-500 font-medium mt-4 group-hover:text-gray-900">
                                    View Services <ArrowRight size={16} className="ml-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="why-us" className="bg-gray-900 py-16 border-y border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Why Las Vegas Chooses Profix Appliance Repair</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 244, 39, 0.1)', color: '#D4F427' }}>
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Smart Diagnostic Wizard</h3>
                            <p className="text-gray-200">Our process is unique because we give you a detailed diagnostic wizard for the most common appliance issues, then we figure out your availability and dispatch a technician fast.</p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 244, 39, 0.1)', color: '#D4F427' }}>
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">24/7 Booking System</h3>
                            <p className="text-gray-200">Call us directly or use our AI booking agent available 24/7 in English and Spanish. We make scheduling fast and easy, anytime you need us.</p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center text-orange-400 mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">15 Years of Expertise</h3>
                            <p className="text-gray-200">Factory-trained, licensed technicians with over 15 years of experience. All repairs backed by our rock-solid 90-day warranty.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 border-b border-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ backgroundColor: '#D4F427' }}></div>
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                                    <NetlifyImage
                                        src={timImage}
                                        alt="Tim Thibodeaux Jr."
                                        className="w-full h-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
                                        cdnOptions={{ width: 600, height: 750 }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <p className="text-white font-bold text-lg">Tim Thibodeaux Jr.</p>
                                        <p className="text-gray-300 text-xs">Co-Founder</p>
                                        <p className="text-gray-400 text-[10px] mt-1">Tim@profixlvappliancerepair.com</p>
                                    </div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500">
                                    <NetlifyImage
                                        src={bryanImage}
                                        alt="Bryan Scott Kinstler"
                                        className="w-full h-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
                                        cdnOptions={{ width: 600, height: 750 }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <p className="text-white font-bold text-lg">Bryan Scott Kinstler</p>
                                        <p className="text-gray-300 text-xs">Co-Founder & Master Technician</p>
                                        <p className="text-gray-400 text-[10px] mt-1">Bryan@profixlvappliancerepair.com</p>
                                    </div>
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
                                    Hi, we're <span className="font-bold text-gray-900">Tim Thibodeaux Jr.</span> and <span className="font-bold text-gray-900">Bryan Scott Kinstler</span>, and we've been serving Las Vegas for over 15 years. Profix Appliance Repair isn't just a business to us—it's our way of delivering the honest, reliable service our neighbors deserve.
                                </p>
                                <p>
                                    With Bryan Scott Kinstler's 15 years of experience and established reputation in appliance repair, combined with Tim's commitment to customer service, we started this company to do things the old-fashioned way. In a city full of big sales teams, faceless dispatch centers, and endless middlemen designed to make you overpay, we stand for something different.
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
                                        <div className="text-2xl font-bold" style={{ color: '#555' }}>
                                            Tim & Bryan Scott Kinstler, Co-Founders
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {reviews.length > 0 && (
                <section id="reviews" className="bg-gray-900 py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <div className="mb-6 md:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Your Neighbors Are Saying</h2>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full">
                                        <Clock size={18} style={{ color: '#D4F427' }} />
                                        <span className="text-sm font-bold text-white">15 Years Trusted</span>
                                    </div>
                                    <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full">
                                        <ShieldCheck size={18} style={{ color: '#D4F427' }} />
                                        <span className="text-sm font-bold text-white">Licensed & Insured</span>
                                    </div>
                                </div>
                            </div>
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
                                    <p className="text-gray-100 mb-6 leading-relaxed">"{review.text}"</p>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white mr-3">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">{review.name}</p>
                                            <p className="text-gray-300 text-xs">{review.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CertificationsSection />

            <section className="bg-white py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Proudly Serving Southern Nevada</h2>
                        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
                            From Summerlin to Henderson, we have trucks fully stocked and ready to deploy to your neighborhood.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                                <p className="text-sm text-gray-900 mb-2 font-bold">Don't see your area?</p>
                                <p className="text-sm text-gray-800">
                                    We are constantly expanding. Call us at <span className="font-bold text-gray-900">888-990-8010</span> to check if a technician is nearby.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 relative group">
                            <div className="absolute inset-0 bg-gray-500/10 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d55226.979168769896!2d-115.26919477750141!3d36.17781390455435!3m2!1i1024!2i768!4f13.1!2m1!1sappliance%20repair%20las%20vegas!5e0!3m2!1sen!2sus!4v1765004812156!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                className="grayscale invert-0 contrast-110 group-hover:grayscale-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Service Area Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
