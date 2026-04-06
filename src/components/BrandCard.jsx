import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

function BrandCard({ brand, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-2 bg-gradient-to-r from-blue-600 to-navy-900"></div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-navy-900 group-hover:text-blue-600 transition">
            {brand.name}
          </h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {brand.category}
          </span>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">{brand.description}</p>
        <a
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition gap-2 group/link"
        >
          Visit Website
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition" />
        </a>
      </div>
    </motion.div>
  );
}

export default BrandCard;