import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src="https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933cae0e0f092cbeff039ab.webp" alt="Pro Fix LV Logo" className="h-16 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-600 font-medium hover:text-[#D4F427] transition-colors">Home</Link>
                        <a href="/#services" className="text-gray-600 font-medium hover:text-[#D4F427] transition-colors">Services</a>
                        <a href="/#why-us" className="text-gray-600 font-medium hover:text-[#D4F427] transition-colors">Why Us</a>
                        <a href="/#reviews" className="text-gray-600 font-medium hover:text-[#D4F427] transition-colors">Reviews</a>
                        <button className="px-6 py-3 rounded-full font-black text-lg transition-all flex items-center text-gray-900 shadow-md hover:shadow-lg hover:scale-105"
                            style={{ backgroundColor: '#D4F427' }}>
                            <Phone size={20} className="mr-2" /> 888-990-8010
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
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:text-[#D4F427] hover:bg-[rgba(212,244,39,0.1)]">Home</Link>
                        <a href="/#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:text-[#D4F427] hover:bg-[rgba(212,244,39,0.1)]">Services</a>
                        <a href="/#reviews" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:text-[#D4F427] hover:bg-[rgba(212,244,39,0.1)]">Reviews</a>
                        <a href="tel:7025550199" className="block px-3 py-3 text-base font-bold text-gray-900 rounded-md" style={{ backgroundColor: '#D4F427' }}>
                            Call 888-990-8010
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
