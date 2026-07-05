// import React from 'react';
// import { motion } from 'framer-motion';
// import { Palette, Video, Globe, TrendingUp, Check, Star, ArrowRight, Users, Target, BarChart3, Zap } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Services = () => {
//   // ========================================
//   // 🖼️ IMAGES & ICONS - EASY TO UPDATE
//   // ========================================
//   const pageImages = {
//     heroBackground: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
//     graphicDesign: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     videoProduction: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
//     webDevelopment: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     digitalMarketing: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
//     // 📝 TO UPDATE: Replace URLs above with your images
//   };

//   const pageIcons = {
//     // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
//     design: Palette,
//     video: Video,
//     web: Globe,
//     marketing: TrendingUp,
//     check: Check,
//     target: Target,
//     chart: BarChart3,
//     zap: Zap,
//     users: Users,
//     star: Star,
//     // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
//   };

//   // Inline ScrollingPosters Component - Easy to customize images
//   const ScrollingPosters = ({ 
//     direction = 'left', 
//     speed = 50,
//     posters,
//     size = 'normal'
//   }: {
//     direction?: 'left' | 'right';
//     speed?: number;
//     posters: Array<{ id: number; url: string; title: string }>;
//     size?: 'small' | 'normal';
//   }) => {
//     const [isPaused, setIsPaused] = React.useState(false);
//     const isAnimating = !isPaused;

//     const handlePosterClick = () => {
//       setIsPaused(!isPaused);
//     };

//     // Poster dimensions based on size prop (25% larger)
//     const posterWidth = size === 'small' ? 225 : 300; // 25% increase: 180px -> 225px, 240px -> 300px
//     const posterHeight = size === 'small' ? 'h-56-25' : 'h-75';
//     const gap = 16; // 1rem gap between posters

//     // Create enough duplicates to ensure seamless scrolling
//     const duplicatedPosters = [...posters, ...posters, ...posters, ...posters];
    
//     // Calculate total width including gaps
//     const totalWidth = (posters.length * posterWidth) + (posters.length * gap);

//     return (
//       <div className="w-full overflow-hidden relative">
//         {/* Full width container that extends to screen edges */}
//         <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
//           <motion.div
//             className="flex"
//             style={{ 
//               gap: `${gap}px`,
//               paddingLeft: direction === 'left' ? '0px' : `${gap}px`,
//               paddingRight: direction === 'right' ? '0px' : `${gap}px`
//             }}
//             animate={{
//               x: isAnimating 
//                 ? direction === 'left' 
//                   ? [0, -totalWidth]
//                   : [-totalWidth, 0]
//                 : 0,
//             }}
//             transition={{
//               duration: speed,
//               repeat: isAnimating ? Infinity : 0,
//               ease: 'linear',
//             }}
//           >
//             {duplicatedPosters.map((poster, index) => (
//               <motion.div
//                 key={`${poster.id}-${index}`}
//                 className="flex-shrink-0 cursor-pointer group"
//                 style={{ width: posterWidth }}
//                 onClick={handlePosterClick}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <div className={`w-full ${posterHeight} bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg overflow-hidden relative rounded-xl`}>
//                   <img
//                     src={poster.url}
//                     alt={poster.title}
//                     className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300 rounded-xl"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end rounded-xl">
//                     <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <p className="font-medium text-sm">{poster.title}</p>
//                     </div>
//                   </div>
//                   {/* Pause indicator */}
//                   {isPaused && (
//                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
//                       <div className="text-white text-sm font-medium bg-black bg-opacity-70 px-3 py-1 rounded-full">
//                         Click to Resume
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     );
//   };

// //   const packages = [
// //     { 
// //     name: 'Basic',
// //     price: '₹0',
// //     period: '',
// //     description: 'Get expert suggestions and guidance to grow your business',
// //     features: [
// //       'Free 15-min Strategy Call',
// //       'Digital Growth Roadmap',
// //       'Platform Suggestions',
// //       'No Code Tools Overview',
// //       'Marketing Guidance'
// //     ],
// //     popular: false,
// //     isFree: true
// //   },

    
// //   {
// //     name: 'Starter',
// //     price: '₹5,999',
// //     period: '/one-time',
// //     description: 'Perfect for individuals and small businesses starting out online',
// //     features: [
// //       'Up to 5 Static Web Pages',
// //       'Basic Logo Design',
// //       'Responsive Mobile Design',
// //       'Free Hosting & Domain Guidance',
// //       '1 Revision Included'
// //     ],
// //     popular: false
// //   },
// //   {
// //     name: 'Growth',
// //     price: '₹24,999',
// //     period: '/one-time',
// //     description: 'Ideal for growing businesses looking to expand their digital presence',
// //     features: [
// //       '10-15 Page Dynamic Website',
// //       'SEO Basics Setup',
// //       '5 Social Media Creatives',
// //       'Logo + Branding Kit',
// //       'Google Business Profile Setup',
// //       '2 Revisions + 1-Month Support'
// //     ],
// //     popular: true
// //   },
// //   {
// //     name: 'Scale',
// //     price: '₹49,999',
// //     period: '/one-time',
// //     description: 'Best for startups & MSMEs who want full-scale digital transformation',
// //     features: [
// //       'Complete Business Website with Admin Panel',
// //       '10+ Social Media Posts',
// //       'Landing Page + Email Integration',
// //       'Business Profile, Portfolio, & Hosting Setup',
// //       'WhatsApp Automation & CRM Setup',
// //       '3 Months Support'
// //     ],
// //     popular: false
// //   },
// //   {
// //     name: 'Custom Pro',
// //     price: 'Custom Quote',
// //     period: '',
// //     description: 'Tailored solutions for agencies, coaches, or large-scale requirements',
// //     features: [
// //       'Advanced Web Apps (E-commerce, Portals)',
// //       'Digital Marketing Campaigns (Ads, SEO, Email)',
// //       'Custom Design & Strategy',
// //       'Training Programs for Staff',
// //       'Project Manager Support',
// //       'Ongoing Maintenance (optional)'
// //     ],
// //     popular: false
// //   }
// // ];
//   const packages = [
//   { 
//     name: 'Free Consultation',
//     price: '₹0',
//     period: '',
//     description: 'Get expert suggestions and guidance to grow your business',
//     features: [
//       'Free 15-min Strategy Call',
//       'Digital Growth Roadmap',
//       'Platform Suggestions',
//       'No Code Tools Overview',
//       'Marketing Guidance',
//       'Basic Branding Tips',
//       'Social Media Strategy Advice',
//       '1 Competitor Analysis',
//       'Content Topic Suggestions',
//       '1 Free Poster Design Sample',
//       'Website Audit (Basic)',
//       'Ad Campaign Recommendations'
//     ],
//     popular: false,
//     isFree: true
//   },

//   {
//     name: 'Basic',
//     price: '₹8,000',
//     period: '/month',
//     description: 'Essential package for small brands needing regular content',
//     features: [
//       '10 Posters',
//       '5 Reels',
//       '1 Video',
//       'Video Shoot Recommendations',
//       'Festival Poster Suggestions',
//       'Special Days Creative Ideas',
//       'Thumbnails',
//       'Content Creation',
//       'Social Media Management',
//       '1 Complimentary Design',
//       'Basic Analytics Report',
//       'Hashtag Research'
//     ],
//     popular: false
//   },

