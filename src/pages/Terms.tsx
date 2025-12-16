import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
    return (
        <div className="min-h-screen bg-white">
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <Link to="/" className="flex items-center">
                            <img src="https://storage.googleapis.com/msgsndr/24DQMHcJGgO6F2Gnn4mF/media/6933cae0e0f092cbeff039ab.webp" alt="Pro Fix LV Logo" className="h-16 w-auto" />
                        </Link>
                        <Link to="/" className="flex items-center text-gray-600 hover:text-[#D4F427] transition-colors font-medium">
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
                    <p className="text-gray-500 mb-8">Last Updated: December 6, 2025</p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                By accessing or using the services provided by Pro Fix LV, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Pro Fix LV provides appliance repair services for residential customers in the Las Vegas, Henderson, and Summerlin areas. Our services include diagnosis, repair, and maintenance of major household appliances including but not limited to refrigerators, washers, dryers, ovens, dishwashers, and other kitchen appliances.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Requests and Appointments</h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Service requests must be submitted through our website, phone, or other approved channels</li>
                                <li>Appointment times are estimates and may be subject to change due to unforeseen circumstances</li>
                                <li>You must provide accurate information about your appliance and the issues you're experiencing</li>
                                <li>You agree to provide safe access to the appliance requiring service</li>
                                <li>Cancellations must be made at least 24 hours in advance to avoid cancellation fees</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Diagnostic fees may apply and will be disclosed before service</li>
                                <li>Quotes provided are estimates and may change based on the actual repairs needed</li>
                                <li>Payment is due upon completion of service unless other arrangements are made in advance</li>
                                <li>We accept major credit cards, debit cards, and other forms of payment as specified</li>
                                <li>All prices are subject to applicable taxes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Pro Fix LV provides a 90-day warranty on all parts and labor, subject to the following conditions:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>The warranty covers defects in parts installed by us and workmanship</li>
                                <li>The warranty does not cover damage caused by misuse, abuse, or normal wear and tear</li>
                                <li>The warranty does not cover appliances moved after service or subjected to unauthorized repairs</li>
                                <li>To claim warranty service, contact us within the warranty period with proof of service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Pro Fix LV liability is limited to the cost of the repair service provided. We are not responsible for consequential damages, including but not limited to food spoilage, property damage, or loss of use. We maintain appropriate insurance coverage for our operations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Text Messaging Terms</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                By providing your phone number and consenting to receive text messages:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>You agree to receive service-related and marketing text messages from Pro Fix LV</li>
                                <li>Message frequency is up to 4 messages per month</li>
                                <li>Message and data rates may apply depending on your mobile carrier</li>
                                <li>You can opt out at any time by texting STOP to any message</li>
                                <li>Text HELP for assistance or contact us at (702) 555-0199</li>
                                <li>Consent to receive text messages is not a condition of purchase</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibilities</h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Provide accurate contact and service location information</li>
                                <li>Ensure safe and clear access to the appliance requiring service</li>
                                <li>Be present or have an authorized adult present during service</li>
                                <li>Secure pets and ensure a safe working environment for technicians</li>
                                <li>Notify us of any hazardous conditions before the appointment</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed">
                                All content on our website, including text, graphics, logos, and images, is the property of Pro Fix LV and protected by copyright and trademark laws. You may not use our content without written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Any disputes arising from these terms or our services will be resolved through binding arbitration in Clark County, Nevada, under the rules of the American Arbitration Association. You agree to waive your right to a jury trial.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-gray-700 font-medium">Pro Fix LV</p>
                                <p className="text-gray-700">Email: hello@profixlvappliancerepair.com</p>
                                <p className="text-gray-700">Phone: (702) 555-0199</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-950 text-white py-10 border-t border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-xs text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Pro Fix LV. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
