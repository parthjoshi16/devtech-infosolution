"use client"

import Link from 'next/link';
import { Award, Users, Target, Lightbulb, ArrowRight, CheckCircle, Star, Globe, Shield, Clock, Zap, Database, Code, Cog } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Career', href: '/career' }
];

export default function Home() {
  return (
    <div className="container min-h-screen bg-white font-sans">
      {/* Header */}
      <Header active="home" />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden py-20"
        style={{
          backgroundImage: "url('Bxca.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0">
          {/* Network dots pattern */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative max-w-full ml-24 px-4 py-4 sm:px-6 lg:px-8 gap-12 items-center z-10">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner for<br />
              <span className="text-primary">SAP and IT Consulting</span><br />
              Solutions
            </h1>
            <p className="text-white text-lg mb-8 leading-relaxed max-w-4xl">
              Transforming businesses through innovative SAP S/4HANA solutions,
              digital transformation, and expert consulting services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative flex flex-col items-center md:items-start">
            <span className="absolute -left-8 top-8 hidden md:block">
              <svg width="80" height="80" fill="none">
                <circle cx="4" cy="4" r="2" fill="#D1D5DB" />
                <circle cx="24" cy="4" r="2" fill="#D1D5DB" />
                <circle cx="44" cy="4" r="2" fill="#D1D5DB" />
                <circle cx="64" cy="4" r="2" fill="#D1D5DB" />
                <circle cx="4" cy="24" r="2" fill="#D1D5DB" />
                <circle cx="24" cy="24" r="2" fill="#D1D5DB" />
                <circle cx="44" cy="24" r="2" fill="#D1D5DB" />
                <circle cx="64" cy="24" r="2" fill="#D1D5DB" />
                <circle cx="4" cy="44" r="2" fill="#D1D5DB" />
                <circle cx="24" cy="44" r="2" fill="#D1D5DB" />
                <circle cx="44" cy="44" r="2" fill="#D1D5DB" />
                <circle cx="64" cy="44" r="2" fill="#D1D5DB" />
                <circle cx="4" cy="64" r="2" fill="#D1D5DB" />
                <circle cx="24" cy="64" r="2" fill="#D1D5DB" />
                <circle cx="44" cy="64" r="2" fill="#D1D5DB" />
                <circle cx="64" cy="64" r="2" fill="#D1D5DB" />
              </svg>
            </span>
            {/* <div className="rounded-xl overflow-hidden shadow-lg absolute left-24 top-36 w-[260px] h-[180px] border-4 border-white bg-white"> */}
            <img src="home-page-img.avif" alt="Team" className="object-cover w-full h-full" />
            {/* </div> */}
          </div>
          <div>
            <p className="text-primary font-semibold mb-2">Discover the Future with Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading the Way in <span className="text-primary">Digital Innovation</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Devtech Infosolution is a global leader in business consulting and SAP services, committed to
              transforming businesses through digital innovation. We specialize in consulting, advisory,
              migration, implementation, and management of SAP ECC and S/4HANA solutions.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our client engagement model, founded on integrity and trust, allows us to deliver
              transformative solutions for leading clients across various industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center">
                  About Us <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-primary hover:border-transparent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark hover:text-white transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Devtech Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner with <span className="text-primary">Devtech Infosolution</span>?</h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Choose Devtech for unparalleled expertise, innovative solutions, and a proven track record
              of delivering transformative business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="bg-primary rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Expertise and Experience</h4>
              <p className="text-gray-100">
                With years of experience and deep domain knowledge, we deliver solutions that drive real business value.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="bg-primary rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Global Presence</h4>
              <p className="text-gray-100">
                Operating across multiple continents, we provide consistent, high-quality services worldwide.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="bg-primary rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Innovative Approach</h4>
              <p className="text-gray-100">
                We leverage cutting-edge technologies and methodologies to deliver future-ready solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="bg-primary rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Proven Track Record</h4>
              <p className="text-gray-100">
                Our success stories span across industries, showcasing our ability to deliver exceptional results.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="bg-primary rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Rapid Time to Value</h4>
              <p className="text-gray-100">
                Our streamlined processes and experienced team ensure quick implementation and immediate benefits.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="bg-primary rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Customer-Centric Focus</h4>
              <p className="text-gray-100">
                We prioritize your success and work as an extension of your team to achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide comprehensive SAP consulting services that help businesses transform,
              optimize operations, and achieve sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <Database className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">SAP ECC & S/4HANA</h4>
                <p className="text-gray-600 mb-4">
                  Comprehensive implementation, migration, and optimization services for SAP ECC and S/4HANA systems.
                </p>
                <Link href="/services#sap-ecc">
                  <button className="text-primary font-semibold hover:text-primary-dark flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Cog className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">SAP S/4HANA Implementation</h4>
                <p className="text-gray-600 mb-4">
                  End-to-end S/4HANA implementation and upgrade services tailored to your business needs.
                </p>
                <Link href="/services#sap-s4hana">
                  <button className="text-primary font-semibold hover:text-primary-dark flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">SAP Migration</h4>
                <p className="text-gray-600 mb-4">
                  Seamless migration services ensuring minimal downtime and maximum data integrity.
                </p>
                <Link href="/services#sap-migration">
                  <button className="text-primary font-semibold hover:text-primary-dark flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">SAP Technical</h4>
                <p className="text-gray-600 mb-4">
                  Technical development, customization, and integration services for SAP landscapes.
                </p>
                <Link href="/services#sap-technical">
                  <button className="text-primary font-semibold hover:text-primary-dark flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <Target className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">UI/UX/Fiori</h4>
                <p className="text-gray-600 mb-4">
                  Modern UI/UX solutions with SAP Fiori for enhanced user experience and productivity.
                </p>
                <Link href="/services#uiux-fiori">
                  <button className="text-primary font-semibold hover:text-primary-dark flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Integration</h4>
                <p className="text-gray-600 mb-4">
                  Seamless system integration services connecting SAP with third-party applications.
                </p>
                <Link href="/services#integration">
                  <button className="text-primary font-semibold hover:text-primary-dark flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Delivering Tangible Value<br />
                <span className="text-primary">Across Industry Sectors</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Manufacturing, Automotive, Retail and Consumer Goods, Healthcare,
                Financial Services, Energy and Utilities - we have deep industry expertise
                that enables us to understand your unique challenges and deliver solutions
                that drive measurable business outcomes.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our industry-specific approach ensures that every solution is tailored to meet
                the regulatory requirements, operational complexities, and strategic objectives
                of your sector.
              </p>
              <Link href="/industries">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center">
                  View More <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl h-32 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Manufacturing</span>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl h-40 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Automotive</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl h-40 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Energy</span>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl h-32 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Healthcare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-100 text-lg max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions
              that transform your organization and drive sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-between space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                <div className="bg-primary rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Quality of Services</h4>
                <p className="text-gray-100">
                  Improve service delivery effectiveness and bring best quality solutions to your business.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                <div className="bg-primary rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Business and User Centricity</h4>
                <p className="text-gray-100">
                  Better services to end users and all stakeholders with focus on user experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                <div className="bg-primary rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Cost Competitive Offerings</h4>
                <p className="text-gray-200">
                  Always focus on ROI. Transparent and Flexible pricing model.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                <div className="bg-primary rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Transformation Journey Partner</h4>
                <p className="text-gray-200">
                  Expertise in helping organizations for tech & business transformation
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                <div className="bg-primary rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Rich SAP & Domain Expertise</h4>
                <p className="text-gray-200">
                  Leverage in-depth experience in SAP and different industry verticals.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                <div className="bg-primary rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Drive for Next Gen Ready</h4>
                <p className="text-gray-200">
                  Focus on innovation and build future-ready solutions to improve business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Unlock the potential of your business with our expert consulting services.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch with us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}