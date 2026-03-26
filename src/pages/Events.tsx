import EventCard from '@/components/EventCard'
import CtaBand from '@/components/CtaBand'
import SectionHeader from '@/components/SectionHeader'
import { carnivalEvents } from '@/data/events'

export default function Events() {
  return (
    <>
      <div className="page-spacer" />

      <section style={{ background: '#fff', paddingBottom: '5rem' }}>
        <div className="sw">
          <SectionHeader
            kicker="Westside Carnival 2026"
            title={<>What Awaits <em>You</em></>}
            sub="From the Kids Party to the Grand Masqueraders Parade — three days of non-stop celebration in Takoradi."
          />
        </div>
        <div style={s.grid}>
          {carnivalEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
        </div>
      </section>

      {/* Schedule table */}
      <section style={{ background: 'var(--light-bg)', padding: '4rem 2rem' }}>
        <div className="sw">
          <SectionHeader kicker="Programme" title={<>Event <em>Schedule</em></>} alignLeft />
          <div style={s.schedule}>
            {carnivalEvents.map(ev => (
              <div key={ev.id} style={s.scheduleRow}>
                <div style={s.scheduleDay}>{ev.day}</div>
                <div style={s.scheduleInfo}>
                  <h4 style={s.scheduleTitle}>{ev.title}</h4>
                  <p style={s.scheduleVenue}>📍 {ev.venue}</p>
                  <p style={s.scheduleDesc}>{ev.description}</p>
                </div>
                <div style={{ ...s.scheduleBadge, background: ev.badgeBg, color: ev.badgeColor }}>
                  {ev.badge}
                </div>
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

const s: Record<string, React.CSSProperties> = {
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.2rem', maxWidth: 1300, margin: '0 auto', padding: '0 2rem',
  },
  schedule: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' },
  scheduleRow: {
    display: 'grid', gridTemplateColumns: '160px 1fr auto',
    gap: '2rem', alignItems: 'center',
    background: '#fff', padding: '1.5rem 2rem', borderRadius: 6,
    border: '1.5px solid #FFD9B8',
  },
  scheduleDay: { fontSize: '0.75rem', fontWeight: 700, color: '#F47B20', textTransform: 'uppercase', letterSpacing: '0.08em' },
  scheduleInfo: {},
  scheduleTitle: { fontSize: '1.1rem', fontWeight: 900, color: '#1A1008', textTransform: 'uppercase', marginBottom: '0.3rem' },
  scheduleVenue: { fontSize: '0.82rem', color: '#6B5A40', marginBottom: '0.3rem' },
  scheduleDesc: { fontSize: '0.88rem', color: '#6B5A40', lineHeight: 1.6 },
  scheduleBadge: {
    fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.14em',
    textTransform: 'uppercase', padding: '0.3rem 0.8rem', borderRadius: 2, whiteSpace: 'nowrap',
  },
}
