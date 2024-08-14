import { GlobalConfig } from 'payload'
import { revalidateTag } from 'next/cache'

export const Navigation: GlobalConfig = {
  slug: 'navMenu',
  label: 'Navigation Menu',
  access: {
    read: () => true,
    update: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        revalidateTag('somewhateverkey')
      },
    ],
  },
  admin: {
    group: 'Configuration',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
