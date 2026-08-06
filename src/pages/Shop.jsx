import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductListRow from '../components/ProductListRow'
import CategoryFilterSidebar from '../components/CategoryFilterSidebar'
import ProductToolbar from '../components/ProductToolbar'
import Pagination from '../components/Pagination'
import PromoTile from '../components/PromoTile'
import CategoryIconTile from '../components/CategoryIconTile'
import { useFilteredProducts } from '../hooks/useFilteredProducts'

const POPULAR_CATEGORIES = [
  {
    image: "/assets/iphone.png",
    label: "iPhone (iOS)",
    count: "74 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/android.png",
    label: "Android",
    count: "35 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/5g.png",
    label: "5G Support",
    count: "12 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/tablet-3.png",
    label: "Apple Tablets",
    count: "12 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/charger.png",
    label: "Smartphone Chargers",
    count: "12 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/gaming.png",
    label: "Gaming",
    count: "12 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/xiaomi.png",
    label: "Xiaomi",
    count: "12 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/accories.png",
    label: "Accessories",
    count: "12 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/tablet-1.png",
    label: "Samsung Tablets",
    count: "12 items",
    category: "Cell Phones",
  },
  {
    image: "/assets/tablet-2.png",
    label: "eReader",
    count: "12 items",
    category: "Cell Phones",
  },
]

const DEFAULT_FILTERS = (searchParams) => ({
  query: searchParams.get('q') ?? '',
  categories: searchParams.get('category') ? [searchParams.get('category')] : [],
  colors: [],
  sizes: [],
  minPrice: 0,
  maxPrice: 2000,
  minRating: 0,
  onlyNew: false,
  sort: 'featured',
})

export default function Shop() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => DEFAULT_FILTERS(searchParams))
  const [itemsPerPage, setItemsPerPage] = useState(24)
  const [page, setPage] = useState(1)
  const [view, setView] = useState('grid')

  const filtered = useFilteredProducts(products, filters)
  const bestSellers = products.filter((p) => p.tags.includes('bestseller')).slice(0, 4)

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage))
  const currentPage = Math.min(page, totalPages)
  const rangeStart = filtered.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
  const rangeEnd = Math.min(currentPage * itemsPerPage, filtered.length)
  const pageItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleFiltersChange = (next) => {
    setFilters(next)
    setPage(1)
  }

  const categoryLabel = filters.categories[0] ?? 'Shop'

  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        {/* breadcrumb */}
        <nav className="text-xs text-muted dark:text-muted-dark mb-4">
          <Link to="/" className="hover:text-brand">
            Home
          </Link>{' '}
          / <Link to="/shop" className="hover:text-brand">Shop</Link>{' '}
          {filters.categories[0] && (
            <>
              / <span className="text-ink dark:text-inkdark font-medium">Top {categoryLabel}</span>
            </>
          )}
        </nav>

        {/* category header + hero banners */}
        <section className="card p-6 mb-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
          <h1 className="font-display font-bold text-lg uppercase tracking-wider mb-5 text-ink dark:text-inkdark">
            {filters.categories[0] ? `Top ${categoryLabel}` : 'Top Cell Phones & Tablets'}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PromoTile
              eyebrow="New Arrival"
              title="Noise Cancelling Headphone"
              subtitle="Sono Over-Ear Headphone, Wifi, Voice Assistant, Low Latency Game Mode"
              cta="Buy Now"
              to="/product/p01"
              image="/assets/white-heatset.png"
              className="h-56"
            />
            <PromoTile
              title="redmi note 12 Pro+ 5g"
              subtitle="Rise to the challenge"
              cta="Shop Now"
              to="/shop?category=Cell%20Phones"
              image="/assets/redmi.png"
              gradient="linear-gradient(135deg,#8C93E8,#3BAF4A)"
              className="h-56"
            />
          </div>
        </section>

        {/* popular categories */}
        <section className="card p-6 mb-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
          <h2 className="font-display font-bold text-sm uppercase tracking-wider mb-5 text-ink dark:text-inkdark">Popular Categories</h2>
          <div className="keep-grid grid grid-cols-2 sm:grid-cols-5 gap-y-6 gap-x-4">
            {POPULAR_CATEGORIES.map((c) => (
              <CategoryIconTile
                key={c.label}
                image={c.image}
                label={c.label}
                count={c.count}
                to={c.category ? `/shop?category=${encodeURIComponent(c.category)}` : "/shop"}
              />
            ))}
          </div>
        </section>

        {/* main layout: sidebar + content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10 keep-grid">
          <div className="lg:col-span-1">
            <CategoryFilterSidebar allProducts={products} filters={filters} onChange={handleFiltersChange} />
          </div>

          <div className="lg:col-span-3 pt-10 lg:pt-0">
            {/* best sellers in this category */}
            {bestSellers.length > 0 && (
              <section className="mb-10">
                <h2 className="font-display font-bold text-base mb-5 text-ink dark:text-inkdark">Best Seller In This Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
                  {bestSellers.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            )}

            <ProductToolbar
              resultCount={filtered.length}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={(n) => {
                setItemsPerPage(n)
                setPage(1)
              }}
              sort={filters.sort}
              onSortChange={(sort) => setFilters((f) => ({ ...f, sort }))}
              view={view}
              onViewChange={setView}
            />

            {pageItems.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-display text-2xl mb-2 text-ink dark:text-inkdark">Nothing matches, yet.</p>
                <p className="text-muted dark:text-muted-dark text-sm">
                  Try a broader search term, a higher price ceiling, or clear a filter on the left.
                </p>
              </div>
            ) : view === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mb-10">
                {pageItems.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-10">
                {pageItems.map((p) => (
                  <ProductListRow key={p.id} product={p} />
                ))}
              </div>
            )}

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </div>
      </div>
    </div>
  )
}