import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
  // ========================================
  // 🖼️ IMAGES & ICONS - EASY TO UPDATE
  // ========================================
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // 📝 TO UPDATE: Replace URLs above with your images
  };

  const pageIcons = {
    // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
    shield: Shield,
    eye: Eye,
    lock: Lock,
    database: Database,
    userCheck: UserCheck,
    alert: AlertTriangle,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  // ========================================
  // 📝 CONTENT - EASY TO UPDATE
  // ========================================
  const companyInfo = {
    name: 'Freebird Creative Agency',
    address: 'Mumbai, Maharashtra, India',
    email: 'privacy@freebird.agency',
    phone: '+91 98765 43210',
    website: 'www.freebird.agency',
    // 📝 TO UPDATE: Change company details above
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pageImages.heroBackground}
            alt="Privacy Policy background"
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
            Privacy <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Policy</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </motion.p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Last Updated */}
            <div className="bg-primary-50 p-6 rounded-lg mb-8">
              <div className="flex items-center space-x-3">
                <pageIcons.alert className="h-6 w-6 text-primary-500" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Last Updated</h3>
                  <p className="text-gray-600">January 2025</p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.shield className="h-8 w-8 text-primary-500 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At {companyInfo.name}, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.database className="h-8 w-8 text-primary-500 mr-3" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business information (company name, industry)</li>
                    <li>Project requirements and preferences</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address and browser information</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Device information and operating system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.eye className="h-8 w-8 text-primary-500 mr-3" />
                How We Use Your Information
              </h2>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Providing and improving our creative services</li>
                  <li>Communicating with you about projects and updates</li>
                  <li>Processing payments and managing accounts</li>
                  <li>Analyzing website usage to enhance user experience</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Complying with legal obligations under Indian law</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.lock className="h-8 w-8 text-primary-500 mr-3" />
                Data Protection & Security
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures Include:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and regular security updates</li>
                    <li>Access controls and employee training</li>
                    <li>Regular security audits and assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With trusted service providers who assist in our operations</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.userCheck className="h-8 w-8 text-primary-500 mr-3" />
                Your Rights
              </h2>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Under Indian data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Data portability where applicable</li>
                </ul>
              </div>
            </div>

            {/* Cookies Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website uses cookies to enhance your browsing experience and analyze website traffic. 
                  You can control cookie settings through your browser preferences.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                    <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, 
                  comply with legal obligations, and resolve disputes.
                </p>
                <p>
                  <strong>Typical Retention Periods:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Client project data: 7 years after project completion</li>
                  <li>Marketing communications: Until you unsubscribe</li>
                  <li>Website analytics: 26 months</li>
                  <li>Financial records: As required by Indian tax laws</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> {companyInfo.email}</p>
                  <p><strong>Phone:</strong> {companyInfo.phone}</p>
                  <p><strong>Address:</strong> {companyInfo.address}</p>
                  <p><strong>Website:</strong> {companyInfo.website}</p>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <pageIcons.alert className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Policy Updates</h3>
              </div>
              <p className="text-primary-100">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;