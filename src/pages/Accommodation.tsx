import { useEffect, useState } from 'react'
import PackageCard from '@/components/PackageCard'
import CtaBand from '@/components/CtaBand'
import SectionHeader from '@/components/SectionHeader'
import { client } from '@/lib/sanityClient'
import { PACKAGES_QUERY, SITE_SETTINGS_QUERY } from '@/lib/queries'

export default function Accommodation() {
  const [packages, setPackages] = useState<any[]>([])
  const [settings, setSettings] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      client.fetch(PACKAGES_QUERY),
      client.fetch(SITE_SETTINGS_QUERY),
    ]).then(([pkgs, s]) => {
      setPackages(pkgs)
      setSettings(s)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  return (
    <>
      <div className="page-spacer" />

      <section style={{ background: '#FFF5E8', padding: '0 2rem 5rem' }}>
        <div className="sw">
          <SectionHeader
            kicker="Accommodation"
            title={<>Choose Your <em>Experience</em></>}
            sub="All packages bookable via WhatsApp. Booking confirmed after payment is verified."
          />
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
            Loading packages...
          </div>
        ) : (
          <div style={s.grid}>
            {packages.map(pkg => (
              <PackageCard
                key={pkg._id}
                pkg={{
                  id: pkg._id,
                  name: pkg.name,
                  tier: pkg.tier,
                  price: pkg.price,
                  description: pkg.description,
                  features: pkg.features ?? [],
                  featured: pkg.featured ?? false,
                  whatsapp: settings?.whatsappNumber ?? '233000000000',
                }}
              />
            ))}
          </div>
        )}
      </section>

      {/* Why book with us */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div className="sw">
          <SectionHeader
            kicker="Why Book With Us"
            title={<>Official <em>Hospitality</em></>}
          />
          <div style={s.whyGrid}>
            {whyItems.map(item => (
              <div key={item.title} style={s.whyCard}>
                <div style={s.whyIcon}>{item.icon}</div>
                <h4 style={s.whyTitle}>{item.title}</h4>
                <p style={s.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="stripe-bar" />
      <CtaBand />
    </>
  )
}

const whyItems = [
  { icon: '✅', title: 'Verified & Secure', desc: 'All bookings confirmed after payment. No scams, no surprises.' },
  { icon: '📍', title: 'Prime Location', desc: 'Every property within easy reach of Liberation Road and the main parade route.' },
  { icon: '📱', title: 'WhatsApp Booking', desc: 'Fast, simple booking through WhatsApp — get a reply within 24 hours.' },
  { icon: '🎭', title: 'Carnival Perks', desc: 'Priority entry, shuttle services, and dedicated support included in select packages.' },
]

const s: Record<string, React.CSSProperties> = {
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem', maxWidth: 1200, margin: '0 auto',
  },
  whyGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem', marginTop: '1rem',
  },
  whyCard: {
    background: '#FFF5E8', borderRadius: 6, padding: '2rem 1.5rem',
    border: '1.5px solid #FFD9B8', textAlign: 'center',
  },
  whyIcon: { fontSize: '2rem', marginBottom: '1rem' },
  whyTitle: { fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: '#1A1008', marginBottom: '0.6rem', letterSpacing: '0.06em' },
  whyDesc: { fontSize: '0.88rem', color: '#6B5A40', lineHeight: 1.65 },
}
