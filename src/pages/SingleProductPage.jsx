import React, { useState } from 'react';
import { Check, ShoppingCart, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function SingleProductPage() {
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Midnight Blue');
  const [selectedMemory, setSelectedMemory] = useState('128GB');

  const productData = {
    id: 'somseng-x6-ultra',
    name: 'Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone',
    price: 569.00,
    oldPrice: 609.00,
    category: 'Cell Phones & Tablets',
    brand: 'sumsong',
    sku: 'ABC025168',
    inStock: true,
  };

  const productImages = [
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80',
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80'
  ];

  const colors = [
    { name: 'Midnight Blue', price: '$569.00', bg: 'bg-[#335C67]' },
    { name: 'Deep Purple', price: '$569.00', bg: 'bg-[#560BAD]' },
    { name: 'Space Black', price: '$569.00', bg: 'bg-[#212529]' }
  ];

  const memoryOptions = ['64GB', '128GB', '256GB', '512GB'];

  const handleAddToCart = () => {
    const itemToAdd = {
      ...productData,
      color: selectedColor,
      memory: selectedMemory,
      img: productImages[selectedImage],
    };
    addToCart(itemToAdd, quantity);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans pb-12 flex justify-center">
      <div className="max-w-[1360px] w-full mx-auto px-4 space-y-6 pt-6">
        
        {/* Main Section */}
        <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Product Image Gallery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative border border-gray-200 rounded-lg p-4 flex items-center justify-center h-[380px] bg-white">
              <span className="absolute top-4 left-4 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider bg-black">
                NEW
              </span>
              <img 
                src={productImages[selectedImage]} 
                alt="Somseng Galatero X6 Ultra" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {productImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImage(idx)}
                  className={`border rounded-lg p-2 h-24 flex items-center justify-center cursor-pointer transition ${selectedImage === idx ? 'border-black ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <img src={img} alt="Thumbnail" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Product Info & Options */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="flex items-center space-x-1 text-xs text-gray-400 mb-1">
                <span>(5)</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900 leading-snug">
                Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
              </h1>
            </div>

            {/* Price display */}
            <div className="flex items-baseline space-x-3">
              <span className="text-2xl font-black text-gray-900">$569.00 - $609.00</span>
            </div>

            <div className="text-xs text-gray-600 space-y-1.5 border-t border-b border-gray-100 py-3">
              <p>• Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</p>
              <p>• DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</p>
              <p>• Commanding Power Design: Twin 16+1+2 Phases Digital VRM</p>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold">
              <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-1 rounded">FREE SHIPPING</span>
              <span className="bg-rose-50 text-rose-500 border border-rose-200 px-2.5 py-1 rounded">FREE GIFT</span>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-900">COLOR: <span className="font-normal text-gray-600">{selectedColor}</span></span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedColor(color.name)}
                    className={`p-2 rounded-lg border text-left text-xs font-medium transition ${selectedColor === color.name ? 'border-black ring-1 ring-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className={`w-3 h-3 rounded-full ${color.bg}`}></span>
                      <span className="font-bold truncate text-[11px]">{color.name}</span>
                    </div>
                    <span className="text-gray-500 text-[10px] pl-4">{color.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Memory Size Selection */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-900">MEMORY SIZE: <span className="font-normal text-gray-600">{selectedMemory}</span></span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {memoryOptions.map((mem, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedMemory(mem)}
                    className={`py-2 rounded-lg border text-xs font-medium transition ${selectedMemory === mem ? 'border-black text-black bg-gray-50 font-bold' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}
                  >
                    {mem}
                  </button>
                ))}
              </div>
            </div>

            {/* Promo Box */}
            <div className="bg-[#EAF5EC] p-3 rounded-lg border border-[#d2ead6] space-y-2 text-xs">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🎁</div>
                <div className="space-y-0.5">
                  <p className="font-semibold text-gray-800">• Buy <span className="font-bold text-black">02</span> boxes get a <strong className="text-gray-900">Snack Tray</strong></p>
                  <p className="font-semibold text-gray-800">• Buy <span className="font-bold text-black">04</span> boxes get a free <strong className="text-gray-900">Block Toys</strong></p>
                </div>
              </div>
              <div className="text-[10px] text-gray-500 pt-1 border-t border-[#d2ead6]/60 flex justify-between">
                <span>Promotion will expires in:</span>
                <span className="font-bold text-gray-700">8h00pm, 25/5/2024</span>
              </div>
            </div>

            {/* Meta details */}
            <div className="space-y-1 text-xs pt-2 border-t border-gray-100">
              <p><strong className="text-gray-900">SKU:</strong> <span className="text-gray-600">ABC025168</span></p>
              <p><strong className="text-gray-900">CATEGORY:</strong> <span className="text-gray-600">Cell Phones & Tablets</span></p>
              <p><strong className="text-gray-900">BRAND:</strong> <span className="text-gray-600">sumsong</span></p>
            </div>

            {/* Social Share Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">f</div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">t</div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">in</div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">yt</div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">🌐</div>
            </div>

          </div>

          {/* Right: Buy / Checkout Box */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">TOTAL PRICE:</span>
                  <div className="text-2xl font-black text-gray-900 mt-0.5">$609.00</div>
                </div>
              </div>

              <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded border border-gray-100 flex items-center justify-between">
                <span><strong className="text-indigo-600">affirm</strong> <span className="text-rose-500 font-bold">$49/m</span> in 12 months.</span>
                <a href="#" className="text-blue-600 font-bold hover:underline text-[11px]">See more</a>
              </div>

              <div className="flex items-center space-x-1.5 text-xs text-emerald-600 font-semibold pt-1">
                <Check size={14} />
                <span>In stock</span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-full bg-white">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 text-gray-500 hover:bg-gray-100 text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-xs font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 text-gray-500 hover:bg-gray-100 text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="w-full text-white font-bold py-3 rounded-lg text-xs shadow hover:opacity-90 transition flex items-center justify-center space-x-2 bg-[#1ABA1A]"
                >
                  <ShoppingCart size={16} />
                  <span>ADD TO CART</span>
                </button>

                <button className="w-full bg-[#FFC439] hover:bg-[#f4bc34] text-gray-900 font-bold py-3 rounded-lg text-xs transition flex items-center justify-center space-x-1 shadow-sm">
                  <span>BUY WITH</span>
                  <span className="italic font-extrabold text-blue-900">PayPal</span>
                </button>
              </div>

              <div className="flex justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                <button className="hover:text-black flex items-center space-x-1"><span>♡</span><span>Wishlist added</span></button>
                <button className="hover:text-black flex items-center space-x-1"><span>⚖</span><span>Compare</span></button>
              </div>

              <div className="bg-gray-50 p-3 rounded border border-gray-100 text-center space-y-1">
                <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Guaranteed Safe Checkout</span>
                <div className="flex justify-center items-center space-x-1.5 pt-1">
                  <span className="bg-white px-1.5 py-0.5 border rounded text-[9px] font-bold text-red-700">Mcafee SECURE</span>
                  <span className="bg-white px-1.5 py-0.5 border rounded text-[9px] font-bold text-blue-700">VISA</span>
                  <span className="bg-white px-1.5 py-0.5 border rounded text-[9px] font-bold text-orange-600">MasterCard</span>
                  <span className="bg-white px-1.5 py-0.5 border rounded text-[9px] font-bold text-orange-500">Discover</span>
                  <span className="bg-white px-1.5 py-0.5 border rounded text-[9px] font-bold text-blue-500">AmEx</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/70 text-center space-y-2">
              <button className="w-full bg-[#212529] hover:bg-black text-white font-bold py-2.5 rounded-lg text-xs transition shadow-sm">
                Quick Order 24/7
              </button>
              <div className="font-extrabold text-base text-gray-900">
                (025) 3886 25 16
              </div>
              <div className="flex items-center justify-center space-x-1.5 text-gray-500 text-[11px] pt-1 border-t border-gray-200/60">
                <Truck className="text-gray-400" size={14} />
                <span>Ships from <strong>United States</strong></span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Container with Frequently Bought Together & Product Description side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (Col 8): Frequently Bought Together & Product Description stacked */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Frequently Bought Together */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-200 space-y-4">
              <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide">
                FREQUENTLY BOUGHT TOGETHER
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white py-2">
                
               {/* Images & Plus signs */}
               <div className="flex items-center justify-between gap-3 py-2 overflow-hidden">
                 <div className="border rounded-xl bg-white p-2 flex items-center justify-center shrink-0" style={{ width: "190px", height: "200px" }}>
                   <img src="/assets/headphone.png" alt="Headphone" className="max-w-full max-h-full object-contain" />
                 </div>

                 <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm shrink-0">+</div>

                 <div className="border rounded-xl bg-white p-2 flex items-center justify-center shrink-0" style={{ width: "190px", height: "200px" }}>
                   <img src="/assets/watch.png" alt="Watch" className="max-w-full max-h-full object-contain" />
                 </div>

                 <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm shrink-0">+</div>

                 <div className="border rounded-xl bg-white p-2 flex items-center justify-center shrink-0" style={{ width: "190px", height: "200px" }}>
                   <img src="/assets/phone1.png" alt="Phone" className="max-w-full max-h-full object-contain" />
                 </div>
               </div>

                {/* Total Price & Add to Cart button */}
                <div className="flex flex-col items-start sm:items-end space-y-2 shrink-0 min-w-[200px]">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold block">TOTAL PRICE:</span>
                    <span className="text-2xl font-black text-gray-900">$609.00</span>
                  </div>
                  <button
                    onClick={() => addToCart(productData, 1)}
                    className="w-[180px] h-[42px] bg-[#1ABA1A] text-white font-semibold text-sm rounded-[10px] hover:bg-[#169e16] transition"
                  >
                    ADD TO CART
                  </button>
                  <div className="w-full text-center">
                    <a href="#" className="text-xs text-gray-500 hover:text-black flex items-center justify-center space-x-1">
                      <span>♥</span><span>Ad all to Wishlist</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Checkbox Options List */}
              <div className="space-y-2.5 pt-2 border-t border-gray-100 text-xs text-gray-700">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]" />
                  <span><strong className="text-black font-bold">This item:</strong> Somseng Galatero X6 Ultra LTE 4G/128 Gb, Black Smartphone ( <strong className="text-red-600 font-bold">$569.00</strong> )</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]" />
                  <span>BOSO 2 Wireless On Ear Headphone ( <strong className="text-red-600 font-bold">$369.00</strong> )</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]" />
                  <span>Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop ( <strong className="text-red-600 font-bold">$129.00</strong> )</span>
                </label>
              </div>
            </div>

            {/* Product Description Section placed under Frequently Bought Together on the left */}
          <div
  className="bg-white border border-gray-200 rounded-[10px] overflow-hidden mx-auto"
  style={{
    width: "1360px",
    minHeight: "1538px",
  }}
>
              {/* Tabs */}
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
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-[15px] leading-8 text-gray-600">
                    Built for ultra-fast performance, the thin and lightweight Samsung
                    Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop
                    on a crisp, clear Super AMOLED display. Expandable memory lets you
                    enjoy more of your favorite content.
                  </p>

                  <img
                    src="/assets/des-img.jpg"
                    alt="Samsung Tablet"
                    className="w-full h-[500px] rounded-xl object-cover"
                  />

                  <p className="text-center text-sm italic text-gray-500">
                    * The Galaxy Tab S2's 4:3 ratio display provides you with an ideal
                    environment for performing office tasks.
                  </p>
                </div>

                {/* Manufacturer */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">From the manufacturer</h3>

                  <p className="text-gray-600 leading-8">
                    Dive into blockbuster movies you can't wait to see. Switch between
                    your favorite apps quickly and easily. The new and improved octa-core
                    processor gives you the power and speed you need.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <img src="/assets/manufac-1.png" alt="Person" className="w-full h-[380px] rounded-xl object-cover" />
                    <img src="/assets/manufac-2.png" alt="Phone" className="w-full h-[380px] rounded-xl object-cover" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Samsung Galaxy Tab S2, 8-Inch, White</h3>

                  <p className="text-gray-600 leading-8">
                    The Samsung Galaxy Tab S2 offers dual cameras with Auto Focus and a
                    front camera for video chat. Customize your Galaxy Tab S2 with the
                    apps you use most. Select and download the apps you want to instantly
                    upgrade your tablet experience.
                  </p>

                  <button className="text-blue-600 font-semibold hover:underline">
                    SHOW MORE
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Col 4): Banners */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Banner 1 */}
            <div className="w-full h-[200px] rounded-[12px] overflow-hidden">
              <img src="/assets/deal_img1.png" alt="Gaming Controller" className="w-full h-full object-cover" />
            </div>

            {/* Banner 2 */}
            <div className="w-full h-[200px] rounded-[12px] overflow-hidden">
              <img src="/assets/deal_img2.png" alt="Gaming Controller" className="w-full h-full object-cover" />
            </div>

          </div>

        </div>

        {/* Related Products Section */}
        <section className="w-full bg-white rounded-[10px] p-8 shadow-sm border border-gray-200 mt-10">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#111] mb-8">
            RELATED PRODUCTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Product 1 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <span className="absolute top-2 left-2 bg-[#18B818] text-white text-xs px-2.5 py-0.5 rounded">
                  SAVE $199
                </span>
                <img
                  src="/assets/tablet-1.png"
                  alt="SROK Smart Phone"
                  className="h-[170px] object-contain"
                />
              </div>

              <p className="text-gray-400 text-xs text-center mt-2">(152)</p>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                SROK Smart Phone 128GB, Oled Retina
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#F44336] font-bold text-[22px]">
                  $579.00
                </span>
                <span className="line-through text-gray-400 text-xs">
                  $859.00
                </span>
              </div>

              <span className="mt-2 inline-block bg-[#E8F8E8] text-[#18B818] text-[10px] px-2.5 py-0.5 rounded-full w-fit font-medium">
                FREE SHIPPING
              </span>

              <p className="mt-2 text-xs text-emerald-600 font-medium">
                ✔ In stock
              </p>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <span className="absolute top-2 left-2 bg-[#18B818] text-white text-xs px-2.5 py-0.5 rounded">
                  SAVE $50
                </span>
                <img
                  src="/assets/tablet-2.png"
                  
                  alt="SROK Smart Phone"
                  className="h-[170px] object-contain"
                />
              </div>

              <p className="text-gray-400 text-xs text-center mt-2">(84)</p>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                SROK Pad Pro 11-inch Wi-Fi 256GB
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#F44336] font-bold text-[22px]">
                  $749.00
                </span>
                <span className="line-through text-gray-400 text-xs">
                  $799.00
                </span>
              </div>

              <span className="mt-2 inline-block bg-[#E8F8E8] text-[#18B818] text-[10px] px-2.5 py-0.5 rounded-full w-fit font-medium">
                FREE SHIPPING
              </span>

              <p className="mt-2 text-xs text-emerald-600 font-medium">
                ✔ In stock
              </p>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <img
                  src="/assets/tablet-3.png"
                  alt="SROK Smart Phone"
                  className="h-[170px] object-contain"
                />
              </div>

              <p className="text-gray-400 text-xs text-center mt-2">(32)</p>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                SROK Buds Pro True Wireless Earbuds
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#F44336] font-bold text-[22px]">
                  $149.00
                </span>
              </div>

              <span className="mt-2 inline-block bg-[#E8F8E8] text-[#18B818] text-[10px] px-2.5 py-0.5 rounded-full w-fit font-medium">
                FREE SHIPPING
              </span>

              <p className="mt-2 text-xs text-emerald-600 font-medium">
                ✔ In stock
              </p>
            </div>

            {/* Product 4 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <span className="absolute top-2 left-2 bg-[#18B818] text-white text-xs px-2.5 py-0.5 rounded">
                  SAVE $30
                </span>
                <img
                  src="/assets/tablet-4.png"
                  alt="SROK Smart Phone"
                  className="h-[170px] object-contain"
                />
              </div>

              <p className="text-gray-400 text-xs text-center mt-2">(9)</p>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                SROK Smart Tag Bluetooth Tracker
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#F44336] font-bold text-[22px]">
                  $29.00
                </span>
                <span className="line-through text-gray-400 text-xs">
                  $59.00
                </span>
              </div>

              <span className="mt-2 inline-block bg-[#E8F8E8] text-[#18B818] text-[10px] px-2.5 py-0.5 rounded-full w-fit font-medium">
                FREE SHIPPING
              </span>

              <p className="mt-2 text-xs text-emerald-600 font-medium">
                ✔ In stock
              </p>
            </div>

            {/* Product 5 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <img
                  src="/assets/tablet-5.png"
                  alt="SROK Smart Phone"
                  className="h-[170px] object-contain"
                />
              </div>

              <p className="text-gray-400 text-xs text-center mt-2">(64)</p>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                SROK 35W Fast USB-C Wall Charger
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#F44336] font-bold text-[22px]">
                  $39.00
                </span>
              </div>

              <span className="mt-2 inline-block bg-[#E8F8E8] text-[#18B818] text-[10px] px-2.5 py-0.5 rounded-full w-fit font-medium">
                FREE SHIPPING
              </span>

              <p className="mt-2 text-xs text-emerald-600 font-medium">
                ✔ In stock
              </p>
            </div>
          </div>
        </section>

        {/* Your Recently Viewed Section */}
        <section className="w-full bg-white rounded-[10px] p-8 shadow-sm border border-gray-200 mt-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#111]">
              YOUR RECENTLY VIEWED
            </h2>
            <button className="text-sm font-semibold text-gray-600 hover:text-black transition">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Viewed Item 1 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition relative">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <span className="absolute top-2 left-2 bg-[#212529] text-white text-xs px-2.5 py-0.5 rounded font-bold uppercase">
                  NEW
                </span>
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
                  alt="Xomie Remid 8 Sport"
                  className="h-[170px] object-contain"
                />
              </div>

              <p className="text-gray-400 text-xs text-center mt-2">(152)</p>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                Xomie Remid 8 Sport Water Resitance Watch
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#111] font-bold text-[22px]">
                  $579.00
                </span>
              </div>

              <div className="absolute top-6 right-6 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-200">
                ♡
              </div>
            </div>

            {/* Viewed Item 2 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition relative">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <span className="absolute top-2 left-2 bg-[#212529] text-white text-xs px-2.5 py-0.5 rounded font-bold uppercase">
                  NEW
                </span>
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"
                  alt="Microte Surface 2.0 Laptop"
                  className="h-[170px] object-contain"
                />
              </div>

              <div className="h-4 mt-2"></div>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                Microte Surface 2.0 Laptop
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#111] font-bold text-[22px]">
                  $979.00
                </span>
              </div>

              <div className="absolute top-6 right-6 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-200">
                ♡
              </div>
            </div>

            {/* Viewed Item 3 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition relative">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80"
                  alt="aPod Pro Tablet 2023"
                  className="h-[170px] object-contain"
                />
              </div>

              <div className="h-4 mt-2"></div>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#111] font-bold text-[20px]">
                  $979.00 - $1,259.00
                </span>
              </div>

              <div className="absolute top-6 right-6 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-200">
                ♡
              </div>
            </div>

            {/* Viewed Item 4 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition relative">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <span className="absolute top-2 left-2 bg-[#18B818] text-white text-xs px-2.5 py-0.5 rounded font-bold">
                  SAVE $192.00
                </span>
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"
                  alt="SROK Smart Phone"
                  className="h-[170px] object-contain"
                />
              </div>

              <p className="text-gray-400 text-xs text-center mt-2">(152)</p>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                SROK Smart Phone 128GB, Oled Retina
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#F44336] font-bold text-[22px]">
                  $579.00
                </span>
                <span className="line-through text-gray-400 text-xs">
                  $779.00
                </span>
              </div>

              <div className="absolute top-6 right-6 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-200">
                ♡
              </div>
            </div>

            {/* Viewed Item 5 */}
            <div className="flex flex-col border border-gray-100 p-4 rounded-xl hover:shadow-md transition relative">
              <div className="relative h-[220px] flex items-center justify-center bg-gray-50 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80"
                  alt="Somseng Galatero X6 Ultra"
                  className="h-[170px] object-contain"
                />
              </div>

              <p className="text-gray-400 text-xs text-center mt-2">(5)</p>

              <h3 className="font-semibold text-[15px] leading-tight mt-1 line-clamp-2">
                Somseng Galatero X6 Ultra LTE 4G/128GB
              </h3>

              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-[#111] font-bold text-[22px]">
                  $569.00
                </span>
              </div>

              <div className="absolute top-6 right-6 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-200">
                ♡
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}