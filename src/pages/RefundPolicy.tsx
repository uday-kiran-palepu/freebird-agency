import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, CreditCard, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicy = () => {
  // ========================================
  // 🖼️ IMAGES & ICONS - EASY TO UPDATE
  // ========================================
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // 📝 TO UPDATE: Replace URLs above with your images
  };

  const pageIcons = {
    // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
    refund: RotateCcw,
    card: CreditCard,
    clock: Clock,
    alert: AlertCircle,
    check: CheckCircle,
    cancel: XCircle,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  // ========================================
  // 📝 CONTENT - EASY TO UPDATE
  // ========================================
  const companyInfo = {
    name: 'Freebird Creative Agency',
    address: 'Mumbai, Maharashtra, India',
    email: 'refunds@freebird.agency',
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
            alt="Refund Policy background"
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
            Refund <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Policy</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Understanding our refund terms and conditions for creative services
          </motion.p>
        </div>
      </section>

      {/* Refund Content */}
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
                <pageIcons.refund className="h-8 w-8 text-primary-500 mr-3" />
                Refund Policy Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At {companyInfo.name}, we strive to deliver exceptional creative services that meet your expectations. 
                This Refund Policy outlines the terms and conditions under which refunds may be requested and processed 
                for our creative services in accordance with Indian consumer protection laws.
              </p>
            </div>

            {/* Refund Eligibility */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.check className="h-8 w-8 text-green-500 mr-3" />
                Refund Eligibility
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligible for Refund</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Project cancellation within 24 hours of order confirmation</li>
                    <li>Failure to deliver services within agreed timeline (without client delays)</li>
                    <li>Services not delivered as per agreed specifications</li>
                    <li>Technical issues preventing service delivery</li>
                    <li>Duplicate payments or billing errors</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <pageIcons.cancel className="h-6 w-6 text-red-500 mr-2" />
                    Not Eligible for Refund
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Change of mind after project commencement</li>
                    <li>Completed and delivered projects as per specifications</li>
                    <li>Services already utilized (e.g., completed designs, published content)</li>
                    <li>Delays caused by client's late feedback or content provision</li>
                    <li>Third-party service costs (domain, hosting, stock images)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.clock className="h-8 w-8 text-primary-500 mr-3" />
                Refund Process & Timeline
              </h2>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Refund Request</h4>
                      <p>Contact us via email at {companyInfo.email} with your order details and reason for refund.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Review Process</h4>
                      <p>We will review your request within 2-3 business days and respond with our decision.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Refund Processing</h4>
                      <p>Approved refunds will be processed within 7-10 business days to your original payment method.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partial Refunds */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partial Refunds</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  In certain circumstances, partial refunds may be applicable:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Project Cancellation Mid-way:</strong> Refund based on work not yet completed</li>
                    <li><strong>Scope Reduction:</strong> Refund for services removed from original agreement</li>
                    <li><strong>Quality Issues:</strong> Partial refund if some deliverables meet standards</li>
                  </ul>
                </div>
                
                <p>
                  <strong>Calculation Method:</strong> Partial refunds are calculated based on the percentage of work completed 
                  and delivered as per the original project scope.
                </p>
              </div>
            </div>

            {/* Payment Method Specific Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.card className="h-8 w-8 text-primary-500 mr-3" />
                Payment Method Specific Terms
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Bank Transfer/UPI</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Refund processed to original account</li>
                    <li>Timeline: 3-5 business days</li>
                    <li>No processing fees deducted</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Credit/Debit Card</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Refund to original card</li>
                    <li>Timeline: 7-10 business days</li>
                    <li>Gateway fees may be deducted</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Wallets</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Refund to wallet account</li>
                    <li>Timeline: 1-3 business days</li>
                    <li>Subject to wallet provider terms</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cash Payments</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Bank transfer to provided account</li>
                    <li>Timeline: 5-7 business days</li>
                    <li>Account verification required</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancellation Policy</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Timeline</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Within 24 hours:</strong> 100% refund (minus payment gateway charges)</li>
                    <li><strong>24-72 hours:</strong> 75% refund if work hasn't commenced</li>
                    <li><strong>After work commencement:</strong> Refund based on work completed</li>
                    <li><strong>After 50% completion:</strong> No refund applicable</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you're not satisfied with our refund decision, you can:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request escalation to our senior management team</li>
                  <li>Seek mediation through consumer forums in India</li>
                  <li>File a complaint with relevant consumer protection authorities</li>
                </ul>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Consumer Rights:</strong> This policy is in accordance with the Consumer Protection Act, 2019, 
                    and does not limit your statutory rights as a consumer in India.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact for Refunds</h2>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  For refund requests or queries, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> {companyInfo.email}</p>
                  <p><strong>Phone:</strong> {companyInfo.phone}</p>
                  <p><strong>Address:</strong> {companyInfo.address}</p>
                  <p><strong>Business Hours:</strong> Monday to Friday, 10:00 AM to 6:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <pageIcons.alert className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Important Note</h3>
              </div>
              <p className="text-primary-100">
                This refund policy is subject to change without prior notice. We recommend reviewing this policy 
                periodically. All refund requests are subject to verification and approval by our management team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;