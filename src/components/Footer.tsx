import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/d7a599fcfb87b82a71dc34bbcc0ffaf40eb5b590.svg';

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#00B871]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Cyber Network" className="h-12 mb-4" />
            <p className="text-gray-400">
              Providing innovative, reliable, and accessible networking and cybersecurity solutions that support businesses and individuals in navigating the digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#00B871] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#00D67E] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#00D67E] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#00D67E] transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-[#00D67E] transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#00B871] mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail size={20} className="text-[#00B871] mt-1 flex-shrink-0" />
                <a href="mailto:info@cybernetworkco.com" className="hover:text-[#00D67E] transition-colors">
                  info@cybernetworkco.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={20} className="text-[#00B871] mt-1 flex-shrink-0" />
                <a href="tel:+916379728770" className="hover:text-[#00D67E] transition-colors">
                  +91 6379728770
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-[#00B871] mt-1 flex-shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00B871] to-transparent mb-8"></div>

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 Cyber Network. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/company/cybernetworkco" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Cyber Network on LinkedIn"
              className="w-10 h-10 rounded-full border border-[#00B871] flex items-center justify-center text-[#00B871] hover:bg-[#00B871] hover:text-white transition-all duration-300 glow-green-hover"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a 
              href="https://www.instagram.com/cybernetwork_co" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Cyber Network on Instagram"
              className="w-10 h-10 rounded-full border border-[#00B871] flex items-center justify-center text-[#00B871] hover:bg-[#00B871] hover:text-white transition-all duration-300 glow-green-hover"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
