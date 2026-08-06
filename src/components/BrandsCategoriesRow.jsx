import { featuredBrandLogos, topCategories } from '../data/products.js'
import ProductImage from './ProductImage.jsx'

export default function BrandsCategoriesRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 bg-white rounded-lg border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 text-sm">FEATURED BRANDS</h3>
          <a href="#" className="text-xs text-gray-400 hover:text-brand">View All</a>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {featuredBrandLogos.map((src, i) => (
            <div
              key={i}
              className="h-12 flex items-center justify-center border border-gray-100 rounded px-2"
            >
              <img src={src} alt={`brand-${i}`} className="max-h-6 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 text-sm">TOP CATEGORIES</h3>
          <a href="#" className="text-xs text-gray-400 hover:text-brand">View All</a>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {topCategories.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-1.5">
              <ProductImage src={c.img} alt={c.name} color={c.color} className="w-12 h-12" />
              <span className="text-[11px] text-gray-600 text-center">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
