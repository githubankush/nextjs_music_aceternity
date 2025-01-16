import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Us</h4>
          <p className="text-sm text-gray-400 leading-relaxed ">
            We bring the finest musical instruments to your doorstep.
            Whether you're a beginner or a pro, we are here to support your musical journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Shop All Instruments
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Shop by Category</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <Link href="/categories/strings" className="hover:text-white">
                String Instruments
              </Link>
            </li>
            <li>
              <Link href="/categories/percussion" className="hover:text-white">
                Percussion Instruments
              </Link>
            </li>
            <li>
              <Link href="/categories/keyboards" className="hover:text-white">
                Keyboard Instruments
              </Link>
            </li>
            <li>
              <Link href="/categories/wind" className="hover:text-white">
                Wind Instruments
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Sign up for exclusive offers and updates.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm text-black rounded-l-md focus:outline-none"
            />
            <input type="submit" placeholder="submit" className="px-3 py-2 text-sm text-white bg-black rounded-r-md hover:bg-gray-800" />
           
          </form>
          <div className="flex space-x-4 mt-4">
            <Link href="#" legacyBehavior>
              <a aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-2xl text-gray-400 hover:text-white"></i>
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-2xl text-gray-400 hover:text-white"></i>
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-2xl text-gray-400 hover:text-white"></i>
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube text-2xl text-gray-400 hover:text-white"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2025 MelodyCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
