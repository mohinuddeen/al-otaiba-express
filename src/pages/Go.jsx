import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Smartphone, Home, PenTool, Sofa, Flower2, Truck, CreditCard, Shield, Star, Gift, Clock, Award, Headphones } from 'lucide-react';

function Go() {
  const categories = [
    { icon: Smartphone, name: 'Electronics', items: 'Laptops, Phones, Accessories', color: 'from-blue-500 to-cyan-500' },
    { icon: Flower2, name: 'Garden', items: 'Plants, Tools, Outdoor', color: 'from-green-500 to-emerald-500' },
    { icon: Home, name: 'Household', items: 'Kitchen, Cleaning, Storage', color: 'from-purple-500 to-pink-500' },
    { icon: PenTool, name: 'Stationery', items: 'Office Supplies, Art', color: 'from-orange-500 to-red-500' },
    { icon: Sofa, name: 'Furniture', items: 'Living, Bedroom, Office', color: 'from-indigo-500 to-purple-500' }
  ];

  const features = [
    { icon: Truck, title: 'Free Delivery', desc: 'Free shipping on orders over AED 200' },
    { icon: CreditCard, title: 'Secure Payment', desc: 'Multiple payment options available' },
    { icon: Clock, title: 'Fast Shipping', desc: 'Same-day delivery in Dubai' },
    { icon: Shield, title: 'Buyer Protection', desc: '100% money-back guarantee' },
    { icon: Gift, title: 'Special Offers', desc: 'Daily deals and discounts' },
    { icon: Headphones, title: '24/7 Support', desc: 'Customer service always ready' }
  ];

  const deals = [
    "Up to 70% off on Electronics",
    "Buy 1 Get 1 Free on Selected Items",
    "Free Accessories with Furniture Purchase",
    "Extra 10% off for First-Time Buyers"
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
          <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-12 mb-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <ShoppingBag className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Go</h1>
                <p className="text-xl text-gray-200 mt-2">Your Ultimate Shopping Destination</p>
              </div>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl">
              Go is your one-stop e-commerce platform offering everything from electronics to furniture. 
              Shop thousands of products across multiple categories with best prices, fast delivery, and 
              secure payments.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
                  <Icon className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-sm text-navy-900">{feature.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{feature.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Categories Section */}
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Shop by Category</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition cursor-pointer">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${category.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.items}</p>
                </div>
              );
            })}
          </div>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">About Go</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Launched in 2020, Go has quickly become one of UAE's fastest-growing e-commerce platforms. 
                We partner with hundreds of brands and sellers to bring you the best products at competitive prices.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our mission is to make online shopping convenient, affordable, and enjoyable for everyone in the UAE. 
                With a user-friendly interface, secure payment gateways, and reliable delivery, we ensure a seamless 
                shopping experience.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Award className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Rated 4.8/5 by 10,000+ customers</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Hot Deals & Offers</h2>
              <div className="space-y-3">
                {deals.map((deal, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
                    <span className="text-gray-700 font-medium">{deal}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-6 text-white text-center">
                <p className="text-sm mb-2">Limited Time Offer</p>
                <p className="text-2xl font-bold mb-2">Use Code: GOAE2024</p>
                <p className="text-sm">Get 15% off on your first purchase</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12 bg-gray-100 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Why Shop at Go?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: "50,000+", label: "Products" },
                { value: "500+", label: "Brands" },
                { value: "24h", label: "Delivery" },
                { value: "100%", label: "Secure" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://go.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-700 text-white px-12 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-lg"
            >
              Start Shopping at Go →
              <ShoppingBag className="w-5 h-5" />
            </a>
            <p className="text-gray-500 text-sm mt-4">Free shipping on orders over AED 200</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Go;