import { useEffect } from 'react';
import { Clock, Globe, Users, Award, DollarSign, MapPin, ThermometerSun } from 'lucide-react';
import DiagnosticWizard from '../components/DiagnosticWizard';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Process() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 rounded-full px-6 py-2 mb-6"
                            style={{ backgroundColor: 'rgba(212, 244, 39, 0.15)' }}>
                            <span className="text-sm font-bold uppercase tracking-wider text-gray-800">Smart Technology Meets Expert Service</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            How It Works
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Smart diagnostics, fast scheduling, and expert repair. We combine cutting-edge technology with human expertise to get your appliances fixed quickly.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundImage: 'linear-gradient(to right, #D4F427, #a3e635)' }}></div>

                            <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 font-black text-lg"
                                    style={{ backgroundColor: '#D4F427', color: '#000' }}>
                                    1
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Start Your Smart Diagnosis
                                </h3>
                                <p className="text-gray-600 font-medium mb-6 text-lg">
                                    Available 24/7 - Don't wait for business hours
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3"
                                            style={{ backgroundColor: '#D4F427' }}></div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1">Instant Insight</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Whether it's a Samsung fridge or a Whirlpool washer, our AI system identifies the brand and symptoms to offer initial insights immediately
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3"
                                            style={{ backgroundColor: '#D4F427' }}></div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1">We Speak Your Language</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Chat with us anytime in English or Spanish
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3"
                                            style={{ backgroundColor: '#D4F427' }}></div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1">Seamless Hand-off</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Our system gathers the technical details so our human experts are ready to work the moment they pick up the ticket
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center space-x-6">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Clock size={16} className="mr-2" style={{ color: '#D4F427' }} />
                                        <span className="font-medium">24/7 Available</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Globe size={16} className="mr-2" style={{ color: '#D4F427' }} />
                                        <span className="font-medium">English & Spanish</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundImage: 'linear-gradient(to right, #D4F427, #a3e635)' }}></div>

                            <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 font-black text-lg"
                                    style={{ backgroundColor: '#D4F427', color: '#000' }}>
                                    2
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Priority Scheduling
                                </h3>
                                <p className="text-gray-600 font-medium mb-6 text-lg">
                                    We know a broken appliance disrupts your life
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3"
                                            style={{ backgroundColor: '#D4F427' }}></div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1">Urgent Care</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                For emergencies like warm refrigerators or gas smells, we aim to have a technician at your door in under 48 hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3"
                                            style={{ backgroundColor: '#D4F427' }}></div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1">Flexible Booking</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                For non-emergencies, you choose the slot that fits your schedule best—no waiting around all day
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: 'rgba(212, 244, 39, 0.08)' }}>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        We triage every request to get you help when you need it most. Your convenience is our priority.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundImage: 'linear-gradient(to right, #D4F427, #a3e635)' }}></div>

                            <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 font-black text-lg"
                                    style={{ backgroundColor: '#D4F427', color: '#000' }}>
                                    3
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    The Expert Fix
                                </h3>
                                <p className="text-gray-600 font-medium mb-6 text-lg">
                                    A certified local technician arrives fully briefed
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3"
                                            style={{ backgroundColor: '#D4F427' }}></div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1">Transparent Pricing</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                We charge a flat $125 service call fee—competitive and clear, with no hidden surprises
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3"
                                            style={{ backgroundColor: '#D4F427' }}></div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1">15 Years Experience</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Led by Bryan, our Lead Tech with 15 years of experience in appliance repair
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3"
                                            style={{ backgroundColor: '#D4F427' }}></div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1">Local Focus</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                We specialize in Las Vegas homes, understanding exactly how our desert heat and water affect your appliances
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center space-x-6">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Award size={16} className="mr-2" style={{ color: '#D4F427' }} />
                                        <span className="font-medium">Certified</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <DollarSign size={16} className="mr-2" style={{ color: '#D4F427' }} />
                                        <span className="font-medium">$125 Flat Fee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Diagnosis Now</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Our smart diagnostic tool helps identify common appliance issues instantly.
                                Simply tell us what's wrong, and we'll guide you to the right solution and schedule your repair.
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <DiagnosticWizard />
                        </div>
                    </div>

                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
                            style={{ backgroundColor: '#D4F427' }}></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
                            style={{ backgroundColor: '#D4F427' }}></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                                Why Our Process Works Better
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                                        style={{ backgroundColor: '#D4F427' }}>
                                        <Users size={28} className="text-gray-900" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Local Expertise</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our technicians understand Las Vegas conditions—from desert heat to hard water—and how they affect your appliances
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                                        style={{ backgroundColor: '#D4F427' }}>
                                        <ThermometerSun size={28} className="text-gray-900" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Desert-Ready</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We know how extreme temperatures and mineral buildup impact performance, and we fix accordingly
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                                        style={{ backgroundColor: '#D4F427' }}>
                                        <MapPin size={28} className="text-gray-900" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Fast Response</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Being local means faster service. No corporate delays—just your neighbor fixing your appliance, fast
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}