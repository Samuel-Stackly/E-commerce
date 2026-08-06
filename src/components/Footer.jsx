import { NavLink } from "react-router-dom";
import { Twitter, Facebook, Instagram, Youtube, PinIcon as Pinterest } from "lucide-react";

function Footer() {
  return (
    <footer 
      className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300 mx-auto"
      style={{
        width: '100%',
        maxWidth: '1920px',
        opacity: '1',
      }}
    >
      <div className="mx-auto px-4" style={{ width: '100%', maxWidth: '1300px' }}>
        
        {/* Top Section: Links & Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 items-start">
          
          {/* Column 1: Brand / Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-black dark:text-white uppercase tracking-wider text-sm">
              SWOO - 1ST NYC TECH ONLINE MARKET
            </h3>
            
            <div>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">HOTLINE 24/7</p>
              <p className="text-2xl font-bold text-[#1ABA1A]">(025) 3686 25 16</p>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              257 Thatcher Road St, Brooklyn, Manhattan, NY 10092<br />
              contact@Swootechmart.com
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#1ABA1A] hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#1ABA1A] hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#1ABA1A] hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#1ABA1A] hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#1ABA1A] hover:text-white transition-colors">
                <Pinterest size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Top Categories */}
          <div>
            <h4 className="font-bold text-black dark:text-white text-sm mb-4 uppercase tracking-wider">Top Categories</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Laptops</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">PC & Computers</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Cell Phones</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Tablets</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Gaming & VR</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Networks</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Cameras</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Sounds</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Office</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-black dark:text-white text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">About Swoo</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Contact</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Career</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Blog</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Sitemap</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Store Locations</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Help Center */}
          <div>
            <h4 className="font-bold text-black dark:text-white text-sm mb-4 uppercase tracking-wider">Help Center</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Customer Service</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Policy</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Terms & Conditions</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Trach Order</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">FAQs</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">My Account</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Product Support</NavLink></li>
            </ul>
          </div>

          {/* Column 5: Partner */}
          <div>
            <h4 className="font-bold text-black dark:text-white text-sm mb-4 uppercase tracking-wider">Partner</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Become Seller</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Affiliate</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Advertise</NavLink></li>
              <li><NavLink to="#" className="hover:text-[#1ABA1A] transition-colors">Partnership</NavLink></li>
            </ul>
          </div>

        </div>

        {/* Middle Section: Currency/Language Selectors & Newsletter Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-gray-100 dark:border-gray-800 mb-12">
          
          {/* Selectors */}
          <div className="lg:col-span-4 flex items-center space-x-3">
            <select className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-sm text-black dark:text-white outline-none cursor-pointer">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>

            <select className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-sm text-black dark:text-white outline-none cursor-pointer">
              <option>🇺🇸 Eng</option>
              <option>🇪🇸 Esp</option>
              <option>🇫🇷 Fra</option>
            </select>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
              <h4 className="font-bold text-sm text-black dark:text-white">
                SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER
              </h4>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-transparent text-sm text-black dark:text-white outline-none placeholder:text-gray-400"
                  required
                />
                <button 
                  type="submit" 
                  className="text-xs font-bold text-[#1ABA1A] hover:text-[#159a15] uppercase tracking-wider whitespace-nowrap ml-4"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              By subscribing, you&apos;re accepted the our <span className="underline cursor-pointer">Policy</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Payment Methods, Mobile Site */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
          
          <p>© 2024 <span className="font-semibold text-black dark:text-white">Shawonetc3</span> . All Rights Reserved</p>

          {/* Payment Icons */}
          <div className="flex items-center space-x-3">
            <span className="font-bold text-blue-800 px-2 py-1 bg-gray-50 rounded border border-gray-200">PayPal</span>
            <span className="font-bold text-red-600 px-2 py-1 bg-gray-50 rounded border border-gray-200">mastercard</span>
            <span className="font-bold text-blue-600 px-2 py-1 bg-gray-50 rounded border border-gray-200">VISA</span>
            <span className="font-bold text-purple-600 px-2 py-1 bg-gray-50 rounded border border-gray-200">stripe</span>
            <span className="font-bold text-teal-700 px-2 py-1 bg-gray-50 rounded border border-gray-200">Klarna.</span>
          </div>

          <NavLink to="#" className="text-[#1ABA1A] font-semibold hover:underline">
            Mobile Site
          </NavLink>

        </div>

      </div>
    </footer>
  );
}

export default Footer;