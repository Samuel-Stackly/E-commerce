import { recentlyViewed } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function RecentlyViewed() {
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
      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Your Recently Viewed</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {recentlyViewed.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}