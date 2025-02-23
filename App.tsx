import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=2000&q=80",
    title: "Discover the Latest Trends",
    description: "Shop the newest arrivals in fashion, electronics, and more",
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2000&q=80",
    title: "Premium Electronics",
    description: "Explore cutting-edge technology at unbeatable prices",
  },
  {
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=2000&q=80",
    title: "Home & Living Essentials",
    description: "Transform your space with our curated collection",
  },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="rounded-xl overflow-hidden"
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[500px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                      <div className="text-white ml-16 max-w-xl">
                        <motion.h1
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-5xl font-bold mb-4"
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-xl mb-8"
                        >
                          {slide.description}
                        </motion.p>
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-yellow-400 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-colors"
                        >
                          Shop Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Featured Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Electronics & Gadgets",
                  image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
                  items: "50,000+ items"
                },
                {
                  title: "Fashion & Accessories",
                  image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
                  items: "100,000+ items"
                },
                {
                  title: "Home & Living",
                  image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400",
                  items: "35,000+ items"
                },
                {
                  title: "Books & Stationery",
                  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
                  items: "25,000+ items"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="aspect-square relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                        <p className="text-sm text-gray-200">{category.items}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Trending Now</h2>
              <button className="text-yellow-600 hover:text-yellow-700 font-medium">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400"
                      alt="Product"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                      -20%
                    </span>
                    <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Premium Wireless Headphones</h3>
                    <p className="text-gray-600 text-sm mb-4">Experience crystal-clear sound with active noise cancellation</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">$199.99</span>
                        <span className="text-sm text-gray-500 line-through ml-2">$249.99</span>
                      </div>
                      <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </Router>
  );
}

export default App;