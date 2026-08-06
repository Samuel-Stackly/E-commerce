import { useState } from 'react'
import { MoreHorizontal } from 'lucide-react'
import ProductCard from './ProductCard.jsx'

const tabs = ['Best Seller', 'New In', 'Popular']

export default function TabbedProductRow({ products }) {
  const [active, setActive] = useState(tabs[0])

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-6">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`text-sm font-bold uppercase tracking-wide pb-1 border-b-2 transition-colors ${
                active === t
                  ? 'text-gray-900 border-brand'
                  : 'text-gray-400 border-transparent hover:text-gray-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-xs text-gray-400 hover:text-brand">View All</a>
          <MoreHorizontal size={18} className="text-gray-300" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
