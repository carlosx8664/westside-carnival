import { useCountdown } from '@/hooks/useCountdown'

export default function CountdownBar() {
  const { days, hours, minutes, seconds } = useCountdown()

  return (
    <div style={s.bar}>
      <span style={s.label}>Gates open in</span>
      <div style={s.units}>
        {[
          { val: days,    lbl: 'Days' },
          { val: hours,   lbl: 'Hours' },
          { val: minutes, lbl: 'Minutes' },
          { val: seconds, lbl: 'Seconds' },
        ].map(({ val, lbl }, i) => (
          <span key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            {i > 0 && <span style={s.sep}>:</span>}
            <span style={s.unit}>
              <span style={s.num}>{val}</span>
              <span style={s.unitLabel}>{lbl}</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  bar: {
    background: '#F47B20', padding: '1.2rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexWrap: 'wrap', gap: '1rem',
  },
  label: { fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' },
  units: { display: 'flex', gap: '0.3rem', alignItems: 'center' },
  unit: { textAlign: 'center', minWidth: 56, display: 'flex', flexDirection: 'column', alignItems: 'center' },
  num: { fontSize: '2.2rem', fontWeight: 900, color: '#fff', lineHeight: 1, display: 'block' },
  sep: { fontSize: '1.8rem', fontWeight: 900, color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' },
  unitLabel: { fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' },
}
