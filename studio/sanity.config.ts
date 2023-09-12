import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { Logo } from "./plugins/my-logo/Logo";

export default defineConfig({
  name: 'default',
  title: 'Soft Eis',

  projectId: 'g6pzpcgw',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
})
