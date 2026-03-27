import { defineField, defineType } from 'sanity'

export const carnivalEvent = defineType({
  name: 'carnivalEvent',
  title: 'Carnival Event',
  type: 'document',
  icon: () => '🎭',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'e.g. Thursday 25th Dec',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'day',
      title: 'Short Day Label',
      type: 'string',
      description: 'e.g. Thu 25th Dec — used on badges',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      description: 'e.g. Carnival FunCity, Liberation Road',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      description: 'Text shown on the event card badge, e.g. Thu 25th Dec',
    }),
    defineField({
      name: 'badgeBg',
      title: 'Badge Background Colour',
      type: 'string',
      description: 'CSS hex colour e.g. #9B59B6',
    }),
    defineField({
      name: 'badgeColor',
      title: 'Badge Text Colour',
      type: 'string',
      description: 'CSS hex colour e.g. #ffffff',
    }),
    defineField({
      name: 'facts',
      title: 'Fact Bullets',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short bullet points shown on the card (3 max)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = appears first',
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
    select: { title: 'title', subtitle: 'date', media: 'image' },
  },
})