const A = (name) => `/assets/${name}`

export const bestSeller = [
  { id: 1, name: 'BOSO 2 Wireless On Ear Headphone', price: 359.0, oldPrice: null, badge: 'SAVE $199.00', reviews: 152, freeShipping: true, freeGift: true, inStock: true, img: A('white-heatset.png'), color: '#f3f4f6' },
  { id: 2, name: 'OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS', price: 569.0, oldPrice: 769.0, badge: 'SAVE $50.00', reviews: 129, freeShipping: true, freeGift: true, inStock: true, img: A('p02.png'), color: '#f3f4f6' },
  { id: 3, name: 'uLosk Mini case 2.0, Xenon i9 / 32GB / SSD 512GB / VGA 8GB', price: 1729.0, oldPrice: 2193.0, badge: null, reviews: null, freeShipping: true, freeGift: false, inStock: false, img: A('mini-case.png'), color: '#f3f4f6' },
  { id: 4, name: 'Oppo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop', price: 979.0, oldPrice: 1259.0, badge: null, reviews: null, freeShipping: false, freeGift: false, preOrder: true, img: A('oppo-watch.png'), color: '#f3f4f6' },
  { id: 5, name: 'iSmart 24V Charger', price: 9.0, oldPrice: 12.0, badge: 'SAVE $3.00', reviews: null, freeShipping: false, freeGift: false, contact: true, img: A('charger.png'), color: '#f3f4f6' },
]

export const cellphones = [
  { id: 11, name: 'SROK Smart Phone 128GB, Oled Retina', price: 579.0, oldPrice: 850.0, badge: 'SAVE $199.00', reviews: 152, freeShipping: true, freeGift: false, inStock: true, img: A('phone1.png'), color: '#f3f4f6' },
  { id: 12, name: 'iPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB', price: 979.0, oldPrice: 1259.0, badge: 'NEW', reviews: null, freeShipping: true, freeGift: false, inStock: true, img: A('tablet-2.png'), color: '#f3f4f6' },
  { id: 13, name: 'OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS', price: 669.0, oldPrice: null, badge: null, reviews: null, freeShipping: true, freeGift: true, inStock: true, img: A('tablet-3.png'), color: '#f3f4f6' },
  { id: 14, name: 'Xiomai Redmi Note 5, 64GB', price: 1239.0, oldPrice: 1610.0, badge: 'SAVE $59.00', reviews: null, freeShipping: true, freeGift: false, contact: true, img: A('phone2.png'), color: '#f3f4f6' },
  { id: 15, name: 'Microsuite Alpha Ultra S5 Surface 128GB 2022, Silver', price: 1729.0, oldPrice: null, badge: null, reviews: null, freeShipping: false, freeGift: false, colorSwatches: ['#111827', '#9ca3af'], img: A('tablet-4.png'), color: '#f3f4f6' },
]

export const laptops = [
  { id: 21, name: 'Pineapple Macbook Pro 2022 M1 / 512 GB', price: 579.0, oldPrice: null, badge: 'NEW', reviews: null, freeShipping: true, freeGift: false, inStock: true, img: A('p03.png'), color: '#f3f4f6' },
  { id: 22, name: 'C&O Bluetooth Speaker', price: 979.0, oldPrice: null, badge: null, reviews: null, freeShipping: false, freeGift: false, colorSwatches: ['#111827', '#9ca3af'], img: A('speaker.png'), color: '#f3f4f6' },
  { id: 23, name: 'Gigaby Custome Case, i7 / 16GB / SSD 256GB', price: 1259.0, oldPrice: null, badge: null, reviews: null, freeShipping: true, freeGift: false, inStock: true, img: A('pg.png'), color: '#0f172a' },
  { id: 24, name: 'BEOS PC Gaming Case', price: 1239.0, oldPrice: 1610.0, badge: 'SAVE $59.00', reviews: null, freeShipping: true, freeGift: false, contact: true, img: A('p04.png'), color: '#f3f4f6' },
  { id: 25, name: 'aMoc All-in-one Computer M1', price: 1729.0, oldPrice: null, badge: null, reviews: null, freeShipping: false, freeGift: false, contact: true, img: A('p05.png'), color: '#f3f4f6' },
]

export const recentlyViewed = [
  { id: 31, name: 'Xiomia Remid 8 Sport Water Resistance Watch', price: 579.0, oldPrice: null, badge: null, img: A('watch.png'), color: '#f3f4f6' },
  { id: 32, name: 'Micrete Surface 2.0 Laptop', price: 979.0, oldPrice: null, badge: 'NEW', img: A('lap.png'), color: '#f3f4f6' },
  { id: 33, name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB', price: 1259.0, oldPrice: null, badge: null, img: A('tablet-5.png'), color: '#f3f4f6' },
  { id: 34, name: 'SROK Smart Phone 128GB, Oled Retina', price: 579.0, oldPrice: 779.0, badge: 'SAVE', img: A('phone3.png'), color: '#f3f4f6' },
]

export const featuredBrandLogos = [
  A('feu_pro1.png'), A('feu_pro2.png'), A('feu_pro3.png'), A('feu_pro4.png'), A('feu_pro5.png'),
  A('feu_pro6.png'), A('feu_pro7.png'), A('feu_pro8.png'), A('feu_pro9.png'), A('feu_pro10.png'),
]

export const topCategories = [
  { name: 'Laptops', img: A('lap.png'), color: '#f3f4f6' },
  { name: 'PC Gaming', img: A('mission.png'), color: '#f3f4f6' },
  { name: 'Headphones', img: A('headset.png'), color: '#f3f4f6' },
  { name: 'Monitors', img: A('monitoring.png'), color: '#f3f4f6' },
]
