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
// The import statement is correct and will work after updating the package
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main grid for the footer layout, becomes 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Brand Section */}
          <div className="col-span-1">
            <div className="mb-4">
              {/* The logo height is now responsive: h-12 on small screens, h-16 on medium and up */}
              <img src="https://res.cloudinary.com/dbgbuzyw8/image/upload/v1755178854/fs_ycvaub.png" alt="Freebird Creative Agency Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We help brands stand out with creativity and smart digital strategy.
              Design, videos, websites, and marketing all in one place.
            </p>
            {/* Updated Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
               <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column: Links Section with a nested grid */}
          <div className="col-span-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/team" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
                <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Policies</h3>
              <ul className="space-y-2">
                <li><Link to="/policies" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">All Policies</Link></li>
                <li><Link to="/terms-conditions" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/refund-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link to="/return-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Return Policy</Link></li>
                <li><Link to="/shipping-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors">Shipping Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <a href="mailto:thefreebirdagency@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <Mail className="h-5 w-5 text-primary-500" />
                    <span>thefreebirdagency@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="tel:+916303464811" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <span>+91 6303464811</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  <span className="text-gray-300">Kakinada, Andhra Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Freebird Creative Agency. All rights reserved.
          </p>
          <p className="text-gray-400 p-3">
            Design and Developed by <span className="text-orange-500 font-bold">Uday Kiran Palepu</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
