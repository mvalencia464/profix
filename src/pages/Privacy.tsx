import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
                    <p className="text-gray-500 mb-8">Last Updated: December 6, 2025</p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Pro Fix LV ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Name and contact information (email address, phone number, mailing address)</li>
                                <li>Service request details (appliance type, issue description, preferred service time)</li>
                                <li>Payment information (processed securely through third-party payment processors)</li>
                                <li>Communication preferences and consent for marketing messages</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Provide, maintain, and improve our repair services</li>
                                <li>Process your service requests and communicate with you about appointments</li>
                                <li>Send you service updates, quotes, and appointment reminders</li>
                                <li>Send marketing communications (only with your consent)</li>
                                <li>Respond to your comments, questions, and customer service requests</li>
                                <li>Comply with legal obligations and protect our rights</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Text Messaging</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you provide consent, we may send you text messages related to your service requests and marketing communications. You can opt out at any time by texting STOP to any message you receive from us. Message and data rates may apply. We typically send up to 4 messages per month.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                                <li>Service providers who assist us in operating our business</li>
                                <li>Professional advisors such as lawyers and accountants</li>
                                <li>Law enforcement or government agencies when required by law</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Opt out of marketing communications at any time</li>
                                <li>Withdraw your consent for SMS messages by texting STOP</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                            </p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-gray-700 font-medium">Pro Fix LV</p>
                                <p className="text-gray-700">Email: hello@profixlvappliancerepair.com</p>
                                <p className="text-gray-700">Phone: 888-990-8010</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
