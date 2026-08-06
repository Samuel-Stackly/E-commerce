import ProductImage from './ProductImage.jsx'
import ProductCard from './ProductCard.jsx'

export default function CategoryProductSection({
  title, banner, categoryTiles, products, dark = false,
}) {
  return (
    <div 
      className="bg-white rounded-xl border border-gray-100 p-6 mx-auto shadow-sm"
      style={{
        width: '100%',
        maxWidth: '1300px',
        borderRadius: '10px',
        opacity: '1',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">{title}</h3>
        <a href="#" className="text-xs font-semibold text-gray-400 hover:text-[#1ABA1A] uppercase tracking-wider transition-colors">
          View All
        </a>
      </div>

      {/* Banner & Category Tiles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        {/* Banner Section */}
        <div
          className={`lg:col-span-2 rounded-xl p-8 flex items-center justify-between relative overflow-hidden shadow-sm ${
            dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
          }`}
        >
          <div className="relative z-10 max-w-[60%]">
            <h4 className="text-2xl font-extrabold leading-snug mb-2">{banner.title}</h4>
            {banner.subtitle && <p className="text-xs opacity-75 mb-4 leading-relaxed">{banner.subtitle}</p>}
            <button className={`text-xs font-bold px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wider ${
              dark ? 'bg-[#1ABA1A] text-white hover:bg-[#159a15]' : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}>
              {banner.cta || 'SHOP NOW'}
            </button>
          </div>
          {banner.img && (
            <img
              src={banner.img}
              alt={banner.title}
              className="absolute right-0 top-0 h-full w-1/2 object-contain object-right p-4"
            />
          )}
        </div>

        {/* Category Tiles Grid */}
        <div className="grid grid-cols-3 gap-3 content-center bg-gray-50/50 p-4 rounded-xl border border-gray-100">
          {categoryTiles.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-1.5 text-center p-2 rounded-lg hover:bg-white transition-colors">
              <ProductImage src={c.img} alt={c.name} color={c.color} className="w-12 h-12" />
              <span className="text-[11px] text-gray-800 font-semibold line-clamp-1">{c.name}</span>
              <span className="text-[10px] text-gray-400 font-medium">{c.count} items</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}