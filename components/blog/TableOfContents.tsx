'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  containerSelector?: string
  offset?: number
}

export default function TableOfContents({
  containerSelector = '.prose',
  offset = 100,
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(true)
  const [isFixed, setIsFixed] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const tocRef = useRef<HTMLDivElement>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const generateId = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  useEffect(() => {
    const container = document.querySelector(containerSelector)
    if (!container) return

    const elements = container.querySelectorAll('h1, h2, h3')
    const headingList: Heading[] = Array.from(elements).map((el) => {
      const text = el.textContent?.trim() || ''
      let id = el.id
      if (!id) {
        id = generateId(text)
        el.id = id
      }
      return {
        id,
        text,
        level: parseInt(el.tagName[1], 10),
      }
    })

    setHeadings(headingList)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          )
          setActiveId(topEntry.target.id)
        }
      },
      { rootMargin: `0px 0px -${offset}% 0px`, threshold: 0.1 }
    )

    headingList.forEach((heading) => {
      const el = document.getElementById(heading.id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [containerSelector, offset])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        })
        history.pushState(null, '', `#${id}`)
      }
    },
    [offset]
  )

  // Fixed positioning logic
  useEffect(() => {
    if (!sentinelRef.current) return

    const sentinel = sentinelRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )
    observer.observe(sentinel)

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <>
      {/* Sentinel untuk mendeteksi kapan TOC mulai keluar dari viewport */}
      <div ref={sentinelRef} style={{ height: '1px', marginTop: '-1px' }} />

      <div
        ref={tocRef}
        style={{
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed ? '96px' : '0',
          width: isFixed ? 'calc(25% - 2rem)' : '100%', // sesuaikan dengan lebar grid
          zIndex: 20,
        }}
        className="lg:w-full"
      >
        <nav
          className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden w-full"
          aria-label="Daftar isi artikel"
        >
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between p-4 bg-primary-100 border-b-4 border-black hover:bg-yellow-300 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-primary-100"
            aria-expanded={isOpen}
            aria-controls="toc-content"
            id="toc-header"
          >
            <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-tight text-black flex items-center gap-2">
              <span aria-hidden="true">📑</span> Daftar Isi Artikel
            </h4>
            {isOpen ? (
              <ChevronUp size={18} strokeWidth={3} aria-hidden="true" />
            ) : (
              <ChevronDown size={18} strokeWidth={3} aria-hidden="true" />
            )}
          </button>

          {isOpen && (
            <div
              id="toc-content"
              className="p-4 bg-white"
              role="region"
              aria-labelledby="toc-header"
            >
              <ul className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-2" role="list">
                {headings.map((heading) => (
                  <li
                    key={heading.id}
                    style={{ paddingLeft: (heading.level - 1) * 16 }}
                    role="listitem"
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => handleClick(e, heading.id)}
                      className={`block py-1.5 px-3 font-sans text-xs sm:text-sm rounded-none border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white ${
                        activeId === heading.id
                          ? 'bg-yellow-300 text-black font-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-white text-navy-800 font-bold border-transparent hover:border-black hover:bg-primary-50'
                      }`}
                      aria-current={activeId === heading.id ? 'location' : undefined}
                    >
                      {heading.level === 3 && (
                        <span className="text-navy-400 font-mono mr-1.5" aria-hidden="true">
                          ▪
                        </span>
                      )}
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  )
}