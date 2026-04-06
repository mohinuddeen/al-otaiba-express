import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, Heart, Droplet, CheckCircle, Clock, Users, Award, Syringe, Brain, Shield, Phone } from 'lucide-react';

function GermanHealthHub() {
  const services = [
    { 
      icon: Droplet, 
      title: "Blood Tests", 
      desc: "Comprehensive blood analysis including CBC, Vitamin D, Thyroid, and more",
      price: "From AED 299"
    },
    { 
      icon: Syringe, 
      title: "IV Drip Therapy", 
      desc: "Vitamin-infused IV drips for energy, immunity, and wellness",
      price: "From AED 499"
    },
    { 
      icon: Heart, 
      title: "Health Checkups", 
      desc: "Complete health assessment packages for all ages",
      price: "From AED 599"
    },
    { 
      icon: Brain, 
      title: "Wellness Programs", 
      desc: "Personalized wellness plans including nutrition and lifestyle coaching",
      price: "From AED 899"
    }
  ];

  const benefits = [
    "German-trained medical professionals",
    "State-of-the-art laboratory equipment",
    "Results within 24-48 hours",
    "Home sample collection available",
    "Insurance accepted",
    "Free doctor consultation"
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 mb-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <Stethoscope className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">German Health Hub</h1>
                <p className="text-xl text-gray-200 mt-2">Premium Healthcare Services in Dubai</p>
              </div>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl">
              German Health Hub brings world-class healthcare services to Dubai, offering comprehensive diagnostic 
              tests, IV drip therapy, and wellness programs under one roof. Experience healthcare the German way 
              – precise, efficient, and patient-centered.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "10,000+", label: "Patients Served", icon: Users },
              { value: "50+", label: "Test Types", icon: Activity },
              { value: "99%", label: "Accuracy Rate", icon: Award },
              { value: "30min", label: "Quick Response", icon: Clock }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <Icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Our Healthcare Services</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-2">{service.desc}</p>
                      <p className="text-purple-600 font-semibold">{service.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* About */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">About German Health Hub</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                German Health Hub was established to bridge the gap between German healthcare excellence and 
                Dubai's diverse population. We combine cutting-edge medical technology with personalized care 
                to deliver the best health outcomes.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team includes German-trained doctors, certified nutritionists, and experienced healthcare 
                professionals dedicated to your wellbeing. We believe in preventive healthcare and empowering 
                patients with knowledge about their health.
              </p>
              <div className="bg-purple-50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-navy-900 mb-3">Opening Hours</h3>
                <p className="text-gray-700">Saturday - Thursday: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Friday: Closed</p>
                <p className="text-gray-700 mt-2">Home visits available by appointment</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Choose Us</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Insurance Partners</h3>
                <p className="text-gray-600 text-sm">We accept all major insurance plans including Daman, AXA, Cigna, and more.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gray-100 rounded-3xl p-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Ready to Take Control of Your Health?</h2>
            <p className="text-gray-600 mb-6">Book your appointment today for a comprehensive health checkup</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://germanhealthhub.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Book Appointment →
              </a>
              <button className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition">
                <Phone className="w-4 h-4" />
                Call +971 4 123 4567
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default GermanHealthHub;