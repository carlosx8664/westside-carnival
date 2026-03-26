import { Package } from '@/data/events'
import { buildWaLink } from '@/lib/utils'

interface Props {
  pkg: Package
}

export default function PackageCard({ pkg }: Props) {
  return (
    <div style={{
      ...s.card,
      borderTop: `4px solid ${pkg.featured ? '#F47B20' : '#4DC44A'}`,
    }}>
      {/* Card header illustration */}
      <div style={s.top}>
        <div style={s.topBg}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                ...s.stripe,
                background: ['#29C5C5', '#4DC44A', '#F47B20'][i],
                top: `${20 + i * 22}%`,
                opacity: 0.6 + i * 0.1,
              }}
            />
          ))}
          <div style={s.stars}>{'★'.repeat(pkg.featured ? 3 : pkg.id === 'vip' ? 5 : 3)}</div>
        </div>
        <span style={{ ...s.badge, background: pkg.badgeBg, color: pkg.badgeColor }}>
          {pkg.badge}
        </span>
      </div>

      <div style={s.body}>
        <p style={s.tier}>{pkg.tier}</p>
        <h3 style={s.name}>{pkg.name}</h3>
        <p style={s.desc}>{pkg.description}</p>
        <ul style={s.features}>
          {pkg.features.map(f => (
            <li key={f} style={s.feature}>
              <span style={s.check}>✓</span> {f}
            </li>
          ))}
        </ul>
        <a
          href={buildWaLink(pkg.waMessage)}
          target="_blank"
          rel="noreferrer"
          style={{
            ...s.cta,
            background: pkg.featured ? '#F47B20' : '#1A1008',
          }}
        >
          {pkg.featured ? 'Book via WhatsApp' : 'Enquire via WhatsApp'}
        </a>
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  card: {
    background: '#fff', borderRadius: 6, overflow: 'hidden',
    boxShadow: '0 2px 16px rgba(244,123,32,0.1)',
    display: 'flex', flexDirection: 'column',
    border: '1.5px solid #FFD9B8',
  },
  top: { height: 190, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', background: '#1A0808' },
  topBg: { position: 'absolute', inset: 0 },
  stripe: { position: 'absolute', left: 0, right: 0, height: 16 },
  stars: { position: 'absolute', bottom: '1rem', width: '100%', textAlign: 'center', fontSize: '1.2rem', color: '#FFD700', opacity: 0.7 },
  badge: {
    position: 'relative', zIndex: 2, borderRadius: 2,
    fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.14em',
    textTransform: 'uppercase', padding: '0.3rem 0.85rem', margin: '0.9rem',
  },
  body: { padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' },
  tier: { fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5C5', marginBottom: '0.35rem' },
  name: { fontSize: '1.3rem', fontWeight: 900, textTransform: 'uppercase', color: '#1A1008', marginBottom: '0.4rem', letterSpacing: '0.02em' },
  desc: { fontSize: '0.84rem', color: '#6B5A40', lineHeight: 1.6, marginBottom: '1.1rem' },
  features: { listStyle: 'none', flex: 1, marginBottom: '1.5rem' },
  feature: {
    fontSize: '0.82rem', color: '#1A1008',
    padding: '0.42rem 0', borderBottom: '1px solid #FFF0DC',
    display: 'flex', gap: '0.5rem', alignItems: 'flex-start',
  },
  check: { color: '#4DC44A', fontWeight: 900, flexShrink: 0 },
  cta: {
    display: 'block', textAlign: 'center', textDecoration: 'none',
    padding: '0.8rem', fontSize: '0.7rem', fontWeight: 700,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#fff', borderRadius: 2,
  },
}
