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

  const sideBanners = [
    { src: "/assets/deal_img1.png", alt: "Deal Banner 1", badge: "50% OFF" },
    { src: "/assets/deal_img2.png", alt: "Deal Banner 2" },
    { src: "/assets/deal_img3.png", alt: "Deal Banner 3" },
  ];

  return (
    <section className="mx-auto max-w-[1360px] overflow-hidden rounded-xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div
        className="mb-6 flex items-center justify-between bg-[#1ABA1A] px-6 text-white"
        style={{
          width: '100%',
          maxWidth: '971px',
          height: '62px',
          borderRadius: '10px',
          opacity: '1',
        }}
      >
        <h2 className="text-lg font-bold uppercase tracking-wide">DEALS OF THE DAY</h2>
        <a href="#" className="text-sm font-semibold uppercase tracking-wider hover:underline">
          VIEW ALL
        </a>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left Column: Gallery & Main Image */}
        <div className="flex min-h-[380px] items-center gap-4 lg:col-span-6">
          <div className="flex h-full min-h-[380px] w-[45px] shrink-0 flex-col justify-between">
            {thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Phone thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(src)}
                className={`h-[85px] w-[45px] cursor-pointer rounded-md border object-contain p-1.5 transition-all ${
                  selectedImage === src ? 'border-[#1ABA1A]' : 'border-gray-200 hover:border-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="relative flex h-full min-h-[380px] flex-1 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <div className="absolute left-4 top-4 rounded-lg bg-[#1ABA1A] px-3 py-2 text-white shadow-sm">
              <p className="text-[10px] font-medium uppercase tracking-wider">SAVE</p>
              <p className="text-base font-bold">$199.00</p>
            </div>

            <img
              src={selectedImage}
              alt="Xioma Redmi"
              className="h-72 border-0 object-contain outline-none ring-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* Middle Column: Product Details */}
        <div className="flex min-h-[380px] flex-col justify-between lg:col-span-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex text-xs text-yellow-400">★★★★★</div>
              <p className="text-xs font-medium text-gray-400">(12)</p>
            </div>

            <h3 className="mt-1.5 text-xl font-bold leading-snug text-gray-900">
              Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
            </h3>

            <div className="mt-3 flex items-baseline">
              <span className="text-3xl font-extrabold text-[#1ABA1A]">$569.00</span>
              <span className="ml-3 text-sm text-gray-400 line-through">$759.00</span>
            </div>

            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-xs text-gray-500">
              <li>Intel LGA 1700 Socket Supports 13th & 12th Gen Intel Core</li>
              <li>DDR5 Compatible 4 DIMM Slots with XMP 3.0</li>
              <li>16+1+2 Phase Digital VRM Design</li>
            </ul>

            <div className="mt-4 flex gap-2.5">
              <span className="rounded bg-emerald-50 px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#1ABA1A]">
                FREE SHIPPING
              </span>
              <span className="rounded bg-rose-50 px-2.5 py-1 text-[11px] font-bold tracking-wider text-rose-500">
                FREE GIFT
              </span>
            </div>
          </div>

          <div className="mt-5 border-t border-gray-100 pt-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-700">
              Hurry up! Promotion will expire in
            </p>
            <CountdownTimer />
          </div>

          <div className="mt-4">
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-2 w-1/3 rounded-full bg-[#1ABA1A]"></div>
            </div>
            <p className="mt-1.5 text-xs text-gray-500">
              Sold: <span className="font-bold text-gray-800">26/75</span>
            </p>
          </div>
        </div>

        {/* Right Column: Side Banners — equal height to deals card */}
        <div className="flex min-h-[380px] flex-col gap-4 lg:col-span-2">
          {sideBanners.map((banner) => (
            <div
              key={banner.src}
              className="relative min-h-0 flex-1 overflow-hidden rounded-xl shadow-sm group"
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {banner.badge && (
                <div className="absolute right-2.5 top-2.5 rounded bg-amber-400 px-2 py-0.5 text-[10px] font-extrabold text-black shadow-sm">
                  {banner.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
