// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Linkedin, ExternalLink, GraduationCap, Award, Clock, Building, Users, Video, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

// const Team = () => {
//   // ========================================
//   // 🖼️ IMAGES & ICONS - EASY TO UPDATE
//   // ========================================
//   const pageImages = {
//     heroBackground: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920',
//     // 📝 TO UPDATE: Replace URLs above with your images
//   };

//   const pageIcons = {
//     // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
//     graduation: GraduationCap,
//     award: Award,
//     external: ExternalLink,
//     linkedin: Linkedin,
//     chevronDown: ChevronDown,
//     chevronUp: ChevronUp,
//     // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
//   };

//   const [expandedMember, setExpandedMember] = useState<number | null>(null);
//   const [pausedAnimations, setPausedAnimations] = useState<{ [key: string]: boolean }>({});

//   const teamMembers = [
//     {
//       id: 1,
//       name: 'Rashmitha Nagabattula',
//       role: 'Sr. Graphic Designer',
//       photo: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753260597/20250719_160820_fglutt.jpg',
//       fullName: 'Rashmitha Nagabattula',
//       education: 'B.Tech CSE',
//       expertise: 'Graphic Designing',
//       experience: '5+ years',
//       posts: '7000+',
//       videoHours: '600+ hrs',
//       videos: '50+',
//       industries: '5',
//       certifications: 'Available on request',
//       linkedin: 'https://www.linkedin.com/in/rashmitha-nagabattula-328ab8215/',
//       portfolio: null, // Not Available
//       posters: [
//         { id: 1, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355974/London_shakes_fried_chicken_eijhun.jpg', title: 'Social Media Ad' },
//         { id: 2, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355975/Dimples_creation_Dr._subhash_csejxn.jpg', title: 'Event Poster' },
//         { id: 3, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358869/Real_Estate_Poster_tfs9te.png', title: 'Product Launch' },
//         { id: 4, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358878/mahatma_enclave_poster_yqcho7.jpg', title: 'Brand Campaign' },
//         { id: 5, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355974/Hair_transplant_Dr._subhash_k1ze3i.jpg', title: 'Marketing Design' },
//         { id: 6, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355973/Leela_dental_-_Dental_implants_at323a.jpg', title: 'Social Media Ad' },
//         { id: 7, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355973/Republicday_poster_BGR_p21brf.jpg', title: 'Event Poster' },
//         { id: 8, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753355973/Sri_laasya_No_tobacco_day_poster_31.05_ygxgpi.jpg', title: 'Product Launch' },
//         { id: 9, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358807/womensday_poster_mg29oz.png', title: 'Brand Campaign' },
//         { id: 10, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358835/Untitled-1_2_kbyzzk.png', title: 'Marketing Design' },
//       ]
//     },
//     {
//       id: 2,
//       name: 'Teja Mallipudi',
//       role: 'Sr. Graphic Designer & Video Editor',
//       photo: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753260819/20250719_165818_fzz2f7.jpg',
//       fullName: 'Teja Mallipudi',
//       education: 'B.Sc Computers',
//       expertise: 'Graphic Designing',
//       experience: '4 years',
//       posts: '5000+',
//       videoHours: '2000+ hrs',
//       videos: '200+',
//       industries: '7',
//       certifications: 'Available on request',
//       linkedin: 'https://www.linkedin.com/in/teja-mallipudi-69a8531a0/',
//       portfolio: 'https://www.behance.net/tejam2',
//       posters: [
//         { id: 11, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358595/Fathers_day_poster_trudent_survo5.jpg', title: 'Social Media Ad' },
//         { id: 12, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358610/Sunita_williams_poster_edcpt3.jpg', title: 'Event Poster' },
//         { id: 13, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358595/Trudent_15.07.2025_vq7lf3.jpg', title: 'Product Launch' },
//         { id: 14, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358595/Trudent_Brighten_Smile_poster_19.06.2025_cz4sz0.jpg', title: 'Brand Campaign' },
//         { id: 15, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358595/Mutton_Keema_samosa_Janatha_Tea_point_fkjc56.jpg', title: 'Marketing Design' },
//         { id: 16, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358594/Mission_impossible_poster_cjxscv.jpg', title: 'Social Media Ad' },
//         { id: 17, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358594/Mansion_gingelly_oil_hoov01.jpg', title: 'Event Poster' },
//         { id: 18, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358594/Bike_poster_iefpxd.jpg', title: 'Product Launch' },
//         { id: 19, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358594/Bike_poster_iefpxd.jpg', title: 'Brand Campaign' },
//         { id: 20, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753358594/Resurrection_poster_teamsv.jpg', title: 'Marketing Design' },
//       ]
//     },
//     {
//       id: 3,
//       name: 'Lingamallu Roja Harshitha',
//       role: 'Sr. Graphic Designer',
//       photo: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753261031/Screenshot_2025-07-23_142658_dk5qrn.png',
//       fullName: 'Lingamallu Roja Harshitha',
//       education: 'B.Sc Animation',
//       expertise: 'Graphic Designing',
//       experience: '3+ years',
//       posts: '5000+',
//       videoHours: '500+ hrs',
//       videos: '50+',
//       industries: '5',
//       certifications: 'Available on request',
//       linkedin: 'https://www.linkedin.com/in/harshitha-roja-a7520b20a',
//       portfolio: 'https://www.behance.net/harshitlingama',
//       posters: [
//         { id: 21, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359033/7th_qvs5sc.jpg', title: 'Social Media Ad' },
//         { id: 22, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359031/1-june22_zoeuyp.png', title: 'Event Poster' },
//         { id: 23, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359029/Bhimavaram_001_gfoo0l.png', title: 'Product Launch' },
//         { id: 24, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359028/Student_care_4_e5aekz.png', title: 'Brand Campaign' },
//         { id: 25, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359028/bridal_post_e7tgdx.png', title: 'Marketing Design' },
//         { id: 26, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359026/nayana_eanao0.jpg', title: 'Social Media Ad' },
//         { id: 27, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359025/1-16may_dbbrw2.png', title: 'Event Poster' },
//         { id: 28, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359021/pasta_bb3mvg.png', title: 'Product Launch' },
//         { id: 29, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359024/8aug_mqqnry.png', title: 'Brand Campaign' },
//         { id: 30, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359027/clearance_sale_rmgoxo.png', title: 'Marketing Design' },
//       ]
//     },
//     {
//       id: 4,
//       name: 'Ram Pinapothula',
//       role: 'Graphic & Website Designer',
//       photo: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753260938/20250719_170141_ww7afd.jpg',
//       fullName: 'Ram Pinapothula',
//       education: 'B.Sc Chemistry',
//       expertise: 'Graphic + Web Design',
//       experience: '2 years',
//       posts: '200+',
//       videoHours: '600+ hrs',
//       videos: '50+',
//       industries: '4',
//       certifications: 'On Request',
//       linkedin: 'https://www.linkedin.com/in/ram-pinapothula-0b575223a/',
//       portfolio: 'https://www.behance.net/sripinapothula',
//       posters: [
//         { id: 31, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360857/Fathers_Day_Poster__yvdbgx.jpg', title: 'Social Media Ad' },
//         { id: 32, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360857/Campaign_Poster_adoyfb.jpg', title: 'Event Poster' },
//         { id: 33, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360855/Womens_Day_Poster_ocekcs.jpg', title: 'Product Launch' },
//         { id: 34, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360853/Free_Bird_Training_Poster_01_s07qmi.jpg', title: 'Brand Campaign' },
//         { id: 35, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360852/Banner_04__ybhocf.jpg
// ', title: 'Marketing Design' },
//         { id: 36, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360845/SaveVid.Net_448289640_122119497950291490_3216005744129623178_n_zhkcu9.jpg', title: 'Social Media Ad' },
//         { id: 37, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360844/SaveVid.Net_441272846_354665350930168_880583373601091162_n_an6haw.jpg', title: 'Event Poster' },
//         { id: 38, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360850/Free_Bird_poster_c35cce.jpg', title: 'Product Launch' },
//         { id: 39, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360845/SaveVid.Net_451383399_122126568632291490_5314762256159234429_n_zfwha2.jpg', title: 'Brand Campaign' },
//         { id: 40, url: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753360845/SaveVid.Net_449163199_122122492328291490_3831507330999147960_n_mtmenv.jpg', title: 'Marketing Design' },
//       ]
//     },
//     {
//       id: 5,
//       name: 'Divya',
//       role: 'Content Writer',
//       photo: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753260936/WhatsApp_Image_2025-07-22_at_12.41.53_136a025d_it7ghu.jpg',
//       fullName: 'Divya',
//       education: 'M.A. English Literature',
//       expertise: 'Content Writing & Strategy',
//       experience: '3+ years',
//       posts: '2000+',
//       videoHours: '100+ hrs',
//       videos: '25+',
//       industries: '6',
//       certifications: 'Google Analytics, HubSpot Content Marketing',
//       linkedin: 'https://www.linkedin.com/in/sarah-mitchell-writer/',
//       portfolio: 'https://www.behance.net/sarahmitchell',
//       posters: [
//         { id: 41, url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Blog Content' },
//         { id: 42, url: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Social Copy' },
//         { id: 43, url: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Email Campaign' },
//         { id: 44, url: 'https://images.pexels.com/photos/1367856/pexels-photo-1367856.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Website Copy' },
//         { id: 45, url: 'https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Brand Story' },
//       ]
//     },
//     {
//       id: 6,
//       name: 'Uday Kiran Palepu',
//       role: 'Web Developer & Digital Marketing Expert',
//       photo: 'https://res.cloudinary.com/ddv7sq2wy/image/upload/v1753261800/1609857167906_osw3dv.jpg',
//       fullName: 'Uday Kiran Palpeu',
//       education: 'B.Tech Computer Science',
//       expertise: 'Web Development, Digital Marketing & AI Tools',
//       experience: '4+ years',
//       posts: '1500+',
//       videoHours: '800+ hrs',
//       videos: '100+',
//       industries: '8',
//       certifications: 'Google Ads, Facebook Blueprint, AWS Certified',
//       linkedin: 'https://www.linkedin.com/in/udaykiranpalepu/',
//       portfolio: 'https://www.udayantra.netlify.app',
//       posters: [
//         { id: 46, url: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Web Interface' },
//         { id: 47, url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'AI Dashboard' },
//         { id: 48, url: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Marketing Analytics' },
//         { id: 49, url: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'E-commerce Site' },
//         { id: 50, url: 'https://images.pexels.com/photos/1367856/pexels-photo-1367856.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Mobile App UI' },
//       ]
//     }
//   ];

