"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header({ active }) {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", key: "home" },
        { name: "About Us", href: "/about", key: "about" },
        { name: "Services", href: "/services", key: "services" },
        { name: "Industries", href: "/industries", key: "industries" },
        { name: "Career", href: "/career", key: "career" },
    ];

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                <div className="flex items-center space-x-2">
                    <Image src="/logo.png" width="160" height="160" alt="Devtech Logo" />
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 text-base items-center">
                    {navLinks.map(link => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className={`px-1 pb-1 transition ${active === link.key ? "text-primary font-semibold border-b-2 border-primary" : "text-gray-700 hover:text-primary"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <button className="ml-4 bg-primary text-white px-5 py-2 rounded font-semibold text-base shadow hover:bg-primary-dark transition">
                            Contact Us
                        </button>
                    </Link>
                </nav>
                {/* Hamburger */}
                <button
                    className="md:hidden flex items-center justify-center p-2 rounded text-primary-dark focus:outline-none"
                    onClick={() => setOpen(!open)}
                    aria-label="Open Menu"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {/* Mobile Nav */}
            <div className={`md:hidden fixed inset-0 z-50 bg-black/60 transition-all duration-200 ${open ? "block" : "hidden"}`}>
                <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col py-8 px-6">
                    <button
                        className="self-end mb-6 text-primary-dark"
                        onClick={() => setOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X size={28} />
                    </button>
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map(link => (
                            <Link
                                key={link.key}
                                href={link.href}
                                className={`text-lg px-1 py-2 rounded transition ${active === link.key ? "text-primary font-semibold bg-primary/10" : "text-gray-700 hover:text-primary"}`}
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setOpen(false)}>
                            <button className="bg-primary text-white px-5 py-2 rounded font-semibold text-base shadow hover:bg-primary-dark transition w-full mt-4">
                                Contact Us
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
