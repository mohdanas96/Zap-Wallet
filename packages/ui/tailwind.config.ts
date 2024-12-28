import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'

const config: Pick<Config, 'content' | 'presets' | 'prefix'> = {
  content: ['./src/**/*.tsx'],
  prefix: 'ui-',
  presets: [sharedConfig],
}

export default config
