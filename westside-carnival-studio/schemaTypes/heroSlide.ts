import { defineField, defineType } from 'sanity'

export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  icon: () => '🎞️',
  fields: [
    defineField({
      name: 'slideType',
      title: 'Slide Type',
      type: 'string',
      options: {
        list: [
          { title: '🖼️ Image / PNG', value: 'image' },
          { title: '🎥 Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Background Image / PNG',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ document }) => document?.slideType === 'video',
      description: 'Supports transparent PNGs — background will show through',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Background Video URL (MP4)',
      type: 'url',
      hidden: ({ document }) => document?.slideType !== 'video',
      description: 'Must be a direct MP4 link — YouTube links will NOT work',
    }),
    defineField({
      name: 'overlayImage',
      title: 'Overlay PNG (logo / text graphic)',
      type: 'image',
      options: { hotspot: false },
      hidden: ({ document }) => document?.slideType !== 'video',
      description: 'Transparent PNG shown on top of the video e.g. Westside Carnival text art',
    }),
    defineField({
      name: 'hideText',
      title: 'Hide Title & Subtitle Text',
      type: 'boolean',
      description: 'Enable when using a PNG overlay instead of typed text',
      initialValue: false,
    }),
    defineField({
      name: 'overlayColor',
      title: 'Overlay Darkness',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Light', value: 'light' },
          { title: 'Medium', value: 'medium' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'radio',
      },
      initialValue: 'light',
      description: 'Dark tint over image or video for text readability',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small tag e.g. "Takoradi, Ghana · Est. 20+ Years"',
    }),
    defineField({
      name: 'titleLine1',
      title: 'Title Line 1',
      type: 'string',
      description: 'e.g. Westside',
    }),
    defineField({
      name: 'titleLine2',
      title: 'Title Line 2',
      type: 'string',
      description: 'e.g. Carnival',
    }),
    defineField({
      name: 'titleLine3',
      title: 'Title Line 3',
      type: 'string',
      description: 'e.g. 2026',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
      description: 'Italic text below the headline',
    }),
    defineField({
      name: 'cta1Label',
      title: 'Primary Button Label',
      type: 'string',
      description: 'e.g. Book Accommodation',
    }),
    defineField({
      name: 'cta1Link',
      title: 'Primary Button Link',
      type: 'string',
      description: 'Internal path e.g. /accommodation',
    }),
    defineField({
      name: 'cta2Label',
      title: 'Secondary Button Label',
      type: 'string',
      description: 'e.g. Explore Events',
    }),
    defineField({
      name: 'cta2Link',
      title: 'Secondary Button Link',
      type: 'string',
      description: 'Internal path e.g. /events',
    }),
    defineField({
      name: 'objectPosition',
      title: 'Image Focus',
      type: 'string',
      options: {
        list: [
          { title: 'Centre', value: 'center' },
          { title: 'Top', value: 'top' },
          { title: 'Bottom', value: 'bottom' },
        ],
        layout: 'radio',
      },
      initialValue: 'center',
      hidden: ({ document }) => document?.slideType === 'video',
    }),
    defineField({
      name: 'order',
      title: 'Slide Order',
      type: 'number',
      description: '1 = first slide',
    }),
  ],
  orderings: [
    {
      title: 'Slide Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'titleLine1', subtitle: 'slideType', media: 'image' },
    prepare({ title, subtitle, media }: any) {
      return {
        title: title ?? '(untitled)',
        subtitle: subtitle === 'video' ? '🎥 Video slide' : '🖼️ Image slide',
        media,
      }
    },
  },
})
