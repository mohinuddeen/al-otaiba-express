import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function Subsidiaries() {
  const subsidiaries = [
    {
      id: 1,
      name: "AOE Real Estate",
      description: "Premium real estate solutions in Dubai, UAE",
      path: "/real-estate",  // Changed from url to path
      icon: "https://alotaiba.ae/public/assets/images/logos/aog.png",
      alt: "AOE Real Estate Logo"
    },
    {
      id: 2,
      name: "German Supplements",
      description: "Premium German supplements for your fitness journey",
      path: "/german-supplements",  // Changed from url to path
      icon: "https://germansupplements.de/cdn/shop/files/download_1.png?v=1771008734&width=680",
      alt: "German Supplements Logo"
    },
    {
      id: 3,
      name: "German Health Hub",
      description: "Healthcare services including blood tests, IV drips, and more",
      path: "/german-health-hub",  // Changed from url to path
      icon: "https://germansupplements.de/cdn/shop/files/download_1.png?v=1771008734&width=680",
      alt: "German Health Hub Logo"
    },
    {
      id: 4,
      name: "Go",
      description: "E-commerce for Electronics, Garden, Household, Stationery & Furniture",
      path: "/go",  // Changed from url to path
      icon: "https://go.ae/images/logos/16/Go-ae-small-mobile-padding-007.png",
      alt: "Go Logo"
    }
  ];

  return (
    <section id="subsidiaries" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Subsidiaries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AOE proudly owns and operates these successful businesses across various sectors
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subsidiaries.map((sub, index) => {
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-green-500 to-emerald-500",
              "from-purple-500 to-pink-500",
              "from-orange-500 to-red-500"
            ];
            
            return (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <Link to={sub.path}>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradients[index]}`}></div>
                  <div className="p-6 text-center">
                    {/* Icon/Logo */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={sub.icon} 
                          alt={sub.alt}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/80x80?text=Logo';
                          }}
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{sub.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{sub.description}</p>
                    <span className="inline-flex items-center text-blue-400 font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Subsidiaries;