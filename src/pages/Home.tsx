import HeroSlider from '@/components/HeroSlider'
import CountdownBar from '@/components/CountdownBar'
import EventBand from '@/components/EventBand'
import EventCard from '@/components/EventCard'
import CtaBand from '@/components/CtaBand'
import SectionHeader from '@/components/SectionHeader'
import { carnivalEvents } from '@/data/events'
import { Link } from 'react-router-dom'

export default function Home() {
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
        <div style={s.grid}>
          {carnivalEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
        </div>
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
