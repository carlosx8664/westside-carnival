import { useEffect, useState } from 'react'
import EventCard from '@/components/EventCard'
import CtaBand from '@/components/CtaBand'
import SectionHeader from '@/components/SectionHeader'
import { client, urlFor } from '@/lib/sanityClient'
import { EVENTS_QUERY } from '@/lib/queries'

export default function Events() {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(EVENTS_QUERY)
      .then(data => { setEvents(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

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

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
            Loading events...
          </div>
        ) : (
          <div style={s.grid}>
            {events.map(ev => (
              <EventCard
                key={ev._id}
                event={{
                  id: ev._id,
                  title: ev.title,
                  day: ev.day,
                  venue: ev.venue,
                  description: ev.description,
                  tag: ev.tag,
                  image: ev.image ? urlFor(ev.image).width(600).url() : '',
                }}
              />
            ))}
          </div>
        )}
      </section>

      {/* Schedule table */}
      <section style={{ background: 'var(--light-bg)', padding: '4rem 2rem' }}>
        <div className="sw">
          <SectionHeader kicker="Programme" title={<>Event <em>Schedule</em></>} alignLeft />
          <div style={s.schedule}>
            {events.map(ev => (
              <div key={ev._id} style={s.scheduleRow}>
                <div style={s.scheduleDay}>{ev.day}</div>
                <div style={s.scheduleInfo}>
                  <h4 style={s.scheduleTitle}>{ev.title}</h4>
                  <p style={s.scheduleVenue}>📍 {ev.venue}</p>
                  <p style={s.scheduleDesc}>{ev.description}</p>
                </div>
                <div style={{
                  ...s.scheduleBadge,
                  background: ev.badgeBg ?? '#F47B20',
                  color: ev.badgeColor ?? '#fff'
                }}>
                  {ev.tag}
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
