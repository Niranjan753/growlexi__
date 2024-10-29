'use client'
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const PackagesPageWrapper: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-12 sm:py-20 text-center relative overflow-hidden mt-16">
          <h1 className="text-4xl font-bold mb-12">Our Packages</h1>
          
          {/* Primary Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg relative overflow-hidden group max-w-sm mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-3">Lead Activation Services</h2>
                <p className="text-lg font-bold text-white bg-red-600 mb-4 p-2 rounded-lg shadow-md transition-all duration-300 hover:bg-red-700 inline-block">Starting at $799</p>
                <ul className="list-disc list-inside mb-4 text-left text-sm">
                  <li>Coordinated email and LinkedIn outreach</li>
                  <li>Deliverability optimization</li>
                  <li>Custom-tailored sales copy</li>
                  <li>Ongoing A/B testing</li>
                  <li>Monthly strategy and reporting calls</li>
                  <li>Tech stack setup and maintenance</li>
                  <li>Dedicated Slack channel</li>
                </ul>
                <Link href="/#contact" className="bg-[#8CC63F] text-black px-5 py-2 rounded-full inline-block hover:bg-[#5A822A] transition duration-300 text-sm">
                  Get Started
                </Link>
              </div>
              <div className="absolute inset-0 border border-[#8CC63F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg relative overflow-hidden group max-w-sm mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-3">Integrated Top of Funnel Management</h2>
                <ul className="list-disc list-inside mb-4 text-left text-sm">
                  <li>Everything in Lead Activation Services</li>
                  <li>Weekly strategy calls</li>
                  <li>Up to 8 hours weekly of top of top-of-funnel management</li>
                  <li>Process automation</li>
                  <li>Lead attribution strategy</li>
                  <li>Response templates & sequences</li>
                  <li>SDR hiring and training support</li>
                  <li>Tailored sales development playbook</li>
                </ul>
                <Link href="/#contact" className="bg-[#8CC63F] text-black px-5 py-2 rounded-full inline-block hover:bg-[#5A822A] transition duration-300 text-sm">
                  Get Started
                </Link>
              </div>
              <div className="absolute inset-0 border border-[#8CC63F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>

          {/* Four Secondary Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">Roadmap</h3>
                <p className="text-sm text-gray-300">Strategy development and implementation planning for lead generation success.</p>
                <Link href="/#contact" className="mt-4 inline-block text-[#8CC63F] hover:text-[#5A822A] transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">Lead Activation</h3>
                <p className="text-sm text-gray-300">Attract high-value decision makers with cutting-edge outbound solutions.</p>
                <Link href="/#contact" className="mt-4 inline-block text-[#8CC63F] hover:text-[#5A822A] transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">Top-of-Funnel</h3>
                <p className="text-sm text-gray-300">Streamline conversions with personalized templates and innovative tactics.</p>
                <Link href="/#contact" className="mt-4 inline-block text-[#8CC63F] hover:text-[#5A822A] transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">Performance</h3>
                <p className="text-sm text-gray-300">Monitor and optimize your lead generation efforts with data-driven insights.</p>
                <Link href="/#contact" className="mt-4 inline-block text-[#8CC63F] hover:text-[#5A822A] transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PackagesPageWrapper;
