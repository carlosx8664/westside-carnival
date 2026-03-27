import { useEffect, useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import { client, urlFor } from '@/lib/sanityClient'
import { ABOUT_QUERY, SITE_SETTINGS_QUERY } from '@/lib/queries'
import { PortableText } from '@portabletext/react'

const statColors = ['#F47B20', '#29C5C5', '#4DC44A', '#FFD700']

export default function About() {
  const [about, setAbout] = useState<any>(null)
  const [settings, setSettings] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      client.fetch(ABOUT_QUERY),
      client.fetch(SITE_SETTINGS_QUERY),
    ]).then(([a, s]) => {
      setAbout(a)
      setSettings(s)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  if (loading) return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#6B5A40', letterSpacing: '0.2em', fontSize: '0.8rem' }}>LOADING...</p>
    </div>
  )

  const sponsors = settings?.sponsors ?? []
  const stats = about?.stats ?? []

  return (
    <>
      <div className="page-spacer" />

      {/* About hero */}
      <section style={{ background: '#FFF5E8', padding: '5rem 2rem' }}>
        <div style={s.grid}>
          <div style={s.imgWrap}>
            {about?.image && (
              <img
                src={urlFor(about.image).width(900).url()}
                alt="Westside Carnival masqueraders"
                style={s.img}
              />
            )}
          </div>
          <div>
            {about?.kicker && <span style={s.kicker}>{about.kicker}</span>}
            {about?.heading && (
              <h2 style={s.title}>
                {about.heading}<br />
                {about?.headingAccent && (
                  <em style={{ fontStyle: 'normal', color: '#F47B20' }}>
                    {about.headingAccent}
                  </em>
                )}
              </h2>
            )}
            <hr style={s.rule} />
            {about?.body && (
              <div style={s.body}>
                <PortableText value={about.body} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      {stats.length > 0 && (
        <section style={{ background: '#1A1008', padding: '4.5rem 2rem' }}>
          <div className="sw">
            <SectionHeader kicker="By the Numbers" title={<>The Scale of <em>Westside</em></>} light />
          </div>
          <div style={s.statsRow}>
            {stats.map((stat: any, i: number) => (
              <div key={stat.label} style={s.statCell}>
                <div style={{ ...s.statNum, color: statColors[i % statColors.length] }}>
                  {stat.value}
                </div>
                <div style={s.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sponsors */}
      {sponsors.length > 0 && (
        <section style={{ background: '#fff', padding: '5rem 2rem' }}>
          <div className="sw">
            <SectionHeader kicker="Partners & Sponsors" title={<>Proudly <em>Supported By</em></>} />
            <div style={s.sponsorsGrid}>
              {sponsors.map((sp: string) => (
                <div key={sp} style={s.sponsorChip}>{sp}</div>
              ))}
            </div>
            <p style={s.organiser}>
              Westside Carnival is a <strong>Skyy Media Group</strong> event, organised by <strong>Skyy Power FM</strong>.
            </p>
          </div>
        </section>
      )}
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
