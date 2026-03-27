import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: () => '📖',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'e.g. More Than a Carnival',
    }),
    defineField({
      name: 'headingAccent',
      title: 'Heading Accent Word',
      type: 'string',
      description: 'The orange highlighted word e.g. Carnival',
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Main paragraphs about the carnival',
    }),
    defineField({
      name: 'image',
      title: 'About Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string', description: 'e.g. 20+' },
          { name: 'label', title: 'Label', type: 'string', description: 'e.g. Years of Carnival' },
        ],
      }],
    }),
    defineField({
      name: 'kicker',
      title: 'Kicker Text',
      type: 'string',
      description: 'Small text above heading e.g. Est. 20+ Years · Takoradi',
    }),
  ],
})
