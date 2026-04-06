import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Package, Coffee, Droplet, Leaf } from 'lucide-react';

function Brands() {
  const [imageErrors, setImageErrors] = useState({});

  const brands = [
    {
      id: 1,
      name: "MultiBrands",
      description: "UK brand offering quality products including toothbrushes, toothpaste, razor blades, lip balm, and first aid adhesive strips.",
      url: "https://multibrands.co.uk/",
      category: "Personal Care",
      logoUrl: "https://images.squarespace-cdn.com/content/v1/62c6e28e77ccf620da80ecc8/edb7fefb-7214-4f0a-8e84-78d83c5ea12f/Multibrands-Logo-White-01.png?format=1500w",
      fallbackIcon: Package
    },
    {
      id: 2,
      name: "Chilla",
      description: "South African beverage brand creating delicious syrups, squash drinks, and refreshing beverages.",
      url: "https://chilla.com/",
      category: "Beverages",
      logoUrl: "https://chilla.com/cdn/shop/files/chilla.svg?v=1748597172&width=320",
      fallbackIcon: Droplet
    },
    {
      id: 3,
      name: "Dallaspresso",
      description: "Premium coffee brand from Bahrain offering exceptional coffee experiences.",
      url: "https://dallaspresso.bh/",
      category: "Coffee",
      logoUrl: "https://dallaspresso.bh/wp-content/uploads/2022/01/Logo_Normal_Black_800.png",
      fallbackIcon: Coffee
    },
    {
      id: 4,
      name: "Happy Earth Organic",
      description: "Premium organic products including coconut water and different types of premium dates.",
      url: "https://happyearthorganic.com/",
      category: "Organic Foods",
      logoUrl: "https://happyearthorganic.com/cdn/shop/files/HEO_LOGO-_BLK_TM.png?v=1760343584&width=270",
      fallbackIcon: Leaf
    }
  ];

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="brands" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-navy-900 bg-clip-text text-transparent">
              Our Premium Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse portfolio of international brands bringing quality products to consumers worldwide
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((brand, index) => {
            const FallbackIcon = brand.fallbackIcon;
            
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600 to-navy-900 rounded-full filter blur-3xl"></div>
                </div>
                
                <div className="relative p-8">
                  {/* Logo Section - Centered for better display */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center p-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                      {!imageErrors[brand.id] ? (
                        <img 
                          src={brand.logoUrl} 
                          alt={`${brand.name} logo`}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(brand.id)}
                        />
                      ) : (
                        <FallbackIcon className="w-16 h-16 text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-navy-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {brand.category}
                    </span>
                  </div>
                  
                  {/* Brand Name */}
                  <h3 className="text-2xl font-bold text-center text-navy-900 mb-4 group-hover:text-blue-600 transition">
                    {brand.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-center">
                    {brand.description}
                  </p>
                  
                  {/* Visit Button - Centered */}
                  <div className="flex justify-center">
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 group-hover:gap-3"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Brands;