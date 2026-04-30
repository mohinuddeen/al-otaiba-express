import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, ExternalLink, Search, ShoppingBag, Heart, Shield, Truck, Star, Coffee, Sparkles, Award, FileText } from 'lucide-react';

function Dallaspresso() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const presentationLink = "https://drive.google.com/file/d/1Ygc9X-io08TG6wIQ_VGdkpXJmSgJ7dxR/view?usp=drive_link";
  // Dallaspresso Data
  const categoriesData = {
    "categories": [
      {
        "category_name": "DULCE GUSTO",
        "icon": Coffee,
        "description": "Premium coffee capsules compatible with Dolce Gusto machines",
        "color": "from-amber-500 to-orange-500",
        "products": [
          {
            "sku": "DO37525",
            "brand": "Dallaspresso",
            "barcode": "6084012232646",
            "product_name": "Dallaspresso Cappuccino",
            "size": "8 Capsules",
            "quantity": "12",
            "category": "DULCE GUSTO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/Z909928DECAAEEBA6B551Z/45/_/1773221020/a384a368-cebe-45a2-af54-97d124b319b8.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/Z909928DECAAEEBA6B551Z/45/_/1773221054/59fa9149-6a2d-438f-92a8-216636beb918.jpg?width=800"
            }
          },
          {
            "sku": "DO37526",
            "brand": "Dallaspresso",
            "barcode": "6084012230338",
            "product_name": "Dallaspresso Karak Cardamom",
            "size": "8 Capsules",
            "quantity": "12",
            "category": "DULCE GUSTO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/Z3BA635C3867C8D0E1941Z/45/_/1771826532/d5f8349d-f29d-437d-88ea-b124ba5d7674.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/Z3BA635C3867C8D0E1941Z/45/_/1771826462/af0d226c-43e8-4a43-951c-242e73efb704.jpg?width=800"
            }
          },
          {
            "sku": "DO37527",
            "brand": "Dallaspresso",
            "barcode": "6084012230321",
            "product_name": "Dallaspresso Karak Royal",
            "size": "8 Capsules",
            "quantity": "12",
            "category": "DULCE GUSTO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/Z9E7DD9C6EE4A75294540Z/45/_/1773403628/19698fc8-7dd7-43a5-a289-17623bdce23f.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/Z9E7DD9C6EE4A75294540Z/45/_/1773403716/3f6cf618-a8ad-4d63-87e8-f473e8cd72fa.jpg?width=800"
            }
          },
          {
            "sku": "DO37528",
            "brand": "Dallaspresso",
            "barcode": "6084012232639",
            "product_name": "Dallaspresso Vanilla Latte",
            "size": "8 Capsules",
            "quantity": "12",
            "category": "DULCE GUSTO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/ZACDA10BBDCB0494C3249Z/45/_/1771485522/ac2703c6-0f22-4f91-a322-62e931c5591c.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/ZACDA10BBDCB0494C3249Z/45/_/1771485949/d8307263-cc6d-43cf-b0ef-0f44346ec98f.jpg?width=800"
            }
          },
          {
            "sku": "DO37529",
            "brand": "Dallaspresso",
            "barcode": "6084012232615",
            "product_name": "Dallaspresso Caramel Macchiato",
            "size": "8 Capsules",
            "quantity": "12",
            "category": "DULCE GUSTO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/Z5D5C621EB09179BEFCFEZ/45/_/1773752079/1302328f-c538-4f7d-9245-6b37506f6b95.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/Z5D5C621EB09179BEFCFEZ/45/_/1773752079/8e111492-5907-465e-873a-82ad2513ca9b.jpg?width=800"
            }
          },
          {
            "sku": "DO37530",
            "brand": "Dallaspresso",
            "barcode": "6084012232684",
            "product_name": "Dallaspresso Americano",
            "size": "8 Capsules",
            "quantity": "12",
            "category": "DULCE GUSTO",
            "images": {
              "front": "https://f.nooncdn.com/p/df75875bad1b5f32b9c70f1c3f045623%7Cpzsku/Z5F6B2183A826F4D7B715Z/45/1771328642/21e7ee44-f9ee-4ccb-825f-5876daaddd4f.jpg?width=800",
              "back": "https://f.nooncdn.com/p/df75875bad1b5f32b9c70f1c3f045623%7Cpzsku/Z5F6B2183A826F4D7B715Z/45/1771334306/f9c31dc1-bedb-4d91-9ca1-6a208e599e13.jpg?width=800"
            }
          }
        ]
      },
      {
        "category_name": "NESPRESSO",
        "icon": Sparkles,
        "description": "Premium coffee capsules compatible with Nespresso machines",
        "color": "from-green-600 to-emerald-500",
        "products": [
          {
            "sku": "DO17668",
            "brand": "Dallaspresso",
            "barcode": "6084012230048",
            "product_name": "Dallaspresso Intenso",
            "size": "10 Capsules",
            "quantity": "12",
            "category": "NESPRESSO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/Z17F203757AE89658B70DZ/45/_/1774425767/c0b48adf-b2da-428d-ae86-d69af44722a3.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/Z17F203757AE89658B70DZ/45/_/1774425767/fa377d2c-e0bc-4c70-b9bc-f020cc4dd5ed.jpg?width=800"
            }
          },
          {
            "sku": "DO17674",
            "brand": "Dallaspresso",
            "barcode": "6084012230055",
            "product_name": "Dallaspresso Turkish",
            "size": "10 Capsules",
            "quantity": "12",
            "category": "NESPRESSO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/Z5995F047630F88179417Z/45/_/1774421383/d1167828-5bd7-44fd-8019-ca855906ccb1.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/Z5995F047630F88179417Z/45/_/1774421383/a6d7cc3a-1411-41ba-9747-7f71ae46949c.jpg?width=800"
            }
          },
          {
            "sku": "DO17748",
            "brand": "Dallaspresso",
            "barcode": "6084012230406",
            "product_name": "Dallaspresso Hazelnut",
            "size": "10 Capsules",
            "quantity": "12",
            "category": "NESPRESSO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/ZD2DBEB401E69544AFEBDZ/45/_/1774423959/28e53f89-117f-4e9d-9808-b3425f9b7c48.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/ZD2DBEB401E69544AFEBDZ/45/_/1774423959/b0dcc0a6-b164-4f7a-8b7f-bd23724a2b35.jpg?width=800"
            }
          },
          {
            "sku": "DO17658",
            "brand": "Dallaspresso",
            "barcode": "6084012230031",
            "product_name": "Dallaspresso Arabiah",
            "size": "10 Capsules",
            "quantity": "12",
            "category": "NESPRESSO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/ZB572ADCD6AFAAF0E0A18Z/45/_/1774422420/187bd410-e8ed-4f74-ab91-1cc389f8e068.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/ZB572ADCD6AFAAF0E0A18Z/45/_/1774422420/bb029198-e76e-4232-b981-dda74afb9554.jpg?width=800"
            }
          },
          {
            "sku": "DO17666",
            "brand": "Dallaspresso",
            "barcode": "6084012230062",
            "product_name": "Dallaspresso Signature",
            "size": "10 Capsules",
            "quantity": "12",
            "category": "NESPRESSO",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/Z2ED6F285BAD52804A373Z/45/_/1773384881/912d2173-0527-4d3a-be2b-f2b91fd2710f.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/Z2ED6F285BAD52804A373Z/45/_/1773385557/5f95f21c-606f-4c12-b79f-6c1fd8a29e55.jpg?width=800"
            }
          }
        ]
      },
      {
        "category_name": "SACHETS KARAK",
        "icon": Award,
        "description": "Traditional Karak tea sachets for authentic Middle Eastern flavor",
        "color": "from-red-600 to-rose-500",
        "products": [
          {
            "sku": "DO37068",
            "brand": "Dallaspresso",
            "barcode": "6084012232578",
            "product_name": "Karak Cardamom Sachet",
            "size": "Sachet",
            "quantity": "10",
            "category": "SACHETS KARAK",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/Z876E0F7008A459B90084Z/45/_/1773481681/33983eb8-8975-47c3-adb4-0fc9a1099e4e.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/Z876E0F7008A459B90084Z/45/_/1773481813/c546cea5-9f59-45d5-b717-a022a467137a.jpg?width=800"
            }
          },
          {
            "sku": "DO37073",
            "brand": "Dallaspresso",
            "barcode": "6084012232554",
            "product_name": "Karak Saffron Sachet",
            "size": "Sachet",
            "quantity": "10",
            "category": "SACHETS KARAK",
            "images": {
              "front": "https://f.nooncdn.com/p/pzsku/ZDA5F9273FA4B55FACB60Z/45/_/1774348943/54cb77d4-42f3-4918-b80e-139b71440787.jpg?width=800",
              "back": "https://f.nooncdn.com/p/pzsku/ZDA5F9273FA4B55FACB60Z/45/_/1774350751/da28fc8b-b42f-47ba-aa88-24b0d3cf9895.jpg?width=800"
            }
          }
        ]
      }
    ]
  };

  // Get unique categories for filter
  const categoryNames = ['All', ...categoriesData.categories.map(c => c.category_name)];
  
  // Filter products based on search and category
  const filteredCategories = categoriesData.categories.filter(category => {
    if (selectedCategory !== 'All' && category.category_name !== selectedCategory) return false;
    if (searchTerm) {
      const hasMatchingProduct = category.products.some(product =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return hasMatchingProduct;
    }
    return true;
  });

  const openProductModal = (product, categoryName) => {
    setSelectedProduct({ ...product, categoryName });
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

  // Calculate total products
  const totalProducts = categoriesData.categories.reduce((acc, category) => acc + category.products.length, 0);
  const totalCategories = categoriesData.categories.length;

 return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Coffee className="w-20 h-20 text-amber-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Dallaspresso
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8">
              Premium coffee capsules and Karak tea sachets for an authentic Middle Eastern coffee experience
            </p>
            
            {/* View Presentation Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <a
                href={presentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 border border-white/30"
              >
                <FileText className="w-5 h-5" />
                View Brand Presentation
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
            
            {/* Stats */}
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{totalCategories}</div>
                <div className="text-sm text-amber-200">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{totalProducts}</div>
                <div className="text-sm text-amber-200">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Bahrain</div>
                <div className="text-sm text-amber-200">Origin</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products by name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categoryNames.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-amber-600 to-orange-700 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Categories Sections */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20">
            <Coffee className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600">No products found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter</p>
          </div>
        ) : (
          filteredCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const filteredProducts = searchTerm 
              ? category.products.filter(product =>
                  product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  product.sku.toLowerCase().includes(searchTerm.toLowerCase())
                )
              : category.products;
            
            if (filteredProducts.length === 0) return null;
            
            return (
              <motion.div
                key={category.category_name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-16"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-200">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-3xl font-bold text-navy-900">{category.category_name}</h2>
                      <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                        {filteredProducts.length} Products
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, productIndex) => (
                    <motion.div
                      key={product.sku}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: productIndex * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      onClick={() => openProductModal(product, category.category_name)}
                    >
                      {/* Badge */}
                      {/* <div className="absolute top-3 left-3 z-10">
                        <span className={`bg-gradient-to-r ${category.color} text-white text-xs px-2 py-1 rounded-full`}>
                          {product.quantity} Packs
                        </span>
                      </div> */}
                      
                      {/* Favorite Button */}
                      {/* <button className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition" />
                      </button> */}
                      
                      {/* Product Image */}
                      <div className="relative h-56 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                        <img 
                          src={product.images.front} 
                          alt={product.product_name}
                          className="w-full h-full object-cover p-6 transform group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200?text=Dallaspresso';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition">
                            <Eye className="w-6 h-6 text-amber-600" />
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
                          <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full font-medium">
                            {product.size}
                          </span>
                          <button className="text-amber-600 hover:text-amber-800 text-sm font-semibold flex items-center gap-1">
                            View Details
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })
        )}
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
                    <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-4">
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
                              currentImageIndex === idx ? 'border-amber-600 shadow-md' : 'border-gray-200'
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
                        <Coffee className="w-5 h-5 text-amber-600" />
                        Product Information
                      </h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Product Name:</span>
                          <span className="text-right">{selectedProduct.product_name}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Brand:</span>
                          <span className="text-amber-600 font-semibold">{selectedProduct.brand}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Category:</span>
                          <span>{selectedProduct.categoryName}</span>
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
                          <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded-full text-sm">{selectedProduct.size}</span>
                        </div>
                        {/* <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium">Pack Quantity:</span>
                          <span>{selectedProduct.quantity} packs</span>
                        </div> */}
                      </div>
                    </div>

                    {/* Barcode Display */}
                    {/* <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 mb-6 text-center">
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
                        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-600 to-orange-700 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                      >
                        <Search className="w-4 h-4" />
                        Find on Google
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://www.noon.com/search/?q=${selectedProduct.sku}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full border-2 border-amber-600 text-amber-600 py-3.5 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-200"
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
                        <span>Premium Quality</span>
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

export default Dallaspresso;