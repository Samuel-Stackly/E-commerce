import ProductImage from "./ProductImage";

export default function HeroSection() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-4 lg:gap-6">
      <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-6">
        {/* Main Hero */}
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#A9ABB5] sm:min-h-[400px] lg:min-h-[446px]">
          <div className="absolute left-6 top-8 z-10 max-w-[240px] text-white sm:left-10 sm:top-12 sm:max-w-[260px]">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-[42px] sm:leading-[48px]">
              Noise Cancelling
              <br />
              Headphone
            </h2>

            <p className="mt-4 text-sm leading-6 sm:mt-5 sm:text-[15px]">
              Sono Over-Ear Headphone with Voice Assistant,
              Low Latency Game Mode
            </p>

            <button className="mt-6 rounded-md bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-100 sm:mt-8">
              BUY NOW
            </button>
          </div>

          <img
            src="/assets/headphone.png"
            alt="Headphone"
            className="absolute bottom-0 right-0 h-[55%] w-auto max-w-[70%] object-contain sm:h-[310px] sm:max-w-none sm:w-[70%]"
          />
          <span className="absolute bottom-4 right-4 rounded bg-white/80 px-3 py-1 text-sm sm:bottom-6 sm:right-6">
            3 / 3
          </span>
        </div>

        {/* Side cards */}
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex min-h-[180px] flex-1 items-center rounded-[10px] border border-gray-200 bg-white p-5 lg:min-h-0">
            <ProductImage
              src="/assets/watch.png"
              alt="Watch"
              color="#f3f4f6"
              className="h-[120px] w-[120px] shrink-0 object-contain sm:h-[150px] sm:w-[150px]"
            />

            <div className="ml-4 min-w-0">
              <h3 className="text-lg font-semibold leading-7 text-[#1F2937] sm:text-[20px]">
                Sport Water
                <br />
                Resistance Watch
              </h3>

              <button className="mt-4 rounded-md bg-[#333333] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#222222]">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="relative min-h-[180px] flex-1 overflow-hidden rounded-[10px] bg-[#1F2937] p-5 lg:min-h-0">
            <h3 className="text-lg font-bold text-white">
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
              className="absolute bottom-0 right-0 h-[120px] w-[160px] object-contain sm:h-[150px] sm:w-[220px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        <div className="flex items-center gap-4 rounded-2xl border bg-white p-5">
          <ProductImage
            src="/assets/pg.png"
            alt="PlayGo"
            color="#f3f4f6"
            className="h-20 w-20 shrink-0"
          />

          <div className="min-w-0">
            <h3 className="font-semibold">Sono Playgo 5</h3>
            <p className="text-sm text-gray-500">from $569</p>

            <button className="mt-2 text-sm font-semibold text-blue-600">
              DISCOVER NOW
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border bg-white p-5">
          <ProductImage
            src="/assets/keybord.png"
            alt="Keyboard"
            color="#f3f4f6"
            className="h-20 w-20 shrink-0"
          />

          <div className="min-w-0">
            <h3 className="font-semibold">
              Logitech Bluetooth Keyboard
            </h3>

            <button className="mt-2 text-sm font-semibold text-blue-600">
              Best for device
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
