import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const TermsConditions = () => {
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
    alert: AlertCircle,
    check: CheckCircle,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  // ========================================
  // 📝 CONTENT - EASY TO UPDATE
  // ========================================
  const companyInfo = {
    name: 'Freebird Creative Agency',
    address: 'Mumbai, Maharashtra, India',
    email: 'hello@freebird.agency',
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
            alt="Terms and Conditions background"
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
            Terms & <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Conditions</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Please read these terms and conditions carefully before using our services
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
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
                <pageIcons.document className="h-8 w-8 text-primary-500 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to {companyInfo.name}. These Terms and Conditions ("Terms") govern your use of our website 
                and services. By accessing or using our services, you agree to be bound by these Terms. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  {companyInfo.name} provides creative services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Graphic Design and Brand Identity</li>
                  <li>Video Production and Editing</li>
                  <li>Website Development and Design</li>
                  <li>Digital Marketing and Social Media Management</li>
                  <li>Content Creation and Strategy</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Currency:</strong> All prices are quoted in Indian Rupees (₹) unless otherwise specified.
                </p>
                <p>
                  <strong>Payment Schedule:</strong> 50% advance payment required before project commencement, 
                  remaining 50% upon project completion and client approval.
                </p>
                <p>
                  <strong>Late Payments:</strong> Overdue payments may incur a late fee of 2% per month.
                </p>
                <p>
                  <strong>Taxes:</strong> All prices are exclusive of applicable taxes including GST as per Indian tax laws.
                </p>
              </div>
            </div>

            {/* Project Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Delivery & Revisions</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Delivery Timeline:</strong> Project timelines are estimates and may vary based on project complexity 
                  and client feedback response time.
                </p>
                <p>
                  <strong>Revisions:</strong> Each project includes up to 3 rounds of revisions. Additional revisions 
                  will be charged at ₹2,000 per revision round.
                </p>
                <p>
                  <strong>Client Responsibilities:</strong> Timely provision of content, feedback, and approvals 
                  is essential for project completion within agreed timelines.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Ownership:</strong> Upon full payment, clients receive full ownership rights to the final deliverables.
                  </p>
                  <p>
                    <strong>Portfolio Usage:</strong> {companyInfo.name} reserves the right to showcase completed work 
                    in our portfolio and marketing materials.
                  </p>
                  <p>
                    <strong>Third-party Assets:</strong> Any third-party assets (stock photos, fonts, etc.) used in projects 
                    require separate licensing by the client.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {companyInfo.name} shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising from the use of our services.
                </p>
                <p>
                  Our total liability shall not exceed the total amount paid by the client for the specific project in question.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
                  of the courts in Mumbai, Maharashtra, India.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.shield className="h-8 w-8 text-primary-500 mr-3" />
                Contact Us
              </h2>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> {companyInfo.email}</p>
                  <p><strong>Phone:</strong> {companyInfo.phone}</p>
                  <p><strong>Address:</strong> {companyInfo.address}</p>
                  <p><strong>Website:</strong> {companyInfo.website}</p>
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <pageIcons.check className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Agreement</h3>
              </div>
              <p className="text-primary-100">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;