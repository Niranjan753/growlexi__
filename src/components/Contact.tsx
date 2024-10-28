'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Footer from './Footer';

declare global {
  interface Window {
    hbspt: any;
  }
}

const Contact: React.FC = () => {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      // Create HubSpot form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22203768",
          formId: "8db9dfe2-c595-4bf9-b45d-379459b82108",
          target: "#hubspot-form-container",
          css: `
            .hs-form-field {
              margin-bottom: 20px;
            }
            
            .hs-form-field label {
              font-family: 'Inter', sans-serif;
              color: #ffffff;
              margin-bottom: 10px;
              display: block;
              font-size: 0.95rem;
              font-weight: 500;
            }
            
            .hs-form-field input, .hs-form-field textarea {
              width: 100%;
              padding: 12px 16px;
              margin-bottom: 15px;
              border: 2px solid #444;
              background-color: rgba(34, 34, 34, 0.8);
              color: #ffffff;
              border-radius: 8px;
              font-size: 1rem;
              transition: all 0.3s ease;
            }
            
            .hs-form-field input:hover, .hs-form-field textarea:hover {
              border-color: #8CC63F;
              background-color: rgba(34, 34, 34, 0.9);
            }
            
            .hs-form-field input:focus, .hs-form-field textarea:focus {
              border-color: #8CC63F;
              box-shadow: 0 0 0 3px rgba(140, 198, 63, 0.25);
              outline: none;
              background-color: rgba(34, 34, 34, 1);
            }
            
            .hs-error-msg {
              color: #ff4d4d;
              font-size: 0.85rem;
              margin-top: 4px;
            }
            
            .hs-button {
              background: linear-gradient(135deg, #8CC63F 0%, #5A822A 100%);
              color: #ffffff;
              padding: 14px 28px;
              border: none;
              border-radius: 50px;
              cursor: pointer;
              font-weight: 600;
              font-size: 1rem;
              letter-spacing: 0.5px;
              transition: all 0.3s ease;
              width: 100%;
              text-transform: uppercase;
            }
            
            .hs-button:hover {
              background: linear-gradient(135deg, #7AB52E 0%, #4A721A 100%);
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(140, 198, 63, 0.3);
            }
            
            .hs-button:active {
              transform: translateY(0);
            }
            
            .submitted-message {
              color: #8CC63F;
              text-align: center;
              padding: 20px;
              font-weight: 500;
              font-size: 1.1rem;
            }
          `
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-[#8CC63F] to-[#5A822A] text-transparent bg-clip-text">Get in Touch</span>
        </h2>
        <div id="hubspot-form-container" className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"></div>
      </div>
    </section>
  );
};

export default Contact;