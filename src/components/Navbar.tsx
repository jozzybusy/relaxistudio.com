import { Link } from 'react-router-dom'
import GooeyNav from './GooeyNav'

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-film-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-tech-logo text-2xl text-white hover:text-cyan-400 transition-colors">
            RELAXI STUDIO
          </Link>
          
          <div className="hidden md:flex">
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          <button className="md:hidden text-white hover:text-cyan-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar