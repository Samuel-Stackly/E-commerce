import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import ProductImage from '../components/ProductImage.jsx'

export default function Wishlist() {
  const { items, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-6 bg-white dark:bg-bg-dark text-ink dark:text-inkdark min-h-[50vh]">
      <nav className="text-xs text-muted dark:text-muted-dark">
        <Link to="/" className="hover:text-brand">Home</Link> / <span className="text-ink dark:text-inkdark font-medium">Wishlist</span>
      </nav>

      <h1 className="text-2xl font-extrabold font-display flex items-center gap-2">
        <Heart className="text-red-500" fill="currentColor" size={22} /> My Wishlist
      </h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center text-muted dark:text-muted-dark">
          <Heart size={48} className="mb-4 opacity-30" />
          <p className="mb-4">Your wishlist is empty.</p>
          <Link to="/pages/products" className="rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <div key={product.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900 relative">
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 right-3 z-10 text-gray-400 hover:text-red-500"
                aria-label="Remove from wishlist"
              >
                <Trash2 size={17} />
              </button>

              <Link to={`/shop/product-details/${product.id}`}>
                <ProductImage src={product.img} color={product.color} alt={product.name} className="w-full h-40 mb-3" />
              </Link>

              <Link to={`/shop/product-details/${product.id}`}>
                <h3 className="text-sm font-medium leading-snug mb-2 line-clamp-2 hover:text-brand">{product.name}</h3>
              </Link>

              <div className="mb-3">
                <span className="text-red-600 font-semibold">${product.price.toFixed(2)}</span>
                {product.oldPrice && <span className="text-gray-400 text-xs line-through ml-2">${product.oldPrice.toFixed(2)}</span>}
              </div>

              <button
                onClick={() => addToCart(product, 1)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-100 dark:bg-gray-800 py-2 text-xs font-bold hover:bg-brand hover:text-white transition-colors"
              >
                <ShoppingCart size={14} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
