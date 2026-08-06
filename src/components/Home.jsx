import CategorySidebar from './CategorySidebar.jsx'
import HeroSection from './HeroSection.jsx'
import BrandsCategoriesRow from './BrandsCategoriesRow.jsx'
import DealsOfTheDay from './DealsOfTheDay.jsx'
import MemberBanner from './MemberBanner.jsx'
import TabbedProductRow from './TabbedProductRow.jsx'
import BrandNewForYou from './BrandNewForYou.jsx'
import CategoryProductSection from './CategoryProductSection.jsx'
import BrowseCategories from './BrowseCategories.jsx'
import PromoStrip from './PromoStrip.jsx'
import RecentlyViewed from './RecentlyViewed.jsx'
import AboutSwoo from './AboutSwoo.jsx'
import { bestSeller, cellphones, laptops } from '../data/products.js'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1300px] min-w-0 space-y-6 overflow-x-hidden px-4 py-6">
      {/* Sidebar + hero */}
      <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="hidden min-w-0 lg:col-span-1 lg:block">
          <CategorySidebar />
        </div>
        <div className="min-w-0 lg:col-span-3">
          <HeroSection />
        </div>
      </div>

      <BrandsCategoriesRow />
      <DealsOfTheDay />
      <MemberBanner />
      <TabbedProductRow products={bestSeller} />
      <BrandNewForYou />

      <CategoryProductSection
        title="Top Cellphones &amp; Tablets"
        banner={{ title: 'REDMI NOTE 12 PRO+ 5G', subtitle: 'Rise to the challenge', cta: 'SHOP NOW', img: '/assets/redmi.png' }}
        categoryTiles={[
          { name: 'iPhone (iOS)', count: 74, img: '/assets/iphone.png', color: '#f3f4f6' },
          { name: 'Android', count: 55, img: '/assets/android.png', color: '#f3f4f6' },
          { name: '5G Support', count: 12, img: '/assets/5g.png', color: '#f3f4f6' },
          { name: 'Gaming', count: 9, img: '/assets/gaming.png', color: '#f3f4f6' },
          { name: 'Xiaomi', count: 52, img: '/assets/xiaomi.png', color: '#f3f4f6' },
          { name: 'Accessories', count: 29, img: '/assets/accories.png', color: '#f3f4f6' },
        ]}
        products={cellphones}
      />

      <CategoryProductSection
        title="Best Laptops &amp; Computers"
        dark
        banner={{ title: 'Mobok 2 Superchard By M2', subtitle: 'Start from $1,599', cta: 'SHOP NOW', img: '/assets/lap.png' }}
        categoryTiles={[
          { name: 'Macbook', count: 74, img: '/assets/p03.png', color: '#f3f4f6' },
          { name: 'Gaming PC', count: 5, img: '/assets/mission.png', color: '#f3f4f6' },
          { name: 'Laptop Office', count: 22, img: '/assets/laptop.png', color: '#f3f4f6' },
          { name: 'Laptop 15"', count: 55, img: '/assets/lap.png', color: '#f3f4f6' },
          { name: 'M1 2023', count: 32, img: '/assets/monitoring.png', color: '#f3f4f6' },
          { name: 'Secondhand', count: 18, img: '/assets/p04.png', color: '#f3f4f6' },
        ]}
        products={laptops}
      />

      <BrowseCategories />
      <PromoStrip />
      <RecentlyViewed />
      <AboutSwoo />
    </div>
  )
}
