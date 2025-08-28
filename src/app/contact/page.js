"use client"

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Header active="contact" />

            {/* Hero Section */}
            <section className="relative min-h-[260px] flex items-center">
                <div
                    className="relative max-w-8xl px-4 sm:px-32 py-20 md:py-28 z-10 w-full flex flex-col justify-center"
                    style={{
                        backgroundImage: "linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 40%, rgba(255,255,255,0) 100%), url('/images/contact/contact.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
                    <div className="inline-flex items-center space-x-2 bg-primary/70 px-6 py-3 rounded-md shadow-lg w-max">
                        <Link href="/" className="text-white font-semibold text-base">Home</Link>
                        <span className="text-white/80 text-lg">|</span>
                        <span className="w-2 h-2 rounded-full bg-white/60 inline-block"></span>
                        <span className="text-white text-base">Contact</span>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left: Info */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                            Connect with Us – <span className="text-primary">We’re Here for You</span>
                        </h2>
                        <p className="text-gray-700 mb-8">
                            We appreciate your interest in Devtech Infosolution. Kindly reach out to us with your business requirements or information you are looking for and our industry experts will get back to you within one to two business days.
                        </p>
                        <div className="bg-white rounded-lg border border-primary/20 shadow p-6 mb-6">
                            <div className="mb-4">
                                <span className="block text-gray-700 font-semibold mb-1">Email</span>
                                <span className="block text-primary-dark font-medium">
                                    <Link href="mailto:info@devtechinfosolutions.com">info@devtechinfosolutions.com</Link>
                                </span>
                            </div>
                            <div className="mb-4">
                                <span className="block text-primary font-semibold bg-primary/10 px-2 py-1 rounded text-xs w-max mb-1">Indian Office</span>
                                <span className="block text-gray-800 text-sm">Devtech Infosolutions</span>
                                <span className="block text-gray-800 text-sm">Office east wung 326,</span>
                                <span className="block text-gray-800 text-sm">Siddhraj Z2</span>
                                <span className="block text-gray-800 text-sm">Kudasan, Gandhinagar, India</span>
                                <span className="block text-gray-800 text-sm mb-1">
                                    <Link href="tel:+918511106781" className="hover:underline">
                                        +91 85111 06781
                                    </Link>
                                </span>
                            </div>
                            <div className="mb-4">
                                <span className="block text-primary font-semibold bg-primary/10 px-2 py-1 rounded text-xs w-max mb-1">Canada Office</span>
                                <span className="block text-gray-800 text-sm">Devtech Infosolutions</span>
                                <span className="block text-gray-800 text-sm">17, Titanium Cres.</span>
                                <span className="block text-gray-800 text-sm">Halifax, NS B3P 0J3</span>
                                <span className="block text-gray-800 text-sm">
                                    <Link href="tel:+17785982151" className="hover:underline">
                                        +1 (778) 598-2151
                                    </Link>
                                </span>
                                {/* <span className="block text-gray-800 text-sm mb-1">+49 1512 9960324</span> */}
                            </div>
                            <div className="border-t border-primary/10 pt-4 mt-4">
                                <span className="block text-gray-700 font-semibold text-sm">Phone Number</span>
                                <span className="block text-primary-dark font-bold text-lg">
                                    <a href="tel:+918511106781" className="hover:underline">
                                        +91 85111 06781
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Right: Illustration */}
                    <div className="flex items-center justify-center mt-8 md:mt-0">
                        <img src="/images/contact/contact-us.jpg" alt="Contact Illustration" className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
