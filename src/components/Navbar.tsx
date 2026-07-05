// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Portfolio', path: '/portfolio' },
//     { name: 'Team', path: '/team' },
//     { name: 'Testimonials', path: '/testimonials' },
//     { name: 'Contact', path: '/contact' },
//   ];

  
//   return (
//     <motion.nav
//       className={`fixed top-0 w-full z-50 ${
//         scrolled ? 'bg-gray-900/90 shadow-md' : 'bg-gray-800/80'
//       } backdrop-blur-md transition-all duration-300`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/bird-text.png"
//               alt="Freebird Logo"
//               className="h-12 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => window.scrollTo(0, 0)}
//                 className={`relative text-sm font-medium transition-colors duration-200 ${
//                   location.pathname === item.path
//                     ? 'text-primary-500'
//                     : 'text-white hover:text-primary-400'
//                 }`}
//               >
//                 {item.name}
//                 {location.pathname === item.path && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
//                   />
//                 )}
//               </Link>
//             ))}
//             <Link
//               to="/contact"
//               onClick={() => window.scrollTo(0, 0)}
//               className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-md transform hover:scale-105 transition-all duration-200"
//             >
//               Get Quote
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <X className="h-6 w-6 text-white" />
//             ) : (
//               <Menu className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <motion.div
//           className="md:hidden bg-white rounded-lg shadow-lg mt-1 overflow-hidden"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-200"
//               onClick={() => {
//                 setIsOpen(false);
//                 window.scrollTo(0, 0);
//               }}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Link
//             to="/contact"
//             className="block mx-4 my-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-center font-medium"
//             onClick={() => {
//               setIsOpen(false);
//               window.scrollTo(0, 0);
//             }}
//           >
//             Get Quote
//           </Link>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 ${
        scrolled ? 'bg-gray-900/90 shadow-md' : 'bg-gray-800/80'
      } backdrop-blur-md transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* Replace the src with your actual logo image URL if needed (e.g., /path/to/your/logo.png) */}
            <img
              src="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/bird-text.png"
              alt="Freebird Logo"
              className="h-32 md:h-40 w-auto max-w-[300px] object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-500'
                    : 'text-white hover:text-primary-400'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-md transform hover:scale-105 transition-all duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white rounded-lg shadow-lg mt-1 overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-200"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mx-4 my-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-center font-medium"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Get Quote
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;