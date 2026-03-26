import { useSlider } from '@/hooks/useSlider'
import { getImageUrl } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface Slide {
  image: string
  badge: string
  title: React.ReactNode
  sub: string
  cta1: { label: string; to: string }
  cta2: { label: string; to: string }
  objectPosition?: string
}

const slides: Slide[] = [
  {
    image: 'group',
    badge: 'Takoradi, Ghana · Est. 20+ Years',
    title: (
      <>
        <span style={{ color: '#F47B20' }}>West</span>
        <span style={{ color: '#FFD700' }}>side</span>
        <br />
        <span style={{ color: '#29C5C5' }}>Car</span>
        <span style={{ color: '#4DC44A' }}>ni</span>
        <span style={{ color: '#F47B20' }}>val</span>
        <br />
        <span style={{ color: '#fff' }}>2026</span>
      </>
    ),
    sub: "Ghana's most beloved annual street festival — masquerades, brass bands & 250,000 revellers every Christmas.",
    cta1: { label: 'Book Accommodation', to: '/accommodation' },
    cta2: { label: 'Explore Events', to: '/events' },
    objectPosition: 'center',
  },
  {
    image: 'drums',
    badge: 'Christmas Night · Liberation Road',
    title: (
      <>
        Let the<br />
        <span style={{ color: '#FFD700' }}>Drums</span>
        <br />
        Take Over
      </>
    ),
    sub: "From dusk to dawn, Takoradi's streets come alive with music, fairy lights, and 250,000 dancing souls.",
    cta1: { label: 'How to Book', to: '/booking' },
    cta2: { label: 'View Gallery', to: '/gallery' },
    objectPosition: 'center',
  },
  {
    image: 'dancers',
    badge: 'Fancy Dress · Masquerade',
    title: (
      <>
        <span style={{ color: '#FFD700' }}>Colour,</span>
        <br />
        <span style={{ color: '#29C5C5' }}>Culture</span>
        <br />
        <span style={{ color: '#F47B20' }}>&amp; Costume</span>
      </>
    ),
    sub: 'Five masquerade groups compete in the Ankos Fancy Dress tradition — the beating heart of Westside Carnival.',
    cta1: { label: 'Explore the Carnival', to: '/events' },
    cta2: { label: 'Book Your Stay', to: '/accommodation' },
    objectPosition: 'top',
  },
]

export default function HeroSlider() {
  const { current, next, prev, goTo } = useSlider(slides.length)

  return (
    <section style={s.hero}>
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            ...s.slide,
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? 'auto' : 'none',
          }}
        >
          <img
            src={getImageUrl(slide.image)}
            alt={`Slide ${i + 1}`}
            style={{ ...s.slideBg, objectPosition: slide.objectPosition ?? 'center' }}
          />
          <div style={s.overlay} />
          <div style={s.content}>
            <span style={s.badge}>{slide.badge}</span>
            <h1 style={s.h1}>{slide.title}</h1>
            <p style={s.sub}>{slide.sub}</p>
            <div style={s.btns}>
              <Link to={slide.cta1.to} className="btn-orange">{slide.cta1.label}</Link>
              <Link to={slide.cta2.to} className="btn-teal" style={{ marginLeft: '0.6rem' }}>{slide.cta2.label}</Link>
            </div>
          </div>
        </div>
      ))}

      <button style={{ ...s.arrow, left: '1.5rem' }} onClick={prev}>&#8592;</button>
      <button style={{ ...s.arrow, right: '1.5rem' }} onClick={next}>&#8594;</button>

      <div style={s.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{ ...s.dot, background: i === current ? '#FFD700' : 'rgba(255,255,255,0.3)' }}
          />
        ))}
      </div>
    </section>
  )
}

const s: Record<string, React.CSSProperties> = {
  hero: {
    position: 'relative',
    height: '100vh',
    minHeight: 580,
    paddingTop: 'calc(5px + 52px + 44px)',
    overflow: 'hidden',
    background: '#1A1008',
  },
  slide: {
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center',
    transition: 'opacity 1s ease',
  },
  slideBg: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%', objectFit: 'cover',
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(110deg, rgba(26,16,8,0.82) 0%, rgba(26,16,8,0.5) 55%, rgba(26,16,8,0.1) 100%)',
  },
  content: {
    position: 'relative', zIndex: 2,
    maxWidth: 680, padding: '0 4rem',
  },
  badge: {
    display: 'inline-block',
    background: '#F47B20', color: '#fff',
    fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase',
    padding: '0.32rem 0.9rem', marginBottom: '1.2rem',
  },
  h1: {
    fontSize: 'clamp(2.8rem, 7.5vw, 6rem)',
    fontWeight: 900, lineHeight: 0.93,
    textTransform: 'uppercase', letterSpacing: '-0.02em',
    color: '#fff', marginBottom: '0.9rem',
  },
  sub: {
    fontFamily: "'Lora', serif", fontStyle: 'italic',
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: 'rgba(255,255,255,0.72)',
    marginBottom: '2rem', lineHeight: 1.55, maxWidth: 440,
  },
  btns: { display: 'flex', flexWrap: 'wrap', gap: '0.6rem' },
  arrow: {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
    background: 'rgba(244,123,32,0.75)', border: 'none', color: '#fff',
    width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', fontSize: '1.2rem', borderRadius: 2,
  },
  dots: {
    position: 'absolute', bottom: '1.5rem', left: '50%',
    transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '0.5rem',
  },
  dot: {
    width: 9, height: 9, borderRadius: '50%',
    border: 'none', cursor: 'pointer', padding: 0,
    transition: 'background 0.2s',
  },
}
