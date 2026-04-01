'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-apple border-b border-gray-200/50 py-3' : 'bg-transparent py-4 md:py-6'
    }`}>
      <nav className="container-custom flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="relative flex-shrink-0 flex items-center group h-12 w-32 sm:w-40 lg:w-48">
          <Image 
            src="/assets/logo.png" 
            alt="Afya Links Logo" 
            width={200} 
            height={48} 
            className="w-full h-full object-contain transition-transform group-hover:scale-105" 
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 flex-1 px-10">
          {[
            { name: 'About', href: '/about-us' },
            { name: 'Features', href: '/features' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors relative z-10 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-shrink-0 relative z-10">
          <Link href="/get-started" className="btn-apple-primary !py-2.5 !px-6 !text-sm flex items-center gap-2 group shadow-lg shadow-blue-500/10 whitespace-nowrap">
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1D1D1F] hover:bg-gray-100 rounded-full transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-xl z-40 p-6 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6 mt-4">
            {[
              { name: 'About', href: '/about-us' },
              { name: 'Features', href: '/features' },
              { name: 'Blog', href: '/blog' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <div key={item.name} className="py-2 border-b border-gray-100">
                <Link 
                  href={item.href}
                  className="text-xl font-medium text-[#1D1D1F] flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>
            ))}
            <div className="mt-auto pb-10">
              <Link href="/get-started" className="btn-apple-primary w-full !py-4 text-center text-lg flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20" onClick={() => setIsOpen(false)}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