//   {
//     name: 'Standard',
//     price: '₹12,000',
//     period: '/month',
//     description: 'Great for brands needing more variety & video content',
//     features: [
//       '10 Posters',
//       '7 Reels',
//       '2 Videos',
//       '1 Video Shoot',
//       'Festival Poster Suggestions',
//       'Special Days Creative Ideas',
//       'Thumbnails',
//       'Content Creation',
//       'Social Media Management',
//       'Up to 2 Complimentary Designs',
//       'Monthly Performance Report',
//       'Ad Strategy Suggestions'
//     ],
//     popular: false
//   },

//   {
//     name: 'Premium',
//     price: '₹15,000',
//     period: '/month',
//     description: 'For businesses wanting full-scale creative marketing',
//     features: [
//       '10 Posters',
//       '10 Reels',
//       '4 Videos',
//       '4 Video Shoots',
//       'Festival Posters',
//       'Special Days Posters',
//       'Thumbnails',
//       'Content Creation',
//       'Social Media Management',
//       'Up to 3 Complimentary Designs',
//       'Advanced Analytics Report',
//       'Dedicated Account Manager'
//     ],
//     popular: false
//   },

//   {
//     name: 'Web Development',
//     price: '₹25,000',
//     period: '/one-time',
//     description: 'Landing pages and full website development for your business',
//     features: [
//       'Up to 6 Static/Dynamic Pages',
//       'Responsive Mobile Design',
//       'Basic SEO Setup',
//       'Landing Page + Email Integration',
//       'Portfolio & Business Profile Setup',
//       'Hosting & Domain Guidance',
//       'Admin Panel (Optional)',
//       'Google Business Profile Setup',
//       '2 Revisions Included',
//       '1-Month Support',
//       'Speed Optimization',
//       'Social Media Setup'
//     ],
//     popular: false
//   },

//   {
//     name: 'Custom All-in-One',
//     price: 'Custom Quote',
//     period: '',
//     description: 'Includes everything in all packages plus custom web solutions',
//     features: [
//       'All Posters, Reels, and Video Content from Premium Plan',
//       'Full Website Development with Admin Panel',
//       'SEO & Marketing Campaigns',
//       'Festival + Special Day Posters',
//       'WhatsApp Automation & CRM Setup',
//       'Custom Branding Kit',
//       'Landing Page + Email Integration',
//       'Social Media Management',
//       'Google Business Profile Setup',
//       'Training & Consultation Sessions',
//       'Dedicated Project Manager',
//       'Ongoing Maintenance (Optional)'
//     ],
//     popular: true
//   }
// ];


//   // ========================================
//   // 🖼️ POSTER IMAGES - EASY TO UPDATE
//   // ========================================
//   // Add as many posters as you want by duplicating the format below
//   const samplePosters = [
//     // 🔄 TO ADD MORE POSTERS: Copy any line below and change the id, url, and title
//     { id: 1, url: 'https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Brand Identity' },
//     { id: 2, url: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Event Poster' },
//     { id: 3, url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Product Launch' },
//     { id: 4, url: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Social Media' },
//     { id: 5, url: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Marketing Campaign' },
//     { id: 6, url: 'https://images.pexels.com/photos/1367856/pexels-photo-1367856.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Corporate Design' },
//     // 📝 EXAMPLE: Add more posters like this:
//     // { id: 7, url: 'YOUR_IMAGE_URL_HERE', title: 'Your Title Here' },
//     // { id: 8, url: 'YOUR_IMAGE_URL_HERE', title: 'Your Title Here' },
//     // { id: 9, url: 'YOUR_IMAGE_URL_HERE', title: 'Your Title Here' },
//   ];

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={pageImages.heroBackground}
//             alt="Services background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             className="text-5xl md:text-6xl font-bold text-white mb-6 relative z-10"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Services</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Creative + Marketing + Tech under one roof. Everything you need to build and grow your brand.
//           </motion.p>
//         </div>
//       </section>

//       {/* Graphic Design Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
//                 <pageIcons.design className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Graphic Design</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Transform your brand vision into stunning visual experiences that captivate and convert. 
//                 Our graphic design services combine creativity with strategic thinking to deliver designs 
//                 that not only look amazing but also drive business results.
//               </p>
              
//               <div className="space-y-4 mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
//                 <ul className="space-y-3">
//                   {[
//                     'Custom Poster Design for Events & Promotions',
//                     'Professional Brochures & Marketing Banners',
//                     'Complete Branding Kits & Identity Systems',
//                     'Eye-catching YouTube Thumbnails',
//                     'Business Stationery & Print Materials'
//                   ].map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className="flex items-center space-x-3"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <Check className="h-5 w-5 text-primary-500" />
//                       <span className="text-gray-700">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-primary-50 p-6 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                   <Target className="h-5 w-5 text-primary-500 mr-2" />
//                   Growth Benefits:
//                 </h4>
//                 <p className="text-gray-600">
//                   Increase brand recognition by 80%, improve customer engagement rates, 
//                   and establish a professional presence that builds trust and credibility in your market.
//                 </p>
//               </div>
//             </motion.div>
            
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={pageImages.graphicDesign}
//                 alt="Graphic Design Services"
//                 className="w-full h-96 object-cover rounded-2xl shadow-lg"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Video Production Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               className="relative order-2 lg:order-1"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={pageImages.videoProduction}
//                 alt="Video Production Services"
//                 className="w-full h-96 object-cover rounded-2xl shadow-lg"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </motion.div>

//             <motion.div
//               className="order-1 lg:order-2"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
//                 <pageIcons.video className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Video Production</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Bring your stories to life with compelling video content that engages audiences and drives action. 
//                 From concept to final cut, we create videos that resonate with your target audience and 
//                 amplify your brand message across all platforms.
//               </p>
              
//               <div className="space-y-4 mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
//                 <ul className="space-y-3">
//                   {[
//                     'Professional Video Editing & Post-Production',
//                     'Dynamic Motion Posters & Animated Graphics',
//                     'Creative Lyrical Video Edits',
//                     'Podcast Production & Social Media Reels',
//                     'Event Invitations & Promotional Videos'
//                   ].map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className="flex items-center space-x-3"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <Check className="h-5 w-5 text-primary-500" />
//                       <span className="text-gray-700">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-primary-50 p-6 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                   <BarChart3 className="h-5 w-5 text-primary-500 mr-2" />
//                   Growth Benefits:
//                 </h4>
//                 <p className="text-gray-600">
//                   Boost engagement rates by 300%, increase social media reach, and improve conversion rates 
//                   with video content that's 50x more likely to drive organic search results.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Website Development Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
//                 <pageIcons.web className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Website Development</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Create powerful digital experiences that convert visitors into customers. Our websites combine 
//                 stunning design with robust functionality, ensuring your online presence drives real business growth 
//                 while providing exceptional user experiences across all devices.
//               </p>
              
//               <div className="space-y-4 mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
//                 <ul className="space-y-3">
//                   {[
//                     'Custom UI/UX Design & User Experience Optimization',
//                     'Responsive Websites for All Devices',
//                     'Professional Portfolio & Business Websites',
//                     'Blog Development & Content Management',
//                     'Ongoing Website Maintenance & Support'
//                   ].map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className="flex items-center space-x-3"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <Check className="h-5 w-5 text-primary-500" />
//                       <span className="text-gray-700">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-primary-50 p-6 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                   <Zap className="h-5 w-5 text-primary-500 mr-2" />
//                   Growth Benefits:
//                 </h4>
//                 <p className="text-gray-600">
//                   Increase online visibility by 400%, improve user engagement and reduce bounce rates, 
//                   while establishing credibility that converts 65% more visitors into paying customers.
//                 </p>
//               </div>
//             </motion.div>
            
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={pageImages.webDevelopment}
//                 alt="Website Development Services"
//                 className="w-full h-96 object-cover rounded-2xl shadow-lg"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Digital Marketing Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               className="relative order-2 lg:order-1"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={pageImages.digitalMarketing}
//                 alt="Digital Marketing Services"
//                 className="w-full h-96 object-cover rounded-2xl shadow-lg"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </motion.div>