//   const handleToggleExpand = (memberId: number) => {
//     setExpandedMember(expandedMember === memberId ? null : memberId);
//   };

//   const handlePosterClick = (animationKey: string) => {
//     setPausedAnimations(prev => ({
//       ...prev,
//       [animationKey]: !prev[animationKey]
//     }));
//   };

//   // Inline ScrollingPosters Component
//   const ScrollingPosters = ({ 
//     direction = 'left', 
//     speed = 50,
//     posters,
//     size = 'normal',
//     animationKey
//   }: {
//     direction?: 'left' | 'right';
//     speed?: number;
//     posters: Array<{ id: number; url: string; title: string }>;
//     size?: 'small' | 'normal';
//     animationKey: string;
//   }) => {
//     const isPaused = pausedAnimations[animationKey] || false;
//     const isAnimating = !isPaused;

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
//                 onClick={() => handlePosterClick(animationKey)}
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

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={pageImages.heroBackground}
//             alt="Team background"
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
//             Meet the <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Creative Minds</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             The talented individuals behind every successful project. Our team combines creativity, expertise, and passion to deliver exceptional results.
//           </motion.p>
//         </div>
//       </section>

//       {/* Our Team Overview Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
//             <p className="text-xl text-gray-600">
//               Meet the creative professionals who bring your vision to life
//             </p>
//           </motion.div>

