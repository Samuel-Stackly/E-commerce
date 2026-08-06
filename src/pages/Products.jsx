import React, { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, Check, Heart, ShoppingCart, X } from 'lucide-react'
import { allProducts, categories, brands } from '../data/catalog.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

const MAX_PRICE = Math.ceil(Math.max(...allProducts.map((p) => p.price)) / 100) * 100

// Every distinct swatch colour that actually exists on a real product
const allColorSwatches = [
  ...new Set(allProducts.flatMap((p) => p.colorSwatches || [])),
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()

  const [brandQuery, setBrandQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedColor, setSelectedColor] = useState(null)
  const [priceRange, setPriceRange] = useState({ min: 0, max: MAX_PRICE })
  const [minRating, setMinRating] = useState(0)
  const [inStockOnly, setInStockOnly] = useState(false)

  // Stay in sync if the header search bar navigates here with new params
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All')
  }, [searchParams])

  const query = searchParams.get('search') || ''

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedBrands([])
    setSelectedColor(null)
    setPriceRange({ min: 0, max: MAX_PRICE })
    setMinRating(0)
    setInStockOnly(false)
    const params = new URLSearchParams(searchParams)
    params.delete('category')
    setSearchParams(params)
  }

  const removeChip = (type) => {
    if (type === 'category') {
      setSelectedCategory('All')
      const params = new URLSearchParams(searchParams)
      params.delete('category')
      setSearchParams(params)
    }
    if (type === 'price') setPriceRange({ min: 0, max: MAX_PRICE })
    if (type === 'rating') setMinRating(0)
    if (type === 'stock') setInStockOnly(false)
    if (type === 'color') setSelectedColor(null)
    if (type === 'search') {
      const params = new URLSearchParams(searchParams)
      params.delete('search')
      setSearchParams(params)
    }
  }

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesQuery =
        !query.trim() ||
        p.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        p.brand.toLowerCase().includes(query.trim().toLowerCase()) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(query.trim().toLowerCase()))

      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand)
      const matchesColor = !selectedColor || (p.colorSwatches || []).includes(selectedColor)
      const matchesPrice = p.price >= priceRange.min && p.price <= priceRange.max
      const matchesRating = (p.rating || 0) >= minRating
      const matchesStock = !inStockOnly || p.inStock !== false

      return matchesQuery && matchesCategory && matchesBrand && matchesColor && matchesPrice && matchesRating && matchesStock
    })
  }, [query, selectedCategory, selectedBrands, selectedColor, priceRange, minRating, inStockOnly])

  const filteredBrands = brands.filter((b) => b.toLowerCase().includes(brandQuery.toLowerCase()))
  const brandCount = (b) => allProducts.filter((p) => p.brand === b).length
  const categoryCount = (c) => allProducts.filter((p) => p.category === c).length
  const ratingCount = (r) => allProducts.filter((p) => Math.floor(p.rating || 0) === r).length

  const activeChips = [
    query.trim() && { key: 'search', label: `"${query.trim()}"` },
    selectedCategory !== 'All' && { key: 'category', label: selectedCategory },
    (priceRange.min > 0 || priceRange.max < MAX_PRICE) && { key: 'price', label: `$${priceRange.min} – $${priceRange.max}` },
    minRating > 0 && { key: 'rating', label: `${minRating}★ & up` },
    inStockOnly && { key: 'stock', label: 'In stock' },
    selectedColor && { key: 'color', label: 'Color', swatch: selectedColor },
  ].filter(Boolean)

  const activeFilterCount = activeChips.length + selectedBrands.length

  return (
    <div className="bg-gray-100 dark:bg-bg-dark min-h-screen text-gray-800 dark:text-inkdark font-sans pb-12">
      {/* Breadcrumb & Subnav */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-2 px-6 text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-[1360px] mx-auto">
          <Link to="/" className="hover:text-brand">Home</Link> / Shop /{' '}
          <strong className="text-gray-800 dark:text-inkdark">
            {selectedCategory === 'All' ? 'Top Cell Phones & Tablets' : selectedCategory}
          </strong>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1360px] mx-auto px-4 py-6 space-y-6">

        {/* Top Banners Section */}
        <div>
          <div className="text-sm font-extrabold text-black dark:text-inkdark uppercase tracking-wide mb-3">
            TOP CELL PHONES & TABLETS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Headphone Banner */}
            <div className="md:col-span-2 bg-[#d6d8df] rounded-[10px] p-8 relative overflow-hidden flex items-center justify-between shadow-sm h-[375px]">
              <div className="z-10 space-y-3 max-w-sm">
                <h2 className="text-4xl font-bold text-[#333333] leading-tight">
                  Noise Cancelling <br />
                  <span className="text-[#666666] font-normal text-3xl">Headphone</span>
                </h2>
                <ul className="text-xs text-[#555555] space-y-1 pt-1">
                  <li>Boso Over-Ear Headphone</li>
                  <li>Wifi, Voice Assistant,</li>
                  <li>Low Latency Game Mode</li>
                </ul>
                <div className="pt-3">
                  <Link
                    to="/shop/product-details/1"
                    className="inline-block bg-white text-gray-900 font-semibold px-6 py-2.5 rounded-lg text-xs shadow hover:bg-gray-50 transition"
                  >
                    BUY NOW
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-center justify-end overflow-hidden pointer-events-none">
                <img
                  src="/assets/headphone.png"
                  alt="Wireless Headphones"
                  className="object-cover h-full scale-125 translate-x-12"
                />
              </div>
            </div>

            {/* Small Smartphone Banner */}
            <div className="bg-gradient-to-b from-[#e2e5f0] via-[#e9ebf5] to-[#f4f2f9] rounded-[10px] p-6 relative overflow-hidden flex flex-col justify-between shadow-sm h-[375px] border border-gray-200/50">
              <div className="z-10 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug lowercase">
                    redmi note 12 <br />Pro+ 5g
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">Rise to the challenge</p>
                </div>
                <Link
                  to="/pages/products?category=Cell%20Phones%20%26%20Tablets"
                  className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider"
                >
                  SHOP NOW
                </Link>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none">
                <img
                  src="/assets/redmi.png"
                  alt="Redmi Note 12 Pro+ 5g Series"
                  className="w-[428px] h-[310px] object-cover object-bottom"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Active filter chips */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-gray-900 rounded-[10px] border border-gray-100 dark:border-gray-800 shadow-sm p-3">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mr-1">Active filters:</span>
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                onClick={() => removeChip(chip.key)}
                className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-700 dark:text-gray-200 hover:text-red-600 text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                {chip.swatch && <span className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: chip.swatch }} />}
                {chip.label}
                <X size={12} />
              </button>
            ))}
            {selectedBrands.map((b) => (
              <button
                key={b}
                onClick={() => toggleBrand(b)}
                className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-700 dark:text-gray-200 hover:text-red-600 text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                {b}
                <X size={12} />
              </button>
            ))}
            <button
              onClick={clearFilters}
              className="text-xs font-bold text-red-500 hover:text-red-600 ml-1"
            >
              Reset All
            </button>
          </div>
        )}

        {/* Main Grid: Filter Sidebar + Product Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

          {/* Filter Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <div className="w-full p-6 rounded-[10px] border border-gray-200 dark:border-gray-700 shadow-sm space-y-6 bg-[#EEEFF6] dark:bg-[#1a1f2b]">
              {/* Categories Header & Reset All */}
              <div className="flex justify-between items-center">
                <h2 className="font-extrabold text-black dark:text-inkdark text-lg tracking-tight">
                  CATEGORIES
                </h2>
                <button onClick={clearFilters} className="text-xs text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition">
                  Reset All
                </button>
              </div>

              {/* Category pills */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`rounded-lg px-3 py-2 text-xs shadow-sm border text-left transition ${
                    selectedCategory === 'All'
                      ? 'bg-[#1ABA1A] border-[#1ABA1A] text-white font-semibold'
                      : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-[#1ABA1A]'
                  }`}
                >
                  All ({allProducts.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat)
                      const params = new URLSearchParams(searchParams)
                      params.set('category', cat)
                      setSearchParams(params)
                    }}
                    className={`rounded-lg px-3 py-2 text-xs shadow-sm border text-left transition truncate ${
                      selectedCategory === cat
                        ? 'bg-[#1ABA1A] border-[#1ABA1A] text-white font-semibold'
                        : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-[#1ABA1A]'
                    }`}
                    title={cat}
                  >
                    {cat} ({categoryCount(cat)})
                  </button>
                ))}
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              {/* By Brands Section */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 dark:text-inkdark text-sm">By Brands</h3>
                <input
                  type="text"
                  value={brandQuery}
                  onChange={(e) => setBrandQuery(e.target.value)}
                  placeholder="Search brands..."
                  className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-xs outline-none shadow-sm focus:border-[#1ABA1A] transition text-gray-700 dark:text-gray-200"
                />
                <div className="space-y-2.5 pt-1 max-h-44 overflow-y-auto pr-1">
                  {filteredBrands.map((brand) => (
                    <label key={brand} className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-200 cursor-pointer group">
                      <div className="flex items-center space-x-2.5">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="rounded text-[#1ABA1A] focus:ring-0 border-gray-300 w-4 h-4 cursor-pointer"
                        />
                        <span className="group-hover:text-[#1ABA1A] transition">{brand}</span>
                      </div>
                      <span className="text-gray-400 font-medium">({brandCount(brand)})</span>
                    </label>
                  ))}
                  {filteredBrands.length === 0 && (
                    <p className="text-xs text-gray-400 italic">No brands match "{brandQuery}"</p>
                  )}
                </div>
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              {/* By Price Section */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 dark:text-inkdark text-sm">By Price</h3>
                <input
                  type="range"
                  min={0}
                  max={MAX_PRICE}
                  step={10}
                  value={priceRange.max}
                  onChange={(e) => setPriceRange((r) => ({ ...r, max: Math.max(r.min, Number(e.target.value)) }))}
                  className="w-full accent-[#1ABA1A]"
                />
                <div className="flex items-center space-x-2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 text-xs border border-gray-200 dark:border-gray-700 flex items-center shadow-sm w-full">
                    <span className="text-gray-400 mr-1">$</span>
                    <input
                      type="number"
                      min={0}
                      value={priceRange.min}
                      onChange={(e) => setPriceRange((r) => ({ ...r, min: Math.max(0, Number(e.target.value) || 0) }))}
                      className="w-full bg-transparent outline-none font-medium text-gray-700 dark:text-gray-200"
                    />
                  </div>
                  <span className="text-gray-400 font-bold">–</span>
                  <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 text-xs border border-gray-200 dark:border-gray-700 flex items-center shadow-sm w-full">
                    <span className="text-gray-400 mr-1">$</span>
                    <input
                      type="number"
                      min={0}
                      value={priceRange.max}
                      onChange={(e) => setPriceRange((r) => ({ ...r, max: Number(e.target.value) || MAX_PRICE }))}
                      className="w-full bg-transparent outline-none font-medium text-gray-700 dark:text-gray-200"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              {/* By Rating Section */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 dark:text-inkdark text-sm">By Rating</h3>
                <div className="space-y-2.5">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <label key={stars} className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-200 cursor-pointer">
                      <div className="flex items-center space-x-2.5">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === stars}
                          onChange={() => setMinRating(stars)}
                          className="text-[#1ABA1A] focus:ring-0 border-gray-300 w-4 h-4 cursor-pointer"
                        />
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className={i < stars ? 'fill-amber-400' : 'text-gray-300'} />
                          ))}
                        </div>
                        <span>& up</span>
                      </div>
                      <span className="text-gray-400 font-medium">({ratingCount(stars)})</span>
                    </label>
                  ))}
                  {minRating > 0 && (
                    <button onClick={() => setMinRating(0)} className="text-[11px] text-brand hover:underline">
                      Clear rating filter
                    </button>
                  )}
                </div>
              </div>

              {allColorSwatches.length > 0 && (
                <>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  {/* By Color Section */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 dark:text-inkdark text-sm">By Color</h3>
                    <div className="flex flex-wrap gap-2">
                      {allColorSwatches.map((c) => (
                        <button
                          key={c}
                          onClick={() => setSelectedColor(selectedColor === c ? null : c)}
                          style={{ backgroundColor: c }}
                          className={`w-8 h-8 rounded-full cursor-pointer shadow-sm hover:scale-105 transition transform ${
                            selectedColor === c ? 'ring-2 ring-offset-2 ring-[#1ABA1A] dark:ring-offset-gray-900' : ''
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              <hr className="border-gray-200 dark:border-gray-700" />

              {/* Availability */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 dark:text-inkdark text-sm">Availability</h3>
                <label className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-200 cursor-pointer">
                  <div className="flex items-center space-x-2.5">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="rounded text-[#1ABA1A] focus:ring-0 border-gray-300 w-4 h-4 cursor-pointer"
                    />
                    <span>In stock only</span>
                  </div>
                  <span className="text-gray-400 font-medium">({allProducts.filter((p) => p.inStock !== false).length})</span>
                </label>
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              {/* GoPro Promotional Banner Card */}
              <div className="bg-[#1e2025] rounded-[10px] p-5 text-white relative overflow-hidden shadow-md flex flex-col justify-between h-[300px]">
                <div className="z-10 space-y-1">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-400">OKODO</span>
                  <h3 className="text-white text-lg font-bold">
                    OKODO
                    <br />
                    HERO 11+
                    <br />
                    BLACK
                  </h3>
                  <div className="mt-4 inline-block">
                    <p className="text-[14px] uppercase tracking-wider text-gray-400">FROM</p>
                    <p className="text-[30px] font-bold leading-none text-[#1ABA1A]">$169</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end justify-end pointer-events-none overflow-hidden">
                  <img
                    src="/assets/camera.png"
                    alt="GoPro HERO 11 Black"
                    className="w-48 h-48 object-contain translate-x-4 translate-y-4 opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Grid */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-[10px] shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-extrabold text-black dark:text-inkdark uppercase tracking-wide">
                  Best Seller In This Category
                </h3>
              </div>

              {filtered.length === 0 ? (
                <div className="py-20 text-center text-gray-500 dark:text-gray-400">
                  <p className="font-semibold mb-2">No products match your filters.</p>
                  <p className="text-sm mb-4">Try a different keyword or clear a filter on the left.</p>
                  <button
                    onClick={clearFilters}
                    className="rounded-full bg-[#1ABA1A] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#159a15]"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {filtered.map((product) => {
                    const wishlisted = isWishlisted(product.id)
                    return (
                      <div
                        key={product.id}
                        className="border border-gray-100 dark:border-gray-800 rounded-lg p-3 relative flex flex-col justify-between hover:shadow-md transition bg-white dark:bg-gray-900 group"
                      >
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-[#1ABA1A] text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                            {product.badge}
                          </span>
                        )}

                        <button
                          onClick={() => toggleWishlist(product)}
                          className={`absolute top-3 right-3 transition z-10 ${
                            wishlisted ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                          }`}
                          aria-label="Toggle wishlist"
                        >
                          <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
                        </button>

                        <Link to={`/shop/product-details/${product.id}`} className="w-full h-32 flex items-center justify-center py-2 relative">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
                          />
                        </Link>

                        <div className="space-y-1.5 mt-2">
                          <div className="flex items-center space-x-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={10} className={i < Math.floor(product.rating || 0) ? 'fill-amber-400' : 'text-gray-300'} />
                            ))}
                            <span className="text-[10px] text-gray-400 ml-1">({product.rating || 0})</span>
                          </div>

                          <Link to={`/shop/product-details/${product.id}`}>
                            <h4 className="text-xs font-semibold text-gray-800 dark:text-inkdark line-clamp-2 h-8 leading-tight hover:text-[#1ABA1A]">
                              {product.name}
                            </h4>
                          </Link>

                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-baseline space-x-1.5">
                              <span className="text-sm font-bold text-[#1ABA1A]">${product.price.toFixed(2)}</span>
                              {product.oldPrice && (
                                <span className="text-[10px] text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                              )}
                            </div>
                          </div>

                          {product.inStock === false ? (
                            <div className="pt-1 text-[10px] text-red-500 font-medium flex items-center space-x-1">
                              <X size={10} />
                              <span>Out of stock</span>
                            </div>
                          ) : (
                            <div className="pt-1 text-[10px] text-[#1ABA1A] font-medium flex items-center space-x-1">
                              <Check size={10} />
                              <span>In stock</span>
                            </div>
                          )}

                          <button
                            onClick={() => product.inStock !== false && addToCart(product, 1)}
                            disabled={product.inStock === false}
                            className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-md bg-gray-100 dark:bg-gray-800 py-1.5 text-[11px] font-bold text-gray-800 dark:text-inkdark transition-colors hover:bg-[#1ABA1A] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <ShoppingCart size={12} /> Add to Cart
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
