const categories = [
  { name: 'Laptops', highlight: true },
  { name: 'PC & Computers' },
  { name: 'Cell Phones' },
  { name: 'Tablets' },
  { name: 'Gaming & VR' },
  { name: 'Networking' },
  { name: 'Cameras' },
  { name: 'Sounds' },
  { name: 'Office' },
  { name: 'Storage, USB' },
  { name: 'Accessories' },
  { name: 'Clearance' },
]

export default function CategorySidebar() {
  return (
    <div className="bg-white rounded-lg border border-gray-100 h-full p-4">
      {/* Sale Header (Red text, no background block) */}
      <div className="text-red-500 text-sm font-bold pb-3">
        SALE 40% OFF
      </div>

      {/* Categories List */}
      <ul className="space-y-3">
        {categories.map((c) => (
          <li key={c.name}>
            <a
              href="#"
              className={`block text-sm text-gray-900 hover:text-red-500 ${
                c.highlight ? 'font-semibold' : ''
              }`}
            >
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}