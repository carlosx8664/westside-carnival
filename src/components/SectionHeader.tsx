interface Props {
  kicker: string
  title: React.ReactNode
  sub?: string
  light?: boolean
  alignLeft?: boolean
}

export default function SectionHeader({ kicker, title, sub, light, alignLeft }: Props) {
  return (
    <div style={{ textAlign: alignLeft ? 'left' : 'center', padding: '4rem 0 2.5rem' }}>
      <span style={{
        fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: light ? '#29C5C5' : '#29C5C5',
        display: 'block', marginBottom: '0.5rem',
      }}>
        {kicker}
      </span>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900,
        textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.1,
        color: light ? '#fff' : '#1A1008',
      }}>
        {title}
      </h2>
      <hr style={{
        border: 'none', borderTop: '4px solid #F47B20',
        width: 50, margin: alignLeft ? '0.9rem 0 0' : '0.9rem auto 0',
      }} />
      {sub && (
        <p style={{
          fontFamily: "'Lora', serif", fontStyle: 'italic',
          fontSize: '1.02rem', color: light ? 'rgba(255,255,255,0.55)' : '#6B5A40',
          marginTop: '0.8rem', maxWidth: 580,
          marginInline: alignLeft ? '0' : 'auto', lineHeight: 1.65,
        }}>
          {sub}
        </p>
      )}
    </div>
  )
}
