import React, { useState } from 'react';
import { 
  Check, ShoppingCart, Truck, Heart, Twitter, Facebook, Instagram, Youtube, Globe, X, ChevronLeft, ChevronRight, Trash2, RefreshCw 
} from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

// ==========================================
// 1. RELATED PRODUCTS COMPONENT
// ==========================================
function RelatedProducts() {
  const relatedProducts = [
    {
      id: 'srok-smartphone',
      badge: { text: 'SAVE $199.00', type: 'save' },
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80',
      reviews: '(152)',
      name: 'SROK Smart Phone 128GB, Oled Retina',
      price: '$579.00',
      oldPrice: '$859.00',
      shipping: 'FREE SHIPPING',
      inStock: true,
      colors: []
    },
    {
      id: 'apod-pro',
      badge: { text: 'NEW', type: 'new' },
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
      reviews: '',
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      price: '$979.00 - $1,259.00',
      oldPrice: '',
      shipping: '$2.98 SHIPPING',
      inStock: true,
      colors: []
    },
    {
      id: 'opod-pro-m1',
      badge: null,
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80',
      reviews: '(5)',
      name: 'OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS',
      price: '$659.00',
      oldPrice: '',
      shipping: 'FREE SHIPPING',
      gift: 'FREE GIFT',
      inStock: true,
      colors: ['bg-[#335C67]', 'bg-[#212529]', 'bg-[#38A3A5]']
    },
    {
      id: 'xiamoi-redmi',
      badge: { text: 'SAVE $59.00', type: 'save' },
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
      reviews: '(9)',
      name: 'Xiamoi Redmi Note 5, 64GB',
      price: '$1,239.00',
      oldPrice: '$1,619.00',
      shipping: 'FREE SHIPPING',
      actionText: 'Contact',
      inStock: false,
      colors: []
    },
    {
      id: 'microsute-alpha',
      badge: null,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80',
      reviews: '(8)',
      name: 'Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver',
      price: '$1,729.00',
      oldPrice: '',
      shipping: 'FREE SHIPPING',
      actionText: 'Contact',
      inStock: false,
      colors: ['bg-gray-200', 'bg-gray-800']
    }
  ];

  return (
    <div className="bg-white p-8 rounded-[10px] shadow-sm border border-gray-200 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-xl font-extrabold text-gray-900 tracking-wide uppercase">
          Related Products
        </h2>
      </div>

      <div className="relative">
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-16 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 shadow-sm transition">
          <ChevronLeft size={20} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {relatedProducts.map((product, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between space-y-3 hover:shadow-md transition relative group">
              <div className="flex justify-between items-start">
                {product.badge ? (
                  <span className={`text-[10px] font-bold px-2 py-1 rounded text-white uppercase tracking-wider ${product.badge.type === 'save' ? 'bg-[#1ABA1A]' : 'bg-black'}`}>
                    {product.badge.text}
                  </span>
                ) : <span className="h-5"></span>}
                <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-300 hover:bg-gray-200 cursor-pointer transition">○</span>
              </div>
              <div className="h-44 flex items-center justify-center p-2">
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="space-y-1.5">
                <div className="text-[11px] text-gray-400 font-medium">{product.reviews}</div>
                <h3 className="text-xs font-bold text-gray-900 leading-snug line-clamp-2 hover:text-blue-600 cursor-pointer">{product.name}</h3>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-sm font-black text-gray-900">{product.price}</span>
                {product.oldPrice && <span className="text-xs text-gray-400 line-through font-semibold">{product.oldPrice}</span>}
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded">{product.shipping}</span>
                {product.gift && <span className="text-[9px] font-bold bg-rose-50 text-rose-500 border border-rose-200 px-2 py-0.5 rounded">{product.gift}</span>}
              </div>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                {product.colors && product.colors.length > 0 ? (
                  <div className="flex items-center space-x-1.5">
                    {product.colors.map((c, i) => <span key={i} className={`w-3.5 h-3.5 rounded-full ${c} border border-gray-200 cursor-pointer`}></span>)}
                  </div>
                ) : product.actionText ? (
                  <span className="text-xs font-semibold text-gray-500">{product.actionText}</span>
                ) : <div></div>}
                {product.inStock ? (
                  <div className="flex items-center space-x-1 text-[11px] text-emerald-600 font-semibold">
                    <Check size={12} /><span>In stock</span>
                  </div>
                ) : <span className="text-[11px] text-transparent">.</span>}
              </div>
            </div>
          ))}
        </div>

        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-16 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 shadow-sm transition">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 2. MAIN SINGLE PRODUCT PAGE COMPONENT
// ==========================================
export default function SingleProductPage() {
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(3);

  // Cart & Checkout states
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', companyName: '', country: 'United States (US)',
    streetAddress: '', apartment: '', townCity: '', stateCounty: 'Washington',
    zipCode: '', phone: '', email: '', createAccount: false, paymentMethod: 'bank', orderNotes: ''
  });

  const productData = {
    id: 'pinnaeple-macbook-pro-2022',
    name: 'Pinnaeple Macbook Pro 2022 M1 / 512GB',
    price: 579.00,
    category: 'Cell Phones & Tablets',
    brand: 'Sonex',
    sku: 'ABC025168',
    inStock: true,
  };

  const productImages = [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
    'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80',
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80'
  ];

  const handleAddToCart = () => {
    const itemToAdd = { ...productData, img: productImages[selectedImage] };
    addToCart(itemToAdd, quantity);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans pb-12 flex justify-center">
      <div className="max-w-[1360px] w-full mx-auto px-4 space-y-6 pt-6">
        
        {/* --- 1. MAIN PRODUCT SECTION --- */}
        <div className="bg-white p-8 rounded-[10px] shadow-sm border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Product Image Gallery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative border border-gray-200 rounded-lg p-4 flex items-center justify-center h-[380px] bg-white">
              <span className="absolute top-4 left-4 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider bg-black">NEW</span>
              <img src={productImages[selectedImage]} alt="Macbook" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {productImages.map((img, idx) => (
                <div key={idx} onClick={() => setSelectedImage(idx)} className={`border rounded-lg p-2 h-24 flex items-center justify-center cursor-pointer transition ${selectedImage === idx ? 'border-black ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}>
                  <img src={img} alt="Thumbnail" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Product Info */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="flex items-center space-x-1 text-xs text-gray-400 mb-1"><span>(5)</span></div>
              <h1 className="text-xl font-bold text-gray-900 leading-snug">Pinnaeple Macbook Pro 2022 M1 / 512GB Dark Grey</h1>
            </div>
            <div className="flex items-baseline space-x-3">
              <span className="text-2xl font-black text-gray-900">$579.00</span>
            </div>
            <div className="text-xs text-gray-600 space-y-1.5 border-t border-b border-gray-100 py-3">
              <p>• Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</p>
              <p>• DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</p>
              <p>• Commanding Power Design: Twin 16+1+2 Phases Digital VRM</p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold">
              <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-1 rounded">FREE SHIPPING</span>
            </div>
            <div className="flex items-center space-x-2 pt-1">
              <div className="flex items-center space-x-1.5 text-xs text-emerald-600 font-semibold"><Check size={14} /><span>In stock</span></div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-gray-900 uppercase">qty</div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white w-32">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3.5 py-2 text-gray-500 hover:bg-gray-100 text-sm font-bold">-</button>
                  <span className="flex-1 text-center text-xs font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3.5 py-2 text-gray-500 hover:bg-gray-100 text-sm font-bold">+</button>
                </div>
                <button onClick={handleAddToCart} className="flex-1 text-white font-bold py-2.5 px-6 rounded-lg text-xs shadow hover:opacity-90 transition flex items-center justify-center space-x-2 bg-[#1ABA1A]">
                  <span>ADD TO CART</span>
                </button>
                <button className="p-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition bg-gray-50"><Heart size={18} /></button>
              </div>
            </div>

            {/* Guaranteed Safe Checkout */}
            <div className="pt-2 space-y-2">
              <span className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">Guaranteed Safe Checkout</span>
              <div className="flex items-center space-x-1.5 overflow-x-auto py-1">
                <span className="border rounded px-1.5 py-0.5 text-[10px] font-bold bg-white text-gray-700">MCFEE</span>
                <span className="border rounded px-1.5 py-0.5 text-[10px] font-bold bg-white text-blue-600">PayPal</span>
                <span className="border rounded px-1.5 py-0.5 text-[10px] font-bold bg-white text-blue-800">VISA</span>
              </div>
            </div>
            
            <div className="space-y-1 text-xs pt-4 border-t border-gray-100">
              <p><strong className="text-gray-900">SKU:</strong> <span className="text-gray-600">ABC025168</span></p>
              <p><strong className="text-gray-900">CATEGORY:</strong> <span className="text-gray-600">Cell Phones & Tablets</span></p>
            </div>
          </div>

          {/* Right: Brand and Cart Sidebar widget */}
          <div className="lg:col-span-3 space-y-4">
            <div className="border border-gray-200 rounded-lg p-5 bg-white text-center space-y-2 shadow-sm">
              <span className="text-[10px] text-gray-400 uppercase font-semibold block text-left">Brand: <strong className="text-gray-900">Sonex</strong></span>
              <div className="py-4 flex items-center justify-center"><span className="text-2xl font-black italic tracking-tighter text-black">sonex</span></div>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-white shadow-sm space-y-4 relative">
              <h3 className="text-sm font-black text-gray-900 uppercase">Your Cart</h3>
              <div className="flex items-center justify-between text-xs border-b pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 border rounded p-1 bg-gray-50 flex items-center justify-center shrink-0">
                    <img src={productImages[0]} alt="Macbook" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[11px] leading-tight">Macbook Pro 2022</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">{quantity} x $579.00</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500"><X size={14} /></button>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500 uppercase font-semibold text-[10px]">Sub Total:</span>
                <span className="font-black text-sm text-gray-900">${(579.00 * quantity).toLocaleString('en-US', {minimumFractionDigits: 2})}.00</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <Truck size={16} className="text-gray-400 shrink-0" /><span>Ships from <strong>United States</strong></span>
            </div>
          </div>
        </div>

        {/* --- 2. RELATED PRODUCTS SECTION --- */}
        <RelatedProducts />

        {/* --- 3. PRODUCT TABS (DESCRIPTION & REVIEWS) --- */}
        <div className="bg-white border border-gray-200 w-full rounded-[10px] overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button className="px-6 py-4 text-sm font-semibold border-b-2 border-black text-black">
              DESCRIPTION
            </button>
            <button className="px-6 py-4 text-sm text-gray-500 hover:text-black">
              REVIEWS (5)
            </button>
            <button className="px-6 py-4 text-sm text-gray-500 hover:text-black">
              ADDITIONAL INFORMATION
            </button>
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-4">
              <p className="text-[15px] leading-8 text-gray-600">
                Designed for high-speed performance, this thin and lightweight device goes wherever you need. Pictures, videos, and documents appear vibrant on a sharp, clear display. Additional expandable storage lets you keep more of your preferred content close at hand, while seamless sharing across your favorite devices makes staying connected simpler than ever.
              </p>

              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
                alt="Main Laptop Display View"
                className="w-full h-[400px] rounded-xl object-cover"
              />

              <p className="text-center text-sm italic text-gray-500">
                * The optimized screen layout provides an ideal workspace for managing everyday productivity tasks.
              </p>

              <div className="pt-4 space-y-3">
                <h3 className="text-base font-bold text-gray-900 uppercase">From the manufacturer</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Dive into your favorite entertainment instantly. Switch between applications seamlessly with an advanced processor designed for maximum efficiency and speed. Expand your device's capacity and take your media library with you wherever you go.
                </p>
              </div>

              {/* Grid of Two Images matching the reference layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80"
                    alt="Workspace setup with laptop"
                    className="w-full h-[260px] rounded-xl object-cover border border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80"
                    alt="Using laptop outdoors"
                    className="w-full h-[260px] rounded-xl object-cover border border-gray-200"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-2 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-900">Semsong Mobile Device, White Edition</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Features dual camera capabilities with autofocus for clear imagery and video communications. Customize your layout with pre-installed utilities designed to enhance your everyday digital experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. SHOPPING CART SECTION --- */}
        <div className="bg-white p-8 rounded-[10px] shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-xl font-extrabold text-gray-900 tracking-wide uppercase">Shopping Cart</h2>
          
          <div className="bg-[#EAF5EC] border border-[#d2ead6] text-emerald-800 px-4 py-3 rounded-lg text-xs flex justify-between items-center">
            <span>✓ "Pinnaeple Macbook Pro 2022 M1 / 512GB Dark Grey" has been added to your cart.</span>
            <button className="text-emerald-800 hover:opacity-70"><X size={14} /></button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <th className="pb-4">Product Name</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Quantity</th>
                  <th className="pb-4 text-right">Sub Total</th>
                  <th className="pb-4 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                <tr>
                  <td className="py-4 flex items-center space-x-4">
                    <div className="w-16 h-16 border border-gray-200 rounded-lg p-1 bg-white flex items-center justify-center shrink-0">
                      <img src={productImages[0]} alt="Macbook" className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Pinnaeple Macbook Pro 2022</h4>
                      <p className="text-gray-500 text-[11px]">M1/ 512GB</p>
                    </div>
                  </td>
                  <td className="py-4 font-bold text-gray-900">$579.00</td>
                  <td className="py-4">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white w-20 px-2 py-1 justify-between">
                      <span className="font-bold">{quantity}</span>
                      <span className="text-[10px] text-gray-400">▼</span>
                    </div>
                  </td>
                  <td className="py-4 text-right font-black text-gray-900">${(579.00 * quantity).toLocaleString('en-US', {minimumFractionDigits: 2})}.00</td>
                  <td className="py-4 text-right">
                    <button className="text-gray-400 hover:text-red-500 transition"><X size={16} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button className="bg-[#1ABA1A] hover:opacity-90 text-white font-bold py-2.5 px-6 rounded-lg text-xs uppercase tracking-wider transition">
              Update Cart
            </button>
            <button className="bg-[#212529] hover:opacity-90 text-white font-bold py-2.5 px-6 rounded-lg text-xs uppercase tracking-wider transition">
              Remove All
            </button>
          </div>
        </div>

        {/* --- 5. CHECKOUT SECTION --- */}
        <div className="bg-white p-8 rounded-[10px] shadow-sm border border-gray-200 space-y-8">
          <h2 className="text-xl font-extrabold text-gray-900 uppercase tracking-wide">Checkout</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 p-3.5 rounded-lg text-xs text-gray-600">
              Returning customer? <a href="#login" className="text-blue-600 font-semibold hover:underline">Click here to log in</a>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-3.5 rounded-lg text-xs text-gray-600">
              Have a coupon? <a href="#coupon" className="text-blue-600 font-semibold hover:underline">Click here to enter your code</a>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Billing Details */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-base font-bold text-gray-900">Billing Detail</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">First Name *</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input 
                  type="text" 
                  name="companyName" 
                  value={formData.companyName} 
                  onChange={handleInputChange} 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Country / Region *</label>
                <select 
                  name="country" 
                  value={formData.country} 
                  onChange={handleInputChange} 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
                >
                  <option>United States (US)</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Street Address *</label>
                <input 
                  type="text" 
                  name="streetAddress" 
                  placeholder="House number and street name ..." 
                  value={formData.streetAddress} 
                  onChange={handleInputChange} 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black" 
                  required
                />
                <input 
                  type="text" 
                  name="apartment" 
                  placeholder="Apartment, suite, unit, etc (optional)" 
                  value={formData.apartment} 
                  onChange={handleInputChange} 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Town / City *</label>
                <input 
                  type="text" 
                  name="townCity" 
                  value={formData.townCity} 
                  onChange={handleInputChange} 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black" 
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">State / County *</label>
                <select 
                  name="stateCounty" 
                  value={formData.stateCounty} 
                  onChange={handleInputChange} 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
                >
                  <option>Washington</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Zip Code *</label>
                <input 
                  type="text" 
                  name="zipCode" 
                  value={formData.zipCode} 
                  onChange={handleInputChange} 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black" 
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black" 
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input 
                  type="checkbox" 
                  name="createAccount" 
                  id="createAccount" 
                  checked={formData.createAccount} 
                  onChange={handleInputChange} 
                  className="rounded border-gray-300 text-black focus:ring-black w-4 h-4"
                />
                <label htmlFor="createAccount" className="text-xs text-gray-700 font-medium">Create an account?</label>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Ship to a different address?</h4>
              </div>

              <div className="pt-2 border-t border-gray-100 space-y-3">
                <h4 className="text-sm font-bold text-gray-900">Additional Information</h4>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Order Notes <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea 
                    name="orderNotes" 
                    rows="4" 
                    placeholder="Note about your order, e.g. special note for delivery"
                    value={formData.orderNotes} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Right Column: Your Order Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-6">
                <h3 className="text-sm font-black text-gray-900 uppercase">Your Order</h3>
                
                <div className="border-b border-gray-200 pb-4 space-y-3">
                  <div className="flex justify-between text-xs font-bold text-gray-900 uppercase">
                    <span>Product</span>
                    <span>Sub Total</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 border rounded bg-white p-1 flex items-center justify-center shrink-0">
                        <img src={productImages[0]} alt="Product" className="max-h-full max-w-full object-contain" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-xs">Pinnaeple Macbook Pro 2022 M1/ 512GB</p>
                        <p className="text-gray-500 text-[11px]">x {quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900">${(579.00 * quantity).toLocaleString('en-US', {minimumFractionDigits: 2})}.00</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2">
                    <span className="text-gray-600">Worldwide Standard Shipping Free</span>
                    <span className="font-bold text-gray-900">+ $9.50</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="font-extrabold text-gray-900 uppercase">Order Total</span>
                  <span className="font-black text-emerald-600 text-lg">${(579.00 * quantity + 9.50).toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4 pt-2 border-t border-gray-200">
                  <div className="space-y-2">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="bank" 
                        checked={formData.paymentMethod === 'bank'} 
                        onChange={handleInputChange} 
                        className="mt-0.5 text-black focus:ring-black"
                      />
                      <span className="text-xs font-bold text-gray-900">Direct Bank Transfer</span>
                    </label>
                    {formData.paymentMethod === 'bank' && (
                      <p className="text-[11px] text-gray-600 pl-6 leading-relaxed bg-white p-3 rounded border border-gray-200">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="cod" 
                        checked={formData.paymentMethod === 'cod'} 
                        onChange={handleInputChange} 
                        className="text-black focus:ring-black"
                      />
                      <span className="text-xs font-bold text-gray-900">Cash on Delivery</span>
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="paypal" 
                          checked={formData.paymentMethod === 'paypal'} 
                          onChange={handleInputChange} 
                          className="text-black focus:ring-black"
                        />
                        <span className="text-xs font-bold text-gray-900">PayPal</span>
                      </div>
                      <span className="text-xs text-blue-600 font-bold italic">PayPal</span>
                    </label>
                    {formData.paymentMethod === 'paypal' && (
                      <div className="pl-6">
                        <a href="#paypal" className="text-[11px] text-blue-600 hover:underline">What's PayPal?</a>
                      </div>
                    )}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#1ABA1A] hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg text-xs uppercase tracking-wider shadow transition text-center block"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}