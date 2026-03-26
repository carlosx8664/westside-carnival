import SectionHeader from '@/components/SectionHeader'
import { buildWaLink } from '@/lib/utils'

const steps = [
  {
    num: '01',
    title: 'View Options',
    desc: 'Browse our available hotels, guest houses, and packages on this page or in our WhatsApp Business catalog.',
  },
  {
    num: '02',
    title: 'Send Your Request',
    desc: 'Message us with your preferred package, check-in and check-out dates, and number of guests.',
  },
  {
    num: '03',
    title: 'Confirm & Pay',
    desc: 'We confirm availability and send payment details. Your booking is secured after payment is verified.',
  },
  {
    num: '04',
    title: 'Get Confirmation',
    desc: 'Receive your official booking confirmation via WhatsApp. You\'re ready for Carnival!',
  },
]

export default function Booking() {
  return (
    <>
      <div className="page-spacer" />

      <section style={{ background: '#FFF5E8', padding: '0 2rem 5rem' }}>
        <div className="sw">
          <SectionHeader
            kicker="Simple & Secure"
            title={<>How to <em>Book</em></>}
          />
          <div style={s.stepsGrid}>
            {steps.map(step => (
              <div key={step.num} style={s.step}>
                <div style={s.num}>{step.num}</div>
                <h4 style={s.title}>{step.title}</h4>
                <p style={s.desc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important note + quick book */}
      <section style={{ background: '#1A1008', padding: '5rem 2rem' }}>
        <div style={s.noteGrid}>
          <div style={s.noteBox}>
            <p style={s.noteLabel}>Please Note</p>
            <p style={s.noteText}>
              Booking is only confirmed after payment has been received and verified.
              We respond to all enquiries within 24 hours.
            </p>
          </div>
          <div style={s.quickBook}>
            <h3 style={s.quickTitle}>Ready to Book?</h3>
            <p style={s.quickSub}>
              The fastest way to book is directly on WhatsApp. Tap below and we'll get back to you right away.
            </p>
            <a
              href={buildWaLink("Hello! I'd like to make a booking enquiry for Westside Carnival.")}
              target="_blank"
              rel="noreferrer"
              style={s.waBtn}
            >
              📱 &nbsp; Open WhatsApp &amp; Start Booking
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div className="sw">
          <SectionHeader kicker="FAQs" title={<>Common <em>Questions</em></>} />
          <div style={s.faqs}>
            {faqs.map(faq => (
              <div key={faq.q} style={s.faq}>
                <h4 style={s.faqQ}>{faq.q}</h4>
                <p style={s.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const faqs = [
  { q: 'When is Westside Carnival 2026?', a: '24th–26th December 2026, at Market Circle, Liberation Road, Takoradi.' },
  { q: 'Is it free to attend?', a: 'Yes! The street carnival is free entry. Accommodation packages are separate and require booking.' },
  { q: 'How do I pay?', a: 'After we confirm availability, we send you payment details. Booking is secured once payment is verified.' },
  { q: 'Can I get a refund?', a: 'Please contact us on WhatsApp to discuss cancellations. We handle each case individually.' },
  { q: 'Who organises the carnival?', a: 'Westside Carnival is a Skyy Media Group event, organised by Skyy Power FM, with MTN as headline sponsor.' },
]

const s: Record<string, React.CSSProperties> = {
  stepsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    border: '2px solid #FFD9B8', marginTop: '2rem',
  },
  step: {
    padding: '2.5rem 2rem', borderRight: '2px solid #FFD9B8',
  },
  num: { fontSize: '2.8rem', fontWeight: 900, color: '#F47B20', lineHeight: 1, marginBottom: '1rem' },
  title: { fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1A1008', marginBottom: '0.6rem' },
  desc: { fontSize: '0.86rem', color: '#6B5A40', lineHeight: 1.65 },
  noteGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: 1200, margin: '0 auto', alignItems: 'center' },
  noteBox: { background: 'rgba(244,123,32,0.1)', border: '1px solid rgba(244,123,32,0.3)', padding: '2rem 2.2rem' },
  noteLabel: { fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F47B20', marginBottom: '0.8rem' },
  noteText: { fontFamily: "'Lora', serif", fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.65, color: 'rgba(255,255,255,0.65)' },
  quickBook: {},
  quickTitle: { fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' },
  quickSub: { fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.5rem' },
  waBtn: {
    display: 'inline-flex', alignItems: 'center',
    background: '#075E54', color: '#fff', textDecoration: 'none',
    padding: '1.1rem 2rem', fontSize: '0.72rem', fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 2,
  },
  faqs: { display: 'flex', flexDirection: 'column', gap: '0', marginTop: '1rem' },
  faq: { padding: '1.5rem 0', borderBottom: '1px solid #FFD9B8' },
  faqQ: { fontSize: '0.95rem', fontWeight: 700, color: '#1A1008', marginBottom: '0.5rem' },
  faqA: { fontSize: '0.9rem', color: '#6B5A40', lineHeight: 1.65 },
}
