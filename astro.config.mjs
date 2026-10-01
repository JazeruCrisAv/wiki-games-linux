import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
            { label: 'Introducción', link: '/guias/introduccion/' },
          ],
        },
        {
          label: 'Herramientas',
          items: [
            { label: 'Esenciales', link: '/herramientas/' },
            // Agregamos la nueva guía aquí:
            { label: 'Heroic Games Launcher', link: '/herramientas/heroic/' },
          ],
        },
        {
          label: 'Catálogo de Juegos',
          items: [
            { label: 'Counter-Strike 2', link: '/juegos/cs2/' },
          ],
        }
      ],
    }),
  ],
});