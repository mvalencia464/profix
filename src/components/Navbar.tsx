import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import logoImage from '../assets/images/logo.webp';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-gradient-to-b from-[#0f172a] via-[#020617]/95 to-[#020617]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logoImage} alt="Profix Appliance Repair Logo" className="h-14 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-300 font-medium hover:text-[#D4F427] transition-colors">Home</Link>
                        <Link to="/#services" className="text-gray-300 font-medium hover:text-[#D4F427] transition-colors">Services</Link>
                        <Link to="/#why-us" className="text-gray-300 font-medium hover:text-[#D4F427] transition-colors">Why Us</Link>
                        <Link to="/#reviews" className="text-gray-300 font-medium hover:text-[#D4F427] transition-colors">Reviews</Link>
                        <button className="px-6 py-3 rounded-full font-black text-lg transition-all flex items-center text-gray-900 shadow-md hover:shadow-lg hover:scale-105"
                            style={{ backgroundColor: '#D4F427' }}>
                            <Phone size={20} className="mr-2" /> (725) 425-5550
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-slate-950 border-b border-white/10 absolute w-full shadow-2xl z-[60]">
                    <div className="px-4 pt-4 pb-8 space-y-3">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg font-semibold text-white rounded-xl hover:bg-white/5 transition-colors">Home</Link>
                        <Link to="/#services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg font-semibold text-white rounded-xl hover:bg-white/5 transition-colors">Services</Link>
                        <Link to="/#reviews" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg font-semibold text-white rounded-xl hover:bg-white/5 transition-colors">Reviews</Link>
                        <div className="pt-4">
                            <a href="tel:7254255550" className="block w-full px-4 py-4 text-center text-lg font-black text-gray-900 rounded-2xl shadow-lg ring-1 ring-white/10" style={{ backgroundColor: '#D4F427' }}>
                                CALL (725) 425-5550
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