//           {/* Team Grid - First 4 members in first row, next 2 in second row */}
//           <div className="space-y-12">
//             {/* First Row - 4 members */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {teamMembers.slice(0, 4).map((member, index) => (
//                 <motion.div
//                   key={member.id}
//                   className="text-center group"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="relative mb-6">
//                     <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
//                       <img
//                         src={member.photo}
//                         alt={member.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
//                   <p className="text-primary-600 font-semibold">{member.role}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Second Row - 2 members centered */}
//             <div className="flex justify-center">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
//                 {teamMembers.slice(4, 6).map((member, index) => (
//                   <motion.div
//                     key={member.id}
//                     className="text-center group"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <div className="relative mb-6">
//                       <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
//                         <img
//                           src={member.photo}
//                           alt={member.name}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
//                     <p className="text-primary-600 font-semibold">{member.role}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Detailed Team Profiles */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Team Profiles</h2>
//             <p className="text-xl text-gray-600">
//               Get to know our team members, their expertise, and their creative work
//             </p>
//           </motion.div>

//           <div className="space-y-12">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={member.id}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 {/* Main Card */}
//                 <div className="p-8">
//                   <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
//                     {/* Photo */}
//                     <div className="flex-shrink-0">
//                       <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
//                         <img
//                           src={member.photo}
//                           alt={member.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>

