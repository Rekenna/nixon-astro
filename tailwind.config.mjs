const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['PP Neue Montreal', ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				dark: colors.slate[950]
			},
			gridTemplateRows: {
				'[auto,auto,1fr]': 'auto auto 1fr',
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@headlessui/tailwindcss')
	],
}
