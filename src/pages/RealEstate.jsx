import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Phone, Mail, Clock, Award, Users, TrendingUp, CheckCircle, Home, Building, BarChart, Shield } from 'lucide-react';

function RealEstate() {
  const properties = [
    { name: "Luxury Villas", locations: "Palm Jumeirah, Emirates Hills", type: "Residential" },
    { name: "Premium Apartments", locations: "Downtown Dubai, Marina", type: "Residential" },
    { name: "Commercial Spaces", locations: "DIFC, Business Bay", type: "Commercial" },
    { name: "Investment Properties", locations: "Various Locations", type: "Investment" }
  ];

  const services = [
    { icon: Home, title: "Property Sales", desc: "Buy luxury properties at best market prices" },
    { icon: Building, title: "Property Management", desc: "Full-service property management solutions" },
    { icon: BarChart, title: "Investment Advisory", desc: "Expert guidance for real estate investments" },
    { icon: Shield, title: "Legal Support", desc: "Complete legal assistance for transactions" }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-navy-900 rounded-3xl p-12 mb-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <Building2 className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">AOE Real Estate</h1>
                <p className="text-xl text-gray-200 mt-2">Premium Real Estate Solutions in Dubai, UAE</p>
              </div>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl">
              Established in 2015, AOE Real Estate has become a trusted name in Dubai's dynamic property market, 
              offering comprehensive real estate services from luxury residential properties to prime commercial spaces.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "500+", label: "Properties Sold", icon: Award },
              { value: "98%", label: "Client Satisfaction", icon: Users },
              { value: "AED 2B+", label: "Transaction Value", icon: TrendingUp },
              { value: "15+", label: "Years Experience", icon: Clock }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">About AOE Real Estate</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                AOE Real Estate is a premier real estate agency based in Dubai, offering exceptional property solutions 
                across the UAE. With deep understanding of the Dubai real estate market, we provide expert guidance 
                for buyers, sellers, and investors.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team of experienced real estate professionals is dedicated to helping clients find their dream 
                properties or make smart investment decisions. We pride ourselves on transparency, integrity, and 
                delivering exceptional value to our clients.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-navy-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">To provide exceptional real estate services with integrity, transparency, 
                and a commitment to exceeding client expectations in Dubai's competitive property market.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Properties We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {properties.map((property, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{property.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{property.locations}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {property.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12 bg-navy-900 text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose AOE Real Estate?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Expert local market knowledge",
                "Extensive property portfolio",
                "Competitive pricing",
                "End-to-end support",
                "Legal and financial guidance",
                "After-sales service"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+971 4 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">realestate@aoeholding.ae</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Sunday - Thursday: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-navy-900 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Find Your Property?</h2>
              <p className="mb-6">Contact us today for a free consultation</p>
              <button className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Request a Callback
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RealEstate;