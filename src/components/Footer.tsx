import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="w-full bg-black text-[#8CC63F] px-8 py-6">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3 text-[#8CC63F]">GrowLexi LLC</h3>
            <p className="text-sm">
              Precision-driven outbound sales engine <br /> connecting B2B  organizations <br />with the right audience.
            </p>
            <p className="text-sm mt-1">
              Sacramento, CA
            </p>
            <a href="tel:9165071348" className="text-sm mt-1 block hover:underline transition-all">
              (916) 507-1348
            </a>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:underline transition-all">Home</Link></li>
              <li><Link href="/Team" className="hover:underline transition-all">Team</Link></li>
              <li><Link href={isHomePage ? "#roadmap" : "/#roadmap"} className="hover:underline transition-all">Roadmap</Link></li>
              <li><Link href="/packages" className="hover:underline transition-all">Packages</Link></li>
              <li><Link href={isHomePage ? "#contact" : "/#contact"} className="hover:underline transition-all">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/company/growlexi" target="_blank" rel="noopener noreferrer" className="text-[#8CC63F] hover:underline transition-all">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
