import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: () => '⚙️',
  // Singleton — only one document of this type
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Digits only, no + symbol e.g. 233244123456',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Displayed as-is e.g. +233 244 123 456',
    }),
    defineField({
      name: 'carnivalDate',
      title: 'Carnival Start Date',
      type: 'datetime',
      description: 'Used for the countdown timer',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'eventYear',
      title: 'Event Year',
      type: 'number',
      description: 'e.g. 2026 — shown in the hero and page titles',
    }),
    defineField({
      name: 'venue',
      title: 'Main Venue',
      type: 'string',
      description: 'e.g. Market Circle, Liberation Road, Takoradi',
    }),
    defineField({
      name: 'organiser',
      title: 'Organiser',
      type: 'string',
      description: 'e.g. Skyy Media Group · Skyy Power FM',
    }),
    defineField({
      name: 'mainSponsor',
      title: 'Main Sponsor',
      type: 'string',
      description: 'e.g. MTN',
    }),
    defineField({
      name: 'sponsors',
      title: 'All Sponsors',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Full list shown in the About page',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
      description: 'Shown in Google search results',
    }),
  ],
  preview: {
    select: { title: 'venue' },
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})