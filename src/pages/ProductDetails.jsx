import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Minus, Plus, Heart, Star, CheckCircle2, XCircle, Truck, ShieldCheck, RotateCcw } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/catalog.js'
import ProductImage from '../components/ProductImage.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()

  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('description')

  useEffect(() => {
    setActiveImg(0)
    setQty(1)
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="text-2xl font-bold text-ink dark:text-inkdark mb-3">Product not found</h1>
        <p className="text-muted dark:text-muted-dark mb-6">The product you're looking for doesn't exist or was removed.</p>
        <button onClick={() => navigate('/pages/products')} className="rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
          Back to Shop
        </button>
      </div>
    )
  }

  const wishlisted = isWishlisted(product.id)
  const related = getRelatedProducts(product)
  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.img]

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-10 bg-white dark:bg-bg-dark text-ink dark:text-inkdark">
      {/* Breadcrumb */}
      <nav className="text-xs text-muted dark:text-muted-dark">
        <Link to="/" className="hover:text-brand">Home</Link> / <Link to="/pages/products" className="hover:text-brand">Shop</Link> / <span className="text-ink dark:text-inkdark font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Gallery */}
        <div className="lg:col-span-5">
          <ProductImage src={gallery[activeImg]} color={product.color} alt={product.name} className="w-full h-80 md:h-96 mb-4" />
          <div className="flex gap-3">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`h-16 w-16 rounded-md border-2 overflow-hidden ${activeImg === i ? 'border-brand' : 'border-gray-200 dark:border-gray-700'}`}
              >
                <ProductImage src={g} color={product.color} className="w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-4 space-y-4">
          {product.badge && (
            <span className="inline-block bg-brand text-white text-[11px] font-semibold px-2 py-1 rounded">{product.badge}</span>
          )}
          <h1 className="text-2xl font-extrabold font-display leading-snug">{product.name}</h1>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className={i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
              ))}
            </div>
            <span className="text-xs text-muted dark:text-muted-dark">({product.reviews || 0} reviews)</span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black text-red-600">${product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="text-base text-muted dark:text-muted-dark line-through">${product.oldPrice.toFixed(2)}</span>}
          </div>

          {product.features && (
            <ul className="space-y-1.5 text-sm text-muted dark:text-muted-dark list-disc list-inside">
              {product.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}

          <div className="flex items-center gap-3 text-xs font-semibold flex-wrap pt-1">
            {product.freeShipping && (
              <span className="flex items-center gap-1 text-brand"><Truck size={13} /> FREE SHIPPING</span>
            )}
            {product.inStock === false ? (
              <span className="flex items-center gap-1 text-red-500"><XCircle size={14} /> Out of stock</span>
            ) : (
              <span className="flex items-center gap-1 text-brand"><CheckCircle2 size={14} /> In stock</span>
            )}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center rounded-lg border border-gray-200 dark:border-gray-700">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                <Minus size={14} />
              </button>
              <span className="px-4 text-sm font-bold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                <Plus size={14} />
              </button>
            </div>

            <button
              onClick={() => product.inStock !== false && addToCart(product, qty)}
              disabled={product.inStock === false}
              className="flex-1 rounded-lg bg-brand py-3 text-sm font-bold text-white hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ADD TO CART
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-colors ${
                wishlisted ? 'border-red-400 text-red-500 bg-red-50 dark:bg-red-950/30' : 'border-gray-200 dark:border-gray-700 text-gray-400 hover:text-red-400'
              }`}
              aria-label="Toggle wishlist"
            >
              <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>

          <p className="text-xs text-muted dark:text-muted-dark pt-2">
            SKU: <span className="font-medium text-ink dark:text-inkdark">{product.sku}</span> &nbsp;|&nbsp;
            Category: <span className="font-medium text-ink dark:text-inkdark">{product.category}</span> &nbsp;|&nbsp;
            Brand: <span className="font-medium text-ink dark:text-inkdark">{product.brand}</span>
          </p>
        </div>

        {/* Brand / trust card */}
        <div className="lg:col-span-3 space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <p className="text-xs text-muted dark:text-muted-dark mb-1">Brand</p>
            <p className="font-bold text-lg">{product.brand}</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3 text-xs text-muted dark:text-muted-dark">
            <p className="flex items-center gap-2"><ShieldCheck size={15} className="text-brand" /> Guaranteed Safe Checkout</p>
            <p className="flex items-center gap-2"><RotateCcw size={15} className="text-brand" /> 30 Days Money Back</p>
            <p className="flex items-center gap-2"><Truck size={15} className="text-brand" /> Ships from United States</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex gap-8 border-b border-gray-200 dark:border-gray-700 text-sm font-bold uppercase tracking-wide">
          {['description', 'reviews', 'additional information'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 -mb-px border-b-2 transition-colors ${
                tab === t ? 'border-brand text-brand' : 'border-transparent text-muted dark:text-muted-dark hover:text-ink dark:hover:text-inkdark'
              }`}
            >
              {t === 'reviews' ? `Reviews (${product.reviews || 0})` : t}
            </button>
          ))}
        </div>

        <div className="py-6 text-sm text-muted dark:text-muted-dark leading-relaxed max-w-3xl">
          {tab === 'description' && <p>{product.description}</p>}
          {tab === 'reviews' && (
            <p>{product.reviews ? `This product has ${product.reviews} verified reviews averaging ${product.rating.toFixed(1)} out of 5 stars.` : 'No reviews yet — be the first to review this product.'}</p>
          )}
          {tab === 'additional information' && (
            <ul className="space-y-2">
              <li><strong className="text-ink dark:text-inkdark">Brand:</strong> {product.brand}</li>
              <li><strong className="text-ink dark:text-inkdark">Category:</strong> {product.category}</li>
              <li><strong className="text-ink dark:text-inkdark">SKU:</strong> {product.sku}</li>
            </ul>
          )}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-4 uppercase tracking-wide">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  )
}
