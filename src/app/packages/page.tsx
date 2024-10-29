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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg relative overflow-hidden max-w-md mx-auto w-full shadow-[0_0_15px_rgba(140,198,63,0.3)]">
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-4">Lead Activation Services</h2>
                <p className="text-xl font-bold text-white bg-red-600 mb-6 p-2 rounded-lg shadow-md inline-block">Starting at $799</p>
                <ul className="list-disc list-inside mb-6 text-left space-y-2">
                  <li>Coordinated email and LinkedIn outreach</li>
                  <li>Deliverability optimization</li>
                  <li>Custom-tailored sales copy</li>
                  <li>Ongoing A/B testing</li>
                  <li>Monthly strategy and reporting calls</li>
                  <li>Tech stack setup and maintenance</li>
                  <li>Dedicated Slack channel</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg relative overflow-hidden max-w-md mx-auto w-full shadow-[0_0_15px_rgba(140,198,63,0.3)]">
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-4">Integrated Top of Funnel Management</h2>
                <ul className="list-disc list-inside mb-6 text-left space-y-2">
                  <li>Everything in Lead Activation Services</li>
                  <li>Weekly strategy calls</li>
                  <li>Up to 8 hours weekly of top of top-of-funnel management</li>
                  <li>Process automation</li>
                  <li>Lead attribution strategy</li>
                  <li>Response templates & sequences</li>
                  <li>SDR hiring and training support</li>
                  <li>Tailored sales development playbook</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg relative overflow-hidden max-w-2xl mx-auto w-full shadow-[0_0_15px_rgba(140,198,63,0.3)]">
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-4">Add On Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="list-disc list-inside mb-6 text-left space-y-2">
                    <li>Extra Domains Configuration</li>
                    <li>Additional Outbound Engines</li>
                    <li>Additional outbound users</li>
                  </ul>
                  <ul className="list-disc list-inside mb-6 text-left space-y-2">
                    <li>Additional targets</li>
                    <li>Cross channel coordination</li>
                    <li>Custom integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/#contact" 
              className="bg-[#8CC63F] text-black px-12 py-4 rounded-full text-xl font-semibold inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PackagesPageWrapper;
