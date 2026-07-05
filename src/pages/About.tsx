<<<<<<< HEAD
// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Target, Heart, Lightbulb, Users } from 'lucide-react';

// // const About = () => {
// //   // ========================================
// //   // 🖼️ IMAGES & ICONS - EASY TO UPDATE
// //   // ========================================
// //   const pageImages = {
// //     heroBackground: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
// //     // 📝 TO UPDATE: Replace URLs above with your images
// //   };

// //   const pageIcons = {
// //     // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
// //     target: Target,
// //     heart: Heart,
// //     lightbulb: Lightbulb,
// //     users: Users,
// //     // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
// //   };

// //   const values = [
// //     {
// //       icon: pageIcons.heart,
// //       title: 'Creativity',
// //       description: 'We believe in the power of creative thinking to solve complex problems and create memorable experiences.'
// //     },
// //     {
// //       icon: pageIcons.target,
// //       title: 'Integrity',
// //       description: 'We build trust through transparency, honest communication, and delivering on our promises.'
// //     },
// //     {
// //       icon: pageIcons.lightbulb,
// //       title: 'Innovation',
// //       description: 'We stay ahead of trends and continuously evolve our skills to provide cutting-edge solutions.'
// //     },
// //     {
// //       icon: pageIcons.users,
// //       title: 'Collaboration',
// //       description: 'We work closely with our clients as partners to achieve shared goals and mutual success.'
// //     }
// //   ];

// //   const timeline = [
// //     {
// //       year: '2020',
// //       title: 'The Beginning',
// //       description: 'Founded with a vision to help small businesses create impactful brand identities.'
// //     },
// //     {
// //       year: '2021',
// //       title: 'Expanding Services',
// //       description: 'Added video production and web development to our creative arsenal.'
// //     },
// //     {
// //       year: '2022',
// //       title: 'Digital Marketing',
// //       description: 'Launched our comprehensive digital marketing services to provide complete solutions.'
// //     },
// //     {
// //       year: '2023',
// //       title: 'Growth & Recognition',
// //       description: 'Reached 100+ happy clients and received industry recognition for our innovative work.'
// //     },
// //     {
// //       year: '2024',
// //       title: 'Full-Service Agency',
// //       description: 'Became a complete creative agency offering design, video, web, and marketing under one roof.'
// //     }
// //   ];

// //   return (
// //     <div className="pt-20">
// //       {/* Hero Section */}
// //       <section className="relative py-20 overflow-hidden">
// //         {/* Background Image */}
// //         <div className="absolute inset-0">
// //           <img
// //             src={pageImages.heroBackground}
// //             alt="About us background"
// //             className="w-full h-full object-cover"
// //           />
// //           <div className="absolute inset-0 bg-black/60"></div>
// //         </div>
        
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             className="text-center relative z-10"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
// //               About <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Freebird</span>
// //             </h1>
// //             <p className="text-xl text-gray-200 max-w-3xl mx-auto">
// //               We're a creative agency that believes in the power of design, technology, and strategy to transform businesses and create lasting impact.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Story Section */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //             >
// //               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
// //               <p className="text-lg text-gray-600 mb-6">
// //                 Freebird was born from a simple idea: every brand deserves to stand out in a crowded marketplace. 
// //                 We started as a small team of creative minds who believed that great design could change the world, 
// //                 one brand at a time.
// //               </p>
// //               <p className="text-lg text-gray-600 mb-6">
// //                 Over the years, we've evolved from a design studio to a full-service creative agency, 
// //                 but our core mission remains the same - to help businesses fly free from mediocrity and 
// //                 soar to new heights through exceptional creative work.
// //               </p>
// //               <p className="text-lg text-gray-600">
// //                 Today, we combine creativity with data-driven strategy, ensuring that every project we undertake 
// //                 not only looks amazing but also delivers measurable results for our clients.
// //               </p>
// //             </motion.div>
// //             <motion.div
// //               className="relative"
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //             >
// //               <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
// //                 <h3 className="text-2xl font-bold mb-4">Why "Freebird"?</h3>
// //                 <p className="text-lg">
// //                   Like a bird soaring freely in the sky, we believe brands should break free from constraints 
// //                   and express their unique identity. We give wings to your vision and help it take flight 
// //                   in the digital world.
// //                 </p>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Mission & Vision */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //             <motion.div
// //               className="bg-white p-8 rounded-2xl shadow-lg"
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6 }}
// //               viewport={{ once: true }}
// //             >
// //               <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
// //               <p className="text-lg text-gray-600">
// //                 To empower businesses with creative solutions that drive growth, build brand loyalty, 
// //                 and create meaningful connections with their audiences. We're committed to delivering 
// //                 exceptional results that exceed expectations.
// //               </p>
// //             </motion.div>
// //             <motion.div
// //               className="bg-white p-8 rounded-2xl shadow-lg"
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               viewport={{ once: true }}
// //             >
// //               <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
// //               <p className="text-lg text-gray-600">
// //                 To become the go-to creative partner for businesses looking to make a lasting impact. 
// //                 We envision a world where every brand has the opportunity to express its unique story 
// //                 and connect authentically with its audience.
// //               </p>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Values Section */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             className="text-center mb-16"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
// //             <p className="text-xl text-gray-600">
// //               The principles that guide everything we do
// //             </p>
// //           </motion.div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {values.map((value, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 viewport={{ once: true }}
// //               >
// //                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-4">
// //                   <value.icon className="h-8 w-8 text-white" />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
// //                 <p className="text-gray-600">{value.description}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Timeline Section */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             className="text-center mb-16"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
// //             <p className="text-xl text-gray-600">
// //               Milestones that shaped who we are today
// //             </p>
// //           </motion.div>

