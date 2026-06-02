'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const navLinks = [
  { name: 'Beranda', href: '/' },
  {
    name: 'Layanan',
    href: '#',
    dropdown: [
      { name: 'Website UMKM', href: '/jasa-pembuatan-website-umkm' },
      { name: 'Website Bisnis', href: '/jasa-pembuatan-website-company-profile' },
      { name: 'Website Sekolah', href: '/jasa-pembuatan-website-sekolah' },
    ],
  },
  { name: 'Study Case', href: '/studycase' },
  { name: 'Blog', href: '/blog' },
  { name: 'Karir', href: '/karir' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup mobile menu & dropdown saat ganti halaman
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Focus trap untuk mobile menu
  useEffect(() => {
    if (!isOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Keyboard: Escape untuk tutup dropdown atau mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeDropdown) setActiveDropdown(null);
        if (isOpen) setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [activeDropdown, isOpen]);

  // Dropdown hover dengan timeout (300ms)
  const handleMouseEnter = (dropdownName: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Keyboard untuk dropdown button (Enter/Space)
  const handleDropdownKeyDown = (e: React.KeyboardEvent, name: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  // Fokus kembali ke tombol mobile menu setelah menu tertutup
  useEffect(() => {
    if (!isOpen && mobileMenuButtonRef.current) {
      mobileMenuButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 w-full z-50 bg-white rounded-none transition-all duration-150
        ${scrolled ? 'border-b-4 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)]' : 'border-b-4 border-transparent shadow-none'}
      `}
      aria-label="Navigasi utama"
    >
      <Container>
        <div className={`flex items-center justify-between transition-all duration-150 ${scrolled ? 'py-3' : 'py-2'}`}>
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center border-2 border-transparent transition-all duration-150 hover:border-black hover:bg-yellow-300 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ml-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Beranda"
          >
            <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden">
              <Image
                src="/images/LogoRakaweb.png"
                alt="Logo RakaWeb"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-cover"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-1"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                {link.dropdown ? (
                  <>
                    <button
                      ref={dropdownButtonRef}
                      className="flex items-center gap-1 px-2 py-1 font-sans font-black text-sm uppercase tracking-tight text-black border-2 border-transparent hover:border-black hover:bg-yellow-300 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 rounded-none focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === link.name}
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      onKeyDown={(e) => handleDropdownKeyDown(e, link.name)}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        strokeWidth={3}
                        className={`transition-transform duration-150 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    {/* Dropdown menu */}
                    <div
                      className={`absolute top-full left-0 mt-0 w-80 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,1)] rounded-none z-50 p-3 transition-all duration-150 ${
                        activeDropdown === link.name ? 'visible opacity-100' : 'invisible opacity-0'
                      }`}
                      role="menu"
                      aria-label={`Submenu ${link.name}`}
                      aria-orientation="vertical"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="mb-2 pb-2 border-b-2 border-black">
                        <p className="text-xs font-black uppercase tracking-wider text-stone-500">Layanan Kami</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group flex items-center justify-between bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-3 py-2 font-bold text-sm text-black transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                            role="menuitem"
                            aria-current={pathname === item.href ? 'page' : undefined}
                          >
                            <span>{item.name}</span>
                            <ArrowUpRight size={16} strokeWidth={2} className="opacity-70 group-hover:opacity-100" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-2 py-1 font-sans font-black text-sm uppercase tracking-tight rounded-none border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      pathname === link.href
                        ? 'bg-black text-white border-black shadow-none'
                        : 'text-black border-transparent hover:border-black hover:bg-yellow-300 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button
              href="https://wa.me/6287823268333?text=Halo%20RakaWeb%2C%20saya%20tertarik%20untuk%20konsultasi%20gratis."
              size="sm"
              className="bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:text-black hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px transition-all text-xs py-1.5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            ref={mobileMenuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black border-2 border-transparent hover:bg-white hover:border-black p-1 rounded-none active:translate-x-0.5 active:translate-y-0.5 shadow-none hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} strokeWidth={3} aria-hidden="true" /> : <Menu size={18} strokeWidth={3} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu - dengan perbaikan top-17 dan inert boolean */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-17 left-0 w-full bg-white border-t-4 border-black shadow-[0_6px_0px_0px_rgba(0,0,0,1)] py-4 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b-2 border-dashed border-stone-200 pb-3 last:border-none last:pb-0">
              {link.dropdown ? (
                <div className="space-y-2">
                  <div className="font-sans font-black text-sm uppercase tracking-tight text-stone-500 px-2">
                    {link.name}
                  </div>
                  <div className="pl-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2 font-sans font-bold text-sm text-black bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-none hover:bg-yellow-300 transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`block px-2 py-1 font-sans font-black text-base uppercase tracking-tight focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                    pathname === link.href ? 'text-primary-500 underline decoration-4 underline-offset-4' : 'text-black'
                  }`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Button href="/kontak" fullWidth className="focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}