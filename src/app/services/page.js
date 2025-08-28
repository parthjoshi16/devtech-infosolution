"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';
import ServiceModal from '@/components/ServiceModal';

export default function Services() {
    const services = [
        {
            id: 'sap-ecc',
            title: 'SAP ECC & S/4 HANA Application...',
            img: 'images/services/service_1.webp',
            description: 'The degree of complexity and diversity of business expand in conjunction with the need for SAP applications. Superior technical competence, trustworthy assistance, continual knowledge...',
            details: `SAP ECC & S/4 HANA Application...

SAP ECC and S/4 HANA are at the core of digital transformation for enterprises. Our team brings deep expertise in implementing, customizing, and supporting SAP ECC and S/4 HANA applications to streamline your business processes, improve efficiency, and drive innovation.

- End-to-end implementation and rollout
- Custom module development and integration
- Ongoing support and optimization
- Migration from ECC to S/4 HANA

Let us help you unlock the full potential of SAP for your business.`
        },
        {
            id: 'sap-s4hana',
            title: 'SAP S/4 HANA Implementation &...',
            img: 'images/services/service_2.jpg',
            description: 'With highly evolving customer preferences reshaping the industry way of working by automation and machine first delivery model. Now, Businesses must invest in appropriate technology...',
            details: `SAP S/4 HANA Implementation & Rollout

With highly evolving customer preferences reshaping the industry way of working by automation and machine first delivery model. Now, Businesses must invest in appropriate technology more than ever before. S/4HANA, SAP's most recent ERP system, has proven to be essential in supporting organizations on their digital transformation journeys. By reengineering your business processes and reacting to new business models, S/4HANA enables you to remain relevant in a competitive market.

SAP S/4HANA can transform all critical enterprise functions from finance and supply chain to customer service and marketing. It enables businesses to transact, analyze and predict in real time in an increasingly unpredictable world.

Devtech Infosolution is having expertise to deliver SAP S/4HANA and new industry solutions in Implementation and Rollout of SAP S/4 HANA.`
        },
        {
            id: 'sap-migration',
            title: 'SAP Migration Services',
            img: 'images/services/service_3.jpg',
            description: 'We will build a unique strategy for each stage of your migration journey. Migrating a SAP database and application environment, as well as the related system software and separated from products, is...',
            details: `SAP Migration Services

We build a unique strategy for each stage of your migration journey. Migrating a SAP database and application environment, as well as the related system software, is a complex process that requires careful planning and execution.

- Assessment and planning
- Data migration and validation
- System upgrades and testing
- Post-migration support

Our experts ensure a smooth, secure, and efficient migration with minimal disruption to your business.`
        },
        {
            id: 'sap-technical',
            title: 'SAP Technical Services',
            img: 'images/services/service_4.jpg',
            description: 'ABAP Development factory, is a line of SAP Services provided by Devtech Infosolution that includes an ABAP Resource Pool with core and advanced skill sets, an Onsite / off-shore delivery center, and a...',
            details: `SAP Technical Services

Our ABAP Development factory includes an ABAP Resource Pool with core and advanced skill sets, an onsite/off-shore delivery center, and a robust support model.

- Custom ABAP development
- SAP system administration and upgrades
- Performance tuning and troubleshooting
- Integration with third-party systems

We deliver reliable technical services to keep your SAP landscape running optimally.`
        },
        {
            id: 'uiux-fiori',
            title: 'UI/UX/Fiori Mobility',
            img: 'images/services/service_5.webp',
            description: "An great user experience is a crucial driver of success for organizations across industries in today's digital world. With a greater focus on UI/UX development, enterprise mobility is becoming mo...",
            details: `UI/UX/Fiori Mobility

A great user experience is a crucial driver of success for organizations across industries in today's digital world. With a greater focus on UI/UX development, enterprise mobility is becoming more important than ever.

- SAP Fiori app design and development
- Responsive and mobile-first UI/UX
- Custom dashboards and analytics
- User adoption and training

Empower your workforce with intuitive, modern SAP interfaces.`
        },
        {
            id: 'integration',
            title: 'Integration Services',
            img: 'images/services/service_6.webp',
            description: 'Devtech assists you to enhance your digital transformation to become an interconnected, intelligent enterprise by providing powerful APIs, integrations, connections, and best practices to...',
            details: `Integration Services

Devtech assists you to enhance your digital transformation to become an interconnected, intelligent enterprise by providing powerful APIs, integrations, connections, and best practices.

- SAP and non-SAP system integration
- API management and development
- Real-time data synchronization
- Secure and scalable architecture

Connect your business processes and data for seamless operations.`
        }
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedService(null);
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header */}
            <Header active="services" />

            {/* Hero Section */}
            <section className="relative min-h-[260px] flex items-center">
                <div
                    className="relative max-w-8xl px-4 sm:px-32 py-20 md:py-28 z-10 w-full flex flex-col justify-center"
                    style={{
                        backgroundImage: "linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 40%, rgba(255,255,255,0) 100%), url('/images/services/services.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">Services</h1>
                    <div className="inline-flex items-center space-x-2 bg-primary/70 px-6 py-3 rounded-md shadow-lg w-max">
                        <Link href="/" className="text-white font-semibold text-base">Home</Link>
                        <span className="text-white/80 text-lg">|</span>
                        <span className="w-2 h-2 rounded-full bg-white/60 inline-block"></span>
                        <span className="text-white text-base">Services</span>
                    </div>
                </div>
            </section>

            {/* Company Description */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                        <span className="text-primary">Devtech</span> <span className="font-normal text-gray-900">is one of the Fastest Growing Managed IT & SAP Consulting service provider Company.</span>
                    </h2>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                id={service.id}
                                className="bg-white rounded-lg shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] border border-primary/20 overflow-hidden flex flex-col"
                            >
                                <div className="h-40 sm:h-48 w-full overflow-hidden">
                                    <img src={service.img} alt={service.title} className="object-cover w-full h-full" />
                                </div>
                                <div className="p-4 sm:p-6 flex flex-col flex-1">
                                    <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-2">{service.title}</h3>
                                    <p className="text-gray-700 text-sm mb-6 flex-1">{service.description}</p>
                                    <button
                                        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded font-semibold text-sm transition-colors w-full"
                                        onClick={() => handleOpenModal(service)}
                                    >
                                        Know about Service &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Modal */}
            <ServiceModal open={modalOpen} onClose={handleCloseModal} service={selectedService} />

            {/* Footer */}
            <Footer />
        </div>
    );
}