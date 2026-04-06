import React from 'react';
import {
  AArrowDown,
 
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">AOE</span> Holding
            </h3>
            <p className="text-gray-300 mb-4">
              Bringing excellence across Real Estate, E-commerce, Healthcare, and Consumer Goods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <AArrowDown className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <AArrowDown className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <AArrowDown className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <AArrowDown className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#brands" className="text-gray-300 hover:text-blue-400 transition">Brands</a></li>
              <li><a href="#subsidiaries" className="text-gray-300 hover:text-blue-400 transition">Subsidiaries</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <AArrowDown className="w-4 h-4" /> Dubai, UAE
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <AArrowDown className="w-4 h-4" /> +971 XX XXX XXXX
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <AArrowDown className="w-4 h-4" /> info@aoeholding.ae
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe for updates and news</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-navy-800 text-white border border-navy-700 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Al Otaiba Express (AOE) Holding. All rights reserved. Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;