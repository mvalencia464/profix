import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
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
                            <li><Link to="/admin/strategy" className="hover:text-white transition-colors">Admin Plan</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/refrigerator-freezer-repair/refrigerator-repair" className="hover:text-white transition-colors">Refrigerator Repair</Link></li>
                            <li><Link to="/laundry-appliance-repair/washing-machine-repair" className="hover:text-white transition-colors">Washer & Dryer Repair</Link></li>
                            <li><Link to="/kitchen-appliance-repair/oven-repair" className="hover:text-white transition-colors">Oven & Stove Repair</Link></li>
                            <li><Link to="/general-appliance-services/emergency-appliance-repair" className="hover:text-white transition-colors">Emergency Service</Link></li>
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
                                <span className="font-bold text-white">888-990-8010</span>
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
    );
}
