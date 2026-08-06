import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, Search, Truck, RotateCcw, Lock } from 'lucide-react'
import { categories } from '../data/catalog.js'

const features = [
  { icon: Truck, label: 'FREE SHIPPING OVER $199' },
  { icon: RotateCcw, label: '30 DAYS MONEY BACK' },
  { icon: Lock, label: '100% SECURE PAYMENT' },
]

export default function CategorySearchBar() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('search', query.trim())
    if (category !== 'All Categories') params.set('category', category)
    navigate(`/pages/products?${params.toString()}`)
  }

  return (
    <div
      className="mx-auto mt-4 flex items-center justify-between gap-6 rounded-[10px] bg-[#18b918] px-3 py-3"
      style={{ width: '100%', maxWidth: 1300 }}
    >
      {/* Search pill */}
      <form onSubmit={submit} className="flex w-full max-w-[520px] items-center rounded-full bg-white pr-1 relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex shrink-0 items-center gap-1.5 border-r border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900"
        >
          {category}
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>

        {open && (
          <div className="absolute top-full left-0 z-30 mt-2 w-56 overflow-hidden rounded-md border border-gray-100 bg-white py-1 text-sm shadow-lg">
            <button
              type="button"
              onClick={() => {
                setCategory('All Categories')
                setOpen(false)
              }}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
            >
              All Categories
            </button>
            {categories.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => {
                  setCategory(c)
                  setOpen(false)
                }}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anything..."
          className="w-full bg-transparent px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />

        <button
          type="submit"
          aria-label="Search"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800"
        >
          <Search className="h-4 w-4" />
        </button>
      </form>

      {/* Feature badges */}
      <div className="hidden items-center gap-8 whitespace-nowrap pr-2 text-xs font-semibold tracking-wide text-white md:flex">
        {features.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2">
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
