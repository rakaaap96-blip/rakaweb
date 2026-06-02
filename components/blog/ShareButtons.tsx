'use client'

import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

interface ShareButtonsProps {
  title: string
  url: string
}

interface ShareButton {
  name: string
  icon: React.ElementType
  bgColor: string
  textColor: string
  getHref: (encodedUrl: string, encodedTitle: string) => string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareButtons: ShareButton[] = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      bgColor: '#1877F2',
      textColor: 'white',
      getHref: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      bgColor: '#000000',
      textColor: 'white',
      getHref: (url, title) => `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      bgColor: '#0077B5',
      textColor: 'white',
      getHref: (url, title) => `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      bgColor: '#25D366',
      textColor: 'black',
      getHref: (url, title) => `https://wa.me/?text=${title}%20${url}`,
    },
  ]

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t-4 border-black w-full">
      <span className="font-sans font-black text-sm uppercase tracking-tight text-black">
        Bagikan artikel ini :
      </span>

      <div className="flex flex-wrap gap-3">
        {shareButtons.map(({ name, icon: Icon, bgColor, textColor, getHref }) => (
          <a
            key={name}
            href={getHref(encodedUrl, encodedTitle)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              minHeight: '44px',
              minWidth: '44px',
              padding: '0.75rem',
            }}
            aria-label={`Bagikan ke ${name} (membuka jendela baru)`}
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}