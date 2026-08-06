import { ImageIcon } from 'lucide-react'

export default function ProductImage({ src, color = '#e5e7eb', alt = '', className = '', fit = 'contain' }) {
  if (src) {
    const fitClass = fit === 'cover' ? 'object-cover' : 'object-contain'
    return (
      <div className={`flex items-center justify-center overflow-hidden rounded-md ${className}`} style={{ backgroundColor: color }}>
        <img src={src} alt={alt} className={`w-full h-full ${fitClass}`} />
      </div>
    )
  }
  return (
    <div
      className={`flex items-center justify-center rounded-md ${className}`}
      style={{ backgroundColor: color }}
    >
      <ImageIcon className="opacity-40" size={28} color="#fff" />
    </div>
  )
}
