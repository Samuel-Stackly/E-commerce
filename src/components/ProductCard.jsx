import { Link } from 'react-router-dom'
import { Truck, Gift, CheckCircle2, XCircle, Heart, ShoppingCart } from 'lucide-react'
import ProductImage from './ProductImage.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function ProductCard({ product }) {
  const {
    id, name, price, oldPrice, badge, reviews, freeShipping,
    freeGift, inStock, preOrder, contact, colorSwatches, color, img,
  } = product

  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishlisted = isWishlisted(id)

  return (
    <div className="relative flex h-full flex-col rounded-lg border border-gray-100 bg-white p-5 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {badge && (
        <span className="absolute top-4 left-4 z-10 rounded bg-brand px-2 py-1 text-[11px] font-semibold text-white">
          {badge}
        </span>
      )}
      <button
        onClick={() => toggleWishlist(product)}
        className={`absolute top-4 right-4 z-10 transition-colors ${
          wishlisted ? 'text-red-500' : 'text-gray-300 hover:text-red-400'
        }`}
        aria-label="Toggle wishlist"
      >
        <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
      </button>

      <Link to={`/shop/product-details/${id}`} className="mb-4 block">
        <ProductImage
          src={img}
          alt={name}
          color={color}
          className="h-44 w-full p-4 sm:h-48"
        />
      </Link>

      {reviews && <p className="text-[11px] text-gray-400 mb-1">({reviews})</p>}

      <Link to={`/shop/product-details/${id}`}>
        <h3 className="text-sm font-medium text-gray-800 dark:text-inkdark leading-snug mb-2 line-clamp-2 h-10 hover:text-brand">
          {name}
        </h3>
      </Link>

      <div className="mb-2">
        <span className="text-red-600 font-semibold">${price.toFixed(2)}</span>
        {oldPrice && (
          <span className="text-gray-400 text-xs line-through ml-2">${oldPrice.toFixed(2)}</span>
        )}
      </div>

      <div className="flex items-center gap-3 mb-2 text-[11px] font-medium flex-wrap">
        {freeShipping && (
          <span className="flex items-center gap-1 text-brand">
            <Truck size={12} /> FREE SHIPPING
          </span>
        )}
        {freeGift && (
          <span className="flex items-center gap-1 text-orange-500">
            <Gift size={12} /> FREE GIFT
          </span>
        )}
      </div>

      {inStock === true && (
        <p className="flex items-center gap-1 text-brand text-xs">
          <CheckCircle2 size={13} /> In stock
        </p>
      )}
      {inStock === false && (
        <p className="flex items-center gap-1 text-red-500 text-xs">
          <XCircle size={13} /> Out of stock
        </p>
      )}
      {preOrder && <p className="text-xs text-gray-500">PRE - ORDER</p>}
      {contact && <p className="text-xs text-gray-500">Contact</p>}

      {colorSwatches && (
        <div className="flex gap-1 mt-2">
          {colorSwatches.map((c, i) => (
            <span
              key={i}
              className="w-3.5 h-3.5 rounded-full border border-gray-200"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => inStock !== false && addToCart(product, 1)}
        disabled={inStock === false}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-gray-100 dark:bg-gray-800 py-2 text-xs font-bold text-gray-800 dark:text-inkdark transition-colors hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ShoppingCart size={14} /> Add to Cart
      </button>
    </div>
  )
}
