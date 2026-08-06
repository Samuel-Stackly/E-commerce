import ProductImage from './ProductImage.jsx'

const columns = [
  {
    title: 'Audios & Cameras',
    banner: { img: '/assets/camera-1.png', color: '#1e3a8a' },
    items: [
      { name: 'Speaker', count: 12, img: '/assets/speaker.png' },
      { name: 'DSLR Camera', count: 8, img: '/assets/cam.png' },
      { name: 'Earbuds', count: 5, img: '/assets/earbuds.png' },
      { name: 'Microphone', count: 12, img: '/assets/microphone.png' },
    ],
  },
  {
    title: 'Gaming',
    banner: { img: '/assets/controler.png', color: '#0f172a' },
    items: [
      { name: 'Monitors', count: 28, img: '/assets/monitor.png' },
      { name: 'Chair', count: 12, img: '/assets/chair.png' },
      { name: 'Controller', count: 9, img: '/assets/controler.png' },
      { name: 'Keyboards', count: 30, img: '/assets/keybord.png' },
    ],
  },
  {
    title: 'Office Equipments',
    banner: { img: '/assets/projector.png', color: '#111827' },
    items: [
      { name: 'Printers', count: 8, img: '/assets/printer.png' },
      { name: 'Network', count: 92, img: '/assets/network.png' },
      { name: 'Security', count: 12, img: '/assets/security.png' },
      { name: 'Projectors', count: 10, img: '/assets/projector.png' },
    ],
  },
]

export default function BrowseCategories() {
  return (
    <div 
      className="w-full mx-auto"
      style={{
        maxWidth: '1300px',
        borderRadius: '10px',
        opacity: '1',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col) => (
          <div key={col.title} className="bg-white rounded-[10px] border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-base">{col.title}</h3>
              <a href="#" className="text-xs font-semibold text-gray-400 hover:text-[#1ABA1A] uppercase tracking-wider transition-colors">
                View All
              </a>
            </div>
            
            {/* Main Banner */}
            <div className="rounded-lg overflow-hidden mb-6">
              <ProductImage 
                src={col.banner.img} 
                alt={col.title} 
                color={col.banner.color} 
                className="w-full h-32" 
                fit="cover" 
              />
            </div>
            
            {/* Items Grid */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-4">
              {col.items.map((item) => (
                <div key={item.name} className="flex items-center gap-3 group cursor-pointer">
                  {/* Item Image */}
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-[#1ABA1A] transition-colors p-2 shrink-0">
                    <ProductImage 
                      src={item.img} 
                      alt={item.name} 
                      color="transparent" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  {/* Item Details */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[#1ABA1A] transition-colors line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      {item.count} items
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}