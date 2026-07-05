// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Bird, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-1">
//             <div className="flex items-center space-x-2 mb-4">
//               <Bird className="h-8 w-8 text-primary-500" />
//               <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
//                 Freebird
//               </span>
//             </div>
//             <p className="text-gray-300 mb-4 max-w-md">
//               We help brands stand out with creativity and smart digital strategy. 
//               Design, videos, websites, and marketing all in one place.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
//                 <Instagram className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
//                 <Youtube className="h-6 w-6" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
//               <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
//               <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
//               <li><Link to="/team" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
//               <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Policies */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Policies</h3>
//             <ul className="space-y-2">
//               <li><Link to="/policies" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">All Policies</Link></li>
//               <li><Link to="/terms-conditions" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
//               <li><Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
//               <li><Link to="/refund-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link></li>
//               <li><Link to="/return-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Return Policy</Link></li>
//               <li><Link to="/shipping-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Shipping Policy</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="md:col-span-1">
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center space-x-2">
//                 <Mail className="h-5 w-5 text-primary-500" />
//                 <span className="text-gray-300">thefreebirdagency@gmail.com</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <Phone className="h-5 w-5 text-primary-500" />
//                 <span className="text-gray-300">+91 6303464811</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <MapPin className="h-5 w-5 text-primary-500" />
//                 <span className="text-gray-300">Kakinada, Andhra Pradesh, India</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p className="text-gray-400">
//             © 2025 Freebird Creative Agency. All rights reserved.
//           </p>
//           <p className="text-gray-400 p-3">
//             Design and Developed by <span className="text-orange-500 font-bold">Uday Kiran Palepu</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Section */}
          <div>

            {/* Logo */}
            <div className="mb-6">
              <Link
                to="/"
                className="inline-flex flex-col items-center group"
              >
                <img
                  src="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/bird.png"
                  alt="Freebird Logo"
                  className="h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-wide text-white">
                  Freebird
                </h2>
              </Link>
            </div>

            <p className="text-gray-300 max-w-md leading-7 mb-6">
              We help brands stand out with creativity and smart digital
              strategy. Design, videos, websites, branding and digital
              marketing—all in one place.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4">

              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>

            </div>

          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Quick Links */}
            <div>

              <h3 className="text-lg font-semibold mb-4">
                Quick Links
              </h3>

              <ul className="space-y-2">

                <li>
                  <Link
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/portfolio"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link
                    to="/team"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Team
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* Policies */}
            <div>

              <h3 className="text-lg font-semibold mb-4">
                Policies
              </h3>

              <ul className="space-y-2">

                <li>
                  <Link
                    to="/policies"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    All Policies
                  </Link>
                </li>

                <li>
                  <Link
                    to="/terms-conditions"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    to="/privacy-policy"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/refund-policy"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/return-policy"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Return Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shipping-policy"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Shipping Policy
                  </Link>
                </li>

              </ul>

            </div>

            {/* Contact Info */}
            <div>

              <h3 className="text-lg font-semibold mb-5">
                Contact Info
              </h3>

              <ul className="space-y-5">

                <li>
                  <a
                    href="mailto:thefreebirdagency@gmail.com"
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail
                      className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />

                    <span className="break-all text-sm md:text-base leading-6">
                      thefreebirdagency@gmail.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+916303464811"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone
                      className="w-5 h-5 text-primary-500 flex-shrink-0"
                      strokeWidth={2}
                    />

                    <span className="text-sm md:text-base">
                      +91 6303464811
                    </span>
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1"
                    strokeWidth={2}
                  />

                  <span className="text-gray-300 text-sm md:text-base leading-6">
                    Kakinada, Andhra Pradesh, India
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">

          <p className="text-gray-400 text-sm md:text-base">
            © 2025 Freebird Creative Agency. All rights reserved.
          </p>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Designed & Developed by{' '}
            <span className="text-orange-500 font-bold">
              Uday Kiran Palepu
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;