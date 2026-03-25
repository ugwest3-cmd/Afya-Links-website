'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Linkedin, Facebook, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Payments', href: '/payments' },
        { name: 'Get Started', href: '/get-started' },
        { name: 'Security', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/legal' },
        { name: 'Terms of Service', href: '/legal' },
        { name: 'Cookie Policy', href: '/legal' },
      ]
    }
  ]

  return (
    <footer className="bg-[#F5F5F7] border-t border-gray-200/50 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6 group">
              <div className="relative w-[550px] h-24 flex items-center justify-center transition-transform group-hover:scale-105">
                <Image 
                  src="/assets/logo.png" 
                  alt="Afya Links Logo" 
                  width={550} 
                  height={96} 
                  className="w-full h-full object-contain drop-shadow-sm" 
                />
              </div>
            </Link>
            <p className="text-[#86868B] text-lg max-w-sm mb-8 font-medium leading-relaxed">
              Redefining pharmaceutical distribution with precision, speed, and digital trust.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#86868B] hover:text-[#0071E3] hover:border-[#0071E3] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-widest mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[#86868B] hover:text-[#0071E3] transition-colors text-sm font-medium flex items-center gap-1 group"
                    >
                      {link.name}
                      {link.href === '#' && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-[#86868B]">
            © {currentYear} Afya Links Digital Healthcare. Designed with precision in Uganda.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors">Accessibility</a>
            <a href="#" className="text-xs font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