// //           <div className="relative">
// //             <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>
            
// //             {timeline.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
// //                 initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 viewport={{ once: true }}
// //               >
// //                 <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
// //                   <div className="bg-white p-6 rounded-lg shadow-lg">
// //                     <h3 className="text-2xl font-bold text-primary-600 mb-2">{item.year}</h3>
// //                     <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
// //                     <p className="text-gray-600">{item.description}</p>
// //                   </div>
// //                 </div>
// //                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow"></div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default About;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Target, Heart, Lightbulb, Users } from 'lucide-react';

// const About = () => {
//   // ========================================
//   // 🖼️ IMAGES & ICONS - EASY TO UPDATE
//   // ========================================
//   const pageImages = {
//     heroBackground: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
//     // 📝 TO UPDATE: Replace URLs above with your images
//   };

//   const pageIcons = {
//     // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
//     target: Target,
//     heart: Heart,
//     lightbulb: Lightbulb,
//     users: Users,
//     // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
//   };

//   const values = [
//     {
//       icon: pageIcons.heart,
//       title: 'Creativity',
//       description: 'We believe in the power of creative thinking to solve complex problems and create memorable experiences.'
//     },
//     {
//       icon: pageIcons.target,
//       title: 'Integrity',
//       description: 'We build trust through transparency, honest communication, and delivering on our promises.'
//     },
//     {
//       icon: pageIcons.lightbulb,
//       title: 'Innovation',
//       description: 'We stay ahead of trends and continuously evolve our skills to provide cutting-edge solutions.'
//     },
//     {
//       icon: pageIcons.users,
//       title: 'Collaboration',
//       description: 'We work closely with our clients as partners to achieve shared goals and mutual success.'
//     }
//   ];

//   const timeline = [
//     {
//       year: '2020',
//       title: 'The Beginning',
//       description: 'Founded with a vision to help small businesses create impactful brand identities.'
//     },
//     {
//       year: '2021',
//       title: 'Expanding Services',
//       description: 'Added video production and web development to our creative arsenal.'
//     },
//     {
//       year: '2022',
//       title: 'Digital Marketing',
//       description: 'Launched our comprehensive digital marketing services to provide complete solutions.'
//     },
//     {
//       year: '2023',
//       title: 'Growth & Recognition',
//       description: 'Reached 100+ happy clients and received industry recognition for our innovative work.'
//     },
//     {
//       year: '2024',
//       title: 'Full-Service Agency',
//       description: 'Became a complete creative agency offering design, video, web, and marketing under one roof.'
//     }
//   ];

