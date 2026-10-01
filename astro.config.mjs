// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
			{
				label: 'Inicio',
				link: '/',
			},
			{
				label: 'Guías de Herramientas',
				items: [
				{ label: 'Lutris', link: '/guias/lutris/' },
				{ label: 'Wine y Proton', link: '/guias/wine/' },
				],
			},
			{
				label: 'Juegos Testeados',
				items: [
				{ label: 'Cyberpunk 2077', link: '/juegos/cyberpunk/' },
				{ label: 'League of Legends', link: '/juegos/lol/' },
				],
			},
			],
		}),
	],
});
