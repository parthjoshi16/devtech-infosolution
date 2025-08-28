"use client"

import Link from 'next/link';
import { Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Career() {
    const jobPositions = [
        {
            title: 'SAP SD',
            subtitle: 'Sales and Distribution',
            experience: 'Minimum 5 years experience or above',
            type: 'Full Time'
        },
        {
            title: 'SAP BTP',
            subtitle: 'Business Technology Platform',
            experience: 'Minimum 3 years experience or above',
            type: 'Full Time'
        },
        {
            title: 'SAP ABAP',
            subtitle: 'Advanced Business Application Programming',
            experience: 'Minimum 4 years experience or above',
            type: 'Full Time'
        },
        {
            title: 'SAP FICO',
            subtitle: 'Financial Accounting and Controlling',
            experience: 'Minimum 5 years experience or above',
            type: 'Full Time'
        },
        {
            title: 'SAP MM-EWM',
            subtitle: 'Materials Management - Extended Warehouse Management',
            experience: 'Minimum 5 years experience or above',
            type: 'Part Time'
        },
        {
            title: 'SAP BASIS',
            subtitle: 'Business Application Software Integrated Solution',
            experience: 'Minimum 2 years experience or above',
            type: 'Full Time'
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header active="career" />

            {/* Hero Section */}
            <section className="relative min-h-[260px] flex items-center">
                <div
                    className="relative max-w-8xl px-4 sm:px-32 py-20 md:py-28 z-10 w-full flex flex-col justify-center"
                    style={{
                        backgroundImage: "linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 40%, rgba(255,255,255,0) 100%), url('images/career/career.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">Career</h1>
                    <div className="inline-flex items-center space-x-2 bg-primary/70 px-6 py-3 rounded-md shadow-lg w-max">
                        <Link href="/" className="text-white font-semibold text-base">Home</Link>
                        <span className="text-white/80 text-lg">|</span>
                        <span className="w-2 h-2 rounded-full bg-white/60 inline-block"></span>
                        <span className="text-white text-base">Career</span>
                    </div>
                </div>
            </section>

            {/* Career Invitation Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <img src="images/career/career-1.jpg" alt="Career" className="w-[340px] md:w-[420px] rounded-xl shadow-lg" />
                        </div>
                        <div>
                            <h2 className="text-gray-900 text-lg font-semibold mb-4">
                                If you are looking for a challenging and rewarding career, we invite you to explore our open positions and join our mission to shape the future of technology
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Devtech promotes happiness, creativity, collaboration, and work-life balance. With our help, you’ll get the confidence to push yourself, learn new skills, and venture into unexplored territory. We have the potential to create something absolutely wonderful if we work together.
                            </p>
                            <Link href="/contact">
                                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded font-semibold transition-colors">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Requirements Section */}
            <section className="py-6 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                        We are always open for the right candidate with below SAP Skillset
                    </h2>
                    <p className="text-gray-600 mb-8">from the range of 5 to 15 years of experience experts</p>
                </div>
            </section>

            {/* Job Positions Grid */}
            <section className="pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {jobPositions.map((job, index) => (
                            <div key={index} className="border-l-4 border-primary bg-white p-4 sm:p-6 shadow-[0_2px_12px_0_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow rounded-md flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h3>
                                    <p className="text-primary font-semibold mb-2">{job.subtitle}</p>
                                    <p className="text-gray-700 text-sm mb-4">{job.experience}</p>
                                    <div className="flex items-center text-gray-500 text-sm mb-4">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {job.type}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Link
                                        href="mailto:info@devtechinfosolutions.com?subject=Resume%20for%20SAP%20Position"
                                        className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded font-semibold transition-colors flex items-center"
                                    >
                                        Send Resume
                                        <Send className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}