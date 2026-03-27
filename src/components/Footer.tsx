import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '@/lib/sanityClient'
import { SITE_SETTINGS_QUERY, PACKAGES_QUERY } from '@/lib/queries'

export default function Footer() {
  const [waNumber, setWaNumber] = useState('233000000000')
  const [location, setLocation] = useState('Liberation Road, Takoradi')
  const [packages, setPackages] = useState<any[]>([])

  useEffect(() => {
    Promise.all([
      client.fetch(SITE_SETTINGS_QUERY),
      client.fetch(PACKAGES_QUERY),
    ]).then(([s, pkgs]) => {
      if (s?.whatsappNumber) setWaNumber(s.whatsappNumber)
      if (s?.eventLocation) setLocation(s.eventLocation)
      setPackages(pkgs)
    })
  }, [])

  return (
    <footer style={s.footer}>
      <div className="stripe-bar" />
      <div style={s.top}>
        <div style={s.col}>
          <p style={s.brand}>Westside Carnival</p>
          <p style={s.tagline}>
            Official Hospitality &amp; Accommodation<br />
            {location}<br />
            Western Region, Ghana
          </p>
        </div>
        <div style={s.col}>
          <p style={s.colTitle}>Explore</p>
          <ul style={s.list}>
            <li><Link to="/events"  style={s.link}>Events</Link></li>
            <li><Link to="/gallery" style={s.link}>Gallery</Link></li>
            <li><Link to="/about"   style={s.link}>About</Link></li>
          </ul>
        </div>
        <div style={s.col}>
          <p style={s.colTitle}>Accommodation</p>
          <ul style={s.list}>
            {packages.length > 0
              ? packages.map(pkg => (
                  <li key={pkg._id}>
                    <Link to="/accommodation" style={s.link}>{pkg.name}</Link>
                  </li>
                ))
              : (
                <>
                  <li><Link to="/accommodation" style={s.link}>Standard Stay</Link></li>
                  <li><Link to="/accommodation" style={s.link}>Carnival Classic</Link></li>
                  <li><Link to="/accommodation" style={s.link}>VIP Experience</Link></li>
                </>
              )
            }
            <li><Link to="/booking" style={s.link}>How to Book</Link></li>
          </ul>
        </div>
        <div style={s.col}>
          <p style={s.colTitle}>Contact</p>
          <ul style={s.list}>
            <li>
              <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer" style={s.link}>
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:+${waNumber}`} style={s.link}>+{waNumber}</a>
            </li>
            <li><Link to="/contact" style={s.link}>Send Enquiry</Link></li>
          </ul>
        </div>
      </div>
      <div style={s.bottom}>
        <p style={s.copy}>&copy; 2026 Westside Carnival. All rights reserved.</p>
        <div style={s.bottomLinks}>
          <a href="#" style={s.bottomLink}>Privacy Policy</a>
          <a href="#" style={s.bottomLink}>Terms</a>
        </div>
      </div>
    </footer>
  )
}

const s: Record<string, React.CSSProperties> = {
  footer: { background: '#1A1008' },
  top: {
    display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
    gap: '3rem', maxWidth: 1200, margin: '0 auto',
    padding: '3.5rem 2rem',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  col: {},
  brand: { fontSize: '1.15rem', fontWeight: 900, color: '#F47B20', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' },
  tagline: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 },
  colTitle: { fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '0.9rem' },
  list: { listStyle: 'none' },
  link: { fontSize: '0.84rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'block', marginBottom: '0.45rem' },
  bottom: {
    maxWidth: 1200, margin: '0 auto', padding: '1.2rem 2rem',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem',
  },
  copy: { fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)' },
  bottomLinks: { display: 'flex', gap: '1.5rem' },
  bottomLink: { fontSize: '0.7rem', color: 'rgba(255,255,255,0.22)', textDecoration: 'none' },
}
