import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { buildWaLink } from '@/lib/utils'

const navLinks = [
  { to: '/',                label: 'Home',          id: 'home' },
  { to: '/events',          label: 'Events',        id: 'events' },
  { to: '/accommodation',   label: 'Accommodation', id: 'accommodation' },
  { to: '/booking',         label: 'How to Book',   id: 'booking' },
  { to: '/gallery',         label: 'Gallery',       id: 'gallery' },
  { to: '/about',           label: 'About',         id: 'about' },
  { to: '/contact',         label: 'Contact',       id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <>
      <nav style={styles.nav}>
        {/* Colour stripe */}
        <div className="stripe-bar" />

        {/* Top row */}
        <div style={styles.top}>
          <Link to="/" style={styles.logoWrap}>
            <div style={styles.logoMark}>W</div>
            <div style={styles.logoText}>
              Westside Carnival
              <span style={styles.logoSub}>Takoradi, Ghana</span>
            </div>
          </Link>

          <div style={styles.topRight}>
            <div style={styles.topLinks}>
              <Link to="/about"    style={styles.topLink}>About</Link>
              <Link to="/gallery"  style={styles.topLink}>Gallery</Link>
              <Link to="/contact"  style={styles.topLink}>Contact</Link>
              <a
                href={buildWaLink("Hello! I'd like to book accommodation for Westside Carnival.")}
                target="_blank"
                rel="noreferrer"
                style={styles.bookBtn}
              >
                Book Now
              </a>
            </div>
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

        {/* Sub nav */}
        <div style={styles.subNav}>
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.to}
              style={{
                ...styles.subLink,
                ...(isActive(link.to) ? styles.subLinkActive : {}),
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={buildWaLink("Hello! I'd like to book accommodation for Westside Carnival.")}
            target="_blank"
            rel="noreferrer"
            style={styles.subBook}
          >
            Book via WhatsApp
          </a>
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
            href={buildWaLink("Hello! I'd like to book accommodation for Westside Carnival.")}
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
  top: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 52, padding: '0 2rem',
    background: '#fff',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  logoWrap: {
    display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none',
  },
  logoMark: {
    width: 38, height: 38, borderRadius: '50%',
    background: '#F47B20', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1rem', fontWeight: 900, color: '#fff',
    border: '3px solid #FFD700', flexShrink: 0,
  },
  logoText: {
    fontSize: '1.05rem', fontWeight: 900, letterSpacing: '0.05em',
    color: '#1A1008', textTransform: 'uppercase', lineHeight: 1.1,
    display: 'flex', flexDirection: 'column',
  },
  logoSub: {
    color: '#F47B20', fontSize: '0.65rem', letterSpacing: '0.14em', fontWeight: 600,
  },
  topRight: { display: 'flex', alignItems: 'center' },
  topLinks: {
    display: 'flex', alignItems: 'center', gap: 0,
  },
  topLink: {
    fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6B5A40', textDecoration: 'none',
    padding: '0 0.85rem', height: 52, display: 'flex', alignItems: 'center',
  },
  bookBtn: {
    display: 'flex', alignItems: 'center', height: 52,
    padding: '0 1.4rem', marginLeft: '0.5rem',
    background: '#F47B20', color: '#fff',
    fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
    fontWeight: 700, textDecoration: 'none', borderRadius: 2,
  },
  burger: {
    display: 'none', flexDirection: 'column', justifyContent: 'center',
    gap: 5, width: 44, height: 44,
    background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0,
  },
  burgerLine: {
    display: 'block', width: 20, height: 2,
    background: '#1A1008', transition: 'transform 0.25s, opacity 0.25s',
  },
  burgerLine1Open: { transform: 'translateY(7px) rotate(45deg)' },
  burgerLine2Open: { opacity: 0 },
  burgerLine3Open: { transform: 'translateY(-7px) rotate(-45deg)' },
  subNav: {
    height: 44, display: 'flex', alignItems: 'stretch',
    background: '#1A1008', overflowX: 'auto',
  },
  subLink: {
    fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.52)', textDecoration: 'none',
    padding: '0 1.1rem', display: 'flex', alignItems: 'center',
    whiteSpace: 'nowrap', borderRight: '1px solid rgba(255,255,255,0.07)',
  },
  subLinkActive: { color: '#FFD700', fontWeight: 700 },
  subBook: {
    marginLeft: 'auto', background: '#F47B20', color: '#fff',
    fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.12em',
    textTransform: 'uppercase', padding: '0 1.1rem',
    display: 'flex', alignItems: 'center', textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  drawer: {
    position: 'fixed', top: 'calc(52px + 44px + 5px)',
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