//             <motion.div
//               className="order-1 lg:order-2"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
//                 <pageIcons.marketing className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Marketing</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Accelerate your business growth with data-driven marketing strategies that deliver measurable results. 
//                 We combine creative campaigns with analytical insights to maximize your ROI and build lasting 
//                 relationships with your target audience across all digital channels.
//               </p>
              
//               <div className="space-y-4 mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
//                 <ul className="space-y-3">
//                   {[
//                     'Strategic Social Media Management & Growth',
//                     'High-Converting Content Creation',
//                     'Google Ads & PPC Campaign Management',
//                     'SEO Optimization (Local & Global)',
//                     'Advanced Analytics & Performance Tracking'
//                   ].map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className="flex items-center space-x-3"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <Check className="h-5 w-5 text-primary-500" />
//                       <span className="text-gray-700">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-primary-50 p-6 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                   <Users className="h-5 w-5 text-primary-500 mr-2" />
//                   Growth Benefits:
//                 </h4>
//                 <p className="text-gray-600">
//                   Generate 250% more qualified leads, increase brand awareness by 500%, and achieve 
//                   an average ROI of 400% through strategic digital marketing campaigns.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Interactive Process Explorer */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
//             <p className="text-xl text-gray-600">
//               Discover how we transform your vision into reality through our proven methodology
//             </p>
//           </motion.div>

//           <div className="space-y-16">
//             {/* Step 1 */}
//             <motion.div
//               className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div>
//                 <div className="flex items-center mb-6">
//                   <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">1</div>
//                   <h3 className="text-3xl font-bold text-gray-900">Discovery & Strategy</h3>
//                 </div>
//                 <p className="text-lg text-gray-600 mb-6">
//                   We start by understanding your business, target audience, and goals. Through detailed consultations 
//                   and market research, we develop a comprehensive strategy that aligns with your vision and objectives.
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Business analysis and goal setting</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Target audience research</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Competitive analysis</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Strategic roadmap creation</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="relative">
//                 <img
//                   src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="Discovery and Strategy Process"
//                   className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl"></div>
//               </div>
//             </motion.div>

//             {/* Step 2 */}
//             <motion.div
//               className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="order-2 lg:order-1 relative">
//                 <img
//                   src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="Creative Development Process"
//                   className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl"></div>
//               </div>
//               <div className="order-1 lg:order-2">
//                 <div className="flex items-center mb-6">
//                   <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">2</div>
//                   <h3 className="text-3xl font-bold text-gray-900">Creative Development</h3>
//                 </div>
//                 <p className="text-lg text-gray-600 mb-6">
//                   Our creative team brings your vision to life through innovative design concepts, compelling content, 
//                   and strategic messaging that resonates with your target audience.
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Concept development and ideation</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Visual design and branding</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Content creation and copywriting</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Prototype and mockup creation</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>

//             {/* Step 3 */}
//             <motion.div
//               className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div>
//                 <div className="flex items-center mb-6">
//                   <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">3</div>
//                   <h3 className="text-3xl font-bold text-gray-900">Implementation & Execution</h3>
//                 </div>
//                 <p className="text-lg text-gray-600 mb-6">
//                   We execute the approved concepts with precision and attention to detail. Our team ensures 
//                   every element is perfectly crafted and optimized for maximum impact and performance.
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Technical development and coding</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Quality assurance and testing</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Cross-platform optimization</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Performance optimization</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="relative">
//                 <img
//                   src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="Implementation and Execution Process"
//                   className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl"></div>
//               </div>
//             </motion.div>

