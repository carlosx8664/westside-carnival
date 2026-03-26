import { useState } from 'react'
//import SectionHeader from '@/components/SectionHeader'//
import { buildWaLink, } from '@/lib/utils'
import { WHATSAPP_NUMBER } from '@/data/events'

interface FormData {
  name: string
  phone: string
  pkg: string
  checkIn: string
  checkOut: string
  guests: string
  notes: string
}

const initialForm: FormData = {
  name: '', phone: '', pkg: '', checkIn: '', checkOut: '', guests: '1 guest', notes: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(f => ({ ...f, [field]: e.target.value }))

  const submit = () => {
    let msg = `Hello! Westside Carnival booking enquiry.\n\n`
    msg += `*Name:* ${form.name || 'Not provided'}\n`
    msg += `*Phone:* ${form.phone || 'Not provided'}\n`
    msg += `*Package:* ${form.pkg || 'Not specified'}\n`
    msg += `*Check-in:* ${form.checkIn || 'TBD'}\n`
    msg += `*Check-out:* ${form.checkOut || 'TBD'}\n`
    msg += `*Guests:* ${form.guests}`
    if (form.notes) msg += `\n*Notes:* ${form.notes}`
    window.open(buildWaLink(msg), '_blank')
  }

  return (
    <>
      <div className="page-spacer" />

      <section style={s.section}>
        <div style={s.grid}>

          {/* Left panel */}
          <div style={s.panel}>
            <span style={s.kicker}>Get In Touch</span>
            <h2 style={s.title}>Ready to <em style={{ fontStyle: 'normal', color: '#F47B20' }}>Book?</em></h2>
            <hr style={s.rule} />
            <p style={s.body}>
              Reach us on WhatsApp for the fastest response — or fill in the form and we'll follow up with availability and pricing.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <a
                href={buildWaLink("Hello! I'd like to book accommodation for Westside Carnival.")}
                target="_blank"
                rel="noreferrer"
                style={s.channel}
              >
                <div style={{ ...s.chDot, background: '#25D366' }}>📱</div>
                <div>
                  <p style={s.chLbl}>WhatsApp — fastest response</p>
                  <p style={s.chVal}>Message us now</p>
                </div>
              </a>

              <a href={`tel:+${WHATSAPP_NUMBER}`} style={s.channel}>
                <div style={{ ...s.chDot, background: '#F47B20' }}>📞</div>
                <div>
                  <p style={s.chLbl}>Phone</p>
                  <p style={s.chVal}>+233 000 000 000</p>
                </div>
              </a>

              <p style={s.note}>
                Booking confirmed only after payment is received and verified. We respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={s.formWrap}>
            <h3 style={s.formTitle}>Accommodation Enquiry</h3>

            <div style={s.row}>
              <Field label="Full Name">
                <input type="text" placeholder="Your name" value={form.name} onChange={update('name')} style={s.input} />
              </Field>
              <Field label="Phone / WhatsApp">
                <input type="tel" placeholder="+233 ..." value={form.phone} onChange={update('phone')} style={s.input} />
              </Field>
            </div>

            <Field label="Preferred Package">
              <select value={form.pkg} onChange={update('pkg')} style={s.input}>
                <option value="">Select a package</option>
                <option>Standard Stay (Guest House)</option>
                <option>Carnival Classic (Hotel)</option>
                <option>VIP Experience (Premium Hotel)</option>
                <option>Not sure — need advice</option>
              </select>
            </Field>

            <div style={s.row}>
              <Field label="Check-in Date">
                <input type="date" value={form.checkIn} onChange={update('checkIn')} style={s.input} />
              </Field>
              <Field label="Check-out Date">
                <input type="date" value={form.checkOut} onChange={update('checkOut')} style={s.input} />
              </Field>
            </div>

            <Field label="Number of Guests">
              <select value={form.guests} onChange={update('guests')} style={s.input}>
                {['1 guest','2 guests','3 guests','4 guests','5+ guests'].map(g => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </Field>

            <Field label="Notes (optional)">
              <textarea
                placeholder="Any special requirements..."
                value={form.notes}
                onChange={update('notes')}
                style={{ ...s.input, minHeight: 80, resize: 'vertical' }}
              />
            </Field>

            <button onClick={submit} className="btn-orange" style={{ width: '100%', marginTop: '0.3rem', border: 'none' }}>
              Send Enquiry via WhatsApp →
            </button>
            <p style={s.micro}>Opens WhatsApp with your details pre-filled for a fast reply.</p>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{
        display: 'block', fontSize: '0.6rem', fontWeight: 700,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: '#6B5A40', marginBottom: '0.4rem',
      }}>
        {label}
      </label>
      {children}
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  section: { background: '#FFF5E8', padding: '5rem 2rem' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: 1200, margin: '0 auto', alignItems: 'start' },
  panel: { background: '#1A1008', padding: '2.5rem', borderRadius: 4 },
  kicker: { fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(244,123,32,0.7)', display: 'block', marginBottom: '0.8rem' },
  title: { fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, marginBottom: '0.8rem' },
  rule: { border: 'none', borderTop: '4px solid #F47B20', width: 50, marginBottom: '1.2rem' },
  body: { fontFamily: "'Lora', serif", fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 },
  channel: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', marginBottom: '0.9rem', borderRadius: 3 },
  chDot: { width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 },
  chLbl: { fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' },
  chVal: { fontSize: '0.92rem', fontWeight: 700, color: '#fff', marginTop: '0.1rem' },
  note: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', fontStyle: 'italic', lineHeight: 1.65, marginTop: '1rem' },
  formWrap: { background: '#fff', padding: '2.5rem', borderRadius: 6, boxShadow: '0 2px 16px rgba(244,123,32,0.08)', border: '1.5px solid #FFD9B8' },
  formTitle: { fontSize: '1.15rem', fontWeight: 900, textTransform: 'uppercase', color: '#1A1008', marginBottom: '1.5rem', letterSpacing: '0.04em' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  input: {
    width: '100%', padding: '0.7rem 0.9rem',
    border: '1.5px solid #FFD9B8', background: '#fff', color: '#1A1008',
    fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem',
    outline: 'none', borderRadius: 3, WebkitAppearance: 'none' as const,
  },
  micro: { fontSize: '0.7rem', color: '#6B5A40', marginTop: '0.6rem' },
}
