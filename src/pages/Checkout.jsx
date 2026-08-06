import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = React.useState('bank')
  const { items, subtotal, clearCart } = useCart()

  const shipping = items.length === 0 ? 0 : items.some((i) => i.freeShipping) ? 0 : 9.5
  const orderTotal = subtotal + shipping

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed successfully!')
    clearCart()
  }

  return (
    <div 
      className="mx-auto px-5 md:px-8 py-6 space-y-8 bg-white dark:bg-bg-dark text-ink dark:text-inkdark"
      style={{
        width: '100%',
        maxWidth: '1390px',
        minHeight: '1858.77px',
        opacity: '1',
      }}
    >
      {/* breadcrumb */}
      <nav className="text-xs text-muted dark:text-muted-dark">
        <Link to="/" className="hover:text-brand">Home</Link> / <Link to="/pages" className="hover:text-brand">pages</Link> / <span className="text-ink dark:text-inkdark font-medium">checkout</span>
      </nav>

      <h1 className="font-display font-bold text-2xl uppercase tracking-widest2">CHECKOUT</h1>

      {/* Top Banner Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#EDEFF6] dark:bg-gray-900 p-4 rounded-sm text-sm text-muted dark:text-muted-dark">
          Returning customer? <a href="#" className="text-brand font-semibold hover:underline">Click here to log in</a>
        </div>
        <div className="bg-[#EDEFF6] dark:bg-gray-900 p-4 rounded-sm text-sm text-muted dark:text-muted-dark">
          Have a coupon? <a href="#" className="text-brand font-semibold hover:underline">Click here to enter your code</a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Billing & Additional Information Column */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display font-bold text-lg text-ink dark:text-inkdark">Billing Detail</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                First Name <span className="text-red-500">*</span>
              </label>
              <input type="text" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input type="text" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
              Company Name <span className="text-muted font-normal">(Optional)</span>
            </label>
            <input type="text" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <select required defaultValue="United States (US)" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]">
              <option>United States (US)</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>India</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input type="text" placeholder="House number and street name ..." required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
            <input type="text" placeholder="Apartment, suite, unit, etc (Optional)" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
              Town / City <span className="text-red-500">*</span>
            </label>
            <input type="text" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
              State / County <span className="text-red-500">*</span>
            </label>
            <select required defaultValue="Washington" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]">
              <option>Washington</option>
              <option>New York</option>
              <option>California</option>
              <option>Texas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input type="text" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input type="tel" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input type="email" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A]" />
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <input type="checkbox" id="create-account" className="w-4 h-4 text-[#1ABA1A] rounded border-gray-300 focus:ring-[#1ABA1A]" />
            <label htmlFor="create-account" className="text-sm text-ink dark:text-inkdark">Create an account?</label>
          </div>

          {/* Additional Information Section */}
          <div className="pt-6 space-y-4">
            <h2 className="font-display font-bold text-lg text-ink dark:text-inkdark">Additional Information</h2>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                Order Notes <span className="text-muted font-normal">(Optional)</span>
              </label>
              <textarea 
                rows={4}
                placeholder="Note about your order, e.g. special note for delivery"
                className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#1ABA1A] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Your Order Summary Column */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display font-bold text-lg text-ink dark:text-inkdark">Your Order</h2>

          <div className="bg-[#EDEFF6] dark:bg-gray-900 p-6 rounded-sm space-y-6">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted dark:text-muted-dark border-b border-gray-200 dark:border-gray-700 pb-3">
              <span>Product</span>
              <span>Sub Total</span>
            </div>

            {items.length === 0 ? (
              <p className="text-sm text-muted dark:text-muted-dark py-4">Your cart is empty.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 p-1 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                      <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink dark:text-inkdark leading-tight line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted dark:text-muted-dark mt-1">x {item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-ink dark:text-inkdark">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            )}

            <div className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="text-muted dark:text-muted-dark">{shipping === 0 ? 'Worldwide Standard Shipping' : 'Standard Shipping'}</span>
              <span className="text-[#1ABA1A] font-semibold">{shipping === 0 ? 'FREE' : `+ $${shipping.toFixed(2)}`}</span>
            </div>

            <div className="flex justify-between items-center text-base font-bold text-ink dark:text-inkdark pt-1">
              <span>Order Total</span>
              <span className="text-[#1ABA1A] text-lg">${orderTotal.toFixed(2)}</span>
            </div>

            {/* Payment Options */}
            <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {/* Direct Bank Transfer */}
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="bank" 
                    checked={paymentMethod === 'bank'} 
                    onChange={() => setPaymentMethod('bank')}
                    className="w-4 h-4 text-[#1ABA1A] focus:ring-[#1ABA1A]" 
                  />
                  <span className="text-sm font-bold text-ink dark:text-inkdark">Direct Bank Transfer</span>
                </label>
                {paymentMethod === 'bank' && (
                  <p className="text-xs text-muted dark:text-muted-dark pl-7 leading-relaxed">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                )}
              </div>

              {/* Cash on Delivery */}
              <div>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={paymentMethod === 'cod'} 
                    onChange={() => setPaymentMethod('cod')}
                    className="w-4 h-4 text-[#1ABA1A] focus:ring-[#1ABA1A]" 
                  />
                  <span className="text-sm font-bold text-ink dark:text-inkdark">Cash on Delivery</span>
                </label>
              </div>

              {/* Paypal */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="paypal" 
                    checked={paymentMethod === 'paypal'} 
                    onChange={() => setPaymentMethod('paypal')}
                    className="w-4 h-4 text-[#1ABA1A] focus:ring-[#1ABA1A]" 
                  />
                  <span className="text-sm font-bold text-ink dark:text-inkdark">Paypal</span>
                </label>
                <a href="#" className="text-xs text-blue-600 hover:underline">What's Paypal?</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1ABA1A] hover:bg-[#159a15] text-white text-sm font-bold uppercase tracking-widest2 py-4 rounded-sm transition-colors text-center"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}