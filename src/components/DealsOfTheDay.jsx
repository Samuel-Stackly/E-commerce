import { useState } from 'react';
import CountdownTimer from "./CountdownTimer";

export default function DealsOfTheDay() {
  const [selectedImage, setSelectedImage] = useState("/assets/phone1.png");

  const thumbnails = [
    "/assets/phone1.png",
    "/assets/phone2.png",
    "/assets/phone3.png",
    "/assets/phone4.png",
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm overflow-hidden p-6 max-w-[1360px] mx-auto">
      {/* Header */}
      <div 
        className="bg-[#1ABA1A] text-white flex justify-between items-center px-6 mb-6"
        style={{
          width: '100%',
          maxWidth: '971px',
          height: '62px',
          borderRadius: '10px',
          opacity: '1',
        }}
      >
        <h2 className="font-bold text-lg uppercase tracking-wide">DEALS OF THE DAY</h2>
        <a href="#" className="text-sm font-semibold hover:underline uppercase tracking-wider">
          VIEW ALL
        </a>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Gallery & Main Image (Span ~6 columns) */}
        <div className="lg:col-span-6 flex gap-4 items-center">
          {/* Thumbnails */}
          <div className="w-[45px] h-[380px] flex flex-col justify-between shrink-0">
            {thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Phone thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(src)}
                className={`w-[45px] h-[85px] object-contain border rounded-md p-1.5 cursor-pointer transition-all ${
                  selectedImage === src ? 'border-[#1ABA1A]' : 'border-gray-200 hover:border-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1 bg-gray-50 rounded-2xl p-6 flex justify-center items-center h-[380px] border border-gray-100">
            <div className="absolute left-4 top-4 bg-[#1ABA1A] text-white px-3 py-2 rounded-lg shadow-sm">
              <p className="text-[10px] tracking-wider uppercase font-medium">SAVE</p>
              <p className="font-bold text-base">$199.00</p>
            </div>

            <img
              src={selectedImage}
              alt="Xioma Redmi"
              className="h-72 object-contain transition-all duration-300 border-0 outline-none ring-0"
            />
          </div>
        </div>

        {/* Middle Column: Product Details (Span ~4 columns) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-xs">★★★★★</div>
              <p className="text-xs text-gray-400 font-medium">(12)</p>
            </div>

            <h3 className="font-bold text-xl text-gray-900 mt-1.5 leading-snug">
              Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
            </h3>

            <div className="mt-3 flex items-baseline">
              <span className="text-[#1ABA1A] text-3xl font-extrabold">$569.00</span>
              <span className="line-through ml-3 text-gray-400 text-sm">$759.00</span>
            </div>

            <ul className="list-disc pl-4 text-gray-500 text-xs mt-3 space-y-1.5">
              <li>Intel LGA 1700 Socket Supports 13th & 12th Gen Intel Core</li>
              <li>DDR5 Compatible 4 DIMM Slots with XMP 3.0</li>
              <li>16+1+2 Phase Digital VRM Design</li>
            </ul>

            <div className="flex gap-2.5 mt-4">
              <span className="bg-emerald-50 text-[#1ABA1A] px-2.5 py-1 rounded text-[11px] font-bold tracking-wider">
                FREE SHIPPING
              </span>
              <span className="bg-rose-50 text-rose-500 px-2.5 py-1 rounded text-[11px] font-bold tracking-wider">
                FREE GIFT
              </span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-100">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Hurry up! Promotion will expire in
            </p>
            <CountdownTimer />
          </div>

          <div className="mt-4">
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className="bg-[#1ABA1A] h-2 rounded-full w-1/3"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1.5">
              Sold: <span className="font-bold text-gray-800">26/75</span>
            </p>
          </div>
        </div>

        {/* Right Column: Side Banners (Span ~2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative rounded-xl overflow-hidden shadow-sm group">
            <img
              src="/assets/deal_img1.png"
              alt="Deal Banner 1"
              className="rounded-xl w-full h-[116px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2.5 right-2.5 bg-amber-400 text-black font-extrabold text-[10px] px-2 py-0.5 rounded shadow-sm">
              50% OFF
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm group">
            <img
              src="/assets/deal_img2.png"
              alt="Deal Banner 2"
              className="rounded-xl w-full h-[116px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm group">
            <img
              src="/assets/deal_img3.png"
              alt="Deal Banner 3"
              className="rounded-xl w-full h-[116px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}