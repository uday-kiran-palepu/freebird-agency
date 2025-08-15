// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const Testimonials = () => {
//   // ========================================
//   // 🖼️ IMAGES & ICONS - EASY TO UPDATE
//   // ========================================
//   const pageImages = {
//     heroBackground: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1920',
//     // 📝 TO UPDATE: Replace URLs above with your images
//   };

//   const pageIcons = {
//     // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
//     star: Star,
//     chevronLeft: ChevronLeft,
//     chevronRight: ChevronRight,
//     quote: Quote,
//     // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
//   };

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Jennifer Williams',
//       company: 'TechStart Inc.',
//       position: 'CEO & Founder',
//       photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       quote: 'Freebird transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team understood our vision and brought it to life beautifully.',
//       project: 'Complete Brand Redesign'
//     },
//     {
//       id: 2,
//       name: 'Michael Rodriguez',
//       company: 'FoodiePlace Restaurant',
//       position: 'Marketing Director',
//       photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       quote: 'Working with Freebird was a game-changer for our social media presence. Our engagement increased by 300% in just two months. Their creative content strategy is simply outstanding.',
//       project: 'Social Media Campaign'
//     },
//     {
//       id: 3,
//       name: 'Sarah Thompson',
//       company: 'FitLife Gym',
//       position: 'Owner',
//       photo: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       quote: 'The website Freebird created for us is not just beautiful, it\'s functional and user-friendly. Our online bookings increased by 400% since the launch. Incredible work!',
//       project: 'Website Development'
//     },
//     {
//       id: 4,
//       name: 'David Chen',
//       company: 'EcoTech Solutions',
//       position: 'Product Manager',
//       photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       quote: 'Freebird\'s video production team created an amazing product launch video for us. The storytelling and visual effects were top-notch. It went viral and boosted our sales significantly.',
//       project: 'Video Production'
//     },
//     {
//       id: 5,
//       name: 'Lisa Anderson',
//       company: 'Fashion Forward',
//       position: 'Creative Director',
//       photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       quote: 'The poster designs Freebird created for our fashion week campaign were absolutely stunning. They captured our brand essence perfectly and helped us stand out in a competitive market.',
//       project: 'Poster Design Campaign'
//     },
//     {
//       id: 6,
//       name: 'Robert Johnson',
//       company: 'Digital Innovations',
//       position: 'CEO',
//       photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       quote: 'Freebird is our go-to creative partner. Their comprehensive approach to design, development, and marketing has helped us grow from a startup to a market leader.',
//       project: 'Full Service Partnership'
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
//       />
//     ));
//   };

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={pageImages.heroBackground}
//             alt="Testimonials background"
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
//             Client <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Testimonials</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Hear from the brands we've helped transform through creative excellence and strategic thinking
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Testimonial Carousel */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 className="bg-white rounded-3xl shadow-2xl overflow-hidden"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-2">
//                   {/* Content Side */}
//                   <div className="p-12 lg:p-16">
//                     <Quote className="h-12 w-12 text-primary-500 mb-6" />
                    
//                     <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
//                       "{testimonials[currentSlide].quote}"
//                     </blockquote>
                    
//                     <div className="flex items-center mb-6">
//                       {renderStars(testimonials[currentSlide].rating)}
//                     </div>
                    
//                     <div className="border-l-4 border-primary-500 pl-6">
//                       <h3 className="text-xl font-bold text-gray-900">
//                         {testimonials[currentSlide].name}
//                       </h3>
//                       <p className="text-gray-600 mb-1">
//                         {testimonials[currentSlide].position}
//                       </p>
//                       <p className="text-primary-600 font-medium">
//                         {testimonials[currentSlide].company}
//                       </p>
//                       <p className="text-sm text-gray-500 mt-2">
//                         Project: {testimonials[currentSlide].project}
//                       </p>
//                     </div>
//                   </div>
                  
//                   {/* Image Side */}
//                   <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center p-12">
//                     <div className="relative">
//                       <img
//                         src={testimonials[currentSlide].photo}
//                         alt={testimonials[currentSlide].name}
//                         className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-2xl"
//                       />
//                       <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
//                         <div className="text-2xl font-bold text-primary-600">
//                           {testimonials[currentSlide].rating}.0
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation Buttons */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
//             >
//               <ChevronLeft className="h-6 w-6 text-gray-600" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
//             >
//               <ChevronRight className="h-6 w-6 text-gray-600" />
//             </button>
//           </div>

