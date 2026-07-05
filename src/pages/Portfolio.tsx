// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Filter, ExternalLink, Play } from 'lucide-react';

// const Portfolio = () => {
//   // ========================================
//   // 🖼️ IMAGES & ICONS - EASY TO UPDATE
//   // ========================================
//   const pageImages = {
//     heroBackground: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920',
//     // 📝 TO UPDATE: Replace URLs above with your images
//   };

//   const pageIcons = {
//     // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
//     filter: Filter,
//     external: ExternalLink,
//     play: Play,
//     // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
//   };

//   const [activeFilter, setActiveFilter] = useState('all');

//   const filters = [
//     { id: 'all', name: 'All Work' },
//     { id: 'posters', name: 'Posters' },
//     { id: 'logos', name: 'Logos' },
//     { id: 'videos', name: 'Videos' },
//     { id: 'websites', name: 'Websites' }
//   ];

//   const portfolioItems = [
//     {
//       id: 1,
//       title: 'Corporate Business Poster',
//       category: 'posters',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358835/Untitled-1_2_kbyzzk.png',
//       description: 'Professional poster for Real estate business',
//       type: 'image'
//     },
//     {
//       id: 2,
//       title: 'FreeBird Agency',
//       category: 'Social Media Ads',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360850/Free_Bird_poster_c35cce.jpg',
//       description: 'Professional poster for Brand Marketing',
//       type: 'image'
//     },
//     {
//       id: 3,
//       title: 'Product Launch Video',
//       category: 'videos',
//       image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Dynamic product showcase with motion graphics',
//       type: 'video',
//       liveUrl: '#link'
//     },
//     {
//       id: 4,
//       title: 'Safety Net Solutions',
//       category: 'websites',
//       image: 'https://sneha-enterprises.vercel.app/images/nets-images/Balconies%20INV.jpg',
//       description: 'Modern Safety Nets Solutions for your Home',
//       type: 'link',
//       liveUrl: 'https://snehasafetynets.com/'
//     },
//     {
//       id: 5,
//       title: 'Corporate Event Poster',
//       category: 'posters',
//       image: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Professional poster for business conference',
//       type: 'image'
//     },
//     {
//       id: 6,
//       title: 'FreeBird Agency',
//       category: 'logos',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1755178598/Free_bird_logo_png_j2fnef.png',
//       description: 'Elegant branding for Digital Marketing Agency',
//       type: 'image'
//     },
//     {
//       id: 7,
//       title: 'Portfolio Website',
//       category: 'websites',
//       image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Creative portfolio site for Digital Marketers',
//       type: 'link',
//       liveUrl: 'https://udayantra.netlify.app/'
//     },
//     {
//       id: 8,
//       title: 'Social Media Campaign',
//       category: 'videos',
//       image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Viral video content for social media',
//       type: 'video',
//       liveUrl: '#link'
//     },
//     {
//       id: 9,
//       title: 'HealthCare Clinic',
//       category: 'logos',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1755178431/Abhaya_homeo_clinic_logo_01_g1vrk5.png',
//       description: 'Complete brand identity Homoeo Clinic',
//       type: 'image'
//     },
//     {
//       id: 10,
//       title: 'Health Care Industry',
//       category: 'Social Media Ads',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355973/Sri_laasya_No_tobacco_day_poster_31.05_ygxgpi.jpg',
//       description: 'Professional poster for Health Care Industry on No Tobacco Day',
//       type: 'image'
//     },
//     {
//       id: 11,
//       title: 'Auto Mobile Industry',
//       category: 'posters',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358594/Bike_poster_iefpxd.jpg',
//       description: 'Professional poster for new bike model Announcement',
//       type: 'image'
//     },
//     {
//       id: 12,
//       title: 'Health Care Industry',
//       category: 'Social Media Ads',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358595/Trudent_15.07.2025_vq7lf3.jpg',
//       description: 'Professional poster for Health Care Industry on Dental Issues',
//       type: 'image'
//     },
//     {
//       id: 13,
//       title: 'Corporate Business Poster',
//       category: 'posters',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359028/Student_care_4_e5aekz.png',
//       description: 'Professional poster for Study Abroad business',
//       type: 'image'
//     },
//     {
//       id: 14,
//       title: 'FreeBird Agency',
//       category: 'Social Media Ads',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359024/8aug_mqqnry.png',
//       description: 'Professional poster for Brand Marketing',
//       type: 'image'
//     },
//     {
//       id: 15,
//       title: 'Corporate Business Poster',
//       category: 'posters',
//       image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360845/SaveVid.Net_448289640_122119497950291490_3216005744129623178_n_zhkcu9.jpg',
//       description: 'Professional poster for School  Admissions',
//       type: 'image'
//     },
//     {
//       id: 16,
//       title: 'Healthcare Website',
//       category: 'websites',
//       image: 'https://jointefforts.in/wp-content/uploads/2024/08/doctor-helping-patient-side-view-1024x683.jpg',
//       description: 'Complete patient management system with appointment scheduling',
//       type: 'link',
//       liveUrl: "https://physioheal-pro.vercel.app",
//     },
//     {
//       id: 17,
//       title: 'Social Media Campaign',
//       category: 'videos',
//       image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Viral video content for social media',
//       type: 'video',
//       liveUrl: '#link'
//     },
//     {
//       id: 18,
//       title: 'Social Media Campaign',
//       category: 'videos',
//       image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Viral video content for social media',
//       type: 'video',
//       liveUrl: '#link'
//     },
//     {
//       id: 19,
//       title: 'Social Media Campaign',
//       category: 'videos',
//       image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Viral video content for social media',
//       type: 'video',
//       liveUrl: '#link'
//     }
//   ];

