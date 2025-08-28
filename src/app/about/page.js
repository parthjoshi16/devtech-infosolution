"use client"

import Link from 'next/link';
import { Award, Users, Target, Lightbulb } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Career', href: '/career' }
];

export default function About() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header */}
            <Header active="about" />

            {/* Hero Section */}
            <section className="relative min-h-[260px] flex items-center">
                <div
                    className="relative max-w-8xl px-4 sm:px-32 py-20 md:py-28 z-10 w-full flex flex-col justify-center"
                    style={{
                        backgroundImage: "linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 40%, rgba(255,255,255,0) 100%), url('/images/about/about.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">About Us</h1>
                    <div className="inline-flex items-center space-x-2 bg-primary/70 px-6 py-3 rounded-md shadow-lg w-max">
                        <Link href="/" className="text-white font-semibold text-base">Home</Link>
                        <span className="text-white/80 text-lg">|</span>
                        <span className="w-2 h-2 rounded-full bg-white/60 inline-block"></span>
                        <span className="text-white text-base">About</span>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative flex flex-col items-center md:items-start">
                        <img src="/images/about/home-about-2.jpg" alt="Team" className="object-cover w-full h-full" width="240" height="240" />
                    </div>
                    <div>
                        <p className="text-gray-700 font-semibold mb-2">Discover the Future with Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Leading the Way in <span className="text-primary">Digital Innovation</span>
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-6">
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Devtech Infosolution is a global leader in business consulting and SAP services, committed to transforming businesses through digital innovation. We specialize in consulting, advisory, migration, implementation, and management of SAP ECC and S/4HANA solutions. Our client engagement model, founded on integrity and trust, allows us to deliver transformative solutions for leading clients in the manufacturing, Petrochemical, energy, Utilities and consumer products industries.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Since our inception we have always put our customers first, developing technology solutions that drive business transformation. With operations in Europe, North America, the APAC, and India, we are dedicated to making a positive impact and serving communities and industry partners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col justify-between">
                        <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4 border border-gray-100 mb-8">
                            <div className="bg-blue-50 rounded-full p-3">
                                <Award className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base text-gray-900 mb-1">Quality of Services</h4>
                                <p className="text-gray-600 text-sm">Improve Service delivery effectiveness and bring Best quality</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4 border border-gray-100">
                            <div className="bg-blue-50 rounded-full p-3">
                                <Users className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base text-gray-900 mb-1">Business and User Centricity</h4>
                                <p className="text-gray-600 text-sm">Better services to end users and all stakeholders</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="rounded-xl overflow-hidden shadow-lg w-[320px] h-[340px] flex items-center justify-center bg-gray-100">
                            <img src="/images/about/why-choose-us.webp" alt="Why Choose Us" className="object-cover w-full h-full" width="56" height="56" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4 border border-gray-100 mb-8">
                            <div className="bg-blue-50 rounded-full p-3">
                                <Target className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base text-gray-900 mb-1">Rich SAP & Domain Expertise</h4>
                                <p className="text-gray-600 text-sm">Leverage in depth experience in SAP and different industries verticals</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4 border border-gray-100">
                            <div className="bg-blue-50 rounded-full p-3">
                                <Lightbulb className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base text-gray-900 mb-1">Drive for Next Gen Ready</h4>
                                <p className="text-gray-600 text-sm">Focus on Innovation and build a future ready solution to improve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}