import SectionHeader from '@/components/SectionHeader'
import { stats, sponsors } from '@/data/events'
import { getImageUrl } from '@/lib/utils'

export default function About() {
  return (
    <>
      <div className="page-spacer" />

      {/* About hero */}
      <section style={{ background: '#FFF5E8', padding: '5rem 2rem' }}>
        <div style={s.grid}>
          <div style={s.imgWrap}>
            <img src={getImageUrl('dancers')} alt="Westside Carnival masqueraders" style={s.img} />
          </div>
          <div>
            <span style={s.kicker}>Est. 20+ Years · Takoradi</span>
            <h2 style={s.title}>More Than<br />a <em style={{ fontStyle: 'normal', color: '#F47B20' }}>Carnival</em></h2>
            <hr style={s.rule} />
            <p style={s.body}>
              The Westside Carnival — also known as the Ankos or Fancy Dress Carnival — is Takoradi's annual
              Christmas street festival. Held every December 24–26, it draws over 250,000 attendees to Market
              Circle and Liberation Road in the Central Business District.
            </p>
            <p style={{ ...s.body, marginTop: '1rem' }}>
              Featuring masquerade troupes in vibrant multicoloured costumes, brass bands playing highlife,
              acrobatic performances, and samba processions — it is the beating heart of the Western Region.
              Organised by Skyy Media Group and Skyy Power FM, with MTN as headline sponsor.
            </p>
            <p style={{ ...s.body, marginTop: '1rem' }}>
              Our hospitality team ensures every out-of-town guest stays comfortably and celebrates fully.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1A1008', padding: '4.5rem 2rem' }}>
        <div className="sw">
          <SectionHeader kicker="By the Numbers" title={<>The Scale of <em>Westside</em></>} light />
        </div>
        <div style={s.statsRow}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={s.statCell}>
              <div style={{ ...s.statNum, color: ['#F47B20', '#29C5C5', '#4DC44A', '#FFD700'][i] }}>
                {stat.num}
              </div>
              <div style={s.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div className="sw">
          <SectionHeader kicker="Partners & Sponsors" title={<>Proudly <em>Supported By</em></>} />
          <div style={s.sponsorsGrid}>
            {sponsors.map(sp => (
              <div key={sp} style={s.sponsorChip}>{sp}</div>
            ))}
          </div>
          <p style={s.organiser}>
            Westside Carnival is a <strong>Skyy Media Group</strong> event, organised by <strong>Skyy Power FM</strong>.
          </p>
        </div>
      </section>
    </>
  )
}

const s: Record<string, React.CSSProperties> = {
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', maxWidth: 1200, margin: '0 auto', alignItems: 'center' },
  imgWrap: { width: '100%', borderRadius: 8, overflow: 'hidden', aspectRatio: '1' },
  img: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' },
  kicker: { fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#29C5C5', display: 'block', marginBottom: '1rem' },
  title: { fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, textTransform: 'uppercase', color: '#1A1008', lineHeight: 1.1, marginBottom: '1rem' },
  rule: { border: 'none', borderTop: '4px solid #F47B20', width: 50, marginBottom: '1.5rem' },
  body: { fontFamily: "'Lora', serif", fontSize: '1.02rem', lineHeight: 1.82, color: '#3A2A18' },
  statsRow: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 900, margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  statCell: { padding: '2rem 3rem', borderRight: '1px solid rgba(255,255,255,0.08)', flex: 1, minWidth: 160, textAlign: 'center' },
  statNum: { fontSize: '2.8rem', fontWeight: 900, lineHeight: 1 },
  statLabel: { fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '0.35rem' },
  sponsorsGrid: { display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginTop: '1rem' },
  sponsorChip: {
    padding: '0.5rem 1.2rem', border: '1.5px solid #FFD9B8',
    borderRadius: 4, fontSize: '0.8rem', fontWeight: 600, color: '#1A1008',
    background: '#FFF5E8',
  },
  organiser: { textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#6B5A40', lineHeight: 1.65 },
}
