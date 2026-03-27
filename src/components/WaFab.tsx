import { useEffect, useState } from 'react'
import { client } from '@/lib/sanityClient'
import { SITE_SETTINGS_QUERY } from '@/lib/queries'

export default function WaFab() {
  const [waNumber, setWaNumber] = useState('233000000000')

  useEffect(() => {
    client.fetch(SITE_SETTINGS_QUERY).then(data => {
      if (data?.whatsappNumber) setWaNumber(data.whatsappNumber)
    })
  }, [])

  const message = encodeURIComponent("Hello! I'd like to book accommodation for Westside Carnival.")
  const href = `https://wa.me/${waNumber}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={s.fab}
    >
      <span style={{ fontSize: '1.1rem' }}>📱</span>
      <span style={s.label}>Book on WhatsApp</span>
    </a>
  )
}

const s: Record<string, React.CSSProperties> = {
  fab: {
    position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 400,
    background: '#25D366', color: '#fff', textDecoration: 'none',
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.7rem 1.2rem', borderRadius: 50,
    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
    boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
  },
  label: {},
}
