import {defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
    {
      name: 'linkToGithub',
      title: 'LinkToGithub',
      type: 'url',
    },
    {
      name: "id",
      title: 'Id',
      type: 'number'
    }
  ],
})