//                     {/* Basic Info */}
//                     <div className="flex-grow text-center md:text-left">
//                       <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
//                       <p className="text-xl text-primary-600 font-semibold mb-4">{member.role}</p>
//                       <p className="text-gray-600 mb-6">
//                         {member.experience} of experience in {member.expertise}
//                       </p>
                      
//                       {/* Quick Stats */}
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                         <div className="text-center bg-gray-50 p-4 rounded-lg">
//                           <div className="text-2xl font-bold text-primary-600">{member.posts}</div>
//                           <div className="text-sm text-gray-600">Posts</div>
//                         </div>
//                         <div className="text-center bg-gray-50 p-4 rounded-lg">
//                           <div className="text-2xl font-bold text-primary-600">{member.videos}</div>
//                           <div className="text-sm text-gray-600">Videos</div>
//                         </div>
//                         <div className="text-center bg-gray-50 p-4 rounded-lg">
//                           <div className="text-2xl font-bold text-primary-600">{member.videoHours}</div>
//                           <div className="text-sm text-gray-600">Video Hours</div>
//                         </div>
//                         <div className="text-center bg-gray-50 p-4 rounded-lg">
//                           <div className="text-2xl font-bold text-primary-600">{member.industries}</div>
//                           <div className="text-sm text-gray-600">Industries</div>
//                         </div>
//                       </div>

