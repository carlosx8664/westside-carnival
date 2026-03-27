import { useEffect, useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import { client, urlFor } from '@/lib/sanityClient'
import { GALLERY_QUERY, SITE_SETTINGS_QUERY } from '@/lib/queries'

export default function Gallery() {
  const [images, setImages] = useState<any[]>([])
  const [settings, setSettings] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      client.fetch(GALLERY_QUERY),
      client.fetch(SITE_SETTINGS_QUERY),
    ]).then(([imgs, s]) => {
      setImages(imgs)
      setSettings(s)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const heroImage = images[0]
  const restImages = images.slice(1)
  const waNumber = settings?.whatsappNumber ?? '233000000000'

  return (
    <>
      <div className="page-spacer" />

      <section style={{ background: '#fff', padding: '0 0 2rem' }}>
        <div className="sw">
          <SectionHeader
            kicker="Gallery"
            title={<>The Real <em>Westside</em></>}
            sub="A snapshot of what makes Westside Carnival unforgettable. More photos coming soon — send us yours!"
          />
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
            Loading gallery...
          </div>
        ) : (
          <>
            {/* Hero image */}
            {heroImage && (
              <div style={s.heroImg}>
                <img
                  src={urlFor(heroImage.image).width(1400).url()}
                  alt={heroImage.title ?? 'Masqueraders Parade'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={s.heroOverlay}>
                  <h2 style={s.heroText}>Masquerades, Music &amp; Fun</h2>
                </div>
              </div>
            )}

            {/* Grid */}
            <div style={s.grid}>
              {restImages.map(img => (
                <div key={img._id} style={s.cell}>
                  <img
                    src={urlFor(img.image).width(600).url()}
                    alt={img.title ?? 'Westside Carnival'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <p style={s.footer}>
          → Send us your carnival photos and videos to be featured here — contact us on WhatsApp!
        </p>
      </section>

      {/* Upload CTA */}
      <section style={{ background: 'var(--light-bg)', padding: '4rem 2rem', textAlign: 'center' }}>
        <h3 style={s.ctaTitle}>Were you at Westside Carnival?</h3>
        <p style={s.ctaSub}>
          Share your photos and videos with us and we'll feature the best ones right here.
        </p>
        <a
          href={`https://wa.me/${waNumber}?text=Hi!%20I'd%20like%20to%20share%20my%20Westside%20Carnival%20photos.`}
          target="_blank"
          rel="noreferrer"
          className="btn-orange"
          style={{ marginTop: '1.5rem', display: 'inline-block' }}
        >
          Share Your Photos
        </a>
      </section>
    </>
  )
}

const s: Record<string, React.CSSProperties> = {
  heroImg: {
    position: 'relative', height: 480, overflow: 'hidden',
    margin: '0 2rem', borderRadius: 8,
  },
  heroOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(26,16,8,0.7) 0%, transparent 60%)',
    display: 'flex', alignItems: 'flex-end', padding: '2rem',
  },
  heroText: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900,
    textTransform: 'uppercase', color: '#fff', letterSpacing: '0.04em',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 0, margin: '1rem 2rem 0',
  },
  cell: { height: 260, overflow: 'hidden', cursor: 'pointer' },
  footer: {
    padding: '1rem 2rem', fontSize: '0.7rem',
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6B5A40', borderTop: '1px solid #FFD9B8',
  },
  ctaTitle: {
    fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900,
    textTransform: 'uppercase', color: '#1A1008', marginBottom: '0.8rem',
  },
  ctaSub: {
    fontFamily: "'Lora', serif", fontStyle: 'italic',
    fontSize: '1.05rem', color: '#6B5A40', lineHeight: 1.65,
  },
}