//   // Floating circles for Story section
//   const circles = Array.from({ length: 10 }, (_, i) => ({
//     id: i,
//     size: Math.random() * 40 + 20,
//     left: Math.random() * 100,
//     delay: Math.random() * 3,
//     duration: Math.random() * 8 + 8
//   }));

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={pageImages.heroBackground}
//             alt="About us background"
//             className="w-full h-full object-cover"
//           />
//           <motion.div
//             className="absolute inset-0 bg-black/60"
//             animate={{ opacity: [0.6, 0.7, 0.6] }}
//             transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//           />
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div className="text-center relative z-10">
//             <motion.h1
//               className="text-5xl md:text-6xl font-bold text-white mb-6"
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               About <motion.span
//                 className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >Freebird</motion.span>
//             </motion.h1>
//             <motion.p
//               className="text-xl text-gray-200 max-w-3xl mx-auto"
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               We're a creative agency that believes in the power of design, technology, and strategy to transform businesses and create lasting impact.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           {circles.map((circle) => (
//             <motion.div
//               key={circle.id}
//               className="absolute rounded-full bg-gradient-to-br from-primary-400/20 to-primary-600/10 border border-primary-400/30"
//               style={{
//                 width: circle.size,
//                 height: circle.size,
//                 left: `${circle.left}%`,
//               }}
//               animate={{
//                 y: [1000, -100],
//                 opacity: [0, 0.5, 0],
//                 scale: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: circle.duration,
//                 delay: circle.delay,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             />
//           ))}
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30, scale: 0.95 }}
//               whileInView={{ opacity: 1, x: 0, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Freebird was born from a simple idea: every brand deserves to stand out in a crowded marketplace. 
//                 We started as a small team of creative minds who believed that great design could change the world, 
//                 one brand at a time.
//               </p>
//               <p className="text-lg text-gray-600 mb-6">
//                 Over the years, we've evolved from a design studio to a full-service creative agency, 
//                 but our core mission remains the same - to help businesses fly free from mediocrity and 
//                 soar to new heights through exceptional creative work.
//               </p>
//               <p className="text-lg text-gray-600">
//                 Today, we combine creativity with data-driven strategy, ensuring that every project we undertake 
//                 not only looks amazing but also delivers measurable results for our clients.
//               </p>
//             </motion.div>
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, x: 30, scale: 0.95 }}
//               whileInView={{ opacity: 1, x: 0, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
//                 <h3 className="text-2xl font-bold mb-4">Why "Freebird"?</h3>
//                 <p className="text-lg">
//                   Like a bird soaring freely in the sky, we believe brands should break free from constraints 
//                   and express their unique identity. We give wings to your vision and help it take flight 
//                   in the digital world.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <motion.div
//               className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl shadow-lg border-l-4 border-transparent hover:border-primary-500 transition-all duration-300"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
//               <p className="text-lg text-gray-600">
//                 To empower businesses with creative solutions that drive growth, build brand loyalty, 
//                 and create meaningful connections with their audiences. We're committed to delivering 
//                 exceptional results that exceed expectations.
//               </p>
//             </motion.div>
//             <motion.div
//               className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl shadow-lg border-l-4 border-transparent hover:border-primary-500 transition-all duration-300"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
//               <p className="text-lg text-gray-600">
//                 To become the go-to creative partner for businesses looking to make a lasting impact. 
//                 We envision a world where every brand has the opportunity to express its unique story 
//                 and connect authentically with its audience.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
//             <p className="text-xl text-gray-600">
//               The principles that guide everything we do
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 className="text-center p-6 rounded-lg bg-gradient-to-r from-primary-50 to-primary-100 hover:shadow-lg transition-all duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05, rotate: [-2, 2, 0] }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <motion.div
//                   className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-4"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
//                 >
//                   <value.icon className="h-8 w-8 text-white" />
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
//             <p className="text-xl text-gray-600">
//               Milestones that shaped who we are today
//             </p>
//           </motion.div>

//           <div className="relative">
//             <motion.div
//               className="absolute left-1/2 transform -translate-x-px w-0.5 bg-gradient-to-b from-primary-500 to-primary-600 hidden sm:hidden md:block"
//               initial={{ height: 0 }}
//               whileInView={{ height: '100%' }}
//               transition={{ duration: 1.5, ease: 'easeOut' }}
//               viewport={{ once: true }}
//             />
            
//             <div className="flex flex-col md:flex-row md:flex-wrap gap-12">
//               {timeline.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className={`relative flex flex-col items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} md:mb-12 w-full md:w-5/12`}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow md:left-1/2 md:top-auto"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
//                   />
//                   <div className={`w-full text-center md:${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
//                     <motion.div
//                       className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg shadow-lg border-l-4 border-transparent hover:border-primary-500 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100"
//                       whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' }}
//                     >
//                       <h3 className="text-2xl font-bold text-primary-600 mb-2">{item.year}</h3>
//                       <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
//                       <p className="text-gray-600">{item.description}</p>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

