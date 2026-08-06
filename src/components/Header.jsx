import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ChevronDown, Heart, Scale, User2, ShoppingCart, Sun, Moon, Search, LogOut, ClipboardList, Menu, X } from 'lucide-react'
import Dropdown from './Dropdown'
import logo from "/assets/logo.svg";
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const pagesLinks = [
  { label: 'Login', path: '/pages/login' },
  { label: 'Register', path: '/pages/register' },
  { label: 'Cart', path: '/pages/cart' },
  { label: 'Wishlist', path: '/pages/wishlist' },
  { label: 'Profile', path: '/pages/profile', active: true },
  { label: 'Checkout', path: '/pages/checkout' },
  { label: 'About', path: '/pages/about' },
]


const productLinks = [
  { label: 'Products', path: '/pages/products' },
  { label: 'Single Product', path: '/pages/SingleProductPage' },
  { label: 'Single Product Pay', path: '/shop/SingleProductPay' },
]

const currencies = ['USD', 'EUR', 'INR']

const languages = [
  { label: 'Eng', flag: 'us' },
  { label: 'French', flag: 'fr' },
  { label: 'German', flag: 'de' },
]

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-3">
      <img src={logo} alt="Swoo Tech Mart logo" className="h-11 w-11 rounded-full" />
      <div className="leading-tight">
        <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">SWOO</p>
        <p className="-mt-1 text-[11px] font-medium tracking-[0.25em] text-gray-500 dark:text-gray-400">
          TECH MART
        </p>
      </div>
    </NavLink>
  )
}

