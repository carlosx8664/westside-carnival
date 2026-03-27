export const HERO_SLIDES_QUERY = `
  *[_type == "heroSlide"] | order(order asc) {
    _id, slideType, image, videoUrl, overlayColor, overlayImage,
    hideText, badge, titleLine1, titleLine2, titleLine3,
    subtitle, cta1Label, cta1Link, cta2Label, cta2Link,
    objectPosition
  }
`

export const EVENTS_QUERY = `
  *[_type == "carnivalEvent"] | order(order asc) {
    _id, title, date, day, venue, description, image, tag
  }
`

export const PACKAGES_QUERY = `
  *[_type == "package"] | order(order asc) {
    _id, name, tier, price, description, features, featured
  }
`

export const GALLERY_QUERY = `
  *[_type == "galleryImage"] | order(order asc) {
    _id, title, image, year
  }
`

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    whatsappNumber, countdownDate, eventLocation, sponsors
  }
`

export const ABOUT_QUERY = `
  *[_type == "aboutPage"][0] {
    heading, headingAccent, kicker, body, image, stats
  }
`
