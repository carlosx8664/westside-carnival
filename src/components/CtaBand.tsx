import { buildWaLink } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <div style={s.band}>
      <div style={s.content}>
        <h2 style={s.title}>
          Stay Close to the <span style={{ color: '#FFD700' }}>Action</span>
        </h2>
        <p style={s.body}>
          Our carefully selected hotels and guest houses put you at the heart of Westside
          Carnival — within easy reach of the masquerades, music, and street food on Liberation Road.
        </p>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <a
            href={buildWaLink("Hello! I'd like to book accommodation for Westside Carnival.")}
            target="_blank"
            rel="noreferrer"
            className="btn-orange"
          >
            Book via WhatsApp
          </a>
          <Link to="/booking" className="btn-outline-yellow">
            How it Works
          </Link>
        </div>
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  band: {
    position: 'relative', overflow: 'hidden',
    minHeight: 340, display: 'flex', alignItems: 'center',
    background: '#1A1008',
  },
  content: {
    position: 'relative', zIndex: 2,
    maxWidth: 560, padding: '4rem 3rem',
  },
  title: {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900,
    textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, marginBottom: '1rem',
  },
  body: {
    fontFamily: "'Lora', serif", fontSize: '1rem', fontStyle: 'italic',
    color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, marginBottom: '1.5rem',
  },
}
