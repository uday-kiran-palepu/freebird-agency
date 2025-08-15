import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedButton from '../components/AnimatedButton';
import { 
  Palette, 
  Video, 
  Globe, 
  TrendingUp, 
  Camera, 
  Edit3,
  Star,
  ArrowRight,
  Play,
  Users,
  Award,
  Zap,
  CheckCircle,
  Target,
  Heart,
  Lightbulb,
  Eye,
  Briefcase,
  Code,
  PenTool
} from 'lucide-react';

const Home = () => {
  // ========================================
  // 🖼️ IMAGES & ICONS - EASY TO UPDATE
  // ========================================
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    aboutImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    serviceImage1: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    serviceImage2: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    serviceImage3: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    ctaBackground: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // 📝 TO UPDATE: Replace URLs above with your images
  };

  const pageIcons = {
    // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
    design: Palette,
    video: Video,
    web: Globe,
    marketing: TrendingUp,
    photography: Camera,
    content: Edit3,
    star: Star,
    arrow: ArrowRight,
    play: Play,
    users: Users,
    award: Award,
    zap: Zap,
    check: CheckCircle,
    target: Target,
    heart: Heart,
    lightbulb: Lightbulb,
    eye: Eye,
    briefcase: Briefcase,
    code: Code,
    pen: PenTool,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  // ========================================
  // 🖼️ POSTER IMAGES - EASY TO UPDATE
  // ========================================
  // Add as many posters as you want by duplicating the format below
  const samplePosters = [
    // 🔄 TO ADD MORE POSTERS: Copy any line below and change the id, url, and title
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
    // 📝 EXAMPLE: Add more posters like this:
    // { id: 7, url: 'YOUR_IMAGE_URL_HERE', title: 'Your Title Here' },
    // { id: 8, url: 'YOUR_IMAGE_URL_HERE', title: 'Your Title Here' },
    // { id: 9, url: 'YOUR_IMAGE_URL_HERE', title: 'Your Title Here' },
  ];

  // Inline ScrollingPosters Component - Easy to customize images
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
    const [isPaused, setIsPaused] = useState(false);
    const isAnimating = !isPaused;

    const handlePosterClick = () => {
      setIsPaused(!isPaused);
    };

    // Poster dimensions based on size prop (25% larger)
    const posterWidth = size === 'small' ? 225 : 300; // 25% increase: 180px -> 225px, 240px -> 300px
    const posterHeight = size === 'small' ? 'h-56-25' : 'h-75';
    const gap = 16; // 1rem gap between posters

    // Create enough duplicates to ensure seamless scrolling
    const duplicatedPosters = [...posters, ...posters, ...posters, ...posters];
    
    // Calculate total width including gaps
    const totalWidth = (posters.length * posterWidth) + (posters.length * gap);

    return (
      <div className="w-full overflow-hidden relative">
        {/* Full width container that extends to screen edges */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <motion.div
            className="flex"
            style={{ 
              gap: `${gap}px`,
              paddingLeft: direction === 'left' ? '0px' : `${gap}px`,
              paddingRight: direction === 'right' ? '0px' : `${gap}px`
            }}
            animate={{
              x: isAnimating 
                ? direction === 'left' 
                  ? [0, -totalWidth]
                  : [-totalWidth, 0]
                : 0,
            }}
            transition={{
              duration: speed,
              repeat: isAnimating ? Infinity : 0,
              ease: 'linear',
            }}
          >
            {duplicatedPosters.map((poster, index) => (
              <motion.div
                key={`${poster.id}-${index}`}
                className="flex-shrink-0 cursor-pointer group"
                style={{ width: posterWidth }}
                onClick={handlePosterClick}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-full ${posterHeight} bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg overflow-hidden relative rounded-xl`}>
                  <img
                    src={poster.url}
                    alt={poster.title}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end rounded-xl">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium text-sm">{poster.title}</p>
                    </div>
                  </div>
                  {/* Pause indicator */}
                  {isPaused && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                      <div className="text-white text-sm font-medium bg-black bg-opacity-70 px-3 py-1 rounded-full">
                        Click to Resume
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete brand identity for tech startup'
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Viral social media campaign design'
    },
    {
      id: 3,
      title: 'E-commerce Website',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern e-commerce platform'
    },
    {
      id: 4,
      title: 'Product Launch Video',
      category: 'Video',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dynamic product showcase video'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Abhaya',
      company: 'Abhaya Homoeo Clinic',
      image: 'https://res.cloudinary.com/dbgbuzyw8/image/upload/v1755178431/Abhaya_homeo_clinic_logo_01_g1vrk5.png',
      quote: 'Freebird transformed our brand completely. Their creative approach exceeded our expectations to our Clinic.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      company: 'Digital Solutions',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'Outstanding work! Our website traffic increased by 300% after their redesign.',
      rating: 5
    },
    {
      id: 3,
      name: 'Anita Patel',
      company: 'Fashion Forward',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The video campaign they created went viral and boosted our sales significantly.',
      rating: 5
    }
  ];

  // Floating bubbles animation
  const bubbles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Freebird Creative Agency - Transform Your Brand with Creative Excellence"
        description="Leading creative agency in Mumbai offering graphic design, video production, website development & digital marketing. 500+ happy clients. Get your free quote today!"
        keywords="creative agency Mumbai, graphic design, video production, website development, digital marketing, branding, logo design, social media marketing"
        url="https://gorgeous-boba-3ba51c.netlify.app"
      />
      
      {/* Hero Section with Bubble Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={pageImages.heroBackground}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary-900/70"></div>
        </div>

        {/* Floating Bubbles */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-gradient-to-br from-primary-400/20 to-primary-600/10 backdrop-blur-sm border border-primary-400/30"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
            }}
            animate={{
              y: [1000, -100],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              We Help Brands Stand Out
              <span className="block text-2xl md:text-4xl bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mt-4">
                with Creativity & Smart Digital Strategy
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-1xl md:text-2xl text-gray-200 mb-12 font-light">
              Design | Videos | Websites | Marketing | All in One Place.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedButton
                to="/portfolio"
                variant="primary"
                size="lg"
                className="flex items-center justify-center"
              >
                <pageIcons.eye className="mr-3 w-6 h-6" />
                See Our Work
              </AnimatedButton>
              <AnimatedButton
                to="/contact"
                variant="outline"
                size="lg"
                className="flex items-center justify-center"
              >
                <pageIcons.briefcase className="mr-3 w-6 h-6" />
                Get a Free Quote
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About Freebird
              </motion.h2>
              <p className="text-lg text-gray-600 mb-6">
                We're a creative agency that believes in the power of design, technology, and strategy to transform businesses and create lasting impact. Every brand deserves to stand out in a crowded marketplace.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We combine creativity with data-driven strategy, ensuring that every project we undertake not only looks amazing but also delivers measurable results for our clients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { icon: pageIcons.lightbulb, title: 'Creativity', desc: 'We believe in the power of creative thinking to solve complex problems.' },
                  { icon: pageIcons.target, title: 'Results', desc: 'Every project is designed to deliver measurable business outcomes.' },
                  { icon: pageIcons.zap, title: 'Innovation', desc: 'We stay ahead of trends to provide cutting-edge solutions.' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-4">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <AnimatedButton to="/about" variant="primary">
                Know More
                <pageIcons.arrow className="ml-2 w-5 h-5" />
              </AnimatedButton>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Creative Works - Numbers */}
      <AnimatedSection>
        <section className="py-12 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Creative Works</h2>
              <p className="text-xl text-primary-100">
                Numbers that speak for our creative excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: pageIcons.users, number: '500+', label: 'Happy Clients' },
                { icon: pageIcons.briefcase, number: '1000+', label: 'Projects Completed' },
                { icon: pageIcons.award, number: '50+', label: 'Awards Won' },
                { icon: pageIcons.star, number: '4.9', label: 'Client Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    hover: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-200" />
                  <motion.div 
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-primary-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AnimatedButton to="/about" variant="secondary">
                Learn More About Us
                <pageIcons.arrow className="ml-2 w-5 h-5" />
              </AnimatedButton>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Portfolio</h2>
            <p className="text-xl text-gray-600 mb-8">
              Showcasing our best creative work across different industries
            </p>
            {/* Button Is here  */}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-primary-400 text-sm font-medium">{item.category}</span>
                      <h3 className="text-white font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >

          <Link
              to="/portfolio"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 m-3"
            >
              View All Work
              <pageIcons.arrow className="ml-2 w-5 h-5" />
            </Link>

            
            <Link
              to="/services"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore All Services
              <pageIcons.arrow className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Creative Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Creative Gallery</h2>
            <p className="text-xl text-gray-600">
              Explore our stunning collection of creative works - click any poster to pause and explore
            </p>
          </motion.div>

          <div className="space-y-8">
            <ScrollingPosters direction="left" speed={50} posters={samplePosters} size="small" />
            <ScrollingPosters direction="right" speed={60} posters={samplePosters.slice().reverse()} size="small" />
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View Complete Gallery
              <pageIcons.arrow className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 mb-8">
              Real feedback from businesses we've helped transform
            </p>
            {/* Button is here  */}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <pageIcons.star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >

          <Link
              to="/testimonials"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 m-3"
            >
              Read More Reviews
              <pageIcons.arrow className="ml-2 w-5 h-5" />
            </Link>

            
            <Link
              to="/team"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Meet Our Team
              <pageIcons.arrow className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ready to Transform Your Brand? CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={pageImages.ctaBackground}
            alt="CTA background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-primary-600/90"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.h2
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p
            className="text-2xl text-primary-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create something amazing together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-white text-primary-600 hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Project
              <pageIcons.arrow className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;