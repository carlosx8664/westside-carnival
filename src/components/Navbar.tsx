import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { client } from '@/lib/sanityClient'
import { SITE_SETTINGS_QUERY } from '@/lib/queries'

const navLinks = [
  { to: '/',              label: 'Home',          id: 'home' },
  { to: '/events',        label: 'Events',        id: 'events' },
  { to: '/accommodation', label: 'Accommodation', id: 'accommodation' },
  { to: '/booking',       label: 'How to Book',   id: 'booking' },
  { to: '/gallery',       label: 'Gallery',       id: 'gallery' },
  { to: '/about',         label: 'About',         id: 'about' },
  { to: '/contact',       label: 'Contact',       id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [waNumber, setWaNumber] = useState('233000000000')
  const { pathname } = useLocation()

  useEffect(() => {
    client.fetch(SITE_SETTINGS_QUERY).then(data => {
      if (data?.whatsappNumber) setWaNumber(data.whatsappNumber)
    })
  }, [])

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  const message = encodeURIComponent("Hello! I'd like to book accommodation for Westside Carnival.")
  const waHref = `https://wa.me/${waNumber}?text=${message}`

  return (
    <>
      <nav style={styles.nav}>
        {/* Single nav bar — logo left, links center, book right */}
        <div style={styles.bar}>
          <Link to="/" style={styles.logoWrap}>
            <div style={styles.logoMark}>W</div>
            <div style={styles.logoText}>
              Westside Carnival
              <span style={styles.logoSub}>Takoradi, Ghana</span>
            </div>
          </Link>

          <div style={styles.links}>
            {navLinks.map(link => (
              <Link
                key={link.id}
                to={link.to}
                style={{
                  ...styles.link,
                  ...(isActive(link.to) ? styles.linkActive : {}),
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={styles.right}>
            <a href={waHref} target="_blank" rel="noreferrer" style={styles.bookBtn}>
              Book Now
            </a>
            <button
              style={styles.burger}
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span style={{ ...styles.burgerLine, ...(open ? styles.burgerLine1Open : {}) }} />
              <span style={{ ...styles.burgerLine, ...(open ? styles.burgerLine2Open : {}) }} />
              <span style={{ ...styles.burgerLine, ...(open ? styles.burgerLine3Open : {}) }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={styles.drawer}>
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.to}
              style={styles.drawerLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            style={styles.drawerCta}
            onClick={() => setOpen(false)}
          >
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </>
  )
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 600,
  },
  bar: {
    display: 'flex', alignItems: 'stretch',
    height: 52, background: '#1A1008',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
  },
  logoWrap: {
    display: 'flex', alignItems: 'center', gap: '0.7rem',
    textDecoration: 'none', padding: '0 1.5rem',
    borderRight: '1px solid rgba(255,255,255,0.07)', flexShrink: 0,
  },
  logoMark: {
    width: 32, height: 32, borderRadius: '50%',
    background: '#F47B20', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.85rem', fontWeight: 900, color: '#fff',
    border: '2px solid #FFD700', flexShrink: 0,
  },
  logoText: {
    fontSize: '0.9rem', fontWeight: 900, letterSpacing: '0.05em',
    color: '#fff', textTransform: 'uppercase', lineHeight: 1.1,
    display: 'flex', flexDirection: 'column',
  },
  logoSub: {
    color: '#F47B20', fontSize: '0.58rem', letterSpacing: '0.14em', fontWeight: 600,
  },
  links: {
    display: 'flex', alignItems: 'stretch', flex: 1, overflowX: 'auto',
  },
  link: {
    fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.52)', textDecoration: 'none',
    padding: '0 1.1rem', display: 'flex', alignItems: 'center',
    whiteSpace: 'nowrap', borderRight: '1px solid rgba(255,255,255,0.07)',
    transition: 'color 0.15s',
  },
  linkActive: { color: '#FFD700', fontWeight: 700 },
  right: {
    display: 'flex', alignItems: 'center',
    marginLeft: 'auto', flexShrink: 0,
  },
  bookBtn: {
    display: 'flex', alignItems: 'center', height: '100%',
    padding: '0 1.4rem',
    background: '#F47B20', color: '#fff',
    fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase',
    fontWeight: 700, textDecoration: 'none',
  },
  burger: {
    display: 'none', flexDirection: 'column', justifyContent: 'center',
    gap: 5, width: 44, height: 44,
    background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0,
  },
  burgerLine: {
    display: 'block', width: 20, height: 2,
    background: '#fff', transition: 'transform 0.25s, opacity 0.25s',
  },
  burgerLine1Open: { transform: 'translateY(7px) rotate(45deg)' },
  burgerLine2Open: { opacity: 0 },
  burgerLine3Open: { transform: 'translateY(-7px) rotate(-45deg)' },
  drawer: {
    position: 'fixed', top: 52,
    left: 0, right: 0, zIndex: 599,
    background: '#1A1008', display: 'flex', flexDirection: 'column',
    borderBottom: '3px solid #F47B20',
  },
  drawerLink: {
    padding: '0.9rem 1.5rem', fontSize: '0.78rem',
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
  },
  drawerCta: {
    padding: '0.9rem 1.5rem', fontSize: '0.78rem',
    letterSpacing: '0.12em', textTransform: 'uppercase',
    background: '#F47B20', color: '#fff', fontWeight: 700,
    textDecoration: 'none',
  },
}