=======
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  // ========================================
  // 🖼️ IMAGES & ICONS - EASY TO UPDATE
  // ========================================
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // 📝 TO UPDATE: Replace URLs above with your images
  };

  const pageIcons = {
    // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
    target: Target,
    heart: Heart,
    lightbulb: Lightbulb,
    users: Users,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  const values = [
    {
      icon: pageIcons.heart,
      title: 'Creativity',
      description: 'We believe in the power of creative thinking to solve complex problems and create memorable experiences.'
    },
    {
      icon: pageIcons.target,
      title: 'Integrity',
      description: 'We build trust through transparency, honest communication, and delivering on our promises.'
    },
    {
      icon: pageIcons.lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends and continuously evolve our skills to provide cutting-edge solutions.'
    },
    {
      icon: pageIcons.users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared goals and mutual success.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to help small businesses create impactful brand identities.'
    },
    {
      year: '2021',
      title: 'Expanding Services',
      description: 'Added video production and web development to our creative arsenal.'
    },
    {
      year: '2022',
      title: 'Digital Marketing',
      description: 'Launched our comprehensive digital marketing services to provide complete solutions.'
    },
    {
      year: '2023',
      title: 'Growth & Recognition',
      description: 'Reached 100+ happy clients and received industry recognition for our innovative work.'
    },
    {
      year: '2024',
      title: 'Full-Service Agency',
      description: 'Became a complete creative agency offering design, video, web, and marketing under one roof.'
    }
  ];

<<<<<<< HEAD
  // Floating circles for Story section
  const circles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 8 + 8
  }));

=======
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={pageImages.heroBackground}
            alt="About us background"
            className="w-full h-full object-cover"
          />
<<<<<<< HEAD
          <motion.div
            className="absolute inset-0 bg-black/60"
            animate={{ opacity: [0.6, 0.7, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center relative z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              About <motion.span
                className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >Freebird</motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're a creative agency that believes in the power of design, technology, and strategy to transform businesses and create lasting impact.
            </motion.p>
=======
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Freebird</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're a creative agency that believes in the power of design, technology, and strategy to transform businesses and create lasting impact.
            </p>
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
<<<<<<< HEAD
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          {circles.map((circle) => (
            <motion.div
              key={circle.id}
              className="absolute rounded-full bg-gradient-to-br from-primary-400/20 to-primary-600/10 border border-primary-400/30"
              style={{
                width: circle.size,
                height: circle.size,
                left: `${circle.left}%`,
              }}
              animate={{
                y: [1000, -100],
                opacity: [0, 0.5, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: circle.duration,
                delay: circle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
=======
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Freebird was born from a simple idea: every brand deserves to stand out in a crowded marketplace. 
                We started as a small team of creative minds who believed that great design could change the world, 
                one brand at a time.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've evolved from a design studio to a full-service creative agency, 
                but our core mission remains the same - to help businesses fly free from mediocrity and 
                soar to new heights through exceptional creative work.
              </p>
              <p className="text-lg text-gray-600">
                Today, we combine creativity with data-driven strategy, ensuring that every project we undertake 
                not only looks amazing but also delivers measurable results for our clients.
              </p>
            </motion.div>
            <motion.div
              className="relative"
<<<<<<< HEAD
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
=======
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why "Freebird"?</h3>
                <p className="text-lg">
                  Like a bird soaring freely in the sky, we believe brands should break free from constraints 
                  and express their unique identity. We give wings to your vision and help it take flight 
                  in the digital world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
<<<<<<< HEAD
              className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl shadow-lg border-l-4 border-transparent hover:border-primary-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' }}
              transition={{ duration: 0.3 }}
              style={{ willChange: 'transform, box-shadow' }}
=======
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower businesses with creative solutions that drive growth, build brand loyalty, 
                and create meaningful connections with their audiences. We're committed to delivering 
                exceptional results that exceed expectations.
              </p>
            </motion.div>
            <motion.div
<<<<<<< HEAD
              className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl shadow-lg border-l-4 border-transparent hover:border-primary-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' }}
              transition={{ duration: 0.3, delay: 0.3 }}
              style={{ willChange: 'transform, box-shadow' }}
=======
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To become the go-to creative partner for businesses looking to make a lasting impact. 
                We envision a world where every brand has the opportunity to express its unique story 
                and connect authentically with its audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
<<<<<<< HEAD
                className="text-center p-6 rounded-lg bg-gradient-to-r from-primary-50 to-primary-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
=======
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="relative">
<<<<<<< HEAD
            <motion.div
              className="absolute left-1/2 transform -translate-x-px w-0.5 bg-gradient-to-b from-primary-500 to-primary-600 hidden sm:hidden md:block"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
=======
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
<<<<<<< HEAD
                className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-12 flex-col md:flex-row`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow md:left-1/2 md:top-auto"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                />
                <div className={`w-full text-center md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <motion.div
                    className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg shadow-lg border-l-4 border-transparent hover:border-primary-500 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100"
                    whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: 'transform, box-shadow' }}
                  >
                    <h3 className="text-2xl font-bold text-primary-600 mb-2 text-center md:text-inherit">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center md:text-inherit">{item.title}</h4>
                    <p className="text-gray-600 text-center md:text-inherit">{item.description}</p>
                  </motion.div>
                </div>
=======
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow"></div>
>>>>>>> 71d059c26bce3123d9620e9d947d421e4f051f5b
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;