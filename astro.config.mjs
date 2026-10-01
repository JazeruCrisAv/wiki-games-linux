// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
		title: 'Wiki Games Linux',
		customCss: [
        './src/styles/custom.css',
		],
		sidebar: [
			{
			label: 'Guías Básicas',
			items: [
				// Aquí irían tus archivos sobre conceptos básicos
			],
			},
			{
			label: 'Lista de Juegos',
			items: [
				{ label: 'Counter-Strike 2', link: '/juegos/csgo/' },
			],
			},
		],
		}),
	],
});