//           {/* Dots Indicator */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentSlide 
//                     ? 'bg-primary-500 w-8' 
//                     : 'bg-gray-300 hover:bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonial Grid */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">More Success Stories</h2>
//             <p className="text-xl text-gray-600">
//               See what our clients say about working with us
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.slice(0, 6).map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.id}
//                 className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={testimonial.photo}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
//                     <p className="text-sm text-gray-600">{testimonial.company}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center mb-4">
//                   {renderStars(testimonial.rating)}
//                 </div>
                
//                 <p className="text-gray-700 italic mb-4">
//                   "{testimonial.quote.length > 120 
//                     ? testimonial.quote.substring(0, 120) + '...' 
//                     : testimonial.quote}"
//                 </p>
                
//                 <div className="text-sm text-primary-600 font-medium">
//                   {testimonial.project}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
//               <div className="text-primary-100">Happy Clients</div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.9</div>
//               <div className="text-primary-100">Average Rating</div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
//               <div className="text-primary-100">Client Retention</div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
//               <div className="text-primary-100">Projects Delivered</div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testimonials;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  // ========================================
  // 🖼️ IMAGES & ICONS - EASY TO UPDATE
  // ========================================
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // 📝 TO UPDATE: Replace URLs above with your images
  };

  const pageIcons = {
    // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
    star: Star,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    quote: Quote,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  // ========================================
  // 📝 TESTIMONIALS DATA - EASY TO UPDATE
  // ========================================
  // To add a new testimonial, simply copy one of the objects below and paste it at the end of the array.
  // Then, update the details (id, name, company, photo, quote, etc.) for the new client.
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      company: 'Sanskriti Fashions, Delhi',
      position: 'Founder',
      photo: 'https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Freebird\'s team took our brand from a local name to a national sensation. Their understanding of the Indian market is exceptional, and their designs truly resonate with our culture.',
      project: 'E-commerce Website & Branding'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      company: 'Hyderabad Chefs, Hyderabad',
      position: 'Owner',
      photo: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The social media campaign they ran for us was a massive success. Our footfall increased by 40% in just a few weeks. Their team is creative, professional, and delivers results.',
      project: 'Social Media Marketing'
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      company: 'Deccan Jewels, Bangalore',
      position: 'Marketing Head',
      photo: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The video ad created by Freebird was simply stunning. It captured the essence of our brand perfectly and helped us reach a wider audience. We saw a significant spike in online inquiries.',
      project: 'Promotional Video Production'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      company: 'Mumbai Fitness Hub, Mumbai',
      position: 'CEO',
      photo: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Freebird developed a fantastic website for our gym. It\'s easy to navigate, looks great, and the online booking system has made our operations so much smoother. Highly recommended!',
      project: 'Website Development'
    },
    {
      id: 5,
      name: 'Meera Desai',
      company: 'Jaipur Handicrafts, Jaipur',
      position: 'Owner',
      photo: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The posters and brochures designed by Freebird for our exhibition were beautiful. They perfectly showcased the intricate details of our products and attracted a lot of visitors to our stall.',
      project: 'Print Design & Branding'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={pageImages.heroBackground}
            alt="Testimonials background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Client <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Testimonials</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hear from the brands we've helped transform through creative excellence and strategic thinking
          </motion.p>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content Side */}
                  <div className="p-12 lg:p-16">
                    <Quote className="h-12 w-12 text-primary-500 mb-6" />
                    
                    <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                      "{testimonials[currentSlide].quote}"
                    </blockquote>
                    
                    <div className="flex items-center mb-6">
                      {renderStars(testimonials[currentSlide].rating)}
                    </div>
                    
                    <div className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        {testimonials[currentSlide].name}
                      </h3>
                      <p className="text-gray-600 mb-1">
                        {testimonials[currentSlide].position}
                      </p>
                      <p className="text-primary-600 font-medium">
                        {testimonials[currentSlide].company}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Project: {testimonials[currentSlide].project}
                      </p>
                    </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center p-12">
                    <div className="relative">
                      <img
                        src={testimonials[currentSlide].photo}
                        alt={testimonials[currentSlide].name}
                        className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-2xl"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                        <div className="text-2xl font-bold text-primary-600">
                          {testimonials[currentSlide].rating}.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600">
              See what our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote.length > 120 
                    ? testimonial.quote.substring(0, 120) + '...' 
                    : testimonial.quote}"
                </p>
                
                <div className="text-sm text-primary-600 font-medium">
                  {testimonial.project}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-primary-100">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.9</div>
              <div className="text-primary-100">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-primary-100">Client Retention</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100">Projects Delivered</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
