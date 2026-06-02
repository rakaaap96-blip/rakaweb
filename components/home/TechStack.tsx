'use client'

import Container from '@/components/ui/Container'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si'

const techStack = [
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#000000', bg: '#ffffff' },
  { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38BDF8' },
  { Icon: SiFramer, name: 'Framer Motion', color: '#FF0055' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { Icon: SiCss, name: 'CSS3', color: '#1572B6' },
  { Icon: SiGit, name: 'Git', color: '#F05032' },
  { Icon: SiGithub, name: 'GitHub', color: '#181717' },
  { Icon: SiVercel, name: 'Vercel', color: '#000000', bg: '#ffffff' },
]

export default function TechStack() {
  return (
    <section
      className="py-16 bg-white border-b-8 border-black"
      aria-labelledby="techstack-heading"
    >
      <Container>
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-hidden="true"
          >
            Tech Stack
          </div>
          <h2 id="techstack-heading" className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tighter mt-6 mb-3">
            Teknologi <span className="text-primary-500">Modern</span>
          </h2>
          <p className="font-sans text-base font-bold text-navy-700 max-w-2xl mx-auto">
            Kami menggunakan framework dan library terbaik untuk performa maksimal
          </p>
        </div>
      </Container>

      <div
        className="relative w-full overflow-hidden mt-8"
        aria-label="Daftar teknologi yang kami gunakan (animasi berjalan)"
      >
        <div className="flex animate-marquee">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div
              key={idx}
              className="shrink-0 mx-4 md:mx-6 flex flex-col items-center gap-3"
            >
              <div
                className="w-16 h-16 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                style={tech.bg ? { backgroundColor: tech.bg } : {}}
                aria-hidden="true"
              >
                <tech.Icon size={32} color={tech.color} aria-hidden="true" />
              </div>
              <span className="font-sans font-black text-sm uppercase tracking-tight text-black">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}