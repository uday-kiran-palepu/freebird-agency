import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Shield, RotateCcw, ArrowLeft, Truck, Eye, CheckCircle } from 'lucide-react';

const Policies = () => {
  // ========================================
  // 🖼️ IMAGES & ICONS - EASY TO UPDATE
  // ========================================
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // 📝 TO UPDATE: Replace URLs above with your images
  };

  const pageIcons = {
    // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
    document: FileText,
    shield: Shield,
    refund: RotateCcw,
    return: ArrowLeft,
    shipping: Truck,
    privacy: Eye,
    check: CheckCircle,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  // ========================================
  // 📝 CONTENT - EASY TO UPDATE
  // ========================================
  const companyInfo = {
    name: 'Freebird Creative Agency',
    address: 'Mumbai, Maharashtra, India',
    email: 'legal@freebird.agency',
    phone: '+91 98765 43210',
    website: 'www.freebird.agency',
    // 📝 TO UPDATE: Change company details above
  };

  const policies = [
    {
      title: 'Terms & Conditions',
      description: 'Our terms of service, payment conditions, and legal agreements for using our creative services.',
      icon: pageIcons.document,
      link: '/terms-conditions',
      color: 'bg-blue-500',
      highlights: ['Service agreements', 'Payment terms', 'Project delivery', 'Legal compliance']
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information in accordance with Indian data protection laws.',
      icon: pageIcons.privacy,
      link: '/privacy-policy',
      color: 'bg-green-500',
      highlights: ['Data collection', 'Information usage', 'Security measures', 'Your rights']
    },
    {
      title: 'Refund Policy',
      description: 'Conditions and procedures for requesting refunds on our creative services and products.',
      icon: pageIcons.refund,
      link: '/refund-policy',
      color: 'bg-orange-500',
      highlights: ['Refund eligibility', 'Processing timeline', 'Payment methods', 'Cancellation terms']
    },
    {
      title: 'Return Policy',
      description: 'Guidelines for returning physical products and understanding our return process.',
      icon: pageIcons.return,
      link: '/return-policy',
      color: 'bg-purple-500',
      highlights: ['Return conditions', 'Physical products', 'Digital services', 'Exchange process']
    },
    {
      title: 'Shipping Policy',
      description: 'Information about shipping methods, costs, and delivery timelines for physical products.',
      icon: pageIcons.shipping,
      link: '/shipping-policy',
      color: 'bg-red-500',
      highlights: ['Shipping areas', 'Delivery timeline', 'Packaging standards', 'Tracking information']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pageImages.heroBackground}
            alt="Policies background"
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
            Our <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Policies</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent policies that govern our services and protect your interests
          </motion.p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Policy Overview</h2>
            <p className="text-xl text-gray-600">
              Click on any policy below to read the complete details
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${policy.color} rounded-full mb-6`}>
                    <policy.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{policy.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{policy.description}</p>
                  
                  <div className="space-y-2 mb-8">
                    {policy.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2">
                        <pageIcons.check className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={policy.link}
                    onClick={() => window.scrollTo(0, 0)}
                    className={`w-full ${policy.color} text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center space-x-2`}
                  >
                    <span>Read Full Policy</span>
                    <policy.icon className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Policy Highlights</h2>
            <p className="text-xl text-gray-600">
              Key points from our policies at a glance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <pageIcons.shield className="h-8 w-8 text-primary-500" />
                <h3 className="text-xl font-bold text-gray-900">Data Protection</h3>
              </div>
              <p className="text-gray-600">
                We protect your personal information with industry-standard security measures and comply with Indian data protection laws.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <pageIcons.refund className="h-8 w-8 text-primary-500" />
                <h3 className="text-xl font-bold text-gray-900">Fair Refunds</h3>
              </div>
              <p className="text-gray-600">
                Clear refund conditions with 24-hour cancellation window and transparent processing timelines for all services.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <pageIcons.shipping className="h-8 w-8 text-primary-500" />
                <h3 className="text-xl font-bold text-gray-900">Reliable Delivery</h3>
              </div>
              <p className="text-gray-600">
                Fast and secure shipping across India with tracking, insurance options, and careful packaging for all physical products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Our Policies?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help clarify any policy-related questions you may have
            </p>
            
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> {companyInfo.email}</p>
                    <p><strong>Phone:</strong> {companyInfo.phone}</p>
                    <p><strong>Address:</strong> {companyInfo.address}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Monday - Friday:</strong> 10:00 AM - 6:00 PM IST</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM IST</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Contact Us</span>
                  <pageIcons.document className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Policies;