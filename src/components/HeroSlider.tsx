import { useEffect, useState } from 'react'
import { useSlider } from '@/hooks/useSlider'
import { client, urlFor } from '@/lib/sanityClient'
import { HERO_SLIDES_QUERY } from '@/lib/queries'
import { Link } from 'react-router-dom'

const overlayMap: Record<string, string> = {
  none:   'none',
  light:  'linear-gradient(110deg, rgba(26,16,8,0.35) 0%, rgba(26,16,8,0.05) 60%, rgba(26,16,8,0.0) 100%)',
  medium: 'linear-gradient(110deg, rgba(26,16,8,0.55) 0%, rgba(26,16,8,0.20) 60%, rgba(26,16,8,0.0) 100%)',
  dark:   'linear-gradient(110deg, rgba(26,16,8,0.82) 0%, rgba(26,16,8,0.50) 60%, rgba(26,16,8,0.1) 100%)',
}

export default function HeroSlider() {
  const [slides, setSlides] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { current, next, prev, goTo } = useSlider(slides.length || 1)

  useEffect(() => {
    client.fetch(HERO_SLIDES_QUERY)
      .then(data => { setSlides(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section style={{ ...s.hero, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#fff', letterSpacing: '0.2em', fontSize: '0.8rem' }}>LOADING...</p>
      </section>
    )
  }

  return (
    <section style={s.hero}>
      {slides.map((slide, i) => {
        const isActive = i === current
        const overlay = overlayMap[slide.overlayColor ?? 'light']
        const objPos = slide.objectPosition ?? 'center'

        return (
          <div
            key={slide._id}
            style={{
              ...s.slide,
              opacity: isActive ? 1 : 0,
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            {/* ── Video background ── */}
            {slide.slideType === 'video' && slide.videoUrl && (
              <video
                src={slide.videoUrl}
                style={s.slideBgVideo}
                autoPlay
                muted
                loop
                playsInline
              />
            )}

            {/* ── Image / PNG background ── */}
            {slide.slideType !== 'video' && slide.image && (
              <img
                src={urlFor(slide.image).width(1800).url()}
                alt={slide.titleLine1}
                style={{ ...s.slideBg, objectPosition: objPos }}
              />
            )}

            {/* ── Dark overlay ── */}
            {overlay !== 'none' && (
              <div style={{ ...s.overlay, background: overlay }} />
            )}

            {/* ── PNG overlay (logo / text art) ── */}
            {slide.overlayImage && (
              <div style={s.overlayImgWrap}>
                <img
                  src={urlFor(slide.overlayImage).width(1400).url()}
                  alt="Westside Carnival"
                  style={s.overlayImg}
                />
              </div>
            )}

            {/* ── Text content ── */}
            {!slide.hideText && (
              <div style={s.content}>
                {slide.badge && <span style={s.badge}>{slide.badge}</span>}
                <h1 style={s.h1}>
                  {slide.titleLine1}
                  {slide.titleLine2 && <><br />{slide.titleLine2}</>}
                  {slide.titleLine3 && <><br />{slide.titleLine3}</>}
                </h1>
                {slide.subtitle && <p style={s.sub}>{slide.subtitle}</p>}
                <div style={s.btns}>
                  {slide.cta1Label && (
                    <Link to={slide.cta1Link ?? '/accommodation'} className="btn-orange">
                      {slide.cta1Label}
                    </Link>
                  )}
                  {slide.cta2Label && (
                    <Link to={slide.cta2Link ?? '/events'} className="btn-teal">
                      {slide.cta2Label}
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* ── CTAs only (when text is hidden) ── */}
            {slide.hideText && (slide.cta1Label || slide.cta2Label) && (
              <div style={s.ctaOnly}>
                {slide.cta1Label && (
                  <Link to={slide.cta1Link ?? '/accommodation'} className="btn-orange">
                    {slide.cta1Label}
                  </Link>
                )}
                {slide.cta2Label && (
                  <Link to={slide.cta2Link ?? '/events'} className="btn-teal">
                    {slide.cta2Label}
                  </Link>
                )}
              </div>
            )}
          </div>
        )
      })}

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
    overflow: 'hidden',
    background: '#1A1008',
  },
  slide: {
    position: 'absolute',
    top: '52px',
    left: 0, right: 0, bottom: 0,
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'opacity 1s ease',
  },
  slideBgVideo: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover',          // fills the frame cleanly
    objectPosition: 'center',
  },
  slideBg: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  overlay: {
    position: 'absolute', inset: 0,
  },
  overlayImgWrap: {
    position: 'absolute', inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    padding: '1rem',
  },
  overlayImg: {
    width: '65%',               // bigger — was maxWidth 80%, now fixed 65vw equivalent
    maxWidth: 860,              // cap on large screens
    minWidth: 280,              // readable on mobile
    objectFit: 'contain',
    filter: 'drop-shadow(0 6px 40px rgba(0,0,0,0.6))',
  },
  content: {
    position: 'relative', zIndex: 2,
    maxWidth: 680,
    padding: '0 4rem 4rem',
  },
  ctaOnly: {
    position: 'relative', zIndex: 4,
    width: '100%',
    display: 'flex', justifyContent: 'center',
    gap: '1rem', flexWrap: 'wrap',
    padding: '0 2rem 3rem',
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
