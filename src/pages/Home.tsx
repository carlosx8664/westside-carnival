import { useEffect, useState } from 'react'
import HeroSlider from '@/components/HeroSlider'
import CountdownBar from '@/components/CountdownBar'
import EventBand from '@/components/EventBand'
import EventCard from '@/components/EventCard'
import CtaBand from '@/components/CtaBand'
import SectionHeader from '@/components/SectionHeader'
import { Link } from 'react-router-dom'
import { client, urlFor } from '@/lib/sanityClient'
import { EVENTS_QUERY } from '@/lib/queries'

export default function Home() {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(EVENTS_QUERY)
      .then(data => { setEvents(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <>
      <HeroSlider />
      <div className="stripe-bar" />
      <CountdownBar />
      <EventBand />

      {/* Events preview */}
      <section style={{ background: '#fff', paddingBottom: '5rem' }}>
        <div className="sw">
          <SectionHeader
            kicker="Join the Celebration"
            title={<>What Awaits <em>You</em></>}
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

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/events" className="btn-orange">See All Events</Link>
        </div>
      </section>

      <div className="stripe-bar" />
      <CtaBand />
    </>
  )
}

const s: Record<string, React.CSSProperties> = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.2rem',
    maxWidth: 1300,
    margin: '0 auto',
    padding: '0 2rem',
  },
}
