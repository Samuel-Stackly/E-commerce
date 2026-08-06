import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import MemberBanner from '../components/MemberBanner'
import LogoMark from '../components/LogoMark'

const STATS = [
  { value: '$12.5M', label: 'Total revenue from 2001 - 2023' },
  { value: '12K+', label: 'Orders delivered successful on everyday' },
  { value: '725+', label: 'Store and office in U.S and worldwide' },
]

const FEATURES = [
  {
    title: '100% Authentic Products',
    description:
      'Swoo Tech Mart just distribute 100% authorized products & guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum sapien varius.',
  },
  {
    title: 'Fast Delivery',
    description:
      'Fast shipping with a lots of option to delivery. 100% guarantee that your goods alway on time and perserve quality.',
  },
  {
    title: 'Affordable Price',
    description: 'We offer an affordable & competitive price with a lots of special promotions.',
  },
]

const TIMELINE_LEFT = [
  { year: '1997', text: 'A small store located in Brooklyn Town, USA' },
  { year: '1998', text: 'It is a long established fact that a reader will be distracted by the readable' },
  { year: '2000', text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry' },
  { year: '2002', text: "Lorem ipsum has been the industry's standard dummy text ever since the" },
  { year: '2004', text: 'Contrary to popular belief, Lorem ipsum is not simply random text' },
  {
    year: '2005',
    text: "The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
  },
  {
    year: '2006',
    text:
      "There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  { year: '2010', text: 'All the Lorem ipsum generators on the Internet tend to repeat predefined' },
  { year: '2013', text: 'Lorem ipsum comes from sections 1.10.32' },
]

const TIMELINE_RIGHT = [
  {
    year: '2014',
    text: 'There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form',
  },
  { year: '2016', text: 'All the Lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary' },
  { year: '2020', text: 'Lorem ipsum comes from sections 1.10.32' },
  { year: '2021', text: 'Making this the first true generator on the Internet' },
  {
    year: '2022',
    text: 'Lorem ipsum which looks reasonable. The generated Lorem ipsum is therefore always free from repetition, injected humour',
  },
  {
    year: '2023',
    text: 'here are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form',
  },
]

const LEADERSHIP = [
  { name: 'Henry Avery', role: 'Chairman', image: '/assets/men-1.png' },
  { name: 'Michael Edward', role: 'Vice President', image: '/assets/men-2.png' },
  { name: 'Eden Hazard', role: 'CEO', image: '/assets/men-3.png' },
  { name: 'Robert Downey Jr', role: 'CEO', image: '/assets/men-4.png' },
  { name: 'Nathan Drake', role: 'Strategist Director', image: '/assets/men-5.png' },
]

export default function About() {
  return (
    <div 
      className="mx-auto bg-white dark:bg-bg-dark text-ink dark:text-inkdark pb-16"
      style={{
        width: '100%',
        maxWidth: '1390px',
        opacity: '1',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        {/* breadcrumb */}
        <nav className="text-xs text-muted dark:text-muted-dark mb-6">
          <Link to="/" className="hover:text-brand">
            Home
          </Link>{' '}
          / <span>pages</span> / <span className="text-ink dark:text-inkdark font-medium">about</span>
        </nav>

        {/* hero */}
        <section
          className="relative overflow-hidden mb-10 flex items-center px-8 py-10"
          style={{
            width: '100%',
            maxWidth: '1298px',
            height: '325.59px',
            borderRadius: '10px',
            margin: '0 auto 2.5rem auto',
            backgroundImage: "url('/assets/about-ecom.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#EDEEF0',
          }}
        >
          <div className="max-w-md">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl leading-tight text-ink">
              Best experience
              <br />
              always wins
            </h1>
            <p className="text-sm text-muted mt-4">
              #1 Online Marketplace for Electronic &amp; Technology
              <br />
              in Mahanttan, CA
            </p>
          </div>
        </section>

        {/* purpose + stats */}
        <section className="card p-6 mb-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <p className="font-display font-bold text-lg leading-snug md:col-span-1">
            Our purpose is to <span className="text-brand">enrich and enhance lives</span> through technology
          </p>
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-extrabold text-3xl">{stat.value}</p>
              <p className="text-xs text-muted dark:text-muted-dark uppercase mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* split intro panel */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-md overflow-hidden mb-10">
          <div
            className="min-h-[280px] flex flex-col justify-end p-6"
            style={{
              backgroundImage: "url('/assets/ab-1.png')",
              backgroundSize: 'cover',
              backgroundColor: '#3BAF4A',
            }}
          >
            <LogoMark inverted />
            <span className="w-9 h-9 rounded-full bg-white text-brand flex items-center justify-center font-display font-bold">
              S
            </span>
          </div>
          <div className="bg-porcelain dark:bg-bg-dark p-6 flex flex-col justify-center">
            <h2 className="font-display font-bold text-xl leading-snug mb-4">
              We connect millions of buyers and sellers around the world, empowering people &amp; creating economic
              opportunity for all.
            </h2>
            <p className="text-sm text-muted dark:text-muted-dark mb-6 leading-relaxed">
              Within our markets, millions of people around the world connect, both online and offline, to make, sell
              and buy unique goods. We also offer a wide range of Seller Services and tools that help creative
              entrepreneurs start, manage &amp; scale their businesses.
            </p>
            <Link
              to="/shop"
              className="inline-block w-fit bg-brand hover:bg-brand-dark text-white text-xs font-bold uppercase tracking-widest2 px-5 py-3 rounded-sm transition-colors"
            >
              Our Showreel
            </Link>
          </div>
        </section>

        {/* feature cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card p-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-sm uppercase tracking-widest2 mb-2">{feature.title}</h3>
                <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">{feature.description}</p>
              </div>
              <CheckCircle2 className="w-9 h-9 text-brand shrink-0" />
            </div>
          ))}
        </section>

        {/* mission and vision */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-xl mb-4">Our Mission and Vision</h2>
          <p className="text-sm text-muted dark:text-muted-dark leading-relaxed max-w-4xl">
            Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie
            pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et,
            euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue.{' '}
            <strong className="text-ink dark:text-inkdark">Vivamus mollis mauris</strong> vitae rhoncus egestas.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </section>

        <img
          src="/assets/mission.png"
          alt="Aerial view of the city skyline"
          className="w-full h-64 md:h-96 object-cover rounded-md mb-10"
        />

        {/* timeline */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl mb-3">From a Retail Store to the Global Chain of Stores</h2>
          <p className="text-sm text-muted dark:text-muted-dark mb-6 max-w-3xl">
            Pellentesque laoreet justo nec ex sodales euismod. Aliquot orci tortor, bibendum nec ultricies ac, auctor
            nec purus. Maecenas in consectetur erat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            <ul className="space-y-4">
              {TIMELINE_LEFT.map((item) => (
                <li key={item.year} className="flex gap-3 text-sm">
                  <span className="font-bold shrink-0 w-12">{item.year}:</span>
                  <span className="text-muted dark:text-muted-dark leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {TIMELINE_RIGHT.map((item) => (
                <li key={item.year} className="flex gap-3 text-sm">
                  <span className="font-bold shrink-0 w-12">{item.year}:</span>
                  <span className="text-muted dark:text-muted-dark leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* leadership */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-xl">Leaderships</h2>
            <Link to="/shop" className="text-sm hover:text-brand">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="rounded-sm overflow-hidden border hairline">
                <img src={person.image} alt={person.name} className="w-full aspect-[4/5] object-cover" />
                <div className="p-3">
                  <p className="font-display font-bold text-sm">{person.name}</p>
                  <p className="text-xs text-muted dark:text-muted-dark uppercase mt-0.5">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <MemberBanner />
      </div>
    </div>
  )
}