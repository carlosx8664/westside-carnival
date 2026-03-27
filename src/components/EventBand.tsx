import { useEffect, useState } from 'react'
import { client } from '@/lib/sanityClient'
import { SITE_SETTINGS_QUERY } from '@/lib/queries'

export default function EventBand() {
  const [settings, setSettings] = useState<any>(null)

  useEffect(() => {
    client.fetch(SITE_SETTINGS_QUERY).then(setSettings)
  }, [])

  const location = settings?.eventLocation ?? 'Market Circle, Liberation Road, Takoradi'
  const sponsors = settings?.sponsors ?? ['MTN']
  const mainSponsor = sponsors[0] ?? 'MTN'

  const items = [
    { icon: '📅', text: '24th – 26th December 2026' },
    { icon: '📍', text: location },
    { icon: '🎪', text: 'Free Entry' },
    { icon: '🏨', text: 'Official Accommodation Available' },
  ]

  return (
    <>
      <div style={s.orgBand}>
        <span style={s.orgLabel}>Organised by</span>
        <span style={s.orgVal}>Skyy Media Group · Skyy Power FM</span>
        <span style={s.sep}>|</span>
        <span style={s.orgLabel}>Main Sponsor</span>
        <span style={{ ...s.orgVal, color: '#FFD700' }}>{mainSponsor}</span>
      </div>
      <div style={s.band}>
        {items.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            {i > 0 && <span style={s.divider}>|</span>}
            <span style={s.item}>
              {item.icon} <strong style={{ color: '#FFD700' }}>{item.text}</strong>
            </span>
          </span>
        ))}
      </div>
    </>
  )
}

const s: Record<string, React.CSSProperties> = {
  orgBand: {
    background: '#1A1008', padding: '0.6rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '1rem', flexWrap: 'wrap',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  orgLabel: { fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' },
  orgVal: { fontSize: '0.78rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' },
  sep: { color: 'rgba(255,255,255,0.15)' },
  band: {
    background: '#1A1008', padding: '0.85rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '1rem', flexWrap: 'wrap',
  },
  item: { fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' },
  divider: { color: 'rgba(255,255,255,0.15)' },
}
