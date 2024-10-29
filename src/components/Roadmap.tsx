'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

interface RoadmapItemProps {
  title: string;
  subtitle: string;
  description: string;
  index: number;
  inView: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, subtitle, description, index, inView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.2 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="mb-8 bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-md"
      style={{ zIndex: 10 - index }}
    >
      <h3 className="text-lg font-bold mb-2 text-[#8CC63F]">{title}</h3>
      <h4 className="text-lg font-semibold mb-4 text-gray-400">{subtitle}</h4>
      <p className="text-lg text-gray-300">{description}</p>
    </motion.div>
  );
};

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      title: "ROADMAP",
      subtitle: "Your strategy to attract more leads and convert them to qualified meetings.",
      description: "Our comprehensive roadmaps detail our plan to generate more interest, book more calls and inform future strategy.",
    },
    {
      title: "LEAD ACTIVATION",
      subtitle: "Attract high-value decision makers with our cutting-edge cold outbound solutions.",
      description: "Our strategies are designed to capture more attention and drive more engagement.",
    },
    {
      title: "TOP-OF-FUNNEL MANAGEMENT",
      subtitle: "Streamline top-of-funnel conversions and attribution by leveraging personalized templates and innovative dispositioning tactics.",
      description: "Our process is designed to convert interested prospects into qualified booked meetings while providing insights to re-engage those not yet ready to buy.",
    },
    {
      title: "FEEDBACK LOOP",
      subtitle: "Enhance outcomes with collaborative feedback and data-driven insights.",
      description: "Our feedback loop integrates input from all stakeholders alongside performance metrics like engagement and meeting bookings.",
    }
  ];

  return (
    <section id="roadmap" className="bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Roadmap</h2>
        <div className="text-center mb-8">  
          <Link href="https://meetings.hubspot.com/stephen-comstock" target="_blank" rel="noopener noreferrer" className="relative inline-flex group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-6 sm:px-8 py-3 bg-[#8CC63F] rounded-full leading-none flex items-center divide-x divide-gray-600 w-full sm:w-auto justify-center text-base">
              <span className="pr-4 text-black font-bold">Schedule Your Roadmap</span>
              <span className="pl-4 text-black group-hover:text-white transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center relative max-w-md mx-auto w-full">
          {roadmapItems.map((item, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <div key={index} ref={ref}>
                <RoadmapItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  index={index}
                  inView={inView}
                />
                {index < roadmapItems.length - 1 && (
                  <div className="w-0.5 h-8 bg-[#8CC63F] my-2"></div>
                )}
              </div>
            );
          })}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#8CC63F] -z-10 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;