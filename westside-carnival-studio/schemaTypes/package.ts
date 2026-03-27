import { defineField, defineType } from 'sanity'

export const accommodationPackage = defineType({
  name: 'package',
  title: 'Accommodation Package',
  type: 'document',
  icon: () => '🏨',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      description: 'e.g. Carnival Classic',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tier',
      title: 'Tier Label',
      type: 'string',
      description: 'e.g. Hotel Package — shown above the name in small caps',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type Subtitle',
      type: 'string',
      description: 'e.g. Hotel — the full experience',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Included Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each line becomes a checkmark bullet on the card',
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'featured',
      title: 'Featured (Most Popular)',
      type: 'boolean',
      description: 'Highlights this card with an orange border',
      initialValue: false,
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      description: 'e.g. ★ Most Popular',
    }),
    defineField({
      name: 'badgeBg',
      title: 'Badge Background Colour',
      type: 'string',
      description: 'CSS hex e.g. #F47B20',
    }),
    defineField({
      name: 'badgeColor',
      title: 'Badge Text Colour',
      type: 'string',
      description: 'CSS hex e.g. #ffffff',
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'WhatsApp Pre-fill Message',
      type: 'string',
      description: 'Message sent when guest taps "Book via WhatsApp"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: '1 = Standard, 2 = Classic, 3 = VIP',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'tier' },
  },
})