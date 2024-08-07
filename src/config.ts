import { z } from 'zod'

const ConfigSchema = z.object({
  sidebar: z.object({
    items: z.array(
      z.object({
        label: z.string(),
        path: z.string(),
        iconName: z.string(),
        iconNamespace: z.string().optional(),
      })
    ),
    account: z.object({
      options: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      ),
    }),
  }),
})

export type Config = z.infer<typeof ConfigSchema>

export const config = ConfigSchema.parse({
  sidebar: {
    items: [
      {
        label: 'Home',
        path: '/layout/home',
        iconName: 'home',
      },
      {
        label: 'Setting',
        path: '/layout/setting',
        iconName: 'cog',
      },
    ],
    account: {
      options: [
        {
          label: 'Switch Theme',
          value: 'switch-theme',
        },
        {
          label: 'Sign Out',
          value: 'sign-out',
        },
      ],
    },
  },
} satisfies Config)
