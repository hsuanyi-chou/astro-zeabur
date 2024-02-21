/** @type {import('tailwindcss').Config} */
export default {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	// daisyui: {
	// 	themes: ["autumn", "dark"],
	// },
	// plugins: [require("daisyui")],
}
