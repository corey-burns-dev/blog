import tailwind from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			themes: {
				light: "one-dark-pro",
				dark: "material-theme-palenight",
			},
			wrap: true,
		},
	},
	vite: {
		plugins: [tailwind()],
	},
});
