import React from 'react'

interface EventProp {
  id: string
  title: string
  day?: string
  venue?: string
  description?: string
  tag?: string
  image?: string
  // legacy fields — optional so old data doesn't break
  facts?: string[]
  badge?: string
  badgeBg?: string
  badgeColor?: string
}

interface Props {
  event: EventProp
}

export default function EventCard({ event }: Props) {
  // Build facts from Sanity fields if legacy facts array is missing
  const facts: string[] = event.facts ?? [
    event.day,
    event.venue,
  ].filter(Boolean) as string[]

  const badge = event.badge ?? event.tag ?? ''
  const badgeBg = event.badgeBg ?? '#F47B20'
  const badgeColor = event.badgeColor ?? '#fff'

  return (
    <div style={s.card}>
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          style={s.img}
        />
      )}
      <div style={s.overlay} />
      <span style={{ ...s.badge, background: badgeBg, color: badgeColor }}>
        {badge}
      </span>
      <div style={s.body}>
        <h3 style={s.title}>{event.title}</h3>
        <ul style={s.facts}>
          {facts.map(f => (
            <li key={f} style={s.fact}>
              <span style={s.dash}>—</span> {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  card: {
    position: 'relative', overflow: 'hidden', borderRadius: 6,
    display: 'block', aspectRatio: '0.85 / 1', background: '#1A1008',
    cursor: 'pointer',
  },
  img: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%', objectFit: 'cover',
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(26,16,8,0.96) 0%, rgba(26,16,8,0.25) 55%, transparent 100%)',
  },
  badge: {
    position: 'absolute', top: '1rem', left: '1rem', zIndex: 3,
    fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.14em',
    textTransform: 'uppercase', padding: '0.3rem 0.8rem', borderRadius: 2,
  },
  body: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    padding: '2rem 1.5rem', zIndex: 2,
  },
  title: {
    fontSize: '1.35rem', fontWeight: 900, textTransform: 'uppercase',
    color: '#fff', marginBottom: '0.5rem', lineHeight: 1.1, letterSpacing: '0.02em',
  },
  facts: { listStyle: 'none' },
  fact: {
    fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.2rem',
    display: 'flex', gap: '0.4rem',
  },
  dash: { color: '#FFD700' },
}
