import { defineField, defineType } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  icon: () => '📸',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the photo for accessibility e.g. "Masqueraders parading on Liberation Road"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional — shown on hover',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Which carnival year is this from?',
    }),
    defineField({
      name: 'featured',
      title: 'Feature in Hero Gallery Strip',
      type: 'boolean',
      description: 'Show prominently at the top of the gallery page',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower = appears first',
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
    select: { title: 'alt', subtitle: 'year', media: 'image' },
  },
})