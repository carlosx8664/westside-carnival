import { buildWaLink } from '@/lib/utils'

export default function WaFab() {
  return (
    <a
      href={buildWaLink("Hello! I'd like to book accommodation for Westside Carnival.")}
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