//                       {/* View More Button */}
//                       <button
//                         onClick={() => handleToggleExpand(member.id)}
//                         className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto md:mx-0"
//                       >
//                         <span>{expandedMember === member.id ? 'Show Less' : 'View More'}</span>
//                         {expandedMember === member.id ? (
//                           <ChevronUp className="h-5 w-5" />
//                         ) : (
//                           <ChevronDown className="h-5 w-5" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Expanded Details */}
//                   <AnimatePresence>
//                     {expandedMember === member.id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="mt-8 pt-8 border-t border-gray-200"
//                       >
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                           {/* Education & Experience */}
//                           <div className="space-y-4">
//                             <div className="flex items-center space-x-3 mb-4">
//                               <GraduationCap className="h-6 w-6 text-primary-500" />
//                               <h4 className="text-lg font-semibold text-gray-900">Education & Experience</h4>
//                             </div>
//                             <div className="space-y-3">
//                               <div>
//                                 <span className="font-medium text-gray-700">Education:</span>
//                                 <p className="text-gray-600">{member.education}</p>
//                               </div>
//                               <div>
//                                 <span className="font-medium text-gray-700">Experience:</span>
//                                 <p className="text-gray-600">{member.experience}</p>
//                               </div>
//                               <div>
//                                 <span className="font-medium text-gray-700">Expertise:</span>
//                                 <p className="text-gray-600">{member.expertise}</p>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Work Statistics */}
//                           <div className="space-y-4">
//                             <div className="flex items-center space-x-3 mb-4">
//                               <Award className="h-6 w-6 text-primary-500" />
//                               <h4 className="text-lg font-semibold text-gray-900">Work Statistics</h4>
//                             </div>
//                             <div className="space-y-3">
//                               <div className="flex justify-between">
//                                 <span className="text-gray-600">Posts Created:</span>
//                                 <span className="font-semibold text-primary-600">{member.posts}</span>
//                               </div>
//                               <div className="flex justify-between">
//                                 <span className="text-gray-600">Videos Created:</span>
//                                 <span className="font-semibold text-primary-600">{member.videos}</span>
//                               </div>
//                               <div className="flex justify-between">
//                                 <span className="text-gray-600">Video Hours:</span>
//                                 <span className="font-semibold text-primary-600">{member.videoHours}</span>
//                               </div>
//                               <div className="flex justify-between">
//                                 <span className="text-gray-600">Industries Served:</span>
//                                 <span className="font-semibold text-primary-600">{member.industries}</span>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Links & Certifications */}
//                           <div className="space-y-4">
//                             <div className="flex items-center space-x-3 mb-4">
//                               <ExternalLink className="h-6 w-6 text-primary-500" />
//                               <h4 className="text-lg font-semibold text-gray-900">Links & Certifications</h4>
//                             </div>
//                             <div className="space-y-3">
//                               <div>
//                                 <span className="font-medium text-gray-700">Certifications:</span>
//                                 <p className="text-gray-600">{member.certifications}</p>
//                               </div>
//                               <div className="space-y-2">
//                                 <a
//                                   href={member.linkedin}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="flex items-center space-x-2 text-primary-600 hover:text-primary-800 transition-colors"
//                                 >
//                                   <Linkedin className="h-5 w-5" />
//                                   <span>LinkedIn Profile</span>
//                                 </a>
//                                 {member.portfolio && (
//                                   <a
//                                     href={member.portfolio}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center space-x-2 text-primary-600 hover:text-primary-800 transition-colors"
//                                   >
//                                     <ExternalLink className="h-5 w-5" />
//                                     <span>Behance Portfolio</span>
//                                   </a>
//                                 )}
//                                 {!member.portfolio && (
//                                   <p className="text-gray-500 italic">Portfolio: Not Available</p>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Member's Work Showcase */}
//                 <div className="bg-gray-50 p-6">
//                   <div className="flex items-center space-x-3 mb-4">
//                     <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-500">
//                       <img
//                         src={member.photo}
//                         alt={member.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900">{member.name}'s Work</h4>
//                       <p className="text-primary-600 text-sm font-medium">{member.role}</p>
//                     </div>
//                   </div>
//                   <ScrollingPosters 
//                     direction="left"
//                     speed={60 + index * 5} 
//                     posters={member.posters}
//                     size="small"
//                     animationKey={`member-${member.id}`}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Team;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, ExternalLink, GraduationCap, Award, ChevronDown, ChevronUp, X } from 'lucide-react';

