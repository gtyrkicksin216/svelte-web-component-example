/**
 * This config file is used to build the library files to be used through a CDN or to be bundled to NPM
 * See the package.json file for the build:lib run script
 */
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	build: {
		lib: {
			entry: './src/main.lib.ts',
			name: 'svelte-web-components', // you would change this to whatever the name of your lib is
		},
	},
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true, // this allows you to use custom elements rather than regular Svelte components
			},
		}),
	],
})
