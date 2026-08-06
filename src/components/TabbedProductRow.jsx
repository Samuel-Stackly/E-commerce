import { useState } from 'react'
import { MoreHorizontal } from 'lucide-react'
import ProductCard from './ProductCard.jsx'

const tabs = ['Best Seller', 'New In', 'Popular']

export default function TabbedProductRow({ products }) {
  const [active, setActive] = useState(tabs[0])

  return (
    <div className="rounded-lg border border-gray-100 bg-white p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`border-b-2 pb-1 text-sm font-bold uppercase tracking-wide transition-colors ${
                active === t
                  ? 'border-brand text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-xs font-semibold text-[#18b918] hover:text-[#128a12]">View All</a>
          <MoreHorizontal size={18} className="text-gray-300" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
