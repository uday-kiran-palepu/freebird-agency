import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowLeft, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const ReturnPolicy = () => {
  // ========================================
  // 🖼️ IMAGES & ICONS - EASY TO UPDATE
  // ========================================
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // 📝 TO UPDATE: Replace URLs above with your images
  };

  const pageIcons = {
    // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
    package: Package,
    return: ArrowLeft,
    clock: Clock,
    check: CheckCircle,
    cancel: XCircle,
    alert: AlertTriangle,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  // ========================================
  // 📝 CONTENT - EASY TO UPDATE
  // ========================================
  const companyInfo = {
    name: 'Freebird Creative Agency',
    address: 'Mumbai, Maharashtra, India',
    email: 'returns@freebird.agency',
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
            alt="Return Policy background"
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
            Return <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Policy</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Understanding our return policy for physical products and digital deliverables
          </motion.p>
        </div>
      </section>

      {/* Return Content */}
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
                <pageIcons.return className="h-8 w-8 text-primary-500 mr-3" />
                Return Policy Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At {companyInfo.name}, we understand that sometimes returns may be necessary. This Return Policy 
                explains our approach to returns for both physical products and digital creative services. 
                Please note that creative services are primarily digital in nature, and traditional return policies 
                may not always apply.
              </p>
            </div>

            {/* Service Categories */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Categories & Return Eligibility</h2>
              
              <div className="space-y-6">
                {/* Digital Services */}
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <pageIcons.package className="h-6 w-6 text-blue-500 mr-2" />
                    Digital Creative Services
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Includes:</strong> Logo designs, digital posters, website designs, video editing, social media content
                  </p>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700 mb-2"><strong>Return Policy:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Digital files cannot be "returned" in traditional sense</li>
                      <li>Revisions provided as per service agreement</li>
                      <li>Refund applicable only if service not delivered as agreed</li>
                      <li>Client retains usage rights upon payment completion</li>
                    </ul>
                  </div>
                </div>

                {/* Physical Products */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <pageIcons.check className="h-6 w-6 text-green-500 mr-2" />
                    Physical Products
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Includes:</strong> Printed materials, business cards, brochures, banners, merchandise
                  </p>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700 mb-2"><strong>Return Conditions:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Returns accepted within 7 days of delivery</li>
                      <li>Items must be unused and in original condition</li>
                      <li>Custom printed items generally non-returnable</li>
                      <li>Return shipping costs borne by customer (unless our error)</li>
                    </ul>
                  </div>
                </div>

                {/* Software/Tools */}
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Software & Digital Tools</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Includes:</strong> Website hosting, domain registration, premium software licenses
                  </p>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700 mb-2"><strong>Return Policy:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Third-party services subject to provider's terms</li>
                      <li>Unused services may be eligible for pro-rated refund</li>
                      <li>Domain registrations typically non-refundable</li>
                      <li>Software licenses subject to vendor policies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.clock className="h-8 w-8 text-primary-500 mr-3" />
                Return Process
              </h2>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact Us</h4>
                      <p>Email us at {companyInfo.email} within the return window with your order details and reason for return.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Return Authorization</h4>
                      <p>We'll review your request and provide return authorization if eligible, along with return instructions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Return Shipping</h4>
                      <p>Package items securely and ship to our address using the provided return label (if applicable).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Processing</h4>
                      <p>Once received, we'll inspect the items and process your refund within 5-7 business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Returnable Items */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.cancel className="h-8 w-8 text-red-500 mr-3" />
                Non-Returnable Items
              </h2>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-700 mb-4">The following items/services cannot be returned:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Completed digital designs and creative work</li>
                  <li>Custom-made or personalized items</li>
                  <li>Digital downloads after delivery</li>
                  <li>Services already rendered or consumed</li>
                  <li>Domain name registrations</li>
                  <li>Third-party software licenses (subject to vendor terms)</li>
                  <li>Items damaged due to misuse or normal wear</li>
                  <li>Items returned without prior authorization</li>
                </ul>
              </div>
            </div>

            {/* Return Conditions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Return Conditions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Items</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Must be in original, unused condition</li>
                    <li>Original packaging required</li>
                    <li>All accessories and documentation included</li>
                    <li>No signs of damage or wear</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Service not delivered as specified</li>
                    <li>Technical issues preventing delivery</li>
                    <li>Cancellation within agreed timeframe</li>
                    <li>Mutual agreement for service termination</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Return Shipping */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Return Shipping</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Costs</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Customer Error:</strong> Customer bears return shipping costs</li>
                    <li><strong>Our Error:</strong> We provide prepaid return label</li>
                    <li><strong>Defective Items:</strong> We cover all return shipping costs</li>
                    <li><strong>International Returns:</strong> Customer responsible for customs and duties</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Return Address</h3>
                  <p className="text-gray-700">
                    <strong>{companyInfo.name}</strong><br />
                    Returns Department<br />
                    {companyInfo.address}<br />
                    <strong>Note:</strong> Please obtain return authorization before shipping
                  </p>
                </div>
              </div>
            </div>

            {/* Inspection & Processing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspection & Processing</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Upon receiving your returned item, we will:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Inspect the item for condition and completeness</li>
                  <li>Verify the return is within our policy guidelines</li>
                  <li>Process the refund or exchange as applicable</li>
                  <li>Send confirmation email with processing details</li>
                </ol>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Processing Time:</strong> Returns are typically processed within 5-7 business days 
                    of receipt. Refunds will be issued to the original payment method within 7-10 business days 
                    after processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Exchanges */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exchanges</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We offer exchanges for physical products under the following conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Item received is defective or damaged</li>
                  <li>Wrong item shipped due to our error</li>
                  <li>Size or specification issues (where applicable)</li>
                </ul>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Exchange Process:</strong> Follow the same return process but specify "exchange" 
                    in your request. We'll ship the replacement item once the original is received and inspected.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact for Returns</h2>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  For return requests or questions about our return policy:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> {companyInfo.email}</p>
                  <p><strong>Phone:</strong> {companyInfo.phone}</p>
                  <p><strong>Address:</strong> {companyInfo.address}</p>
                  <p><strong>Business Hours:</strong> Monday to Friday, 10:00 AM to 6:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <pageIcons.alert className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Important Notes</h3>
              </div>
              <div className="text-primary-100 space-y-2">
                <p>• This return policy is subject to change without prior notice</p>
                <p>• Returns are processed in accordance with Indian consumer protection laws</p>
                <p>• Custom orders and personalized items are generally non-returnable</p>
                <p>• Return authorization must be obtained before shipping items back</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicy;