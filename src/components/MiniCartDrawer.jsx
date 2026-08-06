import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import ProductImage from './ProductImage.jsx'

export default function MiniCartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, subtotal, totalItems } =
    useCart()

  useEffect(() => {
    if (!isCartOpen) return
    const onKey = (e) => e.key === 'Escape' && closeCart()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isCartOpen, closeCart])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={closeCart} />

      <aside className="relative flex h-full w-full max-w-md flex-col bg-white dark:bg-gray-900 shadow-2xl animate-in slide-in-from-right">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 px-5 py-4">
          <h2 className="flex items-center gap-2 font-bold text-ink dark:text-inkdark">
            <ShoppingCart size={18} className="text-brand" />
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted dark:text-muted-dark">
              <ShoppingCart size={40} className="mb-3 opacity-30" />
              <p>Your cart is empty.</p>
              <Link
                to="/pages/products"
                onClick={closeCart}
                className="mt-4 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <ProductImage src={item.img} color={item.color} className="h-20 w-20 shrink-0" />
                  <div className="flex flex-1 flex-col">
                    <p className="line-clamp-2 text-sm font-medium text-ink dark:text-inkdark">{item.name}</p>
                    <p className="mt-1 text-sm font-semibold text-red-600">${item.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-gray-200 dark:border-gray-700">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-semibold text-ink dark:text-inkdark">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 dark:border-gray-800 px-5 py-4">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-muted dark:text-muted-dark">Sub Total:</span>
              <span className="text-lg font-bold text-ink dark:text-inkdark">${subtotal.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/pages/cart"
                onClick={closeCart}
                className="rounded-lg border border-gray-200 dark:border-gray-700 py-3 text-center text-xs font-bold uppercase tracking-wide text-ink dark:text-inkdark hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                View Cart
              </Link>
              <Link
                to="/pages/checkout"
                onClick={closeCart}
                className="rounded-lg bg-brand py-3 text-center text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
