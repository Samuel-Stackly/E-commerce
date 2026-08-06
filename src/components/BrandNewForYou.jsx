import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    <div className="mx-auto w-full max-w-[1360px] px-4 py-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900">Brand New For You</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-[#1ABA1A] hover:text-[#1ABA1A]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-[#1ABA1A] hover:text-[#1ABA1A]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative p-6 pb-2">
              {t.badge && (
                <span className="absolute right-8 top-8 z-10 rounded-md bg-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {t.badge}
                </span>
              )}
              <div
                className="flex items-center justify-center overflow-hidden rounded-xl p-4"
                style={{ backgroundColor: t.bg, height: '280px' }}
              >
                <img
                  src={t.img}
                  alt={t.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between px-6 pb-7 pt-4">
              <div>
                <p className="mb-2 line-clamp-2 text-base font-bold leading-snug text-gray-900">
                  {t.title}
                </p>
                <p className="mb-5 line-clamp-2 text-sm text-gray-500">{t.subtitle}</p>
              </div>
              <button className="w-fit rounded-lg border border-[#1ABA1A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1ABA1A] transition-colors hover:bg-[#1ABA1A] hover:text-white">
                {t.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
