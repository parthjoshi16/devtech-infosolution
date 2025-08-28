import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Industries() {
    const industries = [
        {
            title: 'Manufacturing Industries',
            image: 'images/industries/industry_1.webp'
        },
        {
            title: 'Energy and Petro-Chemical',
            image: 'images/industries/industry_2.webp'
        },
        {
            title: 'Healthcare and Lifesciences',
            image: 'images/industries/industry_3.jpg'
        },
        {
            title: 'Travel and Transportation',
            image: 'images/industries/industry_4.jpg'
        },
        {
            title: 'Utilities',
            image: 'images/industries/industry_5.webp'
        },
        {
            title: 'Retail and Consumer Products',
            image: 'images/industries/industry_6.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header */}
            <Header active="industries" />

            {/* Hero Section */}
            <section className="relative min-h-[260px] flex items-center">
                <div
                    className="relative max-w-8xl px-4 sm:px-32 py-20 md:py-28 z-10 w-full flex flex-col justify-center"
                    style={{
                        backgroundImage: "linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 40%, rgba(255,255,255,0) 100%), url('images/services/services.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">Industries</h1>
                    <div className="inline-flex items-center space-x-2 bg-primary/70 px-6 py-3 rounded-md shadow-lg w-max">
                        <Link href="/" className="text-white font-semibold text-base">Home</Link>
                        <span className="text-white/80 text-lg">|</span>
                        <span className="w-2 h-2 rounded-full bg-white/60 inline-block"></span>
                        <span className="text-white text-base">Industries</span>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                        <span className="text-primary">Serving</span> <span className="font-normal text-gray-900">multiple industries with tailored SAP solutions.</span>
                    </h2>
                </div>
            </section>
            <section className="pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="relative rounded-lg overflow-hidden shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] border border-primary group">
                                <img src={industry.image} alt={industry.title} className="w-full h-40 sm:h-64 object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 px-0 py-0">
                                    <div className="px-0 py-0 flex justify-center">
                                        <span className="block w-full text-center bg-primary hover:bg-primary-dark text-white text-base font-semibold py-3">
                                            {industry.title}
                                        </span>
                                    </div>
                                </div>
                                <span className="absolute top-0 left-0 w-full h-full border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}