function DropdownLink({ label, path, active, onClick }) {
  return (
    <NavLink
      to={path || '#'}
      onClick={() => onClick?.()}
      className={({ isActive }) =>
        `block px-5 py-2.5 ${
          active || isActive
            ? 'bg-gray-50 dark:bg-gray-800 font-medium text-[#18b918]'
            : 'text-gray-700 dark:text-gray-200 hover:text-[#18b918]'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

function ThemeSlider() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18b918]/40 rounded-full"
    >
      <span
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-300 ${
          isDark ? 'bg-gray-700' : 'bg-gray-200'
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${
            isDark ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </span>
      {isDark ? (
        <Moon className="h-4 w-4 text-gray-700 dark:text-gray-200" />
      ) : (
        <Sun className="h-4 w-4 text-amber-500" />
      )}
    </button>
  )
}

function TopBar() {
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState(languages[0])

  return (
    <div className="hidden items-center justify-between border-b border-gray-100 dark:border-gray-800 px-4 py-2 text-sm md:flex lg:px-0">
      <div className="flex items-center gap-3">
        <span className="rounded bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
          Hotline 24/7
        </span>
        <span className="font-bold text-gray-900 dark:text-white">(025) 3886 25 16</span>
      </div>

      <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
          Sell on Swoo
        </a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
          Order Tracking
        </a>

        <Dropdown
          align="right"
          panelClassName="w-28"
          trigger={() => (
            <span className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-white">
              {currency} <ChevronDown className="h-3.5 w-3.5" />
            </span>
          )}
        >
          {(close) =>
            currencies.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCurrency(c)
                  close()
                }}
                className={`block w-full px-4 py-2 text-left ${
                  c === currency
                    ? 'bg-blue-50 dark:bg-blue-900/30 font-medium text-blue-600'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {c}
              </button>
            ))
          }
        </Dropdown>

        <Dropdown
          align="right"
          panelClassName="w-32"
          trigger={() => (
            <span className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-white">
              <img
                src={`https://flagcdn.com/w20/${language.flag}.png`}
                alt={language.label}
                className="h-3.5 w-5 rounded-sm object-cover"
              />
              {language.label} <ChevronDown className="h-3.5 w-3.5" />
            </span>
          )}
        >
          {(close) =>
            languages.map((lang) => (
              <button
                key={lang.label}
                onClick={() => {
                  setLanguage(lang)
                  close()
                }}
                className={`block w-full px-4 py-2 text-left ${
                  lang.label === language.label
                    ? 'bg-blue-50 dark:bg-blue-900/30 font-medium text-blue-600'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {lang.label}
              </button>
            ))
          }
        </Dropdown>
      </div>
    </div>
  )
}

function IconButton({ children, badge, to, onClick }) {
  const comp = (
    <button
      onClick={onClick}
      className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {children}
      {!!badge && (
        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#18b918] text-[11px] font-semibold text-white">
          {badge}
        </span>
      )}
    </button>
  )

  return to ? <NavLink to={to}>{comp}</NavLink> : comp
}

function NavDropdown({ label, links, width = 'w-48' }) {
  return (
    <Dropdown
      panelClassName={width}
      trigger={(open) => (
        <span className="flex items-center gap-1 text-sm font-semibold tracking-wide text-gray-900 dark:text-white hover:text-[#18b918] cursor-pointer">
          {label}
          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
        </span>
      )}
    >
      {(close) =>
        links.map((link) => (
          <DropdownLink key={link.label} {...link} onClick={close} />
        ))
      }
    </Dropdown>
  )
}

function Nav() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      <NavLink
        to="/"
        className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white hover:text-[#18b918]"
      >
        HOME
      </NavLink>

      <NavDropdown
        label="PAGES"
        links={pagesLinks}
        width="w-48"
      />

      <Dropdown
        panelClassName="w-56"
        trigger={(open) => (
          <span className="flex items-center gap-1 text-sm font-semibold tracking-wide text-gray-900 dark:text-white hover:text-[#18b918] cursor-pointer">
            <NavLink to="/pages/products">PRODUCTS</NavLink>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </span>
        )}
      >
        {(close) =>
          productLinks.map((link) => (
            <DropdownLink
              key={link.label}
              {...link}
              onClick={close}
            />
          ))
        }
      </Dropdown>

      <NavLink
        to="/shop/contact"
        className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white hover:text-[#18b918]"
      >
        CONTACT
      </NavLink>
    </nav>
  )
}

export default function Header() {
  const { totalItems } = useCart()
  const { count: wishlistCount } = useWishlist()
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileQuery, setMobileQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const submitMobileSearch = (e) => {
    e.preventDefault()
    navigate(`/pages/products?search=${encodeURIComponent(mobileQuery)}`)
    setMobileMenuOpen(false)
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className="mx-auto rounded-[10px] bg-white dark:bg-gray-900"
      style={{ width: '100%', maxWidth: 1300 }}
    >
      <TopBar />

      <div className="flex items-center justify-between gap-3 px-4 py-4 lg:gap-4 lg:px-0">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Logo />
        </div>

        <Nav />

        <form onSubmit={submitMobileSearch} className="hidden md:flex lg:hidden items-center rounded-full bg-gray-100 dark:bg-gray-800 pr-1">
          <input
            value={mobileQuery}
            onChange={(e) => setMobileQuery(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-40 bg-transparent px-4 py-2 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none"
          />
          <button aria-label="Search" className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            <Search className="h-3.5 w-3.5" />
          </button>
        </form>

        <div className="flex items-center gap-3 lg:gap-6">
          <div className="hidden items-center gap-3 sm:flex">
            <ThemeSlider />
            <IconButton to="/pages/wishlist" badge={wishlistCount || undefined}>
              <Heart className="h-5 w-5" />
            </IconButton>
            <IconButton to="/pages/profile">
              <User2 className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="flex items-center gap-3 sm:hidden">
            <ThemeSlider />
            <IconButton to="/pages/wishlist" badge={wishlistCount || undefined}>
              <Heart className="h-5 w-5" />
            </IconButton>
            <IconButton to="/pages/profile">
              <User2 className="h-5 w-5" />
            </IconButton>
          </div>

          <div className="hidden leading-tight sm:block">
            {isAuthenticated ? (
              <Dropdown
                align="right"
                panelClassName="w-44 dark:bg-gray-900 dark:border-gray-700"
                noButton
                trigger={() => (
                  <div className="cursor-pointer">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Welcome
                    </p>
                    <p className="flex items-center gap-1 text-sm font-bold text-gray-900 dark:text-white">
                      {user.name}
                      <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                    </p>
                  </div>
                )}
              >
                {(close) => (
                  <div className="text-gray-700 dark:text-gray-200">
                    <div className="border-b border-gray-100 px-4 py-2.5 dark:border-gray-700">
                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                      <p className="truncate text-xs text-gray-400">{user.email}</p>
                    </div>
                    <NavLink
                      to="/pages/profile"
                      onClick={close}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-[#18b918] dark:hover:bg-gray-800"
                    >
                      <User2 className="h-4 w-4" /> Profile
                    </NavLink>
                    <NavLink
                      to="/pages/checkout"
                      onClick={close}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-[#18b918] dark:hover:bg-gray-800"
                    >
                    
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => {
                        logout()
                        close()
                        navigate('/')
                      }}
                      className="flex w-full items-center gap-2 border-t border-gray-100 px-4 py-2.5 text-left text-sm text-red-500 hover:bg-red-50 dark:border-gray-700 dark:hover:bg-red-950/30"
                    >
                      <LogOut className="h-4 w-4" /> Sign Out
                    </button>
                  </div>
                )}
              </Dropdown>
            ) : (
              <>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Welcome
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  <NavLink to="/pages/login" className="hover:text-[#18b918]">Log In</NavLink> / <NavLink to="/pages/register" className="hover:text-[#18b918]">Register</NavLink>
                </p>
              </>
            )}
          </div>

          <IconButton to="/pages/cart" badge={totalItems || undefined}>
            <ShoppingCart className="h-5 w-5" fill="currentColor" />
          </IconButton>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-100 dark:border-gray-800 px-4 py-4 space-y-5 lg:hidden">
          {/* Mobile search */}
          <form onSubmit={submitMobileSearch} className="flex items-center rounded-full bg-gray-100 dark:bg-gray-800 pr-1">
            <input
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none"
            />
            <button aria-label="Search" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
              <Search className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Nav links */}
          <nav className="flex flex-col divide-y divide-gray-100 text-sm font-semibold text-gray-800 dark:divide-gray-800 dark:text-gray-100">
            <NavLink to="/" onClick={closeMobileMenu} className="py-3">
              Home
            </NavLink>
            <NavLink to="/pages/products" onClick={closeMobileMenu} className="py-3">
              Products
            </NavLink>
            <NavLink to="/shop/contact" onClick={closeMobileMenu} className="py-3">
              Contact
            </NavLink>
            <div className="py-3">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">Pages</p>
              <div className="flex flex-col gap-2.5 pl-1">
                {pagesLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-[#18b918]"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          {/* Dark mode toggle */}
          <div className="flex items-center justify-between rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2.5">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Dark Mode
            </span>
            <ThemeSlider />
          </div>

          {/* Auth section */}
          <div className="border-t border-gray-100 pt-4 dark:border-gray-800">
            {isAuthenticated ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Welcome</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{user.name}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    logout()
                    closeMobileMenu()
                    navigate('/')
                  }}
                  className="flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-500 dark:bg-red-950/30"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <NavLink
                  to="/pages/login"
                  onClick={closeMobileMenu}
                  className="flex-1 rounded-full bg-gray-100 py-2.5 text-center text-sm font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                >
                  Log In
                </NavLink>
                <NavLink
                  to="/pages/register"
                  onClick={closeMobileMenu}
                  className="flex-1 rounded-full bg-[#18b918] py-2.5 text-center text-sm font-semibold text-white"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}