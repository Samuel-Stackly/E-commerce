import { featuredBrandLogos, topCategories } from '../data/products.js'
import ProductImage from './ProductImage.jsx'

export default function BrandsCategoriesRow() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
      <div className="flex h-full min-h-[180px] flex-col bg-white rounded-lg border border-gray-100 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">FEATURED BRANDS</h3>
          <a href="#" className="text-xs font-semibold text-[#18b918] hover:text-[#128a12]">
            View All
          </a>
        </div>
        <div className="grid flex-1 grid-cols-3 content-center gap-4 sm:grid-cols-5">
          {featuredBrandLogos.map((src, i) => (
            <div
              key={i}
              className="flex h-12 items-center justify-center rounded border border-gray-100 px-2"
            >
              <img src={src} alt={`brand-${i}`} className="max-h-6 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-full min-h-[180px] flex-col bg-white rounded-lg border border-gray-100 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">TOP CATEGORIES</h3>
          <a href="#" className="text-xs font-semibold text-[#18b918] hover:text-[#128a12]">
            View All
          </a>
        </div>
        <div className="grid flex-1 grid-cols-4 content-center gap-3">
          {topCategories.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-1.5">
              <ProductImage src={c.img} alt={c.name} color={c.color} className="h-12 w-12" />
              <span className="text-center text-[11px] text-gray-600">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
