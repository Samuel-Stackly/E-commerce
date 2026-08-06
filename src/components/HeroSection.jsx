import ProductImage from "./ProductImage";

export default function HeroSection() {
  return (
    <div className="grid lg:grid-cols-[650px_325px] gap-6">
      {/* Main Hero */}
      <div className="relative w-[650px] h-[446px] rounded-2xl overflow-hidden bg-[#A9ABB5]">
       <div className="absolute left-10 top-12 z-10 max-w-[260px] text-white">
  <h2 className="text-[42px] font-extrabold leading-[48px]">
    Noise Cancelling
    <br />
    Headphone
  </h2>

  <p className="mt-5 text-[15px] leading-6">
    Sono Over-Ear Headphone with Voice Assistant,
    Low Latency Game Mode
  </p>

  <button className="mt-8 bg-white text-black px-7 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
    BUY NOW
  </button>
</div>
         
       <img
  src="/assets/headphone.png"
  alt="Headphone"
  className="absolute right-0 bottom-0 w-[650px] h-[310px] object-contain"
/>
        <span className="absolute bottom-6 right-6 bg-white/80 px-3 py-1 rounded text-sm">
          3 / 3
        </span>
      </div>

     <div className="w-[325px] h-[446px] flex flex-col gap-4">
  {/* Watch Card */}
  <div className="w-full h-[215px] bg-white rounded-[10px] border border-gray-200 p-5 flex items-center">
    <ProductImage
      src="/assets/watch.png"
      alt="Watch"
      color="#f3f4f6"
      className="w-[150px] h-[150px] object-contain"
    />

    <div className="ml-4">
      <h3 className="text-[20px] font-semibold leading-7 text-[#1F2937]">
        Sport Water
        <br />
        Resistance Watch
      </h3>

      <button className="mt-4 bg-[#333333] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#222222] transition">
  SHOP NOW
</button>
    </div>
  </div>

  {/* Camera Card */}
  <div className="w-full h-[215px] bg-[#1F2937] rounded-[10px] p-5 relative overflow-hidden">
    <h3 className="text-white text-lg font-bold">
     OKODO
      <br />
      HERO 11+
      <br />
      BLACK
      </h3>
  <div className="mt-4 inline-block">
  <p className="text-[14px] uppercase tracking-wider text-gray-400">
    FROM
  </p>

  <p className="text-[30px] font-bold leading-none text-[#1ABA1A]">
    $169
  </p>
</div>
    <ProductImage
      src="/assets/cam.png"
      alt="Camera"
      color="#1F2937"
      className="absolute right-0 bottom-0 w-[220px] h-[150px] object-contain"
    />
  </div>
</div>

            

      
      {/* Bottom Cards */}
      <div className="grid grid-cols-2 gap-6 w-[650px]">
        <div className="bg-white rounded-2xl border p-5 flex items-center gap-4">
          <ProductImage
            src="/assets/pg.png"
            alt="PlayGo"
            color="#f3f4f6"
            className="w-20 h-20"
          />

          <div>
            <h3 className="font-semibold">Sono Playgo 5</h3>
            <p className="text-gray-500 text-sm">from $569</p>

            <button className="text-blue-600 text-sm font-semibold mt-2">
              DISCOVER NOW
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-5 flex items-center gap-4">
          <ProductImage
            src="/assets/keybord.png"
            alt="Keyboard"
            color="#f3f4f6"
            className="w-20 h-20"
          />

          <div>
            <h3 className="font-semibold">
              Logitech Bluetooth Keyboard
            </h3>

            <button className="text-blue-600 text-sm font-semibold mt-2">
              Best for device
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}