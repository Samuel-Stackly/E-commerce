import React from 'react'
import { Heart, Minus, Phone, Plus, Repeat, Truck } from 'lucide-react'

const PAYMENT_ICONS = [
  {
    src: "/assets/logo-image.png",
    alt: "PayPal",
  },
]

export default function ProductBuyBox({
  price,
  quantity,
  onQuantityChange,
  inStock,
  onAddToCart,
  onBuyWithPaypal,
  wishlisted,
  onToggleWishlist,
  justAdded,
}) {
  const monthly = (price / 12).toFixed(0)

  return (
    <div className="space-y-4">
      <div className="card p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
        <p className="eyebrow mb-1 text-xs text-muted dark:text-muted-dark uppercase tracking-wider font-semibold">Total Price</p>
        <p className="font-display font-extrabold text-2xl mb-2 text-ink dark:text-inkdark">${price.toFixed(2)}</p>
        <p className="text-xs text-muted dark:text-muted-dark mb-4">
          <span className="font-bold text-ink dark:text-inkdark">Affirm</span> ${monthly}/m in 12 months.{' '}
          <a href="#" className="underline hover:text-brand">
            See more
          </a>
        </p>

        <p className={`text-xs font-medium mb-4 ${inStock ? 'text-brand' : 'text-red-500'}`}>
          {inStock ? '✓ In stock' : 'Out of stock'}
        </p>

        <div className="w-full flex justify-center lg:justify-start mb-4">
          <div className="flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-sm w-fit">
            <button
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              aria-label="Decrease quantity"
              className="p-2.5 hover:text-brand text-ink dark:text-inkdark transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>

            <span className="w-6 text-center tabular-nums text-ink dark:text-inkdark text-sm font-semibold">
              {quantity}
            </span>

            <button
              onClick={() => onQuantityChange(quantity + 1)}
              aria-label="Increase quantity"
              className="p-2.5 hover:text-brand text-ink dark:text-inkdark transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <button
          onClick={onAddToCart}
          disabled={!inStock}
          className="w-full bg-[#1ABA1A] hover:bg-[#159a15] text-white py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed mb-3"
        >
          {!inStock ? 'Out of Stock' : justAdded ? 'Added ✓' : 'Add to Cart'}
        </button>

        <button
          onClick={onBuyWithPaypal}
          disabled={!inStock}
          className="w-full bg-[#FFC439] hover:brightness-95 text-gray-900 py-3 text-sm font-bold rounded-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed mb-4 shadow-sm"
        >
          Buy with <span className="font-black italic">PayPal</span>
        </button>

        <div className="flex items-center justify-between text-xs mb-4">
          <button
            onClick={onToggleWishlist}
            className={`flex items-center gap-1.5 hover:text-brand transition-colors ${wishlisted ? 'text-brand' : 'text-muted dark:text-muted-dark'}`}
          >
            <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-brand text-brand' : ''}`} />
            {wishlisted ? 'Wishlist added' : 'Add to wishlist'}
          </button>
          <span className="flex items-center gap-1.5 text-muted dark:text-muted-dark hover:text-brand cursor-pointer transition-colors">
            <Repeat className="w-3.5 h-3.5" /> Compare
          </span>
        </div>

        <p className="text-[11px] text-muted dark:text-muted-dark mb-2">Guaranteed Safe Checkout</p>
        <div className="flex items-center gap-2">
          {PAYMENT_ICONS.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="h-4 w-auto object-contain opacity-70"
            />
          ))}
        </div>
      </div>

      <div className="card p-5 bg-gray-900 text-white rounded-lg">
        <p className="flex items-center gap-2 text-xs font-semibold text-white p-3 rounded-md bg-black uppercase tracking-wider mb-2">
          <Phone className="w-3.5 h-3.5 text-brand" /> Quick Order 24/7
        </p>
        <p className="font-display font-bold text-lg mb-3 text-white">(025) 3886 25 16</p>
        <p className="flex items-center gap-2 text-xs text-gray-300">
          <Truck className="w-3.5 h-3.5 text-brand" /> Ships from United States
        </p>
      </div>
    </div>
  )
}