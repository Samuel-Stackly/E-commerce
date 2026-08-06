import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-8">
      {/* breadcrumb */}
      <nav className="text-xs text-muted dark:text-muted-dark">
        <Link to="/" className="hover:text-brand">
          Home
        </Link>{' '}
        / <Link to="/shop" className="hover:text-brand">Shop</Link> /{' '}
        <span className="text-ink dark:text-inkdark font-medium">Contact</span>
      </nav>

      {/* main contact block */}
      <section className="card p-6 md:p-8">
        <h1 className="font-display font-bold text-lg uppercase tracking-widest2 mb-2 text-ink dark:text-inkdark">Ready to Work With Us</h1>
        <p className="text-sm text-muted dark:text-muted-dark mb-8">
          Contact us for all your questions and opinions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 keep-grid">
          {/* form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="py-16 text-center">
                <p className="font-display text-2xl mb-2 text-ink dark:text-inkdark">Thanks — your message is on its way.</p>
                <p className="text-sm text-muted dark:text-muted-dark">We'll get back to you as soon as we can.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                    Phone Number <span className="text-muted dark:text-muted-dark font-normal">(Optional)</span>
                  </label>
                  <input type="tel" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <select required className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" defaultValue="United States (US)">
                    <option>United States (US)</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>India</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                    Subject <span className="text-muted dark:text-muted-dark font-normal">(Optional)</span>
                  </label>
                  <input type="text" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Note about your order, e.g. special note for delivery"
                    className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A] resize-none"
                  />
                </div>

                <label className="flex items-start gap-2 text-sm mb-6 justify-center lg:justify-start text-left">
                  <input type="checkbox" required className="w-4 h-4 text-[#1ABA1A] rounded border-gray-300 focus:ring-[#1ABA1A] mt-1 shrink-0" />
                  <span className="text-muted dark:text-muted-dark">
                    I want to receive news and updates once in a while. By submitting, I'm agreed to the{' '}
                    <a href="#" className="text-brand font-semibold hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  className="bg-[#1ABA1A] hover:bg-[#159a15] text-white text-sm font-bold uppercase tracking-widest2 px-8 py-3.5 rounded-sm transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* info column */}
          <div className="pt-10 lg:pt-0 space-y-5">
            <div 
              className="bg-[#EDEFF6] dark:bg-gray-900 p-8 rounded-[10px]"
              style={{
                width: '100%',
                maxWidth: '524.16px',
                minHeight: '466px',
              }}
            >
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-widest text-muted dark:text-muted-dark font-semibold mb-1">United States (Head Quater)</p>
                <p className="text-sm font-medium text-ink dark:text-inkdark mb-1">152 Thatcher Road St, Mahattan, 10463, US</p>
                <p className="text-sm text-muted dark:text-muted-dark mb-1">(+025) 3886 25 16</p>
                <a href="mailto:hello@swattechmart.com" className="text-sm text-[#1ABA1A] hover:underline">
                  hello@swattechmart.com
                </a>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-widest text-muted dark:text-muted-dark font-semibold mb-1">United Kingdom (Branch)</p>
                <p className="text-sm font-medium text-ink dark:text-inkdark mb-1">12 Buckingham Rd, Thornthwaite, HG3 4TY, UK</p>
                <p className="text-sm text-muted dark:text-muted-dark mb-1">(+718) 895-5350</p>
                <a href="mailto:contact@swattechmart.co.uk" className="text-sm text-[#1ABA1A] hover:underline">
                  contact@swattechmart.co.uk
                </a>
              </div>

              <div className="flex items-center space-x-3 text-ink dark:text-inkdark mt-5">
                <a href="#" className="w-9 h-9 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:text-[#1ABA1A] shadow-sm"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:text-[#1ABA1A] shadow-sm"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:text-[#1ABA1A] shadow-sm"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:text-[#1ABA1A] shadow-sm"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>

            <div
              className="rounded-[10px] overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '524.16px',
                height: '380px',
                opacity: '1',
             
backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.15), rgba(0,0,0,0.5)), url(/assets/contact-img.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#1B1F23',
              }}
              role="img"
              aria-label="Person typing on a laptop"
            />
          </div>
        </div>
      </section>

      {/* map */}
      <section className="card p-6 md:p-8">
        <h2 className="font-display font-bold text-lg uppercase tracking-widest2 mb-5 text-ink dark:text-inkdark">Find Us on Google Map</h2>
        <div className="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe
            title="Store location map"
            src="https://maps.google.com/maps?q=257%20Thatcher%20Road%20St%2C%20Brooklyn%2C%20Manhattan%2C%20NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 md:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}