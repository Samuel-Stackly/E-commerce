import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Check, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();
  const navigate = useNavigate();

  const shipping = items.length === 0 ? 0 : items.some((i) => i.freeShipping) ? 0 : 9.5;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div
      className="mx-auto bg-white dark:bg-bg-dark text-ink dark:text-inkdark pb-20"
      style={{
        width: '100%',
        maxWidth: '1390px',
        opacity: '1',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6">

        {/* Breadcrumb */}
        <nav className="text-xs text-muted dark:text-muted-dark mb-8">
          <Link to="/" className="hover:text-brand">Home</Link> / <span>pages</span> / <span className="text-ink dark:text-inkdark font-medium">cart</span>
        </nav>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center text-muted dark:text-muted-dark">
            <ShoppingCart size={48} className="mb-4 opacity-30" />
            <p className="mb-4">Your cart is empty.</p>
            <Link to="/pages/products" className="rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              Continue Shopping
            </Link>
          </div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Side: Cart Items List */}
          <div className="lg:col-span-8 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                {/* Badge */}
                {item.badge && (
                  <span className="absolute top-4 left-4 bg-brand text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider z-10">
                    {item.badge}
                  </span>
                )}

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 z-10"
                  aria-label="Remove item"
                >
                  <Trash2 size={17} />
                </button>

                {/* Product Image & Details */}
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white dark:bg-gray-900 rounded-xl p-2 border border-gray-100 dark:border-gray-800 flex items-center justify-center shrink-0">
                    <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    {item.reviews != null && (
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <span>★</span>
                        <span>({item.reviews})</span>
                      </div>
                    )}
                    <Link to={`/shop/product-details/${item.id}`} className="font-display font-bold text-sm sm:text-base text-ink dark:text-inkdark leading-snug hover:text-brand block">
                      {item.name}
                    </Link>
                    <p className="text-lg sm:text-xl font-black text-red-500">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Selector & Tags */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <div className="inline-flex items-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1.5 text-xs font-bold text-ink dark:text-inkdark">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.freeShipping && (
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-[#1ABA1A] rounded tracking-wider">
                            FREE SHIPPING
                          </span>
                        )}
                        {item.freeGift && (
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-rose-50 dark:bg-rose-950/40 text-rose-500 rounded tracking-wider">
                            FREE GIFT
                          </span>
                        )}
                      </div>
                    </div>

                    {item.inStock !== false && (
                      <div className="flex items-center gap-1.5 text-xs text-[#1ABA1A] font-medium pt-1">
                        <Check size={14} />
                        <span>In stock</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right sm:text-right self-end sm:self-center">
                  <p className="text-xs text-muted dark:text-muted-dark">Subtotal</p>
                  <p className="font-bold text-ink dark:text-inkdark">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Order Summary Card */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-900 border border-[#1ABA1A] rounded-2xl p-6 shadow-sm sticky top-6">
            <h3 className="font-display font-bold text-base text-ink dark:text-inkdark mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
                <span>Sub Total:</span>
                <span className="font-bold text-ink dark:text-inkdark">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
                <span>Shipping estimate:</span>
                <span className="font-bold text-ink dark:text-inkdark">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
                <span>Tax estimate:</span>
                <span className="font-bold text-ink dark:text-inkdark">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-base">
                <span className="font-extrabold text-ink dark:text-inkdark uppercase">ORDER TOTAL:</span>
                <span className="font-black text-lg text-ink dark:text-inkdark">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate('/pages/checkout')}
                className="w-full bg-[#1ABA1A] hover:bg-[#159a15] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-sm transition-colors"
              >
                CHECKOUT
              </button>
            </div>
          </div>

        </div>
        )}

      </div>
    </div>
  );
}