//   const filteredItems = activeFilter === 'all' 
//     ? portfolioItems 
//     : portfolioItems.filter(item => item.category === activeFilter);

//   const clientResults = [
//     {
//       client: 'TechStart Inc.',
//       metric: 'Brand Recognition',
//       before: '12%',
//       after: '78%',
//       improvement: '+550%'
//     },
//     {
//       client: 'FoodiePlace',
//       metric: 'Social Engagement',
//       before: '2.3K',
//       after: '45.8K',
//       improvement: '+1,892%'
//     },
//     {
//       client: 'FitLife Gym',
//       metric: 'Website Traffic',
//       before: '1.2K/mo',
//       after: '12.4K/mo',
//       improvement: '+933%'
//     }
//   ];

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={pageImages.heroBackground}
//             alt="Portfolio background"
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
//             Our <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Portfolio</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Discover the creative solutions we've crafted for brands across industries
//           </motion.p>
//         </div>
//       </section>

//       {/* Filter Tabs */}
//       <section className="py-8 bg-white sticky top-20 z-40 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-center space-x-1 bg-gray-100 rounded-full p-1 max-w-2xl mx-auto">
//             {filters.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
//                   activeFilter === filter.id
//                     ? 'bg-primary-500 text-white shadow-lg'
//                     : 'text-gray-600 hover:text-primary-500'
//                 }`}
//               >
//                 <Filter className="h-4 w-4" />
//                 <span>{filter.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             layout
//           >
//             {filteredItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 layout
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
//                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {item.type === 'video' ? (
//                         <Play className="h-12 w-12 text-white" />
//                       ) : (
//                         <ExternalLink className="h-12 w-12 text-white" />
//                       )}
//                     </div>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       {filters.find(f => f.id === item.category)?.name}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Client Results */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Results</h2>
//             <p className="text-xl text-gray-600">
//               Real outcomes from our creative partnerships
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {clientResults.map((result, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg p-8 text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{result.client}</h3>
//                 <p className="text-gray-600 mb-6">{result.metric}</p>
                
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500">Before:</span>
//                     <span className="font-semibold text-gray-700">{result.before}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500">After:</span>
//                     <span className="font-semibold text-gray-700">{result.after}</span>
//                   </div>
//                   <div className="border-t pt-4">
//                     <span className="text-2xl font-bold text-primary-500">{result.improvement}</span>
//                     <p className="text-sm text-gray-500">Improvement</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;


import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ExternalLink, Play, X } from 'lucide-react';

const Portfolio = () => {
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920',
  };

  const pageIcons = {
    filter: Filter,
    external: ExternalLink,
    play: Play,
  };

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const portfolioRef = useRef(null);

  const filters = [
    { id: 'all', name: 'All Work' },
    { id: 'posters', name: 'Posters' },
    { id: 'logos', name: 'Logos' },
    { id: 'videos', name: 'Videos' },
    { id: 'websites', name: 'Websites' },
    { id: 'social', name: 'Social Media Ads' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Business Poster',
      category: 'posters',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Abhaya homeo clinic 30mins walk.png',
      description: 'Professional poster for Real estate business',
      type: 'image'
    },
    {
      id: 2,
      title: 'FreeBird Agency',
      category: 'social',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (15).jpeg',
      description: 'Professional poster for Brand Marketing',
      type: 'image'
    },
    {
      id: 3,
      title: 'Q-Path Diagnostics',
      category: 'websites',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/doctor-with-patient-s-x-ray-film%20(1).jpg',
      description: 'At home health services with Q-Path',
      type: 'link',
      liveUrl: 'https://xrayservicesathome.com/'
    },
    {
      id: 4,
      title: 'Safety Net Solutions',
      category: 'websites',
      image: 'https://sneha-enterprises.vercel.app/images/nets-images/Balconies%20INV.jpg',
      description: 'Modern Safety Nets Solutions for your Home',
      type: 'link',
      liveUrl: 'https://snehasafetynets.com/'
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'videos',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Viral video content for social media',
      type: 'video',
      liveUrl: '#link'
    },
    {
      id: 6,
      title: 'FreeBird Agency',
      category: 'logos',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/bird.png',
      description: 'Elegant branding for Digital Marketing Agency',
      type: 'image'
    },
    {
      id: 7,
      title: 'Portfolio Website',
      category: 'websites',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Udayantra_Social%20Media%20Posts.png',
      description: 'Creative portfolio site for Digital Marketers',
      type: 'link',
      liveUrl: 'https://udayantra.online/'
    },
    {
      id: 8,
      title: 'Product Launching Website',
      category: 'websites',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Shakti-kit%20-Compressed/Shakti%20Kit%20(1).jpg',
      description: 'Creative landing page for launching a new product',
      type: 'link',
      liveUrl: 'https://shaktikit.com'
    },
    {
      id: 9,
      title: 'HealthCare Clinic',
      category: 'posters',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Iron rich foods for anaemia.png',
      description: 'Complete brand identity Homoeo Clinic',
      type: 'image'
    },
    {
      id: 10,
      title: 'Health Care Industry',
      category: 'social',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (38).jpeg',
      description: 'Professional poster for Health Care Industry on No Tobacco Day',
      type: 'image'
    },
    {
      id: 11,
      title: 'Auto Mobile Industry',
      category: 'posters',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (8).jpeg',
      description: 'Professional poster for new bike model Announcement',
      type: 'image'
    },
    {
      id: 12,
      title: 'Health Care Industry',
      category: 'social',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (18).jpeg',
      description: 'Professional poster for Health Care Industry on Dental Issues',
      type: 'image'
    },
    {
      id: 13,
      title: 'Corporate Business Poster',
      category: 'posters',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (1).jpeg',
      description: 'Professional poster for Study Abroad business',
      type: 'image'
    },
    {
      id: 14,
      title: 'FreeBird Agency',
      category: 'social',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (10).jpeg',
      description: 'Professional poster for Brand Marketing',
      type: 'image'
    },
    {
      id: 15,
      title: 'Corporate Business Poster',
      category: 'posters',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp%20Image%202025-09-01%20at%207.36.45%20PM%20(29).jpeg',
      description: 'Professional poster for School Admissions',
      type: 'image'
    },
    {
      id: 16,
      title: 'Healthcare Website',
      category: 'websites',
      image: 'https://jointefforts.in/wp-content/uploads/2024/08/doctor-helping-patient-side-view-1024x683.jpg',
      description: 'Complete patient management system with appointment scheduling',
      type: 'link',
      liveUrl: 'https://physioheal-pro.vercel.app',
    },
    {
      id: 17,
      title: 'Social Media Campaign',
      category: 'posters',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp%20Image%202025-09-01%20at%207.36.45%20PM%20(4).jpeg',
      description: 'Social Media Campaign for Brand Awareness',
      type: 'image'
    },
    {
      id: 18,
      title: 'Q-Path Diagnostics',
      category: 'websites',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/homepage-abg-image.jpeg',
      description: 'At home health services with Q-Path',
      type: 'link',
      liveUrl: 'https://abgservicesathome.com/'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const clientResults = [
    {
      client: 'TechStart Inc.',
      metric: 'Brand Recognition',
      before: '12%',
      after: '78%',
      improvement: '+550%'
    },
    {
      client: 'FoodiePlace',
      metric: 'Social Engagement',
      before: '2.3K',
      after: '45.8K',
      improvement: '+1,892%'
    },
    {
      client: 'FitLife Gym',
      metric: 'Website Traffic',
      before: '1.2K/mo',
      after: '12.4K/mo',
      improvement: '+933%'
    }
  ];

  const handleCardClick = (item) => {
    if ((item.type === 'link' || item.type === 'video') && item.liveUrl && item.liveUrl !== '#link') {
      window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
    } else if (item.category === 'posters' || item.category === 'social') {
      setSelectedImage(item.image);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={pageImages.heroBackground} alt="Portfolio background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Our <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Portfolio</span>
          </motion.h1>
          <motion.p className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Discover the creative solutions we've crafted for brands across industries
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-gray-100 rounded-2xl p-1 max-w-3xl mx-auto">
            {filters.map((filter) => (
              <button 
                key={filter.id} 
                onClick={() => {
                  setActiveFilter(filter.id);
                  portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.scrollBy(0, -80); // Offset to account for sticky filter bar height
                }} 
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 text-sm ${activeFilter === filter.id ? 'bg-primary-500 text-white shadow-lg' : 'text-gray-600 hover:text-primary-500'}`}
              >
                <Filter className="h-4 w-4" />
                <span>{filter.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white pt-20" ref={portfolioRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-xs ${((item.type === 'link' || item.type === 'video') && item.liveUrl && item.liveUrl !== '#link') || item.category === 'posters' || item.category === 'social' ? 'cursor-pointer' : ''}`}
                onClick={() => handleCardClick(item)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.type === 'video' ? <Play className="h-12 w-12 text-white" /> : <ExternalLink className="h-12 w-12 text-white" />}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {filters.find(f => f.id === item.category)?.name || item.category}
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Results</h2>
            <p className="text-xl text-gray-600">Real outcomes from our creative partnerships</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientResults.map((result, index) => (
              <motion.div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{result.client}</h3>
                <p className="text-gray-600 mb-6">{result.metric}</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center"><span className="text-gray-500">Before:</span><span className="font-semibold text-gray-700">{result.before}</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-500">After:</span><span className="font-semibold text-gray-700">{result.after}</span></div>
                  <div className="border-t pt-4"><span className="text-2xl font-bold text-primary-500">{result.improvement}</span><p className="text-sm text-gray-500">Improvement</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Enlarged portfolio item" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-transform duration-300 hover:scale-110 shadow-lg"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;