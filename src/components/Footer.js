"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-12 pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                    {/* Logo & About */}
                    <div className="md:col-span-2 flex flex-col">
                        <div className="flex items-center mb-4">
                            <img src="/logo-2.png" width="160" height="160" alt="Devtech Logo" />
                        </div>
                        <p className="text-gray-300 text-sm mb-4">
                            Devtech Infosolution Pvt Ltd is a trusted leader in the realm of SAP S/4 HANA Transformation solutions, dedicated to empowering businesses to thrive in the digital era.
                        </p>
                        <div className="mb-4">
                            <Link
                                href="mailto:info@devtechinfosolutions.com"
                                className="block text-gray-400 text-sm mb-1 hover:underline"
                            >
                                Email Us
                            </Link>
                            <Link
                                href="mailto:info@devtechinfosolutions.com"
                                className="block text-white font-semibold text-lg hover:underline"
                            >
                                info@devtechinfosolutions.com
                            </Link>
                        </div>
                        <Link href="/services">
                            <button className="bg-primary text-white px-6 py-2 rounded text-sm transition-colors mb-4">
                                Know More...
                            </button>
                        </Link>
                        {/* <div className="flex space-x-3">
                            <Link href="#" className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:bg-primary-dark">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.098-.021-2.509-1.531-2.509-1.531 0-1.767 1.195-1.767 2.429v4.684h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.841-1.562 3.039 0 3.6 2.001 3.6 4.601v4.728z" /></svg>
                            </Link>
                            <Link href="#" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /></svg>
                            </Link>
                            <Link href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800">
                                <span className="text-white font-bold text-xs">X</span>
                            </Link>
                        </div> */}
                    </div>
                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white text-sm">Home</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
                            <li><Link href="/career" className="text-gray-300 hover:text-white text-sm">Career</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Our Services */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services#sap-ecc" className="text-gray-300 hover:text-white">SAP ECC & S/4 HANA Application...</Link></li>
                            <li><Link href="/services#sap-s4hana" className="text-gray-300 hover:text-white">SAP S/4 HANA Implementation &...</Link></li>
                            <li><Link href="/services#sap-migration" className="text-gray-300 hover:text-white">SAP Migration Services</Link></li>
                            <li><Link href="/services#sap-technical" className="text-gray-300 hover:text-white">SAP Technical Services</Link></li>
                            <li><Link href="/services#uiux-fiori" className="text-gray-300 hover:text-white">UI/UX/Fiori Mobility</Link></li>
                            <li><Link href="/services#integration" className="text-gray-300 hover:text-white">Integration Services</Link></li>
                        </ul>
                    </div>
                    {/* Get In Touch */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                        <div className="mb-4">
                            <span className="block text-white font-semibold bg-primary px-2 py-1 rounded text-xs w-max mb-1">Indian Office</span>
                            <span className="block text-gray-300 text-sm">Devtech Infosolutions</span>
                            <span className="block text-gray-300 text-sm">Office east wung 326,</span>
                            <span className="block text-gray-300 text-sm">Siddhraj Z2</span>
                            <span className="block text-gray-300 text-sm">Kudasan, Gandhinagar, India</span>
                            <span className="block text-gray-300 text-sm">
                                <Link href="tel:+918511106781" className="hover:underline">
                                    +91 85111 06781
                                </Link>
                            </span>
                        </div>
                        <div>
                            <span className="block text-white font-semibold bg-primary px-2 py-1 rounded text-xs w-max mb-1">Canada Office</span>
                            <span className="block text-gray-300 text-sm">Devtech Infosolutions</span>
                            <span className="block text-gray-300 text-sm">17, Titanium Cres.</span>
                            <span className="block text-gray-300 text-sm">Halifax, NS B3P 0J3</span>
                            <span className="block text-gray-300 text-sm">
                                <Link href="tel:+17785982151" className="hover:underline">
                                    +1 (778) 598-2151
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-3 mt-8 text-center text-xs text-gray-200">
                Copyrights 2024, Devtech Infosolution Pvt Ltd. All Rights Reserved. Development by <span className="font-semibold">Devtech Infosolution</span>
            </div>
        </footer>
    );
}
