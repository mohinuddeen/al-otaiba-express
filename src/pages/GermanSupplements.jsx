import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, CheckCircle, Package, TrendingUp, Shield, Star, Clock, Truck, Award, Heart, Zap, Target, Users } from 'lucide-react';

function GermanSupplements() {
  const products = [
    { name: "Whey Protein", category: "Proteins", benefit: "Muscle Growth" },
    { name: "Creatine Monohydrate", category: "Performance", benefit: "Strength & Power" },
    { name: "BCAA", category: "Amino Acids", benefit: "Recovery" },
    { name: "Multivitamins", category: "Vitamins", benefit: "Overall Health" },
    { name: "Omega-3", category: "Essential Fats", benefit: "Heart & Brain" },
    { name: "Pre-Workout", category: "Energy", benefit: "Focus & Energy" }
  ];

  const features = [
    { icon: Shield, title: "German Quality", desc: "Manufactured under strict German quality standards" },
    { icon: Award, title: "Lab Tested", desc: "Third-party tested for purity and potency" },
    { icon: Clock, title: "Fast Delivery", desc: "Free shipping across UAE on orders over AED 200" },
    { icon: Star, title: "Premium Ingredients", desc: "Sourced from trusted global suppliers" }
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-800 rounded-3xl p-12 mb-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <Dumbbell className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">German Supplements</h1>
                <p className="text-xl text-gray-200 mt-2">Premium German Sports Nutrition</p>
              </div>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl">
              German Supplements brings you premium-quality sports nutrition products manufactured under strict 
              German quality standards. We are committed to helping you achieve your fitness goals with pure, 
              effective, and safe supplements.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "50,000+", label: "Happy Customers", icon: Users },
              { value: "100+", label: "Products", icon: Package },
              { value: "99%", label: "Pure Ingredients", icon: Target },
              { value: "24/7", label: "Customer Support", icon: Heart }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <Icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-xl transition">
                  <div className="inline-flex p-3 bg-green-100 rounded-xl mb-4 group-hover:scale-110 transition">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          {/* About */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">About German Supplements</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                German Supplements was founded with a mission to provide athletes and fitness enthusiasts with 
                premium-quality supplements that deliver real results. We believe in transparency, quality, and 
                effectiveness.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All our products are manufactured in GMP-certified facilities in Germany, ensuring the highest 
                standards of quality control. We use only the purest ingredients with no fillers, binders, or 
                artificial additives.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img 
                  src="https://germansupplements.de/cdn/shop/files/download_1.png" 
                  alt="Logo" 
                  className="h-16 object-contain"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <div>
                  <p className="font-bold text-navy-900">Made in Germany</p>
                  <p className="text-sm text-gray-600">Premium Quality Since 2018</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Popular Products</h2>
              <div className="space-y-3">
                {products.slice(0, 5).map((product, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold text-navy-900">{product.name}</span>
                      <span className="text-xs text-gray-500 ml-2">{product.category}</span>
                    </div>
                    <span className="text-sm text-green-600">{product.benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Why Choose German Supplements?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "100% Natural Ingredients",
                "No Artificial Additives",
                "GMP Certified Facilities",
                "Lab Tested for Purity",
                "Fast UAE Delivery",
                "Money-Back Guarantee"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://germansupplements.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 text-white px-12 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-lg"
            >
              Shop Now at German Supplements →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default GermanSupplements;