"use client";

import { X } from "lucide-react";

export default function ServiceModal({ open, onClose, service }) {
    if (!open || !service) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
            <div className="bg-white shadow-xl w-full max-w-lg sm:max-w-2xl mx-auto relative overflow-y-auto max-h-[90vh] border-2 border-primary">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-primary-dark text-2xl"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X size={28} />
                </button>
                <div className="p-4 sm:p-8 pt-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-dark mb-4">{service.title}</h2>
                    {service.img && (
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-full h-40 sm:h-64 object-cover rounded-lg mb-6 border"
                        />
                    )}
                    <div className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {service.details}
                    </div>
                </div>
            </div>
        </div>
    );
}
