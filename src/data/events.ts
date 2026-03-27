export interface CarnivalEvent {
  id: string
  title: string
  date: string
  day: string
  venue: string
  description: string
  badge: string
  badgeColor: string
  badgeBg: string
  image: string
  facts: string[]
}

export interface Package {
  id: string
  tier: string
  name: string
  type?: string
  description: string
  features: string[]
  badge: string
  badgeColor: string
  badgeBg: string
  featured: boolean
  waMessage: string
  price?: number
  whatsapp?: string
}

export const CARNIVAL_DATE = new Date('2026-12-24T06:00:00')

export const WHATSAPP_NUMBER = '233000000000'

export const carnivalEvents: CarnivalEvent[] = [
  {
    id: 'kids-party',
    title: 'Kids Party',
    date: 'Thursday 25th Dec',
    day: 'Thu 25th Dec',
    venue: 'Liberation Road, Takoradi',
    description: 'A fun-filled day for the little ones with bouncy castles, games and entertainment.',
    badge: 'Thu 25th Dec',
    badgeColor: '#fff',
    badgeBg: '#9B59B6',
    image: 'kids',
    facts: ['Bouncy castles & games', 'Liberation Road', 'Family fun day'],
  },
  {
    id: 'nero-x',
    title: 'Nero X Live',
    date: 'Friday 26th Dec',
    day: 'Fri 26th Dec',
    venue: 'Carnival FunCity, Liberation Road',
    description: 'Ghana\'s finest performing live on stage at Carnival FunCity.',
    badge: 'Fri 26th Dec',
    badgeColor: '#1A1008',
    badgeBg: '#FFD700',
    image: 'nero',
    facts: ['Performing live on stage', 'Carnival FunCity', 'Liberation Road'],
  },
  {
    id: 'waakye',
    title: 'Waakye Cooking Competition',
    date: 'Thursday 25th Dec',
    day: 'Thu 25th Dec',
    venue: 'Carnival FunCity, Liberation Road',
    description: 'Sponsored by Tasty Tom — who cooks the best Waakye in Takoradi?',
    badge: 'Thu 25th Dec',
    badgeColor: '#fff',
    badgeBg: '#F47B20',
    image: 'waakye',
    facts: ['Sponsored by Tasty Tom', 'Carnival FunCity', 'Who cooks best?'],
  },
  {
    id: 'parade',
    title: 'Masqueraders Parade',
    date: 'Friday 26th Dec',
    day: 'Fri 26th Dec',
    venue: 'Carnival FunCity, Liberation Road',
    description: 'The main event — 5 masquerade groups compete in colour, costume and dance.',
    badge: 'Fri 26th Dec',
    badgeColor: '#fff',
    badgeBg: '#29C5C5',
    image: 'parade',
    facts: ['5 masquerade groups', 'Liberation Road', 'The main event!'],
  },
]

export const packages: Package[] = [
  {
    id: 'standard',
    tier: 'Budget Stay',
    name: 'Standard Stay',
    type: 'Guest House',
    description: 'Comfortable, affordable accommodation close to carnival grounds.',
    features: [
      'Shared or private room options',
      'Daily breakfast included',
      'Walking distance to main stage',
      'WhatsApp check-in support',
    ],
    badge: 'Guest House',
    badgeColor: '#fff',
    badgeBg: '#29C5C5',
    featured: false,
    waMessage: "Hi! I'd like to enquire about the Standard Stay package for Westside Carnival.",
  },
  {
    id: 'classic',
    tier: 'Hotel Package',
    name: 'Carnival Classic',
    type: 'Hotel — the full experience',
    description: 'Our most popular package — quality hotel with full carnival perks and priority access.',
    features: [
      'En-suite hotel room',
      'Breakfast & dinner daily',
      'Priority carnival entry pass',
      'Shuttle service to grounds',
      'Dedicated booking agent',
    ],
    badge: '★ Most Popular',
    badgeColor: '#fff',
    badgeBg: '#F47B20',
    featured: true,
    waMessage: "Hi! I'd like to book the Carnival Classic package for Westside Carnival.",
  },
  {
    id: 'vip',
    tier: 'Luxury Package',
    name: 'VIP Experience',
    type: 'Premium — nothing left to chance',
    description: 'The ultimate stay — luxury suite, exclusive access, and bespoke concierge.',
    features: [
      'Premium hotel suite',
      'All meals & refreshments',
      'VIP lounge access',
      'Private transfers throughout',
      'Meet & greet with performers',
    ],
    badge: 'Premium',
    badgeColor: '#1A1008',
    badgeBg: '#FFD700',
    featured: false,
    waMessage: "Hi! I'd like to enquire about the VIP Experience package for Westside Carnival.",
  },
]

export const galleryImages = [
  { src: 'parade',   alt: 'Masqueraders Parade at night' },
  { src: 'costume',  alt: 'Carnival costume performer' },
  { src: 'dancers',  alt: 'Masqueraders on parade street' },
  { src: 'group',    alt: 'Carnival group marching' },
  { src: 'poster25', alt: 'Westside Carnival 2025 poster' },
]

export const stats = [
  { num: '250K+', label: 'Attendees per year' },
  { num: '20+',   label: 'Years running' },
  { num: '5',     label: 'Masquerade groups' },
  { num: '3',     label: 'Days of festivities' },
]

export const sponsors = [
  'MTN', 'HnH', 'OmniBSIC Bank', 'Bell Group', 'Tasty Tom',
  'Sonic', 'Skyy 93.5 FM', 'VOX 106.3', 'Star TV',
]
