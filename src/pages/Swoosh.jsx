import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, ExternalLink, Search, ShoppingBag, Heart, Shield, Truck, Star, Droplet, Award, Leaf, TrendingUp } from 'lucide-react';

function Swoosh() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Swoosh Products Data
  const productsData = [
    {
      sku: "SW0001",
      brand: "Swoosh",
      barcode: "721750197931",
      product_name: "SWOOSH COCONUT WATER 200ML",
      size: "200ml",
      quantity: "24",
      description: "100% Natural Tender Coconut Water - Refreshing and hydrating",
      category: "Coconut Water",
      images: {
        front: "https://f.nooncdn.com/p/pzsku/ZAFB1D3CD07C610C840F3Z/45/1767845205/95836a62-593f-4207-99a0-cd247fd66584.jpg?width=800",
        back: "https://f.nooncdn.com/p/pzsku/ZAFB1D3CD07C610C840F3Z/45/1767845205/55b41625-ce5d-44da-afc1-d446c222f4de.jpg?width=800"
      }
    },
    {
      sku: "SW0002",
      brand: "Swoosh",
      barcode: "721750214720",
      product_name: "SWOOSH COCONUT WATER 1L",
      size: "1L",
      quantity: "12",
      description: "100% Natural Coconut Water - Perfect for family consumption",
      category: "Coconut Water",
      images: {
        front: "https://f.nooncdn.com/p/pzsku/Z1796AC2C0C2CD8C26B6DZ/45/1767810410/c33b739f-e945-457d-8922-b36707c5ee44.jpg?width=320",
        back: null
      }
    }
  ];

  // Filter products based on search
  const filteredProducts = productsData.filter(product =>
    searchTerm === '' || 
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      const images = Object.values(selectedProduct.images).filter(img => img !== null);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      const images = Object.values(selectedProduct.images).filter(img => img !== null);
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const totalProducts = productsData.length;

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 via-emerald-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Droplet className="w-20 h-20 text-green-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Swoosh
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              100% Natural Coconut Water - Pure, Refreshing, and Hydrating
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{totalProducts}</div>
                <div className="text-sm text-green-200">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-green-200">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">0%</div>
                <div className="text-sm text-green-200">Added Sugar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products by name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: Leaf, title: "100% Natural", desc: "No preservatives or artificial flavors" },
            { icon: Award, title: "Premium Quality", desc: "Hand-picked tender coconuts" },
            { icon: TrendingUp, title: "Hydrating", desc: "Rich in electrolytes and minerals" }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center group hover:shadow-lg transition">
                <div className="inline-flex p-3 bg-green-100 rounded-xl mb-4 group-hover:scale-110 transition">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Droplet className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600">No products found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Our Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, productIndex) => (
                <motion.div
                  key={product.sku}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: productIndex * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openProductModal(product)}
                >
                  {/* Badge */}
                  {/* <div className="absolute top-3 left-3 z-10">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                      {product.quantity} Packs
                    </span>
                  </div> */}
                  
                  {/* Favorite Button */}
                  {/* <button className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition" />
                  </button>
                   */}
                  {/* Product Image */}
                  <div className="relative h-56 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
                    <img 
                      src={product.images.front} 
                      alt={product.product_name}
                      className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Swoosh';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition">
                        <Eye className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-navy-900 mb-1 line-clamp-1 text-lg">
                      {product.product_name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">SKU: {product.sku}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
                        {product.size}
                      </span>
                      <button className="text-green-600 hover:text-green-800 text-sm font-semibold flex items-center gap-1">
                        View Details
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-navy-900">About Swoosh</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-2"></div>
          </div>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Swoosh brings you the purest, most refreshing coconut water sourced from premium tender coconuts. 
            Our coconut water is 100% natural with no added sugar or preservatives, packed with essential 
            electrolytes and minerals. Perfect for hydration after workout, during travel, or anytime you 
            need a healthy refreshment.
          </p>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900">{selectedProduct.product_name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-600">{selectedProduct.brand}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-600">SKU: {selectedProduct.sku}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Image Gallery */}
                  <div>
                    <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-4">
                      <img 
                        src={Object.values(selectedProduct.images).filter(img => img !== null)[currentImageIndex]} 
                        alt={selectedProduct.product_name}
                        className="w-full h-auto object-contain max-h-96"
                      />
                      
                      {Object.values(selectedProduct.images).filter(img => img !== null).length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnails */}
                    {Object.values(selectedProduct.images).filter(img => img !== null).length > 1 && (
                      <div className="flex gap-3 justify-center">
                        {Object.values(selectedProduct.images).filter(img => img !== null).map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                              currentImageIndex === idx ? 'border-green-600 shadow-md' : 'border-gray-200'
                            }`}
                          >
                            <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <Droplet className="w-5 h-5 text-green-600" />
                        Product Information
                      </h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Product Name:</span>
                          <span className="text-right">{selectedProduct.product_name}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Brand:</span>
                          <span className="text-green-600 font-semibold">{selectedProduct.brand}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">SKU:</span>
                          <span className="font-mono text-sm">{selectedProduct.sku}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Barcode:</span>
                          <span className="font-mono text-sm">{selectedProduct.barcode}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Size:</span>
                          <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm">{selectedProduct.size}</span>
                        </div>
                        {/* <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Pack Quantity:</span>
                          <span>{selectedProduct.quantity} packs</span>
                        </div> */}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 mb-6">
                      <p className="text-sm text-gray-700">{selectedProduct.description}</p>
                    </div>

                    {/* Barcode Display */}
                    {/* <div className="bg-gray-50 rounded-xl p-5 mb-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Scan Barcode</p>
                      <div className="font-mono text-xl tracking-wider text-navy-900 font-bold">
                        {selectedProduct.barcode}
                      </div>
                    </div> */}

                    {/* CTA Buttons */}
                    {/* <div className="space-y-3">
                      <a
                        href={`https://www.google.com/search?q=${selectedProduct.barcode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                      >
                        <Search className="w-4 h-4" />
                        Find on Google
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://www.noon.com/search/?q=${selectedProduct.sku}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-600 py-3.5 rounded-xl font-semibold hover:bg-green-50 transition-all duration-200"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Check on Noon
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div> */}

                    {/* Trust Badges */}
                    {/* <div className="mt-6 flex justify-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        <span>100% Natural</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Truck className="w-3 h-3" />
                        <span>Fresh Stock</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>Best Price</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Swoosh;