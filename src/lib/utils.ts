import { WHATSAPP_NUMBER } from '@/data/events'

export function buildWaLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function getImageUrl(name: string): string {
  const images: Record<string, string> = {
    parade:   new URL('../assets/parade.png',   import.meta.url).href,
    costume:  new URL('../assets/costume.png',  import.meta.url).href,
    drums:    new URL('../assets/drums.png',    import.meta.url).href,
    dancers:  new URL('../assets/dancers.png',  import.meta.url).href,
    group:    new URL('../assets/group.png',    import.meta.url).href,
    kids:     new URL('../assets/kids.png',     import.meta.url).href,
    nero:     new URL('../assets/nero.png',     import.meta.url).href,
    waakye:   new URL('../assets/waakye.png',   import.meta.url).href,
    poster25: new URL('../assets/poster25.png', import.meta.url).href,
    logo:     new URL('../assets/logo.png',     import.meta.url).href,
  }
  return images[name] ?? ''
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
