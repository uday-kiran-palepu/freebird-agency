import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Clock, Package, IndianRupee, AlertCircle } from 'lucide-react';

const ShippingPolicy = () => {
  // ========================================
  // 🖼️ IMAGES & ICONS - EASY TO UPDATE
  // ========================================
  const pageImages = {
    heroBackground: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // 📝 TO UPDATE: Replace URLs above with your images
  };

  const pageIcons = {
    // 🔄 TO CHANGE ICONS: Replace with any Lucide React icon name
    truck: Truck,
    location: MapPin,
    clock: Clock,
    package: Package,
    rupee: IndianRupee,
    alert: AlertCircle,
    // 📝 EXAMPLE: Add more icons like: newIcon: IconName,
  };

  // ========================================
  // 📝 CONTENT - EASY TO UPDATE
  // ========================================
  const companyInfo = {
    name: 'Freebird Creative Agency',
    address: 'Mumbai, Maharashtra, India',
    email: 'shipping@freebird.agency',
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
            alt="Shipping Policy background"
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
            Shipping <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Policy</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Information about shipping and delivery for our physical products and materials
          </motion.p>
        </div>
      </section>

      {/* Shipping Content */}
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
                <pageIcons.truck className="h-8 w-8 text-primary-500 mr-3" />
                Shipping Policy Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At {companyInfo.name}, we provide shipping services for physical products such as printed materials, 
                business cards, brochures, banners, and merchandise. This policy outlines our shipping methods, 
                costs, and delivery timelines across India and internationally.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <p className="text-gray-700">
                  <strong>Note:</strong> Most of our services are digital (designs, videos, websites) and are delivered 
                  electronically. This shipping policy applies only to physical products and printed materials.
                </p>
              </div>
            </div>

            {/* Shipping Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.location className="h-8 w-8 text-primary-500 mr-3" />
                Shipping Areas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Domestic Shipping (India)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>All major cities and towns</li>
                    <li>Pin code serviceable areas</li>
                    <li>Remote locations (with additional charges)</li>
                    <li>Cash on Delivery available in select areas</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">International Shipping</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Major countries worldwide</li>
                    <li>Express and standard options</li>
                    <li>Customs documentation included</li>
                    <li>Tracking available for all shipments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shipping Methods & Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.clock className="h-8 w-8 text-primary-500 mr-3" />
                Shipping Methods & Timeline
              </h2>
              
              <div className="space-y-6">
                {/* Domestic Shipping */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Domestic Shipping (Within India)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Standard Delivery</h4>
                      <p className="text-sm text-gray-600 mb-2">5-7 business days</p>
                      <p className="text-sm text-gray-700">₹99 - ₹199</p>
                      <p className="text-xs text-gray-500">Free for orders above ₹2,000</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Express Delivery</h4>
                      <p className="text-sm text-gray-600 mb-2">2-3 business days</p>
                      <p className="text-sm text-gray-700">₹199 - ₹399</p>
                      <p className="text-xs text-gray-500">Major cities only</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Same Day Delivery</h4>
                      <p className="text-sm text-gray-600 mb-2">Within 24 hours</p>
                      <p className="text-sm text-gray-700">₹499 - ₹799</p>
                      <p className="text-xs text-gray-500">Mumbai & Delhi only</p>
                    </div>
                  </div>
                </div>

                {/* International Shipping */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">International Shipping</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Standard International</h4>
                      <p className="text-sm text-gray-600 mb-2">10-15 business days</p>
                      <p className="text-sm text-gray-700">₹999 - ₹2,499</p>
                      <p className="text-xs text-gray-500">Varies by destination</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Express International</h4>
                      <p className="text-sm text-gray-600 mb-2">5-7 business days</p>
                      <p className="text-sm text-gray-700">₹2,499 - ₹4,999</p>
                      <p className="text-xs text-gray-500">DHL/FedEx partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.rupee className="h-8 w-8 text-primary-500 mr-3" />
                Shipping Costs
              </h2>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Calculation Method:</strong> Shipping costs are calculated based on:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Package weight and dimensions</li>
                    <li>Delivery location and distance</li>
                    <li>Shipping method selected</li>
                    <li>Insurance and handling charges</li>
                  </ul>
                  
                  <div className="bg-white p-4 rounded mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Free Shipping Eligibility</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Orders above ₹2,000 (domestic standard shipping)</li>
                      <li>Bulk orders above ₹10,000 (express shipping)</li>
                      <li>Corporate clients with annual contracts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Time */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Processing Time</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Processing time is separate from shipping time and varies by product type:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard Items</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                      <li>Business cards: 2-3 business days</li>
                      <li>Brochures/Flyers: 3-4 business days</li>
                      <li>Posters: 1-2 business days</li>
                      <li>Stationery: 2-3 business days</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Items</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                      <li>Custom banners: 5-7 business days</li>
                      <li>Merchandise: 7-10 business days</li>
                      <li>Large format prints: 3-5 business days</li>
                      <li>Specialty materials: 7-14 business days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <pageIcons.package className="h-8 w-8 text-primary-500 mr-3" />
                Packaging & Handling
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  We ensure your products are carefully packaged to arrive in perfect condition:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Packaging Standards</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Protective packaging materials for all items</li>
                    <li>Waterproof covering for outdoor shipments</li>
                    <li>Rigid backing for prints and posters</li>
                    <li>Bubble wrap and cushioning for fragile items</li>
                    <li>Eco-friendly packaging materials when possible</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Special Handling:</strong> Large format prints, banners, and delicate materials 
                    receive extra protection with tube packaging or flat-pack solutions to prevent damage during transit.
                  </p>
                </div>
              </div>
            </div>

            {/* Tracking & Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tracking & Delivery</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Tracking</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Tracking number provided via email and SMS</li>
                    <li>Real-time tracking updates</li>
                    <li>Delivery confirmation with recipient details</li>
                    <li>Photo proof of delivery (where available)</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Recipient or authorized person must be available</li>
                    <li>Valid ID required for high-value shipments</li>
                    <li>Signature confirmation for express deliveries</li>
                    <li>Safe drop-off locations accepted with prior consent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shipping Restrictions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping Restrictions</h2>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Items We Cannot Ship</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Hazardous or flammable materials</li>
                  <li>Perishable items</li>
                  <li>Items prohibited by courier partners</li>
                  <li>Copyrighted materials without proper authorization</li>
                  <li>Items exceeding size/weight limits</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">International Restrictions</h3>
                <p className="text-gray-700 mb-2">
                  International shipments are subject to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Destination country customs regulations</li>
                  <li>Import duties and taxes (paid by recipient)</li>
                  <li>Prohibited items list of destination country</li>
                  <li>Documentation requirements</li>
                </ul>
              </div>
            </div>

            {/* Delivery Issues */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery Issues</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  If you experience any delivery issues, please contact us immediately:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Issues</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                      <li>Package not delivered</li>
                      <li>Damaged items</li>
                      <li>Wrong items received</li>
                      <li>Delivery to wrong address</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Resolution Process</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                      <li>Report within 48 hours</li>
                      <li>Provide order and tracking details</li>
                      <li>Photo evidence if applicable</li>
                      <li>We'll investigate and resolve</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping Support</h2>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  For shipping-related queries, tracking updates, or delivery issues:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> {companyInfo.email}</p>
                  <p><strong>Phone:</strong> {companyInfo.phone}</p>
                  <p><strong>WhatsApp:</strong> +91 98765 43210</p>
                  <p><strong>Business Hours:</strong> Monday to Saturday, 10:00 AM to 7:00 PM IST</p>
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
                <p>• Shipping times are estimates and may vary due to external factors</p>
                <p>• We are not responsible for delays caused by courier partners or customs</p>
                <p>• Insurance is recommended for high-value shipments</p>
                <p>• This policy is subject to change based on courier partner updates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPolicy;