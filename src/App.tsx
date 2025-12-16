import { useState } from 'react';
import { Link } from 'react-router-dom';
import DiagnosticWizard from './components/DiagnosticWizard';
import CertificationsSection from './components/CertificationsSection';
import {
    Star,
    CheckCircle,
    MapPin,
    Clock,
    Phone,
    Mail,
    ShieldCheck,
    Award,
    Menu,
    X,
    Quote,
    Facebook,
    Instagram,
    Twitter,
    Navigation
} from 'lucide-react';

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

export default function App() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
        return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center">
                            <img src="https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933cae0e0f092cbeff039ab.webp" alt="Pro Fix LV Logo" className="h-16 w-auto" />
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-600 font-medium hover:text-[#D4F427] transition-colors">Services</a>
                            <a href="#" className="text-gray-600 font-medium hover:text-[#D4F427] transition-colors">Why Us</a>
                            <a href="#" className="text-gray-600 font-medium hover:text-[#D4F427] transition-colors">Reviews</a>
                            <a href="#" className="text-gray-600 font-medium hover:text-[#D4F427] transition-colors">FAQ</a>
                            <button className="px-6 py-3 rounded-full font-black text-lg transition-all flex items-center text-gray-900 shadow-md hover:shadow-lg hover:scale-105"
                                style={{ backgroundColor: '#D4F427' }}>
                                <Phone size={20} className="mr-2" /> (702) 555-0199
                            </button>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:text-[#D4F427] hover:bg-[rgba(212,244,39,0.1)]">Services</a>
                            <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:text-[#D4F427] hover:bg-[rgba(212,244,39,0.1)]">Reviews</a>
                            <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:text-[#D4F427] hover:bg-[rgba(212,244,39,0.1)]">Contact</a>
                        </div>
                    </div>
                )}
            </nav>

            <div className="relative pt-20 lg:pt-28 pb-16 lg:pb-32 overflow-hidden bg-white">
                <div className="absolute bottom-0 left-0 w-[900px] h-[900px] rounded-full blur-3xl opacity-30 z-0" style={{ background: 'radial-gradient(circle, rgba(212, 244, 39, 0.25) 0%, rgba(212, 244, 39, 0.12) 40%, transparent 70%)' }}></div>
                <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 z-0" style={{ background: 'radial-gradient(circle, rgba(212, 244, 39, 0.15) 0%, rgba(212, 244, 39, 0.05) 50%, transparent 100%)' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="text-center lg:text-left space-y-6 relative">
                            <div className="absolute -left-8 top-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#D4F427' }}></div>
                            <div className="absolute -left-4 bottom-20 w-48 h-48 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: '#D4F427' }}></div>

                            <div className="relative inline-flex items-center space-x-2 rounded-full px-4 py-1.5 mb-4 animate-fade-in-up shadow-lg" style={{ backgroundColor: '#D4F427' }}>
                                <Award size={16} className="text-black" />
                                <span className="text-sm font-semibold text-black uppercase tracking-wide">15 Years Expert Service in Vegas</span>
                            </div>

                            <h1 className="relative text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                                We Fix It Fast.<br />
                                <span className="relative inline-block" style={{
                                    background: 'linear-gradient(135deg, #D4F427 0%, #84cc16 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    So You Can Relax.
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 opacity-50" style={{ background: 'linear-gradient(to right, #D4F427, #84cc16)' }}></div>
                                </span>
                            </h1>

                            <p className="relative text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                                Expert repair for all major brands. Same-day service available in Las Vegas, Henderson, and Summerlin.
                                <span className="font-bold text-gray-900"> No hidden fees. 90-day warranty.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                                <div className="flex items-center space-x-3 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm border border-gray-100">
                                    <Clock size={18} style={{ color: '#D4F427' }} />
                                    <span className="text-sm font-bold text-gray-900">15 Years Experience</span>
                                </div>
                                <div className="flex items-center space-x-3 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm border border-gray-100">
                                    <Phone size={18} style={{ color: '#D4F427' }} />
                                    <span className="text-sm font-bold text-gray-900">24/7 Booking</span>
                                </div>
                            </div>

                            <div className="pt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">We Service Nearly All Brands, including</p>
                                <div className="flex items-center justify-center lg:justify-start space-x-6 flex-wrap gap-y-2">
                                    <span className="font-bold text-xl text-gray-600">SAMSUNG</span>
                                    <span className="font-bold text-xl text-gray-600">LG</span>
                                    <span className="font-bold text-xl text-gray-600">Whirlpool</span>
                                    <span className="font-bold text-xl text-gray-600">GE</span>
                                    <span className="font-bold text-xl text-gray-600">BOSCH</span>
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

            <section className="bg-gray-900 py-16 border-y border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Why Las Vegas Chooses Pro Fix</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 244, 39, 0.1)', color: '#D4F427' }}>
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Smart Diagnostic Wizard</h3>
                            <p className="text-gray-400">Our process is unique because we give you a detailed diagnostic wizard for the most common appliance issues, then we figure out your availability and dispatch a technician fast.</p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 244, 39, 0.1)', color: '#D4F427' }}>
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">24/7 Booking System</h3>
                            <p className="text-gray-400">Call us directly or use our AI booking agent available 24/7 in English and Spanish. We make scheduling fast and easy, anytime you need us.</p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center text-orange-400 mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">15 Years of Expertise</h3>
                            <p className="text-gray-400">Factory-trained, licensed technicians with over 15 years of experience. All repairs backed by our rock-solid 90-day warranty.</p>
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
                                    <img
                                        src="https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/693caac5dbed99e4c781a9a1.webp"
                                        alt="Tim Thibodeaux Jr."
                                        className="w-full h-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <p className="text-white font-bold text-lg">Tim Thibodeaux Jr.</p>
                                        <p className="text-gray-300 text-xs">Co-Founder</p>
                                    </div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                                        alt="Brian"
                                        className="w-full h-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <p className="text-white font-bold text-lg">Brian</p>
                                        <p className="text-gray-300 text-xs">Co-Founder & Master Technician</p>
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
                                    Hi, we're <span className="font-bold text-gray-900">Tim Thibodeaux Jr.</span> and <span className="font-bold text-gray-900">Brian</span>, and we've been serving Las Vegas for over 15 years. Pro Fix LV isn't just a business to us—it's our way of delivering the honest, reliable service our neighbors deserve.
                                </p>
                                <p>
                                    With Brian's 15 years of experience and established reputation in appliance repair, combined with Tim's commitment to customer service, we started this company to do things the old-fashioned way. In a city full of big sales teams, faceless dispatch centers, and endless middlemen designed to make you overpay, we stand for something different.
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
                                            Tim & Brian, Co-Founders
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-900 py-24 relative overflow-hidden">
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

            <CertificationsSection />

            <section className="bg-white py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Proudly Serving Southern Nevada</h2>
                        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
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
                                <p className="text-sm text-gray-600 mb-2 font-bold">Don't see your area?</p>
                                <p className="text-sm text-gray-500">
                                    We are constantly expanding. Call us at <span className="font-bold text-gray-900">(702) 555-0199</span> to check if a technician is nearby.
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

            <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <img src="https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/69347291ec99b39a80d4ff59.webp" alt="Pro Fix LV Logo" className="h-10 w-auto opacity-90" />
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

                        <div>
                            <h4 className="font-bold text-white text-lg mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Tim</a></li>
                                <li><Link to="/process" className="hover:text-white transition-colors">Our Process</Link></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white text-lg mb-6">Services</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Refrigerator Repair</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Washer & Dryer Repair</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Oven & Stove Repair</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Emergency Service</a></li>
                            </ul>
                        </div>

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
                                    <span>hello@profixlvappliancerepair.com</span>
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
