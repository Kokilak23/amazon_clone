import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';

export function Header() {
  const { items } = useCartStore();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center">
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
            >
              ShopHub
            </motion.span>
          </Link>

          {/* Delivery Location */}
          <Link to="/select-location" className="ml-4 hidden md:flex items-center group">
            <MapPin className="h-5 w-5 text-yellow-400 mr-1" />
            <div>
              <div className="text-xs text-gray-400">Deliver to</div>
              <div className="text-sm font-bold group-hover:text-yellow-400 transition-colors">
                Select Location
              </div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <motion.div
              initial={{ opacity: 0, width: "80%" }}
              animate={{ opacity: 1, width: "100%" }}
              className="flex"
            >
              <select className="px-3 rounded-l-md border-r border-gray-300 focus:outline-none bg-gray-100 text-gray-700 font-medium">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Living</option>
                <option>Books</option>
                <option>Sports</option>
              </select>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full py-2.5 px-4 pr-12 rounded-r-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-yellow-400 rounded-r-md hover:bg-yellow-500 transition-colors">
                  <Search className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link to="/account" className="hidden md:flex items-center group">
              <div>
                <div className="text-xs text-gray-400">Welcome</div>
                <div className="text-sm font-bold group-hover:text-yellow-400 transition-colors">
                  Sign in / Register
                </div>
              </div>
            </Link>
            <Link to="/orders" className="hidden md:flex items-center group">
              <div>
                <div className="text-xs text-gray-400">Your</div>
                <div className="text-sm font-bold group-hover:text-yellow-400 transition-colors">
                  Orders & Returns
                </div>
              </div>
            </Link>
            <Link to="/wishlist" className="hidden md:flex items-center group">
              <div className="relative">
                <Heart className="h-6 w-6 group-hover:text-yellow-400 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
            <Link to="/cart" className="flex items-center group">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 group-hover:text-yellow-400 transition-colors" />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {items.length}
                </motion.span>
              </div>
              <span className="ml-1 hidden md:inline group-hover:text-yellow-400 transition-colors">Cart</span>
            </Link>
          </nav>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center h-10 -mx-4 px-4 bg-gray-800">
          <button className="flex items-center hover:text-yellow-400 transition-colors mr-4">
            <Menu className="h-5 w-5 mr-1" />
            <span>All Categories</span>
          </button>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            <Link to="/deals" className="hover:text-yellow-400 transition-colors whitespace-nowrap">Today's Deals</Link>
            <Link to="/new-arrivals" className="hover:text-yellow-400 transition-colors whitespace-nowrap">New Arrivals</Link>
            <Link to="/trending" className="hover:text-yellow-400 transition-colors whitespace-nowrap">Trending Now</Link>
            <Link to="/customer-service" className="hover:text-yellow-400 transition-colors whitespace-nowrap">Customer Service</Link>
            <Link to="/gift-cards" className="hover:text-yellow-400 transition-colors whitespace-nowrap">Gift Cards</Link>
            <Link to="/sell" className="hover:text-yellow-400 transition-colors whitespace-nowrap">Sell with Us</Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}