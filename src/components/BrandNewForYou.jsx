import ProductImage from './ProductImage.jsx'

const tiles = [
  {
    title: 'Zumac Steel Computer Case',
    subtitle: 'And an option to upgrade every three years.',
    cta: 'SHOP NOW',
    img: '/assets/img-1.jpg',
    bg: '#0f3d1f',
    badge: null,
  },
  {
    title: 'Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.',
    subtitle: 'Limited offer. Hurry up',
    cta: 'SHOP NOW',
    img: '/assets/img-2.jpg',
    bg: '#e5e7eb',
    badge: null,
  },
  {
    title: 'Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.',
    subtitle: 'Limited offer. Hurry up',
    cta: 'SHOP NOW',
    img: '/assets/img-3.jpg',
    bg: '#374151',
    badge: 'SALE 50%',
  },
  {
    title: 'iPad Pro Mini 6 - Powerful I in hand',
    subtitle: 'From $19.00/month for 36 months. $280.35 final payment due in month 37',
    cta: 'SHOP NOW',
    img: '/assets/img-1.jpg',
    bg: '#f97316',
    badge: null,
  },
]

export default function BrandNewForYou() {
  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900 text-lg uppercase tracking-wide">Brand New For You</h3>
        <div className="flex items-center space-x-2 bg-gray-100 px-2.5 py-1 rounded-full text-xs font-semibold text-gray-600">
          <span>prev</span>
          <span className="text-gray-300">/</span>
          <span>next</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="relative p-4 pb-0">
              {t.badge && (
                <span className="absolute top-6 right-6 z-10 bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {t.badge}
                </span>
              )}
              <div 
                className="rounded-xl overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: t.bg, height: '220px' }}
              >
                <img src={t.img} alt={t.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2">{t.title}</p>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2">{t.subtitle}</p>
              </div>
              <button className="w-fit text-xs font-bold border border-[#1ABA1A] text-[#1ABA1A] rounded-lg px-4 py-2 hover:bg-[#1ABA1A] hover:text-white transition-colors uppercase tracking-wider">
                {t.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}