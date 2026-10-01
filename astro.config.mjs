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
            // Agregamos el FAQ aquí:
            { label: 'Preguntas Frecuentes', link: '/guias/faq/' },
          ],
        },
        {
          label: 'Herramientas',
          items: [
            { label: 'Esenciales', link: '/herramientas/' },
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