//             {/* Step 4 */}
//             <motion.div
//               className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="order-2 lg:order-1 relative">
//                 <img
//                   src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="Launch and Optimization Process"
//                   className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl"></div>
//               </div>
//               <div className="order-1 lg:order-2">
//                 <div className="flex items-center mb-6">
//                   <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">4</div>
//                   <h3 className="text-3xl font-bold text-gray-900">Launch & Optimization</h3>
//                 </div>
//                 <p className="text-lg text-gray-600 mb-6">
//                   We launch your project with comprehensive support and continue to monitor, analyze, and optimize 
//                   performance to ensure sustained success and growth.
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Strategic launch planning</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Performance monitoring and analytics</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Continuous optimization</span>
//                   </li>
//                   <li className="flex items-center">
//                     <pageIcons.check className="h-5 w-5 text-primary-500 mr-3" />
//                     <span className="text-gray-700">Ongoing support and maintenance</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Service Packages */}
//       {/* <section className="py-20 bg-white"> 
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
//             <p className="text-xl text-gray-600">
//               Choose the perfect plan for your business needs
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {packages.map((pkg, index) => (
//               <motion.div
//                 key={index}
//                 className={`bg-white rounded-2xl shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 ${
//                   pkg.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
//                 }`}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 {pkg.popular && (
//                   <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-lg">
//                     <Star className="h-4 w-4 inline mr-1" />
//                     Popular
//                   </div>
//                 )}
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
//                     <span className="text-gray-600">{pkg.period}</span>
//                   </div>
//                   <p className="text-gray-600 mb-6">{pkg.description}</p>
//                   <ul className="space-y-3 mb-8">
//                     {pkg.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center space-x-3">
//                         <Check className="h-5 w-5 text-primary-500" />
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
//                     pkg.popular
//                       ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg transform hover:scale-105'
//                       : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                   }`}>
//                     Get This Plan
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* <section className="py-20 bg-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <motion.div
//       className="text-center mb-16"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
//       <p className="text-xl text-gray-600">Choose the perfect plan for your business needs</p>
//     </motion.div>
  
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {packages.map((pkg, index) => (
//         <motion.div
//           key={index}
//           className={`bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 ${
//             pkg.popular
//               ? 'ring-2 ring-primary-500 transform scale-105 hover:shadow-xl'
//               : pkg.isFree
//               ? 'ring-2 ring-green-500 transform scale-105 hover:shadow-xl'
//               : 'hover:shadow-lg'
//           }`}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: index * 0.1 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -5 }}
//         >
//           {(pkg.popular || pkg.isFree) && (
//             <div
//               className={`absolute top-0 right-0 ${
//                 pkg.popular ? 'bg-primary-500' : 'bg-green-500'
//               } text-white px-4 py-1 rounded-bl-lg flex items-center gap-1`}
//             >
//               <Star className="h-4 w-4" />
//               {pkg.popular ? 'Popular' : 'Free'}
//             </div>
//           )}
//           <div className="p-8 flex flex-col h-full">
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
//             <div className="mb-4">
//               <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
//               <span className="text-gray-600">{pkg.period}</span>
//             </div>
//             <p className="text-gray-600 mb-6">{pkg.description}</p>
//             <ul className="space-y-3 mb-8">
//               {pkg.features.map((feature, featureIndex) => (
//                 <li key={featureIndex} className="flex items-center space-x-3">
//                   <Check className="h-5 w-5 text-primary-500" />
//                   <span className="text-gray-700">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//             <button
//               className={`mt-auto w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
//                 pkg.popular
//                   ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg transform hover:scale-105'
//                   : pkg.isFree
//                   ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transform hover:scale-105'
//                   : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//               }`}
//             >
//               Get This Plan
//             </button>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>
//  */}

//     <section className="py-20 bg-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <motion.div
//       className="text-center mb-16"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
//       <p className="text-xl text-gray-600">Choose the perfect plan for your business needs</p>
//     </motion.div>

//     <div className="flex flex-wrap justify-center gap-8">
//       {packages.map((pkg, index) => (
//         <motion.div
//           key={index}
//           className={`bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 w-full max-w-sm ${
//             pkg.popular
//               ? 'ring-2 ring-primary-500 transform scale-105 hover:shadow-xl'
//               : pkg.isFree
//               ? 'ring-2 ring-green-500 transform scale-105 hover:shadow-xl'
//               : 'hover:shadow-lg'
//           }`}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: index * 0.1 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -5 }}
//         >
//           {(pkg.popular || pkg.isFree) && (
//             <div
//               className={`absolute top-0 right-0 ${
//                 pkg.popular ? 'bg-primary-500' : 'bg-green-500'
//               } text-white px-4 py-1 rounded-bl-lg flex items-center gap-1`}
//             >
//               <Star className="h-4 w-4" />
//               {pkg.popular ? 'Popular' : 'Free'}
//             </div>
//           )}
//           <div className="p-8 flex flex-col h-full">
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
//             <div className="mb-4">
//               <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
//               <span className="text-gray-600">{pkg.period}</span>
//             </div>
//             <p className="text-gray-600 mb-6">{pkg.description}</p>
//             <ul className="space-y-3 mb-8">
//               {pkg.features.map((feature, featureIndex) => (
//                 <li key={featureIndex} className="flex items-center space-x-3">
//                   <Check className="h-5 w-5 text-primary-500" />
//                   <span className="text-gray-700">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//             {/* <button
//               className={`mt-auto w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
//                 pkg.popular
//                   ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg transform hover:scale-105'
//                   : pkg.isFree
//                   ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transform hover:scale-105'
//                   : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//               }`}
//             >
//               Get This Plan
//             </button> */}
// {/* 
//             <Link
//             to="/contact"
//             onClick={() => window.scrollTo(0, 0)}
//             className={`mt-auto w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 ${
//               pkg.popular
//                 ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg transform hover:scale-105'
//                 : pkg.isFree
//                 ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transform hover:scale-105'
//                 : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transform hover:scale-105'
//             }`}
//           >
//             Get This Plan
//           </Link> */}

//             <div className="flex flex-col gap-3 mt-auto">
//   <Link
//     to="/contact"
//     onClick={() => window.scrollTo(0, 0)}
//     className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 ${
//       pkg.popular
//         ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg transform hover:scale-105'
//         : pkg.isFree
//         ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transform hover:scale-105'
//         : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transform hover:scale-105'
//     }`}
//   >
//     Get This Plan
//   </Link>

//   <a
//     href="https://wa.me/919999999999?text=Hi%2C%20I%20am%20interested%20in%20your%20services.%20Please%20guide%20me!"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-full py-3 px-6 rounded-full font-semibold text-center bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transition-all duration-300"
//   >
//     Contact Us on WhatsApp
//   </a>
// </div>


            
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

    
//       {/* Scrolling Poster Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Creative Portfolio</h2>
//             <p className="text-xl text-gray-600">
//               See our design work in action - click any poster to pause and explore
//             </p>
//           </motion.div>

//           <div className="space-y-8">
//             <ScrollingPosters direction="left" speed={50} posters={samplePosters} size="small" />
//             <ScrollingPosters direction="right" speed={60} posters={samplePosters.reverse()} size="small" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;


// ------------------------New Code-------------------------

<<<<<<< HEAD
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Palette, Video, Globe, TrendingUp, Check, Star, Users, Target, BarChart3, Zap, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Services = () => {
//   const pageImages = {
//     heroBackground: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
//     graphicDesign: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     videoProduction: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
//     webDevelopment: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     digitalMarketing: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
//   };

//   const pageIcons = {
//     design: Palette,
//     video: Video,
//     web: Globe,
//     marketing: TrendingUp,
//     check: Check,
//     target: Target,
//     chart: BarChart3,
//     zap: Zap,
//     users: Users,
//     star: Star,
//   };

//   const packages = [
//     {
//       name: 'Free Consultation',
//       price: '₹0',
//       period: '',
//       description: 'Get expert suggestions and guidance to grow your business',
//       features: [
//         'Free 15-min Strategy Call',
//         'Digital Growth Roadmap',
//         'Platform Suggestions',
//         'No Code Tools Overview',
//         'Marketing Guidance',
//         'Basic Branding Tips',
//         'Social Media Strategy Advice',
//         '1 Competitor Analysis',
//         'Content Topic Suggestions',
//         '1 Free Poster Design Sample',
//       ],
//       popular: false,
//       isFree: true,
//     },
//     {
//       name: 'Basic',
//       price: '₹8,000',
//       period: '/month',
//       description: 'Essential package for small brands needing regular content',
//       features: [
//         '10 Posters',
//         '5 Reels',
//         '1 Video',
//         'Video Shoot Recommendations',
//         'Festival Poster Suggestions',
//         'Special Days Creative Ideas',
//         'Thumbnails',
//         'Content Creation',
//         'Social Media Management',
//         '1 Complimentary Design',
//       ],
//       popular: false,
//     },
//     {
//       name: 'Standard',
//       price: '₹12,000',
//       period: '/month',
//       description: 'Great for brands needing more variety & video content',
//       features: [
//         '10 Posters',
//         '7 Reels',
//         '2 Videos',
//         '1 Video Shoot',
//         'Festival Poster Suggestions',
//         'Special Days Creative Ideas',
//         'Thumbnails',
//         'Content Creation',
//         'Social Media Management',
//         'Up to 2 Complimentary Designs',
//       ],
//       popular: false,
//     },
//     {
//       name: 'Premium',
//       price: '₹15,000',
//       period: '/month',
//       description: 'For businesses wanting full-scale creative marketing',
//       features: [
//         '10 Posters',
//         '10 Reels',
//         '4 Videos',
//         '4 Video Shoots',
//         'Festival Posters',
//         'Special Days Posters',
//         'Thumbnails',
//         'Content Creation',
//         'Social Media Management',
//         'Up to 3 Complimentary Designs',
//       ],
//       popular: false,
//     },
//     {
//       name: 'Web Development',
//       price: '₹30,000',
//       period: '/one-time',
//       description: 'Landing pages and full website development for your business',
//       features: [
//         'Up to 6 Static/Dynamic Pages',
//         'Responsive Mobile Design',
//         'Basic SEO Setup',
//         'Landing Page + Email Integration',
//         'Portfolio & Business Profile Setup',
//         'Hosting & Domain Guidance',
//         'Live Chat Integration',
//         'Google Business Profile Setup',
//         '2 Revisions Included',
//         'Social Media Setup',
//       ],
//       popular: false,
//     },
//     {
//       name: 'Custom All-in-One',
//       price: 'Custom Quote',
//       period: '',
//       description: 'Includes everything in all packages plus custom web solutions',
//       features: [
//         'Everything from Premium Plan',
//         'Full Website Development',
//         'SEO & Marketing Campaigns',
//         'Festival + Special Day Posters',
//         'WhatsApp Automation & CRM Setup',
//         'Custom Branding Kit',
//         'Landing Page + Email Integration',
//         'Social Media Management',
//         'Google Business Profile Setup',
//         'Training & Consultation Sessions',
//       ],
//       popular: true,
//     },
//   ];

//   const samplePosters = [
//     { id: 1, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Iron rich foods for anaemia.png', title: 'Brand Identity' },
//     { id: 2, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.44 PM.jpeg', title: 'Event Poster' },
//     { id: 3, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Subbayya gari hotel 1.jpg', title: 'Product Launch' },
//     { id: 4, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (12).jpeg', title: 'Social Media' },
//     { id: 5, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (1).jpeg', title: 'Marketing Campaign' },
//     { id: 6, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (18).jpeg', title: 'Corporate Design' },
//     { id: 7, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (15).jpeg', title: 'Marketing Campaign' },
//     { id: 8, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (20).jpeg', title: 'Marketing Campaign' },
//     { id: 9, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (24).jpeg', title: 'Corporate Design' },
//     { id: 10, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (21).jpeg', title: 'Social Media' },
//     { id: 11, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp%20Image%202025-09-01%20at%207.36.46%20PM%20(1).jpeg', title: 'Corporate Design' },
//     { id: 12, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp%20Image%202025-09-01%20at%207.36.46%20PM%20(4).jpeg', title: 'Social Media' }
//   ];

//   const ScrollingPosters = ({ direction = 'left', speed = 50, posters, size = 'normal' }) => {
//     const [selectedPoster, setSelectedPoster] = useState(null);
//     const posterWidth = size === 'small' ? 225 : 300;
//     const posterHeight = size === 'small' ? 'h-56-25' : 'h-75';
//     const gap = 16;
//     const duplicatedPosters = [...posters, ...posters, ...posters, ...posters];
//     const totalWidth = (posters.length * posterWidth) + (posters.length * gap);

//     return (
//       <>
//         <div className="w-full overflow-hidden relative">
//           <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
//             <motion.div
//               className="flex"
//               style={{ gap: `${gap}px`, paddingLeft: direction === 'left' ? '0px' : `${gap}px`, paddingRight: direction === 'right' ? '0px' : `${gap}px`, willChange: 'transform' }}
//               animate={{ x: direction === 'left' ? [0, -totalWidth] : [-totalWidth, 0] }}
//               transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
//             >
//               {duplicatedPosters.map((poster, index) => (
//                 <motion.div
//                   key={`${poster.id}-${index}`}
//                   className="flex-shrink-0 cursor-pointer group"
//                   style={{ width: posterWidth }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5, delay: (index % posters.length) * 0.1, ease: 'easeOut' }}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
//                   onClick={() => setSelectedPoster(poster)}
//                 >
//                   <div className={`w-full ${posterHeight} bg-transparent shadow-lg overflow-hidden relative rounded-xl`}>
//                     <img
//                       src={poster.url}
//                       alt={poster.title}
//                       className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300 rounded-xl"
//                       loading="lazy"
//                     />
//                     <motion.div
//                       className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end rounded-xl"
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <p className="font-medium text-sm">{poster.title}</p>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//         {selectedPoster && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div
//               className={`relative w-[225px] h-56-25 bg-transparent shadow-2xl rounded-xl overflow-hidden`}
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3, type: 'spring', stiffness: 100, damping: 10 }}
//             >
//               <img
//                 src={selectedPoster.url}
//                 alt={selectedPoster.title}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//               <button
//                 onClick={() => setSelectedPoster(null)}
//                 className="absolute top-2 right-2 bg-black bg-opacity-70 text-white p-1 rounded-full hover:bg-opacity-90 transition-all duration-200"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
//                 <p className="font-medium text-sm">{selectedPoster.title}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </>
//     );
//   };

//   return (
//     <div className="pt-20">
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={pageImages.heroBackground} alt="Services background" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//             Our <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Services</span>
//           </motion.h1>
//           <motion.p className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
//             Creative + Marketing + Tech under one roof. Everything you need to build and grow your brand.
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
//                 <pageIcons.design className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Graphic Design</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Transform your brand vision into stunning visual experiences that captivate and convert.
//                 Our graphic design services combine creativity with strategic thinking to deliver designs
//                 that not only look amazing but also drive business results.
//               </p>
//               <div className="space-y-4 mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
//                 <ul className="space-y-3">
//                   {[
//                     'Custom Poster Design for Events & Promotions',
//                     'Professional Brochures & Marketing Banners',
//                     'Complete Branding Kits & Identity Systems',
//                     'Eye-catching YouTube Thumbnails',
//                     'Business Stationery & Print Materials',
//                   ].map((item, index) => (
//                     <motion.li key={index} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
//                       <Check className="h-5 w-5 text-primary-500" />
//                       <span className="text-gray-700">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-primary-50 p-6 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                   <Target className="h-5 w-5 text-primary-500 mr-2" />
//                   Growth Benefits:
//                 </h4>
//                 <p className="text-gray-600">
//                   Increase brand recognition by 80%, improve customer engagement rates,
//                   and establish a professional presence that builds trust and credibility in your market.
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//               <img src={pageImages.graphicDesign} alt="Graphic Design Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//               <img src={pageImages.videoProduction} alt="Video Production Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </motion.div>
//             <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
//                 <pageIcons.video className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Video Production</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Bring your stories to life with compelling video content that engages audiences and drives action.
//                 From concept to final cut, we create videos that resonate with your target audience and
//                 amplify your brand message across all platforms.
//               </p>
//               <div className="space-y-4 mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
//                 <ul className="space-y-3">
//                   {[
//                     'Professional Video Editing & Post-Production',
//                     'Dynamic Motion Posters & Animated Graphics',
//                     'Creative Lyrical Video Edits',
//                     'Podcast Production & Social Media Reels',
//                     'Event Invitations & Promotional Videos',
//                   ].map((item, index) => (
//                     <motion.li key={index} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
//                       <Check className="h-5 w-5 text-primary-500" />
//                       <span className="text-gray-700">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-primary-50 p-6 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                   <BarChart3 className="h-5 w-5 text-primary-500 mr-2" />
//                   Growth Benefits:
//                 </h4>
//                 <p className="text-gray-600">
//                   Boost engagement rates by 300%, increase social media reach, and improve conversion rates
//                   with video content that's 50x more likely to drive organic search results.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
//                 <pageIcons.web className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Website Development</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Create powerful digital experiences that convert visitors into customers. Our websites combine
//                 stunning design with robust functionality, ensuring your online presence drives real business growth
//                 while providing exceptional user experiences across all devices.
//               </p>
//               <div className="space-y-4 mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
//                 <ul className="space-y-3">
//                   {[
//                     'Custom UI/UX Design & User Experience Optimization',
//                     'Responsive Websites for All Devices',
//                     'Professional Portfolio & Business Websites',
//                     'Blog Development & Content Management',
//                     'Ongoing Website Maintenance & Support',
//                   ].map((item, index) => (
//                     <motion.li key={index} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
//                       <Check className="h-5 w-5 text-primary-500" />
//                       <span className="text-gray-700">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-primary-50 p-6 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                   <Zap className="h-5 w-5 text-primary-500 mr-2" />
//                   Growth Benefits:
//                 </h4>
//                 <p className="text-gray-600">
//                   Increase online visibility by 400%, improve user engagement and reduce bounce rates,
//                   while establishing credibility that converts 65% more visitors into paying customers.
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//               <img src={pageImages.webDevelopment} alt="Website Development Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//               <img src={pageImages.digitalMarketing} alt="Digital Marketing Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </motion.div>
//             <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
//                 <pageIcons.marketing className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Marketing</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Accelerate your business growth with data-driven marketing strategies that deliver measurable results.
//                 We combine creative campaigns with analytical insights to maximize your ROI and build lasting
//                 relationships with your target audience across all digital channels.
//               </p>
//               <div className="space-y-4 mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
//                 <ul className="space-y-3">
//                   {[
//                     'Strategic Social Media Management & Growth',
//                     'High-Converting Content Creation',
//                     'Google Ads & PPC Campaign Management',
//                     'SEO Optimization (Local & Global)',
//                     'Advanced Analytics & Performance Tracking',
//                   ].map((item, index) => (
//                     <motion.li key={index} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
//                       <Check className="h-5 w-5 text-primary-500" />
//                       <span className="text-gray-700">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-primary-50 p-6 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                   <Users className="h-5 w-5 text-primary-500 mr-2" />
//                   Growth Benefits:
//                 </h4>
//                 <p className="text-gray-600">
//                   Generate 250% more qualified leads, increase brand awareness by 500%, and achieve
//                   an average ROI of 400% through strategic digital marketing campaigns.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
//             <p className="text-xl text-gray-600">Choose the perfect plan for your business needs</p>
//           </motion.div>
//           <div className="flex flex-wrap justify-center gap-8">
//             {packages.map((pkg, index) => {
//               const [isClicked, setIsClicked] = useState(false);
//               const isSpecial = pkg.popular || pkg.isFree || pkg.name === 'Custom All-in-One' || pkg.name === 'Web Development';
//               return (
//                 <motion.div
//                   key={index}
//                   className={`group bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 w-full max-w-sm ${
//                     isSpecial
//                       ? pkg.popular
//                         ? 'ring-2 ring-purple-500 transform scale-105 hover:shadow-xl'
//                         : pkg.isFree
//                         ? 'ring-2 ring-green-500 transform scale-105 hover:shadow-xl'
//                         : 'hover:shadow-lg'
//                       : `border-2 ${isClicked ? 'border-orange-500' : 'border-transparent group-hover:border-orange-500'} hover:shadow-lg`
//                   }`}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   style={{ willChange: 'transform, border' }}
//                   onClick={() => setIsClicked(!isClicked)}
//                 >
//                   {(pkg.popular || pkg.isFree || pkg.name === 'Custom All-in-One' || pkg.name === 'Web Development') && (
//                     <div
//                       className={`absolute top-0 right-0 ${
//                         pkg.popular ? 'bg-purple-500' : pkg.isFree ? 'bg-green-500' : pkg.name === 'Custom All-in-One' ? 'bg-orange-500' : 'bg-orange-500'
//                       } text-white px-4 py-1 rounded-bl-lg flex items-center gap-1`}
//                     >
//                       <Star className="h-4 w-4" />
//                       {pkg.popular ? 'Popular' : pkg.isFree ? 'Free' : pkg.name === 'Custom All-in-One' ? 'Special' : 'Web Pack'}
//                     </div>
//                   )}
//                   <div className="p-8 flex flex-col h-full">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
//                     <div className="mb-4">
//                       <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
//                       <span className="text-gray-600">{pkg.period}</span>
//                     </div>
//                     <p className="text-gray-600 mb-6">{pkg.description}</p>
//                     <ul className="space-y-3 mb-8">
//                       {pkg.features.map((feature, featureIndex) => (
//                         <li key={featureIndex} className="flex items-center space-x-3">
//                           <Check className="h-5 w-5 text-primary-500" />
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="flex flex-col gap-3 mt-auto">
//                       <Link
//                         to="/contact"
//                         onClick={() => window.scrollTo(0, 0)}
//                         className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 ${
//                           pkg.popular
//                             ? 'bg-purple-500 text-white hover:bg-purple-600 hover:shadow-lg transform hover:scale-105'
//                             : pkg.isFree
//                             ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transform hover:scale-105'
//                             : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transform hover:scale-105'
//                         }`}
//                       >
//                         Get This Plan
//                       </Link>
//                       <a
//                         href="https://wa.me/919999999999?text=Hi%2C%20I%20am%20interested%20in%20your%20services.%20Please%20guide%20me!"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-full py-3 px-6 rounded-full font-semibold text-center bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transition-all duration-300"
//                       >
//                         Contact Us on WhatsApp
//                       </a>
//                       <p className="text-xs text-gray-500 mt-2">Terms and Conditions Apply</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Creative Portfolio</h2>
//             <p className="text-xl text-gray-600">See our design work in action - click any poster to view it in full size</p>
//           </motion.div>
//           <div className="space-y-8">
//             <ScrollingPosters direction="left" speed={50} posters={samplePosters} size="small" />
//             <ScrollingPosters direction="right" speed={60} posters={[...samplePosters].reverse()} size="small" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Video, Globe, TrendingUp, Check, Star, Users, Target, BarChart3, Zap, X } from 'lucide-react';
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Video, Globe, TrendingUp, Check, Star, Users, Target, BarChart3, Zap } from 'lucide-react';
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
import { Link } from 'react-router-dom';

const Services = () => {
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
    graphicDesign: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoProduction: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    webDevelopment: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    digitalMarketing: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  };

  const pageIcons = {
    design: Palette,
    video: Video,
    web: Globe,
    marketing: TrendingUp,
    check: Check,
    target: Target,
    chart: BarChart3,
    zap: Zap,
    users: Users,
    star: Star,
  };

  const packages = [
    {
      name: 'Free Consultation',
      price: '₹0',
      period: '',
      description: 'Get expert suggestions and guidance to grow your business',
      features: [
        'Free 15-min Strategy Call',
        'Digital Growth Roadmap',
        'Platform Suggestions',
        'No Code Tools Overview',
        'Marketing Guidance',
        'Basic Branding Tips',
        'Social Media Strategy Advice',
        '1 Competitor Analysis',
        'Content Topic Suggestions',
        '1 Free Poster Design Sample',
      ],
      popular: false,
      isFree: true,
    },
    {
      name: 'Basic',
      price: '₹8,000',
      period: '/month',
      description: 'Essential package for small brands needing regular content',
      features: [
        '10 Posters',
        '5 Reels',
        '1 Video',
        'Video Shoot Recommendations',
        'Festival Poster Suggestions',
        'Special Days Creative Ideas',
        'Thumbnails',
        'Content Creation',
        'Social Media Management',
        '1 Complimentary Design',
      ],
      popular: false,
    },
    {
      name: 'Standard',
      price: '₹12,000',
      period: '/month',
      description: 'Great for brands needing more variety & video content',
      features: [
        '10 Posters',
        '7 Reels',
        '2 Videos',
        '1 Video Shoot',
        'Festival Poster Suggestions',
        'Special Days Creative Ideas',
        'Thumbnails',
        'Content Creation',
        'Social Media Management',
        'Up to 2 Complimentary Designs',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '₹15,000',
      period: '/month',
      description: 'For businesses wanting full-scale creative marketing',
      features: [
        '10 Posters',
        '10 Reels',
        '4 Videos',
        '4 Video Shoots',
        'Festival Posters',
        'Special Days Posters',
        'Thumbnails',
        'Content Creation',
        'Social Media Management',
        'Up to 3 Complimentary Designs',
      ],
      popular: false,
    },
    {
      name: 'Web Development',
      price: '₹30,000',
      period: '/one-time',
      description: 'Landing pages and full website development for your business',
      features: [
        'Up to 6 Static/Dynamic Pages',
        'Responsive Mobile Design',
        'Basic SEO Setup',
        'Landing Page + Email Integration',
        'Portfolio & Business Profile Setup',
        'Hosting & Domain Guidance',
        'Live Chat Integration',
        'Google Business Profile Setup',
        '2 Revisions Included',
        'Social Media Setup',
      ],
      popular: false,
    },
    {
      name: 'Custom All-in-One',
      price: 'Custom Quote',
      period: '',
      description: 'Includes everything in all packages plus custom web solutions',
      features: [
        'Everything from Premium Plan',
        'Full Website Development',
        'SEO & Marketing Campaigns',
        'Festival + Special Day Posters',
        'WhatsApp Automation & CRM Setup',
        'Custom Branding Kit',
        'Landing Page + Email Integration',
        'Social Media Management',
        'Google Business Profile Setup',
        'Training & Consultation Sessions',
      ],
      popular: true,
    },
  ];

  const samplePosters = [
<<<<<<< HEAD
    { id: 1, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Iron rich foods for anaemia.png', title: 'Brand Identity' },
    { id: 2, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.44 PM.jpeg', title: 'Event Poster' },
    { id: 3, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Subbayya gari hotel 1.jpg', title: 'Product Launch' },
    { id: 4, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (12).jpeg', title: 'Social Media' },
    { id: 5, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (1).jpeg', title: 'Marketing Campaign' },
    { id: 6, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (18).jpeg', title: 'Corporate Design' },
    { id: 7, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (15).jpeg', title: 'Marketing Campaign' },
    { id: 8, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (20).jpeg', title: 'Marketing Campaign' },
    { id: 9, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (24).jpeg', title: 'Corporate Design' },
    { id: 10, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (21).jpeg', title: 'Social Media' },
    { id: 11, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp%20Image%202025-09-01%20at%207.36.46%20PM%20(1).jpeg', title: 'Corporate Design' },
    { id: 12, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp%20Image%202025-09-01%20at%207.36.46%20PM%20(4).jpeg', title: 'Social Media' }
  ];

  const ScrollingPosters = ({ 
    direction = 'left', 
    speed = 50,
    posters,
    size = 'normal'
  }: {
    direction?: 'left' | 'right';
    speed?: number;
    posters: Array<{ id: number; url: string; title: string }>;
    size?: 'small' | 'normal';
  }) => {
    const [selectedPoster, setSelectedPoster] = useState<{ id: number; url: string; title: string } | null>(null);
=======
    { id: 1, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355974/London_shakes_fried_chicken_eijhun.jpg', title: 'Brand Identity' },
    { id: 2, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358595/Fathers_day_poster_trudent_survo5.jpg', title: 'Event Poster' },
    { id: 3, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358595/Mutton_Keema_samosa_Janatha_Tea_point_fkjc56.jpg', title: 'Product Launch' },
    { id: 4, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355975/Dimples_creation_Dr._subhash_csejxn.jpg', title: 'Social Media' },
    { id: 5, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359029/Bhimavaram_001_gfoo0l.png', title: 'Marketing Campaign' },
    { id: 6, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360853/Free_Bird_Training_Poster_01_s07qmi.jpg', title: 'Corporate Design' },
    { id: 7, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360857/Campaign_Poster_adoyfb.jpg', title: 'Marketing Campaign' },
    { id: 8, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359027/clearance_sale_rmgoxo.png', title: 'Marketing Campaign' },
    { id: 9, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360845/SaveVid.Net_449163199_122122492328291490_3831507330999147960_n_mtmenv.jpg', title: 'Corporate Design' },
    { id: 10, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359025/1-16may_dbbrw2.png', title: 'Social Media' }
  ];

  const ScrollingPosters = ({ direction = 'left', speed = 50, posters, size = 'normal' }) => {
    const [isPaused, setIsPaused] = React.useState(false);
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
    const posterWidth = size === 'small' ? 225 : 300;
    const posterHeight = size === 'small' ? 'h-56-25' : 'h-75';
    const gap = 16;
    const duplicatedPosters = [...posters, ...posters, ...posters, ...posters];
    const totalWidth = (posters.length * posterWidth) + (posters.length * gap);

    return (
<<<<<<< HEAD
      <>
        <div className="w-full overflow-hidden relative">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: `${gap}px`, paddingLeft: direction === 'left' ? '0px' : `${gap}px`, paddingRight: direction === 'right' ? '0px' : `${gap}px`, willChange: 'transform' }}
              animate={{ x: direction === 'left' ? [0, -totalWidth] : [-totalWidth, 0] }}
              transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
            >
              {duplicatedPosters.map((poster, index) => (
                <motion.div
                  key={`${poster.id}-${index}`}
                  className="flex-shrink-0 cursor-pointer group"
                  style={{ width: posterWidth }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: (index % posters.length) * 0.1, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                  onClick={() => setSelectedPoster(poster)}
                >
                  <div className={`w-full ${posterHeight} bg-transparent shadow-lg overflow-hidden relative rounded-xl`}>
                    <img
                      src={poster.url}
                      alt={poster.title}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300 rounded-xl"
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end rounded-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-medium text-sm">{poster.title}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {selectedPoster && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center p-4">
              <img
                src={selectedPoster.url}
                alt={selectedPoster.title}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
                style={{ transform: 'scale(0.75)' }}
              />
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </>
=======
      <div className="w-full overflow-hidden relative">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap: `${gap}px`, paddingLeft: direction === 'left' ? '0px' : `${gap}px`, paddingRight: direction === 'right' ? '0px' : `${gap}px` }}
            animate={{ x: !isPaused ? (direction === 'left' ? [0, -totalWidth] : [-totalWidth, 0]) : 0 }}
            transition={{ duration: speed, repeat: !isPaused ? Infinity : 0, ease: 'linear' }}
          >
            {duplicatedPosters.map((poster, index) => (
              <motion.div
                key={`${poster.id}-${index}`}
                className="flex-shrink-0 cursor-pointer group"
                style={{ width: posterWidth }}
                onClick={() => setIsPaused(!isPaused)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-full ${posterHeight} bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg overflow-hidden relative rounded-xl`}>
                  <img src={poster.url} alt={poster.title} className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300 rounded-xl" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end rounded-xl">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium text-sm">{poster.title}</p>
                    </div>
                  </div>
                  {isPaused && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                      <div className="text-white text-sm font-medium bg-black bg-opacity-70 px-3 py-1 rounded-full">Click to Resume</div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
    );
  };

  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={pageImages.heroBackground} alt="Services background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Our <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Creative + Marketing + Tech under one roof. Everything you need to build and grow your brand.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
                <pageIcons.design className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Graphic Design</h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform your brand vision into stunning visual experiences that captivate and convert.
                Our graphic design services combine creativity with strategic thinking to deliver designs
                that not only look amazing but also drive business results.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
                <ul className="space-y-3">
                  {[
                    'Custom Poster Design for Events & Promotions',
                    'Professional Brochures & Marketing Banners',
                    'Complete Branding Kits & Identity Systems',
                    'Eye-catching YouTube Thumbnails',
                    'Business Stationery & Print Materials',
                  ].map((item, index) => (
                    <motion.li key={index} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                      <Check className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Target className="h-5 w-5 text-primary-500 mr-2" />
                  Growth Benefits:
                </h4>
                <p className="text-gray-600">
                  Increase brand recognition by 80%, improve customer engagement rates,
                  and establish a professional presence that builds trust and credibility in your market.
                </p>
              </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <img src={pageImages.graphicDesign} alt="Graphic Design Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <img src={pageImages.videoProduction} alt="Video Production Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
            <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
                <pageIcons.video className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Video Production</h2>
              <p className="text-lg text-gray-600 mb-6">
                Bring your stories to life with compelling video content that engages audiences and drives action.
                From concept to final cut, we create videos that resonate with your target audience and
                amplify your brand message across all platforms.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
                <ul className="space-y-3">
                  {[
                    'Professional Video Editing & Post-Production',
                    'Dynamic Motion Posters & Animated Graphics',
                    'Creative Lyrical Video Edits',
                    'Podcast Production & Social Media Reels',
                    'Event Invitations & Promotional Videos',
                  ].map((item, index) => (
                    <motion.li key={index} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                      <Check className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <BarChart3 className="h-5 w-5 text-primary-500 mr-2" />
                  Growth Benefits:
                </h4>
                <p className="text-gray-600">
                  Boost engagement rates by 300%, increase social media reach, and improve conversion rates
                  with video content that's 50x more likely to drive organic search results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
<<<<<<< HEAD
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
=======
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r

 from-primary-500 to-primary-600 rounded-full mb-6">
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
                <pageIcons.web className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Website Development</h2>
              <p className="text-lg text-gray-600 mb-6">
                Create powerful digital experiences that convert visitors into customers. Our websites combine
                stunning design with robust functionality, ensuring your online presence drives real business growth
                while providing exceptional user experiences across all devices.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
                <ul className="space-y-3">
                  {[
                    'Custom UI/UX Design & User Experience Optimization',
                    'Responsive Websites for All Devices',
                    'Professional Portfolio & Business Websites',
                    'Blog Development & Content Management',
                    'Ongoing Website Maintenance & Support',
                  ].map((item, index) => (
                    <motion.li key={index} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                      <Check className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Zap className="h-5 w-5 text-primary-500 mr-2" />
                  Growth Benefits:
                </h4>
                <p className="text-gray-600">
                  Increase online visibility by 400%, improve user engagement and reduce bounce rates,
                  while establishing credibility that converts 65% more visitors into paying customers.
                </p>
              </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <img src={pageImages.webDevelopment} alt="Website Development Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <img src={pageImages.digitalMarketing} alt="Digital Marketing Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
            <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
                <pageIcons.marketing className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Marketing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Accelerate your business growth with data-driven marketing strategies that deliver measurable results.
                We combine creative campaigns with analytical insights to maximize your ROI and build lasting
                relationships with your target audience across all digital channels.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
                <ul className="space-y-3">
                  {[
                    'Strategic Social Media Management & Growth',
                    'High-Converting Content Creation',
                    'Google Ads & PPC Campaign Management',
                    'SEO Optimization (Local & Global)',
                    'Advanced Analytics & Performance Tracking',
                  ].map((item, index) => (
                    <motion.li key={index} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                      <Check className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Users className="h-5 w-5 text-primary-500 mr-2" />
                  Growth Benefits:
                </h4>
                <p className="text-gray-600">
                  Generate 250% more qualified leads, increase brand awareness by 500%, and achieve
                  an average ROI of 400% through strategic digital marketing campaigns.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your business needs</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 w-full max-w-sm ${
<<<<<<< HEAD
                  pkg.popular
                    ? 'ring-2 ring-purple-500 transform scale-105 hover:shadow-xl'
                    : pkg.isFree
                    ? 'ring-2 ring-green-500 transform scale-105 hover:shadow-xl'
                    : 'ring-2 ring-orange-500 hover:shadow-lg'
=======
                  pkg.popular ? 'ring-2 ring-purple-500 transform scale-105 hover:shadow-xl' : pkg.isFree ? 'ring-2 ring-green-500 transform scale-105 hover:shadow-xl' : 'hover:shadow-lg'
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
<<<<<<< HEAD
                style={{ willChange: 'transform' }}
              >
                {(pkg.popular || pkg.isFree || pkg.name === 'Web Development') && (
                  <div
                    className={`absolute top-0 right-0 ${
                      pkg.popular ? 'bg-purple-500' : pkg.isFree ? 'bg-green-500' : 'bg-orange-500'
                    } text-white px-4 py-1 rounded-bl-lg flex items-center gap-1`}
                  >
                    <Star className="h-4 w-4" />
                    {pkg.popular ? 'Popular' : pkg.isFree ? 'Free' : 'Web Pack'}
=======
              >
                {(pkg.popular || pkg.isFree || pkg.name === 'Custom All-in-One' || pkg.name === 'Web Development') && (
                  <div
                    className={`absolute top-0 right-0 ${
                      pkg.popular ? 'bg-purple-500' : pkg.isFree ? 'bg-green-500' : pkg.name === 'Custom All-in-One' ? 'bg-orange-500' : 'bg-orange-500'
                    } text-white px-4 py-1 rounded-bl-lg flex items-center gap-1`}
                  >
                    <Star className="h-4 w-4" />
                    {pkg.popular ? 'Popular' : pkg.isFree ? 'Free' : pkg.name === 'Custom All-in-One' ? 'Special' : 'Web Pack'}
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
                  </div>
                )}
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
<<<<<<< HEAD
                        <Check className="h-5 w-5 text-primary-500" />
=======
                        < Check className="h-5 w-5 text-primary-500" />
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link
                      to="/contact"
                      onClick={() => window.scrollTo(0, 0)}
                      className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-purple-500 text-white hover:bg-purple-600 hover:shadow-lg transform hover:scale-105'
                          : pkg.isFree
                          ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transform hover:scale-105'
<<<<<<< HEAD
=======
                          : pkg.name === 'Custom All-in-One' || pkg.name === 'Web Development'
                          ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transform hover:scale-105'
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
                          : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transform hover:scale-105'
                      }`}
                    >
                      Get This Plan
                    </Link>
                    <a
                      href="https://wa.me/919999999999?text=Hi%2C%20I%20am%20interested%20in%20your%20services.%20Please%20guide%20me!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-6 rounded-full font-semibold text-center bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transition-all duration-300"
                    >
                      Contact Us on WhatsApp
                    </a>
                    <p className="text-xs text-gray-500 mt-2">Terms and Conditions Apply</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Creative Portfolio</h2>
<<<<<<< HEAD
            <p className="text-xl text-gray-600">See our design work in action - click any poster to view it in full size</p>
          </motion.div>
          <div className="space-y-8">
            <ScrollingPosters direction="left" speed={50} posters={samplePosters} size="small" />
            <ScrollingPosters direction="right" speed={60} posters={[...samplePosters].reverse()} size="small" />
=======
            <p className="text-xl text-gray-600">See our design work in action - click any poster to pause and explore</p>
          </motion.div>
          <div className="space-y-8">
            <ScrollingPosters direction="left" speed={50} posters={samplePosters} size="small" />
            <ScrollingPosters direction="right" speed={60} posters={samplePosters.reverse()} size="small" />
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;