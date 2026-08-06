import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import CategorySearchBar from './components/CategorySearchBar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Wishlist from './pages/Wishlist.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Profile from './pages/Profile.jsx'
import Contact from './pages/Contact.jsx'
import Checkout from './pages/Checkout.jsx'
import MiniCartDrawer from './components/MiniCartDrawer.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'
import SingleProductPay from './pages/SingleProductpay.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-bg-dark flex flex-col">
      <Header />
      <CategorySearchBar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/products" element={<Products />} />
          <Route path="/shop/product-details/:id" element={<ProductDetails />} />
          <Route path="/pages/wishlist" element={<Wishlist />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/cart" element={<Cart />} />
          <Route path="/pages/profile" element={<Profile />} />
          <Route path="/shop/contact" element={<Contact />} />
          <Route path="/pages/checkout" element={<Checkout />} />
          <Route path="/pages/SingleProductPage" element={<SingleProductPage />} />
          <Route path="/shop/SingleProductPay" element={<SingleProductPay />} />
        </Routes>
      </main>

      <Footer />
      <MiniCartDrawer />
    </div>
  )
}