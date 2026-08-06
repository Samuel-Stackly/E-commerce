import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'

const NAV_ITEMS = [
    { id: 'account', label: 'Account info' },
    { id: 'orders', label: 'My order' },
    { id: 'address', label: 'My address' },
    { id: 'password', label: 'Change password' },
]

const MOCK_ORDERS = [
    { id: '#SW-10234', date: 'Jul 12, 2026', status: 'Delivered', total: '$579.00' },
    { id: '#SW-10198', date: 'Jun 29, 2026', status: 'Shipped', total: '$1,259.00' },
    { id: '#SW-10142', date: 'Jun 03, 2026', status: 'Delivered', total: '$169.00' },
]

export default function Profile() {
    const [tab, setTab] = React.useState('account')
    const [showPassword, setShowPassword] = React.useState(false)
    const [showNewPassword, setShowNewPassword] = React.useState(false)

    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const fullName = user.name || "Mark Cole"
    const nameParts = fullName.split(' ')
    const initialFirstName = nameParts[0] || "Mark"
    const initialLastName = nameParts.slice(1).join(' ') || "Cole"

    const [firstName, setFirstName] = React.useState(initialFirstName)
    const [lastName, setLastName] = React.useState(initialLastName)
    const [email, setEmail] = React.useState(user.email || "swoo@gmail.com")
    const [phone, setPhone] = React.useState("+1 0231 4554 452")

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
                {/* breadcrumb */}
                <nav className="text-xs text-muted dark:text-muted-dark mb-6">
                    <Link to="/" className="hover:text-brand">
                        Home
                    </Link>{' '}
                    / <span>pages</span> / <span className="text-ink dark:text-inkdark font-medium">profile</span>
                </nav>

                <div className="card p-6 grid grid-cols-1 lg:grid-cols-4 gap-8 keep-grid items-start">
                    {/* sidebar */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-stretch">
                        <div className="w-36 h-36 lg:w-full lg:h-auto bg-porcelain dark:bg-bg-dark rounded-sm overflow-hidden mb-4 border hairline">
                            <img
                                src="/assets/profile-img.png"
                                alt="profile"
                                className="w-full aspect-[4/5] object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200';
                                }}
                            />
                        </div>
                        <p className="font-display font-bold text-lg text-center lg:text-left text-ink dark:text-inkdark">
                            {firstName} {lastName}
                        </p>

                        <p className="text-sm text-muted dark:text-muted-dark mb-5 text-center lg:text-left">
                            {email}
                        </p>

                        <nav className="space-y-2 w-full">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setTab(item.id)}
                                    aria-pressed={tab === item.id}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-sm text-sm font-medium transition-colors ${tab === item.id
                                        ? 'bg-[#1ABA1A] text-white'
                                        : 'bg-porcelain dark:bg-bg-dark hover:bg-emerald-50 dark:hover:bg-gray-800 text-ink dark:text-inkdark'
                                        }`}
                                >
                                    {item.label}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* content */}
                    <div className="lg:col-span-3 pt-10 lg:pt-0">
                        {tab === 'account' && (
                            <>
                                <h1 className="font-display font-bold text-2xl mb-8 text-ink dark:text-inkdark">Account Info</h1>
                                <form
                                    className="max-w-2xl"
                                    onSubmit={(e) => {
                                        e.preventDefault()

                                        const updatedUser = {
                                            ...user,
                                            name: `${firstName} ${lastName}`,
                                            email
                                        }

                                        localStorage.setItem("user", JSON.stringify(updatedUser))
                                        alert("Profile updated successfully")
                                    }}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                                                Last Name <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" 
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]"
                                        />
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">
                                            Phone Number <span className="text-muted dark:text-muted-dark font-normal">(Optional)</span>
                                        </label>
                                        <input 
                                            type="tel" 
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" 
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-[#1ABA1A] hover:bg-[#159a15] text-white text-sm font-bold uppercase tracking-widest2 px-8 py-3 rounded-sm transition-colors"
                                    >
                                        Save
                                    </button>
                                </form>
                            </>
                        )}

                        {tab === 'orders' && (
                            <>
                                <h1 className="font-display font-bold text-2xl mb-8 text-ink dark:text-inkdark">My Order</h1>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm min-w-[480px]">
                                        <thead>
                                            <tr className="border-b hairline text-left">
                                                <th className="pb-3 eyebrow text-ink dark:text-inkdark">Order</th>
                                                <th className="pb-3 eyebrow text-ink dark:text-inkdark">Date</th>
                                                <th className="pb-3 eyebrow text-ink dark:text-inkdark">Status</th>
                                                <th className="pb-3 eyebrow text-ink dark:text-inkdark">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y hairline">
                                            {MOCK_ORDERS.map((order) => (
                                                <tr key={order.id}>
                                                    <td className="py-4 font-semibold text-ink dark:text-inkdark">{order.id}</td>
                                                    <td className="py-4 text-muted dark:text-muted-dark">{order.date}</td>
                                                    <td className="py-4">
                                                        <span className="text-[11px] font-bold uppercase text-[#1ABA1A] border border-[#1ABA1A] rounded-sm px-2 py-1">
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 font-semibold text-ink dark:text-inkdark">{order.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}

                        {tab === 'address' && (
                            <>
                                <h1 className="font-display font-bold text-2xl mb-8 text-ink dark:text-inkdark">My Address</h1>
                                <form className="max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-5">
                                        <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">Street Address</label>
                                        <input type="text" defaultValue="257 Thatcher Road St" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">Town / City</label>
                                            <input type="text" defaultValue="Brooklyn, Manhattan" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">Zip Code</label>
                                            <input type="text" defaultValue="NY 10092" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">Country</label>
                                        <select className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" defaultValue="United States (US)">
                                            <option>United States (US)</option>
                                            <option>Canada</option>
                                            <option>United Kingdom</option>
                                            <option>India</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#1ABA1A] hover:bg-[#159a15] text-white text-sm font-bold uppercase tracking-widest2 px-8 py-3 rounded-sm transition-colors"
                                    >
                                        Save
                                    </button>
                                </form>
                            </>
                        )}

                        {tab === 'password' && (
                            <>
                                <h1 className="font-display font-bold text-2xl mb-8 text-ink dark:text-inkdark">Change Password</h1>
                                <form className="max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-5">
                                        <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">Current Password</label>
                                        <div className="relative">
                                            <input type={showPassword ? 'text' : 'password'} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 pr-10 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((s) => !s)}
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted dark:text-muted-dark hover:text-[#1ABA1A]"
                                            >
                                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium mb-1.5 text-ink dark:text-inkdark">New Password</label>
                                        <div className="relative">
                                            <input type={showNewPassword ? 'text' : 'password'} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 pr-10 text-sm text-ink dark:text-inkdark focus:outline-none focus:border-[#1ABA1A]" />
                                            <button
                                                type="button"
                                                onClick={() => setShowNewPassword((s) => !s)}
                                                aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted dark:text-muted-dark hover:text-[#1ABA1A]"
                                            >
                                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#1ABA1A] hover:bg-[#159a15] text-white text-sm font-bold uppercase tracking-widest2 px-8 py-3 rounded-sm transition-colors"
                                    >
                                        Save
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}