export default function PromoStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative bg-brand rounded-lg overflow-hidden text-white min-h-[140px]">
        <img src="/assets/cash-back-1.png" alt="10% Cashback" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 p-6 h-full flex flex-col justify-center">
          <p className="text-2xl font-extrabold drop-shadow">10% Back</p>
          <p className="text-sm opacity-95 drop-shadow">
            Earn 10% Cash back on Swootech.{' '}
            <a href="#" className="underline font-semibold">Learn how</a>
          </p>
        </div>
      </div>

      <div className="relative bg-gray-900 rounded-lg overflow-hidden text-white min-h-[140px]">
        <img src="/assets/cash-back-2.png" alt="Download our app" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="relative z-10 p-6 h-full flex flex-col justify-center">
          <p className="text-lg font-bold mb-1">Download our app</p>
          <p className="text-sm text-gray-300 mb-3">
            Enter your phone number and we'll send you a download link.
          </p>
          <div className="flex gap-2 max-w-sm">
            <input
              type="text"
              placeholder="Enter phone number"
              className="bg-gray-800/90 text-sm px-3 py-2 rounded outline-none flex-1"
            />
            <button className="bg-brand text-sm font-semibold px-4 py-2 rounded">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