const Team = () => {
  const [expandedMembers, setExpandedMembers] = useState<Set<number>>(new Set());
  const [selectedMemberPhoto, setSelectedMemberPhoto] = useState<string | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Rashmitha Nagabattula',
      role: 'Sr. Graphic Designer',
      photo: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/20250719_160820.jpg',
      fullName: 'Rashmitha Nagabattula',
      education: 'B.Tech CSE',
      expertise: 'Graphic Designing',
      experience: '5+ years',
      posts: '7000+',
      videoHours: '600+ hrs',
      videos: '50+',
      industries: '5',
      certifications: 'Available on request',
      linkedin: 'https://www.linkedin.com/in/rashmitha-nagabattula-328ab8215/',
      portfolio: null,
      posters: [
        { id: 1, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Abhaya homeo clinic 30mins walk.png', title: 'Social Media Ad' },
        { id: 2, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/INVITATION.png', title: 'Event Poster' },
        { id: 3, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Subbayy Gari hotel 3.jpg', title: 'Product Launch' },
        { id: 4, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2023-04-08 at 16.25.15.jpg', title: 'Brand Campaign' },
        { id: 5, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (38).jpeg', title: 'Marketing Design' },
        { id: 6, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (1).jpeg', title: 'Social Media Ad' },
        { id: 7, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (24).jpeg', title: 'Event Poster' },
        { id: 8, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (3).jpeg', title: 'Product Launch' },
        { id: 9, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (10).jpeg', title: 'Brand Campaign' },
        { id: 10, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (22).jpeg', title: 'Marketing Design' },
        { id: 11, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (37).jpeg', title: 'Social Media Ad' },
        { id: 12, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (5).jpeg', title: 'Dental Campaign' },
      ]
    },
    {
      id: 2,
      name: 'Teja Mallipudi',
      role: 'Sr. Graphic Designer & Video Editor',
      photo: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/20250719_165818.jpg',
      fullName: 'Teja Mallipudi',
      education: 'B.Sc Computers',
      expertise: 'Graphic Designing',
      experience: '4 years',
      posts: '5000+',
      videoHours: '2000+ hrs',
      videos: '200+',
      industries: '7',
      certifications: 'Available on request',
      linkedin: 'https://www.linkedin.com/in/teja-mallipudi-69a8531a0/',
      portfolio: 'https://www.behance.net/tejam2',
      posters: [
        { id: 13, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Iron rich foods for anaemia.png', title: 'Social Media Ad' },
        { id: 14, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Subbayy Gari hotel2.jpg', title: 'Event Poster' },
        { id: 15, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.44 PM.jpeg', title: 'Product Launch' },
        { id: 16, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.46 PM (2).jpeg', title: 'Brand Campaign' },
        { id: 17, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (29).jpeg', title: 'Marketing Design' },
        { id: 18, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (9).jpeg', title: 'Social Media Ad' },
        { id: 19, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (17).jpeg', title: 'Event Poster' },
        { id: 20, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (11).jpeg', title: 'Product Launch' },
        { id: 21, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (4).jpeg', title: 'Brand Campaign' },
        { id: 22, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (12).jpeg', title: 'Marketing Design' },
        { id: 23, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (30).jpeg', title: 'Social Media Ad' },
        { id: 24, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (31).jpeg', title: 'Event Poster' },
      ]
    },
    {
      id: 3,
      name: 'Lingamallu Roja Harshitha',
      role: 'Sr. Graphic Designer',
      photo: 'https://github.com/uday-kiran-palepu/Website-Images/blob/main/FreeBird-Images/SRI08354.png',
      fullName: 'Lingamallu Roja Harshitha',
      education: 'B.Sc Animation',
      expertise: 'Graphic Designing',
      experience: '3+ years',
      posts: '5000+',
      videoHours: '500+ hrs',
      videos: '50+',
      industries: '5',
      certifications: 'Available on request',
      linkedin: 'https://www.linkedin.com/in/harshitha-roja-a7520b20a',
      portfolio: 'https://www.behance.net/harshitlingama',
      posters: [
        { id: 25, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (19).jpeg', title: 'Social Media Ad' },
        { id: 26, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM.jpeg', title: 'Event Poster' },
        { id: 27, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.44 PM.jpeg', title: 'Product Launch' },
        { id: 28, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (13).jpeg', title: 'Brand Campaign' },
        { id: 29, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.46 PM (8).jpeg', title: 'Marketing Design' },
        { id: 30, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (33).jpeg', title: 'Social Media Ad' },
        { id: 31, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (16).jpeg', title: 'Event Poster' },
        { id: 32, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.46 PM (6).jpeg', title: 'Product Launch' },
        { id: 33, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (35).jpeg', title: 'Brand Campaign' },
        { id: 34, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (23).jpeg', title: 'Marketing Design' },
        { id: 35, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (26).jpeg', title: 'Social Media Ad' },
        { id: 36, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.46 PM (4).jpeg', title: 'Dental Campaign' },
      ]
    },
    {
      id: 4,
      name: 'Ram Pinapothula',
      role: 'Graphic & Website Designer',
      photo: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/20250719_170141.jpg',
      fullName: 'Ram Pinapothula',
      education: 'B.Sc Chemistry',
      expertise: 'Graphic + Web Design',
      experience: '2 years',
      posts: '200+',
      videoHours: '600+ hrs',
      videos: '50+',
      industries: '4',
      certifications: 'On Request',
      linkedin: 'https://www.linkedin.com/in/ram-pinapothula-0b575223a/',
      portfolio: 'https://www.behance.net/sripinapothula',
      posters: [
        { id: 37, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (18).jpeg', title: 'Social Media Ad' },
        { id: 38, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/Subbayya gari hotel 1.jpg', title: 'Event Poster' },
        { id: 39, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (14).jpeg', title: 'Product Launch' },
        { id: 40, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.46 PM (7).jpeg', title: 'Brand Campaign' },
        { id: 41, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (32).jpeg', title: 'Marketing Design' },
        { id: 42, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.46 PM (3).jpeg', title: 'Social Media Ad' },
        { id: 43, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (15).jpeg', title: 'Event Poster' },
        { id: 44, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (8).jpeg', title: 'Product Launch' },
        { id: 45, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (20).jpeg', title: 'Brand Campaign' },
        { id: 46, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (27).jpeg', title: 'Marketing Design' },
        { id: 47, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (36).jpeg', title: 'Social Media Ad' },
        { id: 48, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (2).jpeg', title: 'Event Poster' },
      ]
    },
    {
      id: 5,
      name: 'Divya',
      role: 'Content Writer',
      photo: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753260936/WhatsApp_Image_2025-07-22_at_12.41.53_136a025d_it7ghu.jpg',
      fullName: 'Divya',
      education: 'M.A. English Literature',
      expertise: 'Content Writing & Strategy',
      experience: '3+ years',
      posts: '2000+',
      videoHours: '100+ hrs',
      videos: '25+',
      industries: '6',
      certifications: 'Google Analytics, HubSpot Content Marketing',
      linkedin: 'https://www.linkedin.com/in/sarah-mitchell-writer/',
      portfolio: 'https://www.behance.net/sarahmitchell',
      posters: [
        { id: 49, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (5).jpeg', title: 'Clinic Campaign' },
        { id: 50, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (21).jpeg', title: 'Social Media Ad' },
        { id: 51, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.44 PM.jpeg', title: 'Event Poster' },
        { id: 52, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (25).jpeg', title: 'Product Launch' },
        { id: 53, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (28).jpeg', title: 'Brand Campaign' },
        { id: 54, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (6).jpeg', title: 'Marketing Design' },
        { id: 55, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (7).jpeg', title: 'Social Media Ad' },
        { id: 56, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.46 PM (1).jpeg', title: 'Event Poster' },
        { id: 57, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (24).jpeg', title: 'Product Launch' },
        { id: 58, url: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/FreeBird-Images/WhatsApp Image 2025-09-01 at 7.36.45 PM (34).jpeg', title: 'Brand Campaign' },
      ]
    },
    {
      id: 6,
      name: 'Uday Kiran Palepu',
      role: 'Web Developer & Digital Marketing Expert',
      photo: 'https://res.cloudinary.com/ddv7sq2wy/image/upload/v1753261800/1609857167906_osw3dv.jpg',
      fullName: 'Uday Kiran Palepu',
      education: 'B.Tech Computer Science',
      expertise: 'Web Development, Digital Marketing & AI Tools',
      experience: '4+ years',
      posts: '1500+',
      videoHours: '800+ hrs',
      videos: '100+',
      industries: '8',
      certifications: 'Google Ads, Facebook Blueprint, AWS Certified',
      linkedin: 'https://www.linkedin.com/in/udaykiranpalepu/',
      portfolio: 'https://www.udayantra.netlify.app',
      posters: [
        { id: 59, url: 'https://physioheal-pro.vercel.app', image: 'https://www.revivept.ca/client/1686/media/img/430337/Physiotherapy_Services_in_Edmonton_AB.jpg', title: 'Healthcare Website' },
        { id: 60, url: 'https://snehasafetynets.com', image: 'https://www.manusafetynets.com/assets/img/image/services/balcony-nets.jpg', title: 'Safety Nets Website' },
        { id: 61, url: 'https://udayantra.netlify.app', image: 'https://mir-s3-cdn-cf.behance.net/projects/404/bf1e68214791583.Y3JvcCwzMDY4LDI0MDAsNjgsMA.jpg', title: 'Portfolio Website' },
        { id: 62, url: 'https://gorgeous-boba-3ba51c.netlify.app', image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1753359024/8aug_mqqnry.png', title: 'Agency Website' },
        { id: 63, url: 'https://smile-craft-dental-care-landing-pag.vercel.app', image: 'https://itsdentaltime.ca/wp-content/uploads/2024/02/Dental-Lavelle-Why-you-need-to-visit-your-Dentist-every-6-months.jpg', title: 'Healthcare Website' },
      ]
    }
  ];

  const toggleExpand = (memberId: number) => {
    setExpandedMembers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(memberId)) {
        newSet.delete(memberId);
      } else {
        newSet.add(memberId);
      }
      return newSet;
    });
  };

  const handleCardClick = (member: any) => {
    if (member.id === 6 && member.portfolio) {
      window.open(member.portfolio, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedMemberPhoto(member.photo);
    }
  };

  const ScrollingPosters = ({ posters, speed, isDeveloper = false, animationKey }: any) => {
    const posterWidth = 225;
    const gap = 16;
    const totalWidth = (posters.length * posterWidth) + (posters.length * gap);
    const duplicatedPosters = [...posters, ...posters, ...posters, ...posters];

    const styles = `
      .scroll-container-${animationKey}:hover .scroll-content-${animationKey} { animation-play-state: paused; }
      .scroll-content-${animationKey} {
        display: flex;
        gap: ${gap}px;
        animation: scroll-${animationKey} ${speed}s linear infinite;
      }
      @keyframes scroll-${animationKey} {
        from { transform: translateX(0); }
        to { transform: translateX(-${totalWidth}px); }
      }
    `;

    return (
      <>
        <style>{styles}</style>
        <div className={`w-full overflow-hidden relative scroll-container-${animationKey}`}>
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
            <div className={`scroll-content-${animationKey}`}>
              {duplicatedPosters.map((poster, index) => (
                isDeveloper ? (
                  <a key={`${poster.id}-${index}`} href={poster.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex-shrink-0" style={{ width: posterWidth }}>
                    <div className="w-full h-56 bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg overflow-hidden relative rounded-xl">
                      <img src={poster.image} alt={poster.title} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </a>
                ) : (
                  <div key={`${poster.id}-${index}`} className="flex-shrink-0" style={{ width: posterWidth }}>
                    <div className="w-full h-56 bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg overflow-hidden relative rounded-xl">
                      <img src={poster.url} alt={poster.title} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Team background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Meet the <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Creative Minds</span>
          </motion.h1>
          <motion.p className="text-xl text-gray-200 max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            The talented individuals behind every successful project. Our team combines creativity, expertise, and passion to deliver exceptional results.
          </motion.p>
        </div>
      </section>

      {/* Top Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the creative professionals who bring your vision to life</p>
          </motion.div>

          <div className="space-y-12">
            {/* First Row - 4 Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.slice(0, 4).map((member, index) => (
                <motion.div key={member.id} className="text-center group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                  <div className="relative mb-6 cursor-pointer" onClick={() => setSelectedMemberPhoto(member.photo)}>
                    <div className="w-52 h-52 mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold">{member.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 Members */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
                {teamMembers.slice(4, 6).map((member, index) => (
                  <motion.div key={member.id} className="text-center group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                    <div className="relative mb-6 cursor-pointer" onClick={() => setSelectedMemberPhoto(member.photo)}>
                      <div className="w-52 h-52 mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Profiles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Team Profiles</h2>
            <p className="text-xl text-gray-600">Get to know our team members, their expertise, and their creative work</p>
          </motion.div>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }}
              >
                <div className={`p-8 ${member.id !== 6 ? 'cursor-pointer' : ''}`} onClick={() => handleCardClick(member)}>
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-xl text-primary-600 font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-600 mb-6">{member.experience} of experience in {member.expertise}</p>

                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleExpand(member.id); }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto md:mx-0"
                      >
                        <span>{expandedMembers.has(member.id) ? 'Show Less' : 'View More'}</span>
                        {expandedMembers.has(member.id) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedMembers.has(member.id) && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      exit={{ opacity: 0, height: 0 }} 
                      transition={{ duration: 0.4 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-8">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-500">
                            <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">{member.name}'s Work</h4>
                            <p className="text-primary-600 text-sm font-medium">{member.role}</p>
                          </div>
                        </div>
                        <ScrollingPosters speed={60 + index * 5} posters={member.posters} isDeveloper={member.id === 6} animationKey={`member-${member.id}`} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedMemberPhoto && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setSelectedMemberPhoto(null)}
          >
            <motion.div 
              className="relative" 
              initial={{ scale: 0.7, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.7, opacity: 0 }} 
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedMemberPhoto} alt="Team member" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" />
              <button 
                onClick={() => setSelectedMemberPhoto(null)} 
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

export default Team;