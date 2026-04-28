import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, ExternalLink, Search, ShoppingBag, Heart, Shield, Truck, Star, Package } from 'lucide-react';

function MultiBrands() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('All');

    const brandsData = {
        "brands": [
            {
                "brand_name": "Ultraloc",
                "logo": "https://images.squarespace-cdn.com/content/v1/62c6e28e77ccf620da80ecc8/1657702195346-L70GL10XIMGT1E5FEI80/ultraloc.jpg?format=2500w",
                "description": "Premium adhesive solutions for everyday repairs",
                "color": "from-blue-500 to-cyan-500",
                "products": [
                    {
                        "sku": "SULSNP3",
                        "brand": "Ultraloc",
                        "barcode": "5060072080336",
                        "product_name": "Super Glue Liquid",
                        "size": "3g",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z31B6EC451C6044834302Z/45/_/1773818663/218e10f2-b5aa-4aef-acaa-bb8f4b08bb73.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z31B6EC451C6044834302Z/45/_/1773818663/5cce58c6-a84d-425d-87a3-5474691ee07a.jpg?width=800"
                        }
                    },
                    {
                        "sku": "SUGSNP3",
                        "brand": "Ultraloc",
                        "barcode": "5060072080275",
                        "product_name": "Super Glue Gel",
                        "size": "3g",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z092A5F8781F6C609DBF0Z/45/_/1773818362/8c62e1bb-3528-4591-9e3e-645403f6bb4e.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z092A5F8781F6C609DBF0Z/45/_/1773818404/6c0e5c7a-c7fd-4787-9cdb-ca10450efc9e.jpg?width=800"
                        }
                    }
                ]
            },
            {
                "brand_name": "Lipice",
                "logo": "https://images.squarespace-cdn.com/content/v1/62c6e28e77ccf620da80ecc8/1657702192070-JFIMQEA6MZL93IPKQ6OF/Lipice.jpg?format=2500w",
                "description": "Natural lip care for soft, healthy lips",
                "color": "from-pink-500 to-rose-500",
                "products": [
                    {
                        "sku": "LLO1",
                        "brand": "Lipice",
                        "barcode": "5060072082361",
                        "product_name": "Original",
                        "size": "4.8g / 10ml",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/ZA93DE7B55B862B38DC68Z/45/_/1775034605/3c0388cb-379f-44cc-9623-3549f9e3dda0.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/ZA93DE7B55B862B38DC68Z/45/_/1775034605/e572af05-222c-4498-9430-21c5c3ec5cd8.jpg?width=800"
                        }
                    },
                    {
                        "sku": "LLST1",
                        "brand": "Lipice",
                        "barcode": "5060072082453",
                        "product_name": "Strawberry Touch",
                        "size": "4.8g / 10ml",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/ZC25D1A7577F78A5914F7Z/45/_/1775026304/b16d34d4-184f-49b4-a8ea-3f77538977dc.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/ZC25D1A7577F78A5914F7Z/45/_/1775026304/f25fec2a-184d-4f25-9bfd-59344f183193.jpg?width=800"
                        }
                    },
                    {
                        "sku": "LLSC1",
                        "brand": "Lipice",
                        "barcode": "5060072082545",
                        "product_name": "Suncare",
                        "size": "4.8g / 10ml",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z1D3EEAE5A8BC0E6873A6Z/45/_/1775026116/c7ebdafa-93a3-4a85-a48e-b68dd8f83baa.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z1D3EEAE5A8BC0E6873A6Z/45/_/1775026116/1bec9fc4-6ae5-42c8-ad12-a0b0243d13c3.jpg?width=800"
                        }
                    },
                    {
                        "sku": "LLFM1",
                        "brand": "Lipice",
                        "barcode": "5060072082484",
                        "product_name": "For Men",
                        "size": "4.8g / 10ml",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/ZDD6CB1C1C0C959CAB3E4Z/45/_/1775021633/0f87aa3f-ab2d-46e6-b2af-801e35049764.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/ZDD6CB1C1C0C959CAB3E4Z/45/_/1775021634/27e795a1-36ae-4b12-ac2c-e0d9a17b1c5c.jpg?width=800"
                        }
                    },
                    {
                        "sku": "LLPG1",
                        "brand": "Lipice",
                        "barcode": "5060072082606",
                        "product_name": "Pink Gloss",
                        "size": "4.8g / 10ml",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z807B3BEB04F7C34D6378Z/45/_/1775034069/306b4a61-e40a-49fe-a028-3d448745261b.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z807B3BEB04F7C34D6378Z/45/_/1775034069/499b730b-2933-46ee-9421-ca96fa9cec89.jpg?width=800"
                        }
                    }
                ]
            },
            {
                "brand_name": "Power Edge",
                "logo": "https://images.squarespace-cdn.com/content/v1/62c6e28e77ccf620da80ecc8/dd98e027-6490-4f8b-b0bd-3fc0cf1b613b/Power-Edge.jpg?format=2500w",
                "description": "Precision grooming tools for modern men",
                "color": "from-purple-500 to-indigo-500",
                "products": [
                    {
                        "sku": "RPEDP2-4",
                        "brand": "Power Edge",
                        "barcode": "5060072087915",
                        "product_name": "Power Edge 2 Poly Bag With Fixed Head",
                        "size": "4pc",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z1E9AC81417C9E421ADCAZ/45/1763204089/52aba032-9f9e-4cd2-9d84-6162f375ee76.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z1E9AC81417C9E421ADCAZ/45/_/1773660187/82851ff3-0a43-40dc-9469-dab6b6db6e4f.jpg?width=800"
                        }
                    },
                    {
                        "sku": "RPEDPB3-4",
                        "brand": "Power Edge",
                        "barcode": "5060072088905",
                        "product_name": "Power Edge 3 Poly Bag",
                        "size": "4pc",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z4D8F3AA63D225BDCF750Z/45/1763207971/d9ca323c-2d79-4da0-8e3b-edb7f5d5e8da.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z4D8F3AA63D225BDCF750Z/45/_/1773660308/2e2147dd-d799-48df-80c1-f99b51c35eb8.jpg?width=800"
                        }
                    },
                    {
                        "sku": "RPEDPB3L-4",
                        "brand": "Power Edge",
                        "barcode": "5060425689810",
                        "product_name": "Power Edge 3 Poly Bag For Ladies",
                        "size": "4pc",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z939B01F6AEF7A3B179BDZ/45/_/1773660572/8730acae-4f77-41ab-a658-8f58168de53f.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z939B01F6AEF7A3B179BDZ/45/_/1773660572/8cb1ec67-d64d-434a-8f18-c5c1463eda7b.jpg?width=800"
                        }
                    },
                    {
                        "sku": "RPER4-5",
                        "brand": "Power Edge",
                        "barcode": "5060072088042",
                        "product_name": "Power Edge System 4 Refill Razor",
                        "size": "5+1",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z98B05EE590A8CE94A7B6Z/45/_/1773660082/ab712d82-2d1f-4f25-9199-c1501bd83545.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z98B05EE590A8CE94A7B6Z/45/_/1773660082/8e59e0d6-bfcf-4064-9b18-04981771d71c.jpg?width=800"
                        }
                    }
                ]
            },
            {
                "brand_name": "Duraplast",
                "logo": "https://images.squarespace-cdn.com/content/v1/62c6e28e77ccf620da80ecc8/d53f9cb1-e13c-42a9-825d-1ee4216967d6/Duraplast.jpg?format=2500w",
                "description": "Durable plastic products for everyday use",
                "color": "from-green-500 to-emerald-500",
                "products": [
                    {
                        "sku": "PDF20M",
                        "brand": "Duraplast",
                        "barcode": "5060072081661",
                        "product_name": "Fabric 20s Multiple",
                        "size": "20's",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z7F7148B4243B0328323DZ/45/_/1774420575/045ab57c-dcee-4540-add5-5eddc043ec8d.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z7F7148B4243B0328323DZ/45/_/1774429027/9bf70bb3-a71d-42bd-9f72-c636245878a7.jpg?width=800"
                        }
                    },
                    {
                        "sku": "PDF20C",
                        "brand": "Duraplast",
                        "barcode": "5060072081630",
                        "product_name": "Fabric 20s Classic",
                        "size": "20's",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/ZED0587B838E4069186D3Z/45/_/1771497309/19b26fe6-a922-4509-86c1-a92fdc4f43eb.jpg?width=800",
                            "back": null
                        }
                    },
                    {
                        "sku": "PDP20M",
                        "brand": "Duraplast",
                        "barcode": "5060072081081",
                        "product_name": "EVA 20s Multiple",
                        "size": "20's",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z2684797E68F970F00865Z/45/_/1771493967/6bf01fd7-e46e-4467-854a-237412e8f0dd.jpg?width=800",
                            "back": null
                        }
                    },
                    {
                        "sku": "PDP40M",
                        "brand": "Duraplast",
                        "barcode": "5060072081128",
                        "product_name": "EVA 40s Multiple",
                        "size": "40's",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z60927C531D40F9F295C5Z/45/1763294181/cab8325c-f904-4b41-adac-ea8bee179b40.jpg?width=800",
                            "back": null
                        }
                    },
                    {
                        "sku": "PDP20C",
                        "brand": "Duraplast",
                        "barcode": "5060072081050",
                        "product_name": "EVA 20s Classic",
                        "size": "20's",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z2684797E68F970F00865Z/45/_/1771493967/6bf01fd7-e46e-4467-854a-237412e8f0dd.jpg?width=800",
                            "back": null
                        }
                    },
                    {
                        "sku": "PDF40M",
                        "brand": "Duraplast",
                        "barcode": "5060072081692",
                        "product_name": "Fabric 40s Multiple",
                        "size": "40's",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z6B260EF10FB66FB9B374Z/45/_/1773819613/d17c1f15-1b53-40ab-a6c8-f83ca4a1f126.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z6B260EF10FB66FB9B374Z/45/_/1773819900/3c0ad5fd-6985-4b60-b12c-09f6d9d94c2e.jpg?width=800"
                        }
                    }
                ]
            },
            {
                "brand_name": "Fluoridine",
                "logo": "https://images.squarespace-cdn.com/content/v1/62c6e28e77ccf620da80ecc8/1657702191405-Y6GU1287SNZ1ZG5K3WG5/Flourodine.jpg?format=2500w",
                "description": "products for everyday use",
                "color": "from-green-500 to-emerald-500",
                "products": [
                    {
                        "sku": "TFLFA100",
                        "brand": "Fluoridine",
                        "barcode": "5060072089254",
                        "product_name": "Fresh Active Toothpaste",
                        "size": "100ml X 1",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z280B669611DD9E747625Z/45/_/1773817154/3ee29282-17c6-402c-a4e4-3669c7a29af8.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z280B669611DD9E747625Z/45/_/1773817230/6d80857c-6949-4b94-b7a4-1bd4a746a660.jpg?width=800"
                        }
                    },
                    {
                        "sku": "TFLUA100",
                        "brand": "Fluoridine",
                        "barcode": "5060072086710",
                        "product_name": "Ultra Active Toothpaste",
                        "size": "100ml X 1",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z3B0C39A9516AC2F34A84Z/45/_/1774936701/7c499473-4eb0-44b7-a698-72f43aad6841.jpg?width=800",
                            "back": null
                        }
                    },
                    {
                        "sku": "TFLOW100",
                        "brand": "Fluoridine",
                        "barcode": "5060072086697",
                        "product_name": "Oxygen White ToothPaste",
                        "size": "100ml X 1",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z7F6CB3FE65E5FDC78B73Z/45/_/1774863305/4cce87da-6e30-400f-a7d3-bc9e3efe914c.jpg?width=800",
                            "back": null
                        }
                    },
                    {
                        "sku": "TFLUS100",
                        "brand": "Fluoridine",
                        "barcode": "5060072084532",
                        "product_name": "Sensitive Toothpaste",
                        "size": "100ml X 1",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z551429E066724FD600C5Z/45/_/1773817720/104dc1e0-1054-4ebf-a986-ae626b908ccd.jpg?width=800",
                            "back": null
                        }
                    },
                    {
                        "sku": "TFLD1",
                        "brand": "Fluoridine",
                        "barcode": "5060072082804",
                        "product_name": "Deep clean Single Toothbrush",
                        "size": "1",
                        "images": {
                            "front": "https://fluorodine.eu.com/images/active-deep-clean-img.png",
                            "back": null
                        }
                    },
                    {
                        "sku": "TFLA1",
                        "brand": "Fluoridine",
                        "barcode": "5060072082835",
                        "product_name": "Ultra active Single Toothbrush",
                        "size": "1",
                        "images": {
                            "front": "https://fluorodine.eu.com/images/ultra-active-clean-img.png",
                            "back": null
                        }
                    },
                    {
                        "sku": "TFLAC1",
                        "brand": "Fluoridine",
                        "barcode": "5060072085539",
                        "product_name": "Active Contour Single Toothbrush",
                        "size": "1",
                        "images": {
                            "front": "https://fluorodine.eu.com/images/active-contour-img.png",
                            "back": null
                        }
                    },
                    {
                        "sku": "TFLFM1",
                        "brand": "Fluoridine",
                        "barcode": "5060072085577",
                        "product_name": "Flex Max Single Toothbrush",
                        "size": "1",
                        "images": {
                            "front": "https://f.nooncdn.com/p/df75875bad1b5f32b9c70f1c3f045623%7Cpzsku/ZC4A198FEE6F0BE2DC372Z/45/1768545578/e3276dc7-cfa6-4ee6-88e1-df7e272c436b.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/df75875bad1b5f32b9c70f1c3f045623%7Cpzsku/ZC4A198FEE6F0BE2DC372Z/45/1768546154/95db1e97-a8b0-4a2f-95c9-36b9ab35cc5d.jpg?width=800"
                        }
                    },
                    {
                        "sku": "TFLTK",
                        "brand": "Fluoridine",
                        "barcode": "5060072087823",
                        "product_name": "Toothbrush & 20G Toothpaste Travel Kit",
                        "size": "12 ml x1x1",
                        "images": {
                            "front": "https://f.nooncdn.com/p/pzsku/Z4FE3F3DF4106959032EEZ/45/1767856261/79423746-21f9-4c95-b1b0-4443243f97e5.jpg?width=800",
                            "back": "https://f.nooncdn.com/p/pzsku/Z4FE3F3DF4106959032EEZ/45/1767856330/379c4848-68d9-4c9c-9ce2-7b363bf044ee.jpg?width=800"
                        }
                    }
                ]
            }

        ]
    };

    // Get unique brands for filter
    // Get unique brands for filter
    const brandNames = ['All', ...brandsData.brands.map(b => b.brand_name)];

    // Filter products based on search and brand
    const filteredBrands = brandsData.brands.filter(brand => {
        if (selectedBrand !== 'All' && brand.brand_name !== selectedBrand) return false;
        if (searchTerm) {
            const hasMatchingProduct = brand.products.some(product =>
                product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.sku.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return hasMatchingProduct;
        }
        return true;
    });

    const openProductModal = (product, brandName) => {
        setSelectedProduct({ ...product, brandName });
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
    const totalProducts = brandsData.brands.reduce((acc, brand) => acc + brand.products.length, 0);

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Hero Section with Stats */}
            <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-navy-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>

                <div className="container mx-auto px-6 py-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            MultiBrands
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                            Discover our premium range of personal care products from trusted brands worldwide
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">{brandsData.brands.length}</div>
                                <div className="text-sm text-blue-200">Premium Brands</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">{totalProducts}</div>
                                <div className="text-sm text-blue-200">Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">4+</div>
                                <div className="text-sm text-blue-200">Countries</div>
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
                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products by name or SKU..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            />
                        </div>

                        {/* Brand Filter */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                            {brandNames.map((brand) => (
                                <button
                                    key={brand}
                                    onClick={() => setSelectedBrand(brand)}
                                    className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 ${selectedBrand === brand
                                            ? 'bg-gradient-to-r from-blue-600 to-navy-900 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {brand}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Brands Sections */}
                {filteredBrands.length === 0 ? (
                    <div className="text-center py-20">
                        <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-600">No products found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your search or filter</p>
                    </div>
                ) : (
                    filteredBrands.map((brand, brandIndex) => {
                        const filteredProducts = searchTerm
                            ? brand.products.filter(product =>
                                product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                product.sku.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            : brand.products;

                        if (filteredProducts.length === 0) return null;

                        return (
                            <motion.div
                                key={brand.brand_name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: brandIndex * 0.1 }}
                                className="mb-16"
                            >
                                {/* Brand Header - With Logo */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-4 border-b-2 border-gray-100">
                                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                                        {/* Brand Logo */}
                                        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2">
                                            <img
                                                src={brand.logo}
                                                alt={brand.brand_name}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = 'https://via.placeholder.com/64x64?text=Logo';
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h2 className="text-3xl font-bold text-navy-900">{brand.brand_name}</h2>
                                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                                    {filteredProducts.length} Products
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm">{brand.description}</p>
                                        </div>
                                    </div>

                                    {/* Optional: Secondary Logo (can remove if not needed) */}
                                    {/* <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center p-2 opacity-50">
                    <img 
                      src={brand.logo} 
                      alt={brand.brand_name}
                      className="w-full h-full object-contain"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div> */}
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
                                            onClick={() => openProductModal(product, brand.brand_name)}
                                        >
                                            {/* Badge */}
                                            <div className="absolute top-3 left-3 z-10">
                                                <span className="bg-gradient-to-r from-blue-600 to-navy-900 text-white text-xs px-2 py-1 rounded-full">
                                                    New
                                                </span>
                                            </div>

                                            {/* Favorite Button */}
                                            <button className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition" />
                                            </button>

                                            {/* Product Image */}
                                            <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                                <img
                                                    src={product.images.front}
                                                    alt={product.product_name}
                                                    className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition">
                                                        <Eye className="w-6 h-6 text-blue-600" />
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
                                                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                                                        {product.size}
                                                    </span>
                                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1">
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
                                        <span className="text-sm text-gray-600">{selectedProduct.brandName}</span>
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
                                        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-4">
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
                                                        className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-blue-600 shadow-md' : 'border-gray-200'
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
                                                <Package className="w-5 h-5 text-blue-600" />
                                                Product Information
                                            </h3>
                                            <div className="space-y-3 text-gray-700">
                                                <div className="flex justify-between py-2 border-b border-gray-100">
                                                    <span className="font-medium">Product Name:</span>
                                                    <span className="text-right">{selectedProduct.product_name}</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-gray-100">
                                                    <span className="font-medium">Brand:</span>
                                                    <span className="text-blue-600 font-semibold">{selectedProduct.brandName}</span>
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
                                                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm">{selectedProduct.size}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Barcode Display */}
                                        {/* <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 mb-6 text-center">
                                            <p className="text-sm text-gray-600 mb-2">Scan Barcode</p>
                                            <div className="font-mono text-xl tracking-wider text-navy-900 font-bold">
                                                {selectedProduct.barcode}
                                            </div>
                                            <div className="mt-2 w-48 h-12 bg-white mx-auto rounded flex items-center justify-center text-xs text-gray-400">
                                                [Barcode Image Placeholder]
                                            </div>
                                        </div> */}

                                        {/* CTA Buttons */}
                                        {/* <div className="space-y-3">
                                            <a
                                                href={`https://www.google.com/search?q=${selectedProduct.barcode}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                                            >
                                                <Search className="w-4 h-4" />
                                                Find on Google
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={`https://www.noon.com/search/?q=${selectedProduct.sku}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full border-2 border-blue-600 text-blue-600 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200"
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
                                                <span>Genuine Products</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Truck className="w-3 h-3" />
                                                <span>Fast Shipping</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                <span>Best Prices</span>
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

export default MultiBrands;