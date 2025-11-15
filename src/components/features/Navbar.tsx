'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Clock } from 'lucide-react';

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Om Oss', href: '/about' },
  { name: 'Bønnetider', href: '/prayer-times' },
  { name: 'Ramadan', href: '/ramadan' },
  { name: 'Quranskole', href: '/quran-school' },
  { name: 'Medlemskap', href: '/membership' },
  { name: 'Kontakt', href: '/contact' },
  { name: 'Donasjon', href: '/donate' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white shadow-sm border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom" aria-label="Hovednavigasjon">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            aria-label="Lillehammer Moske - Gå til hjemmeside"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-shadow">
              <Image 
                src="/lillehammermoske/assets/logos/logo.png" 
                alt="Lillehammer Moske Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-emerald-900 tracking-tight">Lillehammer Moske</h1>
              <p className="text-xs text-gray-500">The Muslim Cultural Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-emerald-900 text-white'
                      : 'text-gray-700 hover:text-emerald-900 hover:bg-emerald-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="hidden xl:flex items-center space-x-3">
            <Link
              href="/donate"
              className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-medium text-sm transition-colors"
            >
              Doner
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-emerald-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="lg:hidden border-t border-gray-200 mt-2 pb-4"
          >
            <div className="space-y-1 pt-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg font-medium ${
                      isActive
                        ? 'bg-emerald-900 text-white'
                        : 'text-gray-700 hover:text-emerald-900 hover:bg-emerald-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2 border-t border-gray-200 mt-2">
                <Link
                  href="/prayer-times"
                  className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-900 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Clock className="w-5 h-5" />
                  <span>Bønnetider</span>
                </Link>
                <Link
                  href="/donate"
                  className="block px-4 py-2 bg-gold-500 text-white rounded-lg font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Doner
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
